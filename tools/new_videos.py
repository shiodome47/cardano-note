#!/usr/bin/env python3
"""各チャンネルの RSS を読んで、まだ episodes/ にない動画を列挙する。

    python3 tools/new_videos.py            # 4 チャンネル全部
    python3 tools/new_videos.py midnight   # 1 チャンネルだけ（shared/series.yml のキー）

見ているもの:
- shared/series.yml の channel_id から YouTube の RSS
  （https://www.youtube.com/feeds/videos.xml?channel_id=...）を取る。直近 15 本ほどが返る
- episodes/*/meta.yml の video: に出てくる動画 ID を「追加済み」とみなす

出力は新しい順。追加済みの動画は出さない。RSS には配信予定（まだ公開されていないライブ）も
混ざることがあるので、URL を開いて確かめること。

新しいチャンネルを足したときは series.yml に channel_id を書く（チャンネルページの HTML の
"externalId"、または動画の URL から oEmbed で author_url を引いて調べる）。
"""

import pathlib
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET

ROOT = pathlib.Path(__file__).resolve().parent.parent
FEED = "https://www.youtube.com/feeds/videos.xml?channel_id=%s"
NS = {"a": "http://www.w3.org/2005/Atom", "yt": "http://www.youtube.com/xml/schemas/2015"}


def read_series():
    series, cur = {}, None
    for line in (ROOT / "shared" / "series.yml").read_text().split("\n"):
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        if not line[0].isspace():
            cur = line.split(":")[0].strip()
            series[cur] = {}
        elif cur:
            k, _, v = line.strip().partition(":")
            series[cur][k.strip()] = v.split(" #")[0].strip()
    return series


def known_video_ids():
    ids = set()
    for meta in ROOT.glob("episodes/*/meta.yml"):
        for m in re.finditer(r"^video:\s*(\S+)", meta.read_text(), re.M):
            v = re.search(r"(?:v=|/live/|youtu\.be/)([A-Za-z0-9_-]{11})", m.group(1))
            if v:
                ids.add(v.group(1))
    return ids


def fetch(channel_id):
    req = urllib.request.Request(FEED % channel_id, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        root = ET.fromstring(r.read())
    out = []
    for e in root.findall("a:entry", NS):
        out.append({
            "id": e.findtext("yt:videoId", "", NS),
            "title": e.findtext("a:title", "", NS),
            "published": e.findtext("a:published", "", NS)[:10],
        })
    return out


def main(argv):
    series = read_series()
    keys = argv or [k for k, v in series.items() if v.get("channel_id")]
    known = known_video_ids()
    found = 0
    for key in keys:
        spec = series.get(key)
        if not spec or not spec.get("channel_id"):
            print("%s: series.yml に channel_id がない" % key)
            continue
        try:
            entries = fetch(spec["channel_id"])
        except Exception as e:      # ネットワークの失敗はそのチャンネルだけ飛ばす
            print("%s: RSS を取れなかった（%s）" % (key, e))
            continue
        new = [v for v in entries if v["id"] not in known]
        print("== %s（%s）— 未追加 %d 本 / RSS %d 本" % (spec.get("title_ja", key), key, len(new), len(entries)))
        for v in new:
            print("  %s  %s\n      https://www.youtube.com/watch?v=%s" % (v["published"], v["title"], v["id"]))
        found += len(new)
    print("\n未追加の動画: %d 本" % found)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
