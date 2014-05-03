var CodeMirror = function () {
    function a(d, e) {
        function bS(a) {
            return a >= 0 && a < bq.size
        }

        function bU(a) {
            return u(bq, a)
        }

        function bV(a, b) {
            bH = !0;
            var c = b - a.height;
            for (var d = a; d; d = d.parent)d.height += c
        }

        function bW(a) {
            var b = {line: 0, ch: 0};
            ch(b, {line: bq.size - 1, ch: bU(bq.size - 1).text.length}, _(a), b, b), bB = !0
        }

        function bX(a) {
            var b = [];
            return bq.iter(0, bq.size, function (a) {
                b.push(a.text)
            }), b.join("\n")
        }

        function bY(a) {
            function j(a) {
                var b = dA(a, !0);
                if (b && !T(b, g)) {
                    bs || cf(), g = b, cI(d, b), bB = !1;
                    var c = cB();
                    if (b.line >= c.to || b.line < c.from)h = setTimeout(dN(function () {
                        j(a)
                    }), 150)
                }
            }

            cH(G(a, "shiftKey"));
            for (var b = E(a); b != C; b = b.parentNode)if (b.parentNode == bc && b != bd)return;
            for (var b = E(a); b != C; b = b.parentNode)if (b.parentNode == bf)return f.onGutterClick && f.onGutterClick(bT, Z(bf.childNodes, b) + bK, a), B(a);
            var d = dA(a);
            switch (F(a)) {
                case 3:
                    K && !c && dB(a);
                    return;
                case 2:
                    d && cL(d.line, d.ch, !0);
                    return
            }
            if (!d) {
                E(a) == P && B(a);
                return
            }
            bs || cf();
            var e = +(new Date);
            if (bw && bw.time > e - 400 && T(bw.pos, d))return B(a), setTimeout(cx, 20), cU(d.line);
            if (bv && bv.time > e - 400 && T(bv.pos, d))return bw = {time: e, pos: d}, B(a), cT(d);
            bv = {time: e, pos: d};
            var g = d, h;
            if (J && !f.readOnly && !T(bt.from, bt.to) && !U(d, bt.from) && !U(bt.to, d)) {
                M && (bg.draggable = !0);
                var i = H(z, "mouseup", dN(function (b) {
                    M && (bg.draggable = !1), by = !1, i(), Math.abs(a.clientX - b.clientX) + Math.abs(a.clientY - b.clientY) < 10 && (B(b), cL(d.line, d.ch, !0), cx())
                }), !0);
                by = !0;
                return
            }
            B(a), cL(d.line, d.ch, !0);
            var k = H(z, "mousemove", dN(function (a) {
                clearTimeout(h), B(a), j(a)
            }), !0), i = H(z, "mouseup", dN(function (a) {
                clearTimeout(h);
                var b = dA(a);
                b && cI(d, b), B(a), cx(), bB = !0, k(), i()
            }), !0)
        }

        function bZ(a) {
            for (var b = E(a); b != C; b = b.parentNode)if (b.parentNode == bf)return B(a);
            var c = dA(a);
            if (!c)return;
            bw = {time: +(new Date), pos: c}, B(a), cT(c)
        }

        function b$(a) {
            a.preventDefault();
            var b = dA(a, !0), c = a.dataTransfer.files;
            if (!b || f.readOnly)return;
            if (c && c.length && window.FileReader && window.File) {
                function d(a, c) {
                    var d = new FileReader;
                    d.onload = function () {
                        g[c] = d.result, ++h == e && (b = cN(b), dN(function () {
                            var a = cm(g.join(""), b, b);
                            cI(b, a)
                        })())
                    }, d.readAsText(a)
                }

                var e = c.length, g = Array(e), h = 0;
                for (var i = 0; i < e; ++i)d(c[i], i)
            } else try {
                var g = a.dataTransfer.getData("Text");
                if (g) {
                    var j = bt.from, k = bt.to;
                    cI(b, b), by && cm("", j, k), cn(g), cx()
                }
            } catch (a) {
            }
        }

        function b_(a) {
            var b = cq();
            X(b), a.dataTransfer.setDragImage(W, 0, 0), a.dataTransfer.setData("Text", b)
        }

        function ca(a) {
            function g() {
                return c.call ? c.call(null, bT) : c
            }

            var b = bb[G(a, "keyCode")], c = i[f.keyMap].auto, d, e;
            if (b == null || a.altGraphKey)return c && (f.keyMap = g()), null;
            G(a, "altKey") && (b = "Alt-" + b), G(a, "ctrlKey") && (b = "Ctrl-" + b), G(a, "metaKey") && (b = "Cmd-" + b), G(a, "shiftKey") && (d = j("Shift-" + b, f.extraKeys, f.keyMap)) ? e = !0 : d = j(b, f.extraKeys, f.keyMap), typeof d == "string" && (h.propertyIsEnumerable(d) ? d = h[d] : d = null), c && (d || !k(a)) && (f.keyMap = g());
            if (!d)return!1;
            var l = bu;
            try {
                f.readOnly && (bA = !0), e && (bu = null), d(bT)
            } finally {
                bu = l, bA = !1
            }
            return B(a), !0
        }

        function cc(a) {
            bs || cf(), L && a.keyCode == 27 && (a.returnValue = !1);
            if (f.onKeyEvent && f.onKeyEvent(bT, A(a)))return;
            var b = G(a, "keyCode");
            cH(b == 16 || G(a, "shiftKey"));
            var d = ca(a);
            window.opera && (cb = d ? b : null, !d && b == 88 && G(a, c ? "metaKey" : "ctrlKey") && cn(""))
        }

        function cd(a) {
            if (f.onKeyEvent && f.onKeyEvent(bT, A(a)))return;
            var b = G(a, "keyCode"), c = G(a, "charCode");
            if (window.opera && b == cb) {
                cb = null, B(a);
                return
            }
            if (window.opera && !a.which && ca(a))return;
            if (f.electricChars && bp.electricChars && f.smartIndent && !f.readOnly) {
                var d = String.fromCharCode(c == null ? b : c);
                bp.electricChars.indexOf(d) > -1 && setTimeout(dN(function () {
                    cW(bt.to.line, "smart")
                }), 75)
            }
            ct()
        }

        function ce(a) {
            if (f.onKeyEvent && f.onKeyEvent(bT, A(a)))return;
            G(a, "keyCode") == 16 && (bu = null)
        }

        function cf() {
            if (f.readOnly == "nocursor")return;
            bs || (f.onFocus && f.onFocus(bT), bs = !0, C.className.search(/\bCodeMirror-focused\b/) == -1 && (C.className += " CodeMirror-focused"), bG || cw(!0)), cs(), dC()
        }

        function cg() {
            bs && (f.onBlur && f.onBlur(bT), bs = !1, bN && dN(function () {
                bN && (bN(), bN = null)
            })(), C.className = C.className.replace(" CodeMirror-focused", "")), clearInterval(bo), setTimeout(function () {
                bs || (bu = null)
            }, 150)
        }

        function ch(a, b, c, d, e) {
            if (bA)return;
            if (bQ) {
                var g = [];
                bq.iter(a.line, b.line + 1, function (a) {
                    g.push(a.text)
                }), bQ.addChange(a.line, c.length, g);
                while (bQ.done.length > f.undoDepth)bQ.done.shift()
            }
            cl(a, b, c, d, e)
        }

        function ci(a, b, c) {
            var d = a.pop(), e = d ? d.length : 0, f = [];
            for (var g = c > 0 ? 0 : e - 1, h = c > 0 ? e : -1; g != h; g += c) {
                var i = d[g], j = [], k = i.start + i.added;
                bq.iter(i.start, k, function (a) {
                    j.push(a.text)
                }), f.push({start: i.start, added: i.old.length, old: j});
                var l = cN({line: i.start + i.old.length - 1, ch: Y(j[j.length - 1], i.old[i.old.length - 1])});
                cl({line: i.start, ch: 0}, {line: k - 1, ch: bU(k - 1).text.length}, i.old, l, l)
            }
            bB = !0, b.push(f)
        }

        function cj() {
            ci(bQ.done, bQ.undone, -1)
        }

        function ck() {
            ci(bQ.undone, bQ.done, 1)
        }

        function cl(a, b, c, d, e) {
            function y(a) {
                return a <= Math.min(b.line, b.line + s) ? a : a + s
            }

            if (bA)return;
            var g = !1, h = bO.length;
            f.lineWrapping || bq.iter(a.line, b.line, function (a) {
                if (a.text.length == h)return g = !0, !0
            });
            if (a.line != b.line || c.length > 1)bH = !0;
            var i = b.line - a.line, j = bU(a.line), k = bU(b.line);
            if (a.ch == 0 && b.ch == 0 && c[c.length - 1] == "") {
                var l = [], m = null;
                a.line ? (m = bU(a.line - 1), m.fixMarkEnds(k)) : k.fixMarkStarts();
                for (var n = 0, o = c.length - 1; n < o; ++n)l.push(q.inheritMarks(c[n], m));
                i && bq.remove(a.line, i, bI), l.length && bq.insert(a.line, l)
            } else if (j == k)if (c.length == 1)j.replace(a.ch, b.ch, c[0]); else {
                k = j.split(b.ch, c[c.length - 1]), j.replace(a.ch, null, c[0]), j.fixMarkEnds(k);
                var l = [];
                for (var n = 1, o = c.length - 1; n < o; ++n)l.push(q.inheritMarks(c[n], j));
                l.push(k), bq.insert(a.line + 1, l)
            } else if (c.length == 1)j.replace(a.ch, null, c[0]), k.replace(null, b.ch, ""), j.append(k), bq.remove(a.line + 1, i, bI); else {
                var l = [];
                j.replace(a.ch, null, c[0]), k.replace(null, b.ch, c[c.length - 1]), j.fixMarkEnds(k);
                for (var n = 1, o = c.length - 1; n < o; ++n)l.push(q.inheritMarks(c[n], j));
                i > 1 && bq.remove(a.line + 1, i - 1, bI), bq.insert(a.line + 1, l)
            }
            if (f.lineWrapping) {
                var p = P.clientWidth / dx() - 3;
                bq.iter(a.line, a.line + c.length, function (a) {
                    if (a.hidden)return;
                    var b = Math.ceil(a.text.length / p) || 1;
                    b != a.height && bV(a, b)
                })
            } else bq.iter(a.line, n + c.length, function (a) {
                var b = a.text;
                b.length > h && (bO = b, h = b.length, bP = null, g = !1)
            }), g && (h = 0, bO = "", bP = null, bq.iter(0, bq.size, function (a) {
                var b = a.text;
                b.length > h && (h = b.length, bO = b)
            }));
            var r = [], s = c.length - i - 1;
            for (var n = 0, t = br.length; n < t; ++n) {
                var u = br[n];
                u < a.line ? r.push(u) : u > b.line && r.push(u + s)
            }
            var v = a.line + Math.min(c.length, 500);
            dH(a.line, v), r.push(v), br = r, dJ(100), bD.push({from: a.line, to: b.line + 1, diff: s});
            var w = {from: a, to: b, text: c};
            if (bE) {
                for (var x = bE; x.next; x = x.next);
                x.next = w
            } else bE = w;
            cJ(d, e, y(bt.from.line), y(bt.to.line)), P.clientHeight && (bc.style.height = bq.height * du() + 2 * dy() + "px")
        }

        function cm(a, b, c) {
            function d(d) {
                if (U(d, b))return d;
                if (!U(c, d))return e;
                var f = d.line + a.length - (c.line - b.line) - 1, g = d.ch;
                return d.line == c.line && (g += a[a.length - 1].length - (c.ch - (c.line == b.line ? b.ch : 0))), {line: f, ch: g}
            }

            b = cN(b), c ? c = cN(c) : c = b, a = _(a);
            var e;
            return co(a, b, c, function (a) {
                return e = a, {from: d(bt.from), to: d(bt.to)}
            }), e
        }

        function cn(a, b) {
            co(_(a), bt.from, bt.to, function (a) {
                return b == "end" ? {from: a, to: a} : b == "start" ? {from: bt.from, to: bt.from} : {from: bt.from, to: a}
            })
        }

        function co(a, b, c, d) {
            var e = a.length == 1 ? a[0].length + b.ch : a[a.length - 1].length, f = d({line: b.line + a.length - 1, ch: e});
            ch(b, c, a, f.from, f.to)
        }

        function cp(a, b) {
            var c = a.line, d = b.line;
            if (c == d)return bU(c).text.slice(a.ch, b.ch);
            var e = [bU(c).text.slice(a.ch)];
            return bq.iter(c + 1, d, function (a) {
                e.push(a.text)
            }), e.push(bU(d).text.slice(0, b.ch)), e.join("\n")
        }

        function cq() {
            return cp(bt.from, bt.to)
        }

        function cs() {
            if (cr)return;
            bm.set(f.pollInterval, function () {
                dK(), cv(), bs && cs(), dL()
            })
        }

        function ct() {
            function b() {
                dK();
                var c = cv();
                !c && !a ? (a = !0, bm.set(60, b)) : (cr = !1, cs()), dL()
            }

            var a = !1;
            cr = !0, bm.set(20, b)
        }

        function cv() {
            if (bG || !bs || ba(O) || f.readOnly)return!1;
            var a = O.value;
            if (a == cu)return!1;
            bu = null;
            var b = 0, c = Math.min(cu.length, a.length);
            while (b < c && cu[b] == a[b])++b;
            return b < cu.length ? bt.from = {line: bt.from.line, ch: bt.from.ch - (cu.length - b)} : bz && T(bt.from, bt.to) && (bt.to = {line: bt.to.line, ch: Math.min(bU(bt.to.line).text.length, bt.to.ch + (a.length - b))}), cn(a.slice(b), "end"), cu = a, !0
        }

        function cw(a) {
            T(bt.from, bt.to) ? a && (cu = O.value = "") : (cu = "", O.value = cq(), S(O))
        }

        function cx() {
            f.readOnly != "nocursor" && O.focus()
        }

        function cy() {
            if (!bi.getBoundingClientRect)return;
            var a = bi.getBoundingClientRect();
            if (L && a.top == a.bottom)return;
            var b = window.innerHeight || Math.max(document.body.offsetHeight, document.documentElement.offsetHeight);
            (a.top < 0 || a.bottom > b) && bi.scrollIntoView()
        }

        function cz() {
            var a = dn(bt.inverted ? bt.from : bt.to), b = f.lineWrapping ? Math.min(a.x, bg.offsetWidth) : a.x;
            return cA(b, a.y, b, a.yBot)
        }

        function cA(a, b, c, d) {
            var e = dz(), g = dy(), h = du();
            b += g, d += g, a += e, c += e;
            var i = P.clientHeight, j = P.scrollTop, k = !1, l = !0;
            b < j ? (P.scrollTop = Math.max(0, b - 2 * h), k = !0) : d > j + i && (P.scrollTop = d + h - i, k = !0);
            var m = P.clientWidth, n = P.scrollLeft, o = f.fixedGutter ? be.clientWidth : 0;
            return a < n + o ? (a < 50 && (a = 0), P.scrollLeft = Math.max(0, a - 10 - o), k = !0) : c > m + n - 3 && (P.scrollLeft = c + 10 - m, k = !0, c > bc.clientWidth && (l = !1)), k && f.onScroll && f.onScroll(bT), l
        }

        function cB() {
            var a = du(), b = P.scrollTop - dy(), c = Math.max(0, Math.floor(b / a)), d = Math.ceil((b + P.clientHeight) / a);
            return{from: w(bq, c), to: w(bq, d)}
        }

        function cC(a, b) {
            if (!P.clientWidth) {
                bK = bL = bJ = 0;
                return
            }
            var c = cB();
            if (a !== !0 && a.length == 0 && c.from > bK && c.to < bL)return;
            var d = Math.max(c.from - 100, 0), e = Math.min(bq.size, c.to + 100);
            bK < d && d - bK < 20 && (d = bK), bL > e && bL - e < 20 && (e = Math.min(bq.size, bL));
            var g = a === !0 ? [] : cD([
                {from: bK, to: bL, domStart: 0}
            ], a), h = 0;
            for (var i = 0; i < g.length; ++i) {
                var j = g[i];
                j.from < d && (j.domStart += d - j.from, j.from = d), j.to > e && (j.to = e), j.from >= j.to ? g.splice(i--, 1) : h += j.to - j.from
            }
            if (h == e - d)return;
            g.sort(function (a, b) {
                return a.domStart - b.domStart
            });
            var k = du(), l = be.style.display;
            bk.style.display = "none", cE(d, e, g), bk.style.display = be.style.display = "";
            var m = d != bK || e != bL || bM != P.clientHeight + k;
            m && (bM = P.clientHeight + k), bK = d, bL = e, bJ = x(bq, d), bd.style.top = bJ * k + "px", P.clientHeight && (bc.style.height = bq.height * k + 2 * dy() + "px");
            if (bk.childNodes.length != bL - bK)throw new Error("BAD PATCH! " + JSON.stringify(g) + " size=" + (bL - bK) + " nodes=" + bk.childNodes.length);
            if (f.lineWrapping) {
                bP = P.clientWidth;
                var n = bk.firstChild, o = !1;
                bq.iter(bK, bL, function (a) {
                    if (!a.hidden) {
                        var b = Math.round(n.offsetHeight / k) || 1;
                        a.height != b && (bV(a, b), bH = o = !0)
                    }
                    n = n.nextSibling
                }), o && (bc.style.height = bq.height * k + 2 * dy() + "px")
            } else bP == null && (bP = dj(bO)), bP > P.clientWidth ? (bg.style.width = bP + "px", bc.style.width = "", bc.style.width = P.scrollWidth + "px") : bg.style.width = bc.style.width = "";
            return be.style.display = l, (m || bH) && cF(), cG(), !b && f.onUpdate && f.onUpdate(bT), !0
        }

        function cD(a, b) {
            for (var c = 0, d = b.length || 0; c < d; ++c) {
                var e = b[c], f = [], g = e.diff || 0;
                for (var h = 0, i = a.length; h < i; ++h) {
                    var j = a[h];
                    e.to <= j.from && e.diff ? f.push({from: j.from + g, to: j.to + g, domStart: j.domStart}) : e.to <= j.from || e.from >= j.to ? f.push(j) : (e.from > j.from && f.push({from: j.from, to: e.from, domStart: j.domStart}), e.to < j.to && f.push({from: e.to + g, to: j.to + g, domStart: j.domStart + (e.to - j.from)}))
                }
                a = f
            }
            return a
        }

        function cE(a, b, c) {
            if (!c.length)bk.innerHTML = ""; else {
                function d(a) {
                    var b = a.nextSibling;
                    return a.parentNode.removeChild(a), b
                }

                var e = 0, f = bk.firstChild, g;
                for (var h = 0; h < c.length; ++h) {
                    var i = c[h];
                    while (i.domStart > e)f = d(f), e++;
                    for (var j = 0, k = i.to - i.from; j < k; ++j)f = f.nextSibling, e++
                }
                while (f)f = d(f)
            }
            var l = c.shift(), f = bk.firstChild, j = a, m = z.createElement("div"), n;
            bq.iter(a, b, function (a) {
                l && l.to == j && (l = c.shift());
                if (!l || l.from > j) {
                    if (a.hidden)var b = m.innerHTML = "<pre></pre>"; else {
                        var b = "<pre>" + a.getHTML(c$) + "</pre>";
                        a.className && (b = '<div style="position: relative"><pre class="' + a.className + '" style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; z-index: -2">&#160;</pre>' + b + "</div>")
                    }
                    m.innerHTML = b, bk.insertBefore(m.firstChild, f)
                } else f = f.nextSibling;
                ++j
            })
        }

        function cF() {
            if (!f.gutter && !f.lineNumbers)return;
            var a = bd.offsetHeight, b = P.clientHeight;
            be.style.height = (a - b < 2 ? b : a) + "px";
            var c = [], d = bK;
            bq.iter(bK, Math.max(bL, bK + 1), function (a) {
                if (a.hidden)c.push("<pre></pre>"); else {
                    var b = a.gutterMarker, e = f.lineNumbers ? d + f.firstLineNumber : null;
                    b && b.text ? e = b.text.replace("%N%", e != null ? e : "") : e == null && (e = "\u00a0"), c.push(b && b.style ? '<pre class="' + b.style + '">' : "<pre>", e);
                    for (var g = 1; g < a.height; ++g)c.push("<br/>&#160;");
                    c.push("</pre>")
                }
                ++d
            }), be.style.display = "none", bf.innerHTML = c.join("");
            var e = String(bq.size).length, g = bf.firstChild, h = R(g), i = "";
            while (h.length + i.length < e)i += "\u00a0";
            i && g.insertBefore(z.createTextNode(i), g.firstChild), be.style.display = "", bg.style.marginLeft = be.offsetWidth + "px", bH = !1
        }

        function cG() {
            var a = T(bt.from, bt.to), b = dn(bt.from, !0), c = a ? b : dn(bt.to, !0), d = bt.inverted ? b : c, e = du(), g = Q(C), h = Q(bk);
            N.style.top = Math.max(0, Math.min(P.offsetHeight, d.y + h.top - g.top)) + "px", N.style.left = Math.max(0, Math.min(P.offsetWidth, d.x + h.left - g.left)) + "px";
            if (a)bi.style.top = d.y + "px", bi.style.left = (f.lineWrapping ? Math.min(d.x, bg.offsetWidth) : d.x) + "px", bi.style.display = "", bj.style.display = "none"; else {
                var i = b.y == c.y, j = "";

                function k(a, b, c, d) {
                    j += '<div class="CodeMirror-selected" style="position: absolute; left: ' + a + "px; top: " + b + "px; right: " + c + "px; height: " + d + 'px"></div>'
                }

                if (bt.from.ch && b.y >= 0) {
                    var l = i ? bg.clientWidth - c.x : 0;
                    k(b.x, b.y, l, e)
                }
                var m = Math.max(0, b.y + (bt.from.ch ? e : 0)), n = Math.min(c.y, bg.clientHeight) - m;
                n > .2 * e && k(0, m, 0, n), (!i || !bt.from.ch) && c.y < bg.clientHeight - .5 * e && k(0, c.y, bg.clientWidth - c.x, e), bj.innerHTML = j, bi.style.display = "none", bj.style.display = ""
            }
        }

        function cH(a) {
            a ? bu = bu || (bt.inverted ? bt.to : bt.from) : bu = null
        }

        function cI(a, b) {
            var c = bu && cN(bu);
            c && (U(c, a) ? a = c : U(b, c) && (b = c)), cJ(a, b), bC = !0
        }

        function cJ(a, b, c, d) {
            cR = null, c == null && (c = bt.from.line, d = bt.to.line);
            if (T(bt.from, a) && T(bt.to, b))return;
            if (U(b, a)) {
                var e = b;
                b = a, a = e
            }
            a.line != c && (a = cK(a, c, bt.from.ch)), b.line != d && (b = cK(b, d, bt.to.ch)), T(a, b) ? bt.inverted = !1 : T(a, bt.to) ? bt.inverted = !1 : T(b, bt.from) && (bt.inverted = !0), bt.from = a, bt.to = b, bF = !0
        }

        function cK(a, b, c) {
            function d(b) {
                var d = a.line + b, e = b == 1 ? bq.size : -1;
                while (d != e) {
                    var f = bU(d);
                    if (!f.hidden) {
                        var g = a.ch;
                        if (g > c || g > f.text.length)g = f.text.length;
                        return{line: d, ch: g}
                    }
                    d += b
                }
            }

            var e = bU(a.line);
            return e.hidden ? a.line >= b ? d(1) || d(-1) : d(-1) || d(1) : a
        }

        function cL(a, b, c) {
            var d = cN({line: a, ch: b || 0});
            (c ? cI : cJ)(d, d)
        }

        function cM(a) {
            return Math.max(0, Math.min(a, bq.size - 1))
        }

        function cN(a) {
            if (a.line < 0)return{line: 0, ch: 0};
            if (a.line >= bq.size)return{line: bq.size - 1, ch: bU(bq.size - 1).text.length};
            var b = a.ch, c = bU(a.line).text.length;
            return b == null || b > c ? {line: a.line, ch: c} : b < 0 ? {line: a.line, ch: 0} : a
        }

        function cO(a, b) {
            function g() {
                for (var b = d + a, c = a < 0 ? -1 : bq.size; b != c; b += a) {
                    var e = bU(b);
                    if (!e.hidden)return d = b, f = e, !0
                }
            }

            function h(b) {
                if (e == (a < 0 ? 0 : f.text.length))if (!b && g())e = a < 0 ? f.text.length : 0; else return!1; else e += a;
                return!0
            }

            var c = bt.inverted ? bt.from : bt.to, d = c.line, e = c.ch, f = bU(d);
            if (b == "char")h(); else if (b == "column")h(!0); else if (b == "word") {
                var i = !1;
                for (; ;) {
                    if (a < 0 && !h())break;
                    if ($(f.text.charAt(e)))i = !0; else if (i) {
                        a < 0 && (a = 1, h());
                        break
                    }
                    if (a > 0 && !h())break
                }
            }
            return{line: d, ch: e}
        }

        function cP(a, b) {
            var c = a < 0 ? bt.from : bt.to;
            if (bu || T(bt.from, bt.to))c = cO(a, b);
            cL(c.line, c.ch, !0)
        }

        function cQ(a, b) {
            T(bt.from, bt.to) ? a < 0 ? cm("", cO(a, b), bt.to) : cm("", bt.from, cO(a, b)) : cm("", bt.from, bt.to), bC = !0
        }

        function cS(a, b) {
            var c = 0, d = dn(bt.inverted ? bt.from : bt.to, !0);
            cR != null && (d.x = cR), b == "page" ? c = Math.min(P.clientHeight, window.innerHeight || document.documentElement.clientHeight) : b == "line" && (c = du());
            var e = dp(d.x, d.y + c * a + 2);
            cL(e.line, e.ch, !0), cR = d.x
        }

        function cT(a) {
            var b = bU(a.line).text, c = a.ch, d = a.ch;
            while (c > 0 && $(b.charAt(c - 1)))--c;
            while (d < b.length && $(b.charAt(d)))++d;
            cI({line: a.line, ch: c}, {line: a.line, ch: d})
        }

        function cU(a) {
            cI({line: a, ch: 0}, cN({line: a + 1, ch: 0}))
        }

        function cV(a) {
            if (T(bt.from, bt.to))return cW(bt.from.line, a);
            var b = bt.to.line - (bt.to.ch ? 0 : 1);
            for (var c = bt.from.line; c <= b; ++c)cW(c, a)
        }

        function cW(a, b) {
            b || (b = "add");
            if (b == "smart")if (!bp.indent)b = "prev"; else var c = dG(a);
            var d = bU(a), e = d.indentation(f.tabSize), g = d.text.match(/^\s*/)[0], h;
            b == "prev" ? a ? h = bU(a - 1).indentation(f.tabSize) : h = 0 : b == "smart" ? h = bp.indent(c, d.text.slice(g.length), d.text) : b == "add" ? h = e + f.indentUnit : b == "subtract" && (h = e - f.indentUnit), h = Math.max(0, h);
            var i = h - e;
            if (!i) {
                if (bt.from.line != a && bt.to.line != a)return;
                var j = g
            } else {
                var j = "", k = 0;
                if (f.indentWithTabs)for (var l = Math.floor(h / f.tabSize); l; --l)k += f.tabSize, j += "\t";
                while (k < h)++k, j += " "
            }
            cm(j, {line: a, ch: 0}, {line: a, ch: g.length})
        }

        function cX() {
            bp = a.getMode(f, f.mode), bq.iter(0, bq.size, function (a) {
                a.stateAfter = null
            }), br = [0], dJ()
        }

        function cY() {
            var a = f.gutter || f.lineNumbers;
            be.style.display = a ? "" : "none", a ? bH = !0 : bk.parentNode.style.marginLeft = 0
        }

        function cZ(a, b) {
            if (f.lineWrapping) {
                C.className += " CodeMirror-wrap";
                var c = P.clientWidth / dx() - 3;
                bq.iter(0, bq.size, function (a) {
                    if (a.hidden)return;
                    var b = Math.ceil(a.text.length / c) || 1;
                    b != 1 && bV(a, b)
                }), bg.style.width = bc.style.width = ""
            } else C.className = C.className.replace(" CodeMirror-wrap", ""), bP = null, bO = "", bq.iter(0, bq.size, function (a) {
                a.height != 1 && !a.hidden && bV(a, 1), a.text.length > bO.length && (bO = a.text)
            });
            bD.push({from: 0, to: bq.size})
        }

        function c$(a) {
            var b = f.tabSize - a % f.tabSize;
            for (var c = '<span class="cm-tab">', d = 0; d < b; ++d)c += " ";
            return{html: c + "</span>", width: b}
        }

        function c_() {
            P.className = P.className.replace(/\s*cm-s-\w+/g, "") + f.theme.replace(/(^|\s)\s*/g, " cm-s-")
        }

        function da() {
            this.set = []
        }

        function db(a, b, c) {
            function e(a, b, c, e) {
                bU(a).addMark(new o(b, c, e, d.set))
            }

            a = cN(a), b = cN(b);
            var d = new da;
            if (a.line == b.line)e(a.line, a.ch, b.ch, c); else {
                e(a.line, a.ch, null, c);
                for (var f = a.line + 1, g = b.line; f < g; ++f)e(f, null, null, c);
                e(b.line, null, b.ch, c)
            }
            return bD.push({from: a.line, to: b.line + 1}), d
        }

        function dc(a) {
            a = cN(a);
            var b = new p(a.ch);
            return bU(a.line).addMark(b), b
        }

        function dd(a, b, c) {
            return typeof a == "number" && (a = bU(cM(a))), a.gutterMarker = {text: b, style: c}, bH = !0, a
        }

        function de(a) {
            typeof a == "number" && (a = bU(cM(a))), a.gutterMarker = null, bH = !0
        }

        function df(a, b) {
            var c = a, d = a;
            typeof a == "number" ? d = bU(cM(a)) : c = v(a);
            if (c == null)return null;
            if (b(d, c))bD.push({from: c, to: c + 1}); else return null;
            return d
        }

        function dg(a, b) {
            return df(a, function (a) {
                if (a.className != b)return a.className = b, !0
            })
        }

        function dh(a, b) {
            return df(a, function (a, c) {
                if (a.hidden != b) {
                    a.hidden = b, bV(a, b ? 0 : 1);
                    var d = bt.from.line, e = bt.to.line;
                    if (b && (d == c || e == c)) {
                        var f = d == c ? cK({line: d, ch: 0}, d, 0) : bt.from, g = e == c ? cK({line: e, ch: 0}, e, 0) : bt.to;
                        cJ(f, g)
                    }
                    return bH = !0
                }
            })
        }

        function di(a) {
            if (typeof a == "number") {
                if (!bS(a))return null;
                var b = a;
                a = bU(a);
                if (!a)return null
            } else {
                var b = v(a);
                if (b == null)return null
            }
            var c = a.gutterMarker;
            return{line: b, handle: a, text: a.text, markerText: c && c.text, markerClass: c && c.style, lineClass: a.className}
        }

        function dj(a) {
            return bh.innerHTML = "<pre><span>x</span></pre>", bh.firstChild.firstChild.firstChild.nodeValue = a, bh.firstChild.firstChild.offsetWidth || 10
        }

        function dk(a, b) {
            function e(a) {
                return bh.innerHTML = "<pre><span>" + c.getHTML(c$, a) + "</span></pre>", bh.firstChild.firstChild.offsetWidth
            }

            if (b <= 0)return 0;
            var c = bU(a), d = c.text, f = 0, g = 0, h = d.length, i, j = Math.min(h, Math.ceil(b / dx()));
            for (; ;) {
                var k = e(j);
                if (k <= b && j < h)j = Math.min(h, Math.ceil(j * 1.2)); else {
                    i = k, h = j;
                    break
                }
            }
            if (b > i)return h;
            j = Math.floor(h * .8), k = e(j), k < b && (f = j, g = k);
            for (; ;) {
                if (h - f <= 1)return i - b > b - g ? f : h;
                var l = Math.ceil((f + h) / 2), m = e(l);
                m > b ? (h = l, i = m) : (f = l, g = m)
            }
        }

        function dm(a, b) {
            if (b == 0)return{top: 0, left: 0};
            var c = "";
            if (f.lineWrapping) {
                var d = a.text.indexOf(" ", b + 2);
                c = X(a.text.slice(b + 1, d < 0 ? a.text.length : d + (L ? 5 : 0)))
            }
            bh.innerHTML = "<pre>" + a.getHTML(c$, b) + '<span id="CodeMirror-temp-' + dl + '">' + X(a.text.charAt(b) || " ") + "</span>" + c + "</pre>";
            var e = document.getElementById("CodeMirror-temp-" + dl), g = e.offsetTop, h = e.offsetLeft;
            if (L && g == 0 && h == 0) {
                var i = document.createElement("span");
                i.innerHTML = "x", e.parentNode.insertBefore(i, e.nextSibling), g = i.offsetTop
            }
            return{top: g, left: h}
        }

        function dn(a, b) {
            var c, d = du(), e = d * (x(bq, a.line) - (b ? bJ : 0));
            if (a.ch == 0)c = 0; else {
                var g = dm(bU(a.line), a.ch);
                c = g.left, f.lineWrapping && (e += Math.max(0, g.top))
            }
            return{x: c, y: e, yBot: e + d}
        }

        function dp(a, b) {
            function l(a) {
                var b = dm(h, a);
                if (j) {
                    var d = Math.round(b.top / c);
                    return Math.max(0, b.left + (d - k) * P.clientWidth)
                }
                return b.left
            }

            b < 0 && (b = 0);
            var c = du(), d = dx(), e = bJ + Math.floor(b / c), g = w(bq, e);
            if (g >= bq.size)return{line: bq.size - 1, ch: bU(bq.size - 1).text.length};
            var h = bU(g), i = h.text, j = f.lineWrapping, k = j ? e - x(bq, g) : 0;
            if (a <= 0 && k == 0)return{line: g, ch: 0};
            var m = 0, n = 0, o = i.length, p, q = Math.min(o, Math.ceil((a + k * P.clientWidth * .9) / d));
            for (; ;) {
                var r = l(q);
                if (r <= a && q < o)q = Math.min(o, Math.ceil(q * 1.2)); else {
                    p = r, o = q;
                    break
                }
            }
            if (a > p)return{line: g, ch: o};
            q = Math.floor(o * .8), r = l(q), r < a && (m = q, n = r);
            for (; ;) {
                if (o - m <= 1)return{line: g, ch: p - a > a - n ? m : o};
                var s = Math.ceil((m + o) / 2), t = l(s);
                t > a ? (o = s, p = t) : (m = s, n = t)
            }
        }

        function dq(a) {
            var b = dn(a, !0), c = Q(bg);
            return{x: c.left + b.x, y: c.top + b.y, yBot: c.top + b.yBot}
        }

        function du() {
            if (dt == null) {
                dt = "<pre>";
                for (var a = 0; a < 49; ++a)dt += "x<br/>";
                dt += "x</pre>"
            }
            var b = bk.clientHeight;
            return b == ds ? dr : (ds = b, bh.innerHTML = dt, dr = bh.firstChild.offsetHeight / 50 || 1, bh.innerHTML = "", dr)
        }

        function dx() {
            return P.clientWidth == dw ? dv : (dw = P.clientWidth, dv = dj("x"))
        }

        function dy() {
            return bg.offsetTop
        }

        function dz() {
            return bg.offsetLeft
        }

        function dA(a, b) {
            var c = Q(P, !0), d, e;
            try {
                d = a.clientX, e = a.clientY
            } catch (a) {
                return null
            }
            if (!b && (d - c.left > P.clientWidth || e - c.top > P.clientHeight))return null;
            var f = Q(bg, !0);
            return dp(d - f.left, e - f.top)
        }

        function dB(a) {
            function e() {
                var a = _(O.value).join("\n");
                a != d && dN(cn)(a, "end"), N.style.position = "relative", O.style.cssText = c, bG = !1, cw(!0), cs()
            }

            var b = dA(a);
            if (!b || window.opera)return;
            (T(bt.from, bt.to) || U(b, bt.from) || !U(b, bt.to)) && dN(cL)(b.line, b.ch);
            var c = O.style.cssText;
            N.style.position = "absolute", O.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (a.clientY - 5) + "px; left: " + (a.clientX - 5) + "px; z-index: 1000; background: white; " + "border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", bG = !0;
            var d = O.value = cq();
            cx(), S(O);
            if (K) {
                D(a);
                var f = H(window, "mouseup", function () {
                    f(), setTimeout(e, 20)
                }, !0)
            } else setTimeout(e, 50)
        }

        function dC() {
            clearInterval(bo);
            var a = !0;
            bi.style.visibility = "", bo = setInterval(function () {
                bi.style.visibility = (a = !a) ? "" : "hidden"
            }, 650)
        }

        function dE(a) {
            function p(a, b, c) {
                if (!a.text)return;
                var d = a.styles, e = g ? 0 : a.text.length - 1, f;
                for (var i = g ? 0 : d.length - 2, j = g ? d.length : -2; i != j; i += 2 * h) {
                    var k = d[i];
                    if (d[i + 1] != null && d[i + 1] != m) {
                        e += h * k.length;
                        continue
                    }
                    for (var l = g ? 0 : k.length - 1, p = g ? k.length : -1; l != p; l += h, e += h)if (e >= b && e < c && o.test(f = k.charAt(l))) {
                        var q = dD[f];
                        if (q.charAt(1) == ">" == g)n.push(f); else {
                            if (n.pop() != q.charAt(0))return{pos: e, match: !1};
                            if (!n.length)return{pos: e, match: !0}
                        }
                    }
                }
            }

            var b = bt.inverted ? bt.from : bt.to, c = bU(b.line), d = b.ch - 1, e = d >= 0 && dD[c.text.charAt(d)] || dD[c.text.charAt(++d)];
            if (!e)return;
            var f = e.charAt(0), g = e.charAt(1) == ">", h = g ? 1 : -1, i = c.styles;
            for (var j = d + 1, k = 0, l = i.length; k < l; k += 2)if ((j -= i[k].length) <= 0) {
                var m = i[k + 1];
                break
            }
            var n = [c.text.charAt(d)], o = /[(){}[\]]/;
            for (var k = b.line, l = g ? Math.min(k + 100, bq.size) : Math.max(-1, k - 100); k != l; k += h) {
                var c = bU(k), q = k == b.line, r = p(c, q && g ? d + 1 : 0, q && !g ? d : c.text.length);
                if (r)break
            }
            r || (r = {pos: null, match: !1});
            var m = r.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket", s = db({line: b.line, ch: d}, {line: b.line, ch: d + 1}, m), t = r.pos != null && db({line: k, ch: r.pos}, {line: k, ch: r.pos + 1}, m), u = dN(function () {
                s.clear(), t && t.clear()
            });
            a ? setTimeout(u, 800) : bN = u
        }

        function dF(a) {
            var b, c;
            for (var d = a, e = a - 40; d > e; --d) {
                if (d == 0)return 0;
                var g = bU(d - 1);
                if (g.stateAfter)return d;
                var h = g.indentation(f.tabSize);
                if (c == null || b > h)c = d - 1, b = h
            }
            return c
        }

        function dG(a) {
            var b = dF(a), c = b && bU(b - 1).stateAfter;
            return c ? c = l(bp, c) : c = m(bp), bq.iter(b, a, function (a) {
                a.highlight(bp, c, f.tabSize), a.stateAfter = l(bp, c)
            }), b < a && bD.push({from: b, to: a}), a < bq.size && !bU(a).stateAfter && br.push(a), c
        }

        function dH(a, b) {
            var c = dG(a);
            bq.iter(a, b, function (a) {
                a.highlight(bp, c, f.tabSize), a.stateAfter = l(bp, c)
            })
        }

        function dI() {
            var a = +(new Date) + f.workTime, b = br.length;
            while (br.length) {
                if (!bU(bK).stateAfter)var c = bK; else var c = br.pop();
                if (c >= bq.size)continue;
                var d = dF(c), e = d && bU(d - 1).stateAfter;
                e ? e = l(bp, e) : e = m(bp);
                var g = 0, h = bp.compareStates, i = !1, j = d, k = !1;
                bq.iter(j, bq.size, function (b) {
                    var d = b.stateAfter;
                    if (+(new Date) > a)return br.push(j), dJ(f.workDelay), i && bD.push({from: c, to: j + 1}), k = !0;
                    var m = b.highlight(bp, e, f.tabSize);
                    m && (i = !0), b.stateAfter = l(bp, e);
                    if (h) {
                        if (d && h(d, e))return!0
                    } else if (m !== !1 || !d)g = 0; else if (++g > 3 && (!bp.indent || bp.indent(d, "") == bp.indent(e, "")))return!0;
                    ++j
                });
                if (k)return;
                i && bD.push({from: c, to: j + 1})
            }
            b && f.onHighlightComplete && f.onHighlightComplete(bT)
        }

        function dJ(a) {
            if (!br.length)return;
            bn.set(a, dN(dI))
        }

        function dK() {
            bB = bC = bE = null, bD = [], bF = !1, bI = []
        }

        function dL() {
            var a = !1, b;
            bF && (a = !cz()), bD.length ? b = cC(bD, !0) : (bF && cG(), bH && cF()), a && cz(), bF && (cy(), dC()), bs && !bG && (bB === !0 || bB !== !1 && bF) && cw(bC), bF && f.matchBrackets && setTimeout(dN(function () {
                bN && (bN(), bN = null), T(bt.from, bt.to) && dE(!1)
            }), 20);
            var c = bE, d = bI;
            bF && f.onCursorActivity && f.onCursorActivity(bT), c && f.onChange && bT && f.onChange(bT, c);
            for (var e = 0; e < d.length; ++e)d[e](bT);
            b && f.onUpdate && f.onUpdate(bT)
        }

        function dN(a) {
            return function () {
                dM++ || dK();
                try {
                    var b = a.apply(this, arguments)
                } finally {
                    --dM || dL()
                }
                return b
            }
        }

        var f = {}, n = a.defaults;
        for (var r in n)n.hasOwnProperty(r) && (f[r] = (e && e.hasOwnProperty(r) ? e : n)[r]);
        var z = f.document, C = z.createElement("div");
        C.className = "CodeMirror" + (f.lineWrapping ? " CodeMirror-wrap" : ""), C.innerHTML = '<div style="overflow: hidden; position: relative; width: 3px; height: 0px;"><textarea style="position: absolute; padding: 0; width: 1px; height: 1em" wrap="off" autocorrect="off" autocapitalize="off"></textarea></div><div class="CodeMirror-scroll" tabindex="-1"><div style="position: relative"><div style="position: relative"><div class="CodeMirror-gutter"><div class="CodeMirror-gutter-text"></div></div><div class="CodeMirror-lines"><div style="position: relative; z-index: 0"><div style="position: absolute; width: 100%; height: 0; overflow: hidden; visibility: hidden;"></div><pre class="CodeMirror-cursor">&#160;</pre><div style="position: relative; z-index: -1"></div><div></div></div></div></div></div></div>', d.appendChild ? d.appendChild(C) : d(C);
        var N = C.firstChild, O = N.firstChild, P = C.lastChild, bc = P.firstChild, bd = bc.firstChild, be = bd.firstChild, bf = be.firstChild, bg = be.nextSibling.firstChild, bh = bg.firstChild, bi = bh.nextSibling, bj = bi.nextSibling, bk = bj.nextSibling;
        c_(), b && (O.style.width = "0px"), M || (bg.draggable = !0), bg.style.outline = "none", f.tabindex != null && (O.tabIndex = f.tabindex), !f.gutter && !f.lineNumbers && (be.style.display = "none");
        try {
            dj("x")
        } catch (bl) {
            throw bl.message.match(/runtime/i) && (bl = new Error("A CodeMirror inside a P-style element does not work in Internet Explorer. (innerHTML bug)")), bl
        }
        var bm = new I, bn = new I, bo, bp, bq = new t([new s([new q("")])]), br, bs;
        cX();
        var bt = {from: {line: 0, ch: 0}, to: {line: 0, ch: 0}, inverted: !1}, bu, bv, bw, bx = 0, by, bz = !1, bA = !1, bB, bC, bD, bE, bF, bG, bH, bI, bJ = 0, bK = 0, bL = 0, bM = 0, bN, bO = "", bP;
        dN(function () {
            bW(f.value || ""), bB = !1
        })();
        var bQ = new y;
        H(P, "mousedown", dN(bY)), H(P, "dblclick", dN(bZ)), H(bg, "dragstart", b_), H(bg, "selectstart", B), K || H(P, "contextmenu", dB), H(P, "scroll", function () {
            bx = P.scrollTop, cC([]), f.fixedGutter && (be.style.left = P.scrollLeft + "px"), f.onScroll && f.onScroll(bT)
        }), H(window, "resize", function () {
            cC(!0)
        }), H(O, "keyup", dN(ce)), H(O, "input", ct), H(O, "keydown", dN(cc)), H(O, "keypress", dN(cd)), H(O, "focus", cf), H(O, "blur", cg), H(P, "dragenter", D), H(P, "dragover", D), H(P, "drop", dN(b$)), H(P, "paste", function () {
            cx(), ct()
        }), H(O, "paste", ct), H(O, "cut", dN(function () {
            f.readOnly || cn("")
        }));
        var bR;
        try {
            bR = z.activeElement == O
        } catch (bl) {
        }
        bR ? setTimeout(cf, 20) : cg();
        var bT = C.CodeMirror = {getValue: bX, setValue: dN(bW), getSelection: cq, replaceSelection: dN(cn), focus: function () {
            cx(), cf(), ct()
        }, setOption: function (a, b) {
            var c = f[a];
            f[a] = b, a == "mode" || a == "indentUnit" ? cX() : a == "readOnly" && b == "nocursor" ? (cg(), O.blur()) : a == "readOnly" && !b ? cw(!0) : a == "theme" ? c_() : a == "lineWrapping" && c != b ? dN(cZ)() : a == "tabSize" && cC(!0);
            if (a == "lineNumbers" || a == "gutter" || a == "firstLineNumber" || a == "theme")cY(), cC(!0)
        }, getOption: function (a) {
            return f[a]
        }, undo: dN(cj), redo: dN(ck), indentLine: dN(function (a, b) {
            typeof b != "string" && (b == null ? b = f.smartIndent ? "smart" : "prev" : b = b ? "add" : "subtract"), bS(a) && cW(a, b)
        }), indentSelection: dN(cV), historySize: function () {
            return{undo: bQ.done.length, redo: bQ.undone.length}
        }, clearHistory: function () {
            bQ = new y
        }, matchBrackets: dN(function () {
            dE(!0)
        }), getTokenAt: dN(function (a) {
            return a = cN(a), bU(a.line).getTokenAt(bp, dG(a.line), a.ch)
        }), getStateAfter: function (a) {
            return a = cM(a == null ? bq.size - 1 : a), dG(a + 1)
        }, cursorCoords: function (a) {
            return a == null && (a = bt.inverted), dq(a ? bt.from : bt.to)
        }, charCoords: function (a) {
            return dq(cN(a))
        }, coordsChar: function (a) {
            var b = Q(bg);
            return dp(a.x - b.left, a.y - b.top)
        }, markText: dN(db), setBookmark: dc, setMarker: dN(dd), clearMarker: dN(de), setLineClass: dN(dg), hideLine: dN(function (a) {
            return dh(a, !0)
        }), showLine: dN(function (a) {
            return dh(a, !1)
        }), onDeleteLine: function (a, b) {
            if (typeof a == "number") {
                if (!bS(a))return null;
                a = bU(a)
            }
            return(a.handlers || (a.handlers = [])).push(b), a
        }, lineInfo: di, addWidget: function (a, b, c, d, e) {
            a = dn(cN(a));
            var f = a.yBot, g = a.x;
            b.style.position = "absolute", bc.appendChild(b);
            if (d == "over")f = a.y; else if (d == "near") {
                var h = Math.max(P.offsetHeight, bq.height * du()), i = Math.max(bc.clientWidth, bg.clientWidth) - dz();
                a.yBot + b.offsetHeight > h && a.y > b.offsetHeight && (f = a.y - b.offsetHeight), g + b.offsetWidth > i && (g = i - b.offsetWidth)
            }
            b.style.top = f + dy() + "px", b.style.left = b.style.right = "", e == "right" ? (g = bc.clientWidth - b.offsetWidth, b.style.right = "0px") : (e == "left" ? g = 0 : e == "middle" && (g = (bc.clientWidth - b.offsetWidth) / 2), b.style.left = g + dz() + "px"), c && cA(g, f, g + b.offsetWidth, f + b.offsetHeight)
        }, lineCount: function () {
            return bq.size
        }, clipPos: cN, getCursor: function (a) {
            return a == null && (a = bt.inverted), V(a ? bt.from : bt.to)
        }, somethingSelected: function () {
            return!T(bt.from, bt.to)
        }, setCursor: dN(function (a, b, c) {
            b == null && typeof a.line == "number" ? cL(a.line, a.ch, c) : cL(a, b, c)
        }), setSelection: dN(function (a, b, c) {
            (c ? cI : cJ)(cN(a), cN(b || a))
        }), getLine: function (a) {
            if (bS(a))return bU(a).text
        }, getLineHandle: function (a) {
            if (bS(a))return bU(a)
        }, setLine: dN(function (a, b) {
            bS(a) && cm(b, {line: a, ch: 0}, {line: a, ch: bU(a).text.length})
        }), removeLine: dN(function (a) {
            bS(a) && cm("", {line: a, ch: 0}, cN({line: a + 1, ch: 0}))
        }), replaceRange: dN(cm), getRange: function (a, b) {
            return cp(cN(a), cN(b))
        }, execCommand: function (a) {
            return h[a](bT)
        }, moveH: dN(cP), deleteH: dN(cQ), moveV: dN(cS), toggleOverwrite: function () {
            bz ? (bz = !1, bi.className = bi.className.replace(" CodeMirror-overwrite", "")) : (bz = !0, bi.className += " CodeMirror-overwrite")
        }, posFromIndex: function (a) {
            var b = 0, c;
            return bq.iter(0, bq.size, function (d) {
                var e = d.text.length + 1;
                if (e > a)return c = a, !0;
                a -= e, ++b
            }), cN({line: b, ch: c})
        }, indexFromPos: function (a) {
            if (a.line < 0 || a.ch < 0)return 0;
            var b = a.ch;
            return bq.iter(0, a.line, function (a) {
                b += a.text.length + 1
            }), b
        }, scrollTo: function (a, b) {
            a != null && (P.scrollLeft = a), b != null && (P.scrollTop = b), cC([])
        }, operation: function (a) {
            return dN(a)()
        }, refresh: function () {
            cC(!0), P.scrollHeight > bx && (P.scrollTop = bx)
        }, getInputField: function () {
            return O
        }, getWrapperElement: function () {
            return C
        }, getScrollerElement: function () {
            return P
        }, getGutterElement: function () {
            return be
        }}, cb = null, cr = !1, cu = "", cR = null;
        da.prototype.clear = dN(function () {
            var a = Infinity, b = -Infinity;
            for (var c = 0, d = this.set.length; c < d; ++c) {
                var e = this.set[c], f = e.marked;
                if (!f || !e.parent)continue;
                var g = v(e);
                a = Math.min(a, g), b = Math.max(b, g);
                for (var h = 0; h < f.length; ++h)f[h].set == this.set && f.splice(h--, 1)
            }
            a != Infinity && bD.push({from: a, to: b + 1})
        }), da.prototype.find = function () {
            var a, b;
            for (var c = 0, d = this.set.length; c < d; ++c) {
                var e = this.set[c], f = e.marked;
                for (var g = 0; g < f.length; ++g) {
                    var h = f[g];
                    if (h.set == this.set)if (h.from != null || h.to != null) {
                        var i = v(e);
                        i != null && (h.from != null && (a = {line: i, ch: h.from}), h.to != null && (b = {line: i, ch: h.to}))
                    }
                }
            }
            return{from: a, to: b}
        };
        var dl = Math.floor(Math.random() * 16777215).toString(16), dr, ds, dt, dv, dw = 0, dD = {"(": ")>", ")": "(<", "[": "]>", "]": "[<", "{": "}>", "}": "{<"}, dM = 0;
        for (var dO in g)g.propertyIsEnumerable(dO) && !bT.propertyIsEnumerable(dO) && (bT[dO] = g[dO]);
        return bT
    }

    function j(a, b, c) {
        function d(a, b, c) {
            var e = b[a];
            if (e != null)return e;
            c == null && (c = b.fallthrough);
            if (c == null)return b.catchall;
            if (typeof c == "string")return d(a, i[c]);
            for (var f = 0, g = c.length; f < g; ++f) {
                e = d(a, i[c[f]]);
                if (e != null)return e
            }
            return null
        }

        return b ? d(a, b, c) : d(a, i[c])
    }

    function k(a) {
        var b = bb[G(a, "keyCode")];
        return b == "Ctrl" || b == "Alt" || b == "Shift" || b == "Mod"
    }

    function l(a, b) {
        if (b === !0)return b;
        if (a.copyState)return a.copyState(b);
        var c = {};
        for (var d in b) {
            var e = b[d];
            e instanceof Array && (e = e.concat([])), c[d] = e
        }
        return c
    }

    function m(a, b, c) {
        return a.startState ? a.startState(b, c) : !0
    }

    function n(a, b) {
        this.pos = this.start = 0, this.string = a, this.tabSize = b || 8
    }

    function o(a, b, c, d) {
        this.from = a, this.to = b, this.style = c, this.set = d
    }

    function p(a) {
        this.from = a, this.to = a, this.line = null
    }

    function q(a, b) {
        this.styles = b || [a, null], this.text = a, this.height = 1, this.marked = this.gutterMarker = this.className = this.handlers = null, this.stateAfter = this.parent = this.hidden = null
    }

    function r(a, b, c, d) {
        for (var e = 0, f = 0, g = 0; f < b; e += 2) {
            var h = c[e], i = f + h.length;
            g == 0 ? (i > a && d.push(h.slice(a - f, Math.min(h.length, b - f)), c[e + 1]), i >= a && (g = 1)) : g == 1 && (i > b ? d.push(h.slice(0, b - f), c[e + 1]) : d.push(h, c[e + 1])), f = i
        }
    }

    function s(a) {
        this.lines = a, this.parent = null;
        for (var b = 0, c = a.length, d = 0; b < c; ++b)a[b].parent = this, d += a[b].height;
        this.height = d
    }

    function t(a) {
        this.children = a;
        var b = 0, c = 0;
        for (var d = 0, e = a.length; d < e; ++d) {
            var f = a[d];
            b += f.chunkSize(), c += f.height, f.parent = this
        }
        this.size = b, this.height = c, this.parent = null
    }

    function u(a, b) {
        while (!a.lines)for (var c = 0; ; ++c) {
            var d = a.children[c], e = d.chunkSize();
            if (b < e) {
                a = d;
                break
            }
            b -= e
        }
        return a.lines[b]
    }

    function v(a) {
        if (a.parent == null)return null;
        var b = a.parent, c = Z(b.lines, a);
        for (var d = b.parent; d; b = d, d = d.parent)for (var e = 0, f = d.children.length; ; ++e) {
            if (d.children[e] == b)break;
            c += d.children[e].chunkSize()
        }
        return c
    }

    function w(a, b) {
        var c = 0;
        a:do {
            for (var d = 0, e = a.children.length; d < e; ++d) {
                var f = a.children[d], g = f.height;
                if (b < g) {
                    a = f;
                    continue a
                }
                b -= g, c += f.chunkSize()
            }
            return c
        } while (!a.lines);
        for (var d = 0, e = a.lines.length; d < e; ++d) {
            var h = a.lines[d], i = h.height;
            if (b < i)break;
            b -= i
        }
        return c + d
    }

    function x(a, b) {
        var c = 0;
        a:do {
            for (var d = 0, e = a.children.length; d < e; ++d) {
                var f = a.children[d], g = f.chunkSize();
                if (b < g) {
                    a = f;
                    continue a
                }
                b -= g, c += f.height
            }
            return c
        } while (!a.lines);
        for (var d = 0; d < b; ++d)c += a.lines[d].height;
        return c
    }

    function y() {
        this.time = 0, this.done = [], this.undone = []
    }

    function z() {
        D(this)
    }

    function A(a) {
        return a.stop || (a.stop = z), a
    }

    function B(a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }

    function C(a) {
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
    }

    function D(a) {
        B(a), C(a)
    }

    function E(a) {
        return a.target || a.srcElement
    }

    function F(a) {
        if (a.which)return a.which;
        if (a.button & 1)return 1;
        if (a.button & 2)return 3;
        if (a.button & 4)return 2
    }

    function G(a, b) {
        var c = a.override && a.override.hasOwnProperty(b);
        return c ? a.override[b] : a[b]
    }

    function H(a, b, c, d) {
        if (typeof a.addEventListener == "function") {
            a.addEventListener(b, c, !1);
            if (d)return function () {
                a.removeEventListener(b, c, !1)
            }
        } else {
            var e = function (a) {
                c(a || window.event)
            };
            a.attachEvent("on" + b, e);
            if (d)return function () {
                a.detachEvent("on" + b, e)
            }
        }
    }

    function I() {
        this.id = null
    }

    function O(a, b, c) {
        b == null && (b = a.search(/[^\s\u00a0]/), b == -1 && (b = a.length));
        for (var d = 0, e = 0; d < b; ++d)a.charAt(d) == "\t" ? e += c - e % c : ++e;
        return e
    }

    function P(a) {
        return a.currentStyle ? a.currentStyle : window.getComputedStyle(a, null)
    }

    function Q(a, b) {
        var c = a.ownerDocument.body, d = 0, e = 0, f = !1;
        for (var g = a; g; g = g.offsetParent) {
            var h = g.offsetLeft, i = g.offsetTop;
            g == c ? (d += Math.abs(h), e += Math.abs(i)) : (d += h, e += i), b && P(g).position == "fixed" && (f = !0)
        }
        var j = b && !f ? null : c;
        for (var g = a.parentNode; g != j; g = g.parentNode)g.scrollLeft != null && (d -= g.scrollLeft, e -= g.scrollTop);
        return{left: d, top: e}
    }

    function R(a) {
        return a.textContent || a.innerText || a.nodeValue || ""
    }

    function S(a) {
        b ? (a.selectionStart = 0, a.selectionEnd = a.value.length) : a.select()
    }

    function T(a, b) {
        return a.line == b.line && a.ch == b.ch
    }

    function U(a, b) {
        return a.line < b.line || a.line == b.line && a.ch < b.ch
    }

    function V(a) {
        return{line: a.line, ch: a.ch}
    }

    function X(a) {
        return W.textContent = a, W.innerHTML
    }

    function Y(a, b) {
        if (!b)return 0;
        if (!a)return b.length;
        for (var c = a.length, d = b.length; c >= 0 && d >= 0; --c, --d)if (a.charAt(c) != b.charAt(d))break;
        return d + 1
    }

    function Z(a, b) {
        if (a.indexOf)return a.indexOf(b);
        for (var c = 0, d = a.length; c < d; ++c)if (a[c] == b)return c;
        return-1
    }

    function $(a) {
        return/\w/.test(a) || a.toUpperCase() != a.toLowerCase()
    }

    a.defaults = {value: "", mode: null, theme: "default", indentUnit: 2, indentWithTabs: !1, smartIndent: !0, tabSize: 4, keyMap: "default", extraKeys: null, electricChars: !0, onKeyEvent: null, lineWrapping: !1, lineNumbers: !1, gutter: !1, fixedGutter: !1, firstLineNumber: 1, readOnly: !1, onChange: null, onCursorActivity: null, onGutterClick: null, onHighlightComplete: null, onUpdate: null, onFocus: null, onBlur: null, onScroll: null, matchBrackets: !1, workTime: 100, workDelay: 200, pollInterval: 100, undoDepth: 40, tabindex: null, document: window.document};
    var b = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent), c = b || /Mac/.test(navigator.platform), d = /Win/.test(navigator.platform), e = {}, f = {};
    a.defineMode = function (b, c) {
        !a.defaults.mode && b != "null" && (a.defaults.mode = b), e[b] = c
    }, a.defineMIME = function (a, b) {
        f[a] = b
    }, a.getMode = function (b, c) {
        typeof c == "string" && f.hasOwnProperty(c) && (c = f[c]);
        if (typeof c == "string")var d = c, g = {}; else if (c != null)var d = c.name, g = c;
        var h = e[d];
        return h ? h(b, g || {}) : (window.console && console.warn("No mode " + d + " found, falling back to plain text."), a.getMode(b, "text/plain"))
    }, a.listModes = function () {
        var a = [];
        for (var b in e)e.propertyIsEnumerable(b) && a.push(b);
        return a
    }, a.listMIMEs = function () {
        var a = [];
        for (var b in f)f.propertyIsEnumerable(b) && a.push({mime: b, mode: f[b]});
        return a
    };
    var g = a.extensions = {};
    a.defineExtension = function (a, b) {
        g[a] = b
    };
    var h = a.commands = {selectAll: function (a) {
        a.setSelection({line: 0, ch: 0}, {line: a.lineCount() - 1})
    }, killLine: function (a) {
        var b = a.getCursor(!0), c = a.getCursor(!1), d = !T(b, c);
        !d && a.getLine(b.line).length == b.ch ? a.replaceRange("", b, {line: b.line + 1, ch: 0}) : a.replaceRange("", b, d ? c : {line: b.line})
    }, deleteLine: function (a) {
        var b = a.getCursor().line;
        a.replaceRange("", {line: b, ch: 0}, {line: b})
    }, undo: function (a) {
        a.undo()
    }, redo: function (a) {
        a.redo()
    }, goDocStart: function (a) {
        a.setCursor(0, 0, !0)
    }, goDocEnd: function (a) {
        a.setSelection({line: a.lineCount() - 1}, null, !0)
    }, goLineStart: function (a) {
        a.setCursor(a.getCursor().line, 0, !0)
    }, goLineStartSmart: function (a) {
        var b = a.getCursor(), c = a.getLine(b.line), d = Math.max(0, c.search(/\S/));
        a.setCursor(b.line, b.ch <= d && b.ch ? 0 : d, !0)
    }, goLineEnd: function (a) {
        a.setSelection({line: a.getCursor().line}, null, !0)
    }, goLineUp: function (a) {
        a.moveV(-1, "line")
    }, goLineDown: function (a) {
        a.moveV(1, "line")
    }, goPageUp: function (a) {
        a.moveV(-1, "page")
    }, goPageDown: function (a) {
        a.moveV(1, "page")
    }, goCharLeft: function (a) {
        a.moveH(-1, "char")
    }, goCharRight: function (a) {
        a.moveH(1, "char")
    }, goColumnLeft: function (a) {
        a.moveH(-1, "column")
    }, goColumnRight: function (a) {
        a.moveH(1, "column")
    }, goWordLeft: function (a) {
        a.moveH(-1, "word")
    }, goWordRight: function (a) {
        a.moveH(1, "word")
    }, delCharLeft: function (a) {
        a.deleteH(-1, "char")
    }, delCharRight: function (a) {
        a.deleteH(1, "char")
    }, delWordLeft: function (a) {
        a.deleteH(-1, "word")
    }, delWordRight: function (a) {
        a.deleteH(1, "word")
    }, indentAuto: function (a) {
        a.indentSelection("smart")
    }, indentMore: function (a) {
        a.indentSelection("add")
    }, indentLess: function (a) {
        a.indentSelection("subtract")
    }, insertTab: function (a) {
        a.replaceSelection("\t", "end")
    }, transposeChars: function (a) {
        var b = a.getCursor(), c = a.getLine(b.line);
        b.ch > 0 && b.ch < c.length - 1 && a.replaceRange(c.charAt(b.ch) + c.charAt(b.ch - 1), {line: b.line, ch: b.ch - 1}, {line: b.line, ch: b.ch + 1})
    }, newlineAndIndent: function (a) {
        a.replaceSelection("\n", "end"), a.indentLine(a.getCursor().line)
    }, toggleOverwrite: function (a) {
        a.toggleOverwrite()
    }}, i = a.keyMap = {};
    i.basic = {Left: "goCharLeft", Right: "goCharRight", Up: "goLineUp", Down: "goLineDown", End: "goLineEnd", Home: "goLineStartSmart", PageUp: "goPageUp", PageDown: "goPageDown", Delete: "delCharRight", Backspace: "delCharLeft", Tab: "indentMore", "Shift-Tab": "indentLess", Enter: "newlineAndIndent", Insert: "toggleOverwrite"}, i.pcDefault = {"Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo", "Ctrl-Home": "goDocStart", "Alt-Up": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Down": "goDocEnd", "Ctrl-Left": "goWordLeft", "Ctrl-Right": "goWordRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd", "Ctrl-Backspace": "delWordLeft", "Ctrl-Delete": "delWordRight", "Ctrl-S": "save", "Ctrl-F": "find", "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll", fallthrough: "basic"}, i.macDefault = {"Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goWordLeft", "Alt-Right": "goWordRight", "Cmd-Left": "goLineStart", "Cmd-Right": "goLineEnd", "Alt-Backspace": "delWordLeft", "Ctrl-Alt-Backspace": "delWordRight", "Alt-Delete": "delWordRight", "Cmd-S": "save", "Cmd-F": "find", "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll", fallthrough: ["basic", "emacsy"]}, i["default"] = c ? i.macDefault : i.pcDefault, i.emacsy = {"Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown", "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd", "Ctrl-V": "goPageUp", "Shift-Ctrl-V": "goPageDown", "Ctrl-D": "delCharRight", "Ctrl-H": "delCharLeft", "Alt-D": "delWordRight", "Alt-Backspace": "delWordLeft", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars"}, a.fromTextArea = function (b, c) {
        function d() {
            b.value = h.getValue()
        }

        c || (c = {}), c.value = b.value, !c.tabindex && b.tabindex && (c.tabindex = b.tabindex);
        if (b.form) {
            var e = H(b.form, "submit", d, !0);
            if (typeof b.form.submit == "function") {
                var f = b.form.submit;

                function g() {
                    d(), b.form.submit = f, b.form.submit(), b.form.submit = g
                }

                b.form.submit = g
            }
        }
        b.style.display = "none";
        var h = a(function (a) {
            b.parentNode.insertBefore(a, b.nextSibling)
        }, c);
        return h.save = d, h.getTextArea = function () {
            return b
        }, h.toTextArea = function () {
            d(), b.parentNode.removeChild(h.getWrapperElement()), b.style.display = "", b.form && (e(), typeof b.form.submit == "function" && (b.form.submit = f))
        }, h
    }, a.copyState = l, a.startState = m, n.prototype = {eol: function () {
        return this.pos >= this.string.length
    }, sol: function () {
        return this.pos == 0
    }, peek: function () {
        return this.string.charAt(this.pos)
    }, next: function () {
        if (this.pos < this.string.length)return this.string.charAt(this.pos++)
    }, eat: function (a) {
        var b = this.string.charAt(this.pos);
        if (typeof a == "string")var c = b == a; else var c = b && (a.test ? a.test(b) : a(b));
        if (c)return++this.pos, b
    }, eatWhile: function (a) {
        var b = this.pos;
        while (this.eat(a));
        return this.pos > b
    }, eatSpace: function () {
        var a = this.pos;
        while (/[\s\u00a0]/.test(this.string.charAt(this.pos)))++this.pos;
        return this.pos > a
    }, skipToEnd: function () {
        this.pos = this.string.length
    }, skipTo: function (a) {
        var b = this.string.indexOf(a, this.pos);
        if (b > -1)return this.pos = b, !0
    }, backUp: function (a) {
        this.pos -= a
    }, column: function () {
        return O(this.string, this.start, this.tabSize)
    }, indentation: function () {
        return O(this.string, null, this.tabSize)
    }, match: function (a, b, c) {
        if (typeof a != "string") {
            var e = this.string.slice(this.pos).match(a);
            return e && b !== !1 && (this.pos += e[0].length), e
        }
        function d(a) {
            return c ? a.toLowerCase() : a
        }

        if (d(this.string).indexOf(d(a), this.pos) == this.pos)return b !== !1 && (this.pos += a.length), !0
    }, current: function () {
        return this.string.slice(this.start, this.pos)
    }}, a.StringStream = n, o.prototype = {attach: function (a) {
        this.set.push(a)
    }, detach: function (a) {
        var b = Z(this.set, a);
        b > -1 && this.set.splice(b, 1)
    }, split: function (a, b) {
        if (this.to <= a && this.to != null)return null;
        var c = this.from < a || this.from == null ? null : this.from - a + b, d = this.to == null ? null : this.to - a + b;
        return new o(c, d, this.style, this.set)
    }, dup: function () {
        return new o(null, null, this.style, this.set)
    }, clipTo: function (a, b, c, d, e) {
        this.from != null && this.from >= b && (this.from = Math.max(d, this.from) + e), this.to != null && this.to > b && (this.to = d < this.to ? this.to + e : b), a && d > this.from && (d < this.to || this.to == null) && (this.from = null), c && (b < this.to || this.to == null) && (b > this.from || this.from == null) && (this.to = null)
    }, isDead: function () {
        return this.from != null && this.to != null && this.from >= this.to
    }, sameSet: function (a) {
        return this.set == a.set
    }}, p.prototype = {attach: function (a) {
        this.line = a
    }, detach: function (a) {
        this.line == a && (this.line = null)
    }, split: function (a, b) {
        if (a < this.from)return this.from = this.to = this.from - a + b, this
    }, isDead: function () {
        return this.from > this.to
    }, clipTo: function (a, b, c, d, e) {
        (a || b < this.from) && (c || d > this.to) ? (this.from = 0, this.to = -1) : this.from > b && (this.from = this.to = Math.max(d, this.from) + e)
    }, sameSet: function (a) {
        return!1
    }, find: function () {
        return!this.line || !this.line.parent ? null : {line: v(this.line), ch: this.from}
    }, clear: function () {
        if (this.line) {
            var a = Z(this.line.marked, this);
            a != -1 && this.line.marked.splice(a, 1), this.line = null
        }
    }}, q.inheritMarks = function (a, b) {
        var c = new q(a), d = b && b.marked;
        if (d)for (var e = 0; e < d.length; ++e)if (d[e].to == null && d[e].style) {
            var f = c.marked || (c.marked = []), g = d[e], h = g.dup();
            f.push(h), h.attach(c)
        }
        return c
    }, q.prototype = {replace: function (a, b, c) {
        var d = [], e = this.marked, f = b == null ? this.text.length : b;
        r(0, a, this.styles, d), c && d.push(c, null), r(f, this.text.length, this.styles, d), this.styles = d, this.text = this.text.slice(0, a) + c + this.text.slice(f), this.stateAfter = null;
        if (e) {
            var g = c.length - (f - a);
            for (var h = 0; h < e.length; ++h) {
                var i = e[h];
                i.clipTo(a == null, a || 0, b == null, f, g), i.isDead() && (i.detach(this), e.splice(h--, 1))
            }
        }
    }, split: function (a, b) {
        var c = [b, null], d = this.marked;
        r(a, this.text.length, this.styles, c);
        var e = new q(b + this.text.slice(a), c);
        if (d)for (var f = 0; f < d.length; ++f) {
            var g = d[f], h = g.split(a, b.length);
            h && (e.marked || (e.marked = []), e.marked.push(h), h.attach(e))
        }
        return e
    }, append: function (a) {
        var b = this.text.length, c = a.marked, d = this.marked;
        this.text += a.text, r(0, a.text.length, a.styles, this.styles);
        if (d)for (var e = 0; e < d.length; ++e)d[e].to == null && (d[e].to = b);
        if (c && c.length) {
            d || (this.marked = d = []);
            a:for (var e = 0; e < c.length; ++e) {
                var f = c[e];
                if (!f.from)for (var g = 0; g < d.length; ++g) {
                    var h = d[g];
                    if (h.to == b && h.sameSet(f)) {
                        h.to = f.to == null ? null : f.to + b, h.isDead() && (h.detach(this), c.splice(e--, 1));
                        continue a
                    }
                }
                d.push(f), f.attach(this), f.from += b, f.to != null && (f.to += b)
            }
        }
    }, fixMarkEnds: function (a) {
        var b = this.marked, c = a.marked;
        if (!b)return;
        for (var d = 0; d < b.length; ++d) {
            var e = b[d], f = e.to == null;
            if (f && c)for (var g = 0; g < c.length; ++g)if (c[g].sameSet(e)) {
                f = !1;
                break
            }
            f && (e.to = this.text.length)
        }
    }, fixMarkStarts: function () {
        var a = this.marked;
        if (!a)return;
        for (var b = 0; b < a.length; ++b)a[b].from == null && (a[b].from = 0)
    }, addMark: function (a) {
        a.attach(this), this.marked == null && (this.marked = []), this.marked.push(a), this.marked.sort(function (a, b) {
            return(a.from || 0) - (b.from || 0)
        })
    }, highlight: function (a, b, c) {
        var d = new n(this.text, c), e = this.styles, f = 0, g = !1, h = e[0], i;
        this.text == "" && a.blankLine && a.blankLine(b);
        while (!d.eol()) {
            var j = a.token(d, b), k = this.text.slice(d.start, d.pos);
            d.start = d.pos, f && e[f - 1] == j ? e[f - 2] += k : k && (!g && (e[f + 1] != j || f && e[f - 2] != i) && (g = !0), e[f++] = k, e[f++] = j, i = h, h = e[f]);
            if (d.pos > 5e3) {
                e[f++] = this.text.slice(d.pos), e[f++] = null;
                break
            }
        }
        return e.length != f && (e.length = f, g = !0), f && e[f - 2] != i && (g = !0), g || (e.length < 5 && this.text.length < 10 ? null : !1)
    }, getTokenAt: function (a, b, c) {
        var d = this.text, e = new n(d);
        while (e.pos < c && !e.eol()) {
            e.start = e.pos;
            var f = a.token(e, b)
        }
        return{start: e.start, end: e.pos, string: e.current(), className: f || null, state: b}
    }, indentation: function (a) {
        return O(this.text, null, a)
    }, getHTML: function (a, b) {
        function f(b, f) {
            if (!b)return;
            d && L && b.charAt(0) == " " && (b = "\u00a0" + b.slice(1)), d = !1;
            if (b.indexOf("\t") == -1) {
                e += b.length;
                var g = X(b)
            } else {
                var g = "";
                for (var h = 0; ;) {
                    var i = b.indexOf("\t", h);
                    if (i == -1) {
                        g += X(b.slice(h)), e += b.length - h;
                        break
                    }
                    e += i - h;
                    var j = a(e);
                    g += X(b.slice(h, i)) + j.html, e += j.width, h = i + 1
                }
            }
            f ? c.push('<span class="', f, '">', g, "</span>") : c.push(g)
        }

        function k(a) {
            return a ? "cm-" + a.replace(/ +/g, " cm-") : null
        }

        var c = [], d = !0, e = 0, g = this.styles, h = this.text, i = this.marked, j = h.length;
        b != null && (j = Math.min(b, j));
        if (!h && b == null)f(" "); else if (!i || !i.length)for (var l = 0, m = 0; m < j; l += 2) {
            var n = g[l], o = g[l + 1], p = n.length;
            m + p > j && (n = n.slice(0, j - m)), m += p, f(n, k(o))
        } else {
            var q = 0, l = 0, r = "", o, s = 0, t = i[0].from || 0, u = [], v = 0;

            function w() {
                var a;
                while (v < i.length && ((a = i[v]).from == q || a.from == null))a.style != null && u.push(a), ++v;
                t = v < i.length ? i[v].from : Infinity;
                for (var b = 0; b < u.length; ++b) {
                    var c = u[b].to || Infinity;
                    c == q ? u.splice(b--, 1) : t = Math.min(c, t)
                }
            }

            var x = 0;
            while (q < j) {
                t == q && w();
                var y = Math.min(j, t);
                for (; ;) {
                    if (r) {
                        var z = q + r.length, A = o;
                        for (var B = 0; B < u.length; ++B)A = (A ? A + " " : "") + u[B].style;
                        f(z > y ? r.slice(0, y - q) : r, A);
                        if (z >= y) {
                            r = r.slice(y - q), q = y;
                            break
                        }
                        q = z
                    }
                    r = g[l++], o = k(g[l++])
                }
            }
        }
        return c.join("")
    }, cleanUp: function () {
        this.parent = null;
        if (this.marked)for (var a = 0, b = this.marked.length; a < b; ++a)this.marked[a].detach(this)
    }}, s.prototype = {chunkSize: function () {
        return this.lines.length
    }, remove: function (a, b, c) {
        for (var d = a, e = a + b; d < e; ++d) {
            var f = this.lines[d];
            this.height -= f.height, f.cleanUp();
            if (f.handlers)for (var g = 0; g < f.handlers.length; ++g)c.push(f.handlers[g])
        }
        this.lines.splice(a, b)
    }, collapse: function (a) {
        a.splice.apply(a, [a.length, 0].concat(this.lines))
    }, insertHeight: function (a, b, c) {
        this.height += c, this.lines.splice.apply(this.lines, [a, 0].concat(b));
        for (var d = 0, e = b.length; d < e; ++d)b[d].parent = this
    }, iterN: function (a, b, c) {
        for (var d = a + b; a < d; ++a)if (c(this.lines[a]))return!0
    }}, t.prototype = {chunkSize: function () {
        return this.size
    }, remove: function (a, b, c) {
        this.size -= b;
        for (var d = 0; d < this.children.length; ++d) {
            var e = this.children[d], f = e.chunkSize();
            if (a < f) {
                var g = Math.min(b, f - a), h = e.height;
                e.remove(a, g, c), this.height -= h - e.height, f == g && (this.children.splice(d--, 1), e.parent = null);
                if ((b -= g) == 0)break;
                a = 0
            } else a -= f
        }
        if (this.size - b < 25) {
            var i = [];
            this.collapse(i), this.children = [new s(i)], this.children[0].parent = this
        }
    }, collapse: function (a) {
        for (var b = 0, c = this.children.length; b < c; ++b)this.children[b].collapse(a)
    }, insert: function (a, b) {
        var c = 0;
        for (var d = 0, e = b.length; d < e; ++d)c += b[d].height;
        this.insertHeight(a, b, c)
    }, insertHeight: function (a, b, c) {
        this.size += b.length, this.height += c;
        for (var d = 0, e = this.children.length; d < e; ++d) {
            var f = this.children[d], g = f.chunkSize();
            if (a <= g) {
                f.insertHeight(a, b, c);
                if (f.lines && f.lines.length > 50) {
                    while (f.lines.length > 50) {
                        var h = f.lines.splice(f.lines.length - 25, 25), i = new s(h);
                        f.height -= i.height, this.children.splice(d + 1, 0, i), i.parent = this
                    }
                    this.maybeSpill()
                }
                break
            }
            a -= g
        }
    }, maybeSpill: function () {
        if (this.children.length <= 10)return;
        var a = this;
        do {
            var b = a.children.splice(a.children.length - 5, 5), c = new t(b);
            if (!a.parent) {
                var d = new t(a.children);
                d.parent = a, a.children = [d, c], a = d
            } else {
                a.size -= c.size, a.height -= c.height;
                var e = Z(a.parent.children, a);
                a.parent.children.splice(e + 1, 0, c)
            }
            c.parent = a.parent
        } while (a.children.length > 10);
        a.parent.maybeSpill()
    }, iter: function (a, b, c) {
        this.iterN(a, b - a, c)
    }, iterN: function (a, b, c) {
        for (var d = 0, e = this.children.length; d < e; ++d) {
            var f = this.children[d], g = f.chunkSize();
            if (a < g) {
                var h = Math.min(b, g - a);
                if (f.iterN(a, h, c))return!0;
                if ((b -= h) == 0)break;
                a = 0
            } else a -= g
        }
    }}, y.prototype = {addChange: function (a, b, c) {
        this.undone.length = 0;
        var d = +(new Date), e = this.done[this.done.length - 1], f = e && e[e.length - 1], g = d - this.time;
        if (g > 400 || !f)this.done.push([
            {start: a, added: b, old: c}
        ]); else if (f.start > a + c.length || f.start + f.added < a - f.added + f.old.length)e.push({start: a, added: b, old: c}); else {
            var h = 0;
            if (a < f.start) {
                for (var i = f.start - a - 1; i >= 0; --i)f.old.unshift(c[i]);
                f.added += f.start - a, f.start = a
            } else f.start < a && (h = a - f.start, b += h);
            for (var i = f.added - h, j = c.length; i < j; ++i)f.old.push(c[i]);
            f.added < b && (f.added = b)
        }
        this.time = d
    }}, a.e_stop = D, a.e_preventDefault = B, a.e_stopPropagation = C, a.connect = H, I.prototype = {set: function (a, b) {
        clearTimeout(this.id), this.id = setTimeout(b, a)
    }};
    var J = function () {
        if (/MSIE [1-8]\b/.test(navigator.userAgent))return!1;
        var a = document.createElement("div");
        return"draggable"in a
    }(), K = /gecko\/\d{7}/i.test(navigator.userAgent), L = /MSIE \d/.test(navigator.userAgent), M = /WebKit\//.test(navigator.userAgent), N = "\n";
    (function () {
        var a = document.createElement("textarea");
        a.value = "foo\nbar", a.value.indexOf("\r") > -1 && (N = "\r\n")
    })(), document.documentElement.getBoundingClientRect != null && (Q = function (a, b) {
        try {
            var c = a.getBoundingClientRect();
            c = {top: c.top, left: c.left}
        } catch (d) {
            c = {top: 0, left: 0}
        }
        if (!b)if (window.pageYOffset == null) {
            var e = document.documentElement || document.body.parentNode;
            e.scrollTop == null && (e = document.body), c.top += e.scrollTop, c.left += e.scrollLeft
        } else c.top += window.pageYOffset, c.left += window.pageXOffset;
        return c
    });
    var W = document.createElement("pre");
    X("a") == "\na" ? X = function (a) {
        return W.textContent = a, W.innerHTML.slice(1)
    } : X("\t") != "\t" && (X = function (a) {
        return W.innerHTML = "", W.appendChild(document.createTextNode(a)), W.innerHTML
    }), a.htmlEscape = X;
    var _ = "\n\nb".split(/\n/).length != 3 ? function (a) {
        var b = 0, c, d = [];
        while ((c = a.indexOf("\n", b)) > -1)d.push(a.slice(b, a.charAt(c - 1) == "\r" ? c - 1 : c)), b = c + 1;
        return d.push(a.slice(b)), d
    } : function (a) {
        return a.split(/\r?\n/)
    };
    a.splitLines = _;
    var ba = window.getSelection ? function (a) {
        try {
            return a.selectionStart != a.selectionEnd
        } catch (b) {
            return!1
        }
    } : function (a) {
        try {
            var b = a.ownerDocument.selection.createRange()
        } catch (c) {
        }
        return!b || b.parentElement() != a ? !1 : b.compareEndPoints("StartToEnd", b) != 0
    };
    a.defineMode("null", function () {
        return{token: function (a) {
            a.skipToEnd()
        }}
    }), a.defineMIME("text/plain", "null");
    var bb = {3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert", 46: "Delete", 59: ";", 91: "Mod", 92: "Mod", 93: "Mod", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'", 63276: "PageUp", 63277: "PageDown", 63275: "End", 63273: "Home", 63234: "Left", 63232: "Up", 63235: "Right", 63233: "Down", 63302: "Insert", 63272: "Delete"};
    return a.keyNames = bb, function () {
        for (var a = 0; a < 10; a++)bb[a + 48] = String(a);
        for (var a = 65; a <= 90; a++)bb[a] = String.fromCharCode(a);
        for (var a = 1; a <= 12; a++)bb[a + 111] = bb[a + 63235] = "F" + a
    }(), a
}();
CodeMirror.defineMode("css", function (a) {
    function d(a, b) {
        return c = b, a
    }

    function e(a, b) {
        var c = a.next();
        if (c == "@")return a.eatWhile(/[\w\\\-]/), d("meta", a.current());
        if (c == "/" && a.eat("*"))return b.tokenize = f, f(a, b);
        if (c == "<" && a.eat("!"))return b.tokenize = g, g(a, b);
        if (c == "=")d(null, "compare"); else return c != "~" && c != "|" || !a.eat("=") ? c == '"' || c == "'" ? (b.tokenize = h(c), b.tokenize(a, b)) : c == "#" ? (a.eatWhile(/[\w\\\-]/), d("atom", "hash")) : c == "!" ? (a.match(/^\s*\w*/), d("keyword", "important")) : /\d/.test(c) ? (a.eatWhile(/[\w.%]/), d("number", "unit")) : /[,.+>*\/]/.test(c) ? d(null, "select-op") : /[;{}:\[\]]/.test(c) ? d(null, c) : (a.eatWhile(/[\w\\\-]/), d("variable", "variable")) : d(null, "compare")
    }

    function f(a, b) {
        var c = !1, f;
        while ((f = a.next()) != null) {
            if (c && f == "/") {
                b.tokenize = e;
                break
            }
            c = f == "*"
        }
        return d("comment", "comment")
    }

    function g(a, b) {
        var c = 0, f;
        while ((f = a.next()) != null) {
            if (c >= 2 && f == ">") {
                b.tokenize = e;
                break
            }
            c = f == "-" ? c + 1 : 0
        }
        return d("comment", "comment")
    }

    function h(a) {
        return function (b, c) {
            var f = !1, g;
            while ((g = b.next()) != null) {
                if (g == a && !f)break;
                f = !f && g == "\\"
            }
            return f || (c.tokenize = e), d("string", "string")
        }
    }

    var b = a.indentUnit, c;
    return{startState: function (a) {
        return{tokenize: e, baseIndent: a || 0, stack: []}
    }, token: function (a, b) {
        if (a.eatSpace())return null;
        var d = b.tokenize(a, b), e = b.stack[b.stack.length - 1];
        if (c == "hash" && e == "rule")d = "atom"; else if (d == "variable")if (e == "rule")d = "number"; else if (!e || e == "@media{")d = "tag";
        return e == "rule" && /^[\{\};]$/.test(c) && b.stack.pop(), c == "{" ? e == "@media" ? b.stack[b.stack.length - 1] = "@media{" : b.stack.push("{") : c == "}" ? b.stack.pop() : c == "@media" ? b.stack.push("@media") : e == "{" && c != "comment" && b.stack.push("rule"), d
    }, indent: function (a, c) {
        var d = a.stack.length;
        return/^\}/.test(c) && (d -= a.stack[a.stack.length - 1] == "rule" ? 2 : 1), a.baseIndent + d * b
    }, electricChars: "}"}
}), CodeMirror.defineMIME("text/css", "css")