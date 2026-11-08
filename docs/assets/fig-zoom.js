// 図（.fig の SVG）をタップすると全画面で開き、ピンチ・ドラッグ・ホイール・
// ダブルタップで拡大縮小できるようにする。依存なし。色はすべて CSS 変数経由。
(function () {
  'use strict';
  if (!window.PointerEvent) return;

  var overlay = null, stage = null, svg = null;
  var scale = 1, tx = 0, ty = 0, base = 1;
  var pointers = {}, lastDist = 0, lastMid = null, lastTap = 0, dragging = false;
  var opener = null;

  function label(ja, en) {
    return '<span class="l-ja">' + ja + '</span><span class="l-en">' + en + '</span>';
  }

  function build() {
    overlay = document.createElement('div');
    overlay.className = 'figzoom';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', '図の拡大表示 / Enlarged figure');
    overlay.hidden = true;
    overlay.innerHTML =
      '<div class="figzoom-bar">' +
        '<span class="figzoom-hint">' + label('ピンチ・ドラッグ・ダブルタップで拡大縮小', 'Pinch, drag or double-tap to zoom') + '</span>' +
        '<button type="button" class="figzoom-btn" data-act="out" aria-label="縮小 / Zoom out">−</button>' +
        '<button type="button" class="figzoom-btn" data-act="in" aria-label="拡大 / Zoom in">+</button>' +
        '<button type="button" class="figzoom-btn" data-act="reset" aria-label="元の大きさ / Reset">1:1</button>' +
        '<button type="button" class="figzoom-btn figzoom-close" data-act="close" aria-label="閉じる / Close">✕</button>' +
      '</div>' +
      '<div class="figzoom-stage"></div>';
    document.body.appendChild(overlay);
    stage = overlay.querySelector('.figzoom-stage');

    overlay.addEventListener('click', function (e) {
      var b = e.target.closest('[data-act]');
      if (!b) return;
      var act = b.getAttribute('data-act');
      if (act === 'close') close();
      else if (act === 'reset') { setTransform(1, 0, 0); }
      else zoomAt(act === 'in' ? 1.5 : 1 / 1.5, stage.clientWidth / 2, stage.clientHeight / 2);
    });
    stage.addEventListener('pointerdown', onDown);
    stage.addEventListener('pointermove', onMove);
    stage.addEventListener('pointerup', onUp);
    stage.addEventListener('pointercancel', onUp);
    stage.addEventListener('wheel', function (e) {
      e.preventDefault();
      var r = stage.getBoundingClientRect();
      zoomAt(e.deltaY < 0 ? 1.15 : 1 / 1.15, e.clientX - r.left, e.clientY - r.top);
    }, { passive: false });
    document.addEventListener('keydown', function (e) {
      if (overlay.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === '+' || e.key === '=') zoomAt(1.3, stage.clientWidth / 2, stage.clientHeight / 2);
      else if (e.key === '-') zoomAt(1 / 1.3, stage.clientWidth / 2, stage.clientHeight / 2);
    });
  }

  function setTransform(s, x, y) {
    scale = Math.min(Math.max(s, 1), 8);
    // 画面からはみ出し過ぎないように平行移動を制限する
    var w = svg.clientWidth * scale, h = svg.clientHeight * scale;
    var sw = stage.clientWidth, sh = stage.clientHeight;
    var minX = Math.min(0, sw - w), minY = Math.min(0, sh - h);
    tx = Math.min(Math.max(x, minX), Math.max(0, (sw - w) / 2) || 0);
    ty = Math.min(Math.max(y, minY), Math.max(0, (sh - h) / 2) || 0);
    if (w <= sw) tx = (sw - w) / 2;
    if (h <= sh) ty = (sh - h) / 2;
    svg.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + scale + ')';
  }

  function zoomAt(factor, cx, cy) {
    var ns = Math.min(Math.max(scale * factor, 1), 8);
    var k = ns / scale;
    setTransform(ns, cx - (cx - tx) * k, cy - (cy - ty) * k);
  }

  function count() { var n = 0; for (var k in pointers) n++; return n; }

  function onDown(e) {
    stage.setPointerCapture(e.pointerId);
    pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
    if (count() === 2) {
      var p = pts(); lastDist = dist(p); lastMid = mid(p);
    } else if (count() === 1) {
      var now = Date.now();
      if (now - lastTap < 300) {
        var r = stage.getBoundingClientRect();
        if (scale > 1.01) setTransform(1, 0, 0);
        else zoomAt(2.5, e.clientX - r.left, e.clientY - r.top);
        lastTap = 0;
      } else lastTap = now;
      dragging = true;
    }
  }
  function onMove(e) {
    if (!pointers[e.pointerId]) return;
    var prev = pointers[e.pointerId];
    pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
    if (count() === 2) {
      var p = pts(), d = dist(p), m = mid(p);
      if (lastDist > 0) {
        var r = stage.getBoundingClientRect();
        var k = d / lastDist;
        var ns = Math.min(Math.max(scale * k, 1), 8); k = ns / scale;
        var cx = m.x - r.left, cy = m.y - r.top;
        setTransform(ns, cx - (cx - tx) * k + (m.x - lastMid.x), cy - (cy - ty) * k + (m.y - lastMid.y));
      }
      lastDist = d; lastMid = m;
    } else if (dragging && count() === 1) {
      setTransform(scale, tx + (e.clientX - prev.x), ty + (e.clientY - prev.y));
    }
  }
  function onUp(e) {
    delete pointers[e.pointerId];
    if (count() < 2) { lastDist = 0; lastMid = null; }
    if (count() === 0) dragging = false;
  }
  function pts() { var a = []; for (var k in pointers) a.push(pointers[k]); return a; }
  function dist(p) { return Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y); }
  function mid(p) { return { x: (p[0].x + p[1].x) / 2, y: (p[0].y + p[1].y) / 2 }; }

  function open(fig, btn) {
    if (!overlay) build();
    var src = fig.querySelector('svg');
    if (!src) return;
    opener = btn;
    stage.innerHTML = '';
    svg = src.cloneNode(true);
    svg.removeAttribute('id');
    svg.classList.add('figzoom-svg');
    stage.appendChild(svg);
    overlay.hidden = false;
    document.documentElement.classList.add('figzoom-open');
    // 幅いっぱいに置く。縦長の画面では横に合わせ、横長では高さに合わせる
    var vb = (src.getAttribute('viewBox') || '0 0 680 300').split(/\s+/);
    var ratio = parseFloat(vb[3]) / parseFloat(vb[2]);
    var sw = stage.clientWidth, sh = stage.clientHeight;
    var w = Math.min(sw, sh / ratio);
    svg.style.width = w + 'px';
    svg.style.height = (w * ratio) + 'px';
    setTransform(1, 0, 0);
    overlay.querySelector('.figzoom-close').focus();
  }

  function close() {
    overlay.hidden = true;
    stage.innerHTML = '';
    svg = null; pointers = {};
    document.documentElement.classList.remove('figzoom-open');
    if (opener) { try { opener.focus(); } catch (e) {} }
  }

  function init() {
    var figs = document.querySelectorAll('.fig');
    for (var i = 0; i < figs.length; i++) (function (fig) {
      var s = fig.querySelector('svg');
      if (!s) return;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'fig-zoom';
      btn.innerHTML = label('図を拡大', 'Enlarge');
      fig.insertBefore(btn, s.nextSibling);
      btn.addEventListener('click', function () { open(fig, btn); });
      s.style.cursor = 'zoom-in';
      s.addEventListener('click', function () { open(fig, btn); });
    })(figs[i]);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
