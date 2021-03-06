!(function (e) {
  function t(o) {
    if (n[o]) return n[o].exports;
    var i = (n[o] = { i: o, l: !1, exports: {} });
    return e[o].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, o) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: o,
        });
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = "./"),
    t((t.s = 1));
})([
  function (e, t, n) {
    "use strict";
    (function (e) {
      var n,
        o,
        i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              };
      /*!
       * jQuery JavaScript Library v3.5.1
       * https://jquery.com/
       *
       * Includes Sizzle.js
       * https://sizzlejs.com/
       *
       * Copyright JS Foundation and other contributors
       * Released under the MIT license
       * https://jquery.org/license
       *
       * Date: 2020-05-04T22:49Z
       */
      !(function (t, n) {
        "object" === i(e) && "object" === i(e.exports)
          ? (e.exports = t.document
              ? n(t, !0)
              : function (e) {
                  if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                  return n(e);
                })
          : n(t);
      })("undefined" != typeof window ? window : void 0, function (s, r) {
        function a(e, t, n) {
          n = n || $e;
          var o,
            i,
            s = n.createElement("script");
          if (((s.text = e), t))
            for (o in Ae)
              (i = t[o] || (t.getAttribute && t.getAttribute(o))) &&
                s.setAttribute(o, i);
          n.head.appendChild(s).parentNode.removeChild(s);
        }
        function l(e) {
          return null == e
            ? e + ""
            : "object" === (void 0 === e ? "undefined" : i(e)) ||
              "function" == typeof e
            ? ye[be.call(e)] || "object"
            : void 0 === e
            ? "undefined"
            : i(e);
        }
        function c(e) {
          var t = !!e && "length" in e && e.length,
            n = l(e);
          return (
            !ke(e) &&
            !Ce(e) &&
            ("array" === n ||
              0 === t ||
              ("number" == typeof t && t > 0 && t - 1 in e))
          );
        }
        function d(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        function u(e, t, n) {
          return ke(t)
            ? _e.grep(e, function (e, o) {
                return !!t.call(e, o, e) !== n;
              })
            : t.nodeType
            ? _e.grep(e, function (e) {
                return (e === t) !== n;
              })
            : "string" != typeof t
            ? _e.grep(e, function (e) {
                return me.call(t, e) > -1 !== n;
              })
            : _e.filter(t, e, n);
        }
        function p(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e;
        }
        function f(e) {
          var t = {};
          return (
            _e.each(e.match(Ne) || [], function (e, n) {
              t[n] = !0;
            }),
            t
          );
        }
        function h(e) {
          return e;
        }
        function g(e) {
          throw e;
        }
        function v(e, t, n, o) {
          var i;
          try {
            e && ke((i = e.promise))
              ? i.call(e).done(t).fail(n)
              : e && ke((i = e.then))
              ? i.call(e, t, n)
              : t.apply(void 0, [e].slice(o));
          } catch (e) {
            n.apply(void 0, [e]);
          }
        }
        function m() {
          $e.removeEventListener("DOMContentLoaded", m),
            s.removeEventListener("load", m),
            _e.ready();
        }
        function y(e, t) {
          return t.toUpperCase();
        }
        function b(e) {
          return e.replace(Re, "ms-").replace(Be, y);
        }
        function w() {
          this.expando = _e.expando + w.uid++;
        }
        function x(e) {
          return (
            "true" === e ||
            ("false" !== e &&
              ("null" === e
                ? null
                : e === +e + ""
                ? +e
                : Ue.test(e)
                ? JSON.parse(e)
                : e))
          );
        }
        function T(e, t, n) {
          var o;
          if (void 0 === n && 1 === e.nodeType)
            if (
              ((o = "data-" + t.replace(Ve, "-$&").toLowerCase()),
              "string" == typeof (n = e.getAttribute(o)))
            ) {
              try {
                n = x(n);
              } catch (e) {}
              Ye.set(e, t, n);
            } else n = void 0;
          return n;
        }
        function S(e, t, n, o) {
          var i,
            s,
            r = 20,
            a = o
              ? function () {
                  return o.cur();
                }
              : function () {
                  return _e.css(e, t, "");
                },
            l = a(),
            c = (n && n[3]) || (_e.cssNumber[t] ? "" : "px"),
            d =
              e.nodeType &&
              (_e.cssNumber[t] || ("px" !== c && +l)) &&
              Ze.exec(_e.css(e, t));
          if (d && d[3] !== c) {
            for (l /= 2, c = c || d[3], d = +l || 1; r--; )
              _e.style(e, t, d + c),
                (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (r = 0),
                (d /= s);
            (d *= 2), _e.style(e, t, d + c), (n = n || []);
          }
          return (
            n &&
              ((d = +d || +l || 0),
              (i = n[1] ? d + (n[1] + 1) * n[2] : +n[2]),
              o && ((o.unit = c), (o.start = d), (o.end = i))),
            i
          );
        }
        function k(e) {
          var t,
            n = e.ownerDocument,
            o = e.nodeName,
            i = nt[o];
          return (
            i ||
            ((t = n.body.appendChild(n.createElement(o))),
            (i = _e.css(t, "display")),
            t.parentNode.removeChild(t),
            "none" === i && (i = "block"),
            (nt[o] = i),
            i)
          );
        }
        function C(e, t) {
          for (var n, o, i = [], s = 0, r = e.length; s < r; s++)
            (o = e[s]),
              o.style &&
                ((n = o.style.display),
                t
                  ? ("none" === n &&
                      ((i[s] = Xe.get(o, "display") || null),
                      i[s] || (o.style.display = "")),
                    "" === o.style.display && tt(o) && (i[s] = k(o)))
                  : "none" !== n && ((i[s] = "none"), Xe.set(o, "display", n)));
          for (s = 0; s < r; s++) null != i[s] && (e[s].style.display = i[s]);
          return e;
        }
        function $(e, t) {
          var n;
          return (
            (n =
              void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : []),
            void 0 === t || (t && d(e, t)) ? _e.merge([e], n) : n
          );
        }
        function A(e, t) {
          for (var n = 0, o = e.length; n < o; n++)
            Xe.set(e[n], "globalEval", !t || Xe.get(t[n], "globalEval"));
        }
        function _(e, t, n, o, i) {
          for (
            var s,
              r,
              a,
              c,
              d,
              u,
              p = t.createDocumentFragment(),
              f = [],
              h = 0,
              g = e.length;
            h < g;
            h++
          )
            if ((s = e[h]) || 0 === s)
              if ("object" === l(s)) _e.merge(f, s.nodeType ? [s] : s);
              else if (at.test(s)) {
                for (
                  r = r || p.appendChild(t.createElement("div")),
                    a = (it.exec(s) || ["", ""])[1].toLowerCase(),
                    c = rt[a] || rt._default,
                    r.innerHTML = c[1] + _e.htmlPrefilter(s) + c[2],
                    u = c[0];
                  u--;

                )
                  r = r.lastChild;
                _e.merge(f, r.childNodes),
                  (r = p.firstChild),
                  (r.textContent = "");
              } else f.push(t.createTextNode(s));
          for (p.textContent = "", h = 0; (s = f[h++]); )
            if (o && _e.inArray(s, o) > -1) i && i.push(s);
            else if (
              ((d = Je(s)), (r = $(p.appendChild(s), "script")), d && A(r), n)
            )
              for (u = 0; (s = r[u++]); ) st.test(s.type || "") && n.push(s);
          return p;
        }
        function E() {
          return !0;
        }
        function P() {
          return !1;
        }
        function L(e, t) {
          return (e === D()) == ("focus" === t);
        }
        function D() {
          try {
            return $e.activeElement;
          } catch (e) {}
        }
        function j(e, t, n, o, s, r) {
          var a, l;
          if ("object" === (void 0 === t ? "undefined" : i(t))) {
            "string" != typeof n && ((o = o || n), (n = void 0));
            for (l in t) j(e, l, n, o, t[l], r);
            return e;
          }
          if (
            (null == o && null == s
              ? ((s = n), (o = n = void 0))
              : null == s &&
                ("string" == typeof n
                  ? ((s = o), (o = void 0))
                  : ((s = o), (o = n), (n = void 0))),
            !1 === s)
          )
            s = P;
          else if (!s) return e;
          return (
            1 === r &&
              ((a = s),
              (s = function (e) {
                return _e().off(e), a.apply(this, arguments);
              }),
              (s.guid = a.guid || (a.guid = _e.guid++))),
            e.each(function () {
              _e.event.add(this, t, s, o, n);
            })
          );
        }
        function H(e, t, n) {
          if (!n)
            return void (void 0 === Xe.get(e, t) && _e.event.add(e, t, E));
          Xe.set(e, t, !1),
            _e.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var o,
                  i,
                  s = Xe.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (s.length)
                    (_e.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((s = he.call(arguments)),
                    Xe.set(this, t, s),
                    (o = n(this, t)),
                    this[t](),
                    (i = Xe.get(this, t)),
                    s !== i || o ? Xe.set(this, t, !1) : (i = {}),
                    s !== i)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), i.value
                    );
                } else
                  s.length &&
                    (Xe.set(this, t, {
                      value: _e.event.trigger(
                        _e.extend(s[0], _e.Event.prototype),
                        s.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            });
        }
        function M(e, t) {
          return d(e, "table") && d(11 !== t.nodeType ? t : t.firstChild, "tr")
            ? _e(e).children("tbody")[0] || e
            : e;
        }
        function O(e) {
          return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
        }
        function I(e) {
          return (
            "true/" === (e.type || "").slice(0, 5)
              ? (e.type = e.type.slice(5))
              : e.removeAttribute("type"),
            e
          );
        }
        function N(e, t) {
          var n, o, i, s, r, a, l;
          if (1 === t.nodeType) {
            if (Xe.hasData(e) && ((s = Xe.get(e)), (l = s.events))) {
              Xe.remove(t, "handle events");
              for (i in l)
                for (n = 0, o = l[i].length; n < o; n++)
                  _e.event.add(t, i, l[i][n]);
            }
            Ye.hasData(e) &&
              ((r = Ye.access(e)), (a = _e.extend({}, r)), Ye.set(t, a));
          }
        }
        function z(e, t) {
          var n = t.nodeName.toLowerCase();
          "input" === n && ot.test(e.type)
            ? (t.checked = e.checked)
            : ("input" !== n && "textarea" !== n) ||
              (t.defaultValue = e.defaultValue);
        }
        function q(e, t, n, o) {
          t = ge(t);
          var i,
            s,
            r,
            l,
            c,
            d,
            u = 0,
            p = e.length,
            f = p - 1,
            h = t[0],
            g = ke(h);
          if (
            g ||
            (p > 1 && "string" == typeof h && !Se.checkClone && pt.test(h))
          )
            return e.each(function (i) {
              var s = e.eq(i);
              g && (t[0] = h.call(this, i, s.html())), q(s, t, n, o);
            });
          if (
            p &&
            ((i = _(t, e[0].ownerDocument, !1, e, o)),
            (s = i.firstChild),
            1 === i.childNodes.length && (i = s),
            s || o)
          ) {
            for (r = _e.map($(i, "script"), O), l = r.length; u < p; u++)
              (c = i),
                u !== f &&
                  ((c = _e.clone(c, !0, !0)), l && _e.merge(r, $(c, "script"))),
                n.call(e[u], c, u);
            if (l)
              for (
                d = r[r.length - 1].ownerDocument, _e.map(r, I), u = 0;
                u < l;
                u++
              )
                (c = r[u]),
                  st.test(c.type || "") &&
                    !Xe.access(c, "globalEval") &&
                    _e.contains(d, c) &&
                    (c.src && "module" !== (c.type || "").toLowerCase()
                      ? _e._evalUrl &&
                        !c.noModule &&
                        _e._evalUrl(
                          c.src,
                          { nonce: c.nonce || c.getAttribute("nonce") },
                          d
                        )
                      : a(c.textContent.replace(ft, ""), c, d));
          }
          return e;
        }
        function F(e, t, n) {
          for (
            var o, i = t ? _e.filter(t, e) : e, s = 0;
            null != (o = i[s]);
            s++
          )
            n || 1 !== o.nodeType || _e.cleanData($(o)),
              o.parentNode &&
                (n && Je(o) && A($(o, "script")), o.parentNode.removeChild(o));
          return e;
        }
        function R(e, t, n) {
          var o,
            i,
            s,
            r,
            a = e.style;
          return (
            (n = n || gt(e)),
            n &&
              ((r = n.getPropertyValue(t) || n[t]),
              "" !== r || Je(e) || (r = _e.style(e, t)),
              !Se.pixelBoxStyles() &&
                ht.test(r) &&
                mt.test(t) &&
                ((o = a.width),
                (i = a.minWidth),
                (s = a.maxWidth),
                (a.minWidth = a.maxWidth = a.width = r),
                (r = n.width),
                (a.width = o),
                (a.minWidth = i),
                (a.maxWidth = s))),
            void 0 !== r ? r + "" : r
          );
        }
        function B(e, t) {
          return {
            get: function () {
              return e()
                ? void delete this.get
                : (this.get = t).apply(this, arguments);
            },
          };
        }
        function W(e) {
          for (var t = e[0].toUpperCase() + e.slice(1), n = yt.length; n--; )
            if ((e = yt[n] + t) in bt) return e;
        }
        function X(e) {
          var t = _e.cssProps[e] || wt[e];
          return t || (e in bt ? e : (wt[e] = W(e) || e));
        }
        function Y(e, t, n) {
          var o = Ze.exec(t);
          return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t;
        }
        function U(e, t, n, o, i, s) {
          var r = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
          if (n === (o ? "border" : "content")) return 0;
          for (; r < 4; r += 2)
            "margin" === n && (l += _e.css(e, n + Ge[r], !0, i)),
              o
                ? ("content" === n &&
                    (l -= _e.css(e, "padding" + Ge[r], !0, i)),
                  "margin" !== n &&
                    (l -= _e.css(e, "border" + Ge[r] + "Width", !0, i)))
                : ((l += _e.css(e, "padding" + Ge[r], !0, i)),
                  "padding" !== n
                    ? (l += _e.css(e, "border" + Ge[r] + "Width", !0, i))
                    : (a += _e.css(e, "border" + Ge[r] + "Width", !0, i)));
          return (
            !o &&
              s >= 0 &&
              (l +=
                Math.max(
                  0,
                  Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      s -
                      l -
                      a -
                      0.5
                  )
                ) || 0),
            l
          );
        }
        function V(e, t, n) {
          var o = gt(e),
            i = !Se.boxSizingReliable() || n,
            s = i && "border-box" === _e.css(e, "boxSizing", !1, o),
            r = s,
            a = R(e, t, o),
            l = "offset" + t[0].toUpperCase() + t.slice(1);
          if (ht.test(a)) {
            if (!n) return a;
            a = "auto";
          }
          return (
            ((!Se.boxSizingReliable() && s) ||
              (!Se.reliableTrDimensions() && d(e, "tr")) ||
              "auto" === a ||
              (!parseFloat(a) && "inline" === _e.css(e, "display", !1, o))) &&
              e.getClientRects().length &&
              ((s = "border-box" === _e.css(e, "boxSizing", !1, o)),
              (r = l in e) && (a = e[l])),
            (a = parseFloat(a) || 0) +
              U(e, t, n || (s ? "border" : "content"), r, o, a) +
              "px"
          );
        }
        function Q(e, t, n, o, i) {
          return new Q.prototype.init(e, t, n, o, i);
        }
        function Z() {
          $t &&
            (!1 === $e.hidden && s.requestAnimationFrame
              ? s.requestAnimationFrame(Z)
              : s.setTimeout(Z, _e.fx.interval),
            _e.fx.tick());
        }
        function G() {
          return (
            s.setTimeout(function () {
              Ct = void 0;
            }),
            (Ct = Date.now())
          );
        }
        function K(e, t) {
          var n,
            o = 0,
            i = { height: e };
          for (t = t ? 1 : 0; o < 4; o += 2 - t)
            (n = Ge[o]), (i["margin" + n] = i["padding" + n] = e);
          return t && (i.opacity = i.width = e), i;
        }
        function J(e, t, n) {
          for (
            var o,
              i = (ne.tweeners[t] || []).concat(ne.tweeners["*"]),
              s = 0,
              r = i.length;
            s < r;
            s++
          )
            if ((o = i[s].call(n, t, e))) return o;
        }
        function ee(e, t, n) {
          var o,
            i,
            s,
            r,
            a,
            l,
            c,
            d,
            u = "width" in t || "height" in t,
            p = this,
            f = {},
            h = e.style,
            g = e.nodeType && tt(e),
            v = Xe.get(e, "fxshow");
          n.queue ||
            ((r = _e._queueHooks(e, "fx")),
            null == r.unqueued &&
              ((r.unqueued = 0),
              (a = r.empty.fire),
              (r.empty.fire = function () {
                r.unqueued || a();
              })),
            r.unqueued++,
            p.always(function () {
              p.always(function () {
                r.unqueued--, _e.queue(e, "fx").length || r.empty.fire();
              });
            }));
          for (o in t)
            if (((i = t[o]), At.test(i))) {
              if (
                (delete t[o],
                (s = s || "toggle" === i),
                i === (g ? "hide" : "show"))
              ) {
                if ("show" !== i || !v || void 0 === v[o]) continue;
                g = !0;
              }
              f[o] = (v && v[o]) || _e.style(e, o);
            }
          if ((l = !_e.isEmptyObject(t)) || !_e.isEmptyObject(f)) {
            u &&
              1 === e.nodeType &&
              ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
              (c = v && v.display),
              null == c && (c = Xe.get(e, "display")),
              (d = _e.css(e, "display")),
              "none" === d &&
                (c
                  ? (d = c)
                  : (C([e], !0),
                    (c = e.style.display || c),
                    (d = _e.css(e, "display")),
                    C([e]))),
              ("inline" === d || ("inline-block" === d && null != c)) &&
                "none" === _e.css(e, "float") &&
                (l ||
                  (p.done(function () {
                    h.display = c;
                  }),
                  null == c && ((d = h.display), (c = "none" === d ? "" : d))),
                (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                p.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (l = !1);
            for (o in f)
              l ||
                (v
                  ? "hidden" in v && (g = v.hidden)
                  : (v = Xe.access(e, "fxshow", { display: c })),
                s && (v.hidden = !g),
                g && C([e], !0),
                p.done(function () {
                  g || C([e]), Xe.remove(e, "fxshow");
                  for (o in f) _e.style(e, o, f[o]);
                })),
                (l = J(g ? v[o] : 0, o, p)),
                o in v ||
                  ((v[o] = l.start), g && ((l.end = l.start), (l.start = 0)));
          }
        }
        function te(e, t) {
          var n, o, i, s, r;
          for (n in e)
            if (
              ((o = b(n)),
              (i = t[o]),
              (s = e[n]),
              Array.isArray(s) && ((i = s[1]), (s = e[n] = s[0])),
              n !== o && ((e[o] = s), delete e[n]),
              (r = _e.cssHooks[o]) && "expand" in r)
            ) {
              (s = r.expand(s)), delete e[o];
              for (n in s) n in e || ((e[n] = s[n]), (t[n] = i));
            } else t[o] = i;
        }
        function ne(e, t, n) {
          var o,
            i,
            s = 0,
            r = ne.prefilters.length,
            a = _e.Deferred().always(function () {
              delete l.elem;
            }),
            l = function () {
              if (i) return !1;
              for (
                var t = Ct || G(),
                  n = Math.max(0, c.startTime + c.duration - t),
                  o = n / c.duration || 0,
                  s = 1 - o,
                  r = 0,
                  l = c.tweens.length;
                r < l;
                r++
              )
                c.tweens[r].run(s);
              return (
                a.notifyWith(e, [c, s, n]),
                s < 1 && l
                  ? n
                  : (l || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
              );
            },
            c = a.promise({
              elem: e,
              props: _e.extend({}, t),
              opts: _e.extend(
                !0,
                { specialEasing: {}, easing: _e.easing._default },
                n
              ),
              originalProperties: t,
              originalOptions: n,
              startTime: Ct || G(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                var o = _e.Tween(
                  e,
                  c.opts,
                  t,
                  n,
                  c.opts.specialEasing[t] || c.opts.easing
                );
                return c.tweens.push(o), o;
              },
              stop: function (t) {
                var n = 0,
                  o = t ? c.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < o; n++) c.tweens[n].run(1);
                return (
                  t
                    ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                    : a.rejectWith(e, [c, t]),
                  this
                );
              },
            }),
            d = c.props;
          for (te(d, c.opts.specialEasing); s < r; s++)
            if ((o = ne.prefilters[s].call(c, e, d, c.opts)))
              return (
                ke(o.stop) &&
                  (_e._queueHooks(c.elem, c.opts.queue).stop = o.stop.bind(o)),
                o
              );
          return (
            _e.map(d, J, c),
            ke(c.opts.start) && c.opts.start.call(e, c),
            c
              .progress(c.opts.progress)
              .done(c.opts.done, c.opts.complete)
              .fail(c.opts.fail)
              .always(c.opts.always),
            _e.fx.timer(
              _e.extend(l, { elem: e, anim: c, queue: c.opts.queue })
            ),
            c
          );
        }
        function oe(e) {
          return (e.match(Ne) || []).join(" ");
        }
        function ie(e) {
          return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function se(e) {
          return Array.isArray(e)
            ? e
            : "string" == typeof e
            ? e.match(Ne) || []
            : [];
        }
        function re(e, t, n, o) {
          var s;
          if (Array.isArray(t))
            _e.each(t, function (t, s) {
              n || zt.test(e)
                ? o(e, s)
                : re(
                    e +
                      "[" +
                      ("object" === (void 0 === s ? "undefined" : i(s)) &&
                      null != s
                        ? t
                        : "") +
                      "]",
                    s,
                    n,
                    o
                  );
            });
          else if (n || "object" !== l(t)) o(e, t);
          else for (s in t) re(e + "[" + s + "]", t[s], n, o);
        }
        function ae(e) {
          return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var o,
              i = 0,
              s = t.toLowerCase().match(Ne) || [];
            if (ke(n))
              for (; (o = s[i++]); )
                "+" === o[0]
                  ? ((o = o.slice(1) || "*"), (e[o] = e[o] || []).unshift(n))
                  : (e[o] = e[o] || []).push(n);
          };
        }
        function le(e, t, n, o) {
          function i(a) {
            var l;
            return (
              (s[a] = !0),
              _e.each(e[a] || [], function (e, a) {
                var c = a(t, n, o);
                return "string" != typeof c || r || s[c]
                  ? r
                    ? !(l = c)
                    : void 0
                  : (t.dataTypes.unshift(c), i(c), !1);
              }),
              l
            );
          }
          var s = {},
            r = e === Gt;
          return i(t.dataTypes[0]) || (!s["*"] && i("*"));
        }
        function ce(e, t) {
          var n,
            o,
            i = _e.ajaxSettings.flatOptions || {};
          for (n in t)
            void 0 !== t[n] && ((i[n] ? e : o || (o = {}))[n] = t[n]);
          return o && _e.extend(!0, e, o), e;
        }
        function de(e, t, n) {
          for (var o, i, s, r, a = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
              void 0 === o &&
                (o = e.mimeType || t.getResponseHeader("Content-Type"));
          if (o)
            for (i in a)
              if (a[i] && a[i].test(o)) {
                l.unshift(i);
                break;
              }
          if (l[0] in n) s = l[0];
          else {
            for (i in n) {
              if (!l[0] || e.converters[i + " " + l[0]]) {
                s = i;
                break;
              }
              r || (r = i);
            }
            s = s || r;
          }
          if (s) return s !== l[0] && l.unshift(s), n[s];
        }
        function ue(e, t, n, o) {
          var i,
            s,
            r,
            a,
            l,
            c = {},
            d = e.dataTypes.slice();
          if (d[1])
            for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
          for (s = d.shift(); s; )
            if (
              (e.responseFields[s] && (n[e.responseFields[s]] = t),
              !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
              (l = s),
              (s = d.shift()))
            )
              if ("*" === s) s = l;
              else if ("*" !== l && l !== s) {
                if (!(r = c[l + " " + s] || c["* " + s]))
                  for (i in c)
                    if (
                      ((a = i.split(" ")),
                      a[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]]))
                    ) {
                      !0 === r
                        ? (r = c[i])
                        : !0 !== c[i] && ((s = a[0]), d.unshift(a[1]));
                      break;
                    }
                if (!0 !== r)
                  if (r && e.throws) t = r(t);
                  else
                    try {
                      t = r(t);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: r ? e : "No conversion from " + l + " to " + s,
                      };
                    }
              }
          return { state: "success", data: t };
        }
        var pe = [],
          fe = Object.getPrototypeOf,
          he = pe.slice,
          ge = pe.flat
            ? function (e) {
                return pe.flat.call(e);
              }
            : function (e) {
                return pe.concat.apply([], e);
              },
          ve = pe.push,
          me = pe.indexOf,
          ye = {},
          be = ye.toString,
          we = ye.hasOwnProperty,
          xe = we.toString,
          Te = xe.call(Object),
          Se = {},
          ke = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
          },
          Ce = function (e) {
            return null != e && e === e.window;
          },
          $e = s.document,
          Ae = { type: !0, src: !0, nonce: !0, noModule: !0 },
          _e = function e(t, n) {
            return new e.fn.init(t, n);
          };
        (_e.fn = _e.prototype = {
          jquery: "3.5.1",
          constructor: _e,
          length: 0,
          toArray: function () {
            return he.call(this);
          },
          get: function (e) {
            return null == e
              ? he.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = _e.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return _e.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              _e.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(he.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              _e.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              _e.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: ve,
          sort: pe.sort,
          splice: pe.splice,
        }),
          (_e.extend = _e.fn.extend = function () {
            var e,
              t,
              n,
              o,
              s,
              r,
              a = arguments[0] || {},
              l = 1,
              c = arguments.length,
              d = !1;
            for (
              "boolean" == typeof a && ((d = a), (a = arguments[l] || {}), l++),
                "object" === (void 0 === a ? "undefined" : i(a)) ||
                  ke(a) ||
                  (a = {}),
                l === c && ((a = this), l--);
              l < c;
              l++
            )
              if (null != (e = arguments[l]))
                for (t in e)
                  (o = e[t]),
                    "__proto__" !== t &&
                      a !== o &&
                      (d && o && (_e.isPlainObject(o) || (s = Array.isArray(o)))
                        ? ((n = a[t]),
                          (r =
                            s && !Array.isArray(n)
                              ? []
                              : s || _e.isPlainObject(n)
                              ? n
                              : {}),
                          (s = !1),
                          (a[t] = _e.extend(d, r, o)))
                        : void 0 !== o && (a[t] = o));
            return a;
          }),
          _e.extend({
            expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
              throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
              var t, n;
              return (
                !(!e || "[object Object]" !== be.call(e)) &&
                (!(t = fe(e)) ||
                  ("function" ==
                    typeof (n = we.call(t, "constructor") && t.constructor) &&
                    xe.call(n) === Te))
              );
            },
            isEmptyObject: function (e) {
              var t;
              for (t in e) return !1;
              return !0;
            },
            globalEval: function (e, t, n) {
              a(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
              var n,
                o = 0;
              if (c(e))
                for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
              else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
              return e;
            },
            makeArray: function (e, t) {
              var n = t || [];
              return (
                null != e &&
                  (c(Object(e))
                    ? _e.merge(n, "string" == typeof e ? [e] : e)
                    : ve.call(n, e)),
                n
              );
            },
            inArray: function (e, t, n) {
              return null == t ? -1 : me.call(t, e, n);
            },
            merge: function (e, t) {
              for (var n = +t.length, o = 0, i = e.length; o < n; o++)
                e[i++] = t[o];
              return (e.length = i), e;
            },
            grep: function (e, t, n) {
              for (var o = [], i = 0, s = e.length, r = !n; i < s; i++)
                !t(e[i], i) !== r && o.push(e[i]);
              return o;
            },
            map: function (e, t, n) {
              var o,
                i,
                s = 0,
                r = [];
              if (c(e))
                for (o = e.length; s < o; s++)
                  null != (i = t(e[s], s, n)) && r.push(i);
              else for (s in e) null != (i = t(e[s], s, n)) && r.push(i);
              return ge(r);
            },
            guid: 1,
            support: Se,
          }),
          "function" == typeof Symbol &&
            (_e.fn[Symbol.iterator] = pe[Symbol.iterator]),
          _e.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
              " "
            ),
            function (e, t) {
              ye["[object " + t + "]"] = t.toLowerCase();
            }
          );
        var Ee =
          /*!
           * Sizzle CSS Selector Engine v2.3.5
           * https://sizzlejs.com/
           *
           * Copyright JS Foundation and other contributors
           * Released under the MIT license
           * https://js.foundation/
           *
           * Date: 2020-03-14
           */
          (function (e) {
            function t(e, t, n, o) {
              var i,
                s,
                r,
                a,
                l,
                d,
                p,
                f = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
              if (
                ((n = n || []),
                "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
              )
                return n;
              if (!o && (P(t), (t = t || L), j)) {
                if (11 !== h && (l = me.exec(e)))
                  if ((i = l[1])) {
                    if (9 === h) {
                      if (!(r = t.getElementById(i))) return n;
                      if (r.id === i) return n.push(r), n;
                    } else if (
                      f &&
                      (r = f.getElementById(i)) &&
                      I(t, r) &&
                      r.id === i
                    )
                      return n.push(r), n;
                  } else {
                    if (l[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                    if (
                      (i = l[3]) &&
                      w.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return G.apply(n, t.getElementsByClassName(i)), n;
                  }
                if (
                  w.qsa &&
                  !X[e + " "] &&
                  (!H || !H.test(e)) &&
                  (1 !== h || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (
                    ((p = e), (f = t), 1 === h && (ce.test(e) || le.test(e)))
                  ) {
                    for (
                      f = (ye.test(e) && c(t.parentNode)) || t,
                        (f === t && w.scope) ||
                          ((a = t.getAttribute("id"))
                            ? (a = a.replace(xe, Te))
                            : t.setAttribute("id", (a = N))),
                        d = k(e),
                        s = d.length;
                      s--;

                    )
                      d[s] = (a ? "#" + a : ":scope") + " " + u(d[s]);
                    p = d.join(",");
                  }
                  try {
                    return G.apply(n, f.querySelectorAll(p)), n;
                  } catch (t) {
                    X(e, !0);
                  } finally {
                    a === N && t.removeAttribute("id");
                  }
                }
              }
              return $(e.replace(re, "$1"), t, n, o);
            }
            function n() {
              function e(n, o) {
                return (
                  t.push(n + " ") > x.cacheLength && delete e[t.shift()],
                  (e[n + " "] = o)
                );
              }
              var t = [];
              return e;
            }
            function o(e) {
              return (e[N] = !0), e;
            }
            function i(e) {
              var t = L.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function s(e, t) {
              for (var n = e.split("|"), o = n.length; o--; )
                x.attrHandle[n[o]] = t;
            }
            function r(e, t) {
              var n = t && e,
                o =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (o) return o;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function a(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && ke(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function l(e) {
              return o(function (t) {
                return (
                  (t = +t),
                  o(function (n, o) {
                    for (var i, s = e([], n.length, t), r = s.length; r--; )
                      n[(i = s[r])] && (n[i] = !(o[i] = n[i]));
                  })
                );
              });
            }
            function c(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            function d() {}
            function u(e) {
              for (var t = 0, n = e.length, o = ""; t < n; t++) o += e[t].value;
              return o;
            }
            function p(e, t, n) {
              var o = t.dir,
                i = t.next,
                s = i || o,
                r = n && "parentNode" === s,
                a = F++;
              return t.first
                ? function (t, n, i) {
                    for (; (t = t[o]); )
                      if (1 === t.nodeType || r) return e(t, n, i);
                    return !1;
                  }
                : function (t, n, l) {
                    var c,
                      d,
                      u,
                      p = [q, a];
                    if (l) {
                      for (; (t = t[o]); )
                        if ((1 === t.nodeType || r) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[o]); )
                        if (1 === t.nodeType || r)
                          if (
                            ((u = t[N] || (t[N] = {})),
                            (d = u[t.uniqueID] || (u[t.uniqueID] = {})),
                            i && i === t.nodeName.toLowerCase())
                          )
                            t = t[o] || t;
                          else {
                            if ((c = d[s]) && c[0] === q && c[1] === a)
                              return (p[2] = c[2]);
                            if (((d[s] = p), (p[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function f(e) {
              return e.length > 1
                ? function (t, n, o) {
                    for (var i = e.length; i--; ) if (!e[i](t, n, o)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function h(e, n, o) {
              for (var i = 0, s = n.length; i < s; i++) t(e, n[i], o);
              return o;
            }
            function g(e, t, n, o, i) {
              for (
                var s, r = [], a = 0, l = e.length, c = null != t;
                a < l;
                a++
              )
                (s = e[a]) &&
                  ((n && !n(s, o, i)) || (r.push(s), c && t.push(a)));
              return r;
            }
            function v(e, t, n, i, s, r) {
              return (
                i && !i[N] && (i = v(i)),
                s && !s[N] && (s = v(s, r)),
                o(function (o, r, a, l) {
                  var c,
                    d,
                    u,
                    p = [],
                    f = [],
                    v = r.length,
                    m = o || h(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || (!o && t) ? m : g(m, p, e, a, l),
                    b = n ? (s || (o ? e : v || i) ? [] : r) : y;
                  if ((n && n(y, b, a, l), i))
                    for (c = g(b, f), i(c, [], a, l), d = c.length; d--; )
                      (u = c[d]) && (b[f[d]] = !(y[f[d]] = u));
                  if (o) {
                    if (s || e) {
                      if (s) {
                        for (c = [], d = b.length; d--; )
                          (u = b[d]) && c.push((y[d] = u));
                        s(null, (b = []), c, l);
                      }
                      for (d = b.length; d--; )
                        (u = b[d]) &&
                          (c = s ? J(o, u) : p[d]) > -1 &&
                          (o[c] = !(r[c] = u));
                    }
                  } else (b = g(b === r ? b.splice(v, b.length) : b)), s ? s(null, r, b, l) : G.apply(r, b);
                })
              );
            }
            function m(e) {
              for (
                var t,
                  n,
                  o,
                  i = e.length,
                  s = x.relative[e[0].type],
                  r = s || x.relative[" "],
                  a = s ? 1 : 0,
                  l = p(
                    function (e) {
                      return e === t;
                    },
                    r,
                    !0
                  ),
                  c = p(
                    function (e) {
                      return J(t, e) > -1;
                    },
                    r,
                    !0
                  ),
                  d = [
                    function (e, n, o) {
                      var i =
                        (!s && (o || n !== A)) ||
                        ((t = n).nodeType ? l(e, n, o) : c(e, n, o));
                      return (t = null), i;
                    },
                  ];
                a < i;
                a++
              )
                if ((n = x.relative[e[a].type])) d = [p(f(d), n)];
                else {
                  if (
                    ((n = x.filter[e[a].type].apply(null, e[a].matches)), n[N])
                  ) {
                    for (o = ++a; o < i && !x.relative[e[o].type]; o++);
                    return v(
                      a > 1 && f(d),
                      a > 1 &&
                        u(
                          e
                            .slice(0, a - 1)
                            .concat({ value: " " === e[a - 2].type ? "*" : "" })
                        ).replace(re, "$1"),
                      n,
                      a < o && m(e.slice(a, o)),
                      o < i && m((e = e.slice(o))),
                      o < i && u(e)
                    );
                  }
                  d.push(n);
                }
              return f(d);
            }
            function y(e, n) {
              var i = n.length > 0,
                s = e.length > 0,
                r = function (o, r, a, l, c) {
                  var d,
                    u,
                    p,
                    f = 0,
                    h = "0",
                    v = o && [],
                    m = [],
                    y = A,
                    b = o || (s && x.find.TAG("*", c)),
                    w = (q += null == y ? 1 : Math.random() || 0.1),
                    T = b.length;
                  for (
                    c && (A = r == L || r || c);
                    h !== T && null != (d = b[h]);
                    h++
                  ) {
                    if (s && d) {
                      for (
                        u = 0, r || d.ownerDocument == L || (P(d), (a = !j));
                        (p = e[u++]);

                      )
                        if (p(d, r || L, a)) {
                          l.push(d);
                          break;
                        }
                      c && (q = w);
                    }
                    i && ((d = !p && d) && f--, o && v.push(d));
                  }
                  if (((f += h), i && h !== f)) {
                    for (u = 0; (p = n[u++]); ) p(v, m, r, a);
                    if (o) {
                      if (f > 0)
                        for (; h--; ) v[h] || m[h] || (m[h] = Q.call(l));
                      m = g(m);
                    }
                    G.apply(l, m),
                      c &&
                        !o &&
                        m.length > 0 &&
                        f + n.length > 1 &&
                        t.uniqueSort(l);
                  }
                  return c && ((q = w), (A = y)), v;
                };
              return i ? o(r) : r;
            }
            var b,
              w,
              x,
              T,
              S,
              k,
              C,
              $,
              A,
              _,
              E,
              P,
              L,
              D,
              j,
              H,
              M,
              O,
              I,
              N = "sizzle" + 1 * new Date(),
              z = e.document,
              q = 0,
              F = 0,
              R = n(),
              B = n(),
              W = n(),
              X = n(),
              Y = function (e, t) {
                return e === t && (E = !0), 0;
              },
              U = {}.hasOwnProperty,
              V = [],
              Q = V.pop,
              Z = V.push,
              G = V.push,
              K = V.slice,
              J = function (e, t) {
                for (var n = 0, o = e.length; n < o; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              ee =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              te = "[\\x20\\t\\r\\n\\f]",
              ne =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                te +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              oe =
                "\\[" +
                te +
                "*(" +
                ne +
                ")(?:" +
                te +
                "*([*^$|!~]?=)" +
                te +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                ne +
                "))|)" +
                te +
                "*\\]",
              ie =
                ":(" +
                ne +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                oe +
                ")*)|.*)\\)|)",
              se = new RegExp(te + "+", "g"),
              re = new RegExp(
                "^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$",
                "g"
              ),
              ae = new RegExp("^" + te + "*," + te + "*"),
              le = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
              ce = new RegExp(te + "|>"),
              de = new RegExp(ie),
              ue = new RegExp("^" + ne + "$"),
              pe = {
                ID: new RegExp("^#(" + ne + ")"),
                CLASS: new RegExp("^\\.(" + ne + ")"),
                TAG: new RegExp("^(" + ne + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    te +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    te +
                    "*(?:([+-]|)" +
                    te +
                    "*(\\d+)|))" +
                    te +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + ee + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    te +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    te +
                    "*((?:-\\d)?\\d*)" +
                    te +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              fe = /HTML$/i,
              he = /^(?:input|select|textarea|button)$/i,
              ge = /^h\d$/i,
              ve = /^[^{]+\{\s*\[native \w/,
              me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ye = /[+~]/,
              be = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + te + "?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              we = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              Te = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              Se = function () {
                P();
              },
              ke = p(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              G.apply((V = K.call(z.childNodes)), z.childNodes),
                V[z.childNodes.length].nodeType;
            } catch (e) {
              G = {
                apply: V.length
                  ? function (e, t) {
                      Z.apply(e, K.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, o = 0; (e[n++] = t[o++]); );
                      e.length = n - 1;
                    },
              };
            }
            (w = t.support = {}),
              (S = t.isXML = function (e) {
                var t = e.namespaceURI,
                  n = (e.ownerDocument || e).documentElement;
                return !fe.test(t || (n && n.nodeName) || "HTML");
              }),
              (P = t.setDocument = function (e) {
                var t,
                  n,
                  o = e ? e.ownerDocument || e : z;
                return o != L && 9 === o.nodeType && o.documentElement
                  ? ((L = o),
                    (D = L.documentElement),
                    (j = !S(L)),
                    z != L &&
                      (n = L.defaultView) &&
                      n.top !== n &&
                      (n.addEventListener
                        ? n.addEventListener("unload", Se, !1)
                        : n.attachEvent && n.attachEvent("onunload", Se)),
                    (w.scope = i(function (e) {
                      return (
                        D.appendChild(e).appendChild(L.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (w.attributes = i(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (w.getElementsByTagName = i(function (e) {
                      return (
                        e.appendChild(L.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (w.getElementsByClassName = ve.test(
                      L.getElementsByClassName
                    )),
                    (w.getById = i(function (e) {
                      return (
                        (D.appendChild(e).id = N),
                        !L.getElementsByName || !L.getElementsByName(N).length
                      );
                    })),
                    w.getById
                      ? ((x.filter.ID = function (e) {
                          var t = e.replace(be, we);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (x.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && j) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((x.filter.ID = function (e) {
                          var t = e.replace(be, we);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (x.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && j) {
                            var n,
                              o,
                              i,
                              s = t.getElementById(e);
                            if (s) {
                              if (
                                (n = s.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [s];
                              for (
                                i = t.getElementsByName(e), o = 0;
                                (s = i[o++]);

                              )
                                if (
                                  (n = s.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [s];
                            }
                            return [];
                          }
                        })),
                    (x.find.TAG = w.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : w.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            o = [],
                            i = 0,
                            s = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = s[i++]); )
                              1 === n.nodeType && o.push(n);
                            return o;
                          }
                          return s;
                        }),
                    (x.find.CLASS =
                      w.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && j)
                          return t.getElementsByClassName(e);
                      }),
                    (M = []),
                    (H = []),
                    (w.qsa = ve.test(L.querySelectorAll)) &&
                      (i(function (e) {
                        var t;
                        (D.appendChild(e).innerHTML =
                          "<a id='" +
                          N +
                          "'></a><select id='" +
                          N +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            H.push("[*^$]=" + te + "*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            H.push("\\[" + te + "*(?:value|" + ee + ")"),
                          e.querySelectorAll("[id~=" + N + "-]").length ||
                            H.push("~="),
                          (t = L.createElement("input")),
                          t.setAttribute("name", ""),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            H.push(
                              "\\[" +
                                te +
                                "*name" +
                                te +
                                "*=" +
                                te +
                                "*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            H.push(":checked"),
                          e.querySelectorAll("a#" + N + "+*").length ||
                            H.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          H.push("[\\r\\n\\f]");
                      }),
                      i(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = L.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            H.push("name" + te + "*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            H.push(":enabled", ":disabled"),
                          (D.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            H.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          H.push(",.*:");
                      })),
                    (w.matchesSelector = ve.test(
                      (O =
                        D.matches ||
                        D.webkitMatchesSelector ||
                        D.mozMatchesSelector ||
                        D.oMatchesSelector ||
                        D.msMatchesSelector)
                    )) &&
                      i(function (e) {
                        (w.disconnectedMatch = O.call(e, "*")),
                          O.call(e, "[s!='']:x"),
                          M.push("!=", ie);
                      }),
                    (H = H.length && new RegExp(H.join("|"))),
                    (M = M.length && new RegExp(M.join("|"))),
                    (t = ve.test(D.compareDocumentPosition)),
                    (I =
                      t || ve.test(D.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              o = t && t.parentNode;
                            return (
                              e === o ||
                              !(
                                !o ||
                                1 !== o.nodeType ||
                                !(n.contains
                                  ? n.contains(o)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(o))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (Y = t
                      ? function (e, t) {
                          if (e === t) return (E = !0), 0;
                          var n =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            n ||
                            ((n =
                              (e.ownerDocument || e) == (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1),
                            1 & n ||
                            (!w.sortDetached &&
                              t.compareDocumentPosition(e) === n)
                              ? e == L || (e.ownerDocument == z && I(z, e))
                                ? -1
                                : t == L || (t.ownerDocument == z && I(z, t))
                                ? 1
                                : _
                                ? J(_, e) - J(_, t)
                                : 0
                              : 4 & n
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (E = !0), 0;
                          var n,
                            o = 0,
                            i = e.parentNode,
                            s = t.parentNode,
                            a = [e],
                            l = [t];
                          if (!i || !s)
                            return e == L
                              ? -1
                              : t == L
                              ? 1
                              : i
                              ? -1
                              : s
                              ? 1
                              : _
                              ? J(_, e) - J(_, t)
                              : 0;
                          if (i === s) return r(e, t);
                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                          for (n = t; (n = n.parentNode); ) l.unshift(n);
                          for (; a[o] === l[o]; ) o++;
                          return o
                            ? r(a[o], l[o])
                            : a[o] == z
                            ? -1
                            : l[o] == z
                            ? 1
                            : 0;
                        }),
                    L)
                  : L;
              }),
              (t.matches = function (e, n) {
                return t(e, null, null, n);
              }),
              (t.matchesSelector = function (e, n) {
                if (
                  (P(e),
                  w.matchesSelector &&
                    j &&
                    !X[n + " "] &&
                    (!M || !M.test(n)) &&
                    (!H || !H.test(n)))
                )
                  try {
                    var o = O.call(e, n);
                    if (
                      o ||
                      w.disconnectedMatch ||
                      (e.document && 11 !== e.document.nodeType)
                    )
                      return o;
                  } catch (e) {
                    X(n, !0);
                  }
                return t(n, L, null, [e]).length > 0;
              }),
              (t.contains = function (e, t) {
                return (e.ownerDocument || e) != L && P(e), I(e, t);
              }),
              (t.attr = function (e, t) {
                (e.ownerDocument || e) != L && P(e);
                var n = x.attrHandle[t.toLowerCase()],
                  o =
                    n && U.call(x.attrHandle, t.toLowerCase())
                      ? n(e, t, !j)
                      : void 0;
                return void 0 !== o
                  ? o
                  : w.attributes || !j
                  ? e.getAttribute(t)
                  : (o = e.getAttributeNode(t)) && o.specified
                  ? o.value
                  : null;
              }),
              (t.escape = function (e) {
                return (e + "").replace(xe, Te);
              }),
              (t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
              }),
              (t.uniqueSort = function (e) {
                var t,
                  n = [],
                  o = 0,
                  i = 0;
                if (
                  ((E = !w.detectDuplicates),
                  (_ = !w.sortStable && e.slice(0)),
                  e.sort(Y),
                  E)
                ) {
                  for (; (t = e[i++]); ) t === e[i] && (o = n.push(i));
                  for (; o--; ) e.splice(n[o], 1);
                }
                return (_ = null), e;
              }),
              (T = t.getText = function (e) {
                var t,
                  n = "",
                  o = 0,
                  i = e.nodeType;
                if (i) {
                  if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
                  } else if (3 === i || 4 === i) return e.nodeValue;
                } else for (; (t = e[o++]); ) n += T(t);
                return n;
              }),
              (x = t.selectors = {
                cacheLength: 50,
                createPseudo: o,
                match: pe,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(be, we)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(be, we)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || t.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && t.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return pe.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            de.test(n) &&
                            (t = k(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(be, we).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = R[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|" + te + ")" + e + "(" + te + "|$)"
                      )) &&
                        R(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, n, o) {
                    return function (i) {
                      var s = t.attr(i, e);
                      return null == s
                        ? "!=" === n
                        : !n ||
                            ((s += ""),
                            "=" === n
                              ? s === o
                              : "!=" === n
                              ? s !== o
                              : "^=" === n
                              ? o && 0 === s.indexOf(o)
                              : "*=" === n
                              ? o && s.indexOf(o) > -1
                              : "$=" === n
                              ? o && s.slice(-o.length) === o
                              : "~=" === n
                              ? (" " + s.replace(se, " ") + " ").indexOf(o) > -1
                              : "|=" === n &&
                                (s === o ||
                                  s.slice(0, o.length + 1) === o + "-"));
                    };
                  },
                  CHILD: function (e, t, n, o, i) {
                    var s = "nth" !== e.slice(0, 3),
                      r = "last" !== e.slice(-4),
                      a = "of-type" === t;
                    return 1 === o && 0 === i
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var c,
                            d,
                            u,
                            p,
                            f,
                            h,
                            g = s !== r ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            m = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                          if (v) {
                            if (s) {
                              for (; g; ) {
                                for (p = t; (p = p[g]); )
                                  if (
                                    a
                                      ? p.nodeName.toLowerCase() === m
                                      : 1 === p.nodeType
                                  )
                                    return !1;
                                h = g = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [r ? v.firstChild : v.lastChild]), r && y)
                            ) {
                              for (
                                p = v,
                                  u = p[N] || (p[N] = {}),
                                  d = u[p.uniqueID] || (u[p.uniqueID] = {}),
                                  c = d[e] || [],
                                  f = c[0] === q && c[1],
                                  b = f && c[2],
                                  p = f && v.childNodes[f];
                                (p =
                                  (++f && p && p[g]) || (b = f = 0) || h.pop());

                              )
                                if (1 === p.nodeType && ++b && p === t) {
                                  d[e] = [q, f, b];
                                  break;
                                }
                            } else if (
                              (y &&
                                ((p = t),
                                (u = p[N] || (p[N] = {})),
                                (d = u[p.uniqueID] || (u[p.uniqueID] = {})),
                                (c = d[e] || []),
                                (f = c[0] === q && c[1]),
                                (b = f)),
                              !1 === b)
                            )
                              for (
                                ;
                                (p =
                                  (++f && p && p[g]) ||
                                  (b = f = 0) ||
                                  h.pop()) &&
                                ((a
                                  ? p.nodeName.toLowerCase() !== m
                                  : 1 !== p.nodeType) ||
                                  !++b ||
                                  (y &&
                                    ((u = p[N] || (p[N] = {})),
                                    (d = u[p.uniqueID] || (u[p.uniqueID] = {})),
                                    (d[e] = [q, b])),
                                  p !== t));

                              );
                            return (b -= i) === o || (b % o == 0 && b / o >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, n) {
                    var i,
                      s =
                        x.pseudos[e] ||
                        x.setFilters[e.toLowerCase()] ||
                        t.error("unsupported pseudo: " + e);
                    return s[N]
                      ? s(n)
                      : s.length > 1
                      ? ((i = [e, e, "", n]),
                        x.setFilters.hasOwnProperty(e.toLowerCase())
                          ? o(function (e, t) {
                              for (var o, i = s(e, n), r = i.length; r--; )
                                (o = J(e, i[r])), (e[o] = !(t[o] = i[r]));
                            })
                          : function (e) {
                              return s(e, 0, i);
                            })
                      : s;
                  },
                },
                pseudos: {
                  not: o(function (e) {
                    var t = [],
                      n = [],
                      i = C(e.replace(re, "$1"));
                    return i[N]
                      ? o(function (e, t, n, o) {
                          for (
                            var s, r = i(e, null, o, []), a = e.length;
                            a--;

                          )
                            (s = r[a]) && (e[a] = !(t[a] = s));
                        })
                      : function (e, o, s) {
                          return (
                            (t[0] = e),
                            i(t, null, s, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: o(function (e) {
                    return function (n) {
                      return t(e, n).length > 0;
                    };
                  }),
                  contains: o(function (e) {
                    return (
                      (e = e.replace(be, we)),
                      function (t) {
                        return (t.textContent || T(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: o(function (e) {
                    return (
                      ue.test(e || "") || t.error("unsupported lang: " + e),
                      (e = e.replace(be, we).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = j
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === D;
                  },
                  focus: function (e) {
                    return (
                      e === L.activeElement &&
                      (!L.hasFocus || L.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: a(!1),
                  disabled: a(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !x.pseudos.empty(e);
                  },
                  header: function (e) {
                    return ge.test(e.nodeName);
                  },
                  input: function (e) {
                    return he.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: l(function () {
                    return [0];
                  }),
                  last: l(function (e, t) {
                    return [t - 1];
                  }),
                  eq: l(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: l(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: l(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: l(function (e, t, n) {
                    for (var o = n < 0 ? n + t : n > t ? t : n; --o >= 0; )
                      e.push(o);
                    return e;
                  }),
                  gt: l(function (e, t, n) {
                    for (var o = n < 0 ? n + t : n; ++o < t; ) e.push(o);
                    return e;
                  }),
                },
              }),
              (x.pseudos.nth = x.pseudos.eq);
            for (b in {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0,
            })
              x.pseudos[b] = (function (e) {
                return function (t) {
                  return "input" === t.nodeName.toLowerCase() && t.type === e;
                };
              })(b);
            for (b in { submit: !0, reset: !0 })
              x.pseudos[b] = (function (e) {
                return function (t) {
                  var n = t.nodeName.toLowerCase();
                  return ("input" === n || "button" === n) && t.type === e;
                };
              })(b);
            return (
              (d.prototype = x.filters = x.pseudos),
              (x.setFilters = new d()),
              (k = t.tokenize = function (e, n) {
                var o,
                  i,
                  s,
                  r,
                  a,
                  l,
                  c,
                  d = B[e + " "];
                if (d) return n ? 0 : d.slice(0);
                for (a = e, l = [], c = x.preFilter; a; ) {
                  (o && !(i = ae.exec(a))) ||
                    (i && (a = a.slice(i[0].length) || a), l.push((s = []))),
                    (o = !1),
                    (i = le.exec(a)) &&
                      ((o = i.shift()),
                      s.push({ value: o, type: i[0].replace(re, " ") }),
                      (a = a.slice(o.length)));
                  for (r in x.filter)
                    !(i = pe[r].exec(a)) ||
                      (c[r] && !(i = c[r](i))) ||
                      ((o = i.shift()),
                      s.push({ value: o, type: r, matches: i }),
                      (a = a.slice(o.length)));
                  if (!o) break;
                }
                return n ? a.length : a ? t.error(e) : B(e, l).slice(0);
              }),
              (C = t.compile = function (e, t) {
                var n,
                  o = [],
                  i = [],
                  s = W[e + " "];
                if (!s) {
                  for (t || (t = k(e)), n = t.length; n--; )
                    (s = m(t[n])), s[N] ? o.push(s) : i.push(s);
                  (s = W(e, y(i, o))), (s.selector = e);
                }
                return s;
              }),
              ($ = t.select = function (e, t, n, o) {
                var i,
                  s,
                  r,
                  a,
                  l,
                  d = "function" == typeof e && e,
                  p = !o && k((e = d.selector || e));
                if (((n = n || []), 1 === p.length)) {
                  if (
                    ((s = p[0] = p[0].slice(0)),
                    s.length > 2 &&
                      "ID" === (r = s[0]).type &&
                      9 === t.nodeType &&
                      j &&
                      x.relative[s[1].type])
                  ) {
                    if (
                      !(t = (x.find.ID(r.matches[0].replace(be, we), t) ||
                        [])[0])
                    )
                      return n;
                    d && (t = t.parentNode),
                      (e = e.slice(s.shift().value.length));
                  }
                  for (
                    i = pe.needsContext.test(e) ? 0 : s.length;
                    i-- && ((r = s[i]), !x.relative[(a = r.type)]);

                  )
                    if (
                      (l = x.find[a]) &&
                      (o = l(
                        r.matches[0].replace(be, we),
                        (ye.test(s[0].type) && c(t.parentNode)) || t
                      ))
                    ) {
                      if ((s.splice(i, 1), !(e = o.length && u(s))))
                        return G.apply(n, o), n;
                      break;
                    }
                }
                return (
                  (d || C(e, p))(
                    o,
                    t,
                    !j,
                    n,
                    !t || (ye.test(e) && c(t.parentNode)) || t
                  ),
                  n
                );
              }),
              (w.sortStable = N.split("").sort(Y).join("") === N),
              (w.detectDuplicates = !!E),
              P(),
              (w.sortDetached = i(function (e) {
                return (
                  1 & e.compareDocumentPosition(L.createElement("fieldset"))
                );
              })),
              i(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                s("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (w.attributes &&
                i(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                s("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              i(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                s(ee, function (e, t, n) {
                  var o;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (o = e.getAttributeNode(t)) && o.specified
                      ? o.value
                      : null;
                }),
              t
            );
          })(s);
        (_e.find = Ee),
          (_e.expr = Ee.selectors),
          (_e.expr[":"] = _e.expr.pseudos),
          (_e.uniqueSort = _e.unique = Ee.uniqueSort),
          (_e.text = Ee.getText),
          (_e.isXMLDoc = Ee.isXML),
          (_e.contains = Ee.contains),
          (_e.escapeSelector = Ee.escape);
        var Pe = function (e, t, n) {
            for (var o = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (i && _e(e).is(n)) break;
                o.push(e);
              }
            return o;
          },
          Le = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
          De = _e.expr.match.needsContext,
          je = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        (_e.filter = function (e, t, n) {
          var o = t[0];
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === o.nodeType
              ? _e.find.matchesSelector(o, e)
                ? [o]
                : []
              : _e.find.matches(
                  e,
                  _e.grep(t, function (e) {
                    return 1 === e.nodeType;
                  })
                )
          );
        }),
          _e.fn.extend({
            find: function (e) {
              var t,
                n,
                o = this.length,
                i = this;
              if ("string" != typeof e)
                return this.pushStack(
                  _e(e).filter(function () {
                    for (t = 0; t < o; t++)
                      if (_e.contains(i[t], this)) return !0;
                  })
                );
              for (n = this.pushStack([]), t = 0; t < o; t++)
                _e.find(e, i[t], n);
              return o > 1 ? _e.uniqueSort(n) : n;
            },
            filter: function (e) {
              return this.pushStack(u(this, e || [], !1));
            },
            not: function (e) {
              return this.pushStack(u(this, e || [], !0));
            },
            is: function (e) {
              return !!u(
                this,
                "string" == typeof e && De.test(e) ? _e(e) : e || [],
                !1
              ).length;
            },
          });
        var He,
          Me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((_e.fn.init = function (e, t, n) {
          var o, i;
          if (!e) return this;
          if (((n = n || He), "string" == typeof e)) {
            if (
              !(o =
                "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                  ? [null, e, null]
                  : Me.exec(e)) ||
              (!o[1] && t)
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
            if (o[1]) {
              if (
                ((t = t instanceof _e ? t[0] : t),
                _e.merge(
                  this,
                  _e.parseHTML(
                    o[1],
                    t && t.nodeType ? t.ownerDocument || t : $e,
                    !0
                  )
                ),
                je.test(o[1]) && _e.isPlainObject(t))
              )
                for (o in t) ke(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
              return this;
            }
            return (
              (i = $e.getElementById(o[2])),
              i && ((this[0] = i), (this.length = 1)),
              this
            );
          }
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : ke(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(_e)
            : _e.makeArray(e, this);
        }).prototype = _e.fn),
          (He = _e($e));
        var Oe = /^(?:parents|prev(?:Until|All))/,
          Ie = { children: !0, contents: !0, next: !0, prev: !0 };
        _e.fn.extend({
          has: function (e) {
            var t = _e(e, this),
              n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++)
                if (_e.contains(this, t[e])) return !0;
            });
          },
          closest: function (e, t) {
            var n,
              o = 0,
              i = this.length,
              s = [],
              r = "string" != typeof e && _e(e);
            if (!De.test(e))
              for (; o < i; o++)
                for (n = this[o]; n && n !== t; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (r
                      ? r.index(n) > -1
                      : 1 === n.nodeType && _e.find.matchesSelector(n, e))
                  ) {
                    s.push(n);
                    break;
                  }
            return this.pushStack(s.length > 1 ? _e.uniqueSort(s) : s);
          },
          index: function (e) {
            return e
              ? "string" == typeof e
                ? me.call(_e(e), this[0])
                : me.call(this, e.jquery ? e[0] : e)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function (e, t) {
            return this.pushStack(
              _e.uniqueSort(_e.merge(this.get(), _e(e, t)))
            );
          },
          addBack: function (e) {
            return this.add(
              null == e ? this.prevObject : this.prevObject.filter(e)
            );
          },
        }),
          _e.each(
            {
              parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function (e) {
                return Pe(e, "parentNode");
              },
              parentsUntil: function (e, t, n) {
                return Pe(e, "parentNode", n);
              },
              next: function (e) {
                return p(e, "nextSibling");
              },
              prev: function (e) {
                return p(e, "previousSibling");
              },
              nextAll: function (e) {
                return Pe(e, "nextSibling");
              },
              prevAll: function (e) {
                return Pe(e, "previousSibling");
              },
              nextUntil: function (e, t, n) {
                return Pe(e, "nextSibling", n);
              },
              prevUntil: function (e, t, n) {
                return Pe(e, "previousSibling", n);
              },
              siblings: function (e) {
                return Le((e.parentNode || {}).firstChild, e);
              },
              children: function (e) {
                return Le(e.firstChild);
              },
              contents: function (e) {
                return null != e.contentDocument && fe(e.contentDocument)
                  ? e.contentDocument
                  : (d(e, "template") && (e = e.content || e),
                    _e.merge([], e.childNodes));
              },
            },
            function (e, t) {
              _e.fn[e] = function (n, o) {
                var i = _e.map(this, t, n);
                return (
                  "Until" !== e.slice(-5) && (o = n),
                  o && "string" == typeof o && (i = _e.filter(o, i)),
                  this.length > 1 &&
                    (Ie[e] || _e.uniqueSort(i), Oe.test(e) && i.reverse()),
                  this.pushStack(i)
                );
              };
            }
          );
        var Ne = /[^\x20\t\r\n\f]+/g;
        (_e.Callbacks = function (e) {
          e = "string" == typeof e ? f(e) : _e.extend({}, e);
          var t,
            n,
            o,
            i,
            s = [],
            r = [],
            a = -1,
            c = function () {
              for (i = i || e.once, o = t = !0; r.length; a = -1)
                for (n = r.shift(); ++a < s.length; )
                  !1 === s[a].apply(n[0], n[1]) &&
                    e.stopOnFalse &&
                    ((a = s.length), (n = !1));
              e.memory || (n = !1), (t = !1), i && (s = n ? [] : "");
            },
            d = {
              add: function () {
                return (
                  s &&
                    (n && !t && ((a = s.length - 1), r.push(n)),
                    (function t(n) {
                      _e.each(n, function (n, o) {
                        ke(o)
                          ? (e.unique && d.has(o)) || s.push(o)
                          : o && o.length && "string" !== l(o) && t(o);
                      });
                    })(arguments),
                    n && !t && c()),
                  this
                );
              },
              remove: function () {
                return (
                  _e.each(arguments, function (e, t) {
                    for (var n; (n = _e.inArray(t, s, n)) > -1; )
                      s.splice(n, 1), n <= a && a--;
                  }),
                  this
                );
              },
              has: function (e) {
                return e ? _e.inArray(e, s) > -1 : s.length > 0;
              },
              empty: function () {
                return s && (s = []), this;
              },
              disable: function () {
                return (i = r = []), (s = n = ""), this;
              },
              disabled: function () {
                return !s;
              },
              lock: function () {
                return (i = r = []), n || t || (s = n = ""), this;
              },
              locked: function () {
                return !!i;
              },
              fireWith: function (e, n) {
                return (
                  i ||
                    ((n = n || []),
                    (n = [e, n.slice ? n.slice() : n]),
                    r.push(n),
                    t || c()),
                  this
                );
              },
              fire: function () {
                return d.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!o;
              },
            };
          return d;
        }),
          _e.extend({
            Deferred: function (e) {
              var t = [
                  [
                    "notify",
                    "progress",
                    _e.Callbacks("memory"),
                    _e.Callbacks("memory"),
                    2,
                  ],
                  [
                    "resolve",
                    "done",
                    _e.Callbacks("once memory"),
                    _e.Callbacks("once memory"),
                    0,
                    "resolved",
                  ],
                  [
                    "reject",
                    "fail",
                    _e.Callbacks("once memory"),
                    _e.Callbacks("once memory"),
                    1,
                    "rejected",
                  ],
                ],
                n = "pending",
                o = {
                  state: function () {
                    return n;
                  },
                  always: function () {
                    return r.done(arguments).fail(arguments), this;
                  },
                  catch: function (e) {
                    return o.then(null, e);
                  },
                  pipe: function () {
                    var e = arguments;
                    return _e
                      .Deferred(function (n) {
                        _e.each(t, function (t, o) {
                          var i = ke(e[o[4]]) && e[o[4]];
                          r[o[1]](function () {
                            var e = i && i.apply(this, arguments);
                            e && ke(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[o[0] + "With"](this, i ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      })
                      .promise();
                  },
                  then: function (e, n, o) {
                    function r(e, t, n, o) {
                      return function () {
                        var l = this,
                          c = arguments,
                          d = function () {
                            var s, d;
                            if (!(e < a)) {
                              if ((s = n.apply(l, c)) === t.promise())
                                throw new TypeError("Thenable self-resolution");
                              (d =
                                s &&
                                ("object" ===
                                  (void 0 === s ? "undefined" : i(s)) ||
                                  "function" == typeof s) &&
                                s.then),
                                ke(d)
                                  ? o
                                    ? d.call(s, r(a, t, h, o), r(a, t, g, o))
                                    : (a++,
                                      d.call(
                                        s,
                                        r(a, t, h, o),
                                        r(a, t, g, o),
                                        r(a, t, h, t.notifyWith)
                                      ))
                                  : (n !== h && ((l = void 0), (c = [s])),
                                    (o || t.resolveWith)(l, c));
                            }
                          },
                          u = o
                            ? d
                            : function () {
                                try {
                                  d();
                                } catch (o) {
                                  _e.Deferred.exceptionHook &&
                                    _e.Deferred.exceptionHook(o, u.stackTrace),
                                    e + 1 >= a &&
                                      (n !== g && ((l = void 0), (c = [o])),
                                      t.rejectWith(l, c));
                                }
                              };
                        e
                          ? u()
                          : (_e.Deferred.getStackHook &&
                              (u.stackTrace = _e.Deferred.getStackHook()),
                            s.setTimeout(u));
                      };
                    }
                    var a = 0;
                    return _e
                      .Deferred(function (i) {
                        t[0][3].add(r(0, i, ke(o) ? o : h, i.notifyWith)),
                          t[1][3].add(r(0, i, ke(e) ? e : h)),
                          t[2][3].add(r(0, i, ke(n) ? n : g));
                      })
                      .promise();
                  },
                  promise: function (e) {
                    return null != e ? _e.extend(e, o) : o;
                  },
                },
                r = {};
              return (
                _e.each(t, function (e, i) {
                  var s = i[2],
                    a = i[5];
                  (o[i[1]] = s.add),
                    a &&
                      s.add(
                        function () {
                          n = a;
                        },
                        t[3 - e][2].disable,
                        t[3 - e][3].disable,
                        t[0][2].lock,
                        t[0][3].lock
                      ),
                    s.add(i[3].fire),
                    (r[i[0]] = function () {
                      return (
                        r[i[0] + "With"](this === r ? void 0 : this, arguments),
                        this
                      );
                    }),
                    (r[i[0] + "With"] = s.fireWith);
                }),
                o.promise(r),
                e && e.call(r, r),
                r
              );
            },
            when: function (e) {
              var t = arguments.length,
                n = t,
                o = Array(n),
                i = he.call(arguments),
                s = _e.Deferred(),
                r = function (e) {
                  return function (n) {
                    (o[e] = this),
                      (i[e] = arguments.length > 1 ? he.call(arguments) : n),
                      --t || s.resolveWith(o, i);
                  };
                };
              if (
                t <= 1 &&
                (v(e, s.done(r(n)).resolve, s.reject, !t),
                "pending" === s.state() || ke(i[n] && i[n].then))
              )
                return s.then();
              for (; n--; ) v(i[n], r(n), s.reject);
              return s.promise();
            },
          });
        var ze = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (_e.Deferred.exceptionHook = function (e, t) {
          s.console &&
            s.console.warn &&
            e &&
            ze.test(e.name) &&
            s.console.warn(
              "jQuery.Deferred exception: " + e.message,
              e.stack,
              t
            );
        }),
          (_e.readyException = function (e) {
            s.setTimeout(function () {
              throw e;
            });
          });
        var qe = _e.Deferred();
        (_e.fn.ready = function (e) {
          return (
            qe.then(e).catch(function (e) {
              _e.readyException(e);
            }),
            this
          );
        }),
          _e.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
              (!0 === e ? --_e.readyWait : _e.isReady) ||
                ((_e.isReady = !0),
                (!0 !== e && --_e.readyWait > 0) || qe.resolveWith($e, [_e]));
            },
          }),
          (_e.ready.then = qe.then),
          "complete" === $e.readyState ||
          ("loading" !== $e.readyState && !$e.documentElement.doScroll)
            ? s.setTimeout(_e.ready)
            : ($e.addEventListener("DOMContentLoaded", m),
              s.addEventListener("load", m));
        var Fe = function e(t, n, o, i, s, r, a) {
            var c = 0,
              d = t.length,
              u = null == o;
            if ("object" === l(o)) {
              s = !0;
              for (c in o) e(t, n, c, o[c], !0, r, a);
            } else if (
              void 0 !== i &&
              ((s = !0),
              ke(i) || (a = !0),
              u &&
                (a
                  ? (n.call(t, i), (n = null))
                  : ((u = n),
                    (n = function (e, t, n) {
                      return u.call(_e(e), n);
                    }))),
              n)
            )
              for (; c < d; c++)
                n(t[c], o, a ? i : i.call(t[c], c, n(t[c], o)));
            return s ? t : u ? n.call(t) : d ? n(t[0], o) : r;
          },
          Re = /^-ms-/,
          Be = /-([a-z])/g,
          We = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
        (w.uid = 1),
          (w.prototype = {
            cache: function (e) {
              var t = e[this.expando];
              return (
                t ||
                  ((t = {}),
                  We(e) &&
                    (e.nodeType
                      ? (e[this.expando] = t)
                      : Object.defineProperty(e, this.expando, {
                          value: t,
                          configurable: !0,
                        }))),
                t
              );
            },
            set: function (e, t, n) {
              var o,
                i = this.cache(e);
              if ("string" == typeof t) i[b(t)] = n;
              else for (o in t) i[b(o)] = t[o];
              return i;
            },
            get: function (e, t) {
              return void 0 === t
                ? this.cache(e)
                : e[this.expando] && e[this.expando][b(t)];
            },
            access: function (e, t, n) {
              return void 0 === t || (t && "string" == typeof t && void 0 === n)
                ? this.get(e, t)
                : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
              var n,
                o = e[this.expando];
              if (void 0 !== o) {
                if (void 0 !== t) {
                  Array.isArray(t)
                    ? (t = t.map(b))
                    : ((t = b(t)), (t = t in o ? [t] : t.match(Ne) || [])),
                    (n = t.length);
                  for (; n--; ) delete o[t[n]];
                }
                (void 0 === t || _e.isEmptyObject(o)) &&
                  (e.nodeType
                    ? (e[this.expando] = void 0)
                    : delete e[this.expando]);
              }
            },
            hasData: function (e) {
              var t = e[this.expando];
              return void 0 !== t && !_e.isEmptyObject(t);
            },
          });
        var Xe = new w(),
          Ye = new w(),
          Ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          Ve = /[A-Z]/g;
        _e.extend({
          hasData: function (e) {
            return Ye.hasData(e) || Xe.hasData(e);
          },
          data: function (e, t, n) {
            return Ye.access(e, t, n);
          },
          removeData: function (e, t) {
            Ye.remove(e, t);
          },
          _data: function (e, t, n) {
            return Xe.access(e, t, n);
          },
          _removeData: function (e, t) {
            Xe.remove(e, t);
          },
        }),
          _e.fn.extend({
            data: function (e, t) {
              var n,
                o,
                s,
                r = this[0],
                a = r && r.attributes;
              if (void 0 === e) {
                if (
                  this.length &&
                  ((s = Ye.get(r)),
                  1 === r.nodeType && !Xe.get(r, "hasDataAttrs"))
                ) {
                  for (n = a.length; n--; )
                    a[n] &&
                      ((o = a[n].name),
                      0 === o.indexOf("data-") &&
                        ((o = b(o.slice(5))), T(r, o, s[o])));
                  Xe.set(r, "hasDataAttrs", !0);
                }
                return s;
              }
              return "object" === (void 0 === e ? "undefined" : i(e))
                ? this.each(function () {
                    Ye.set(this, e);
                  })
                : Fe(
                    this,
                    function (t) {
                      var n;
                      if (r && void 0 === t) {
                        if (void 0 !== (n = Ye.get(r, e))) return n;
                        if (void 0 !== (n = T(r, e))) return n;
                      } else
                        this.each(function () {
                          Ye.set(this, e, t);
                        });
                    },
                    null,
                    t,
                    arguments.length > 1,
                    null,
                    !0
                  );
            },
            removeData: function (e) {
              return this.each(function () {
                Ye.remove(this, e);
              });
            },
          }),
          _e.extend({
            queue: function (e, t, n) {
              var o;
              if (e)
                return (
                  (t = (t || "fx") + "queue"),
                  (o = Xe.get(e, t)),
                  n &&
                    (!o || Array.isArray(n)
                      ? (o = Xe.access(e, t, _e.makeArray(n)))
                      : o.push(n)),
                  o || []
                );
            },
            dequeue: function (e, t) {
              t = t || "fx";
              var n = _e.queue(e, t),
                o = n.length,
                i = n.shift(),
                s = _e._queueHooks(e, t),
                r = function () {
                  _e.dequeue(e, t);
                };
              "inprogress" === i && ((i = n.shift()), o--),
                i &&
                  ("fx" === t && n.unshift("inprogress"),
                  delete s.stop,
                  i.call(e, r, s)),
                !o && s && s.empty.fire();
            },
            _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return (
                Xe.get(e, n) ||
                Xe.access(e, n, {
                  empty: _e.Callbacks("once memory").add(function () {
                    Xe.remove(e, [t + "queue", n]);
                  }),
                })
              );
            },
          }),
          _e.fn.extend({
            queue: function (e, t) {
              var n = 2;
              return (
                "string" != typeof e && ((t = e), (e = "fx"), n--),
                arguments.length < n
                  ? _e.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function () {
                      var n = _e.queue(this, e, t);
                      _e._queueHooks(this, e),
                        "fx" === e &&
                          "inprogress" !== n[0] &&
                          _e.dequeue(this, e);
                    })
              );
            },
            dequeue: function (e) {
              return this.each(function () {
                _e.dequeue(this, e);
              });
            },
            clearQueue: function (e) {
              return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
              var n,
                o = 1,
                i = _e.Deferred(),
                s = this,
                r = this.length,
                a = function () {
                  --o || i.resolveWith(s, [s]);
                };
              for (
                "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
                r--;

              )
                (n = Xe.get(s[r], e + "queueHooks")) &&
                  n.empty &&
                  (o++, n.empty.add(a));
              return a(), i.promise(t);
            },
          });
        var Qe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          Ze = new RegExp("^(?:([+-])=|)(" + Qe + ")([a-z%]*)$", "i"),
          Ge = ["Top", "Right", "Bottom", "Left"],
          Ke = $e.documentElement,
          Je = function (e) {
            return _e.contains(e.ownerDocument, e);
          },
          et = { composed: !0 };
        Ke.getRootNode &&
          (Je = function (e) {
            return (
              _e.contains(e.ownerDocument, e) ||
              e.getRootNode(et) === e.ownerDocument
            );
          });
        var tt = function (e, t) {
            return (
              (e = t || e),
              "none" === e.style.display ||
                ("" === e.style.display &&
                  Je(e) &&
                  "none" === _e.css(e, "display"))
            );
          },
          nt = {};
        _e.fn.extend({
          show: function () {
            return C(this, !0);
          },
          hide: function () {
            return C(this);
          },
          toggle: function (e) {
            return "boolean" == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function () {
                  tt(this) ? _e(this).show() : _e(this).hide();
                });
          },
        });
        var ot = /^(?:checkbox|radio)$/i,
          it = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          st = /^$|^module$|\/(?:java|ecma)script/i;
        !(function () {
          var e = $e.createDocumentFragment(),
            t = e.appendChild($e.createElement("div")),
            n = $e.createElement("input");
          n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            t.appendChild(n),
            (Se.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (t.innerHTML = "<textarea>x</textarea>"),
            (Se.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
            (t.innerHTML = "<option></option>"),
            (Se.option = !!t.lastChild);
        })();
        var rt = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
        (rt.tbody = rt.tfoot = rt.colgroup = rt.caption = rt.thead),
          (rt.th = rt.td),
          Se.option ||
            (rt.optgroup = rt.option = [
              1,
              "<select multiple='multiple'>",
              "</select>",
            ]);
        var at = /<|&#?\w+;/,
          lt = /^key/,
          ct = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          dt = /^([^.]*)(?:\.(.+)|)/;
        (_e.event = {
          global: {},
          add: function (e, t, n, o, i) {
            var s,
              r,
              a,
              l,
              c,
              d,
              u,
              p,
              f,
              h,
              g,
              v = Xe.get(e);
            if (We(e))
              for (
                n.handler && ((s = n), (n = s.handler), (i = s.selector)),
                  i && _e.find.matchesSelector(Ke, i),
                  n.guid || (n.guid = _e.guid++),
                  (l = v.events) || (l = v.events = Object.create(null)),
                  (r = v.handle) ||
                    (r = v.handle = function (t) {
                      return void 0 !== _e && _e.event.triggered !== t.type
                        ? _e.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                  t = (t || "").match(Ne) || [""],
                  c = t.length;
                c--;

              )
                (a = dt.exec(t[c]) || []),
                  (f = g = a[1]),
                  (h = (a[2] || "").split(".").sort()),
                  f &&
                    ((u = _e.event.special[f] || {}),
                    (f = (i ? u.delegateType : u.bindType) || f),
                    (u = _e.event.special[f] || {}),
                    (d = _e.extend(
                      {
                        type: f,
                        origType: g,
                        data: o,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && _e.expr.match.needsContext.test(i),
                        namespace: h.join("."),
                      },
                      s
                    )),
                    (p = l[f]) ||
                      ((p = l[f] = []),
                      (p.delegateCount = 0),
                      (u.setup && !1 !== u.setup.call(e, o, h, r)) ||
                        (e.addEventListener && e.addEventListener(f, r))),
                    u.add &&
                      (u.add.call(e, d),
                      d.handler.guid || (d.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                    (_e.event.global[f] = !0));
          },
          remove: function (e, t, n, o, i) {
            var s,
              r,
              a,
              l,
              c,
              d,
              u,
              p,
              f,
              h,
              g,
              v = Xe.hasData(e) && Xe.get(e);
            if (v && (l = v.events)) {
              for (t = (t || "").match(Ne) || [""], c = t.length; c--; )
                if (
                  ((a = dt.exec(t[c]) || []),
                  (f = g = a[1]),
                  (h = (a[2] || "").split(".").sort()),
                  f)
                ) {
                  for (
                    u = _e.event.special[f] || {},
                      f = (o ? u.delegateType : u.bindType) || f,
                      p = l[f] || [],
                      a =
                        a[2] &&
                        new RegExp(
                          "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        ),
                      r = s = p.length;
                    s--;

                  )
                    (d = p[s]),
                      (!i && g !== d.origType) ||
                        (n && n.guid !== d.guid) ||
                        (a && !a.test(d.namespace)) ||
                        (o &&
                          o !== d.selector &&
                          ("**" !== o || !d.selector)) ||
                        (p.splice(s, 1),
                        d.selector && p.delegateCount--,
                        u.remove && u.remove.call(e, d));
                  r &&
                    !p.length &&
                    ((u.teardown && !1 !== u.teardown.call(e, h, v.handle)) ||
                      _e.removeEvent(e, f, v.handle),
                    delete l[f]);
                } else for (f in l) _e.event.remove(e, f + t[c], n, o, !0);
              _e.isEmptyObject(l) && Xe.remove(e, "handle events");
            }
          },
          dispatch: function (e) {
            var t,
              n,
              o,
              i,
              s,
              r,
              a = new Array(arguments.length),
              l = _e.event.fix(e),
              c = (Xe.get(this, "events") || Object.create(null))[l.type] || [],
              d = _e.event.special[l.type] || {};
            for (a[0] = l, t = 1; t < arguments.length; t++)
              a[t] = arguments[t];
            if (
              ((l.delegateTarget = this),
              !d.preDispatch || !1 !== d.preDispatch.call(this, l))
            ) {
              for (
                r = _e.event.handlers.call(this, l, c), t = 0;
                (i = r[t++]) && !l.isPropagationStopped();

              )
                for (
                  l.currentTarget = i.elem, n = 0;
                  (s = i.handlers[n++]) && !l.isImmediatePropagationStopped();

                )
                  (l.rnamespace &&
                    !1 !== s.namespace &&
                    !l.rnamespace.test(s.namespace)) ||
                    ((l.handleObj = s),
                    (l.data = s.data),
                    void 0 !==
                      (o = (
                        (_e.event.special[s.origType] || {}).handle || s.handler
                      ).apply(i.elem, a)) &&
                      !1 === (l.result = o) &&
                      (l.preventDefault(), l.stopPropagation()));
              return d.postDispatch && d.postDispatch.call(this, l), l.result;
            }
          },
          handlers: function (e, t) {
            var n,
              o,
              i,
              s,
              r,
              a = [],
              l = t.delegateCount,
              c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
              for (; c !== this; c = c.parentNode || this)
                if (
                  1 === c.nodeType &&
                  ("click" !== e.type || !0 !== c.disabled)
                ) {
                  for (s = [], r = {}, n = 0; n < l; n++)
                    (o = t[n]),
                      (i = o.selector + " "),
                      void 0 === r[i] &&
                        (r[i] = o.needsContext
                          ? _e(i, this).index(c) > -1
                          : _e.find(i, this, null, [c]).length),
                      r[i] && s.push(o);
                  s.length && a.push({ elem: c, handlers: s });
                }
            return (
              (c = this),
              l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
              a
            );
          },
          addProp: function (e, t) {
            Object.defineProperty(_e.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: ke(t)
                ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                  }
                : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                  },
              set: function (t) {
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                });
              },
            });
          },
          fix: function (e) {
            return e[_e.expando] ? e : new _e.Event(e);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function (e) {
                var t = this || e;
                return (
                  ot.test(t.type) &&
                    t.click &&
                    d(t, "input") &&
                    H(t, "click", E),
                  !1
                );
              },
              trigger: function (e) {
                var t = this || e;
                return (
                  ot.test(t.type) && t.click && d(t, "input") && H(t, "click"),
                  !0
                );
              },
              _default: function (e) {
                var t = e.target;
                return (
                  (ot.test(t.type) &&
                    t.click &&
                    d(t, "input") &&
                    Xe.get(t, "click")) ||
                  d(t, "a")
                );
              },
            },
            beforeunload: {
              postDispatch: function (e) {
                void 0 !== e.result &&
                  e.originalEvent &&
                  (e.originalEvent.returnValue = e.result);
              },
            },
          },
        }),
          (_e.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
          (_e.Event = function (e, t) {
            if (!(this instanceof _e.Event)) return new _e.Event(e, t);
            e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? E
                    : P),
                (this.target =
                  e.target && 3 === e.target.nodeType
                    ? e.target.parentNode
                    : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && _e.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[_e.expando] = !0);
          }),
          (_e.Event.prototype = {
            constructor: _e.Event,
            isDefaultPrevented: P,
            isPropagationStopped: P,
            isImmediatePropagationStopped: P,
            isSimulated: !1,
            preventDefault: function () {
              var e = this.originalEvent;
              (this.isDefaultPrevented = E),
                e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
              var e = this.originalEvent;
              (this.isPropagationStopped = E),
                e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = E),
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation();
            },
          }),
          _e.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              code: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: function (e) {
                var t = e.button;
                return null == e.which && lt.test(e.type)
                  ? null != e.charCode
                    ? e.charCode
                    : e.keyCode
                  : !e.which && void 0 !== t && ct.test(e.type)
                  ? 1 & t
                    ? 1
                    : 2 & t
                    ? 3
                    : 4 & t
                    ? 2
                    : 0
                  : e.which;
              },
            },
            _e.event.addProp
          ),
          _e.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            _e.event.special[e] = {
              setup: function () {
                return H(this, e, L), !1;
              },
              trigger: function () {
                return H(this, e), !0;
              },
              delegateType: t,
            };
          }),
          _e.each(
            {
              mouseenter: "mouseover",
              mouseleave: "mouseout",
              pointerenter: "pointerover",
              pointerleave: "pointerout",
            },
            function (e, t) {
              _e.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                  var n,
                    o = this,
                    i = e.relatedTarget,
                    s = e.handleObj;
                  return (
                    (i && (i === o || _e.contains(o, i))) ||
                      ((e.type = s.origType),
                      (n = s.handler.apply(this, arguments)),
                      (e.type = t)),
                    n
                  );
                },
              };
            }
          ),
          _e.fn.extend({
            on: function (e, t, n, o) {
              return j(this, e, t, n, o);
            },
            one: function (e, t, n, o) {
              return j(this, e, t, n, o, 1);
            },
            off: function (e, t, n) {
              var o, s;
              if (e && e.preventDefault && e.handleObj)
                return (
                  (o = e.handleObj),
                  _e(e.delegateTarget).off(
                    o.namespace ? o.origType + "." + o.namespace : o.origType,
                    o.selector,
                    o.handler
                  ),
                  this
                );
              if ("object" === (void 0 === e ? "undefined" : i(e))) {
                for (s in e) this.off(s, t, e[s]);
                return this;
              }
              return (
                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = P),
                this.each(function () {
                  _e.event.remove(this, e, n, t);
                })
              );
            },
          });
        var ut = /<script|<style|<link/i,
          pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
          ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        _e.extend({
          htmlPrefilter: function (e) {
            return e;
          },
          clone: function (e, t, n) {
            var o,
              i,
              s,
              r,
              a = e.cloneNode(!0),
              l = Je(e);
            if (
              !(
                Se.noCloneChecked ||
                (1 !== e.nodeType && 11 !== e.nodeType) ||
                _e.isXMLDoc(e)
              )
            )
              for (r = $(a), s = $(e), o = 0, i = s.length; o < i; o++)
                z(s[o], r[o]);
            if (t)
              if (n)
                for (
                  s = s || $(e), r = r || $(a), o = 0, i = s.length;
                  o < i;
                  o++
                )
                  N(s[o], r[o]);
              else N(e, a);
            return (
              (r = $(a, "script")),
              r.length > 0 && A(r, !l && $(e, "script")),
              a
            );
          },
          cleanData: function (e) {
            for (
              var t, n, o, i = _e.event.special, s = 0;
              void 0 !== (n = e[s]);
              s++
            )
              if (We(n)) {
                if ((t = n[Xe.expando])) {
                  if (t.events)
                    for (o in t.events)
                      i[o]
                        ? _e.event.remove(n, o)
                        : _e.removeEvent(n, o, t.handle);
                  n[Xe.expando] = void 0;
                }
                n[Ye.expando] && (n[Ye.expando] = void 0);
              }
          },
        }),
          _e.fn.extend({
            detach: function (e) {
              return F(this, e, !0);
            },
            remove: function (e) {
              return F(this, e);
            },
            text: function (e) {
              return Fe(
                this,
                function (e) {
                  return void 0 === e
                    ? _e.text(this)
                    : this.empty().each(function () {
                        (1 !== this.nodeType &&
                          11 !== this.nodeType &&
                          9 !== this.nodeType) ||
                          (this.textContent = e);
                      });
                },
                null,
                e,
                arguments.length
              );
            },
            append: function () {
              return q(this, arguments, function (e) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  M(this, e).appendChild(e);
                }
              });
            },
            prepend: function () {
              return q(this, arguments, function (e) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var t = M(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function () {
              return q(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function () {
              return q(this, arguments, function (e) {
                this.parentNode &&
                  this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            empty: function () {
              for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType &&
                  (_e.cleanData($(e, !1)), (e.textContent = ""));
              return this;
            },
            clone: function (e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function () {
                  return _e.clone(this, e, t);
                })
              );
            },
            html: function (e) {
              return Fe(
                this,
                function (e) {
                  var t = this[0] || {},
                    n = 0,
                    o = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if (
                    "string" == typeof e &&
                    !ut.test(e) &&
                    !rt[(it.exec(e) || ["", ""])[1].toLowerCase()]
                  ) {
                    e = _e.htmlPrefilter(e);
                    try {
                      for (; n < o; n++)
                        (t = this[n] || {}),
                          1 === t.nodeType &&
                            (_e.cleanData($(t, !1)), (t.innerHTML = e));
                      t = 0;
                    } catch (e) {}
                  }
                  t && this.empty().append(e);
                },
                null,
                e,
                arguments.length
              );
            },
            replaceWith: function () {
              var e = [];
              return q(
                this,
                arguments,
                function (t) {
                  var n = this.parentNode;
                  _e.inArray(this, e) < 0 &&
                    (_e.cleanData($(this)), n && n.replaceChild(t, this));
                },
                e
              );
            },
          }),
          _e.each(
            {
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith",
            },
            function (e, t) {
              _e.fn[e] = function (e) {
                for (
                  var n, o = [], i = _e(e), s = i.length - 1, r = 0;
                  r <= s;
                  r++
                )
                  (n = r === s ? this : this.clone(!0)),
                    _e(i[r])[t](n),
                    ve.apply(o, n.get());
                return this.pushStack(o);
              };
            }
          );
        var ht = new RegExp("^(" + Qe + ")(?!px)[a-z%]+$", "i"),
          gt = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = s), t.getComputedStyle(e);
          },
          vt = function (e, t, n) {
            var o,
              i,
              s = {};
            for (i in t) (s[i] = e.style[i]), (e.style[i] = t[i]);
            o = n.call(e);
            for (i in t) e.style[i] = s[i];
            return o;
          },
          mt = new RegExp(Ge.join("|"), "i");
        !(function () {
          function e() {
            if (d) {
              (c.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (d.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                Ke.appendChild(c).appendChild(d);
              var e = s.getComputedStyle(d);
              (n = "1%" !== e.top),
                (l = 12 === t(e.marginLeft)),
                (d.style.right = "60%"),
                (r = 36 === t(e.right)),
                (o = 36 === t(e.width)),
                (d.style.position = "absolute"),
                (i = 12 === t(d.offsetWidth / 3)),
                Ke.removeChild(c),
                (d = null);
            }
          }
          function t(e) {
            return Math.round(parseFloat(e));
          }
          var n,
            o,
            i,
            r,
            a,
            l,
            c = $e.createElement("div"),
            d = $e.createElement("div");
          d.style &&
            ((d.style.backgroundClip = "content-box"),
            (d.cloneNode(!0).style.backgroundClip = ""),
            (Se.clearCloneStyle = "content-box" === d.style.backgroundClip),
            _e.extend(Se, {
              boxSizingReliable: function () {
                return e(), o;
              },
              pixelBoxStyles: function () {
                return e(), r;
              },
              pixelPosition: function () {
                return e(), n;
              },
              reliableMarginLeft: function () {
                return e(), l;
              },
              scrollboxSize: function () {
                return e(), i;
              },
              reliableTrDimensions: function () {
                var e, t, n, o;
                return (
                  null == a &&
                    ((e = $e.createElement("table")),
                    (t = $e.createElement("tr")),
                    (n = $e.createElement("div")),
                    (e.style.cssText = "position:absolute;left:-11111px"),
                    (t.style.height = "1px"),
                    (n.style.height = "9px"),
                    Ke.appendChild(e).appendChild(t).appendChild(n),
                    (o = s.getComputedStyle(t)),
                    (a = parseInt(o.height) > 3),
                    Ke.removeChild(e)),
                  a
                );
              },
            }));
        })();
        var yt = ["Webkit", "Moz", "ms"],
          bt = $e.createElement("div").style,
          wt = {},
          xt = /^(none|table(?!-c[ea]).+)/,
          Tt = /^--/,
          St = { position: "absolute", visibility: "hidden", display: "block" },
          kt = { letterSpacing: "0", fontWeight: "400" };
        _e.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = R(e, "opacity");
                  return "" === n ? "1" : n;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: {},
          style: function (e, t, n, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var s,
                r,
                a,
                l = b(t),
                c = Tt.test(t),
                d = e.style;
              if (
                (c || (t = X(l)),
                (a = _e.cssHooks[t] || _e.cssHooks[l]),
                void 0 === n)
              )
                return a && "get" in a && void 0 !== (s = a.get(e, !1, o))
                  ? s
                  : d[t];
              (r = void 0 === n ? "undefined" : i(n)),
                "string" === r &&
                  (s = Ze.exec(n)) &&
                  s[1] &&
                  ((n = S(e, t, s)), (r = "number")),
                null != n &&
                  n === n &&
                  ("number" !== r ||
                    c ||
                    (n += (s && s[3]) || (_e.cssNumber[l] ? "" : "px")),
                  Se.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (d[t] = "inherit"),
                  (a && "set" in a && void 0 === (n = a.set(e, n, o))) ||
                    (c ? d.setProperty(t, n) : (d[t] = n)));
            }
          },
          css: function (e, t, n, o) {
            var i,
              s,
              r,
              a = b(t);
            return (
              Tt.test(t) || (t = X(a)),
              (r = _e.cssHooks[t] || _e.cssHooks[a]),
              r && "get" in r && (i = r.get(e, !0, n)),
              void 0 === i && (i = R(e, t, o)),
              "normal" === i && t in kt && (i = kt[t]),
              "" === n || n
                ? ((s = parseFloat(i)), !0 === n || isFinite(s) ? s || 0 : i)
                : i
            );
          },
        }),
          _e.each(["height", "width"], function (e, t) {
            _e.cssHooks[t] = {
              get: function (e, n, o) {
                if (n)
                  return !xt.test(_e.css(e, "display")) ||
                    (e.getClientRects().length &&
                      e.getBoundingClientRect().width)
                    ? V(e, t, o)
                    : vt(e, St, function () {
                        return V(e, t, o);
                      });
              },
              set: function (e, n, o) {
                var i,
                  s = gt(e),
                  r = !Se.scrollboxSize() && "absolute" === s.position,
                  a = r || o,
                  l = a && "border-box" === _e.css(e, "boxSizing", !1, s),
                  c = o ? U(e, t, o, l, s) : 0;
                return (
                  l &&
                    r &&
                    (c -= Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        parseFloat(s[t]) -
                        U(e, t, "border", !1, s) -
                        0.5
                    )),
                  c &&
                    (i = Ze.exec(n)) &&
                    "px" !== (i[3] || "px") &&
                    ((e.style[t] = n), (n = _e.css(e, t))),
                  Y(e, n, c)
                );
              },
            };
          }),
          (_e.cssHooks.marginLeft = B(Se.reliableMarginLeft, function (e, t) {
            if (t)
              return (
                (parseFloat(R(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                    vt(e, { marginLeft: 0 }, function () {
                      return e.getBoundingClientRect().left;
                    })) + "px"
              );
          })),
          _e.each(
            { margin: "", padding: "", border: "Width" },
            function (e, t) {
              (_e.cssHooks[e + t] = {
                expand: function (n) {
                  for (
                    var o = 0,
                      i = {},
                      s = "string" == typeof n ? n.split(" ") : [n];
                    o < 4;
                    o++
                  )
                    i[e + Ge[o] + t] = s[o] || s[o - 2] || s[0];
                  return i;
                },
              }),
                "margin" !== e && (_e.cssHooks[e + t].set = Y);
            }
          ),
          _e.fn.extend({
            css: function (e, t) {
              return Fe(
                this,
                function (e, t, n) {
                  var o,
                    i,
                    s = {},
                    r = 0;
                  if (Array.isArray(t)) {
                    for (o = gt(e), i = t.length; r < i; r++)
                      s[t[r]] = _e.css(e, t[r], !1, o);
                    return s;
                  }
                  return void 0 !== n ? _e.style(e, t, n) : _e.css(e, t);
                },
                e,
                t,
                arguments.length > 1
              );
            },
          }),
          (_e.Tween = Q),
          (Q.prototype = {
            constructor: Q,
            init: function (e, t, n, o, i, s) {
              (this.elem = e),
                (this.prop = n),
                (this.easing = i || _e.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = o),
                (this.unit = s || (_e.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
              var e = Q.propHooks[this.prop];
              return e && e.get ? e.get(this) : Q.propHooks._default.get(this);
            },
            run: function (e) {
              var t,
                n = Q.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = t = _e.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                  : (this.pos = t = e),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step &&
                  this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : Q.propHooks._default.set(this),
                this
              );
            },
          }),
          (Q.prototype.init.prototype = Q.prototype),
          (Q.propHooks = {
            _default: {
              get: function (e) {
                var t;
                return 1 !== e.elem.nodeType ||
                  (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                  ? e.elem[e.prop]
                  : ((t = _e.css(e.elem, e.prop, "")),
                    t && "auto" !== t ? t : 0);
              },
              set: function (e) {
                _e.fx.step[e.prop]
                  ? _e.fx.step[e.prop](e)
                  : 1 !== e.elem.nodeType ||
                    (!_e.cssHooks[e.prop] && null == e.elem.style[X(e.prop)])
                  ? (e.elem[e.prop] = e.now)
                  : _e.style(e.elem, e.prop, e.now + e.unit);
              },
            },
          }),
          (Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
          (_e.easing = {
            linear: function (e) {
              return e;
            },
            swing: function (e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
          }),
          (_e.fx = Q.prototype.init),
          (_e.fx.step = {});
        var Ct,
          $t,
          At = /^(?:toggle|show|hide)$/,
          _t = /queueHooks$/;
        (_e.Animation = _e.extend(ne, {
          tweeners: {
            "*": [
              function (e, t) {
                var n = this.createTween(e, t);
                return S(n.elem, e, Ze.exec(t), n), n;
              },
            ],
          },
          tweener: function (e, t) {
            ke(e) ? ((t = e), (e = ["*"])) : (e = e.match(Ne));
            for (var n, o = 0, i = e.length; o < i; o++)
              (n = e[o]),
                (ne.tweeners[n] = ne.tweeners[n] || []),
                ne.tweeners[n].unshift(t);
          },
          prefilters: [ee],
          prefilter: function (e, t) {
            t ? ne.prefilters.unshift(e) : ne.prefilters.push(e);
          },
        })),
          (_e.speed = function (e, t, n) {
            var o =
              e && "object" === (void 0 === e ? "undefined" : i(e))
                ? _e.extend({}, e)
                : {
                    complete: n || (!n && t) || (ke(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !ke(t) && t),
                  };
            return (
              _e.fx.off
                ? (o.duration = 0)
                : "number" != typeof o.duration &&
                  (o.duration in _e.fx.speeds
                    ? (o.duration = _e.fx.speeds[o.duration])
                    : (o.duration = _e.fx.speeds._default)),
              (null != o.queue && !0 !== o.queue) || (o.queue = "fx"),
              (o.old = o.complete),
              (o.complete = function () {
                ke(o.old) && o.old.call(this),
                  o.queue && _e.dequeue(this, o.queue);
              }),
              o
            );
          }),
          _e.fn.extend({
            fadeTo: function (e, t, n, o) {
              return this.filter(tt)
                .css("opacity", 0)
                .show()
                .end()
                .animate({ opacity: t }, e, n, o);
            },
            animate: function (e, t, n, o) {
              var i = _e.isEmptyObject(e),
                s = _e.speed(t, n, o),
                r = function () {
                  var t = ne(this, _e.extend({}, e), s);
                  (i || Xe.get(this, "finish")) && t.stop(!0);
                };
              return (
                (r.finish = r),
                i || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
              );
            },
            stop: function (e, t, n) {
              var o = function (e) {
                var t = e.stop;
                delete e.stop, t(n);
              };
              return (
                "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                t && this.queue(e || "fx", []),
                this.each(function () {
                  var t = !0,
                    i = null != e && e + "queueHooks",
                    s = _e.timers,
                    r = Xe.get(this);
                  if (i) r[i] && r[i].stop && o(r[i]);
                  else for (i in r) r[i] && r[i].stop && _t.test(i) && o(r[i]);
                  for (i = s.length; i--; )
                    s[i].elem !== this ||
                      (null != e && s[i].queue !== e) ||
                      (s[i].anim.stop(n), (t = !1), s.splice(i, 1));
                  (!t && n) || _e.dequeue(this, e);
                })
              );
            },
            finish: function (e) {
              return (
                !1 !== e && (e = e || "fx"),
                this.each(function () {
                  var t,
                    n = Xe.get(this),
                    o = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    s = _e.timers,
                    r = o ? o.length : 0;
                  for (
                    n.finish = !0,
                      _e.queue(this, e, []),
                      i && i.stop && i.stop.call(this, !0),
                      t = s.length;
                    t--;

                  )
                    s[t].elem === this &&
                      s[t].queue === e &&
                      (s[t].anim.stop(!0), s.splice(t, 1));
                  for (t = 0; t < r; t++)
                    o[t] && o[t].finish && o[t].finish.call(this);
                  delete n.finish;
                })
              );
            },
          }),
          _e.each(["toggle", "show", "hide"], function (e, t) {
            var n = _e.fn[t];
            _e.fn[t] = function (e, o, i) {
              return null == e || "boolean" == typeof e
                ? n.apply(this, arguments)
                : this.animate(K(t, !0), e, o, i);
            };
          }),
          _e.each(
            {
              slideDown: K("show"),
              slideUp: K("hide"),
              slideToggle: K("toggle"),
              fadeIn: { opacity: "show" },
              fadeOut: { opacity: "hide" },
              fadeToggle: { opacity: "toggle" },
            },
            function (e, t) {
              _e.fn[e] = function (e, n, o) {
                return this.animate(t, e, n, o);
              };
            }
          ),
          (_e.timers = []),
          (_e.fx.tick = function () {
            var e,
              t = 0,
              n = _e.timers;
            for (Ct = Date.now(); t < n.length; t++)
              (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || _e.fx.stop(), (Ct = void 0);
          }),
          (_e.fx.timer = function (e) {
            _e.timers.push(e), _e.fx.start();
          }),
          (_e.fx.interval = 13),
          (_e.fx.start = function () {
            $t || (($t = !0), Z());
          }),
          (_e.fx.stop = function () {
            $t = null;
          }),
          (_e.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (_e.fn.delay = function (e, t) {
            return (
              (e = _e.fx ? _e.fx.speeds[e] || e : e),
              (t = t || "fx"),
              this.queue(t, function (t, n) {
                var o = s.setTimeout(t, e);
                n.stop = function () {
                  s.clearTimeout(o);
                };
              })
            );
          }),
          (function () {
            var e = $e.createElement("input"),
              t = $e.createElement("select"),
              n = t.appendChild($e.createElement("option"));
            (e.type = "checkbox"),
              (Se.checkOn = "" !== e.value),
              (Se.optSelected = n.selected),
              (e = $e.createElement("input")),
              (e.value = "t"),
              (e.type = "radio"),
              (Se.radioValue = "t" === e.value);
          })();
        var Et,
          Pt = _e.expr.attrHandle;
        _e.fn.extend({
          attr: function (e, t) {
            return Fe(this, _e.attr, e, t, arguments.length > 1);
          },
          removeAttr: function (e) {
            return this.each(function () {
              _e.removeAttr(this, e);
            });
          },
        }),
          _e.extend({
            attr: function (e, t, n) {
              var o,
                i,
                s = e.nodeType;
              if (3 !== s && 8 !== s && 2 !== s)
                return void 0 === e.getAttribute
                  ? _e.prop(e, t, n)
                  : ((1 === s && _e.isXMLDoc(e)) ||
                      (i =
                        _e.attrHooks[t.toLowerCase()] ||
                        (_e.expr.match.bool.test(t) ? Et : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void _e.removeAttr(e, t)
                        : i && "set" in i && void 0 !== (o = i.set(e, n, t))
                        ? o
                        : (e.setAttribute(t, n + ""), n)
                      : i && "get" in i && null !== (o = i.get(e, t))
                      ? o
                      : ((o = _e.find.attr(e, t)), null == o ? void 0 : o));
            },
            attrHooks: {
              type: {
                set: function (e, t) {
                  if (!Se.radioValue && "radio" === t && d(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                },
              },
            },
            removeAttr: function (e, t) {
              var n,
                o = 0,
                i = t && t.match(Ne);
              if (i && 1 === e.nodeType)
                for (; (n = i[o++]); ) e.removeAttribute(n);
            },
          }),
          (Et = {
            set: function (e, t, n) {
              return !1 === t ? _e.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
          }),
          _e.each(_e.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = Pt[t] || _e.find.attr;
            Pt[t] = function (e, t, o) {
              var i,
                s,
                r = t.toLowerCase();
              return (
                o ||
                  ((s = Pt[r]),
                  (Pt[r] = i),
                  (i = null != n(e, t, o) ? r : null),
                  (Pt[r] = s)),
                i
              );
            };
          });
        var Lt = /^(?:input|select|textarea|button)$/i,
          Dt = /^(?:a|area)$/i;
        _e.fn.extend({
          prop: function (e, t) {
            return Fe(this, _e.prop, e, t, arguments.length > 1);
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[_e.propFix[e] || e];
            });
          },
        }),
          _e.extend({
            prop: function (e, t, n) {
              var o,
                i,
                s = e.nodeType;
              if (3 !== s && 8 !== s && 2 !== s)
                return (
                  (1 === s && _e.isXMLDoc(e)) ||
                    ((t = _e.propFix[t] || t), (i = _e.propHooks[t])),
                  void 0 !== n
                    ? i && "set" in i && void 0 !== (o = i.set(e, n, t))
                      ? o
                      : (e[t] = n)
                    : i && "get" in i && null !== (o = i.get(e, t))
                    ? o
                    : e[t]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (e) {
                  var t = _e.find.attr(e, "tabindex");
                  return t
                    ? parseInt(t, 10)
                    : Lt.test(e.nodeName) || (Dt.test(e.nodeName) && e.href)
                    ? 0
                    : -1;
                },
              },
            },
            propFix: { for: "htmlFor", class: "className" },
          }),
          Se.optSelected ||
            (_e.propHooks.selected = {
              get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
              },
              set: function (e) {
                var t = e.parentNode;
                t &&
                  (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
              },
            }),
          _e.each(
            [
              "tabIndex",
              "readOnly",
              "maxLength",
              "cellSpacing",
              "cellPadding",
              "rowSpan",
              "colSpan",
              "useMap",
              "frameBorder",
              "contentEditable",
            ],
            function () {
              _e.propFix[this.toLowerCase()] = this;
            }
          ),
          _e.fn.extend({
            addClass: function (e) {
              var t,
                n,
                o,
                i,
                s,
                r,
                a,
                l = 0;
              if (ke(e))
                return this.each(function (t) {
                  _e(this).addClass(e.call(this, t, ie(this)));
                });
              if (((t = se(e)), t.length))
                for (; (n = this[l++]); )
                  if (
                    ((i = ie(n)), (o = 1 === n.nodeType && " " + oe(i) + " "))
                  ) {
                    for (r = 0; (s = t[r++]); )
                      o.indexOf(" " + s + " ") < 0 && (o += s + " ");
                    (a = oe(o)), i !== a && n.setAttribute("class", a);
                  }
              return this;
            },
            removeClass: function (e) {
              var t,
                n,
                o,
                i,
                s,
                r,
                a,
                l = 0;
              if (ke(e))
                return this.each(function (t) {
                  _e(this).removeClass(e.call(this, t, ie(this)));
                });
              if (!arguments.length) return this.attr("class", "");
              if (((t = se(e)), t.length))
                for (; (n = this[l++]); )
                  if (
                    ((i = ie(n)), (o = 1 === n.nodeType && " " + oe(i) + " "))
                  ) {
                    for (r = 0; (s = t[r++]); )
                      for (; o.indexOf(" " + s + " ") > -1; )
                        o = o.replace(" " + s + " ", " ");
                    (a = oe(o)), i !== a && n.setAttribute("class", a);
                  }
              return this;
            },
            toggleClass: function (e, t) {
              var n = void 0 === e ? "undefined" : i(e),
                o = "string" === n || Array.isArray(e);
              return "boolean" == typeof t && o
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : ke(e)
                ? this.each(function (n) {
                    _e(this).toggleClass(e.call(this, n, ie(this), t), t);
                  })
                : this.each(function () {
                    var t, i, s, r;
                    if (o)
                      for (i = 0, s = _e(this), r = se(e); (t = r[i++]); )
                        s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                    else
                      (void 0 !== e && "boolean" !== n) ||
                        ((t = ie(this)),
                        t && Xe.set(this, "__className__", t),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            t || !1 === e
                              ? ""
                              : Xe.get(this, "__className__") || ""
                          ));
                  });
            },
            hasClass: function (e) {
              var t,
                n,
                o = 0;
              for (t = " " + e + " "; (n = this[o++]); )
                if (1 === n.nodeType && (" " + oe(ie(n)) + " ").indexOf(t) > -1)
                  return !0;
              return !1;
            },
          });
        var jt = /\r/g;
        _e.fn.extend({
          val: function (e) {
            var t,
              n,
              o,
              i = this[0];
            {
              if (arguments.length)
                return (
                  (o = ke(e)),
                  this.each(function (n) {
                    var i;
                    1 === this.nodeType &&
                      ((i = o ? e.call(this, n, _e(this).val()) : e),
                      null == i
                        ? (i = "")
                        : "number" == typeof i
                        ? (i += "")
                        : Array.isArray(i) &&
                          (i = _e.map(i, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        _e.valHooks[this.type] ||
                        _e.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, i, "value")) ||
                        (this.value = i));
                  })
                );
              if (i)
                return (t =
                  _e.valHooks[i.type] ||
                  _e.valHooks[i.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(i, "value"))
                  ? n
                  : ((n = i.value),
                    "string" == typeof n
                      ? n.replace(jt, "")
                      : null == n
                      ? ""
                      : n);
            }
          },
        }),
          _e.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = _e.find.attr(e, "value");
                  return null != t ? t : oe(_e.text(e));
                },
              },
              select: {
                get: function (e) {
                  var t,
                    n,
                    o,
                    i = e.options,
                    s = e.selectedIndex,
                    r = "select-one" === e.type,
                    a = r ? null : [],
                    l = r ? s + 1 : i.length;
                  for (o = s < 0 ? l : r ? s : 0; o < l; o++)
                    if (
                      ((n = i[o]),
                      (n.selected || o === s) &&
                        !n.disabled &&
                        (!n.parentNode.disabled ||
                          !d(n.parentNode, "optgroup")))
                    ) {
                      if (((t = _e(n).val()), r)) return t;
                      a.push(t);
                    }
                  return a;
                },
                set: function (e, t) {
                  for (
                    var n, o, i = e.options, s = _e.makeArray(t), r = i.length;
                    r--;

                  )
                    (o = i[r]),
                      (o.selected =
                        _e.inArray(_e.valHooks.option.get(o), s) > -1) &&
                        (n = !0);
                  return n || (e.selectedIndex = -1), s;
                },
              },
            },
          }),
          _e.each(["radio", "checkbox"], function () {
            (_e.valHooks[this] = {
              set: function (e, t) {
                if (Array.isArray(t))
                  return (e.checked = _e.inArray(_e(e).val(), t) > -1);
              },
            }),
              Se.checkOn ||
                (_e.valHooks[this].get = function (e) {
                  return null === e.getAttribute("value") ? "on" : e.value;
                });
          }),
          (Se.focusin = "onfocusin" in s);
        var Ht = /^(?:focusinfocus|focusoutblur)$/,
          Mt = function (e) {
            e.stopPropagation();
          };
        _e.extend(_e.event, {
          trigger: function (e, t, n, o) {
            var r,
              a,
              l,
              c,
              d,
              u,
              p,
              f,
              h = [n || $e],
              g = we.call(e, "type") ? e.type : e,
              v = we.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
              ((a = f = l = n = n || $e),
              3 !== n.nodeType &&
                8 !== n.nodeType &&
                !Ht.test(g + _e.event.triggered) &&
                (g.indexOf(".") > -1 &&
                  ((v = g.split(".")), (g = v.shift()), v.sort()),
                (d = g.indexOf(":") < 0 && "on" + g),
                (e = e[_e.expando]
                  ? e
                  : new _e.Event(
                      g,
                      "object" === (void 0 === e ? "undefined" : i(e)) && e
                    )),
                (e.isTrigger = o ? 2 : 3),
                (e.namespace = v.join(".")),
                (e.rnamespace = e.namespace
                  ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (e.result = void 0),
                e.target || (e.target = n),
                (t = null == t ? [e] : _e.makeArray(t, [e])),
                (p = _e.event.special[g] || {}),
                o || !p.trigger || !1 !== p.trigger.apply(n, t)))
            ) {
              if (!o && !p.noBubble && !Ce(n)) {
                for (
                  c = p.delegateType || g, Ht.test(c + g) || (a = a.parentNode);
                  a;
                  a = a.parentNode
                )
                  h.push(a), (l = a);
                l === (n.ownerDocument || $e) &&
                  h.push(l.defaultView || l.parentWindow || s);
              }
              for (r = 0; (a = h[r++]) && !e.isPropagationStopped(); )
                (f = a),
                  (e.type = r > 1 ? c : p.bindType || g),
                  (u =
                    (Xe.get(a, "events") || Object.create(null))[e.type] &&
                    Xe.get(a, "handle")),
                  u && u.apply(a, t),
                  (u = d && a[d]) &&
                    u.apply &&
                    We(a) &&
                    ((e.result = u.apply(a, t)),
                    !1 === e.result && e.preventDefault());
              return (
                (e.type = g),
                o ||
                  e.isDefaultPrevented() ||
                  (p._default && !1 !== p._default.apply(h.pop(), t)) ||
                  !We(n) ||
                  (d &&
                    ke(n[g]) &&
                    !Ce(n) &&
                    ((l = n[d]),
                    l && (n[d] = null),
                    (_e.event.triggered = g),
                    e.isPropagationStopped() && f.addEventListener(g, Mt),
                    n[g](),
                    e.isPropagationStopped() && f.removeEventListener(g, Mt),
                    (_e.event.triggered = void 0),
                    l && (n[d] = l))),
                e.result
              );
            }
          },
          simulate: function (e, t, n) {
            var o = _e.extend(new _e.Event(), n, { type: e, isSimulated: !0 });
            _e.event.trigger(o, null, t);
          },
        }),
          _e.fn.extend({
            trigger: function (e, t) {
              return this.each(function () {
                _e.event.trigger(e, t, this);
              });
            },
            triggerHandler: function (e, t) {
              var n = this[0];
              if (n) return _e.event.trigger(e, t, n, !0);
            },
          }),
          Se.focusin ||
            _e.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              var n = function (e) {
                _e.event.simulate(t, e.target, _e.event.fix(e));
              };
              _e.event.special[t] = {
                setup: function () {
                  var o = this.ownerDocument || this.document || this,
                    i = Xe.access(o, t);
                  i || o.addEventListener(e, n, !0),
                    Xe.access(o, t, (i || 0) + 1);
                },
                teardown: function () {
                  var o = this.ownerDocument || this.document || this,
                    i = Xe.access(o, t) - 1;
                  i
                    ? Xe.access(o, t, i)
                    : (o.removeEventListener(e, n, !0), Xe.remove(o, t));
                },
              };
            });
        var Ot = s.location,
          It = { guid: Date.now() },
          Nt = /\?/;
        _e.parseXML = function (e) {
          var t;
          if (!e || "string" != typeof e) return null;
          try {
            t = new s.DOMParser().parseFromString(e, "text/xml");
          } catch (e) {
            t = void 0;
          }
          return (
            (t && !t.getElementsByTagName("parsererror").length) ||
              _e.error("Invalid XML: " + e),
            t
          );
        };
        var zt = /\[\]$/,
          qt = /\r?\n/g,
          Ft = /^(?:submit|button|image|reset|file)$/i,
          Rt = /^(?:input|select|textarea|keygen)/i;
        (_e.param = function (e, t) {
          var n,
            o = [],
            i = function (e, t) {
              var n = ke(t) ? t() : t;
              o[o.length] =
                encodeURIComponent(e) +
                "=" +
                encodeURIComponent(null == n ? "" : n);
            };
          if (null == e) return "";
          if (Array.isArray(e) || (e.jquery && !_e.isPlainObject(e)))
            _e.each(e, function () {
              i(this.name, this.value);
            });
          else for (n in e) re(n, e[n], t, i);
          return o.join("&");
        }),
          _e.fn.extend({
            serialize: function () {
              return _e.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var e = _e.prop(this, "elements");
                return e ? _e.makeArray(e) : this;
              })
                .filter(function () {
                  var e = this.type;
                  return (
                    this.name &&
                    !_e(this).is(":disabled") &&
                    Rt.test(this.nodeName) &&
                    !Ft.test(e) &&
                    (this.checked || !ot.test(e))
                  );
                })
                .map(function (e, t) {
                  var n = _e(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                    ? _e.map(n, function (e) {
                        return { name: t.name, value: e.replace(qt, "\r\n") };
                      })
                    : { name: t.name, value: n.replace(qt, "\r\n") };
                })
                .get();
            },
          });
        var Bt = /%20/g,
          Wt = /#.*$/,
          Xt = /([?&])_=[^&]*/,
          Yt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
          Vt = /^(?:GET|HEAD)$/,
          Qt = /^\/\//,
          Zt = {},
          Gt = {},
          Kt = "*/".concat("*"),
          Jt = $e.createElement("a");
        (Jt.href = Ot.href),
          _e.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: Ot.href,
              type: "GET",
              isLocal: Ut.test(Ot.protocol),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": Kt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": _e.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
              return t ? ce(ce(e, _e.ajaxSettings), t) : ce(_e.ajaxSettings, e);
            },
            ajaxPrefilter: ae(Zt),
            ajaxTransport: ae(Gt),
            ajax: function (e, t) {
              function n(e, t, n, i) {
                var l,
                  d,
                  f,
                  h,
                  x,
                  T = t;
                u ||
                  ((u = !0),
                  c && s.clearTimeout(c),
                  (o = void 0),
                  (a = i || ""),
                  (k.readyState = e > 0 ? 4 : 0),
                  (l = (e >= 200 && e < 300) || 304 === e),
                  n && (h = de(g, k, n)),
                  !l &&
                    _e.inArray("script", g.dataTypes) > -1 &&
                    (g.converters["text script"] = function () {}),
                  (h = ue(g, h, k, l)),
                  l
                    ? (g.ifModified &&
                        ((x = k.getResponseHeader("Last-Modified")),
                        x && (_e.lastModified[r] = x),
                        (x = k.getResponseHeader("etag")) && (_e.etag[r] = x)),
                      204 === e || "HEAD" === g.type
                        ? (T = "nocontent")
                        : 304 === e
                        ? (T = "notmodified")
                        : ((T = h.state),
                          (d = h.data),
                          (f = h.error),
                          (l = !f)))
                    : ((f = T), (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                  (k.status = e),
                  (k.statusText = (t || T) + ""),
                  l ? y.resolveWith(v, [d, T, k]) : y.rejectWith(v, [k, T, f]),
                  k.statusCode(w),
                  (w = void 0),
                  p &&
                    m.trigger(l ? "ajaxSuccess" : "ajaxError", [
                      k,
                      g,
                      l ? d : f,
                    ]),
                  b.fireWith(v, [k, T]),
                  p &&
                    (m.trigger("ajaxComplete", [k, g]),
                    --_e.active || _e.event.trigger("ajaxStop")));
              }
              "object" === (void 0 === e ? "undefined" : i(e)) &&
                ((t = e), (e = void 0)),
                (t = t || {});
              var o,
                r,
                a,
                l,
                c,
                d,
                u,
                p,
                f,
                h,
                g = _e.ajaxSetup({}, t),
                v = g.context || g,
                m = g.context && (v.nodeType || v.jquery) ? _e(v) : _e.event,
                y = _e.Deferred(),
                b = _e.Callbacks("once memory"),
                w = g.statusCode || {},
                x = {},
                T = {},
                S = "canceled",
                k = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                    var t;
                    if (u) {
                      if (!l)
                        for (l = {}; (t = Yt.exec(a)); )
                          l[t[1].toLowerCase() + " "] = (
                            l[t[1].toLowerCase() + " "] || []
                          ).concat(t[2]);
                      t = l[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return u ? a : null;
                  },
                  setRequestHeader: function (e, t) {
                    return (
                      null == u &&
                        ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                        (x[e] = t)),
                      this
                    );
                  },
                  overrideMimeType: function (e) {
                    return null == u && (g.mimeType = e), this;
                  },
                  statusCode: function (e) {
                    var t;
                    if (e)
                      if (u) k.always(e[k.status]);
                      else for (t in e) w[t] = [w[t], e[t]];
                    return this;
                  },
                  abort: function (e) {
                    var t = e || S;
                    return o && o.abort(t), n(0, t), this;
                  },
                };
              if (
                (y.promise(k),
                (g.url = ((e || g.url || Ot.href) + "").replace(
                  Qt,
                  Ot.protocol + "//"
                )),
                (g.type = t.method || t.type || g.method || g.type),
                (g.dataTypes = (g.dataType || "*").toLowerCase().match(Ne) || [
                  "",
                ]),
                null == g.crossDomain)
              ) {
                d = $e.createElement("a");
                try {
                  (d.href = g.url),
                    (d.href = d.href),
                    (g.crossDomain =
                      Jt.protocol + "//" + Jt.host !=
                      d.protocol + "//" + d.host);
                } catch (e) {
                  g.crossDomain = !0;
                }
              }
              if (
                (g.data &&
                  g.processData &&
                  "string" != typeof g.data &&
                  (g.data = _e.param(g.data, g.traditional)),
                le(Zt, g, t, k),
                u)
              )
                return k;
              (p = _e.event && g.global),
                p && 0 == _e.active++ && _e.event.trigger("ajaxStart"),
                (g.type = g.type.toUpperCase()),
                (g.hasContent = !Vt.test(g.type)),
                (r = g.url.replace(Wt, "")),
                g.hasContent
                  ? g.data &&
                    g.processData &&
                    0 ===
                      (g.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (g.data = g.data.replace(Bt, "+"))
                  : ((h = g.url.slice(r.length)),
                    g.data &&
                      (g.processData || "string" == typeof g.data) &&
                      ((r += (Nt.test(r) ? "&" : "?") + g.data), delete g.data),
                    !1 === g.cache &&
                      ((r = r.replace(Xt, "$1")),
                      (h = (Nt.test(r) ? "&" : "?") + "_=" + It.guid++ + h)),
                    (g.url = r + h)),
                g.ifModified &&
                  (_e.lastModified[r] &&
                    k.setRequestHeader("If-Modified-Since", _e.lastModified[r]),
                  _e.etag[r] &&
                    k.setRequestHeader("If-None-Match", _e.etag[r])),
                ((g.data && g.hasContent && !1 !== g.contentType) ||
                  t.contentType) &&
                  k.setRequestHeader("Content-Type", g.contentType),
                k.setRequestHeader(
                  "Accept",
                  g.dataTypes[0] && g.accepts[g.dataTypes[0]]
                    ? g.accepts[g.dataTypes[0]] +
                        ("*" !== g.dataTypes[0] ? ", " + Kt + "; q=0.01" : "")
                    : g.accepts["*"]
                );
              for (f in g.headers) k.setRequestHeader(f, g.headers[f]);
              if (g.beforeSend && (!1 === g.beforeSend.call(v, k, g) || u))
                return k.abort();
              if (
                ((S = "abort"),
                b.add(g.complete),
                k.done(g.success),
                k.fail(g.error),
                (o = le(Gt, g, t, k)))
              ) {
                if (((k.readyState = 1), p && m.trigger("ajaxSend", [k, g]), u))
                  return k;
                g.async &&
                  g.timeout > 0 &&
                  (c = s.setTimeout(function () {
                    k.abort("timeout");
                  }, g.timeout));
                try {
                  (u = !1), o.send(x, n);
                } catch (e) {
                  if (u) throw e;
                  n(-1, e);
                }
              } else n(-1, "No Transport");
              return k;
            },
            getJSON: function (e, t, n) {
              return _e.get(e, t, n, "json");
            },
            getScript: function (e, t) {
              return _e.get(e, void 0, t, "script");
            },
          }),
          _e.each(["get", "post"], function (e, t) {
            _e[t] = function (e, n, o, i) {
              return (
                ke(n) && ((i = i || o), (o = n), (n = void 0)),
                _e.ajax(
                  _e.extend(
                    { url: e, type: t, dataType: i, data: n, success: o },
                    _e.isPlainObject(e) && e
                  )
                )
              );
            };
          }),
          _e.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers)
              "content-type" === t.toLowerCase() &&
                (e.contentType = e.headers[t] || "");
          }),
          (_e._evalUrl = function (e, t, n) {
            return _e.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: { "text script": function () {} },
              dataFilter: function (e) {
                _e.globalEval(e, t, n);
              },
            });
          }),
          _e.fn.extend({
            wrapAll: function (e) {
              var t;
              return (
                this[0] &&
                  (ke(e) && (e = e.call(this[0])),
                  (t = _e(e, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function () {
                      for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                      return e;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function (e) {
              return ke(e)
                ? this.each(function (t) {
                    _e(this).wrapInner(e.call(this, t));
                  })
                : this.each(function () {
                    var t = _e(this),
                      n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e);
                  });
            },
            wrap: function (e) {
              var t = ke(e);
              return this.each(function (n) {
                _e(this).wrapAll(t ? e.call(this, n) : e);
              });
            },
            unwrap: function (e) {
              return (
                this.parent(e)
                  .not("body")
                  .each(function () {
                    _e(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (_e.expr.pseudos.hidden = function (e) {
            return !_e.expr.pseudos.visible(e);
          }),
          (_e.expr.pseudos.visible = function (e) {
            return !!(
              e.offsetWidth ||
              e.offsetHeight ||
              e.getClientRects().length
            );
          }),
          (_e.ajaxSettings.xhr = function () {
            try {
              return new s.XMLHttpRequest();
            } catch (e) {}
          });
        var en = { 0: 200, 1223: 204 },
          tn = _e.ajaxSettings.xhr();
        (Se.cors = !!tn && "withCredentials" in tn),
          (Se.ajax = tn = !!tn),
          _e.ajaxTransport(function (e) {
            var t, n;
            if (Se.cors || (tn && !e.crossDomain))
              return {
                send: function (o, i) {
                  var r,
                    a = e.xhr();
                  if (
                    (a.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                  )
                    for (r in e.xhrFields) a[r] = e.xhrFields[r];
                  e.mimeType &&
                    a.overrideMimeType &&
                    a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      o["X-Requested-With"] ||
                      (o["X-Requested-With"] = "XMLHttpRequest");
                  for (r in o) a.setRequestHeader(r, o[r]);
                  (t = function (e) {
                    return function () {
                      t &&
                        ((t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                        "abort" === e
                          ? a.abort()
                          : "error" === e
                          ? "number" != typeof a.status
                            ? i(0, "error")
                            : i(a.status, a.statusText)
                          : i(
                              en[a.status] || a.status,
                              a.statusText,
                              "text" !== (a.responseType || "text") ||
                                "string" != typeof a.responseText
                                ? { binary: a.response }
                                : { text: a.responseText },
                              a.getAllResponseHeaders()
                            ));
                    };
                  }),
                    (a.onload = t()),
                    (n = a.onerror = a.ontimeout = t("error")),
                    void 0 !== a.onabort
                      ? (a.onabort = n)
                      : (a.onreadystatechange = function () {
                          4 === a.readyState &&
                            s.setTimeout(function () {
                              t && n();
                            });
                        }),
                    (t = t("abort"));
                  try {
                    a.send((e.hasContent && e.data) || null);
                  } catch (e) {
                    if (t) throw e;
                  }
                },
                abort: function () {
                  t && t();
                },
              };
          }),
          _e.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
          }),
          _e.ajaxSetup({
            accepts: {
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function (e) {
                return _e.globalEval(e), e;
              },
            },
          }),
          _e.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
              e.crossDomain && (e.type = "GET");
          }),
          _e.ajaxTransport("script", function (e) {
            if (e.crossDomain || e.scriptAttrs) {
              var t, n;
              return {
                send: function (o, i) {
                  (t = _e("<script>")
                    .attr(e.scriptAttrs || {})
                    .prop({ charset: e.scriptCharset, src: e.url })
                    .on(
                      "load error",
                      (n = function (e) {
                        t.remove(),
                          (n = null),
                          e && i("error" === e.type ? 404 : 200, e.type);
                      })
                    )),
                    $e.head.appendChild(t[0]);
                },
                abort: function () {
                  n && n();
                },
              };
            }
          });
        var nn = [],
          on = /(=)\?(?=&|$)|\?\?/;
        _e.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = nn.pop() || _e.expando + "_" + It.guid++;
            return (this[e] = !0), e;
          },
        }),
          _e.ajaxPrefilter("json jsonp", function (e, t, n) {
            var o,
              i,
              r,
              a =
                !1 !== e.jsonp &&
                (on.test(e.url)
                  ? "url"
                  : "string" == typeof e.data &&
                    0 ===
                      (e.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    on.test(e.data) &&
                    "data");
            if (a || "jsonp" === e.dataTypes[0])
              return (
                (o = e.jsonpCallback = ke(e.jsonpCallback)
                  ? e.jsonpCallback()
                  : e.jsonpCallback),
                a
                  ? (e[a] = e[a].replace(on, "$1" + o))
                  : !1 !== e.jsonp &&
                    (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                (e.converters["script json"] = function () {
                  return r || _e.error(o + " was not called"), r[0];
                }),
                (e.dataTypes[0] = "json"),
                (i = s[o]),
                (s[o] = function () {
                  r = arguments;
                }),
                n.always(function () {
                  void 0 === i ? _e(s).removeProp(o) : (s[o] = i),
                    e[o] && ((e.jsonpCallback = t.jsonpCallback), nn.push(o)),
                    r && ke(i) && i(r[0]),
                    (r = i = void 0);
                }),
                "script"
              );
          }),
          (Se.createHTMLDocument = (function () {
            var e = $e.implementation.createHTMLDocument("").body;
            return (
              (e.innerHTML = "<form></form><form></form>"),
              2 === e.childNodes.length
            );
          })()),
          (_e.parseHTML = function (e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && ((n = t), (t = !1));
            var o, i, s;
            return (
              t ||
                (Se.createHTMLDocument
                  ? ((t = $e.implementation.createHTMLDocument("")),
                    (o = t.createElement("base")),
                    (o.href = $e.location.href),
                    t.head.appendChild(o))
                  : (t = $e)),
              (i = je.exec(e)),
              (s = !n && []),
              i
                ? [t.createElement(i[1])]
                : ((i = _([e], t, s)),
                  s && s.length && _e(s).remove(),
                  _e.merge([], i.childNodes))
            );
          }),
          (_e.fn.load = function (e, t, n) {
            var o,
              s,
              r,
              a = this,
              l = e.indexOf(" ");
            return (
              l > -1 && ((o = oe(e.slice(l))), (e = e.slice(0, l))),
              ke(t)
                ? ((n = t), (t = void 0))
                : t &&
                  "object" === (void 0 === t ? "undefined" : i(t)) &&
                  (s = "POST"),
              a.length > 0 &&
                _e
                  .ajax({ url: e, type: s || "GET", dataType: "html", data: t })
                  .done(function (e) {
                    (r = arguments),
                      a.html(
                        o ? _e("<div>").append(_e.parseHTML(e)).find(o) : e
                      );
                  })
                  .always(
                    n &&
                      function (e, t) {
                        a.each(function () {
                          n.apply(this, r || [e.responseText, t, e]);
                        });
                      }
                  ),
              this
            );
          }),
          (_e.expr.pseudos.animated = function (e) {
            return _e.grep(_e.timers, function (t) {
              return e === t.elem;
            }).length;
          }),
          (_e.offset = {
            setOffset: function (e, t, n) {
              var o,
                i,
                s,
                r,
                a,
                l,
                c,
                d = _e.css(e, "position"),
                u = _e(e),
                p = {};
              "static" === d && (e.style.position = "relative"),
                (a = u.offset()),
                (s = _e.css(e, "top")),
                (l = _e.css(e, "left")),
                (c =
                  ("absolute" === d || "fixed" === d) &&
                  (s + l).indexOf("auto") > -1),
                c
                  ? ((o = u.position()), (r = o.top), (i = o.left))
                  : ((r = parseFloat(s) || 0), (i = parseFloat(l) || 0)),
                ke(t) && (t = t.call(e, n, _e.extend({}, a))),
                null != t.top && (p.top = t.top - a.top + r),
                null != t.left && (p.left = t.left - a.left + i),
                "using" in t
                  ? t.using.call(e, p)
                  : ("number" == typeof p.top && (p.top += "px"),
                    "number" == typeof p.left && (p.left += "px"),
                    u.css(p));
            },
          }),
          _e.fn.extend({
            offset: function (e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function (t) {
                      _e.offset.setOffset(this, e, t);
                    });
              var t,
                n,
                o = this[0];
              if (o)
                return o.getClientRects().length
                  ? ((t = o.getBoundingClientRect()),
                    (n = o.ownerDocument.defaultView),
                    {
                      top: t.top + n.pageYOffset,
                      left: t.left + n.pageXOffset,
                    })
                  : { top: 0, left: 0 };
            },
            position: function () {
              if (this[0]) {
                var e,
                  t,
                  n,
                  o = this[0],
                  i = { top: 0, left: 0 };
                if ("fixed" === _e.css(o, "position"))
                  t = o.getBoundingClientRect();
                else {
                  for (
                    t = this.offset(),
                      n = o.ownerDocument,
                      e = o.offsetParent || n.documentElement;
                    e &&
                    (e === n.body || e === n.documentElement) &&
                    "static" === _e.css(e, "position");

                  )
                    e = e.parentNode;
                  e &&
                    e !== o &&
                    1 === e.nodeType &&
                    ((i = _e(e).offset()),
                    (i.top += _e.css(e, "borderTopWidth", !0)),
                    (i.left += _e.css(e, "borderLeftWidth", !0)));
                }
                return {
                  top: t.top - i.top - _e.css(o, "marginTop", !0),
                  left: t.left - i.left - _e.css(o, "marginLeft", !0),
                };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (
                  var e = this.offsetParent;
                  e && "static" === _e.css(e, "position");

                )
                  e = e.offsetParent;
                return e || Ke;
              });
            },
          }),
          _e.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (e, t) {
              var n = "pageYOffset" === t;
              _e.fn[e] = function (o) {
                return Fe(
                  this,
                  function (e, o, i) {
                    var s;
                    if (
                      (Ce(e)
                        ? (s = e)
                        : 9 === e.nodeType && (s = e.defaultView),
                      void 0 === i)
                    )
                      return s ? s[t] : e[o];
                    s
                      ? s.scrollTo(n ? s.pageXOffset : i, n ? i : s.pageYOffset)
                      : (e[o] = i);
                  },
                  e,
                  o,
                  arguments.length
                );
              };
            }
          ),
          _e.each(["top", "left"], function (e, t) {
            _e.cssHooks[t] = B(Se.pixelPosition, function (e, n) {
              if (n)
                return (
                  (n = R(e, t)), ht.test(n) ? _e(e).position()[t] + "px" : n
                );
            });
          }),
          _e.each({ Height: "height", Width: "width" }, function (e, t) {
            _e.each(
              { padding: "inner" + e, content: t, "": "outer" + e },
              function (n, o) {
                _e.fn[o] = function (i, s) {
                  var r = arguments.length && (n || "boolean" != typeof i),
                    a = n || (!0 === i || !0 === s ? "margin" : "border");
                  return Fe(
                    this,
                    function (t, n, i) {
                      var s;
                      return Ce(t)
                        ? 0 === o.indexOf("outer")
                          ? t["inner" + e]
                          : t.document.documentElement["client" + e]
                        : 9 === t.nodeType
                        ? ((s = t.documentElement),
                          Math.max(
                            t.body["scroll" + e],
                            s["scroll" + e],
                            t.body["offset" + e],
                            s["offset" + e],
                            s["client" + e]
                          ))
                        : void 0 === i
                        ? _e.css(t, n, a)
                        : _e.style(t, n, i, a);
                    },
                    t,
                    r ? i : void 0,
                    r
                  );
                };
              }
            );
          }),
          _e.each(
            [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend",
            ],
            function (e, t) {
              _e.fn[t] = function (e) {
                return this.on(t, e);
              };
            }
          ),
          _e.fn.extend({
            bind: function (e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
              return this.off(e, null, t);
            },
            delegate: function (e, t, n, o) {
              return this.on(t, e, n, o);
            },
            undelegate: function (e, t, n) {
              return 1 === arguments.length
                ? this.off(e, "**")
                : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            },
          }),
          _e.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
              " "
            ),
            function (e, t) {
              _e.fn[t] = function (e, n) {
                return arguments.length > 0
                  ? this.on(t, null, e, n)
                  : this.trigger(t);
              };
            }
          );
        var sn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        (_e.proxy = function (e, t) {
          var n, o, i;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), ke(e)))
            return (
              (o = he.call(arguments, 2)),
              (i = function () {
                return e.apply(t || this, o.concat(he.call(arguments)));
              }),
              (i.guid = e.guid = e.guid || _e.guid++),
              i
            );
        }),
          (_e.holdReady = function (e) {
            e ? _e.readyWait++ : _e.ready(!0);
          }),
          (_e.isArray = Array.isArray),
          (_e.parseJSON = JSON.parse),
          (_e.nodeName = d),
          (_e.isFunction = ke),
          (_e.isWindow = Ce),
          (_e.camelCase = b),
          (_e.type = l),
          (_e.now = Date.now),
          (_e.isNumeric = function (e) {
            var t = _e.type(e);
            return (
              ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
          }),
          (_e.trim = function (e) {
            return null == e ? "" : (e + "").replace(sn, "");
          }),
          (n = []),
          void 0 !==
            (o = function () {
              return _e;
            }.apply(t, n)) && (e.exports = o);
        var rn = s.jQuery,
          an = s.$;
        return (
          (_e.noConflict = function (e) {
            return (
              s.$ === _e && (s.$ = an),
              e && s.jQuery === _e && (s.jQuery = rn),
              _e
            );
          }),
          void 0 === r && (s.jQuery = s.$ = _e),
          _e
        );
      });
    }.call(t, n(3)(e)));
  },
  function (e, t, n) {
    "use strict";
    n(2);
    var o = n(0),
      i = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(o);
    n(4),
      n(5),
      n(6),
      n(7),
      n(9),
      n(10),
      n(12),
      n(14),
      n(15),
      n(16),
      n(17),
      n(19),
      n(20),
      n(21),
      n(22),
      n(23),
      n(24),
      n(25),
      n(26),
      n(28),
      n(29),
      n(30),
      (window.jQuery = window.$ = i.default);
  },
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
  },
  function (e, t, n) {
    "use strict";
    var o = n(0),
      i = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(o),
      s = (0, i.default)(".header__map"),
      r = (0, i.default)(".header__map-iframe"),
      a = (0, i.default)(".map_click--mob"),
      l = (0, i.default)(".iframe__mob");
    !(function () {
      s.hover(
        function () {
          r.css("display", "block");
        },
        function () {
          r.css("display", "none");
        }
      );
    })(),
      (function () {
        a.hover(
          function () {
            l.css("display", "block");
          },
          function () {
            l.css("display", "none");
          }
        );
      })();
  },
  function (e, t, n) {
    "use strict";
    function o(e, t, n) {
      var o = new Date();
      o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
      var i = "expires=" + o.toUTCString();
      document.cookie = e + "=" + t + "; " + i;
    }
    function i(e) {
      for (
        var t = e + "=", n = document.cookie.split(";"), o = 0;
        o < n.length;
        o++
      ) {
        for (var i = n[o]; " " == i.charAt(0); ) i = i.substring(1);
        if (0 == i.indexOf(t)) return i.substring(t.length, i.length);
      }
      return "";
    }
    var s = n(0),
      r = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(s),
      a = (0, r.default)(".card__popup"),
      l = (0, r.default)(".main__popup-complete"),
      c = (0, r.default)(".main__descr-btn--popup"),
      d = (0, r.default)(".main__popup-submit"),
      u = (0, r.default)(".main__popup_background"),
      p = (0, r.default)(".main__popup-close"),
      f = (0, r.default)(".main__popup-complete_close"),
      h = (0, r.default)(".popup__leave--wraper"),
      g = (0, r.default)(".popup__leave-close"),
      v = (0, r.default)(".main__popup-name input"),
      m = (0, r.default)(".main__popup-tel input");
    !(function () {
      function e() {
        a.toggleClass("show"),
          (0, r.default)("html").toggleClass("overflowToggle"),
          u.toggleClass("show");
      }
      function t() {
        l.toggleClass("show"), a.toggleClass("show");
      }
      function n() {
        a.removeClass("show"),
          l.removeClass("show"),
          u.removeClass("show"),
          h.removeClass("show"),
          (0, r.default)("html").toggleClass("overflowToggle");
      }
      c.on("click", function () {
        e();
      }),
        d.on("click", function () {
          v.val().length > 0 && m.val().length > 0 && t();
        }),
        u.on("click", function () {
          n();
        }),
        p.on("click", function () {
          n();
        }),
        f.on("click", function () {
          n();
        }),
        g.on("click", function () {
          n();
        });
    })(),
      (function () {
        "" != i("visited") ||
          ((0, r.default)(document).one("mouseleave", function (e) {
            e.clientY < 0 &&
              (h.addClass("show"),
              u.addClass("show"),
              (0, r.default)("html").addClass("overflowToggle"));
          }),
          o("visited", "ok", 30));
      })();
  },
  function (e, t, n) {
    "use strict";
    var o = n(0),
      i = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(o);
    (window.jQuery = i.default), (window.$ = window.jQuery = n(0));
    n(8);
    (0, i.default)('[data-fancybox="gallery"]').fancybox({
      arrows: !0,
      thumbs: !1,
    });
  },
  function (e, t, n) {
    "use strict";
    !(function (e, t, n, o) {
      function i(e, t) {
        var o,
          i,
          s,
          r = [],
          a = 0;
        (e && e.isDefaultPrevented()) ||
          (e.preventDefault(),
          (t = t || {}),
          e && e.data && (t = h(e.data.options, t)),
          (o = t.$target || n(e.currentTarget).trigger("blur")),
          ((s = n.fancybox.getInstance()) && s.$trigger && s.$trigger.is(o)) ||
            (t.selector
              ? (r = n(t.selector))
              : ((i = o.attr("data-fancybox") || ""),
                i
                  ? ((r = e.data ? e.data.items : []),
                    (r = r.length
                      ? r.filter('[data-fancybox="' + i + '"]')
                      : n('[data-fancybox="' + i + '"]')))
                  : (r = [o])),
            (a = n(r).index(o)),
            a < 0 && (a = 0),
            (s = n.fancybox.open(r, t, a)),
            (s.$trigger = o)));
      }
      if (((e.console = e.console || { info: function (e) {} }), n)) {
        if (n.fn.fancybox)
          return void console.info("fancyBox already initialized");
        var s = {
            closeExisting: !1,
            loop: !1,
            gutter: 50,
            keyboard: !0,
            preventCaptionOverlap: !0,
            arrows: !0,
            infobar: !0,
            smallBtn: "auto",
            toolbar: "auto",
            buttons: ["zoom", "slideShow", "thumbs", "close"],
            idleTime: 3,
            protect: !1,
            modal: !1,
            image: { preload: !1 },
            ajax: { settings: { data: { fancybox: !0 } } },
            iframe: {
              tpl:
                '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
              preload: !0,
              css: {},
              attr: { scrolling: "auto" },
            },
            video: {
              tpl:
                '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
              format: "",
              autoStart: !0,
            },
            defaultType: "image",
            animationEffect: "zoom",
            animationDuration: 366,
            zoomOpacity: "auto",
            transitionEffect: "fade",
            transitionDuration: 366,
            slideClass: "",
            baseClass: "",
            baseTpl:
              '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
            spinnerTpl: '<div class="fancybox-loading"></div>',
            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
            btnTpl: {
              download:
                '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
              zoom:
                '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
              close:
                '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
              arrowLeft:
                '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
              arrowRight:
                '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
              smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
            },
            parentEl: "body",
            hideScrollbar: !0,
            autoFocus: !0,
            backFocus: !0,
            trapFocus: !0,
            fullScreen: { autoStart: !1 },
            touch: { vertical: !0, momentum: !0 },
            hash: null,
            media: {},
            slideShow: { autoStart: !1, speed: 3e3 },
            thumbs: {
              autoStart: !1,
              hideOnClose: !0,
              parentEl: ".fancybox-container",
              axis: "y",
            },
            wheel: "auto",
            onInit: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop,
            onActivate: n.noop,
            onDeactivate: n.noop,
            clickContent: function (e, t) {
              return "image" === e.type && "zoom";
            },
            clickSlide: "close",
            clickOutside: "close",
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1,
            mobile: {
              preventCaptionOverlap: !1,
              idleTime: !1,
              clickContent: function (e, t) {
                return "image" === e.type && "toggleControls";
              },
              clickSlide: function (e, t) {
                return "image" === e.type ? "toggleControls" : "close";
              },
              dblclickContent: function (e, t) {
                return "image" === e.type && "zoom";
              },
              dblclickSlide: function (e, t) {
                return "image" === e.type && "zoom";
              },
            },
            lang: "en",
            i18n: {
              en: {
                CLOSE: "Close",
                NEXT: "Next",
                PREV: "Previous",
                ERROR:
                  "The requested content cannot be loaded. <br/> Please try again later.",
                PLAY_START: "Start slideshow",
                PLAY_STOP: "Pause slideshow",
                FULL_SCREEN: "Full screen",
                THUMBS: "Thumbnails",
                DOWNLOAD: "Download",
                SHARE: "Share",
                ZOOM: "Zoom",
              },
              de: {
                CLOSE: "Schlie&szlig;en",
                NEXT: "Weiter",
                PREV: "Zur&uuml;ck",
                ERROR:
                  "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                PLAY_START: "Diaschau starten",
                PLAY_STOP: "Diaschau beenden",
                FULL_SCREEN: "Vollbild",
                THUMBS: "Vorschaubilder",
                DOWNLOAD: "Herunterladen",
                SHARE: "Teilen",
                ZOOM: "Vergr&ouml;&szlig;ern",
              },
            },
          },
          r = n(e),
          a = n(t),
          l = 0,
          c = function (e) {
            return e && e.hasOwnProperty && e instanceof n;
          },
          d = (function () {
            return (
              e.requestAnimationFrame ||
              e.webkitRequestAnimationFrame ||
              e.mozRequestAnimationFrame ||
              e.oRequestAnimationFrame ||
              function (t) {
                return e.setTimeout(t, 1e3 / 60);
              }
            );
          })(),
          u = (function () {
            return (
              e.cancelAnimationFrame ||
              e.webkitCancelAnimationFrame ||
              e.mozCancelAnimationFrame ||
              e.oCancelAnimationFrame ||
              function (t) {
                e.clearTimeout(t);
              }
            );
          })(),
          p = (function () {
            var e,
              n = t.createElement("fakeelement"),
              o = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
              };
            for (e in o) if (void 0 !== n.style[e]) return o[e];
            return "transitionend";
          })(),
          f = function (e) {
            return e && e.length && e[0].offsetHeight;
          },
          h = function (e, t) {
            var o = n.extend(!0, {}, e, t);
            return (
              n.each(t, function (e, t) {
                n.isArray(t) && (o[e] = t);
              }),
              o
            );
          },
          g = function (e) {
            var o, i;
            return (
              !(!e || e.ownerDocument !== t) &&
              (n(".fancybox-container").css("pointer-events", "none"),
              (o = {
                x: e.getBoundingClientRect().left + e.offsetWidth / 2,
                y: e.getBoundingClientRect().top + e.offsetHeight / 2,
              }),
              (i = t.elementFromPoint(o.x, o.y) === e),
              n(".fancybox-container").css("pointer-events", ""),
              i)
            );
          },
          v = function (e, t, o) {
            var i = this;
            (i.opts = h({ index: o }, n.fancybox.defaults)),
              n.isPlainObject(t) && (i.opts = h(i.opts, t)),
              n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)),
              (i.id = i.opts.id || ++l),
              (i.currIndex = parseInt(i.opts.index, 10) || 0),
              (i.prevIndex = null),
              (i.prevPos = null),
              (i.currPos = 0),
              (i.firstRun = !0),
              (i.group = []),
              (i.slides = {}),
              i.addContent(e),
              i.group.length && i.init();
          };
        n.extend(v.prototype, {
          init: function () {
            var o,
              i,
              s = this,
              r = s.group[s.currIndex],
              a = r.opts;
            a.closeExisting && n.fancybox.close(!0),
              n("body").addClass("fancybox-active"),
              !n.fancybox.getInstance() &&
                !1 !== a.hideScrollbar &&
                !n.fancybox.isMobile &&
                t.body.scrollHeight > e.innerHeight &&
                (n("head").append(
                  '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                    (e.innerWidth - t.documentElement.clientWidth) +
                    "px;}</style>"
                ),
                n("body").addClass("compensate-for-scrollbar")),
              (i = ""),
              n.each(a.buttons, function (e, t) {
                i += a.btnTpl[t] || "";
              }),
              (o = n(
                s.translate(
                  s,
                  a.baseTpl
                    .replace("{{buttons}}", i)
                    .replace(
                      "{{arrows}}",
                      a.btnTpl.arrowLeft + a.btnTpl.arrowRight
                    )
                )
              )
                .attr("id", "fancybox-container-" + s.id)
                .addClass(a.baseClass)
                .data("FancyBox", s)
                .appendTo(a.parentEl)),
              (s.$refs = { container: o }),
              [
                "bg",
                "inner",
                "infobar",
                "toolbar",
                "stage",
                "caption",
                "navigation",
              ].forEach(function (e) {
                s.$refs[e] = o.find(".fancybox-" + e);
              }),
              s.trigger("onInit"),
              s.activate(),
              s.jumpTo(s.currIndex);
          },
          translate: function (e, t) {
            var n = e.opts.i18n[e.opts.lang] || e.opts.i18n.en;
            return t.replace(/\{\{(\w+)\}\}/g, function (e, t) {
              return void 0 === n[t] ? e : n[t];
            });
          },
          addContent: function (e) {
            var t,
              o = this,
              i = n.makeArray(e);
            n.each(i, function (e, t) {
              var i,
                s,
                r,
                a,
                l,
                c = {},
                d = {};
              n.isPlainObject(t)
                ? ((c = t), (d = t.opts || t))
                : "object" === n.type(t) && n(t).length
                ? ((i = n(t)),
                  (d = i.data() || {}),
                  (d = n.extend(!0, {}, d, d.options)),
                  (d.$orig = i),
                  (c.src = o.opts.src || d.src || i.attr("href")),
                  c.type || c.src || ((c.type = "inline"), (c.src = t)))
                : (c = { type: "html", src: t + "" }),
                (c.opts = n.extend(!0, {}, o.opts, d)),
                n.isArray(d.buttons) && (c.opts.buttons = d.buttons),
                n.fancybox.isMobile &&
                  c.opts.mobile &&
                  (c.opts = h(c.opts, c.opts.mobile)),
                (s = c.type || c.opts.type),
                (a = c.src || ""),
                !s &&
                  a &&
                  ((r = a.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                    ? ((s = "video"),
                      c.opts.video.format ||
                        (c.opts.video.format =
                          "video/" + ("ogv" === r[1] ? "ogg" : r[1])))
                    : a.match(
                        /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                      )
                    ? (s = "image")
                    : a.match(/\.(pdf)((\?|#).*)?$/i)
                    ? ((s = "iframe"),
                      (c = n.extend(!0, c, {
                        contentType: "pdf",
                        opts: { iframe: { preload: !1 } },
                      })))
                    : "#" === a.charAt(0) && (s = "inline")),
                s ? (c.type = s) : o.trigger("objectNeedsType", c),
                c.contentType ||
                  (c.contentType =
                    n.inArray(c.type, ["html", "inline", "ajax"]) > -1
                      ? "html"
                      : c.type),
                (c.index = o.group.length),
                "auto" == c.opts.smallBtn &&
                  (c.opts.smallBtn =
                    n.inArray(c.type, ["html", "inline", "ajax"]) > -1),
                "auto" === c.opts.toolbar &&
                  (c.opts.toolbar = !c.opts.smallBtn),
                (c.$thumb = c.opts.$thumb || null),
                c.opts.$trigger &&
                  c.index === o.opts.index &&
                  ((c.$thumb = c.opts.$trigger.find("img:first")),
                  c.$thumb.length && (c.opts.$orig = c.opts.$trigger)),
                (c.$thumb && c.$thumb.length) ||
                  !c.opts.$orig ||
                  (c.$thumb = c.opts.$orig.find("img:first")),
                c.$thumb && !c.$thumb.length && (c.$thumb = null),
                (c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null)),
                "function" === n.type(c.opts.caption) &&
                  (c.opts.caption = c.opts.caption.apply(t, [o, c])),
                "function" === n.type(o.opts.caption) &&
                  (c.opts.caption = o.opts.caption.apply(t, [o, c])),
                c.opts.caption instanceof n ||
                  (c.opts.caption =
                    void 0 === c.opts.caption ? "" : c.opts.caption + ""),
                "ajax" === c.type &&
                  ((l = a.split(/\s+/, 2)),
                  l.length > 1 &&
                    ((c.src = l.shift()), (c.opts.filter = l.shift()))),
                c.opts.modal &&
                  (c.opts = n.extend(!0, c.opts, {
                    trapFocus: !0,
                    infobar: 0,
                    toolbar: 0,
                    smallBtn: 0,
                    keyboard: 0,
                    slideShow: 0,
                    fullScreen: 0,
                    thumbs: 0,
                    touch: 0,
                    clickContent: !1,
                    clickSlide: !1,
                    clickOutside: !1,
                    dblclickContent: !1,
                    dblclickSlide: !1,
                    dblclickOutside: !1,
                  })),
                o.group.push(c);
            }),
              Object.keys(o.slides).length &&
                (o.updateControls(),
                (t = o.Thumbs) && t.isActive && (t.create(), t.focus()));
          },
          addEvents: function () {
            var t = this;
            t.removeEvents(),
              t.$refs.container
                .on("click.fb-close", "[data-fancybox-close]", function (e) {
                  e.stopPropagation(), e.preventDefault(), t.close(e);
                })
                .on(
                  "touchstart.fb-prev click.fb-prev",
                  "[data-fancybox-prev]",
                  function (e) {
                    e.stopPropagation(), e.preventDefault(), t.previous();
                  }
                )
                .on(
                  "touchstart.fb-next click.fb-next",
                  "[data-fancybox-next]",
                  function (e) {
                    e.stopPropagation(), e.preventDefault(), t.next();
                  }
                )
                .on("click.fb", "[data-fancybox-zoom]", function (e) {
                  t[t.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
                }),
              r.on("orientationchange.fb resize.fb", function (e) {
                e && e.originalEvent && "resize" === e.originalEvent.type
                  ? (t.requestId && u(t.requestId),
                    (t.requestId = d(function () {
                      t.update(e);
                    })))
                  : (t.current &&
                      "iframe" === t.current.type &&
                      t.$refs.stage.hide(),
                    setTimeout(
                      function () {
                        t.$refs.stage.show(), t.update(e);
                      },
                      n.fancybox.isMobile ? 600 : 250
                    ));
              }),
              a.on("keydown.fb", function (e) {
                var o = n.fancybox ? n.fancybox.getInstance() : null,
                  i = o.current,
                  s = e.keyCode || e.which;
                if (9 == s) return void (i.opts.trapFocus && t.focus(e));
                if (
                  !(
                    !i.opts.keyboard ||
                    e.ctrlKey ||
                    e.altKey ||
                    e.shiftKey ||
                    n(e.target).is("input,textarea,video,audio,select")
                  )
                )
                  return 8 === s || 27 === s
                    ? (e.preventDefault(), void t.close(e))
                    : 37 === s || 38 === s
                    ? (e.preventDefault(), void t.previous())
                    : 39 === s || 40 === s
                    ? (e.preventDefault(), void t.next())
                    : void t.trigger("afterKeydown", e, s);
              }),
              t.group[t.currIndex].opts.idleTime &&
                ((t.idleSecondsCounter = 0),
                a.on(
                  "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
                  function (e) {
                    (t.idleSecondsCounter = 0),
                      t.isIdle && t.showControls(),
                      (t.isIdle = !1);
                  }
                ),
                (t.idleInterval = e.setInterval(function () {
                  ++t.idleSecondsCounter >=
                    t.group[t.currIndex].opts.idleTime &&
                    !t.isDragging &&
                    ((t.isIdle = !0),
                    (t.idleSecondsCounter = 0),
                    t.hideControls());
                }, 1e3)));
          },
          removeEvents: function () {
            var t = this;
            r.off("orientationchange.fb resize.fb"),
              a.off("keydown.fb .fb-idle"),
              this.$refs.container.off(".fb-close .fb-prev .fb-next"),
              t.idleInterval &&
                (e.clearInterval(t.idleInterval), (t.idleInterval = null));
          },
          previous: function (e) {
            return this.jumpTo(this.currPos - 1, e);
          },
          next: function (e) {
            return this.jumpTo(this.currPos + 1, e);
          },
          jumpTo: function (e, t) {
            var o,
              i,
              s,
              r,
              a,
              l,
              c,
              d,
              u,
              p = this,
              h = p.group.length;
            if (
              !(p.isDragging || p.isClosing || (p.isAnimating && p.firstRun))
            ) {
              if (
                ((e = parseInt(e, 10)),
                !(s = p.current ? p.current.opts.loop : p.opts.loop) &&
                  (e < 0 || e >= h))
              )
                return !1;
              if (
                ((o = p.firstRun = !Object.keys(p.slides).length),
                (a = p.current),
                (p.prevIndex = p.currIndex),
                (p.prevPos = p.currPos),
                (r = p.createSlide(e)),
                h > 1 &&
                  ((s || r.index < h - 1) && p.createSlide(e + 1),
                  (s || r.index > 0) && p.createSlide(e - 1)),
                (p.current = r),
                (p.currIndex = r.index),
                (p.currPos = r.pos),
                p.trigger("beforeShow", o),
                p.updateControls(),
                (r.forcedDuration = void 0),
                n.isNumeric(t)
                  ? (r.forcedDuration = t)
                  : (t =
                      r.opts[o ? "animationDuration" : "transitionDuration"]),
                (t = parseInt(t, 10)),
                (i = p.isMoved(r)),
                r.$slide.addClass("fancybox-slide--current"),
                o)
              )
                return (
                  r.opts.animationEffect &&
                    t &&
                    p.$refs.container.css("transition-duration", t + "ms"),
                  p.$refs.container
                    .addClass("fancybox-is-open")
                    .trigger("focus"),
                  p.loadSlide(r),
                  void p.preload("image")
                );
              (l = n.fancybox.getTranslate(a.$slide)),
                (c = n.fancybox.getTranslate(p.$refs.stage)),
                n.each(p.slides, function (e, t) {
                  n.fancybox.stop(t.$slide, !0);
                }),
                a.pos !== r.pos && (a.isComplete = !1),
                a.$slide.removeClass(
                  "fancybox-slide--complete fancybox-slide--current"
                ),
                i
                  ? ((u = l.left - (a.pos * l.width + a.pos * a.opts.gutter)),
                    n.each(p.slides, function (e, o) {
                      o.$slide
                        .removeClass("fancybox-animated")
                        .removeClass(function (e, t) {
                          return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                            " "
                          );
                        });
                      var i = o.pos * l.width + o.pos * o.opts.gutter;
                      n.fancybox.setTranslate(o.$slide, {
                        top: 0,
                        left: i - c.left + u,
                      }),
                        o.pos !== r.pos &&
                          o.$slide.addClass(
                            "fancybox-slide--" +
                              (o.pos > r.pos ? "next" : "previous")
                          ),
                        f(o.$slide),
                        n.fancybox.animate(
                          o.$slide,
                          {
                            top: 0,
                            left:
                              (o.pos - r.pos) * l.width +
                              (o.pos - r.pos) * o.opts.gutter,
                          },
                          t,
                          function () {
                            o.$slide
                              .css({ transform: "", opacity: "" })
                              .removeClass(
                                "fancybox-slide--next fancybox-slide--previous"
                              ),
                              o.pos === p.currPos && p.complete();
                          }
                        );
                    }))
                  : t &&
                    r.opts.transitionEffect &&
                    ((d =
                      "fancybox-animated fancybox-fx-" +
                      r.opts.transitionEffect),
                    a.$slide.addClass(
                      "fancybox-slide--" + (a.pos > r.pos ? "next" : "previous")
                    ),
                    n.fancybox.animate(
                      a.$slide,
                      d,
                      t,
                      function () {
                        a.$slide
                          .removeClass(d)
                          .removeClass(
                            "fancybox-slide--next fancybox-slide--previous"
                          );
                      },
                      !1
                    )),
                r.isLoaded ? p.revealContent(r) : p.loadSlide(r),
                p.preload("image");
            }
          },
          createSlide: function (e) {
            var t,
              o,
              i = this;
            return (
              (o = e % i.group.length),
              (o = o < 0 ? i.group.length + o : o),
              !i.slides[e] &&
                i.group[o] &&
                ((t = n('<div class="fancybox-slide"></div>').appendTo(
                  i.$refs.stage
                )),
                (i.slides[e] = n.extend(!0, {}, i.group[o], {
                  pos: e,
                  $slide: t,
                  isLoaded: !1,
                })),
                i.updateSlide(i.slides[e])),
              i.slides[e]
            );
          },
          scaleToActual: function (e, t, o) {
            var i,
              s,
              r,
              a,
              l,
              c = this,
              d = c.current,
              u = d.$content,
              p = n.fancybox.getTranslate(d.$slide).width,
              f = n.fancybox.getTranslate(d.$slide).height,
              h = d.width,
              g = d.height;
            c.isAnimating ||
              c.isMoved() ||
              !u ||
              "image" != d.type ||
              !d.isLoaded ||
              d.hasError ||
              ((c.isAnimating = !0),
              n.fancybox.stop(u),
              (e = void 0 === e ? 0.5 * p : e),
              (t = void 0 === t ? 0.5 * f : t),
              (i = n.fancybox.getTranslate(u)),
              (i.top -= n.fancybox.getTranslate(d.$slide).top),
              (i.left -= n.fancybox.getTranslate(d.$slide).left),
              (a = h / i.width),
              (l = g / i.height),
              (s = 0.5 * p - 0.5 * h),
              (r = 0.5 * f - 0.5 * g),
              h > p &&
                ((s = i.left * a - (e * a - e)),
                s > 0 && (s = 0),
                s < p - h && (s = p - h)),
              g > f &&
                ((r = i.top * l - (t * l - t)),
                r > 0 && (r = 0),
                r < f - g && (r = f - g)),
              c.updateCursor(h, g),
              n.fancybox.animate(
                u,
                { top: r, left: s, scaleX: a, scaleY: l },
                o || 366,
                function () {
                  c.isAnimating = !1;
                }
              ),
              c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop());
          },
          scaleToFit: function (e) {
            var t,
              o = this,
              i = o.current,
              s = i.$content;
            o.isAnimating ||
              o.isMoved() ||
              !s ||
              "image" != i.type ||
              !i.isLoaded ||
              i.hasError ||
              ((o.isAnimating = !0),
              n.fancybox.stop(s),
              (t = o.getFitPos(i)),
              o.updateCursor(t.width, t.height),
              n.fancybox.animate(
                s,
                {
                  top: t.top,
                  left: t.left,
                  scaleX: t.width / s.width(),
                  scaleY: t.height / s.height(),
                },
                e || 366,
                function () {
                  o.isAnimating = !1;
                }
              ));
          },
          getFitPos: function (e) {
            var t,
              o,
              i,
              s,
              r = this,
              a = e.$content,
              l = e.$slide,
              c = e.width || e.opts.width,
              d = e.height || e.opts.height,
              u = {};
            return (
              !!(e.isLoaded && a && a.length) &&
              ((t = n.fancybox.getTranslate(r.$refs.stage).width),
              (o = n.fancybox.getTranslate(r.$refs.stage).height),
              (t -=
                parseFloat(l.css("paddingLeft")) +
                parseFloat(l.css("paddingRight")) +
                parseFloat(a.css("marginLeft")) +
                parseFloat(a.css("marginRight"))),
              (o -=
                parseFloat(l.css("paddingTop")) +
                parseFloat(l.css("paddingBottom")) +
                parseFloat(a.css("marginTop")) +
                parseFloat(a.css("marginBottom"))),
              (c && d) || ((c = t), (d = o)),
              (i = Math.min(1, t / c, o / d)),
              (c *= i),
              (d *= i),
              c > t - 0.5 && (c = t),
              d > o - 0.5 && (d = o),
              "image" === e.type
                ? ((u.top =
                    Math.floor(0.5 * (o - d)) +
                    parseFloat(l.css("paddingTop"))),
                  (u.left =
                    Math.floor(0.5 * (t - c)) +
                    parseFloat(l.css("paddingLeft"))))
                : "video" === e.contentType &&
                  ((s =
                    e.opts.width && e.opts.height
                      ? c / d
                      : e.opts.ratio || 16 / 9),
                  d > c / s ? (d = c / s) : c > d * s && (c = d * s)),
              (u.width = c),
              (u.height = d),
              u)
            );
          },
          update: function (e) {
            var t = this;
            n.each(t.slides, function (n, o) {
              t.updateSlide(o, e);
            });
          },
          updateSlide: function (e, t) {
            var o = this,
              i = e && e.$content,
              s = e.width || e.opts.width,
              r = e.height || e.opts.height,
              a = e.$slide;
            o.adjustCaption(e),
              i &&
                (s || r || "video" === e.contentType) &&
                !e.hasError &&
                (n.fancybox.stop(i),
                n.fancybox.setTranslate(i, o.getFitPos(e)),
                e.pos === o.currPos &&
                  ((o.isAnimating = !1), o.updateCursor())),
              o.adjustLayout(e),
              a.length &&
                (a.trigger("refresh"),
                e.pos === o.currPos &&
                  o.$refs.toolbar
                    .add(
                      o.$refs.navigation.find(".fancybox-button--arrow_right")
                    )
                    .toggleClass(
                      "compensate-for-scrollbar",
                      a.get(0).scrollHeight > a.get(0).clientHeight
                    )),
              o.trigger("onUpdate", e, t);
          },
          centerSlide: function (e) {
            var t = this,
              o = t.current,
              i = o.$slide;
            !t.isClosing &&
              o &&
              (i.siblings().css({ transform: "", opacity: "" }),
              i
                .parent()
                .children()
                .removeClass("fancybox-slide--previous fancybox-slide--next"),
              n.fancybox.animate(
                i,
                { top: 0, left: 0, opacity: 1 },
                void 0 === e ? 0 : e,
                function () {
                  i.css({ transform: "", opacity: "" }),
                    o.isComplete || t.complete();
                },
                !1
              ));
          },
          isMoved: function (e) {
            var t,
              o,
              i = e || this.current;
            return (
              !!i &&
              ((o = n.fancybox.getTranslate(this.$refs.stage)),
              (t = n.fancybox.getTranslate(i.$slide)),
              !i.$slide.hasClass("fancybox-animated") &&
                (Math.abs(t.top - o.top) > 0.5 ||
                  Math.abs(t.left - o.left) > 0.5))
            );
          },
          updateCursor: function (e, t) {
            var o,
              i,
              s = this,
              r = s.current,
              a = s.$refs.container;
            r &&
              !s.isClosing &&
              s.Guestures &&
              (a.removeClass(
                "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"
              ),
              (o = s.canPan(e, t)),
              (i = !!o || s.isZoomable()),
              a.toggleClass("fancybox-is-zoomable", i),
              n("[data-fancybox-zoom]").prop("disabled", !i),
              o
                ? a.addClass("fancybox-can-pan")
                : i &&
                  ("zoom" === r.opts.clickContent ||
                    (n.isFunction(r.opts.clickContent) &&
                      "zoom" == r.opts.clickContent(r)))
                ? a.addClass("fancybox-can-zoomIn")
                : r.opts.touch &&
                  (r.opts.touch.vertical || s.group.length > 1) &&
                  "video" !== r.contentType &&
                  a.addClass("fancybox-can-swipe"));
          },
          isZoomable: function () {
            var e,
              t = this,
              n = t.current;
            if (n && !t.isClosing && "image" === n.type && !n.hasError) {
              if (!n.isLoaded) return !0;
              if (
                (e = t.getFitPos(n)) &&
                (n.width > e.width || n.height > e.height)
              )
                return !0;
            }
            return !1;
          },
          isScaledDown: function (e, t) {
            var o = this,
              i = !1,
              s = o.current,
              r = s.$content;
            return (
              void 0 !== e && void 0 !== t
                ? (i = e < s.width && t < s.height)
                : r &&
                  ((i = n.fancybox.getTranslate(r)),
                  (i = i.width < s.width && i.height < s.height)),
              i
            );
          },
          canPan: function (e, t) {
            var o = this,
              i = o.current,
              s = null,
              r = !1;
            return (
              "image" === i.type &&
                (i.isComplete || (e && t)) &&
                !i.hasError &&
                ((r = o.getFitPos(i)),
                void 0 !== e && void 0 !== t
                  ? (s = { width: e, height: t })
                  : i.isComplete && (s = n.fancybox.getTranslate(i.$content)),
                s &&
                  r &&
                  (r =
                    Math.abs(s.width - r.width) > 1.5 ||
                    Math.abs(s.height - r.height) > 1.5)),
              r
            );
          },
          loadSlide: function (e) {
            var t,
              o,
              i,
              s = this;
            if (!e.isLoading && !e.isLoaded) {
              if (((e.isLoading = !0), !1 === s.trigger("beforeLoad", e)))
                return (e.isLoading = !1), !1;
              switch (
                ((t = e.type),
                (o = e.$slide),
                o.off("refresh").trigger("onReset").addClass(e.opts.slideClass),
                t)
              ) {
                case "image":
                  s.setImage(e);
                  break;
                case "iframe":
                  s.setIframe(e);
                  break;
                case "html":
                  s.setContent(e, e.src || e.content);
                  break;
                case "video":
                  s.setContent(
                    e,
                    e.opts.video.tpl
                      .replace(/\{\{src\}\}/gi, e.src)
                      .replace(
                        "{{format}}",
                        e.opts.videoFormat || e.opts.video.format || ""
                      )
                      .replace("{{poster}}", e.thumb || "")
                  );
                  break;
                case "inline":
                  n(e.src).length ? s.setContent(e, n(e.src)) : s.setError(e);
                  break;
                case "ajax":
                  s.showLoading(e),
                    (i = n.ajax(
                      n.extend({}, e.opts.ajax.settings, {
                        url: e.src,
                        success: function (t, n) {
                          "success" === n && s.setContent(e, t);
                        },
                        error: function (t, n) {
                          t && "abort" !== n && s.setError(e);
                        },
                      })
                    )),
                    o.one("onReset", function () {
                      i.abort();
                    });
                  break;
                default:
                  s.setError(e);
              }
              return !0;
            }
          },
          setImage: function (e) {
            var o,
              i = this;
            setTimeout(function () {
              var t = e.$image;
              i.isClosing ||
                !e.isLoading ||
                (t && t.length && t[0].complete) ||
                e.hasError ||
                i.showLoading(e);
            }, 50),
              i.checkSrcset(e),
              (e.$content = n('<div class="fancybox-content"></div>')
                .addClass("fancybox-is-hidden")
                .appendTo(e.$slide.addClass("fancybox-slide--image"))),
              !1 !== e.opts.preload &&
                e.opts.width &&
                e.opts.height &&
                e.thumb &&
                ((e.width = e.opts.width),
                (e.height = e.opts.height),
                (o = t.createElement("img")),
                (o.onerror = function () {
                  n(this).remove(), (e.$ghost = null);
                }),
                (o.onload = function () {
                  i.afterLoad(e);
                }),
                (e.$ghost = n(o)
                  .addClass("fancybox-image")
                  .appendTo(e.$content)
                  .attr("src", e.thumb))),
              i.setBigImage(e);
          },
          checkSrcset: function (t) {
            var n,
              o,
              i,
              s,
              r = t.opts.srcset || t.opts.image.srcset;
            if (r) {
              (i = e.devicePixelRatio || 1),
                (s = e.innerWidth * i),
                (o = r.split(",").map(function (e) {
                  var t = {};
                  return (
                    e
                      .trim()
                      .split(/\s+/)
                      .forEach(function (e, n) {
                        var o = parseInt(e.substring(0, e.length - 1), 10);
                        if (0 === n) return (t.url = e);
                        o && ((t.value = o), (t.postfix = e[e.length - 1]));
                      }),
                    t
                  );
                })),
                o.sort(function (e, t) {
                  return e.value - t.value;
                });
              for (var a = 0; a < o.length; a++) {
                var l = o[a];
                if (
                  ("w" === l.postfix && l.value >= s) ||
                  ("x" === l.postfix && l.value >= i)
                ) {
                  n = l;
                  break;
                }
              }
              !n && o.length && (n = o[o.length - 1]),
                n &&
                  ((t.src = n.url),
                  t.width &&
                    t.height &&
                    "w" == n.postfix &&
                    ((t.height = (t.width / t.height) * n.value),
                    (t.width = n.value)),
                  (t.opts.srcset = r));
            }
          },
          setBigImage: function (e) {
            var o = this,
              i = t.createElement("img"),
              s = n(i);
            (e.$image = s
              .one("error", function () {
                o.setError(e);
              })
              .one("load", function () {
                var t;
                e.$ghost ||
                  (o.resolveImageSlideSize(
                    e,
                    this.naturalWidth,
                    this.naturalHeight
                  ),
                  o.afterLoad(e)),
                  o.isClosing ||
                    (e.opts.srcset &&
                      ((t = e.opts.sizes),
                      (t && "auto" !== t) ||
                        (t =
                          (e.width / e.height > 1 && r.width() / r.height() > 1
                            ? "100"
                            : Math.round((e.width / e.height) * 100)) + "vw"),
                      s.attr("sizes", t).attr("srcset", e.opts.srcset)),
                    e.$ghost &&
                      setTimeout(function () {
                        e.$ghost && !o.isClosing && e.$ghost.hide();
                      }, Math.min(300, Math.max(1e3, e.height / 1600))),
                    o.hideLoading(e));
              })
              .addClass("fancybox-image")
              .attr("src", e.src)
              .appendTo(e.$content)),
              (i.complete || "complete" == i.readyState) &&
              s.naturalWidth &&
              s.naturalHeight
                ? s.trigger("load")
                : i.error && s.trigger("error");
          },
          resolveImageSlideSize: function (e, t, n) {
            var o = parseInt(e.opts.width, 10),
              i = parseInt(e.opts.height, 10);
            (e.width = t),
              (e.height = n),
              o > 0 && ((e.width = o), (e.height = Math.floor((o * n) / t))),
              i > 0 && ((e.width = Math.floor((i * t) / n)), (e.height = i));
          },
          setIframe: function (e) {
            var t,
              o = this,
              i = e.opts.iframe,
              s = e.$slide;
            (e.$content = n(
              '<div class="fancybox-content' +
                (i.preload ? " fancybox-is-hidden" : "") +
                '"></div>'
            )
              .css(i.css)
              .appendTo(s)),
              s.addClass("fancybox-slide--" + e.contentType),
              (e.$iframe = t = n(
                i.tpl.replace(/\{rnd\}/g, new Date().getTime())
              )
                .attr(i.attr)
                .appendTo(e.$content)),
              i.preload
                ? (o.showLoading(e),
                  t.on("load.fb error.fb", function (t) {
                    (this.isReady = 1),
                      e.$slide.trigger("refresh"),
                      o.afterLoad(e);
                  }),
                  s.on("refresh.fb", function () {
                    var n,
                      o,
                      r = e.$content,
                      a = i.css.width,
                      l = i.css.height;
                    if (1 === t[0].isReady) {
                      try {
                        (n = t.contents()), (o = n.find("body"));
                      } catch (e) {}
                      o &&
                        o.length &&
                        o.children().length &&
                        (s.css("overflow", "visible"),
                        r.css({
                          width: "100%",
                          "max-width": "100%",
                          height: "9999px",
                        }),
                        void 0 === a &&
                          (a = Math.ceil(
                            Math.max(o[0].clientWidth, o.outerWidth(!0))
                          )),
                        r.css("width", a || "").css("max-width", ""),
                        void 0 === l &&
                          (l = Math.ceil(
                            Math.max(o[0].clientHeight, o.outerHeight(!0))
                          )),
                        r.css("height", l || ""),
                        s.css("overflow", "auto")),
                        r.removeClass("fancybox-is-hidden");
                    }
                  }))
                : o.afterLoad(e),
              t.attr("src", e.src),
              s.one("onReset", function () {
                try {
                  n(this)
                    .find("iframe")
                    .hide()
                    .unbind()
                    .attr("src", "//about:blank");
                } catch (e) {}
                n(this).off("refresh.fb").empty(),
                  (e.isLoaded = !1),
                  (e.isRevealed = !1);
              });
          },
          setContent: function (e, t) {
            var o = this;
            o.isClosing ||
              (o.hideLoading(e),
              e.$content && n.fancybox.stop(e.$content),
              e.$slide.empty(),
              c(t) && t.parent().length
                ? ((t.hasClass("fancybox-content") ||
                    t.parent().hasClass("fancybox-content")) &&
                    t.parents(".fancybox-slide").trigger("onReset"),
                  (e.$placeholder = n("<div>").hide().insertAfter(t)),
                  t.css("display", "inline-block"))
                : e.hasError ||
                  ("string" === n.type(t) &&
                    (t = n("<div>").append(n.trim(t)).contents()),
                  e.opts.filter &&
                    (t = n("<div>").html(t).find(e.opts.filter))),
              e.$slide.one("onReset", function () {
                n(this).find("video,audio").trigger("pause"),
                  e.$placeholder &&
                    (e.$placeholder
                      .after(t.removeClass("fancybox-content").hide())
                      .remove(),
                    (e.$placeholder = null)),
                  e.$smallBtn && (e.$smallBtn.remove(), (e.$smallBtn = null)),
                  e.hasError ||
                    (n(this).empty(), (e.isLoaded = !1), (e.isRevealed = !1));
              }),
              n(t).appendTo(e.$slide),
              n(t).is("video,audio") &&
                (n(t).addClass("fancybox-video"),
                n(t).wrap("<div></div>"),
                (e.contentType = "video"),
                (e.opts.width = e.opts.width || n(t).attr("width")),
                (e.opts.height = e.opts.height || n(t).attr("height"))),
              (e.$content = e.$slide
                .children()
                .filter("div,form,main,video,audio,article,.fancybox-content")
                .first()),
              e.$content.siblings().hide(),
              e.$content.length ||
                (e.$content = e.$slide
                  .wrapInner("<div></div>")
                  .children()
                  .first()),
              e.$content.addClass("fancybox-content"),
              e.$slide.addClass("fancybox-slide--" + e.contentType),
              o.afterLoad(e));
          },
          setError: function (e) {
            (e.hasError = !0),
              e.$slide
                .trigger("onReset")
                .removeClass("fancybox-slide--" + e.contentType)
                .addClass("fancybox-slide--error"),
              (e.contentType = "html"),
              this.setContent(e, this.translate(e, e.opts.errorTpl)),
              e.pos === this.currPos && (this.isAnimating = !1);
          },
          showLoading: function (e) {
            var t = this;
            (e = e || t.current) &&
              !e.$spinner &&
              (e.$spinner = n(t.translate(t, t.opts.spinnerTpl))
                .appendTo(e.$slide)
                .hide()
                .fadeIn("fast"));
          },
          hideLoading: function (e) {
            var t = this;
            (e = e || t.current) &&
              e.$spinner &&
              (e.$spinner.stop().remove(), delete e.$spinner);
          },
          afterLoad: function (e) {
            var t = this;
            t.isClosing ||
              ((e.isLoading = !1),
              (e.isLoaded = !0),
              t.trigger("afterLoad", e),
              t.hideLoading(e),
              !e.opts.smallBtn ||
                (e.$smallBtn && e.$smallBtn.length) ||
                (e.$smallBtn = n(
                  t.translate(e, e.opts.btnTpl.smallBtn)
                ).appendTo(e.$content)),
              e.opts.protect &&
                e.$content &&
                !e.hasError &&
                (e.$content.on("contextmenu.fb", function (e) {
                  return 2 == e.button && e.preventDefault(), !0;
                }),
                "image" === e.type &&
                  n('<div class="fancybox-spaceball"></div>').appendTo(
                    e.$content
                  )),
              t.adjustCaption(e),
              t.adjustLayout(e),
              e.pos === t.currPos && t.updateCursor(),
              t.revealContent(e));
          },
          adjustCaption: function (e) {
            var t,
              n = this,
              o = e || n.current,
              i = o.opts.caption,
              s = o.opts.preventCaptionOverlap,
              r = n.$refs.caption,
              a = !1;
            r.toggleClass("fancybox-caption--separate", s),
              s &&
                i &&
                i.length &&
                (o.pos !== n.currPos
                  ? ((t = r.clone().appendTo(r.parent())),
                    t.children().eq(0).empty().html(i),
                    (a = t.outerHeight(!0)),
                    t.empty().remove())
                  : n.$caption && (a = n.$caption.outerHeight(!0)),
                o.$slide.css("padding-bottom", a || ""));
          },
          adjustLayout: function (e) {
            var t,
              n,
              o,
              i,
              s = this,
              r = e || s.current;
            r.isLoaded &&
              !0 !== r.opts.disableLayoutFix &&
              (r.$content.css("margin-bottom", ""),
              r.$content.outerHeight() > r.$slide.height() + 0.5 &&
                ((o = r.$slide[0].style["padding-bottom"]),
                (i = r.$slide.css("padding-bottom")),
                parseFloat(i) > 0 &&
                  ((t = r.$slide[0].scrollHeight),
                  r.$slide.css("padding-bottom", 0),
                  Math.abs(t - r.$slide[0].scrollHeight) < 1 && (n = i),
                  r.$slide.css("padding-bottom", o))),
              r.$content.css("margin-bottom", n));
          },
          revealContent: function (e) {
            var t,
              o,
              i,
              s,
              r = this,
              a = e.$slide,
              l = !1,
              c = !1,
              d = r.isMoved(e),
              u = e.isRevealed;
            return (
              (e.isRevealed = !0),
              (t = e.opts[r.firstRun ? "animationEffect" : "transitionEffect"]),
              (i =
                e.opts[
                  r.firstRun ? "animationDuration" : "transitionDuration"
                ]),
              (i = parseInt(
                void 0 === e.forcedDuration ? i : e.forcedDuration,
                10
              )),
              (!d && e.pos === r.currPos && i) || (t = !1),
              "zoom" === t &&
                (e.pos === r.currPos &&
                i &&
                "image" === e.type &&
                !e.hasError &&
                (c = r.getThumbPos(e))
                  ? (l = r.getFitPos(e))
                  : (t = "fade")),
              "zoom" === t
                ? ((r.isAnimating = !0),
                  (l.scaleX = l.width / c.width),
                  (l.scaleY = l.height / c.height),
                  (s = e.opts.zoomOpacity),
                  "auto" == s &&
                    (s =
                      Math.abs(e.width / e.height - c.width / c.height) > 0.1),
                  s && ((c.opacity = 0.1), (l.opacity = 1)),
                  n.fancybox.setTranslate(
                    e.$content.removeClass("fancybox-is-hidden"),
                    c
                  ),
                  f(e.$content),
                  void n.fancybox.animate(e.$content, l, i, function () {
                    (r.isAnimating = !1), r.complete();
                  }))
                : (r.updateSlide(e),
                  t
                    ? (n.fancybox.stop(a),
                      (o =
                        "fancybox-slide--" +
                        (e.pos >= r.prevPos ? "next" : "previous") +
                        " fancybox-animated fancybox-fx-" +
                        t),
                      a.addClass(o).removeClass("fancybox-slide--current"),
                      e.$content.removeClass("fancybox-is-hidden"),
                      f(a),
                      "image" !== e.type && e.$content.hide().show(0),
                      void n.fancybox.animate(
                        a,
                        "fancybox-slide--current",
                        i,
                        function () {
                          a.removeClass(o).css({ transform: "", opacity: "" }),
                            e.pos === r.currPos && r.complete();
                        },
                        !0
                      ))
                    : (e.$content.removeClass("fancybox-is-hidden"),
                      u ||
                        !d ||
                        "image" !== e.type ||
                        e.hasError ||
                        e.$content.hide().fadeIn("fast"),
                      void (e.pos === r.currPos && r.complete())))
            );
          },
          getThumbPos: function (e) {
            var t,
              o,
              i,
              s,
              r,
              a = !1,
              l = e.$thumb;
            return (
              !(!l || !g(l[0])) &&
              ((t = n.fancybox.getTranslate(l)),
              (o = parseFloat(l.css("border-top-width") || 0)),
              (i = parseFloat(l.css("border-right-width") || 0)),
              (s = parseFloat(l.css("border-bottom-width") || 0)),
              (r = parseFloat(l.css("border-left-width") || 0)),
              (a = {
                top: t.top + o,
                left: t.left + r,
                width: t.width - i - r,
                height: t.height - o - s,
                scaleX: 1,
                scaleY: 1,
              }),
              t.width > 0 && t.height > 0 && a)
            );
          },
          complete: function () {
            var e,
              t = this,
              o = t.current,
              i = {};
            !t.isMoved() &&
              o.isLoaded &&
              (o.isComplete ||
                ((o.isComplete = !0),
                o.$slide.siblings().trigger("onReset"),
                t.preload("inline"),
                f(o.$slide),
                o.$slide.addClass("fancybox-slide--complete"),
                n.each(t.slides, function (e, o) {
                  o.pos >= t.currPos - 1 && o.pos <= t.currPos + 1
                    ? (i[o.pos] = o)
                    : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
                }),
                (t.slides = i)),
              (t.isAnimating = !1),
              t.updateCursor(),
              t.trigger("afterShow"),
              o.opts.video.autoStart &&
                o.$slide
                  .find("video,audio")
                  .filter(":visible:first")
                  .trigger("play")
                  .one("ended", function () {
                    Document.exitFullscreen
                      ? Document.exitFullscreen()
                      : this.webkitExitFullscreen &&
                        this.webkitExitFullscreen(),
                      t.next();
                  }),
              o.opts.autoFocus &&
                "html" === o.contentType &&
                ((e = o.$content.find(
                  "input[autofocus]:enabled:visible:first"
                )),
                e.length ? e.trigger("focus") : t.focus(null, !0)),
              o.$slide.scrollTop(0).scrollLeft(0));
          },
          preload: function (e) {
            var t,
              n,
              o = this;
            o.group.length < 2 ||
              ((n = o.slides[o.currPos + 1]),
              (t = o.slides[o.currPos - 1]),
              t && t.type === e && o.loadSlide(t),
              n && n.type === e && o.loadSlide(n));
          },
          focus: function (e, o) {
            var i,
              s,
              r = this,
              a = [
                "a[href]",
                "area[href]",
                'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
                "select:not([disabled]):not([aria-hidden])",
                "textarea:not([disabled]):not([aria-hidden])",
                "button:not([disabled]):not([aria-hidden])",
                "iframe",
                "object",
                "embed",
                "video",
                "audio",
                "[contenteditable]",
                '[tabindex]:not([tabindex^="-"])',
              ].join(",");
            r.isClosing ||
              ((i =
                !e && r.current && r.current.isComplete
                  ? r.current.$slide.find(
                      "*:visible" + (o ? ":not(.fancybox-close-small)" : "")
                    )
                  : r.$refs.container.find("*:visible")),
              (i = i.filter(a).filter(function () {
                return (
                  "hidden" !== n(this).css("visibility") &&
                  !n(this).hasClass("disabled")
                );
              })),
              i.length
                ? ((s = i.index(t.activeElement)),
                  e && e.shiftKey
                    ? (s < 0 || 0 == s) &&
                      (e.preventDefault(), i.eq(i.length - 1).trigger("focus"))
                    : (s < 0 || s == i.length - 1) &&
                      (e && e.preventDefault(), i.eq(0).trigger("focus")))
                : r.$refs.container.trigger("focus"));
          },
          activate: function () {
            var e = this;
            n(".fancybox-container").each(function () {
              var t = n(this).data("FancyBox");
              t &&
                t.id !== e.id &&
                !t.isClosing &&
                (t.trigger("onDeactivate"),
                t.removeEvents(),
                (t.isVisible = !1));
            }),
              (e.isVisible = !0),
              (e.current || e.isIdle) && (e.update(), e.updateControls()),
              e.trigger("onActivate"),
              e.addEvents();
          },
          close: function (e, t) {
            var o,
              i,
              s,
              r,
              a,
              l,
              c,
              u = this,
              p = u.current,
              h = function () {
                u.cleanUp(e);
              };
            return (
              !u.isClosing &&
              ((u.isClosing = !0),
              !1 === u.trigger("beforeClose", e)
                ? ((u.isClosing = !1),
                  d(function () {
                    u.update();
                  }),
                  !1)
                : (u.removeEvents(),
                  (s = p.$content),
                  (o = p.opts.animationEffect),
                  (i = n.isNumeric(t) ? t : o ? p.opts.animationDuration : 0),
                  p.$slide.removeClass(
                    "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                  ),
                  !0 !== e ? n.fancybox.stop(p.$slide) : (o = !1),
                  p.$slide.siblings().trigger("onReset").remove(),
                  i &&
                    u.$refs.container
                      .removeClass("fancybox-is-open")
                      .addClass("fancybox-is-closing")
                      .css("transition-duration", i + "ms"),
                  u.hideLoading(p),
                  u.hideControls(!0),
                  u.updateCursor(),
                  "zoom" !== o ||
                    (s &&
                      i &&
                      "image" === p.type &&
                      !u.isMoved() &&
                      !p.hasError &&
                      (c = u.getThumbPos(p))) ||
                    (o = "fade"),
                  "zoom" === o
                    ? (n.fancybox.stop(s),
                      (r = n.fancybox.getTranslate(s)),
                      (l = {
                        top: r.top,
                        left: r.left,
                        scaleX: r.width / c.width,
                        scaleY: r.height / c.height,
                        width: c.width,
                        height: c.height,
                      }),
                      (a = p.opts.zoomOpacity),
                      "auto" == a &&
                        (a =
                          Math.abs(p.width / p.height - c.width / c.height) >
                          0.1),
                      a && (c.opacity = 0),
                      n.fancybox.setTranslate(s, l),
                      f(s),
                      n.fancybox.animate(s, c, i, h),
                      !0)
                    : (o && i
                        ? n.fancybox.animate(
                            p.$slide
                              .addClass("fancybox-slide--previous")
                              .removeClass("fancybox-slide--current"),
                            "fancybox-animated fancybox-fx-" + o,
                            i,
                            h
                          )
                        : !0 === e
                        ? setTimeout(h, i)
                        : h(),
                      !0)))
            );
          },
          cleanUp: function (t) {
            var o,
              i,
              s,
              r = this,
              a = r.current.opts.$orig;
            r.current.$slide.trigger("onReset"),
              r.$refs.container.empty().remove(),
              r.trigger("afterClose", t),
              r.current.opts.backFocus &&
                ((a && a.length && a.is(":visible")) || (a = r.$trigger),
                a &&
                  a.length &&
                  ((i = e.scrollX),
                  (s = e.scrollY),
                  a.trigger("focus"),
                  n("html, body").scrollTop(s).scrollLeft(i))),
              (r.current = null),
              (o = n.fancybox.getInstance()),
              o
                ? o.activate()
                : (n("body").removeClass(
                    "fancybox-active compensate-for-scrollbar"
                  ),
                  n("#fancybox-style-noscroll").remove());
          },
          trigger: function (e, t) {
            var o,
              i = Array.prototype.slice.call(arguments, 1),
              s = this,
              r = t && t.opts ? t : s.current;
            if (
              (r ? i.unshift(r) : (r = s),
              i.unshift(s),
              n.isFunction(r.opts[e]) && (o = r.opts[e].apply(r, i)),
              !1 === o)
            )
              return o;
            "afterClose" !== e && s.$refs
              ? s.$refs.container.trigger(e + ".fb", i)
              : a.trigger(e + ".fb", i);
          },
          updateControls: function () {
            var e = this,
              o = e.current,
              i = o.index,
              s = e.$refs.container,
              r = e.$refs.caption,
              a = o.opts.caption;
            o.$slide.trigger("refresh"),
              a && a.length
                ? ((e.$caption = r), r.children().eq(0).html(a))
                : (e.$caption = null),
              e.hasHiddenControls || e.isIdle || e.showControls(),
              s.find("[data-fancybox-count]").html(e.group.length),
              s.find("[data-fancybox-index]").html(i + 1),
              s
                .find("[data-fancybox-prev]")
                .prop("disabled", !o.opts.loop && i <= 0),
              s
                .find("[data-fancybox-next]")
                .prop("disabled", !o.opts.loop && i >= e.group.length - 1),
              "image" === o.type
                ? s
                    .find("[data-fancybox-zoom]")
                    .show()
                    .end()
                    .find("[data-fancybox-download]")
                    .attr("href", o.opts.image.src || o.src)
                    .show()
                : o.opts.toolbar &&
                  s
                    .find("[data-fancybox-download],[data-fancybox-zoom]")
                    .hide(),
              n(t.activeElement).is(":hidden,[disabled]") &&
                e.$refs.container.trigger("focus");
          },
          hideControls: function (e) {
            var t = this,
              n = ["infobar", "toolbar", "nav"];
            (!e && t.current.opts.preventCaptionOverlap) || n.push("caption"),
              this.$refs.container.removeClass(
                n
                  .map(function (e) {
                    return "fancybox-show-" + e;
                  })
                  .join(" ")
              ),
              (this.hasHiddenControls = !0);
          },
          showControls: function () {
            var e = this,
              t = e.current ? e.current.opts : e.opts,
              n = e.$refs.container;
            (e.hasHiddenControls = !1),
              (e.idleSecondsCounter = 0),
              n
                .toggleClass(
                  "fancybox-show-toolbar",
                  !(!t.toolbar || !t.buttons)
                )
                .toggleClass(
                  "fancybox-show-infobar",
                  !!(t.infobar && e.group.length > 1)
                )
                .toggleClass("fancybox-show-caption", !!e.$caption)
                .toggleClass(
                  "fancybox-show-nav",
                  !!(t.arrows && e.group.length > 1)
                )
                .toggleClass("fancybox-is-modal", !!t.modal);
          },
          toggleControls: function () {
            this.hasHiddenControls ? this.showControls() : this.hideControls();
          },
        }),
          (n.fancybox = {
            version: "3.5.7",
            defaults: s,
            getInstance: function (e) {
              var t = n(
                  '.fancybox-container:not(".fancybox-is-closing"):last'
                ).data("FancyBox"),
                o = Array.prototype.slice.call(arguments, 1);
              return (
                t instanceof v &&
                ("string" === n.type(e)
                  ? t[e].apply(t, o)
                  : "function" === n.type(e) && e.apply(t, o),
                t)
              );
            },
            open: function (e, t, n) {
              return new v(e, t, n);
            },
            close: function (e) {
              var t = this.getInstance();
              t && (t.close(), !0 === e && this.close(e));
            },
            destroy: function () {
              this.close(!0), a.add("body").off("click.fb-start", "**");
            },
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ),
            use3d: (function () {
              var n = t.createElement("div");
              return (
                e.getComputedStyle &&
                e.getComputedStyle(n) &&
                e.getComputedStyle(n).getPropertyValue("transform") &&
                !(t.documentMode && t.documentMode < 11)
              );
            })(),
            getTranslate: function (e) {
              var t;
              return (
                !(!e || !e.length) &&
                ((t = e[0].getBoundingClientRect()),
                {
                  top: t.top || 0,
                  left: t.left || 0,
                  width: t.width,
                  height: t.height,
                  opacity: parseFloat(e.css("opacity")),
                })
              );
            },
            setTranslate: function (e, t) {
              var n = "",
                o = {};
              if (e && t)
                return (
                  (void 0 === t.left && void 0 === t.top) ||
                    ((n =
                      (void 0 === t.left ? e.position().left : t.left) +
                      "px, " +
                      (void 0 === t.top ? e.position().top : t.top) +
                      "px"),
                    (n = this.use3d
                      ? "translate3d(" + n + ", 0px)"
                      : "translate(" + n + ")")),
                  void 0 !== t.scaleX && void 0 !== t.scaleY
                    ? (n += " scale(" + t.scaleX + ", " + t.scaleY + ")")
                    : void 0 !== t.scaleX && (n += " scaleX(" + t.scaleX + ")"),
                  n.length && (o.transform = n),
                  void 0 !== t.opacity && (o.opacity = t.opacity),
                  void 0 !== t.width && (o.width = t.width),
                  void 0 !== t.height && (o.height = t.height),
                  e.css(o)
                );
            },
            animate: function (e, t, o, i, s) {
              var r,
                a = this;
              n.isFunction(o) && ((i = o), (o = null)),
                a.stop(e),
                (r = a.getTranslate(e)),
                e.on(p, function (l) {
                  (!l ||
                    !l.originalEvent ||
                    (e.is(l.originalEvent.target) &&
                      "z-index" != l.originalEvent.propertyName)) &&
                    (a.stop(e),
                    n.isNumeric(o) && e.css("transition-duration", ""),
                    n.isPlainObject(t)
                      ? void 0 !== t.scaleX &&
                        void 0 !== t.scaleY &&
                        a.setTranslate(e, {
                          top: t.top,
                          left: t.left,
                          width: r.width * t.scaleX,
                          height: r.height * t.scaleY,
                          scaleX: 1,
                          scaleY: 1,
                        })
                      : !0 !== s && e.removeClass(t),
                    n.isFunction(i) && i(l));
                }),
                n.isNumeric(o) && e.css("transition-duration", o + "ms"),
                n.isPlainObject(t)
                  ? (void 0 !== t.scaleX &&
                      void 0 !== t.scaleY &&
                      (delete t.width,
                      delete t.height,
                      e.parent().hasClass("fancybox-slide--image") &&
                        e.parent().addClass("fancybox-is-scaling")),
                    n.fancybox.setTranslate(e, t))
                  : e.addClass(t),
                e.data(
                  "timer",
                  setTimeout(function () {
                    e.trigger(p);
                  }, o + 33)
                );
            },
            stop: function (e, t) {
              e &&
                e.length &&
                (clearTimeout(e.data("timer")),
                t && e.trigger(p),
                e.off(p).css("transition-duration", ""),
                e.parent().removeClass("fancybox-is-scaling"));
            },
          }),
          (n.fn.fancybox = function (e) {
            var t;
            return (
              (e = e || {}),
              (t = e.selector || !1),
              t
                ? n("body")
                    .off("click.fb-start", t)
                    .on("click.fb-start", t, { options: e }, i)
                : this.off("click.fb-start").on(
                    "click.fb-start",
                    { items: this, options: e },
                    i
                  ),
              this
            );
          }),
          a.on("click.fb-start", "[data-fancybox]", i),
          a.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
            n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]')
              .eq(n(this).attr("data-fancybox-index") || 0)
              .trigger("click.fb-start", { $trigger: n(this) });
          }),
          (function () {
            var e = null;
            a.on(
              "mousedown mouseup focus blur",
              ".fancybox-button",
              function (t) {
                switch (t.type) {
                  case "mousedown":
                    e = n(this);
                    break;
                  case "mouseup":
                    e = null;
                    break;
                  case "focusin":
                    n(".fancybox-button").removeClass("fancybox-focus"),
                      n(this).is(e) ||
                        n(this).is("[disabled]") ||
                        n(this).addClass("fancybox-focus");
                    break;
                  case "focusout":
                    n(".fancybox-button").removeClass("fancybox-focus");
                }
              }
            );
          })();
      }
    })(window, document, jQuery),
      (function (e) {
        var t = {
            youtube: {
              matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
              params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1,
              },
              paramPlace: 8,
              type: "iframe",
              url: "https://www.youtube-nocookie.com/embed/$4",
              thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
            },
            vimeo: {
              matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
              params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1,
              },
              paramPlace: 3,
              type: "iframe",
              url: "//player.vimeo.com/video/$2",
            },
            instagram: {
              matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
              type: "image",
              url: "//$1/p/$2/media/?size=l",
            },
            gmap_place: {
              matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
              type: "iframe",
              url: function (e) {
                return (
                  "//maps.google." +
                  e[2] +
                  "/?ll=" +
                  (e[9]
                    ? e[9] +
                      "&z=" +
                      Math.floor(e[10]) +
                      (e[12] ? e[12].replace(/^\//, "&") : "")
                    : e[12] + ""
                  ).replace(/\?/, "&") +
                  "&output=" +
                  (e[12] && e[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                );
              },
            },
            gmap_search: {
              matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
              type: "iframe",
              url: function (e) {
                return (
                  "//maps.google." +
                  e[2] +
                  "/maps?q=" +
                  e[5].replace("query=", "q=").replace("api=1", "") +
                  "&output=embed"
                );
              },
            },
          },
          n = function (t, n, o) {
            if (t)
              return (
                (o = o || ""),
                "object" === e.type(o) && (o = e.param(o, !0)),
                e.each(n, function (e, n) {
                  t = t.replace("$" + e, n || "");
                }),
                o.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + o),
                t
              );
          };
        e(document).on("objectNeedsType.fb", function (o, i, s) {
          var r,
            a,
            l,
            c,
            d,
            u,
            p,
            f = s.src || "",
            h = !1;
          (r = e.extend(!0, {}, t, s.opts.media)),
            e.each(r, function (t, o) {
              if ((l = f.match(o.matcher))) {
                if (
                  ((h = o.type),
                  (p = t),
                  (u = {}),
                  o.paramPlace && l[o.paramPlace])
                ) {
                  (d = l[o.paramPlace]),
                    "?" == d[0] && (d = d.substring(1)),
                    (d = d.split("&"));
                  for (var i = 0; i < d.length; ++i) {
                    var r = d[i].split("=", 2);
                    2 == r.length &&
                      (u[r[0]] = decodeURIComponent(r[1].replace(/\+/g, " ")));
                  }
                }
                return (
                  (c = e.extend(!0, {}, o.params, s.opts[t], u)),
                  (f =
                    "function" === e.type(o.url)
                      ? o.url.call(this, l, c, s)
                      : n(o.url, l, c)),
                  (a =
                    "function" === e.type(o.thumb)
                      ? o.thumb.call(this, l, c, s)
                      : n(o.thumb, l)),
                  "youtube" === t
                    ? (f = f.replace(
                        /&t=((\d+)m)?(\d+)s/,
                        function (e, t, n, o) {
                          return (
                            "&start=" +
                            ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                          );
                        }
                      ))
                    : "vimeo" === t && (f = f.replace("&%23", "#")),
                  !1
                );
              }
            }),
            h
              ? (s.opts.thumb ||
                  (s.opts.$thumb && s.opts.$thumb.length) ||
                  (s.opts.thumb = a),
                "iframe" === h &&
                  (s.opts = e.extend(!0, s.opts, {
                    iframe: { preload: !1, attr: { scrolling: "no" } },
                  })),
                e.extend(s, {
                  type: h,
                  src: f,
                  origSrc: s.src,
                  contentSource: p,
                  contentType:
                    "image" === h
                      ? "image"
                      : "gmap_place" == p || "gmap_search" == p
                      ? "map"
                      : "video",
                }))
              : f && (s.type = s.opts.defaultType);
        });
        var o = {
          youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: !1,
            loaded: !1,
          },
          vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: !1,
            loaded: !1,
          },
          load: function (e) {
            var t,
              n = this;
            if (this[e].loaded)
              return void setTimeout(function () {
                n.done(e);
              });
            this[e].loading ||
              ((this[e].loading = !0),
              (t = document.createElement("script")),
              (t.type = "text/javascript"),
              (t.src = this[e].src),
              "youtube" === e
                ? (window.onYouTubeIframeAPIReady = function () {
                    (n[e].loaded = !0), n.done(e);
                  })
                : (t.onload = function () {
                    (n[e].loaded = !0), n.done(e);
                  }),
              document.body.appendChild(t));
          },
          done: function (t) {
            var n, o, i;
            "youtube" === t && delete window.onYouTubeIframeAPIReady,
              (n = e.fancybox.getInstance()) &&
                ((o = n.current.$content.find("iframe")),
                "youtube" === t && void 0 !== YT && YT
                  ? (i = new YT.Player(o.attr("id"), {
                      events: {
                        onStateChange: function (e) {
                          0 == e.data && n.next();
                        },
                      },
                    }))
                  : "vimeo" === t &&
                    void 0 !== Vimeo &&
                    Vimeo &&
                    ((i = new Vimeo.Player(o)),
                    i.on("ended", function () {
                      n.next();
                    })));
          },
        };
        e(document).on({
          "afterShow.fb": function (e, t, n) {
            t.group.length > 1 &&
              ("youtube" === n.contentSource || "vimeo" === n.contentSource) &&
              o.load(n.contentSource);
          },
        });
      })(jQuery),
      (function (e, t, n) {
        var o = (function () {
            return (
              e.requestAnimationFrame ||
              e.webkitRequestAnimationFrame ||
              e.mozRequestAnimationFrame ||
              e.oRequestAnimationFrame ||
              function (t) {
                return e.setTimeout(t, 1e3 / 60);
              }
            );
          })(),
          i = (function () {
            return (
              e.cancelAnimationFrame ||
              e.webkitCancelAnimationFrame ||
              e.mozCancelAnimationFrame ||
              e.oCancelAnimationFrame ||
              function (t) {
                e.clearTimeout(t);
              }
            );
          })(),
          s = function (t) {
            var n = [];
            (t = t.originalEvent || t || e.e),
              (t =
                t.touches && t.touches.length
                  ? t.touches
                  : t.changedTouches && t.changedTouches.length
                  ? t.changedTouches
                  : [t]);
            for (var o in t)
              t[o].pageX
                ? n.push({ x: t[o].pageX, y: t[o].pageY })
                : t[o].clientX && n.push({ x: t[o].clientX, y: t[o].clientY });
            return n;
          },
          r = function (e, t, n) {
            return t && e
              ? "x" === n
                ? e.x - t.x
                : "y" === n
                ? e.y - t.y
                : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
              : 0;
          },
          a = function (e) {
            if (
              e.is(
                'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe'
              ) ||
              n.isFunction(e.get(0).onclick) ||
              e.data("selectable")
            )
              return !0;
            for (var t = 0, o = e[0].attributes, i = o.length; t < i; t++)
              if ("data-fancybox-" === o[t].nodeName.substr(0, 14)) return !0;
            return !1;
          },
          l = function (t) {
            var n = e.getComputedStyle(t)["overflow-y"],
              o = e.getComputedStyle(t)["overflow-x"],
              i =
                ("scroll" === n || "auto" === n) &&
                t.scrollHeight > t.clientHeight,
              s =
                ("scroll" === o || "auto" === o) &&
                t.scrollWidth > t.clientWidth;
            return i || s;
          },
          c = function (e) {
            for (var t = !1; ; ) {
              if ((t = l(e.get(0)))) break;
              if (
                ((e = e.parent()),
                !e.length || e.hasClass("fancybox-stage") || e.is("body"))
              )
                break;
            }
            return t;
          },
          d = function (e) {
            var t = this;
            (t.instance = e),
              (t.$bg = e.$refs.bg),
              (t.$stage = e.$refs.stage),
              (t.$container = e.$refs.container),
              t.destroy(),
              t.$container.on(
                "touchstart.fb.touch mousedown.fb.touch",
                n.proxy(t, "ontouchstart")
              );
          };
        (d.prototype.destroy = function () {
          var e = this;
          e.$container.off(".fb.touch"),
            n(t).off(".fb.touch"),
            e.requestId && (i(e.requestId), (e.requestId = null)),
            e.tapped && (clearTimeout(e.tapped), (e.tapped = null));
        }),
          (d.prototype.ontouchstart = function (o) {
            var i = this,
              l = n(o.target),
              d = i.instance,
              u = d.current,
              p = u.$slide,
              f = u.$content,
              h = "touchstart" == o.type;
            if (
              (h && i.$container.off("mousedown.fb.touch"),
              (!o.originalEvent || 2 != o.originalEvent.button) &&
                p.length &&
                l.length &&
                !a(l) &&
                !a(l.parent()) &&
                (l.is("img") ||
                  !(
                    o.originalEvent.clientX >
                    l[0].clientWidth + l.offset().left
                  )))
            ) {
              if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated"))
                return o.stopPropagation(), void o.preventDefault();
              (i.realPoints = i.startPoints = s(o)),
                i.startPoints.length &&
                  (u.touch && o.stopPropagation(),
                  (i.startEvent = o),
                  (i.canTap = !0),
                  (i.$target = l),
                  (i.$content = f),
                  (i.opts = u.opts.touch),
                  (i.isPanning = !1),
                  (i.isSwiping = !1),
                  (i.isZooming = !1),
                  (i.isScrolling = !1),
                  (i.canPan = d.canPan()),
                  (i.startTime = new Date().getTime()),
                  (i.distanceX = i.distanceY = i.distance = 0),
                  (i.canvasWidth = Math.round(p[0].clientWidth)),
                  (i.canvasHeight = Math.round(p[0].clientHeight)),
                  (i.contentLastPos = null),
                  (i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                    top: 0,
                    left: 0,
                  }),
                  (i.sliderStartPos = n.fancybox.getTranslate(p)),
                  (i.stagePos = n.fancybox.getTranslate(d.$refs.stage)),
                  (i.sliderStartPos.top -= i.stagePos.top),
                  (i.sliderStartPos.left -= i.stagePos.left),
                  (i.contentStartPos.top -= i.stagePos.top),
                  (i.contentStartPos.left -= i.stagePos.left),
                  n(t)
                    .off(".fb.touch")
                    .on(
                      h
                        ? "touchend.fb.touch touchcancel.fb.touch"
                        : "mouseup.fb.touch mouseleave.fb.touch",
                      n.proxy(i, "ontouchend")
                    )
                    .on(
                      h ? "touchmove.fb.touch" : "mousemove.fb.touch",
                      n.proxy(i, "ontouchmove")
                    ),
                  n.fancybox.isMobile &&
                    t.addEventListener("scroll", i.onscroll, !0),
                  (((i.opts || i.canPan) &&
                    (l.is(i.$stage) || i.$stage.find(l).length)) ||
                    (l.is(".fancybox-image") && o.preventDefault(),
                    n.fancybox.isMobile &&
                      l.parents(".fancybox-caption").length)) &&
                    ((i.isScrollable = c(l) || c(l.parent())),
                    (n.fancybox.isMobile && i.isScrollable) ||
                      o.preventDefault(),
                    (1 === i.startPoints.length || u.hasError) &&
                      (i.canPan
                        ? (n.fancybox.stop(i.$content), (i.isPanning = !0))
                        : (i.isSwiping = !0),
                      i.$container.addClass("fancybox-is-grabbing")),
                    2 === i.startPoints.length &&
                      "image" === u.type &&
                      (u.isLoaded || u.$ghost) &&
                      ((i.canTap = !1),
                      (i.isSwiping = !1),
                      (i.isPanning = !1),
                      (i.isZooming = !0),
                      n.fancybox.stop(i.$content),
                      (i.centerPointStartX =
                        0.5 * (i.startPoints[0].x + i.startPoints[1].x) -
                        n(e).scrollLeft()),
                      (i.centerPointStartY =
                        0.5 * (i.startPoints[0].y + i.startPoints[1].y) -
                        n(e).scrollTop()),
                      (i.percentageOfImageAtPinchPointX =
                        (i.centerPointStartX - i.contentStartPos.left) /
                        i.contentStartPos.width),
                      (i.percentageOfImageAtPinchPointY =
                        (i.centerPointStartY - i.contentStartPos.top) /
                        i.contentStartPos.height),
                      (i.startDistanceBetweenFingers = r(
                        i.startPoints[0],
                        i.startPoints[1]
                      )))));
            }
          }),
          (d.prototype.onscroll = function (e) {
            var n = this;
            (n.isScrolling = !0),
              t.removeEventListener("scroll", n.onscroll, !0);
          }),
          (d.prototype.ontouchmove = function (e) {
            var t = this;
            return void 0 !== e.originalEvent.buttons &&
              0 === e.originalEvent.buttons
              ? void t.ontouchend(e)
              : t.isScrolling
              ? void (t.canTap = !1)
              : ((t.newPoints = s(e)),
                void (
                  (t.opts || t.canPan) &&
                  t.newPoints.length &&
                  t.newPoints.length &&
                  ((t.isSwiping && !0 === t.isSwiping) || e.preventDefault(),
                  (t.distanceX = r(t.newPoints[0], t.startPoints[0], "x")),
                  (t.distanceY = r(t.newPoints[0], t.startPoints[0], "y")),
                  (t.distance = r(t.newPoints[0], t.startPoints[0])),
                  t.distance > 0 &&
                    (t.isSwiping
                      ? t.onSwipe(e)
                      : t.isPanning
                      ? t.onPan()
                      : t.isZooming && t.onZoom()))
                ));
          }),
          (d.prototype.onSwipe = function (t) {
            var s,
              r = this,
              a = r.instance,
              l = r.isSwiping,
              c = r.sliderStartPos.left || 0;
            if (!0 !== l)
              "x" == l &&
                (r.distanceX > 0 &&
                (r.instance.group.length < 2 ||
                  (0 === r.instance.current.index &&
                    !r.instance.current.opts.loop))
                  ? (c += Math.pow(r.distanceX, 0.8))
                  : r.distanceX < 0 &&
                    (r.instance.group.length < 2 ||
                      (r.instance.current.index ===
                        r.instance.group.length - 1 &&
                        !r.instance.current.opts.loop))
                  ? (c -= Math.pow(-r.distanceX, 0.8))
                  : (c += r.distanceX)),
                (r.sliderLastPos = {
                  top: "x" == l ? 0 : r.sliderStartPos.top + r.distanceY,
                  left: c,
                }),
                r.requestId && (i(r.requestId), (r.requestId = null)),
                (r.requestId = o(function () {
                  r.sliderLastPos &&
                    (n.each(r.instance.slides, function (e, t) {
                      var o = t.pos - r.instance.currPos;
                      n.fancybox.setTranslate(t.$slide, {
                        top: r.sliderLastPos.top,
                        left:
                          r.sliderLastPos.left +
                          o * r.canvasWidth +
                          o * t.opts.gutter,
                      });
                    }),
                    r.$container.addClass("fancybox-is-sliding"));
                }));
            else if (Math.abs(r.distance) > 10) {
              if (
                ((r.canTap = !1),
                a.group.length < 2 && r.opts.vertical
                  ? (r.isSwiping = "y")
                  : a.isDragging ||
                    !1 === r.opts.vertical ||
                    ("auto" === r.opts.vertical && n(e).width() > 800)
                  ? (r.isSwiping = "x")
                  : ((s = Math.abs(
                      (180 * Math.atan2(r.distanceY, r.distanceX)) / Math.PI
                    )),
                    (r.isSwiping = s > 45 && s < 135 ? "y" : "x")),
                "y" === r.isSwiping && n.fancybox.isMobile && r.isScrollable)
              )
                return void (r.isScrolling = !0);
              (a.isDragging = r.isSwiping),
                (r.startPoints = r.newPoints),
                n.each(a.slides, function (e, t) {
                  var o, i;
                  n.fancybox.stop(t.$slide),
                    (o = n.fancybox.getTranslate(t.$slide)),
                    (i = n.fancybox.getTranslate(a.$refs.stage)),
                    t.$slide
                      .css({
                        transform: "",
                        opacity: "",
                        "transition-duration": "",
                      })
                      .removeClass("fancybox-animated")
                      .removeClass(function (e, t) {
                        return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                          " "
                        );
                      }),
                    t.pos === a.current.pos &&
                      ((r.sliderStartPos.top = o.top - i.top),
                      (r.sliderStartPos.left = o.left - i.left)),
                    n.fancybox.setTranslate(t.$slide, {
                      top: o.top - i.top,
                      left: o.left - i.left,
                    });
                }),
                a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop();
            }
          }),
          (d.prototype.onPan = function () {
            var e = this;
            if (
              r(e.newPoints[0], e.realPoints[0]) <
              (n.fancybox.isMobile ? 10 : 5)
            )
              return void (e.startPoints = e.newPoints);
            (e.canTap = !1),
              (e.contentLastPos = e.limitMovement()),
              e.requestId && i(e.requestId),
              (e.requestId = o(function () {
                n.fancybox.setTranslate(e.$content, e.contentLastPos);
              }));
          }),
          (d.prototype.limitMovement = function () {
            var e,
              t,
              n,
              o,
              i,
              s,
              r = this,
              a = r.canvasWidth,
              l = r.canvasHeight,
              c = r.distanceX,
              d = r.distanceY,
              u = r.contentStartPos,
              p = u.left,
              f = u.top,
              h = u.width,
              g = u.height;
            return (
              (i = h > a ? p + c : p),
              (s = f + d),
              (e = Math.max(0, 0.5 * a - 0.5 * h)),
              (t = Math.max(0, 0.5 * l - 0.5 * g)),
              (n = Math.min(a - h, 0.5 * a - 0.5 * h)),
              (o = Math.min(l - g, 0.5 * l - 0.5 * g)),
              c > 0 && i > e && (i = e - 1 + Math.pow(-e + p + c, 0.8) || 0),
              c < 0 && i < n && (i = n + 1 - Math.pow(n - p - c, 0.8) || 0),
              d > 0 && s > t && (s = t - 1 + Math.pow(-t + f + d, 0.8) || 0),
              d < 0 && s < o && (s = o + 1 - Math.pow(o - f - d, 0.8) || 0),
              { top: s, left: i }
            );
          }),
          (d.prototype.limitPosition = function (e, t, n, o) {
            var i = this,
              s = i.canvasWidth,
              r = i.canvasHeight;
            return (
              n > s
                ? ((e = e > 0 ? 0 : e), (e = e < s - n ? s - n : e))
                : (e = Math.max(0, s / 2 - n / 2)),
              o > r
                ? ((t = t > 0 ? 0 : t), (t = t < r - o ? r - o : t))
                : (t = Math.max(0, r / 2 - o / 2)),
              { top: t, left: e }
            );
          }),
          (d.prototype.onZoom = function () {
            var t = this,
              s = t.contentStartPos,
              a = s.width,
              l = s.height,
              c = s.left,
              d = s.top,
              u = r(t.newPoints[0], t.newPoints[1]),
              p = u / t.startDistanceBetweenFingers,
              f = Math.floor(a * p),
              h = Math.floor(l * p),
              g = (a - f) * t.percentageOfImageAtPinchPointX,
              v = (l - h) * t.percentageOfImageAtPinchPointY,
              m = (t.newPoints[0].x + t.newPoints[1].x) / 2 - n(e).scrollLeft(),
              y = (t.newPoints[0].y + t.newPoints[1].y) / 2 - n(e).scrollTop(),
              b = m - t.centerPointStartX,
              w = y - t.centerPointStartY,
              x = c + (g + b),
              T = d + (v + w),
              S = { top: T, left: x, scaleX: p, scaleY: p };
            (t.canTap = !1),
              (t.newWidth = f),
              (t.newHeight = h),
              (t.contentLastPos = S),
              t.requestId && i(t.requestId),
              (t.requestId = o(function () {
                n.fancybox.setTranslate(t.$content, t.contentLastPos);
              }));
          }),
          (d.prototype.ontouchend = function (e) {
            var o = this,
              r = o.isSwiping,
              a = o.isPanning,
              l = o.isZooming,
              c = o.isScrolling;
            if (
              ((o.endPoints = s(e)),
              (o.dMs = Math.max(new Date().getTime() - o.startTime, 1)),
              o.$container.removeClass("fancybox-is-grabbing"),
              n(t).off(".fb.touch"),
              t.removeEventListener("scroll", o.onscroll, !0),
              o.requestId && (i(o.requestId), (o.requestId = null)),
              (o.isSwiping = !1),
              (o.isPanning = !1),
              (o.isZooming = !1),
              (o.isScrolling = !1),
              (o.instance.isDragging = !1),
              o.canTap)
            )
              return o.onTap(e);
            (o.speed = 100),
              (o.velocityX = (o.distanceX / o.dMs) * 0.5),
              (o.velocityY = (o.distanceY / o.dMs) * 0.5),
              a ? o.endPanning() : l ? o.endZooming() : o.endSwiping(r, c);
          }),
          (d.prototype.endSwiping = function (e, t) {
            var o = this,
              i = !1,
              s = o.instance.group.length,
              r = Math.abs(o.distanceX),
              a = "x" == e && s > 1 && ((o.dMs > 130 && r > 10) || r > 50);
            (o.sliderLastPos = null),
              "y" == e && !t && Math.abs(o.distanceY) > 50
                ? (n.fancybox.animate(
                    o.instance.current.$slide,
                    {
                      top:
                        o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
                      opacity: 0,
                    },
                    200
                  ),
                  (i = o.instance.close(!0, 250)))
                : a && o.distanceX > 0
                ? (i = o.instance.previous(300))
                : a && o.distanceX < 0 && (i = o.instance.next(300)),
              !1 !== i || ("x" != e && "y" != e) || o.instance.centerSlide(200),
              o.$container.removeClass("fancybox-is-sliding");
          }),
          (d.prototype.endPanning = function () {
            var e,
              t,
              o,
              i = this;
            i.contentLastPos &&
              (!1 === i.opts.momentum || i.dMs > 350
                ? ((e = i.contentLastPos.left), (t = i.contentLastPos.top))
                : ((e = i.contentLastPos.left + 500 * i.velocityX),
                  (t = i.contentLastPos.top + 500 * i.velocityY)),
              (o = i.limitPosition(
                e,
                t,
                i.contentStartPos.width,
                i.contentStartPos.height
              )),
              (o.width = i.contentStartPos.width),
              (o.height = i.contentStartPos.height),
              n.fancybox.animate(i.$content, o, 366));
          }),
          (d.prototype.endZooming = function () {
            var e,
              t,
              o,
              i,
              s = this,
              r = s.instance.current,
              a = s.newWidth,
              l = s.newHeight;
            s.contentLastPos &&
              ((e = s.contentLastPos.left),
              (t = s.contentLastPos.top),
              (i = {
                top: t,
                left: e,
                width: a,
                height: l,
                scaleX: 1,
                scaleY: 1,
              }),
              n.fancybox.setTranslate(s.$content, i),
              a < s.canvasWidth && l < s.canvasHeight
                ? s.instance.scaleToFit(150)
                : a > r.width || l > r.height
                ? s.instance.scaleToActual(
                    s.centerPointStartX,
                    s.centerPointStartY,
                    150
                  )
                : ((o = s.limitPosition(e, t, a, l)),
                  n.fancybox.animate(s.$content, o, 150)));
          }),
          (d.prototype.onTap = function (t) {
            var o,
              i = this,
              r = n(t.target),
              a = i.instance,
              l = a.current,
              c = (t && s(t)) || i.startPoints,
              d = c[0] ? c[0].x - n(e).scrollLeft() - i.stagePos.left : 0,
              u = c[0] ? c[0].y - n(e).scrollTop() - i.stagePos.top : 0,
              p = function (e) {
                var o = l.opts[e];
                if ((n.isFunction(o) && (o = o.apply(a, [l, t])), o))
                  switch (o) {
                    case "close":
                      a.close(i.startEvent);
                      break;
                    case "toggleControls":
                      a.toggleControls();
                      break;
                    case "next":
                      a.next();
                      break;
                    case "nextOrClose":
                      a.group.length > 1 ? a.next() : a.close(i.startEvent);
                      break;
                    case "zoom":
                      "image" == l.type &&
                        (l.isLoaded || l.$ghost) &&
                        (a.canPan()
                          ? a.scaleToFit()
                          : a.isScaledDown()
                          ? a.scaleToActual(d, u)
                          : a.group.length < 2 && a.close(i.startEvent));
                  }
              };
            if (
              (!t.originalEvent || 2 != t.originalEvent.button) &&
              (r.is("img") || !(d > r[0].clientWidth + r.offset().left))
            ) {
              if (
                r.is(
                  ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
                )
              )
                o = "Outside";
              else if (r.is(".fancybox-slide")) o = "Slide";
              else {
                if (
                  !a.current.$content ||
                  !a.current.$content.find(r).addBack().filter(r).length
                )
                  return;
                o = "Content";
              }
              if (i.tapped) {
                if (
                  (clearTimeout(i.tapped),
                  (i.tapped = null),
                  Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50)
                )
                  return this;
                p("dblclick" + o);
              } else
                (i.tapX = d),
                  (i.tapY = u),
                  l.opts["dblclick" + o] &&
                  l.opts["dblclick" + o] !== l.opts["click" + o]
                    ? (i.tapped = setTimeout(function () {
                        (i.tapped = null), a.isAnimating || p("click" + o);
                      }, 500))
                    : p("click" + o);
              return this;
            }
          }),
          n(t)
            .on("onActivate.fb", function (e, t) {
              t && !t.Guestures && (t.Guestures = new d(t));
            })
            .on("beforeClose.fb", function (e, t) {
              t && t.Guestures && t.Guestures.destroy();
            });
      })(window, document, jQuery),
      (function (e, t) {
        t.extend(!0, t.fancybox.defaults, {
          btnTpl: {
            slideShow:
              '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
          },
          slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
        });
        var n = function (e) {
          (this.instance = e), this.init();
        };
        t.extend(n.prototype, {
          timer: null,
          isActive: !1,
          $button: null,
          init: function () {
            var e = this,
              n = e.instance,
              o = n.group[n.currIndex].opts.slideShow;
            (e.$button = n.$refs.toolbar
              .find("[data-fancybox-play]")
              .on("click", function () {
                e.toggle();
              })),
              n.group.length < 2 || !o
                ? e.$button.hide()
                : o.progress &&
                  (e.$progress = t(
                    '<div class="fancybox-progress"></div>'
                  ).appendTo(n.$refs.inner));
          },
          set: function (e) {
            var n = this,
              o = n.instance,
              i = o.current;
            i && (!0 === e || i.opts.loop || o.currIndex < o.group.length - 1)
              ? n.isActive &&
                "video" !== i.contentType &&
                (n.$progress &&
                  t.fancybox.animate(
                    n.$progress.show(),
                    { scaleX: 1 },
                    i.opts.slideShow.speed
                  ),
                (n.timer = setTimeout(function () {
                  o.current.opts.loop || o.current.index != o.group.length - 1
                    ? o.next()
                    : o.jumpTo(0);
                }, i.opts.slideShow.speed)))
              : (n.stop(), (o.idleSecondsCounter = 0), o.showControls());
          },
          clear: function () {
            var e = this;
            clearTimeout(e.timer),
              (e.timer = null),
              e.$progress && e.$progress.removeAttr("style").hide();
          },
          start: function () {
            var e = this,
              t = e.instance.current;
            t &&
              (e.$button
                .attr(
                  "title",
                  (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP
                )
                .removeClass("fancybox-button--play")
                .addClass("fancybox-button--pause"),
              (e.isActive = !0),
              t.isComplete && e.set(!0),
              e.instance.trigger("onSlideShowChange", !0));
          },
          stop: function () {
            var e = this,
              t = e.instance.current;
            e.clear(),
              e.$button
                .attr(
                  "title",
                  (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START
                )
                .removeClass("fancybox-button--pause")
                .addClass("fancybox-button--play"),
              (e.isActive = !1),
              e.instance.trigger("onSlideShowChange", !1),
              e.$progress && e.$progress.removeAttr("style").hide();
          },
          toggle: function () {
            var e = this;
            e.isActive ? e.stop() : e.start();
          },
        }),
          t(e).on({
            "onInit.fb": function (e, t) {
              t && !t.SlideShow && (t.SlideShow = new n(t));
            },
            "beforeShow.fb": function (e, t, n, o) {
              var i = t && t.SlideShow;
              o
                ? i && n.opts.slideShow.autoStart && i.start()
                : i && i.isActive && i.clear();
            },
            "afterShow.fb": function (e, t, n) {
              var o = t && t.SlideShow;
              o && o.isActive && o.set();
            },
            "afterKeydown.fb": function (n, o, i, s, r) {
              var a = o && o.SlideShow;
              !a ||
                !i.opts.slideShow ||
                (80 !== r && 32 !== r) ||
                t(e.activeElement).is("button,a,input") ||
                (s.preventDefault(), a.toggle());
            },
            "beforeClose.fb onDeactivate.fb": function (e, t) {
              var n = t && t.SlideShow;
              n && n.stop();
            },
          }),
          t(e).on("visibilitychange", function () {
            var n = t.fancybox.getInstance(),
              o = n && n.SlideShow;
            o && o.isActive && (e.hidden ? o.clear() : o.set());
          });
      })(document, jQuery),
      (function (e, t) {
        var n = (function () {
          for (
            var t = [
                [
                  "requestFullscreen",
                  "exitFullscreen",
                  "fullscreenElement",
                  "fullscreenEnabled",
                  "fullscreenchange",
                  "fullscreenerror",
                ],
                [
                  "webkitRequestFullscreen",
                  "webkitExitFullscreen",
                  "webkitFullscreenElement",
                  "webkitFullscreenEnabled",
                  "webkitfullscreenchange",
                  "webkitfullscreenerror",
                ],
                [
                  "webkitRequestFullScreen",
                  "webkitCancelFullScreen",
                  "webkitCurrentFullScreenElement",
                  "webkitCancelFullScreen",
                  "webkitfullscreenchange",
                  "webkitfullscreenerror",
                ],
                [
                  "mozRequestFullScreen",
                  "mozCancelFullScreen",
                  "mozFullScreenElement",
                  "mozFullScreenEnabled",
                  "mozfullscreenchange",
                  "mozfullscreenerror",
                ],
                [
                  "msRequestFullscreen",
                  "msExitFullscreen",
                  "msFullscreenElement",
                  "msFullscreenEnabled",
                  "MSFullscreenChange",
                  "MSFullscreenError",
                ],
              ],
              n = {},
              o = 0;
            o < t.length;
            o++
          ) {
            var i = t[o];
            if (i && i[1] in e) {
              for (var s = 0; s < i.length; s++) n[t[0][s]] = i[s];
              return n;
            }
          }
          return !1;
        })();
        if (n) {
          var o = {
            request: function (t) {
              (t = t || e.documentElement),
                t[n.requestFullscreen](t.ALLOW_KEYBOARD_INPUT);
            },
            exit: function () {
              e[n.exitFullscreen]();
            },
            toggle: function (t) {
              (t = t || e.documentElement),
                this.isFullscreen() ? this.exit() : this.request(t);
            },
            isFullscreen: function () {
              return Boolean(e[n.fullscreenElement]);
            },
            enabled: function () {
              return Boolean(e[n.fullscreenEnabled]);
            },
          };
          t.extend(!0, t.fancybox.defaults, {
            btnTpl: {
              fullScreen:
                '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
            },
            fullScreen: { autoStart: !1 },
          }),
            t(e).on(n.fullscreenchange, function () {
              var e = o.isFullscreen(),
                n = t.fancybox.getInstance();
              n &&
                (n.current &&
                  "image" === n.current.type &&
                  n.isAnimating &&
                  ((n.isAnimating = !1),
                  n.update(!0, !0, 0),
                  n.isComplete || n.complete()),
                n.trigger("onFullscreenChange", e),
                n.$refs.container.toggleClass("fancybox-is-fullscreen", e),
                n.$refs.toolbar
                  .find("[data-fancybox-fullscreen]")
                  .toggleClass("fancybox-button--fsenter", !e)
                  .toggleClass("fancybox-button--fsexit", e));
            });
        }
        t(e).on({
          "onInit.fb": function (e, t) {
            var i;
            if (!n)
              return void t.$refs.toolbar
                .find("[data-fancybox-fullscreen]")
                .remove();
            t && t.group[t.currIndex].opts.fullScreen
              ? ((i = t.$refs.container),
                i.on(
                  "click.fb-fullscreen",
                  "[data-fancybox-fullscreen]",
                  function (e) {
                    e.stopPropagation(), e.preventDefault(), o.toggle();
                  }
                ),
                t.opts.fullScreen &&
                  !0 === t.opts.fullScreen.autoStart &&
                  o.request(),
                (t.FullScreen = o))
              : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
          },
          "afterKeydown.fb": function (e, t, n, o, i) {
            t &&
              t.FullScreen &&
              70 === i &&
              (o.preventDefault(), t.FullScreen.toggle());
          },
          "beforeClose.fb": function (e, t) {
            t &&
              t.FullScreen &&
              t.$refs.container.hasClass("fancybox-is-fullscreen") &&
              o.exit();
          },
        });
      })(document, jQuery),
      (function (e, t) {
        var n = "fancybox-thumbs";
        t.fancybox.defaults = t.extend(
          !0,
          {
            btnTpl: {
              thumbs:
                '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
            },
            thumbs: {
              autoStart: !1,
              hideOnClose: !0,
              parentEl: ".fancybox-container",
              axis: "y",
            },
          },
          t.fancybox.defaults
        );
        var o = function (e) {
          this.init(e);
        };
        t.extend(o.prototype, {
          $button: null,
          $grid: null,
          $list: null,
          isVisible: !1,
          isActive: !1,
          init: function (e) {
            var t = this,
              n = e.group,
              o = 0;
            (t.instance = e),
              (t.opts = n[e.currIndex].opts.thumbs),
              (e.Thumbs = t),
              (t.$button = e.$refs.toolbar.find("[data-fancybox-thumbs]"));
            for (
              var i = 0, s = n.length;
              i < s && (n[i].thumb && o++, !(o > 1));
              i++
            );
            o > 1 && t.opts
              ? (t.$button.removeAttr("style").on("click", function () {
                  t.toggle();
                }),
                (t.isActive = !0))
              : t.$button.hide();
          },
          create: function () {
            var e,
              o = this,
              i = o.instance,
              s = o.opts.parentEl,
              r = [];
            o.$grid ||
              ((o.$grid = t(
                '<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>'
              ).appendTo(i.$refs.container.find(s).addBack().filter(s))),
              o.$grid.on("click", "a", function () {
                i.jumpTo(t(this).attr("data-index"));
              })),
              o.$list ||
                (o.$list = t('<div class="' + n + '__list">').appendTo(
                  o.$grid
                )),
              t.each(i.group, function (t, n) {
                (e = n.thumb),
                  e || "image" !== n.type || (e = n.src),
                  r.push(
                    '<a href="javascript:;" tabindex="0" data-index="' +
                      t +
                      '"' +
                      (e && e.length
                        ? ' style="background-image:url(' + e + ')"'
                        : 'class="fancybox-thumbs-missing"') +
                      "></a>"
                  );
              }),
              (o.$list[0].innerHTML = r.join("")),
              "x" === o.opts.axis &&
                o.$list.width(
                  parseInt(o.$grid.css("padding-right"), 10) +
                    i.group.length * o.$list.children().eq(0).outerWidth(!0)
                );
          },
          focus: function (e) {
            var t,
              n,
              o = this,
              i = o.$list,
              s = o.$grid;
            o.instance.current &&
              ((t = i
                .children()
                .removeClass("fancybox-thumbs-active")
                .filter('[data-index="' + o.instance.current.index + '"]')
                .addClass("fancybox-thumbs-active")),
              (n = t.position()),
              "y" === o.opts.axis &&
              (n.top < 0 || n.top > i.height() - t.outerHeight())
                ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, e)
                : "x" === o.opts.axis &&
                  (n.left < s.scrollLeft() ||
                    n.left > s.scrollLeft() + (s.width() - t.outerWidth())) &&
                  i.parent().stop().animate({ scrollLeft: n.left }, e));
          },
          update: function () {
            var e = this;
            e.instance.$refs.container.toggleClass(
              "fancybox-show-thumbs",
              this.isVisible
            ),
              e.isVisible
                ? (e.$grid || e.create(),
                  e.instance.trigger("onThumbsShow"),
                  e.focus(0))
                : e.$grid && e.instance.trigger("onThumbsHide"),
              e.instance.update();
          },
          hide: function () {
            (this.isVisible = !1), this.update();
          },
          show: function () {
            (this.isVisible = !0), this.update();
          },
          toggle: function () {
            (this.isVisible = !this.isVisible), this.update();
          },
        }),
          t(e).on({
            "onInit.fb": function (e, t) {
              var n;
              t &&
                !t.Thumbs &&
                ((n = new o(t)),
                n.isActive && !0 === n.opts.autoStart && n.show());
            },
            "beforeShow.fb": function (e, t, n, o) {
              var i = t && t.Thumbs;
              i && i.isVisible && i.focus(o ? 0 : 250);
            },
            "afterKeydown.fb": function (e, t, n, o, i) {
              var s = t && t.Thumbs;
              s && s.isActive && 71 === i && (o.preventDefault(), s.toggle());
            },
            "beforeClose.fb": function (e, t) {
              var n = t && t.Thumbs;
              n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
            },
          });
      })(document, jQuery),
      (function (e, t) {
        function n(e) {
          var t = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;",
          };
          return String(e).replace(/[&<>"'`=\/]/g, function (e) {
            return t[e];
          });
        }
        t.extend(!0, t.fancybox.defaults, {
          btnTpl: {
            share:
              '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
          },
          share: {
            url: function (e, t) {
              return (
                (!e.currentHash &&
                  "inline" !== t.type &&
                  "html" !== t.type &&
                  (t.origSrc || t.src)) ||
                window.location
              );
            },
            tpl:
              '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
          },
        }),
          t(e).on("click", "[data-fancybox-share]", function () {
            var e,
              o,
              i = t.fancybox.getInstance(),
              s = i.current || null;
            s &&
              ("function" === t.type(s.opts.share.url) &&
                (e = s.opts.share.url.apply(s, [i, s])),
              (o = s.opts.share.tpl
                .replace(
                  /\{\{media\}\}/g,
                  "image" === s.type ? encodeURIComponent(s.src) : ""
                )
                .replace(/\{\{url\}\}/g, encodeURIComponent(e))
                .replace(/\{\{url_raw\}\}/g, n(e))
                .replace(
                  /\{\{descr\}\}/g,
                  i.$caption ? encodeURIComponent(i.$caption.text()) : ""
                )),
              t.fancybox.open({
                src: i.translate(i, o),
                type: "html",
                opts: {
                  touch: !1,
                  animationEffect: !1,
                  afterLoad: function (e, t) {
                    i.$refs.container.one("beforeClose.fb", function () {
                      e.close(null, 0);
                    }),
                      t.$content
                        .find(".fancybox-share__button")
                        .click(function () {
                          return (
                            window.open(
                              this.href,
                              "Share",
                              "width=550, height=450"
                            ),
                            !1
                          );
                        });
                  },
                  mobile: { autoFocus: !1 },
                },
              }));
          });
      })(document, jQuery),
      (function (e, t, n) {
        function o() {
          var t = e.location.hash.substr(1),
            n = t.split("-"),
            o =
              n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
                ? parseInt(n.pop(-1), 10) || 1
                : 1,
            i = n.join("-");
          return { hash: t, index: o < 1 ? 1 : o, gallery: i };
        }
        function i(e) {
          "" !== e.gallery &&
            n("[data-fancybox='" + n.escapeSelector(e.gallery) + "']")
              .eq(e.index - 1)
              .focus()
              .trigger("click.fb-start");
        }
        function s(e) {
          var t, n;
          return (
            !!e &&
            ((t = e.current ? e.current.opts : e.opts),
            "" !==
              (n =
                t.hash ||
                (t.$orig
                  ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger")
                  : "")) && n)
          );
        }
        n.escapeSelector ||
          (n.escapeSelector = function (e) {
            return (e + "").replace(
              /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
              function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              }
            );
          }),
          n(function () {
            !1 !== n.fancybox.defaults.hash &&
              (n(t).on({
                "onInit.fb": function (e, t) {
                  var n, i;
                  !1 !== t.group[t.currIndex].opts.hash &&
                    ((n = o()),
                    (i = s(t)) &&
                      n.gallery &&
                      i == n.gallery &&
                      (t.currIndex = n.index - 1));
                },
                "beforeShow.fb": function (n, o, i, r) {
                  var a;
                  i &&
                    !1 !== i.opts.hash &&
                    (a = s(o)) &&
                    ((o.currentHash =
                      a + (o.group.length > 1 ? "-" + (i.index + 1) : "")),
                    e.location.hash !== "#" + o.currentHash &&
                      (r && !o.origHash && (o.origHash = e.location.hash),
                      o.hashTimer && clearTimeout(o.hashTimer),
                      (o.hashTimer = setTimeout(function () {
                        "replaceState" in e.history
                          ? (e.history[r ? "pushState" : "replaceState"](
                              {},
                              t.title,
                              e.location.pathname +
                                e.location.search +
                                "#" +
                                o.currentHash
                            ),
                            r && (o.hasCreatedHistory = !0))
                          : (e.location.hash = o.currentHash),
                          (o.hashTimer = null);
                      }, 300))));
                },
                "beforeClose.fb": function (n, o, i) {
                  i &&
                    !1 !== i.opts.hash &&
                    (clearTimeout(o.hashTimer),
                    o.currentHash && o.hasCreatedHistory
                      ? e.history.back()
                      : o.currentHash &&
                        ("replaceState" in e.history
                          ? e.history.replaceState(
                              {},
                              t.title,
                              e.location.pathname +
                                e.location.search +
                                (o.origHash || "")
                            )
                          : (e.location.hash = o.origHash)),
                    (o.currentHash = null));
                },
              }),
              n(e).on("hashchange.fb", function () {
                var e = o(),
                  t = null;
                n.each(
                  n(".fancybox-container").get().reverse(),
                  function (e, o) {
                    var i = n(o).data("FancyBox");
                    if (i && i.currentHash) return (t = i), !1;
                  }
                ),
                  t
                    ? t.currentHash === e.gallery + "-" + e.index ||
                      (1 === e.index && t.currentHash == e.gallery) ||
                      ((t.currentHash = null), t.close())
                    : "" !== e.gallery && i(e);
              }),
              setTimeout(function () {
                n.fancybox.getInstance() || i(o());
              }, 50));
          });
      })(window, document, jQuery),
      (function (e, t) {
        var n = new Date().getTime();
        t(e).on({
          "onInit.fb": function (e, t, o) {
            t.$refs.stage.on(
              "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
              function (e) {
                var o = t.current,
                  i = new Date().getTime();
                t.group.length < 2 ||
                  !1 === o.opts.wheel ||
                  ("auto" === o.opts.wheel && "image" !== o.type) ||
                  (e.preventDefault(),
                  e.stopPropagation(),
                  o.$slide.hasClass("fancybox-animated") ||
                    ((e = e.originalEvent || e),
                    i - n < 250 ||
                      ((n = i),
                      t[
                        (-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) <
                        0
                          ? "next"
                          : "previous"
                      ]())));
              }
            );
          },
        });
      })(document, jQuery);
  },
  function (e, t, n) {
    "use strict";
    function o(e) {
      var t = (0, l.default)(this);
      (0, l.default)(window).scroll(function () {
        var e = t.offset().top,
          n = t.offset().top + t.outerHeight(),
          o =
            (0, l.default)(window).scrollTop() +
            (0, l.default)(window).innerHeight(),
          i = (0, l.default)(window).scrollTop();
        o > e && i < n
          ? t.hasClass("blur2")
            ? t.css(
                "animation",
                "transform-shiver2 3000ms linear 0ms infinite normal both"
              )
            : t.css(
                "animation",
                "transform-shiver 4000ms linear 0ms infinite normal both"
              )
          : t.css("animation", "unset");
      });
    }
    function i(e) {
      var t = (0, l.default)(this);
      (0, l.default)(window).scroll(function (e) {
        var n = t.offset().top - (0, l.default)(window).height() - 30;
        (0, l.default)(document).scrollTop() > n && t.addClass("fade_in");
      });
    }
    function s(e) {
      var t = (0, l.default)(this);
      (0, l.default)(window).scroll(function (e) {
        if (!((0, l.default)(window).width() <= "600")) {
          var n = t.offset().top - (0, l.default)(window).height() - 30;
          (0, l.default)(document).scrollTop() > n && t.addClass("fade_in");
        }
      });
    }
    function r(e) {
      var t = (0, l.default)(this);
      (0, l.default)(document).ready(function () {
        (0, l.default)(document).ready() && t.addClass("fade_in");
      });
    }
    var a = n(0),
      l = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(a);
    !(function () {
      "/kontakty/" === (0, l.default)(location).attr("pathname") &&
        ((0, l.default)(".description__title h2").addClass("fade__content"),
        (0, l.default)("body *").removeClass("animat"));
    })(),
      (0, l.default)("h1").each(r),
      (0, l.default)("h2").each(i),
      (0, l.default)("h3").each(i),
      (0, l.default)(".wait__img").each(s),
      (0, l.default)(".complex__item").each(s),
      (0, l.default)(".fade__content").each(r),
      (0, l.default)(".animat").each(s),
      (0, l.default)(".blur").each(o),
      (0, l.default)(".blur2").each(o);
  },
  function (e, t, n) {
    "use strict";
    var o = n(0),
      i = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(o);
    n(11),
      (0, i.default)(".qualification__workers-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: !1,
        infinite: !0,
        nextArrow: (0, i.default)(".arrowRight"),
        prevArrow: (0, i.default)(".arrowLeft"),
        autoplay: !0,
        autoplaySpeed: 3e3,
        lazyLoad: "progressive",
        responsive: [
          { breakpoint: 901, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 568, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
      (0, i.default)(".qualification__certificate-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: !1,
        infinite: !0,
        nextArrow: (0, i.default)(".arrowRightBot"),
        prevArrow: (0, i.default)(".arrowLeftBot"),
        autoplay: !0,
        autoplaySpeed: 3e3,
        lazyLoad: "progressive",
        responsive: [
          { breakpoint: 901, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          { breakpoint: 568, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
      (0, i.default)(".reviews__screenshots-phoneSlide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
        asNavFor: ".reviews__screenshots-slider",
        cssEase: "linear",
      }),
      (0, i.default)(".reviews__screenshots-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: !1,
        infinite: !0,
        nextArrow: (0, i.default)(".reviews__screenshots-arrowRight"),
        prevArrow: (0, i.default)(".reviews__screenshots-arrowLeft"),
        autoplay: !0,
        autoplaySpeed: 3e3,
        pauseOnHover: !0,
        variableWidth: !0,
        asNavFor: ".reviews__screenshots-phoneSlide",
        responsive: [
          { breakpoint: 901, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          { breakpoint: 568, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
      (0, i.default)(".master__workers-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !1,
        infinite: !0,
        nextArrow: (0, i.default)(".arrowRight"),
        prevArrow: (0, i.default)(".arrowLeft"),
        autoplay: !0,
        autoplaySpeed: 3e3,
        asNavFor: ".master__descr-slider",
        lazyLoad: "progressive",
        responsive: [
          { breakpoint: 901, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 568, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
      (0, i.default)(".master__descr-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !1,
        arrows: !1,
        fade: !0,
        asNavFor: ".master__workers-slider",
        lazyLoad: "progressive",
      }),
      (0, i.default)(".master__certificate-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: !1,
        infinite: !0,
        nextArrow: (0, i.default)(".arrowRightBot"),
        prevArrow: (0, i.default)(".arrowLeftBot"),
        autoplay: !0,
        autoplaySpeed: 3e3,
        lazyLoad: "progressive",
        responsive: [
          { breakpoint: 901, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          { breakpoint: 568, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      });
    var s = (0, i.default)(".screenshots__slider-paging");
    (0, i.default)(".screenshots__slider-phoneSlide").on(
      "init reInit afterChange",
      function (e, t, n, o) {
        var i = (n || 0) + 1;
        s.html(
          "<span class='bold roze'>" +
            i +
            "</span>  /  <span>" +
            t.slideCount +
            "</span>"
        );
      }
    ),
      (0, i.default)(".screenshots__slider-phoneSlide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !1,
        infinite: !0,
        nextArrow: (0, i.default)(".screenshots__slider-arrowRight"),
        prevArrow: (0, i.default)(".screenshots__slider-arrowLeft"),
        autoplaySpeed: 3e3,
        pauseOnHover: !0,
        variableWidth: !0,
        asNavFor: ".screenshots__mesage-items",
        lazyLoad: "progressive",
        responsive: [
          {
            breakpoint: 901,
            settings: { slidesToShow: 1, slidesToScroll: 1, variableWidth: !1 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 1, slidesToScroll: 1, variableWidth: !1 },
          },
          {
            breakpoint: 568,
            settings: { slidesToShow: 1, slidesToScroll: 1, variableWidth: !1 },
          },
        ],
      }),
      (0, i.default)(".screenshots__mesage-items").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: !1,
        infinite: !0,
        autoplaySpeed: 3e3,
        pauseOnHover: !0,
        variableWidth: !0,
        asNavFor: ".screenshots__slider-phoneSlide",
        lazyLoad: "progressive",
      }),
      (0, i.default)(".graduate__student-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: !1,
        infinite: !1,
        nextArrow: (0, i.default)(".graduate__student-slider--arrowR"),
        prevArrow: (0, i.default)(".graduate__student-slider--arrowL"),
        autoplay: !1,
        pauseOnHover: !0,
        variableWidth: !0,
        lazyLoad: "progressive",
        responsive: [
          {
            breakpoint: 901,
            settings: { slidesToShow: 2, slidesToScroll: 1, variableWidth: !1 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 1, slidesToScroll: 1, variableWidth: !1 },
          },
          {
            breakpoint: 568,
            settings: { slidesToShow: 1, slidesToScroll: 1, variableWidth: !1 },
          },
        ],
      });
  },
  function (e, t, n) {
    "use strict";
    var o,
      i,
      s,
      r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
    !(function (r) {
      (i = [n(0)]),
        (o = r),
        void 0 !== (s = "function" == typeof o ? o.apply(t, i) : o) &&
          (e.exports = s);
    })(function (e) {
      var t = window.Slick || {};
      (t = (function () {
        function t(t, o) {
          var i,
            s = this;
          (s.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: e(t),
            appendDots: e(t),
            arrows: !0,
            asNavFor: null,
            prevArrow:
              '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow:
              '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function (t, n) {
              return e('<button type="button" />').text(n + 1);
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: 0.35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3,
          }),
            (s.initials = {
              animating: !1,
              dragging: !1,
              autoPlayTimer: null,
              currentDirection: 0,
              currentLeft: null,
              currentSlide: 0,
              direction: 1,
              $dots: null,
              listWidth: null,
              listHeight: null,
              loadIndex: 0,
              $nextArrow: null,
              $prevArrow: null,
              scrolling: !1,
              slideCount: null,
              slideWidth: null,
              $slideTrack: null,
              $slides: null,
              sliding: !1,
              slideOffset: 0,
              swipeLeft: null,
              swiping: !1,
              $list: null,
              touchObject: {},
              transformsEnabled: !1,
              unslicked: !1,
            }),
            e.extend(s, s.initials),
            (s.activeBreakpoint = null),
            (s.animType = null),
            (s.animProp = null),
            (s.breakpoints = []),
            (s.breakpointSettings = []),
            (s.cssTransitions = !1),
            (s.focussed = !1),
            (s.interrupted = !1),
            (s.hidden = "hidden"),
            (s.paused = !0),
            (s.positionProp = null),
            (s.respondTo = null),
            (s.rowCount = 1),
            (s.shouldClick = !0),
            (s.$slider = e(t)),
            (s.$slidesCache = null),
            (s.transformType = null),
            (s.transitionType = null),
            (s.visibilityChange = "visibilitychange"),
            (s.windowWidth = 0),
            (s.windowTimer = null),
            (i = e(t).data("slick") || {}),
            (s.options = e.extend({}, s.defaults, o, i)),
            (s.currentSlide = s.options.initialSlide),
            (s.originalSettings = s.options),
            void 0 !== document.mozHidden
              ? ((s.hidden = "mozHidden"),
                (s.visibilityChange = "mozvisibilitychange"))
              : void 0 !== document.webkitHidden &&
                ((s.hidden = "webkitHidden"),
                (s.visibilityChange = "webkitvisibilitychange")),
            (s.autoPlay = e.proxy(s.autoPlay, s)),
            (s.autoPlayClear = e.proxy(s.autoPlayClear, s)),
            (s.autoPlayIterator = e.proxy(s.autoPlayIterator, s)),
            (s.changeSlide = e.proxy(s.changeSlide, s)),
            (s.clickHandler = e.proxy(s.clickHandler, s)),
            (s.selectHandler = e.proxy(s.selectHandler, s)),
            (s.setPosition = e.proxy(s.setPosition, s)),
            (s.swipeHandler = e.proxy(s.swipeHandler, s)),
            (s.dragHandler = e.proxy(s.dragHandler, s)),
            (s.keyHandler = e.proxy(s.keyHandler, s)),
            (s.instanceUid = n++),
            (s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
            s.registerBreakpoints(),
            s.init(!0);
        }
        var n = 0;
        return t;
      })()),
        (t.prototype.activateADA = function () {
          this.$slideTrack
            .find(".slick-active")
            .attr({ "aria-hidden": "false" })
            .find("a, input, button, select")
            .attr({ tabindex: "0" });
        }),
        (t.prototype.addSlide = t.prototype.slickAdd = function (t, n, o) {
          var i = this;
          if ("boolean" == typeof n) (o = n), (n = null);
          else if (n < 0 || n >= i.slideCount) return !1;
          i.unload(),
            "number" == typeof n
              ? 0 === n && 0 === i.$slides.length
                ? e(t).appendTo(i.$slideTrack)
                : o
                ? e(t).insertBefore(i.$slides.eq(n))
                : e(t).insertAfter(i.$slides.eq(n))
              : !0 === o
              ? e(t).prependTo(i.$slideTrack)
              : e(t).appendTo(i.$slideTrack),
            (i.$slides = i.$slideTrack.children(this.options.slide)),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slideTrack.append(i.$slides),
            i.$slides.each(function (t, n) {
              e(n).attr("data-slick-index", t);
            }),
            (i.$slidesCache = i.$slides),
            i.reinit();
        }),
        (t.prototype.animateHeight = function () {
          var e = this;
          if (
            1 === e.options.slidesToShow &&
            !0 === e.options.adaptiveHeight &&
            !1 === e.options.vertical
          ) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({ height: t }, e.options.speed);
          }
        }),
        (t.prototype.animateSlide = function (t, n) {
          var o = {},
            i = this;
          i.animateHeight(),
            !0 === i.options.rtl && !1 === i.options.vertical && (t = -t),
            !1 === i.transformsEnabled
              ? !1 === i.options.vertical
                ? i.$slideTrack.animate(
                    { left: t },
                    i.options.speed,
                    i.options.easing,
                    n
                  )
                : i.$slideTrack.animate(
                    { top: t },
                    i.options.speed,
                    i.options.easing,
                    n
                  )
              : !1 === i.cssTransitions
              ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft),
                e({ animStart: i.currentLeft }).animate(
                  { animStart: t },
                  {
                    duration: i.options.speed,
                    easing: i.options.easing,
                    step: function (e) {
                      (e = Math.ceil(e)),
                        !1 === i.options.vertical
                          ? ((o[i.animType] = "translate(" + e + "px, 0px)"),
                            i.$slideTrack.css(o))
                          : ((o[i.animType] = "translate(0px," + e + "px)"),
                            i.$slideTrack.css(o));
                    },
                    complete: function () {
                      n && n.call();
                    },
                  }
                ))
              : (i.applyTransition(),
                (t = Math.ceil(t)),
                !1 === i.options.vertical
                  ? (o[i.animType] = "translate3d(" + t + "px, 0px, 0px)")
                  : (o[i.animType] = "translate3d(0px," + t + "px, 0px)"),
                i.$slideTrack.css(o),
                n &&
                  setTimeout(function () {
                    i.disableTransition(), n.call();
                  }, i.options.speed));
        }),
        (t.prototype.getNavTarget = function () {
          var t = this,
            n = t.options.asNavFor;
          return n && null !== n && (n = e(n).not(t.$slider)), n;
        }),
        (t.prototype.asNavFor = function (t) {
          var n = this,
            o = n.getNavTarget();
          null !== o &&
            "object" === (void 0 === o ? "undefined" : r(o)) &&
            o.each(function () {
              var n = e(this).slick("getSlick");
              n.unslicked || n.slideHandler(t, !0);
            });
        }),
        (t.prototype.applyTransition = function (e) {
          var t = this,
            n = {};
          !1 === t.options.fade
            ? (n[t.transitionType] =
                t.transformType +
                " " +
                t.options.speed +
                "ms " +
                t.options.cssEase)
            : (n[t.transitionType] =
                "opacity " + t.options.speed + "ms " + t.options.cssEase),
            !1 === t.options.fade
              ? t.$slideTrack.css(n)
              : t.$slides.eq(e).css(n);
        }),
        (t.prototype.autoPlay = function () {
          var e = this;
          e.autoPlayClear(),
            e.slideCount > e.options.slidesToShow &&
              (e.autoPlayTimer = setInterval(
                e.autoPlayIterator,
                e.options.autoplaySpeed
              ));
        }),
        (t.prototype.autoPlayClear = function () {
          var e = this;
          e.autoPlayTimer && clearInterval(e.autoPlayTimer);
        }),
        (t.prototype.autoPlayIterator = function () {
          var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
          e.paused ||
            e.interrupted ||
            e.focussed ||
            (!1 === e.options.infinite &&
              (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
                ? (e.direction = 0)
                : 0 === e.direction &&
                  ((t = e.currentSlide - e.options.slidesToScroll),
                  e.currentSlide - 1 == 0 && (e.direction = 1))),
            e.slideHandler(t));
        }),
        (t.prototype.buildArrows = function () {
          var t = this;
          !0 === t.options.arrows &&
            ((t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow")),
            (t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow")),
            t.slideCount > t.options.slidesToShow
              ? (t.$prevArrow
                  .removeClass("slick-hidden")
                  .removeAttr("aria-hidden tabindex"),
                t.$nextArrow
                  .removeClass("slick-hidden")
                  .removeAttr("aria-hidden tabindex"),
                t.htmlExpr.test(t.options.prevArrow) &&
                  t.$prevArrow.prependTo(t.options.appendArrows),
                t.htmlExpr.test(t.options.nextArrow) &&
                  t.$nextArrow.appendTo(t.options.appendArrows),
                !0 !== t.options.infinite &&
                  t.$prevArrow
                    .addClass("slick-disabled")
                    .attr("aria-disabled", "true"))
              : t.$prevArrow
                  .add(t.$nextArrow)
                  .addClass("slick-hidden")
                  .attr({ "aria-disabled": "true", tabindex: "-1" }));
        }),
        (t.prototype.buildDots = function () {
          var t,
            n,
            o = this;
          if (!0 === o.options.dots && o.slideCount > o.options.slidesToShow) {
            for (
              o.$slider.addClass("slick-dotted"),
                n = e("<ul />").addClass(o.options.dotsClass),
                t = 0;
              t <= o.getDotCount();
              t += 1
            )
              n.append(
                e("<li />").append(o.options.customPaging.call(this, o, t))
              );
            (o.$dots = n.appendTo(o.options.appendDots)),
              o.$dots.find("li").first().addClass("slick-active");
          }
        }),
        (t.prototype.buildOut = function () {
          var t = this;
          (t.$slides = t.$slider
            .children(t.options.slide + ":not(.slick-cloned)")
            .addClass("slick-slide")),
            (t.slideCount = t.$slides.length),
            t.$slides.each(function (t, n) {
              e(n)
                .attr("data-slick-index", t)
                .data("originalStyling", e(n).attr("style") || "");
            }),
            t.$slider.addClass("slick-slider"),
            (t.$slideTrack =
              0 === t.slideCount
                ? e('<div class="slick-track"/>').appendTo(t.$slider)
                : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
            (t.$list = t.$slideTrack
              .wrap('<div class="slick-list"/>')
              .parent()),
            t.$slideTrack.css("opacity", 0),
            (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) ||
              (t.options.slidesToScroll = 1),
            e("img[data-lazy]", t.$slider)
              .not("[src]")
              .addClass("slick-loading"),
            t.setupInfinite(),
            t.buildArrows(),
            t.buildDots(),
            t.updateDots(),
            t.setSlideClasses(
              "number" == typeof t.currentSlide ? t.currentSlide : 0
            ),
            !0 === t.options.draggable && t.$list.addClass("draggable");
        }),
        (t.prototype.buildRows = function () {
          var e,
            t,
            n,
            o,
            i,
            s,
            r,
            a = this;
          if (
            ((o = document.createDocumentFragment()),
            (s = a.$slider.children()),
            a.options.rows > 0)
          ) {
            for (
              r = a.options.slidesPerRow * a.options.rows,
                i = Math.ceil(s.length / r),
                e = 0;
              e < i;
              e++
            ) {
              var l = document.createElement("div");
              for (t = 0; t < a.options.rows; t++) {
                var c = document.createElement("div");
                for (n = 0; n < a.options.slidesPerRow; n++) {
                  var d = e * r + (t * a.options.slidesPerRow + n);
                  s.get(d) && c.appendChild(s.get(d));
                }
                l.appendChild(c);
              }
              o.appendChild(l);
            }
            a.$slider.empty().append(o),
              a.$slider
                .children()
                .children()
                .children()
                .css({
                  width: 100 / a.options.slidesPerRow + "%",
                  display: "inline-block",
                });
          }
        }),
        (t.prototype.checkResponsive = function (t, n) {
          var o,
            i,
            s,
            r = this,
            a = !1,
            l = r.$slider.width(),
            c = window.innerWidth || e(window).width();
          if (
            ("window" === r.respondTo
              ? (s = c)
              : "slider" === r.respondTo
              ? (s = l)
              : "min" === r.respondTo && (s = Math.min(c, l)),
            r.options.responsive &&
              r.options.responsive.length &&
              null !== r.options.responsive)
          ) {
            i = null;
            for (o in r.breakpoints)
              r.breakpoints.hasOwnProperty(o) &&
                (!1 === r.originalSettings.mobileFirst
                  ? s < r.breakpoints[o] && (i = r.breakpoints[o])
                  : s > r.breakpoints[o] && (i = r.breakpoints[o]));
            null !== i
              ? null !== r.activeBreakpoint
                ? (i !== r.activeBreakpoint || n) &&
                  ((r.activeBreakpoint = i),
                  "unslick" === r.breakpointSettings[i]
                    ? r.unslick(i)
                    : ((r.options = e.extend(
                        {},
                        r.originalSettings,
                        r.breakpointSettings[i]
                      )),
                      !0 === t && (r.currentSlide = r.options.initialSlide),
                      r.refresh(t)),
                  (a = i))
                : ((r.activeBreakpoint = i),
                  "unslick" === r.breakpointSettings[i]
                    ? r.unslick(i)
                    : ((r.options = e.extend(
                        {},
                        r.originalSettings,
                        r.breakpointSettings[i]
                      )),
                      !0 === t && (r.currentSlide = r.options.initialSlide),
                      r.refresh(t)),
                  (a = i))
              : null !== r.activeBreakpoint &&
                ((r.activeBreakpoint = null),
                (r.options = r.originalSettings),
                !0 === t && (r.currentSlide = r.options.initialSlide),
                r.refresh(t),
                (a = i)),
              t || !1 === a || r.$slider.trigger("breakpoint", [r, a]);
          }
        }),
        (t.prototype.changeSlide = function (t, n) {
          var o,
            i,
            s,
            r = this,
            a = e(t.currentTarget);
          switch (
            (a.is("a") && t.preventDefault(),
            a.is("li") || (a = a.closest("li")),
            (s = r.slideCount % r.options.slidesToScroll != 0),
            (o = s
              ? 0
              : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
            t.data.message)
          ) {
            case "previous":
              (i =
                0 === o
                  ? r.options.slidesToScroll
                  : r.options.slidesToShow - o),
                r.slideCount > r.options.slidesToShow &&
                  r.slideHandler(r.currentSlide - i, !1, n);
              break;
            case "next":
              (i = 0 === o ? r.options.slidesToScroll : o),
                r.slideCount > r.options.slidesToShow &&
                  r.slideHandler(r.currentSlide + i, !1, n);
              break;
            case "index":
              var l =
                0 === t.data.index
                  ? 0
                  : t.data.index || a.index() * r.options.slidesToScroll;
              r.slideHandler(r.checkNavigable(l), !1, n),
                a.children().trigger("focus");
              break;
            default:
              return;
          }
        }),
        (t.prototype.checkNavigable = function (e) {
          var t,
            n,
            o = this;
          if (((t = o.getNavigableIndexes()), (n = 0), e > t[t.length - 1]))
            e = t[t.length - 1];
          else
            for (var i in t) {
              if (e < t[i]) {
                e = n;
                break;
              }
              n = t[i];
            }
          return e;
        }),
        (t.prototype.cleanUpEvents = function () {
          var t = this;
          t.options.dots &&
            null !== t.$dots &&
            (e("li", t.$dots)
              .off("click.slick", t.changeSlide)
              .off("mouseenter.slick", e.proxy(t.interrupt, t, !0))
              .off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
            !0 === t.options.accessibility &&
              t.$dots.off("keydown.slick", t.keyHandler)),
            t.$slider.off("focus.slick blur.slick"),
            !0 === t.options.arrows &&
              t.slideCount > t.options.slidesToShow &&
              (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
              t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
              !0 === t.options.accessibility &&
                (t.$prevArrow &&
                  t.$prevArrow.off("keydown.slick", t.keyHandler),
                t.$nextArrow &&
                  t.$nextArrow.off("keydown.slick", t.keyHandler))),
            t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
            t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
            t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
            t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
            t.$list.off("click.slick", t.clickHandler),
            e(document).off(t.visibilityChange, t.visibility),
            t.cleanUpSlideEvents(),
            !0 === t.options.accessibility &&
              t.$list.off("keydown.slick", t.keyHandler),
            !0 === t.options.focusOnSelect &&
              e(t.$slideTrack).children().off("click.slick", t.selectHandler),
            e(window).off(
              "orientationchange.slick.slick-" + t.instanceUid,
              t.orientationChange
            ),
            e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
            e("[draggable!=true]", t.$slideTrack).off(
              "dragstart",
              t.preventDefault
            ),
            e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
        }),
        (t.prototype.cleanUpSlideEvents = function () {
          var t = this;
          t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
            t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
        }),
        (t.prototype.cleanUpRows = function () {
          var e,
            t = this;
          t.options.rows > 0 &&
            ((e = t.$slides.children().children()),
            e.removeAttr("style"),
            t.$slider.empty().append(e));
        }),
        (t.prototype.clickHandler = function (e) {
          !1 === this.shouldClick &&
            (e.stopImmediatePropagation(),
            e.stopPropagation(),
            e.preventDefault());
        }),
        (t.prototype.destroy = function (t) {
          var n = this;
          n.autoPlayClear(),
            (n.touchObject = {}),
            n.cleanUpEvents(),
            e(".slick-cloned", n.$slider).detach(),
            n.$dots && n.$dots.remove(),
            n.$prevArrow &&
              n.$prevArrow.length &&
              (n.$prevArrow
                .removeClass("slick-disabled slick-arrow slick-hidden")
                .removeAttr("aria-hidden aria-disabled tabindex")
                .css("display", ""),
              n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
            n.$nextArrow &&
              n.$nextArrow.length &&
              (n.$nextArrow
                .removeClass("slick-disabled slick-arrow slick-hidden")
                .removeAttr("aria-hidden aria-disabled tabindex")
                .css("display", ""),
              n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
            n.$slides &&
              (n.$slides
                .removeClass(
                  "slick-slide slick-active slick-center slick-visible slick-current"
                )
                .removeAttr("aria-hidden")
                .removeAttr("data-slick-index")
                .each(function () {
                  e(this).attr("style", e(this).data("originalStyling"));
                }),
              n.$slideTrack.children(this.options.slide).detach(),
              n.$slideTrack.detach(),
              n.$list.detach(),
              n.$slider.append(n.$slides)),
            n.cleanUpRows(),
            n.$slider.removeClass("slick-slider"),
            n.$slider.removeClass("slick-initialized"),
            n.$slider.removeClass("slick-dotted"),
            (n.unslicked = !0),
            t || n.$slider.trigger("destroy", [n]);
        }),
        (t.prototype.disableTransition = function (e) {
          var t = this,
            n = {};
          (n[t.transitionType] = ""),
            !1 === t.options.fade
              ? t.$slideTrack.css(n)
              : t.$slides.eq(e).css(n);
        }),
        (t.prototype.fadeSlide = function (e, t) {
          var n = this;
          !1 === n.cssTransitions
            ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }),
              n.$slides
                .eq(e)
                .animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
            : (n.applyTransition(e),
              n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
              t &&
                setTimeout(function () {
                  n.disableTransition(e), t.call();
                }, n.options.speed));
        }),
        (t.prototype.fadeSlideOut = function (e) {
          var t = this;
          !1 === t.cssTransitions
            ? t.$slides
                .eq(e)
                .animate(
                  { opacity: 0, zIndex: t.options.zIndex - 2 },
                  t.options.speed,
                  t.options.easing
                )
            : (t.applyTransition(e),
              t.$slides
                .eq(e)
                .css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
        }),
        (t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
          var t = this;
          null !== e &&
            ((t.$slidesCache = t.$slides),
            t.unload(),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slidesCache.filter(e).appendTo(t.$slideTrack),
            t.reinit());
        }),
        (t.prototype.focusHandler = function () {
          var t = this;
          t.$slider
            .off("focus.slick blur.slick")
            .on("focus.slick blur.slick", "*", function (n) {
              n.stopImmediatePropagation();
              var o = e(this);
              setTimeout(function () {
                t.options.pauseOnFocus &&
                  ((t.focussed = o.is(":focus")), t.autoPlay());
              }, 0);
            });
        }),
        (t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
          return this.currentSlide;
        }),
        (t.prototype.getDotCount = function () {
          var e = this,
            t = 0,
            n = 0,
            o = 0;
          if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow) ++o;
            else
              for (; t < e.slideCount; )
                ++o,
                  (t = n + e.options.slidesToScroll),
                  (n +=
                    e.options.slidesToScroll <= e.options.slidesToShow
                      ? e.options.slidesToScroll
                      : e.options.slidesToShow);
          else if (!0 === e.options.centerMode) o = e.slideCount;
          else if (e.options.asNavFor)
            for (; t < e.slideCount; )
              ++o,
                (t = n + e.options.slidesToScroll),
                (n +=
                  e.options.slidesToScroll <= e.options.slidesToShow
                    ? e.options.slidesToScroll
                    : e.options.slidesToShow);
          else
            o =
              1 +
              Math.ceil(
                (e.slideCount - e.options.slidesToShow) /
                  e.options.slidesToScroll
              );
          return o - 1;
        }),
        (t.prototype.getLeft = function (e) {
          var t,
            n,
            o,
            i,
            s = this,
            r = 0;
          return (
            (s.slideOffset = 0),
            (n = s.$slides.first().outerHeight(!0)),
            !0 === s.options.infinite
              ? (s.slideCount > s.options.slidesToShow &&
                  ((s.slideOffset = s.slideWidth * s.options.slidesToShow * -1),
                  (i = -1),
                  !0 === s.options.vertical &&
                    !0 === s.options.centerMode &&
                    (2 === s.options.slidesToShow
                      ? (i = -1.5)
                      : 1 === s.options.slidesToShow && (i = -2)),
                  (r = n * s.options.slidesToShow * i)),
                s.slideCount % s.options.slidesToScroll != 0 &&
                  e + s.options.slidesToScroll > s.slideCount &&
                  s.slideCount > s.options.slidesToShow &&
                  (e > s.slideCount
                    ? ((s.slideOffset =
                        (s.options.slidesToShow - (e - s.slideCount)) *
                        s.slideWidth *
                        -1),
                      (r =
                        (s.options.slidesToShow - (e - s.slideCount)) * n * -1))
                    : ((s.slideOffset =
                        (s.slideCount % s.options.slidesToScroll) *
                        s.slideWidth *
                        -1),
                      (r =
                        (s.slideCount % s.options.slidesToScroll) * n * -1))))
              : e + s.options.slidesToShow > s.slideCount &&
                ((s.slideOffset =
                  (e + s.options.slidesToShow - s.slideCount) * s.slideWidth),
                (r = (e + s.options.slidesToShow - s.slideCount) * n)),
            s.slideCount <= s.options.slidesToShow &&
              ((s.slideOffset = 0), (r = 0)),
            !0 === s.options.centerMode &&
            s.slideCount <= s.options.slidesToShow
              ? (s.slideOffset =
                  (s.slideWidth * Math.floor(s.options.slidesToShow)) / 2 -
                  (s.slideWidth * s.slideCount) / 2)
              : !0 === s.options.centerMode && !0 === s.options.infinite
              ? (s.slideOffset +=
                  s.slideWidth * Math.floor(s.options.slidesToShow / 2) -
                  s.slideWidth)
              : !0 === s.options.centerMode &&
                ((s.slideOffset = 0),
                (s.slideOffset +=
                  s.slideWidth * Math.floor(s.options.slidesToShow / 2))),
            (t =
              !1 === s.options.vertical
                ? e * s.slideWidth * -1 + s.slideOffset
                : e * n * -1 + r),
            !0 === s.options.variableWidth &&
              ((o =
                s.slideCount <= s.options.slidesToShow ||
                !1 === s.options.infinite
                  ? s.$slideTrack.children(".slick-slide").eq(e)
                  : s.$slideTrack
                      .children(".slick-slide")
                      .eq(e + s.options.slidesToShow)),
              (t =
                !0 === s.options.rtl
                  ? o[0]
                    ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width())
                    : 0
                  : o[0]
                  ? -1 * o[0].offsetLeft
                  : 0),
              !0 === s.options.centerMode &&
                ((o =
                  s.slideCount <= s.options.slidesToShow ||
                  !1 === s.options.infinite
                    ? s.$slideTrack.children(".slick-slide").eq(e)
                    : s.$slideTrack
                        .children(".slick-slide")
                        .eq(e + s.options.slidesToShow + 1)),
                (t =
                  !0 === s.options.rtl
                    ? o[0]
                      ? -1 *
                        (s.$slideTrack.width() - o[0].offsetLeft - o.width())
                      : 0
                    : o[0]
                    ? -1 * o[0].offsetLeft
                    : 0),
                (t += (s.$list.width() - o.outerWidth()) / 2))),
            t
          );
        }),
        (t.prototype.getOption = t.prototype.slickGetOption = function (e) {
          return this.options[e];
        }),
        (t.prototype.getNavigableIndexes = function () {
          var e,
            t = this,
            n = 0,
            o = 0,
            i = [];
          for (
            !1 === t.options.infinite
              ? (e = t.slideCount)
              : ((n = -1 * t.options.slidesToScroll),
                (o = -1 * t.options.slidesToScroll),
                (e = 2 * t.slideCount));
            n < e;

          )
            i.push(n),
              (n = o + t.options.slidesToScroll),
              (o +=
                t.options.slidesToScroll <= t.options.slidesToShow
                  ? t.options.slidesToScroll
                  : t.options.slidesToShow);
          return i;
        }),
        (t.prototype.getSlick = function () {
          return this;
        }),
        (t.prototype.getSlideCount = function () {
          var t,
            n,
            o = this;
          return (
            (n =
              !0 === o.options.centerMode
                ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
                : 0),
            !0 === o.options.swipeToSlide
              ? (o.$slideTrack.find(".slick-slide").each(function (i, s) {
                  if (
                    s.offsetLeft - n + e(s).outerWidth() / 2 >
                    -1 * o.swipeLeft
                  )
                    return (t = s), !1;
                }),
                Math.abs(e(t).attr("data-slick-index") - o.currentSlide) || 1)
              : o.options.slidesToScroll
          );
        }),
        (t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
          this.changeSlide(
            { data: { message: "index", index: parseInt(e) } },
            t
          );
        }),
        (t.prototype.init = function (t) {
          var n = this;
          e(n.$slider).hasClass("slick-initialized") ||
            (e(n.$slider).addClass("slick-initialized"),
            n.buildRows(),
            n.buildOut(),
            n.setProps(),
            n.startLoad(),
            n.loadSlider(),
            n.initializeEvents(),
            n.updateArrows(),
            n.updateDots(),
            n.checkResponsive(!0),
            n.focusHandler()),
            t && n.$slider.trigger("init", [n]),
            !0 === n.options.accessibility && n.initADA(),
            n.options.autoplay && ((n.paused = !1), n.autoPlay());
        }),
        (t.prototype.initADA = function () {
          var t = this,
            n = Math.ceil(t.slideCount / t.options.slidesToShow),
            o = t.getNavigableIndexes().filter(function (e) {
              return e >= 0 && e < t.slideCount;
            });
          t.$slides
            .add(t.$slideTrack.find(".slick-cloned"))
            .attr({ "aria-hidden": "true", tabindex: "-1" })
            .find("a, input, button, select")
            .attr({ tabindex: "-1" }),
            null !== t.$dots &&
              (t.$slides
                .not(t.$slideTrack.find(".slick-cloned"))
                .each(function (n) {
                  var i = o.indexOf(n);
                  if (
                    (e(this).attr({
                      role: "tabpanel",
                      id: "slick-slide" + t.instanceUid + n,
                      tabindex: -1,
                    }),
                    -1 !== i)
                  ) {
                    var s = "slick-slide-control" + t.instanceUid + i;
                    e("#" + s).length &&
                      e(this).attr({ "aria-describedby": s });
                  }
                }),
              t.$dots
                .attr("role", "tablist")
                .find("li")
                .each(function (i) {
                  var s = o[i];
                  e(this).attr({ role: "presentation" }),
                    e(this)
                      .find("button")
                      .first()
                      .attr({
                        role: "tab",
                        id: "slick-slide-control" + t.instanceUid + i,
                        "aria-controls": "slick-slide" + t.instanceUid + s,
                        "aria-label": i + 1 + " of " + n,
                        "aria-selected": null,
                        tabindex: "-1",
                      });
                })
                .eq(t.currentSlide)
                .find("button")
                .attr({ "aria-selected": "true", tabindex: "0" })
                .end());
          for (
            var i = t.currentSlide, s = i + t.options.slidesToShow;
            i < s;
            i++
          )
            t.options.focusOnChange
              ? t.$slides.eq(i).attr({ tabindex: "0" })
              : t.$slides.eq(i).removeAttr("tabindex");
          t.activateADA();
        }),
        (t.prototype.initArrowEvents = function () {
          var e = this;
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            (e.$prevArrow
              .off("click.slick")
              .on("click.slick", { message: "previous" }, e.changeSlide),
            e.$nextArrow
              .off("click.slick")
              .on("click.slick", { message: "next" }, e.changeSlide),
            !0 === e.options.accessibility &&
              (e.$prevArrow.on("keydown.slick", e.keyHandler),
              e.$nextArrow.on("keydown.slick", e.keyHandler)));
        }),
        (t.prototype.initDotEvents = function () {
          var t = this;
          !0 === t.options.dots &&
            t.slideCount > t.options.slidesToShow &&
            (e("li", t.$dots).on(
              "click.slick",
              { message: "index" },
              t.changeSlide
            ),
            !0 === t.options.accessibility &&
              t.$dots.on("keydown.slick", t.keyHandler)),
            !0 === t.options.dots &&
              !0 === t.options.pauseOnDotsHover &&
              t.slideCount > t.options.slidesToShow &&
              e("li", t.$dots)
                .on("mouseenter.slick", e.proxy(t.interrupt, t, !0))
                .on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
        }),
        (t.prototype.initSlideEvents = function () {
          var t = this;
          t.options.pauseOnHover &&
            (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
            t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
        }),
        (t.prototype.initializeEvents = function () {
          var t = this;
          t.initArrowEvents(),
            t.initDotEvents(),
            t.initSlideEvents(),
            t.$list.on(
              "touchstart.slick mousedown.slick",
              { action: "start" },
              t.swipeHandler
            ),
            t.$list.on(
              "touchmove.slick mousemove.slick",
              { action: "move" },
              t.swipeHandler
            ),
            t.$list.on(
              "touchend.slick mouseup.slick",
              { action: "end" },
              t.swipeHandler
            ),
            t.$list.on(
              "touchcancel.slick mouseleave.slick",
              { action: "end" },
              t.swipeHandler
            ),
            t.$list.on("click.slick", t.clickHandler),
            e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
            !0 === t.options.accessibility &&
              t.$list.on("keydown.slick", t.keyHandler),
            !0 === t.options.focusOnSelect &&
              e(t.$slideTrack).children().on("click.slick", t.selectHandler),
            e(window).on(
              "orientationchange.slick.slick-" + t.instanceUid,
              e.proxy(t.orientationChange, t)
            ),
            e(window).on(
              "resize.slick.slick-" + t.instanceUid,
              e.proxy(t.resize, t)
            ),
            e("[draggable!=true]", t.$slideTrack).on(
              "dragstart",
              t.preventDefault
            ),
            e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
            e(t.setPosition);
        }),
        (t.prototype.initUI = function () {
          var e = this;
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            (e.$prevArrow.show(), e.$nextArrow.show()),
            !0 === e.options.dots &&
              e.slideCount > e.options.slidesToShow &&
              e.$dots.show();
        }),
        (t.prototype.keyHandler = function (e) {
          var t = this;
          e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
            (37 === e.keyCode && !0 === t.options.accessibility
              ? t.changeSlide({
                  data: { message: !0 === t.options.rtl ? "next" : "previous" },
                })
              : 39 === e.keyCode &&
                !0 === t.options.accessibility &&
                t.changeSlide({
                  data: { message: !0 === t.options.rtl ? "previous" : "next" },
                }));
        }),
        (t.prototype.lazyLoad = function () {
          function t(t) {
            e("img[data-lazy]", t).each(function () {
              var t = e(this),
                n = e(this).attr("data-lazy"),
                o = e(this).attr("data-srcset"),
                i = e(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                s = document.createElement("img");
              (s.onload = function () {
                t.animate({ opacity: 0 }, 100, function () {
                  o && (t.attr("srcset", o), i && t.attr("sizes", i)),
                    t.attr("src", n).animate({ opacity: 1 }, 200, function () {
                      t.removeAttr(
                        "data-lazy data-srcset data-sizes"
                      ).removeClass("slick-loading");
                    }),
                    r.$slider.trigger("lazyLoaded", [r, t, n]);
                });
              }),
                (s.onerror = function () {
                  t
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                    r.$slider.trigger("lazyLoadError", [r, t, n]);
                }),
                (s.src = n);
            });
          }
          var n,
            o,
            i,
            s,
            r = this;
          if (
            (!0 === r.options.centerMode
              ? !0 === r.options.infinite
                ? ((i = r.currentSlide + (r.options.slidesToShow / 2 + 1)),
                  (s = i + r.options.slidesToShow + 2))
                : ((i = Math.max(
                    0,
                    r.currentSlide - (r.options.slidesToShow / 2 + 1)
                  )),
                  (s = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide))
              : ((i = r.options.infinite
                  ? r.options.slidesToShow + r.currentSlide
                  : r.currentSlide),
                (s = Math.ceil(i + r.options.slidesToShow)),
                !0 === r.options.fade &&
                  (i > 0 && i--, s <= r.slideCount && s++)),
            (n = r.$slider.find(".slick-slide").slice(i, s)),
            "anticipated" === r.options.lazyLoad)
          )
            for (
              var a = i - 1, l = s, c = r.$slider.find(".slick-slide"), d = 0;
              d < r.options.slidesToScroll;
              d++
            )
              a < 0 && (a = r.slideCount - 1),
                (n = n.add(c.eq(a))),
                (n = n.add(c.eq(l))),
                a--,
                l++;
          t(n),
            r.slideCount <= r.options.slidesToShow
              ? ((o = r.$slider.find(".slick-slide")), t(o))
              : r.currentSlide >= r.slideCount - r.options.slidesToShow
              ? ((o = r.$slider
                  .find(".slick-cloned")
                  .slice(0, r.options.slidesToShow)),
                t(o))
              : 0 === r.currentSlide &&
                ((o = r.$slider
                  .find(".slick-cloned")
                  .slice(-1 * r.options.slidesToShow)),
                t(o));
        }),
        (t.prototype.loadSlider = function () {
          var e = this;
          e.setPosition(),
            e.$slideTrack.css({ opacity: 1 }),
            e.$slider.removeClass("slick-loading"),
            e.initUI(),
            "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
        }),
        (t.prototype.next = t.prototype.slickNext = function () {
          this.changeSlide({ data: { message: "next" } });
        }),
        (t.prototype.orientationChange = function () {
          var e = this;
          e.checkResponsive(), e.setPosition();
        }),
        (t.prototype.pause = t.prototype.slickPause = function () {
          var e = this;
          e.autoPlayClear(), (e.paused = !0);
        }),
        (t.prototype.play = t.prototype.slickPlay = function () {
          var e = this;
          e.autoPlay(),
            (e.options.autoplay = !0),
            (e.paused = !1),
            (e.focussed = !1),
            (e.interrupted = !1);
        }),
        (t.prototype.postSlide = function (t) {
          var n = this;
          if (
            !n.unslicked &&
            (n.$slider.trigger("afterChange", [n, t]),
            (n.animating = !1),
            n.slideCount > n.options.slidesToShow && n.setPosition(),
            (n.swipeLeft = null),
            n.options.autoplay && n.autoPlay(),
            !0 === n.options.accessibility &&
              (n.initADA(), n.options.focusOnChange))
          ) {
            e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus();
          }
        }),
        (t.prototype.prev = t.prototype.slickPrev = function () {
          this.changeSlide({ data: { message: "previous" } });
        }),
        (t.prototype.preventDefault = function (e) {
          e.preventDefault();
        }),
        (t.prototype.progressiveLazyLoad = function (t) {
          t = t || 1;
          var n,
            o,
            i,
            s,
            r,
            a = this,
            l = e("img[data-lazy]", a.$slider);
          l.length
            ? ((n = l.first()),
              (o = n.attr("data-lazy")),
              (i = n.attr("data-srcset")),
              (s = n.attr("data-sizes") || a.$slider.attr("data-sizes")),
              (r = document.createElement("img")),
              (r.onload = function () {
                i && (n.attr("srcset", i), s && n.attr("sizes", s)),
                  n
                    .attr("src", o)
                    .removeAttr("data-lazy data-srcset data-sizes")
                    .removeClass("slick-loading"),
                  !0 === a.options.adaptiveHeight && a.setPosition(),
                  a.$slider.trigger("lazyLoaded", [a, n, o]),
                  a.progressiveLazyLoad();
              }),
              (r.onerror = function () {
                t < 3
                  ? setTimeout(function () {
                      a.progressiveLazyLoad(t + 1);
                    }, 500)
                  : (n
                      .removeAttr("data-lazy")
                      .removeClass("slick-loading")
                      .addClass("slick-lazyload-error"),
                    a.$slider.trigger("lazyLoadError", [a, n, o]),
                    a.progressiveLazyLoad());
              }),
              (r.src = o))
            : a.$slider.trigger("allImagesLoaded", [a]);
        }),
        (t.prototype.refresh = function (t) {
          var n,
            o,
            i = this;
          (o = i.slideCount - i.options.slidesToShow),
            !i.options.infinite && i.currentSlide > o && (i.currentSlide = o),
            i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0),
            (n = i.currentSlide),
            i.destroy(!0),
            e.extend(i, i.initials, { currentSlide: n }),
            i.init(),
            t || i.changeSlide({ data: { message: "index", index: n } }, !1);
        }),
        (t.prototype.registerBreakpoints = function () {
          var t,
            n,
            o,
            i = this,
            s = i.options.responsive || null;
          if ("array" === e.type(s) && s.length) {
            i.respondTo = i.options.respondTo || "window";
            for (t in s)
              if (((o = i.breakpoints.length - 1), s.hasOwnProperty(t))) {
                for (n = s[t].breakpoint; o >= 0; )
                  i.breakpoints[o] &&
                    i.breakpoints[o] === n &&
                    i.breakpoints.splice(o, 1),
                    o--;
                i.breakpoints.push(n),
                  (i.breakpointSettings[n] = s[t].settings);
              }
            i.breakpoints.sort(function (e, t) {
              return i.options.mobileFirst ? e - t : t - e;
            });
          }
        }),
        (t.prototype.reinit = function () {
          var t = this;
          (t.$slides = t.$slideTrack
            .children(t.options.slide)
            .addClass("slick-slide")),
            (t.slideCount = t.$slides.length),
            t.currentSlide >= t.slideCount &&
              0 !== t.currentSlide &&
              (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
            t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
            t.registerBreakpoints(),
            t.setProps(),
            t.setupInfinite(),
            t.buildArrows(),
            t.updateArrows(),
            t.initArrowEvents(),
            t.buildDots(),
            t.updateDots(),
            t.initDotEvents(),
            t.cleanUpSlideEvents(),
            t.initSlideEvents(),
            t.checkResponsive(!1, !0),
            !0 === t.options.focusOnSelect &&
              e(t.$slideTrack).children().on("click.slick", t.selectHandler),
            t.setSlideClasses(
              "number" == typeof t.currentSlide ? t.currentSlide : 0
            ),
            t.setPosition(),
            t.focusHandler(),
            (t.paused = !t.options.autoplay),
            t.autoPlay(),
            t.$slider.trigger("reInit", [t]);
        }),
        (t.prototype.resize = function () {
          var t = this;
          e(window).width() !== t.windowWidth &&
            (clearTimeout(t.windowDelay),
            (t.windowDelay = window.setTimeout(function () {
              (t.windowWidth = e(window).width()),
                t.checkResponsive(),
                t.unslicked || t.setPosition();
            }, 50)));
        }),
        (t.prototype.removeSlide = t.prototype.slickRemove = function (
          e,
          t,
          n
        ) {
          var o = this;
          if (
            ("boolean" == typeof e
              ? ((t = e), (e = !0 === t ? 0 : o.slideCount - 1))
              : (e = !0 === t ? --e : e),
            o.slideCount < 1 || e < 0 || e > o.slideCount - 1)
          )
            return !1;
          o.unload(),
            !0 === n
              ? o.$slideTrack.children().remove()
              : o.$slideTrack.children(this.options.slide).eq(e).remove(),
            (o.$slides = o.$slideTrack.children(this.options.slide)),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            (o.$slidesCache = o.$slides),
            o.reinit();
        }),
        (t.prototype.setCSS = function (e) {
          var t,
            n,
            o = this,
            i = {};
          !0 === o.options.rtl && (e = -e),
            (t = "left" == o.positionProp ? Math.ceil(e) + "px" : "0px"),
            (n = "top" == o.positionProp ? Math.ceil(e) + "px" : "0px"),
            (i[o.positionProp] = e),
            !1 === o.transformsEnabled
              ? o.$slideTrack.css(i)
              : ((i = {}),
                !1 === o.cssTransitions
                  ? ((i[o.animType] = "translate(" + t + ", " + n + ")"),
                    o.$slideTrack.css(i))
                  : ((i[o.animType] = "translate3d(" + t + ", " + n + ", 0px)"),
                    o.$slideTrack.css(i)));
        }),
        (t.prototype.setDimensions = function () {
          var e = this;
          !1 === e.options.vertical
            ? !0 === e.options.centerMode &&
              e.$list.css({ padding: "0px " + e.options.centerPadding })
            : (e.$list.height(
                e.$slides.first().outerHeight(!0) * e.options.slidesToShow
              ),
              !0 === e.options.centerMode &&
                e.$list.css({ padding: e.options.centerPadding + " 0px" })),
            (e.listWidth = e.$list.width()),
            (e.listHeight = e.$list.height()),
            !1 === e.options.vertical && !1 === e.options.variableWidth
              ? ((e.slideWidth = Math.ceil(
                  e.listWidth / e.options.slidesToShow
                )),
                e.$slideTrack.width(
                  Math.ceil(
                    e.slideWidth * e.$slideTrack.children(".slick-slide").length
                  )
                ))
              : !0 === e.options.variableWidth
              ? e.$slideTrack.width(5e3 * e.slideCount)
              : ((e.slideWidth = Math.ceil(e.listWidth)),
                e.$slideTrack.height(
                  Math.ceil(
                    e.$slides.first().outerHeight(!0) *
                      e.$slideTrack.children(".slick-slide").length
                  )
                ));
          var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
          !1 === e.options.variableWidth &&
            e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
        }),
        (t.prototype.setFade = function () {
          var t,
            n = this;
          n.$slides.each(function (o, i) {
            (t = n.slideWidth * o * -1),
              !0 === n.options.rtl
                ? e(i).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0,
                  })
                : e(i).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0,
                  });
          }),
            n.$slides
              .eq(n.currentSlide)
              .css({ zIndex: n.options.zIndex - 1, opacity: 1 });
        }),
        (t.prototype.setHeight = function () {
          var e = this;
          if (
            1 === e.options.slidesToShow &&
            !0 === e.options.adaptiveHeight &&
            !1 === e.options.vertical
          ) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t);
          }
        }),
        (t.prototype.setOption = t.prototype.slickSetOption = function () {
          var t,
            n,
            o,
            i,
            s,
            r = this,
            a = !1;
          if (
            ("object" === e.type(arguments[0])
              ? ((o = arguments[0]), (a = arguments[1]), (s = "multiple"))
              : "string" === e.type(arguments[0]) &&
                ((o = arguments[0]),
                (i = arguments[1]),
                (a = arguments[2]),
                "responsive" === arguments[0] &&
                "array" === e.type(arguments[1])
                  ? (s = "responsive")
                  : void 0 !== arguments[1] && (s = "single")),
            "single" === s)
          )
            r.options[o] = i;
          else if ("multiple" === s)
            e.each(o, function (e, t) {
              r.options[e] = t;
            });
          else if ("responsive" === s)
            for (n in i)
              if ("array" !== e.type(r.options.responsive))
                r.options.responsive = [i[n]];
              else {
                for (t = r.options.responsive.length - 1; t >= 0; )
                  r.options.responsive[t].breakpoint === i[n].breakpoint &&
                    r.options.responsive.splice(t, 1),
                    t--;
                r.options.responsive.push(i[n]);
              }
          a && (r.unload(), r.reinit());
        }),
        (t.prototype.setPosition = function () {
          var e = this;
          e.setDimensions(),
            e.setHeight(),
            !1 === e.options.fade
              ? e.setCSS(e.getLeft(e.currentSlide))
              : e.setFade(),
            e.$slider.trigger("setPosition", [e]);
        }),
        (t.prototype.setProps = function () {
          var e = this,
            t = document.body.style;
          (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
            "top" === e.positionProp
              ? e.$slider.addClass("slick-vertical")
              : e.$slider.removeClass("slick-vertical"),
            (void 0 === t.WebkitTransition &&
              void 0 === t.MozTransition &&
              void 0 === t.msTransition) ||
              (!0 === e.options.useCSS && (e.cssTransitions = !0)),
            e.options.fade &&
              ("number" == typeof e.options.zIndex
                ? e.options.zIndex < 3 && (e.options.zIndex = 3)
                : (e.options.zIndex = e.defaults.zIndex)),
            void 0 !== t.OTransform &&
              ((e.animType = "OTransform"),
              (e.transformType = "-o-transform"),
              (e.transitionType = "OTransition"),
              void 0 === t.perspectiveProperty &&
                void 0 === t.webkitPerspective &&
                (e.animType = !1)),
            void 0 !== t.MozTransform &&
              ((e.animType = "MozTransform"),
              (e.transformType = "-moz-transform"),
              (e.transitionType = "MozTransition"),
              void 0 === t.perspectiveProperty &&
                void 0 === t.MozPerspective &&
                (e.animType = !1)),
            void 0 !== t.webkitTransform &&
              ((e.animType = "webkitTransform"),
              (e.transformType = "-webkit-transform"),
              (e.transitionType = "webkitTransition"),
              void 0 === t.perspectiveProperty &&
                void 0 === t.webkitPerspective &&
                (e.animType = !1)),
            void 0 !== t.msTransform &&
              ((e.animType = "msTransform"),
              (e.transformType = "-ms-transform"),
              (e.transitionType = "msTransition"),
              void 0 === t.msTransform && (e.animType = !1)),
            void 0 !== t.transform &&
              !1 !== e.animType &&
              ((e.animType = "transform"),
              (e.transformType = "transform"),
              (e.transitionType = "transition")),
            (e.transformsEnabled =
              e.options.useTransform &&
              null !== e.animType &&
              !1 !== e.animType);
        }),
        (t.prototype.setSlideClasses = function (e) {
          var t,
            n,
            o,
            i,
            s = this;
          if (
            ((n = s.$slider
              .find(".slick-slide")
              .removeClass("slick-active slick-center slick-current")
              .attr("aria-hidden", "true")),
            s.$slides.eq(e).addClass("slick-current"),
            !0 === s.options.centerMode)
          ) {
            var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
            (t = Math.floor(s.options.slidesToShow / 2)),
              !0 === s.options.infinite &&
                (e >= t && e <= s.slideCount - 1 - t
                  ? s.$slides
                      .slice(e - t + r, e + t + 1)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : ((o = s.options.slidesToShow + e),
                    n
                      .slice(o - t + 1 + r, o + t + 2)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")),
                0 === e
                  ? n
                      .eq(n.length - 1 - s.options.slidesToShow)
                      .addClass("slick-center")
                  : e === s.slideCount - 1 &&
                    n.eq(s.options.slidesToShow).addClass("slick-center")),
              s.$slides.eq(e).addClass("slick-center");
          } else
            e >= 0 && e <= s.slideCount - s.options.slidesToShow
              ? s.$slides
                  .slice(e, e + s.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : n.length <= s.options.slidesToShow
              ? n.addClass("slick-active").attr("aria-hidden", "false")
              : ((i = s.slideCount % s.options.slidesToShow),
                (o =
                  !0 === s.options.infinite ? s.options.slidesToShow + e : e),
                s.options.slidesToShow == s.options.slidesToScroll &&
                s.slideCount - e < s.options.slidesToShow
                  ? n
                      .slice(o - (s.options.slidesToShow - i), o + i)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : n
                      .slice(o, o + s.options.slidesToShow)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false"));
          ("ondemand" !== s.options.lazyLoad &&
            "anticipated" !== s.options.lazyLoad) ||
            s.lazyLoad();
        }),
        (t.prototype.setupInfinite = function () {
          var t,
            n,
            o,
            i = this;
          if (
            (!0 === i.options.fade && (i.options.centerMode = !1),
            !0 === i.options.infinite &&
              !1 === i.options.fade &&
              ((n = null), i.slideCount > i.options.slidesToShow))
          ) {
            for (
              o =
                !0 === i.options.centerMode
                  ? i.options.slidesToShow + 1
                  : i.options.slidesToShow,
                t = i.slideCount;
              t > i.slideCount - o;
              t -= 1
            )
              (n = t - 1),
                e(i.$slides[n])
                  .clone(!0)
                  .attr("id", "")
                  .attr("data-slick-index", n - i.slideCount)
                  .prependTo(i.$slideTrack)
                  .addClass("slick-cloned");
            for (t = 0; t < o + i.slideCount; t += 1)
              (n = t),
                e(i.$slides[n])
                  .clone(!0)
                  .attr("id", "")
                  .attr("data-slick-index", n + i.slideCount)
                  .appendTo(i.$slideTrack)
                  .addClass("slick-cloned");
            i.$slideTrack
              .find(".slick-cloned")
              .find("[id]")
              .each(function () {
                e(this).attr("id", "");
              });
          }
        }),
        (t.prototype.interrupt = function (e) {
          var t = this;
          e || t.autoPlay(), (t.interrupted = e);
        }),
        (t.prototype.selectHandler = function (t) {
          var n = this,
            o = e(t.target).is(".slick-slide")
              ? e(t.target)
              : e(t.target).parents(".slick-slide"),
            i = parseInt(o.attr("data-slick-index"));
          if ((i || (i = 0), n.slideCount <= n.options.slidesToShow))
            return void n.slideHandler(i, !1, !0);
          n.slideHandler(i);
        }),
        (t.prototype.slideHandler = function (e, t, n) {
          var o,
            i,
            s,
            r,
            a,
            l = null,
            c = this;
          if (
            ((t = t || !1),
            !(
              (!0 === c.animating && !0 === c.options.waitForAnimate) ||
              (!0 === c.options.fade && c.currentSlide === e)
            ))
          ) {
            if (
              (!1 === t && c.asNavFor(e),
              (o = e),
              (l = c.getLeft(o)),
              (r = c.getLeft(c.currentSlide)),
              (c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft),
              !1 === c.options.infinite &&
                !1 === c.options.centerMode &&
                (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
            )
              return void (
                !1 === c.options.fade &&
                ((o = c.currentSlide),
                !0 !== n && c.slideCount > c.options.slidesToShow
                  ? c.animateSlide(r, function () {
                      c.postSlide(o);
                    })
                  : c.postSlide(o))
              );
            if (
              !1 === c.options.infinite &&
              !0 === c.options.centerMode &&
              (e < 0 || e > c.slideCount - c.options.slidesToScroll)
            )
              return void (
                !1 === c.options.fade &&
                ((o = c.currentSlide),
                !0 !== n && c.slideCount > c.options.slidesToShow
                  ? c.animateSlide(r, function () {
                      c.postSlide(o);
                    })
                  : c.postSlide(o))
              );
            if (
              (c.options.autoplay && clearInterval(c.autoPlayTimer),
              (i =
                o < 0
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                    : c.slideCount + o
                  : o >= c.slideCount
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? 0
                    : o - c.slideCount
                  : o),
              (c.animating = !0),
              c.$slider.trigger("beforeChange", [c, c.currentSlide, i]),
              (s = c.currentSlide),
              (c.currentSlide = i),
              c.setSlideClasses(c.currentSlide),
              c.options.asNavFor &&
                ((a = c.getNavTarget()),
                (a = a.slick("getSlick")),
                a.slideCount <= a.options.slidesToShow &&
                  a.setSlideClasses(c.currentSlide)),
              c.updateDots(),
              c.updateArrows(),
              !0 === c.options.fade)
            )
              return (
                !0 !== n
                  ? (c.fadeSlideOut(s),
                    c.fadeSlide(i, function () {
                      c.postSlide(i);
                    }))
                  : c.postSlide(i),
                void c.animateHeight()
              );
            !0 !== n && c.slideCount > c.options.slidesToShow
              ? c.animateSlide(l, function () {
                  c.postSlide(i);
                })
              : c.postSlide(i);
          }
        }),
        (t.prototype.startLoad = function () {
          var e = this;
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            (e.$prevArrow.hide(), e.$nextArrow.hide()),
            !0 === e.options.dots &&
              e.slideCount > e.options.slidesToShow &&
              e.$dots.hide(),
            e.$slider.addClass("slick-loading");
        }),
        (t.prototype.swipeDirection = function () {
          var e,
            t,
            n,
            o,
            i = this;
          return (
            (e = i.touchObject.startX - i.touchObject.curX),
            (t = i.touchObject.startY - i.touchObject.curY),
            (n = Math.atan2(t, e)),
            (o = Math.round((180 * n) / Math.PI)),
            o < 0 && (o = 360 - Math.abs(o)),
            o <= 45 && o >= 0
              ? !1 === i.options.rtl
                ? "left"
                : "right"
              : o <= 360 && o >= 315
              ? !1 === i.options.rtl
                ? "left"
                : "right"
              : o >= 135 && o <= 225
              ? !1 === i.options.rtl
                ? "right"
                : "left"
              : !0 === i.options.verticalSwiping
              ? o >= 35 && o <= 135
                ? "down"
                : "up"
              : "vertical"
          );
        }),
        (t.prototype.swipeEnd = function (e) {
          var t,
            n,
            o = this;
          if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
            return (o.scrolling = !1), !1;
          if (
            ((o.interrupted = !1),
            (o.shouldClick = !(o.touchObject.swipeLength > 10)),
            void 0 === o.touchObject.curX)
          )
            return !1;
          if (
            (!0 === o.touchObject.edgeHit &&
              o.$slider.trigger("edge", [o, o.swipeDirection()]),
            o.touchObject.swipeLength >= o.touchObject.minSwipe)
          ) {
            switch ((n = o.swipeDirection())) {
              case "left":
              case "down":
                (t = o.options.swipeToSlide
                  ? o.checkNavigable(o.currentSlide + o.getSlideCount())
                  : o.currentSlide + o.getSlideCount()),
                  (o.currentDirection = 0);
                break;
              case "right":
              case "up":
                (t = o.options.swipeToSlide
                  ? o.checkNavigable(o.currentSlide - o.getSlideCount())
                  : o.currentSlide - o.getSlideCount()),
                  (o.currentDirection = 1);
            }
            "vertical" != n &&
              (o.slideHandler(t),
              (o.touchObject = {}),
              o.$slider.trigger("swipe", [o, n]));
          } else
            o.touchObject.startX !== o.touchObject.curX &&
              (o.slideHandler(o.currentSlide), (o.touchObject = {}));
        }),
        (t.prototype.swipeHandler = function (e) {
          var t = this;
          if (
            !(
              !1 === t.options.swipe ||
              ("ontouchend" in document && !1 === t.options.swipe) ||
              (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))
            )
          )
            switch (
              ((t.touchObject.fingerCount =
                e.originalEvent && void 0 !== e.originalEvent.touches
                  ? e.originalEvent.touches.length
                  : 1),
              (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
              !0 === t.options.verticalSwiping &&
                (t.touchObject.minSwipe =
                  t.listHeight / t.options.touchThreshold),
              e.data.action)
            ) {
              case "start":
                t.swipeStart(e);
                break;
              case "move":
                t.swipeMove(e);
                break;
              case "end":
                t.swipeEnd(e);
            }
        }),
        (t.prototype.swipeMove = function (e) {
          var t,
            n,
            o,
            i,
            s,
            r,
            a = this;
          return (
            (s = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
            !(!a.dragging || a.scrolling || (s && 1 !== s.length)) &&
              ((t = a.getLeft(a.currentSlide)),
              (a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX),
              (a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY),
              (a.touchObject.swipeLength = Math.round(
                Math.sqrt(
                  Math.pow(a.touchObject.curX - a.touchObject.startX, 2)
                )
              )),
              (r = Math.round(
                Math.sqrt(
                  Math.pow(a.touchObject.curY - a.touchObject.startY, 2)
                )
              )),
              !a.options.verticalSwiping && !a.swiping && r > 4
                ? ((a.scrolling = !0), !1)
                : (!0 === a.options.verticalSwiping &&
                    (a.touchObject.swipeLength = r),
                  (n = a.swipeDirection()),
                  void 0 !== e.originalEvent &&
                    a.touchObject.swipeLength > 4 &&
                    ((a.swiping = !0), e.preventDefault()),
                  (i =
                    (!1 === a.options.rtl ? 1 : -1) *
                    (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                  !0 === a.options.verticalSwiping &&
                    (i = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                  (o = a.touchObject.swipeLength),
                  (a.touchObject.edgeHit = !1),
                  !1 === a.options.infinite &&
                    ((0 === a.currentSlide && "right" === n) ||
                      (a.currentSlide >= a.getDotCount() && "left" === n)) &&
                    ((o = a.touchObject.swipeLength * a.options.edgeFriction),
                    (a.touchObject.edgeHit = !0)),
                  !1 === a.options.vertical
                    ? (a.swipeLeft = t + o * i)
                    : (a.swipeLeft =
                        t + o * (a.$list.height() / a.listWidth) * i),
                  !0 === a.options.verticalSwiping && (a.swipeLeft = t + o * i),
                  !0 !== a.options.fade &&
                    !1 !== a.options.touchMove &&
                    (!0 === a.animating
                      ? ((a.swipeLeft = null), !1)
                      : void a.setCSS(a.swipeLeft))))
          );
        }),
        (t.prototype.swipeStart = function (e) {
          var t,
            n = this;
          if (
            ((n.interrupted = !0),
            1 !== n.touchObject.fingerCount ||
              n.slideCount <= n.options.slidesToShow)
          )
            return (n.touchObject = {}), !1;
          void 0 !== e.originalEvent &&
            void 0 !== e.originalEvent.touches &&
            (t = e.originalEvent.touches[0]),
            (n.touchObject.startX = n.touchObject.curX =
              void 0 !== t ? t.pageX : e.clientX),
            (n.touchObject.startY = n.touchObject.curY =
              void 0 !== t ? t.pageY : e.clientY),
            (n.dragging = !0);
        }),
        (t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
          var e = this;
          null !== e.$slidesCache &&
            (e.unload(),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slidesCache.appendTo(e.$slideTrack),
            e.reinit());
        }),
        (t.prototype.unload = function () {
          var t = this;
          e(".slick-cloned", t.$slider).remove(),
            t.$dots && t.$dots.remove(),
            t.$prevArrow &&
              t.htmlExpr.test(t.options.prevArrow) &&
              t.$prevArrow.remove(),
            t.$nextArrow &&
              t.htmlExpr.test(t.options.nextArrow) &&
              t.$nextArrow.remove(),
            t.$slides
              .removeClass(
                "slick-slide slick-active slick-visible slick-current"
              )
              .attr("aria-hidden", "true")
              .css("width", "");
        }),
        (t.prototype.unslick = function (e) {
          var t = this;
          t.$slider.trigger("unslick", [t, e]), t.destroy();
        }),
        (t.prototype.updateArrows = function () {
          var e = this;
          Math.floor(e.options.slidesToShow / 2),
            !0 === e.options.arrows &&
              e.slideCount > e.options.slidesToShow &&
              !e.options.infinite &&
              (e.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"),
              e.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"),
              0 === e.currentSlide
                ? (e.$prevArrow
                    .addClass("slick-disabled")
                    .attr("aria-disabled", "true"),
                  e.$nextArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false"))
                : e.currentSlide >= e.slideCount - e.options.slidesToShow &&
                  !1 === e.options.centerMode
                ? (e.$nextArrow
                    .addClass("slick-disabled")
                    .attr("aria-disabled", "true"),
                  e.$prevArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false"))
                : e.currentSlide >= e.slideCount - 1 &&
                  !0 === e.options.centerMode &&
                  (e.$nextArrow
                    .addClass("slick-disabled")
                    .attr("aria-disabled", "true"),
                  e.$prevArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false")));
        }),
        (t.prototype.updateDots = function () {
          var e = this;
          null !== e.$dots &&
            (e.$dots.find("li").removeClass("slick-active").end(),
            e.$dots
              .find("li")
              .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
              .addClass("slick-active"));
        }),
        (t.prototype.visibility = function () {
          var e = this;
          e.options.autoplay &&
            (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
        }),
        (e.fn.slick = function () {
          var e,
            n,
            o = this,
            i = arguments[0],
            s = Array.prototype.slice.call(arguments, 1),
            a = o.length;
          for (e = 0; e < a; e++)
            if (
              ("object" == (void 0 === i ? "undefined" : r(i)) || void 0 === i
                ? (o[e].slick = new t(o[e], i))
                : (n = o[e].slick[i].apply(o[e].slick, s)),
              void 0 !== n)
            )
              return n;
          return o;
        });
    });
  },
  function (e, t, n) {
    "use strict";
    var o = n(0),
      i = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(o);
    (window.mask = n(13)),
      (0, i.default)(function (e) {
        e("#inputTel").mask("+375 99 999 99 99", {
          placeholder: "+375 -- --- -- -- ",
        });
      }),
      (0, i.default)(function (e) {
        e(".inputTel").mask("+375 99 999 99 99", {
          placeholder: "+375 -- --- -- -- ",
        });
      });
  },
  function (e, t, n) {
    "use strict";
    var o, i, s;
    "function" == typeof Symbol && Symbol.iterator;
    !(function (r) {
      (i = [n(0)]),
        (o = r),
        void 0 !== (s = "function" == typeof o ? o.apply(t, i) : o) &&
          (e.exports = s);
    })(function (e) {
      var t,
        n = navigator.userAgent,
        o = /iphone/i.test(n),
        i = /chrome/i.test(n),
        s = /android/i.test(n);
      (e.mask = {
        definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_",
      }),
        e.fn.extend({
          caret: function (e, t) {
            var n;
            if (
              0 !== this.length &&
              !this.is(":hidden") &&
              this.get(0) === document.activeElement
            )
              return "number" == typeof e
                ? ((t = "number" == typeof t ? t : e),
                  this.each(function () {
                    this.setSelectionRange
                      ? this.setSelectionRange(e, t)
                      : this.createTextRange &&
                        ((n = this.createTextRange()),
                        n.collapse(!0),
                        n.moveEnd("character", t),
                        n.moveStart("character", e),
                        n.select());
                  }))
                : (this[0].setSelectionRange
                    ? ((e = this[0].selectionStart), (t = this[0].selectionEnd))
                    : document.selection &&
                      document.selection.createRange &&
                      ((n = document.selection.createRange()),
                      (e = 0 - n.duplicate().moveStart("character", -1e5)),
                      (t = e + n.text.length)),
                  { begin: e, end: t });
          },
          unmask: function () {
            return this.trigger("unmask");
          },
          mask: function (n, r) {
            var a, l, c, d, u, p, f, h;
            if (!n && this.length > 0) {
              a = e(this[0]);
              var g = a.data(e.mask.dataName);
              return g ? g() : void 0;
            }
            return (
              (r = e.extend(
                {
                  autoclear: e.mask.autoclear,
                  placeholder: e.mask.placeholder,
                  completed: null,
                },
                r
              )),
              (l = e.mask.definitions),
              (c = []),
              (d = f = n.length),
              (u = null),
              (n = String(n)),
              e.each(n.split(""), function (e, t) {
                "?" == t
                  ? (f--, (d = e))
                  : l[t]
                  ? (c.push(new RegExp(l[t])),
                    null === u && (u = c.length - 1),
                    e < d && (p = c.length - 1))
                  : c.push(null);
              }),
              this.trigger("unmask").each(function () {
                function a() {
                  if (r.completed) {
                    for (var e = u; e <= p; e++)
                      if (c[e] && _[e] === g(e)) return;
                    r.completed.call(A);
                  }
                }
                function g(e) {
                  return e < r.placeholder.length
                    ? r.placeholder.charAt(e)
                    : r.placeholder.charAt(0);
                }
                function v(e) {
                  for (; ++e < f && !c[e]; );
                  return e;
                }
                function m(e) {
                  for (; --e >= 0 && !c[e]; );
                  return e;
                }
                function y(e, t) {
                  var n, o;
                  if (!(e < 0)) {
                    for (n = e, o = v(t); n < f; n++)
                      if (c[n]) {
                        if (!(o < f && c[n].test(_[o]))) break;
                        (_[n] = _[o]), (_[o] = g(o)), (o = v(o));
                      }
                    C(), A.caret(Math.max(u, e));
                  }
                }
                function b(e) {
                  var t, n, o, i;
                  for (t = e, n = g(e); t < f; t++)
                    if (c[t]) {
                      if (
                        ((o = v(t)),
                        (i = _[t]),
                        (_[t] = n),
                        !(o < f && c[o].test(i)))
                      )
                        break;
                      n = i;
                    }
                }
                function w(e) {
                  var t = A.val(),
                    n = A.caret();
                  if (h && h.length && h.length > t.length) {
                    for ($(!0); n.begin > 0 && !c[n.begin - 1]; ) n.begin--;
                    if (0 === n.begin)
                      for (; n.begin < u && !c[n.begin]; ) n.begin++;
                    A.caret(n.begin, n.begin);
                  } else {
                    var o = ($(!0), t.charAt(n.begin));
                    n.begin < f &&
                      (c[n.begin]
                        ? c[n.begin].test(o) && n.begin++
                        : (n.begin++, c[n.begin].test(o) && n.begin++)),
                      A.caret(n.begin, n.begin);
                  }
                  a();
                }
                function x(e) {
                  $(), A.val() != P && A.change();
                }
                function T(e) {
                  if (!A.prop("readonly")) {
                    var t,
                      n,
                      i,
                      s = e.which || e.keyCode;
                    (h = A.val()),
                      8 === s || 46 === s || (o && 127 === s)
                        ? ((t = A.caret()),
                          (n = t.begin),
                          (i = t.end),
                          i - n == 0 &&
                            ((n = 46 !== s ? m(n) : (i = v(n - 1))),
                            (i = 46 === s ? v(i) : i)),
                          k(n, i),
                          y(n, i - 1),
                          e.preventDefault())
                        : 13 === s
                        ? x.call(this, e)
                        : 27 === s &&
                          (A.val(P), A.caret(0, $()), e.preventDefault());
                  }
                }
                function S(t) {
                  if (!A.prop("readonly")) {
                    var n,
                      o,
                      i,
                      r = t.which || t.keyCode,
                      l = A.caret();
                    if (
                      !(t.ctrlKey || t.altKey || t.metaKey || r < 32) &&
                      r &&
                      13 !== r
                    ) {
                      if (
                        (l.end - l.begin != 0 &&
                          (k(l.begin, l.end), y(l.begin, l.end - 1)),
                        (n = v(l.begin - 1)) < f &&
                          ((o = String.fromCharCode(r)), c[n].test(o)))
                      ) {
                        if ((b(n), (_[n] = o), C(), (i = v(n)), s)) {
                          var d = function () {
                            e.proxy(e.fn.caret, A, i)();
                          };
                          setTimeout(d, 0);
                        } else A.caret(i);
                        l.begin <= p && a();
                      }
                      t.preventDefault();
                    }
                  }
                }
                function k(e, t) {
                  var n;
                  for (n = e; n < t && n < f; n++) c[n] && (_[n] = g(n));
                }
                function C() {
                  A.val(_.join(""));
                }
                function $(e) {
                  var t,
                    n,
                    o,
                    i = A.val(),
                    s = -1;
                  for (t = 0, o = 0; t < f; t++)
                    if (c[t]) {
                      for (_[t] = g(t); o++ < i.length; )
                        if (((n = i.charAt(o - 1)), c[t].test(n))) {
                          (_[t] = n), (s = t);
                          break;
                        }
                      if (o > i.length) {
                        k(t + 1, f);
                        break;
                      }
                    } else _[t] === i.charAt(o) && o++, t < d && (s = t);
                  return (
                    e
                      ? C()
                      : s + 1 < d
                      ? r.autoclear || _.join("") === E
                        ? (A.val() && A.val(""), k(0, f))
                        : C()
                      : (C(), A.val(A.val().substring(0, s + 1))),
                    d ? t : u
                  );
                }
                var A = e(this),
                  _ = e.map(n.split(""), function (e, t) {
                    if ("?" != e) return l[e] ? g(t) : e;
                  }),
                  E = _.join(""),
                  P = A.val();
                A.data(e.mask.dataName, function () {
                  return e
                    .map(_, function (e, t) {
                      return c[t] && e != g(t) ? e : null;
                    })
                    .join("");
                }),
                  A.one("unmask", function () {
                    A.off(".mask").removeData(e.mask.dataName);
                  })
                    .on("focus.mask", function () {
                      if (!A.prop("readonly")) {
                        clearTimeout(t);
                        var e;
                        (P = A.val()),
                          (e = $()),
                          (t = setTimeout(function () {
                            A.get(0) === document.activeElement &&
                              (C(),
                              e == n.replace("?", "").length
                                ? A.caret(0, e)
                                : A.caret(e));
                          }, 10));
                      }
                    })
                    .on("blur.mask", x)
                    .on("keydown.mask", T)
                    .on("keypress.mask", S)
                    .on("input.mask paste.mask", function () {
                      A.prop("readonly") ||
                        setTimeout(function () {
                          var e = $(!0);
                          A.caret(e), a();
                        }, 0);
                    }),
                  i && s && A.off("input.mask").on("input.mask", w),
                  $();
              })
            );
          },
        });
    });
  },
  function (e, t, n) {
    "use strict";
    $(".header__menu--show").on("click", function () {
      $(".header__burger-menu")
        .addClass("header__menu-show")
        .animate({ opacity: 1 }, 200),
        $("html").addClass("overflowToggle");
    }),
      $(".header__burger-close").on("click", function () {
        $(".header__burger-menu")
          .removeClass("header__menu-show")
          .animate({ opacity: 0 }, 200),
          $("html").removeClass("overflowToggle");
      });
  },
  function (e, t, n) {
    "use strict";
    var o = document.getElementsByClassName("acordeon"),
      i = "showDet",
      s = "pad1",
      r = void 0;
    !(function (e) {
      for (var t = 0; t < e.length; t++)
        e[t].addEventListener("click", function (e) {
          e.preventDefault();
          var t = this.children[1];
          this.parentElement.classList.contains(
            "programm__content-days--accordeon"
          ) && ((i = "showDet2"), (s = "pad2")),
            this.parentElement.classList.contains(
              "cosmetic__catalog-accordeon"
            ) && ((i = "showDet3"), (s = "pad2")),
            this.classList.contains(i)
              ? e.target.classList.contains("catalog-fancy")
                ? (e.target.click(), e.stopPropagation())
                : (this.classList.toggle(i),
                  this.children[1].classList.toggle(s),
                  (t.style.maxHeight = null))
              : (this.classList.add(i),
                this.children[1].classList.add(s),
                (t.style.maxHeight = t.scrollHeight + 20 + "px"),
                r &&
                  ((r.children[1].style.maxHeight = null),
                  r.classList.toggle(i, !1),
                  r.children[1].classList.toggle(s, !1)),
                (r = this),
                !1 === r.classList.contains(i) &&
                  (r.classList.add(i),
                  r.children[1].classList.add(s),
                  (t.style.maxHeight = t.scrollHeight + 20 + "px")));
        });
    })(o);
  },
  function (e, t, n) {
    "use strict";
    var o = n(0),
      i = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(o),
      s = (0, i.default)("#delivery-yes"),
      r = (0, i.default)("#delivery-no"),
      a = (0, i.default)(".cosmetic__cart-request--adress");
    s.change(function () {
      s.prop("checked") && a.addClass("show");
    }),
      r.click(function () {
        a.removeClass("show");
      });
  },
  function (e, t, n) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var i = n(0),
      s = o(i),
      r = n(18);
    o(r);
    (0, s.default)(".basic").fancySelect(),
      (0, s.default)(".popupSelect").fancySelect();
  },
  function (e, t, n) {
    "use strict";
    (function () {
      var e;
      (e = window.jQuery || window.Zepto || window.$),
        (e.fn.fancySelect = function (t) {
          var n, o;
          return (
            null == t && (t = {}),
            (o = e.extend(
              {
                forceiOS: !1,
                includeBlank: !1,
                optionTemplate: function (e) {
                  return e.text();
                },
                triggerTemplate: function (e) {
                  return e.text();
                },
              },
              t
            )),
            (n = !!navigator.userAgent.match(/iP(hone|od|ad)/i)),
            this.each(function () {
              var t, i, s, r, a, l, c;
              if (
                ((r = e(this)),
                !r.hasClass("select--enabled") && "SELECT" === r[0].tagName)
              )
                return (
                  r.addClass("select--enabled"),
                  r.css({
                    width: 1,
                    height: 1,
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: 0,
                  }),
                  r.wrap('<div class="select">'),
                  (c = r.parent()),
                  r.data("class") && c.addClass(r.data("class")),
                  c.append('<div class="select__btn">'),
                  (n && !o.forceiOS) || c.append('<ul class="select__list">'),
                  (a = c.find(".select__btn")),
                  (s = c.find(".select__list")),
                  (i = r.prop("select--disabled")),
                  i && c.addClass("select--disabled"),
                  (l = function () {
                    var e;
                    return (
                      (e = o.triggerTemplate(r.find(":selected"))), a.html(e)
                    );
                  }),
                  r.on("blur.fs", function () {
                    if (a.hasClass("select__btn--opened"))
                      return setTimeout(function () {
                        return a.trigger("close.fs");
                      }, 120);
                  }),
                  a.on("close.fs", function () {
                    return (
                      a.removeClass("select__btn--opened"),
                      s.removeClass("select__list--opened")
                    );
                  }),
                  a.on("click.fs", function () {
                    var t;
                    if (!i)
                      if (
                        (a.toggleClass("select__btn--opened"), n && !o.forceiOS)
                      ) {
                        if (a.hasClass("select__btn--opened")) return r.focus();
                      } else if (
                        (a.hasClass("select__btn--opened") &&
                          ((t = a.parent()),
                          t.offsetParent(),
                          t.offset().top +
                            t.outerHeight() +
                            s.outerHeight() +
                            20 >
                          e(window).height() + e(window).scrollTop()
                            ? s.addClass("select__list--overflow")
                            : s.removeClass("select__list--overflow")),
                        s.toggleClass("select__list--opened"),
                        !n)
                      )
                        return r.focus();
                  }),
                  r.on("enable", function () {
                    return (
                      r.prop("disabled", !1),
                      c.removeClass("select--disabled"),
                      (i = !1),
                      t()
                    );
                  }),
                  r.on("disable", function () {
                    return (
                      r.prop("disabled", !0),
                      c.addClass("select--disabled"),
                      (i = !0)
                    );
                  }),
                  r.on("change.fs", function (e) {
                    return e.originalEvent && e.originalEvent.isTrusted
                      ? e.stopPropagation()
                      : l();
                  }),
                  s.on("mousedown.fs", "li", function (t) {
                    var o;
                    return (
                      (o = e(this)),
                      r.val(o.data("raw-value")),
                      n || r.trigger("blur.fs").trigger("focus.fs"),
                      s.find(".selected").removeClass("selected"),
                      o.addClass("selected"),
                      a.addClass("select__btn--selected"),
                      r
                        .val(o.data("raw-value"))
                        .trigger("change.fs")
                        .trigger("blur.fs")
                        .trigger("focus.fs")
                    );
                  }),
                  (t = function () {
                    if ((l(), !n || o.forceiOS))
                      return (
                        r.find("option"),
                        r.find("option").each(function (t, n) {
                          var i;
                          if (
                            ((n = e(n)),
                            !n.prop("disabled") && (n.val() || o.includeBlank))
                          )
                            return (
                              (i = o.optionTemplate(n)),
                              n.prop("selected")
                                ? s.append(
                                    '<li data-raw-value="' +
                                      n.val() +
                                      '" class="selected">' +
                                      i +
                                      "</li>"
                                  )
                                : s.append(
                                    '<li data-raw-value="' +
                                      n.val() +
                                      '">' +
                                      i +
                                      "</li>"
                                  )
                            );
                        })
                      );
                  }),
                  r.on("update.fs", function () {
                    return c.find(".select__list").empty(), t();
                  }),
                  t()
                );
            })
          );
        });
    }.call(void 0),
      $(".select").fancySelect());
  },
  function (e, t, n) {
    "use strict";
    $(".upBtn").on("click", function () {
      $("body,html").animate({ scrollTop: 0 }, 500);
    }),
      $(document).ready(
        (function () {
          $(window).scroll(function () {
            $(this).scrollTop() >= 1e3
              ? $(".upBtn").fadeIn()
              : $(".upBtn").fadeOut();
          });
        })()
      );
  },
  function (e, t, n) {
    "use strict";
    $(function () {
      var e = $(".learn__tabs > div");
      e.hide().filter(":first").fadeIn(800, "linear"),
        $(".learn__descr-btns--wraper a")
          .click(function () {
            e.hide(),
              e.filter($(this).data("id")).fadeIn(800, "linear"),
              $(".learn__descr-btns--wraper a").removeClass("active"),
              $(".learn__descr-btns--wraper a").removeClass("learn__active"),
              $(this).addClass("active"),
              $(this).addClass("learn__active");
            var t = $(".tab1");
            t.hasClass("active")
              ? t.closest("div").addClass("learn__active")
              : t.closest("div").removeClass("learn__active");
            var n = $(".tab2");
            return (
              n.hasClass("active")
                ? n.closest("div").addClass("learn__active")
                : n.closest("div").removeClass("learn__active"),
              !1
            );
          })
          .filter(":first")
          .click();
    }),
      $(function () {
        var e = $(".price__tabs > div");
        e.hide().filter(":first").fadeIn(800, "linear"),
          $(".price__calc-tabBtn a")
            .click(function () {
              return (
                e.hide(),
                e.filter($(this).data("id")).fadeIn(800, "linear"),
                $(".price__calc-tabBtn a").removeClass("active"),
                $(".price__calc-tabBtn a").removeClass("price__tab-target"),
                $(this).addClass("active"),
                $(this).addClass("price__tab-target"),
                !1
              );
            })
            .filter(":first")
            .click();
      }),
      $(function () {
        var e = $(".programm__tabs--items > div");
        e.hide().filter(":first").fadeIn(800, "linear"),
          $(".programm__tabs-item")
            .click(function () {
              return (
                e.hide(),
                e.filter($(this).data("id")).fadeIn(800, "linear"),
                $(".programm__tabs-item").removeClass("active"),
                $(".programm__tabs-item").removeClass("programm__tabs-active"),
                $(this).addClass("active"),
                $(this).addClass("programm__tabs-active"),
                !1
              );
            })
            .filter(":first")
            .click();
      });
  },
  function (e, t, n) {
    "use strict";
    $(".papers__filter-item").on("click", function () {
      $(".papers__filter-item").removeClass("tagActive"),
        $(this).addClass("tagActive");
    });
  },
  function (e, t, n) {
    "use strict";
    $(".clear").click(function () {
      (o = []),
        $(".price__calc-total--js").html("0руб"),
        $(".price__calc-discount--js").html("0руб"),
        $(".price__calc-row input").each(function () {
          $(this).prop("checked", !1);
        });
    });
    var o = [];
    $(".costMas__calc-row input").each(function () {
      var e = 0;
      $(this).change(function () {
        (o = []),
          $(".costMas__calc-row input:checked").each(function () {
            o.push(Number($(this).val()));
          }),
          (function () {
            for (var t = 0; t < o.length; t++) e += o[t];
          })(),
          $(".price__calc-total--js").html(e + "руб");
        var t = e - (e / 100) * 15;
        (t = t.toFixed(1)),
          $(".price__calc-discount--js").html(t + "руб"),
          (e = 0);
      });
    });
    var i = 0;
    $("input:checkbox").on("change input", function () {
      $("input:checkbox[name='" + $(this).attr("name") + "']")
        .not(this)
        .prop("checked", !1);
    }),
      $(".price__calc-main input").on("change input", function () {
        (i = 0),
          $(".price__calc-main input:checked").each(function () {
            i += Number($(this).val());
          }),
          $(".price__calc-total--js").html(i + "руб");
        var e = i - (i / 100) * 15;
        (e = e.toFixed(1)), $(".price__calc-discount--js").html(e + "руб");
      });
  },
  function (e, t, n) {
    "use strict";
  },
  function (e, t, n) {
    "use strict";
    $(document).ready(function () {
      var e = document.location.href;
      $.each($(".header__menu a, .menu_mob a"), function () {
        this.href == e && $(this).addClass("menu--active");
      });
    });
  },
  function (e, t, n) {
    "use strict";
    $(".cosmetic__catalog-price--btn a").on("click", function (e) {
      e.stopPropagation();
      var t = $(this);
      $(".cosmetic__cart-item").each(function () {
        $(this).data("id") == t.data("id") && $(this).remove();
      }),
        $(".cosmetic__cart-items").append(
          ' <div class="cosmetic__cart-item" data-id="' +
            t.data("id") +
            '">\n    <div class="cosmetic__cart-item--title mtxt">\n        ' +
            t.data("title") +
            '\n    </div>\n    <div class="cosmetic__cart-item--content mtxt">\n        <p class="cosmetic__cart-count">' +
            t.data("count") +
            ' шт</p>\n        <p class="roze cosmetic__cart-price">' +
            t.data("price") +
            ' руб</p>\n    </div>\n    <div class="cosmetic__cart-delete">\n                                            <a>УДАЛИТЬ</a>\n                                        </div>\n</div>'
        ),
        o();
    }),
      $(".cosmetic__catalog-item").each(function () {
        var e = $(this).find(".cosmetic-btn--plus"),
          t = $(this).find(".cosmetic-btn--minus"),
          n = $(this).find(".cosmetic__catalog-price--main"),
          s = $(this).find(".cosmetic__catalog-price--btn a"),
          r = $(this).find(".cosmetic__catalog-price--btn a").data("price");
        e.on("click", function (e) {
          e.stopPropagation();
          var t = $(this).siblings("input").val(),
            a = $(this).data("id");
          $(this)
            .siblings("input")
            .val(++t),
            n.html(t * r + " <span>руб<span>"),
            s.data("price", t * r),
            s.data("count", t),
            i(a, t, r),
            o();
        }),
          t.on("click", function (e) {
            e.stopPropagation();
            var t = $(this).siblings("input").val(),
              a = $(this).data("id");
            t <= 1 ||
              ($(this)
                .siblings("input")
                .val(--t),
              n.html(t * r + " <span>руб<span>"),
              s.data("price", t * r),
              s.data("count", t),
              o(),
              i(a, t, r));
          });
      }),
      $("body").on("click", ".cosmetic__cart-delete", function (e) {
        $(this).closest(".cosmetic__cart-item").remove(), o();
      });
    var o = function () {
        var e = void 0,
          t = 0;
        $(".cosmetic__cart-price").each(function () {
          (e = parseFloat($(this).text(), 10)), (t += e);
        }),
          $(".cosmetic__cart-total--sum").html(t + " <span>руб</span>"),
          $(".cosmetic__cart-total input").val(t);
      },
      i = function (e, t, n) {
        $(".cosmetic__cart-item").each(function () {
          if ($(this).data("id") == e) {
            $(this)
              .find(".cosmetic__cart-count")
              .text(t + " шт");
            $(this)
              .find(".cosmetic__cart-price")
              .text(t * n + " руб");
          }
        });
      };
  },
  function (e, t, n) {
    "use strict";
    var o = n(27);
    (function (e) {
      return e && e.__esModule ? e : { default: e };
    })(o).default.polyfill(),
      $(document).ready(function () {
        $('a[href^="#"]').click(function () {
          if (
            location.pathname.replace(/^\//, "") ==
              this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
          ) {
            var e = $(this.hash);
            if (
              ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")),
              e.length)
            )
              return (
                $("html,body").animate({ scrollTop: e.offset().top }, 500), !1
              );
          }
        });
      });
  },
  function (e, t, n) {
    "use strict";
    var o =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    !(function () {
      function n() {
        function e(e, t) {
          (this.scrollLeft = e), (this.scrollTop = t);
        }
        function t(e) {
          return 0.5 * (1 - Math.cos(Math.PI * e));
        }
        function n(e) {
          if (
            null === e ||
            "object" !== (void 0 === e ? "undefined" : o(e)) ||
            void 0 === e.behavior ||
            "auto" === e.behavior ||
            "instant" === e.behavior
          )
            return !0;
          if (
            "object" === (void 0 === e ? "undefined" : o(e)) &&
            "smooth" === e.behavior
          )
            return !1;
          throw new TypeError(
            "behavior member of ScrollOptions " +
              e.behavior +
              " is not a valid value for enumeration ScrollBehavior."
          );
        }
        function i(e, t) {
          return "Y" === t
            ? e.clientHeight + v < e.scrollHeight
            : "X" === t
            ? e.clientWidth + v < e.scrollWidth
            : void 0;
        }
        function s(e, t) {
          var n = d.getComputedStyle(e, null)["overflow" + t];
          return "auto" === n || "scroll" === n;
        }
        function r(e) {
          var t = i(e, "Y") && s(e, "Y"),
            n = i(e, "X") && s(e, "X");
          return t || n;
        }
        function a(e) {
          for (; e !== u.body && !1 === r(e); ) e = e.parentNode || e.host;
          return e;
        }
        function l(e) {
          var n,
            o,
            i,
            s = g(),
            r = (s - e.startTime) / f;
          (r = r > 1 ? 1 : r),
            (n = t(r)),
            (o = e.startX + (e.x - e.startX) * n),
            (i = e.startY + (e.y - e.startY) * n),
            e.method.call(e.scrollable, o, i),
            (o === e.x && i === e.y) || d.requestAnimationFrame(l.bind(d, e));
        }
        function c(t, n, o) {
          var i,
            s,
            r,
            a,
            c = g();
          t === u.body
            ? ((i = d),
              (s = d.scrollX || d.pageXOffset),
              (r = d.scrollY || d.pageYOffset),
              (a = h.scroll))
            : ((i = t), (s = t.scrollLeft), (r = t.scrollTop), (a = e)),
            l({
              scrollable: i,
              method: a,
              startTime: c,
              startX: s,
              startY: r,
              x: n,
              y: o,
            });
        }
        var d = window,
          u = document;
        if (
          !(
            "scrollBehavior" in u.documentElement.style &&
            !0 !== d.__forceSmoothScrollPolyfill__
          )
        ) {
          var p = d.HTMLElement || d.Element,
            f = 468,
            h = {
              scroll: d.scroll || d.scrollTo,
              scrollBy: d.scrollBy,
              elementScroll: p.prototype.scroll || e,
              scrollIntoView: p.prototype.scrollIntoView,
            },
            g =
              d.performance && d.performance.now
                ? d.performance.now.bind(d.performance)
                : Date.now,
            v = (function (e) {
              var t = ["MSIE ", "Trident/", "Edge/"];
              return new RegExp(t.join("|")).test(e);
            })(d.navigator.userAgent)
              ? 1
              : 0;
          (d.scroll = d.scrollTo = function () {
            if (void 0 !== arguments[0])
              return !0 === n(arguments[0])
                ? void h.scroll.call(
                    d,
                    void 0 !== arguments[0].left
                      ? arguments[0].left
                      : "object" !== o(arguments[0])
                      ? arguments[0]
                      : d.scrollX || d.pageXOffset,
                    void 0 !== arguments[0].top
                      ? arguments[0].top
                      : void 0 !== arguments[1]
                      ? arguments[1]
                      : d.scrollY || d.pageYOffset
                  )
                : void c.call(
                    d,
                    u.body,
                    void 0 !== arguments[0].left
                      ? ~~arguments[0].left
                      : d.scrollX || d.pageXOffset,
                    void 0 !== arguments[0].top
                      ? ~~arguments[0].top
                      : d.scrollY || d.pageYOffset
                  );
          }),
            (d.scrollBy = function () {
              if (void 0 !== arguments[0])
                return n(arguments[0])
                  ? void h.scrollBy.call(
                      d,
                      void 0 !== arguments[0].left
                        ? arguments[0].left
                        : "object" !== o(arguments[0])
                        ? arguments[0]
                        : 0,
                      void 0 !== arguments[0].top
                        ? arguments[0].top
                        : void 0 !== arguments[1]
                        ? arguments[1]
                        : 0
                    )
                  : void c.call(
                      d,
                      u.body,
                      ~~arguments[0].left + (d.scrollX || d.pageXOffset),
                      ~~arguments[0].top + (d.scrollY || d.pageYOffset)
                    );
            }),
            (p.prototype.scroll = p.prototype.scrollTo = function () {
              if (void 0 !== arguments[0]) {
                if (!0 === n(arguments[0])) {
                  if (
                    "number" == typeof arguments[0] &&
                    void 0 === arguments[1]
                  )
                    throw new SyntaxError("Value could not be converted");
                  return void h.elementScroll.call(
                    this,
                    void 0 !== arguments[0].left
                      ? ~~arguments[0].left
                      : "object" !== o(arguments[0])
                      ? ~~arguments[0]
                      : this.scrollLeft,
                    void 0 !== arguments[0].top
                      ? ~~arguments[0].top
                      : void 0 !== arguments[1]
                      ? ~~arguments[1]
                      : this.scrollTop
                  );
                }
                var e = arguments[0].left,
                  t = arguments[0].top;
                c.call(
                  this,
                  this,
                  void 0 === e ? this.scrollLeft : ~~e,
                  void 0 === t ? this.scrollTop : ~~t
                );
              }
            }),
            (p.prototype.scrollBy = function () {
              if (void 0 !== arguments[0])
                return !0 === n(arguments[0])
                  ? void h.elementScroll.call(
                      this,
                      void 0 !== arguments[0].left
                        ? ~~arguments[0].left + this.scrollLeft
                        : ~~arguments[0] + this.scrollLeft,
                      void 0 !== arguments[0].top
                        ? ~~arguments[0].top + this.scrollTop
                        : ~~arguments[1] + this.scrollTop
                    )
                  : void this.scroll({
                      left: ~~arguments[0].left + this.scrollLeft,
                      top: ~~arguments[0].top + this.scrollTop,
                      behavior: arguments[0].behavior,
                    });
            }),
            (p.prototype.scrollIntoView = function () {
              if (!0 === n(arguments[0]))
                return void h.scrollIntoView.call(
                  this,
                  void 0 === arguments[0] || arguments[0]
                );
              var e = a(this),
                t = e.getBoundingClientRect(),
                o = this.getBoundingClientRect();
              e !== u.body
                ? (c.call(
                    this,
                    e,
                    e.scrollLeft + o.left - t.left,
                    e.scrollTop + o.top - t.top
                  ),
                  "fixed" !== d.getComputedStyle(e).position &&
                    d.scrollBy({
                      left: t.left,
                      top: t.top,
                      behavior: "smooth",
                    }))
                : d.scrollBy({ left: o.left, top: o.top, behavior: "smooth" });
            });
        }
      }
      "object" === o(t) && void 0 !== e ? (e.exports = { polyfill: n }) : n();
    })();
  },
  function (e, t, n) {
    "use strict";
    $(document).ready(
      (function () {
        navigator.userAgent.toLowerCase().match(/(ipad|iphone)/) &&
          $(".paper__item-descr").css("display", "block");
      })()
    );
  },
  function (e, t, n) {
    "use strict";
    $(window).on("load", function () {
      $("body").addClass("loaded_hiding"),
        window.setTimeout(function () {
          $("body").addClass("loaded"), $("body").removeClass("loaded_hiding");
        }, 500);
    });
  },
  function (e, t, n) {
    "use strict";
  },
]);
