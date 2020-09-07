!(function (e) {
  function t(i) {
    if (n[i]) return n[i].exports;
    var o = (n[i] = { i: i, l: !1, exports: {} });
    return e[i].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, i) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: i,
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
        i,
        o =
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
        "object" === o(e) && "object" === o(e.exports)
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
          var i,
            o,
            s = n.createElement("script");
          if (((s.text = e), t))
            for (i in Ae)
              (o = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                s.setAttribute(i, o);
          n.head.appendChild(s).parentNode.removeChild(s);
        }
        function l(e) {
          return null == e
            ? e + ""
            : "object" === (void 0 === e ? "undefined" : o(e)) ||
              "function" == typeof e
            ? ye[be.call(e)] || "object"
            : void 0 === e
            ? "undefined"
            : o(e);
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
            ? Pe.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n;
              })
            : t.nodeType
            ? Pe.grep(e, function (e) {
                return (e === t) !== n;
              })
            : "string" != typeof t
            ? Pe.grep(e, function (e) {
                return me.call(t, e) > -1 !== n;
              })
            : Pe.filter(t, e, n);
        }
        function p(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e;
        }
        function f(e) {
          var t = {};
          return (
            Pe.each(e.match(Ne) || [], function (e, n) {
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
        function v(e, t, n, i) {
          var o;
          try {
            e && ke((o = e.promise))
              ? o.call(e).done(t).fail(n)
              : e && ke((o = e.then))
              ? o.call(e, t, n)
              : t.apply(void 0, [e].slice(i));
          } catch (e) {
            n.apply(void 0, [e]);
          }
        }
        function m() {
          $e.removeEventListener("DOMContentLoaded", m),
            s.removeEventListener("load", m),
            Pe.ready();
        }
        function y(e, t) {
          return t.toUpperCase();
        }
        function b(e) {
          return e.replace(Re, "ms-").replace(We, y);
        }
        function w() {
          this.expando = Pe.expando + w.uid++;
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
          var i;
          if (void 0 === n && 1 === e.nodeType)
            if (
              ((i = "data-" + t.replace(Ve, "-$&").toLowerCase()),
              "string" == typeof (n = e.getAttribute(i)))
            ) {
              try {
                n = x(n);
              } catch (e) {}
              Ye.set(e, t, n);
            } else n = void 0;
          return n;
        }
        function S(e, t, n, i) {
          var o,
            s,
            r = 20,
            a = i
              ? function () {
                  return i.cur();
                }
              : function () {
                  return Pe.css(e, t, "");
                },
            l = a(),
            c = (n && n[3]) || (Pe.cssNumber[t] ? "" : "px"),
            d =
              e.nodeType &&
              (Pe.cssNumber[t] || ("px" !== c && +l)) &&
              Ze.exec(Pe.css(e, t));
          if (d && d[3] !== c) {
            for (l /= 2, c = c || d[3], d = +l || 1; r--; )
              Pe.style(e, t, d + c),
                (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (r = 0),
                (d /= s);
            (d *= 2), Pe.style(e, t, d + c), (n = n || []);
          }
          return (
            n &&
              ((d = +d || +l || 0),
              (o = n[1] ? d + (n[1] + 1) * n[2] : +n[2]),
              i && ((i.unit = c), (i.start = d), (i.end = o))),
            o
          );
        }
        function k(e) {
          var t,
            n = e.ownerDocument,
            i = e.nodeName,
            o = nt[i];
          return (
            o ||
            ((t = n.body.appendChild(n.createElement(i))),
            (o = Pe.css(t, "display")),
            t.parentNode.removeChild(t),
            "none" === o && (o = "block"),
            (nt[i] = o),
            o)
          );
        }
        function C(e, t) {
          for (var n, i, o = [], s = 0, r = e.length; s < r; s++)
            (i = e[s]),
              i.style &&
                ((n = i.style.display),
                t
                  ? ("none" === n &&
                      ((o[s] = Xe.get(i, "display") || null),
                      o[s] || (i.style.display = "")),
                    "" === i.style.display && tt(i) && (o[s] = k(i)))
                  : "none" !== n && ((o[s] = "none"), Xe.set(i, "display", n)));
          for (s = 0; s < r; s++) null != o[s] && (e[s].style.display = o[s]);
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
            void 0 === t || (t && d(e, t)) ? Pe.merge([e], n) : n
          );
        }
        function A(e, t) {
          for (var n = 0, i = e.length; n < i; n++)
            Xe.set(e[n], "globalEval", !t || Xe.get(t[n], "globalEval"));
        }
        function P(e, t, n, i, o) {
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
              if ("object" === l(s)) Pe.merge(f, s.nodeType ? [s] : s);
              else if (at.test(s)) {
                for (
                  r = r || p.appendChild(t.createElement("div")),
                    a = (ot.exec(s) || ["", ""])[1].toLowerCase(),
                    c = rt[a] || rt._default,
                    r.innerHTML = c[1] + Pe.htmlPrefilter(s) + c[2],
                    u = c[0];
                  u--;

                )
                  r = r.lastChild;
                Pe.merge(f, r.childNodes),
                  (r = p.firstChild),
                  (r.textContent = "");
              } else f.push(t.createTextNode(s));
          for (p.textContent = "", h = 0; (s = f[h++]); )
            if (i && Pe.inArray(s, i) > -1) o && o.push(s);
            else if (
              ((d = Je(s)), (r = $(p.appendChild(s), "script")), d && A(r), n)
            )
              for (u = 0; (s = r[u++]); ) st.test(s.type || "") && n.push(s);
          return p;
        }
        function E() {
          return !0;
        }
        function _() {
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
        function j(e, t, n, i, s, r) {
          var a, l;
          if ("object" === (void 0 === t ? "undefined" : o(t))) {
            "string" != typeof n && ((i = i || n), (n = void 0));
            for (l in t) j(e, l, n, i, t[l], r);
            return e;
          }
          if (
            (null == i && null == s
              ? ((s = n), (i = n = void 0))
              : null == s &&
                ("string" == typeof n
                  ? ((s = i), (i = void 0))
                  : ((s = i), (i = n), (n = void 0))),
            !1 === s)
          )
            s = _;
          else if (!s) return e;
          return (
            1 === r &&
              ((a = s),
              (s = function (e) {
                return Pe().off(e), a.apply(this, arguments);
              }),
              (s.guid = a.guid || (a.guid = Pe.guid++))),
            e.each(function () {
              Pe.event.add(this, t, s, i, n);
            })
          );
        }
        function H(e, t, n) {
          if (!n)
            return void (void 0 === Xe.get(e, t) && Pe.event.add(e, t, E));
          Xe.set(e, t, !1),
            Pe.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var i,
                  o,
                  s = Xe.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (s.length)
                    (Pe.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((s = he.call(arguments)),
                    Xe.set(this, t, s),
                    (i = n(this, t)),
                    this[t](),
                    (o = Xe.get(this, t)),
                    s !== o || i ? Xe.set(this, t, !1) : (o = {}),
                    s !== o)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), o.value
                    );
                } else
                  s.length &&
                    (Xe.set(this, t, {
                      value: Pe.event.trigger(
                        Pe.extend(s[0], Pe.Event.prototype),
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
            ? Pe(e).children("tbody")[0] || e
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
          var n, i, o, s, r, a, l;
          if (1 === t.nodeType) {
            if (Xe.hasData(e) && ((s = Xe.get(e)), (l = s.events))) {
              Xe.remove(t, "handle events");
              for (o in l)
                for (n = 0, i = l[o].length; n < i; n++)
                  Pe.event.add(t, o, l[o][n]);
            }
            Ye.hasData(e) &&
              ((r = Ye.access(e)), (a = Pe.extend({}, r)), Ye.set(t, a));
          }
        }
        function z(e, t) {
          var n = t.nodeName.toLowerCase();
          "input" === n && it.test(e.type)
            ? (t.checked = e.checked)
            : ("input" !== n && "textarea" !== n) ||
              (t.defaultValue = e.defaultValue);
        }
        function q(e, t, n, i) {
          t = ge(t);
          var o,
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
            return e.each(function (o) {
              var s = e.eq(o);
              g && (t[0] = h.call(this, o, s.html())), q(s, t, n, i);
            });
          if (
            p &&
            ((o = P(t, e[0].ownerDocument, !1, e, i)),
            (s = o.firstChild),
            1 === o.childNodes.length && (o = s),
            s || i)
          ) {
            for (r = Pe.map($(o, "script"), O), l = r.length; u < p; u++)
              (c = o),
                u !== f &&
                  ((c = Pe.clone(c, !0, !0)), l && Pe.merge(r, $(c, "script"))),
                n.call(e[u], c, u);
            if (l)
              for (
                d = r[r.length - 1].ownerDocument, Pe.map(r, I), u = 0;
                u < l;
                u++
              )
                (c = r[u]),
                  st.test(c.type || "") &&
                    !Xe.access(c, "globalEval") &&
                    Pe.contains(d, c) &&
                    (c.src && "module" !== (c.type || "").toLowerCase()
                      ? Pe._evalUrl &&
                        !c.noModule &&
                        Pe._evalUrl(
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
            var i, o = t ? Pe.filter(t, e) : e, s = 0;
            null != (i = o[s]);
            s++
          )
            n || 1 !== i.nodeType || Pe.cleanData($(i)),
              i.parentNode &&
                (n && Je(i) && A($(i, "script")), i.parentNode.removeChild(i));
          return e;
        }
        function R(e, t, n) {
          var i,
            o,
            s,
            r,
            a = e.style;
          return (
            (n = n || gt(e)),
            n &&
              ((r = n.getPropertyValue(t) || n[t]),
              "" !== r || Je(e) || (r = Pe.style(e, t)),
              !Se.pixelBoxStyles() &&
                ht.test(r) &&
                mt.test(t) &&
                ((i = a.width),
                (o = a.minWidth),
                (s = a.maxWidth),
                (a.minWidth = a.maxWidth = a.width = r),
                (r = n.width),
                (a.width = i),
                (a.minWidth = o),
                (a.maxWidth = s))),
            void 0 !== r ? r + "" : r
          );
        }
        function W(e, t) {
          return {
            get: function () {
              return e()
                ? void delete this.get
                : (this.get = t).apply(this, arguments);
            },
          };
        }
        function B(e) {
          for (var t = e[0].toUpperCase() + e.slice(1), n = yt.length; n--; )
            if ((e = yt[n] + t) in bt) return e;
        }
        function X(e) {
          var t = Pe.cssProps[e] || wt[e];
          return t || (e in bt ? e : (wt[e] = B(e) || e));
        }
        function Y(e, t, n) {
          var i = Ze.exec(t);
          return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
        }
        function U(e, t, n, i, o, s) {
          var r = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
          if (n === (i ? "border" : "content")) return 0;
          for (; r < 4; r += 2)
            "margin" === n && (l += Pe.css(e, n + Ge[r], !0, o)),
              i
                ? ("content" === n &&
                    (l -= Pe.css(e, "padding" + Ge[r], !0, o)),
                  "margin" !== n &&
                    (l -= Pe.css(e, "border" + Ge[r] + "Width", !0, o)))
                : ((l += Pe.css(e, "padding" + Ge[r], !0, o)),
                  "padding" !== n
                    ? (l += Pe.css(e, "border" + Ge[r] + "Width", !0, o))
                    : (a += Pe.css(e, "border" + Ge[r] + "Width", !0, o)));
          return (
            !i &&
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
          var i = gt(e),
            o = !Se.boxSizingReliable() || n,
            s = o && "border-box" === Pe.css(e, "boxSizing", !1, i),
            r = s,
            a = R(e, t, i),
            l = "offset" + t[0].toUpperCase() + t.slice(1);
          if (ht.test(a)) {
            if (!n) return a;
            a = "auto";
          }
          return (
            ((!Se.boxSizingReliable() && s) ||
              (!Se.reliableTrDimensions() && d(e, "tr")) ||
              "auto" === a ||
              (!parseFloat(a) && "inline" === Pe.css(e, "display", !1, i))) &&
              e.getClientRects().length &&
              ((s = "border-box" === Pe.css(e, "boxSizing", !1, i)),
              (r = l in e) && (a = e[l])),
            (a = parseFloat(a) || 0) +
              U(e, t, n || (s ? "border" : "content"), r, i, a) +
              "px"
          );
        }
        function Q(e, t, n, i, o) {
          return new Q.prototype.init(e, t, n, i, o);
        }
        function Z() {
          $t &&
            (!1 === $e.hidden && s.requestAnimationFrame
              ? s.requestAnimationFrame(Z)
              : s.setTimeout(Z, Pe.fx.interval),
            Pe.fx.tick());
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
            i = 0,
            o = { height: e };
          for (t = t ? 1 : 0; i < 4; i += 2 - t)
            (n = Ge[i]), (o["margin" + n] = o["padding" + n] = e);
          return t && (o.opacity = o.width = e), o;
        }
        function J(e, t, n) {
          for (
            var i,
              o = (ne.tweeners[t] || []).concat(ne.tweeners["*"]),
              s = 0,
              r = o.length;
            s < r;
            s++
          )
            if ((i = o[s].call(n, t, e))) return i;
        }
        function ee(e, t, n) {
          var i,
            o,
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
            ((r = Pe._queueHooks(e, "fx")),
            null == r.unqueued &&
              ((r.unqueued = 0),
              (a = r.empty.fire),
              (r.empty.fire = function () {
                r.unqueued || a();
              })),
            r.unqueued++,
            p.always(function () {
              p.always(function () {
                r.unqueued--, Pe.queue(e, "fx").length || r.empty.fire();
              });
            }));
          for (i in t)
            if (((o = t[i]), At.test(o))) {
              if (
                (delete t[i],
                (s = s || "toggle" === o),
                o === (g ? "hide" : "show"))
              ) {
                if ("show" !== o || !v || void 0 === v[i]) continue;
                g = !0;
              }
              f[i] = (v && v[i]) || Pe.style(e, i);
            }
          if ((l = !Pe.isEmptyObject(t)) || !Pe.isEmptyObject(f)) {
            u &&
              1 === e.nodeType &&
              ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
              (c = v && v.display),
              null == c && (c = Xe.get(e, "display")),
              (d = Pe.css(e, "display")),
              "none" === d &&
                (c
                  ? (d = c)
                  : (C([e], !0),
                    (c = e.style.display || c),
                    (d = Pe.css(e, "display")),
                    C([e]))),
              ("inline" === d || ("inline-block" === d && null != c)) &&
                "none" === Pe.css(e, "float") &&
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
            for (i in f)
              l ||
                (v
                  ? "hidden" in v && (g = v.hidden)
                  : (v = Xe.access(e, "fxshow", { display: c })),
                s && (v.hidden = !g),
                g && C([e], !0),
                p.done(function () {
                  g || C([e]), Xe.remove(e, "fxshow");
                  for (i in f) Pe.style(e, i, f[i]);
                })),
                (l = J(g ? v[i] : 0, i, p)),
                i in v ||
                  ((v[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
          }
        }
        function te(e, t) {
          var n, i, o, s, r;
          for (n in e)
            if (
              ((i = b(n)),
              (o = t[i]),
              (s = e[n]),
              Array.isArray(s) && ((o = s[1]), (s = e[n] = s[0])),
              n !== i && ((e[i] = s), delete e[n]),
              (r = Pe.cssHooks[i]) && "expand" in r)
            ) {
              (s = r.expand(s)), delete e[i];
              for (n in s) n in e || ((e[n] = s[n]), (t[n] = o));
            } else t[i] = o;
        }
        function ne(e, t, n) {
          var i,
            o,
            s = 0,
            r = ne.prefilters.length,
            a = Pe.Deferred().always(function () {
              delete l.elem;
            }),
            l = function () {
              if (o) return !1;
              for (
                var t = Ct || G(),
                  n = Math.max(0, c.startTime + c.duration - t),
                  i = n / c.duration || 0,
                  s = 1 - i,
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
              props: Pe.extend({}, t),
              opts: Pe.extend(
                !0,
                { specialEasing: {}, easing: Pe.easing._default },
                n
              ),
              originalProperties: t,
              originalOptions: n,
              startTime: Ct || G(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                var i = Pe.Tween(
                  e,
                  c.opts,
                  t,
                  n,
                  c.opts.specialEasing[t] || c.opts.easing
                );
                return c.tweens.push(i), i;
              },
              stop: function (t) {
                var n = 0,
                  i = t ? c.tweens.length : 0;
                if (o) return this;
                for (o = !0; n < i; n++) c.tweens[n].run(1);
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
            if ((i = ne.prefilters[s].call(c, e, d, c.opts)))
              return (
                ke(i.stop) &&
                  (Pe._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                i
              );
          return (
            Pe.map(d, J, c),
            ke(c.opts.start) && c.opts.start.call(e, c),
            c
              .progress(c.opts.progress)
              .done(c.opts.done, c.opts.complete)
              .fail(c.opts.fail)
              .always(c.opts.always),
            Pe.fx.timer(
              Pe.extend(l, { elem: e, anim: c, queue: c.opts.queue })
            ),
            c
          );
        }
        function ie(e) {
          return (e.match(Ne) || []).join(" ");
        }
        function oe(e) {
          return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function se(e) {
          return Array.isArray(e)
            ? e
            : "string" == typeof e
            ? e.match(Ne) || []
            : [];
        }
        function re(e, t, n, i) {
          var s;
          if (Array.isArray(t))
            Pe.each(t, function (t, s) {
              n || zt.test(e)
                ? i(e, s)
                : re(
                    e +
                      "[" +
                      ("object" === (void 0 === s ? "undefined" : o(s)) &&
                      null != s
                        ? t
                        : "") +
                      "]",
                    s,
                    n,
                    i
                  );
            });
          else if (n || "object" !== l(t)) i(e, t);
          else for (s in t) re(e + "[" + s + "]", t[s], n, i);
        }
        function ae(e) {
          return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var i,
              o = 0,
              s = t.toLowerCase().match(Ne) || [];
            if (ke(n))
              for (; (i = s[o++]); )
                "+" === i[0]
                  ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                  : (e[i] = e[i] || []).push(n);
          };
        }
        function le(e, t, n, i) {
          function o(a) {
            var l;
            return (
              (s[a] = !0),
              Pe.each(e[a] || [], function (e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || r || s[c]
                  ? r
                    ? !(l = c)
                    : void 0
                  : (t.dataTypes.unshift(c), o(c), !1);
              }),
              l
            );
          }
          var s = {},
            r = e === Gt;
          return o(t.dataTypes[0]) || (!s["*"] && o("*"));
        }
        function ce(e, t) {
          var n,
            i,
            o = Pe.ajaxSettings.flatOptions || {};
          for (n in t)
            void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
          return i && Pe.extend(!0, e, i), e;
        }
        function de(e, t, n) {
          for (var i, o, s, r, a = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
              void 0 === i &&
                (i = e.mimeType || t.getResponseHeader("Content-Type"));
          if (i)
            for (o in a)
              if (a[o] && a[o].test(i)) {
                l.unshift(o);
                break;
              }
          if (l[0] in n) s = l[0];
          else {
            for (o in n) {
              if (!l[0] || e.converters[o + " " + l[0]]) {
                s = o;
                break;
              }
              r || (r = o);
            }
            s = s || r;
          }
          if (s) return s !== l[0] && l.unshift(s), n[s];
        }
        function ue(e, t, n, i) {
          var o,
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
              !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
              (l = s),
              (s = d.shift()))
            )
              if ("*" === s) s = l;
              else if ("*" !== l && l !== s) {
                if (!(r = c[l + " " + s] || c["* " + s]))
                  for (o in c)
                    if (
                      ((a = o.split(" ")),
                      a[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]]))
                    ) {
                      !0 === r
                        ? (r = c[o])
                        : !0 !== c[o] && ((s = a[0]), d.unshift(a[1]));
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
          Pe = function e(t, n) {
            return new e.fn.init(t, n);
          };
        (Pe.fn = Pe.prototype = {
          jquery: "3.5.1",
          constructor: Pe,
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
            var t = Pe.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return Pe.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              Pe.map(this, function (t, n) {
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
              Pe.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              Pe.grep(this, function (e, t) {
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
          (Pe.extend = Pe.fn.extend = function () {
            var e,
              t,
              n,
              i,
              s,
              r,
              a = arguments[0] || {},
              l = 1,
              c = arguments.length,
              d = !1;
            for (
              "boolean" == typeof a && ((d = a), (a = arguments[l] || {}), l++),
                "object" === (void 0 === a ? "undefined" : o(a)) ||
                  ke(a) ||
                  (a = {}),
                l === c && ((a = this), l--);
              l < c;
              l++
            )
              if (null != (e = arguments[l]))
                for (t in e)
                  (i = e[t]),
                    "__proto__" !== t &&
                      a !== i &&
                      (d && i && (Pe.isPlainObject(i) || (s = Array.isArray(i)))
                        ? ((n = a[t]),
                          (r =
                            s && !Array.isArray(n)
                              ? []
                              : s || Pe.isPlainObject(n)
                              ? n
                              : {}),
                          (s = !1),
                          (a[t] = Pe.extend(d, r, i)))
                        : void 0 !== i && (a[t] = i));
            return a;
          }),
          Pe.extend({
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
                i = 0;
              if (c(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
              else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
              return e;
            },
            makeArray: function (e, t) {
              var n = t || [];
              return (
                null != e &&
                  (c(Object(e))
                    ? Pe.merge(n, "string" == typeof e ? [e] : e)
                    : ve.call(n, e)),
                n
              );
            },
            inArray: function (e, t, n) {
              return null == t ? -1 : me.call(t, e, n);
            },
            merge: function (e, t) {
              for (var n = +t.length, i = 0, o = e.length; i < n; i++)
                e[o++] = t[i];
              return (e.length = o), e;
            },
            grep: function (e, t, n) {
              for (var i = [], o = 0, s = e.length, r = !n; o < s; o++)
                !t(e[o], o) !== r && i.push(e[o]);
              return i;
            },
            map: function (e, t, n) {
              var i,
                o,
                s = 0,
                r = [];
              if (c(e))
                for (i = e.length; s < i; s++)
                  null != (o = t(e[s], s, n)) && r.push(o);
              else for (s in e) null != (o = t(e[s], s, n)) && r.push(o);
              return ge(r);
            },
            guid: 1,
            support: Se,
          }),
          "function" == typeof Symbol &&
            (Pe.fn[Symbol.iterator] = pe[Symbol.iterator]),
          Pe.each(
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
            function t(e, t, n, i) {
              var o,
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
              if (!i && (_(t), (t = t || L), j)) {
                if (11 !== h && (l = me.exec(e)))
                  if ((o = l[1])) {
                    if (9 === h) {
                      if (!(r = t.getElementById(o))) return n;
                      if (r.id === o) return n.push(r), n;
                    } else if (
                      f &&
                      (r = f.getElementById(o)) &&
                      I(t, r) &&
                      r.id === o
                    )
                      return n.push(r), n;
                  } else {
                    if (l[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                    if (
                      (o = l[3]) &&
                      w.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return G.apply(n, t.getElementsByClassName(o)), n;
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
              return $(e.replace(re, "$1"), t, n, i);
            }
            function n() {
              function e(n, i) {
                return (
                  t.push(n + " ") > x.cacheLength && delete e[t.shift()],
                  (e[n + " "] = i)
                );
              }
              var t = [];
              return e;
            }
            function i(e) {
              return (e[N] = !0), e;
            }
            function o(e) {
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
              for (var n = e.split("|"), i = n.length; i--; )
                x.attrHandle[n[i]] = t;
            }
            function r(e, t) {
              var n = t && e,
                i =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (i) return i;
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
              return i(function (t) {
                return (
                  (t = +t),
                  i(function (n, i) {
                    for (var o, s = e([], n.length, t), r = s.length; r--; )
                      n[(o = s[r])] && (n[o] = !(i[o] = n[o]));
                  })
                );
              });
            }
            function c(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            function d() {}
            function u(e) {
              for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
              return i;
            }
            function p(e, t, n) {
              var i = t.dir,
                o = t.next,
                s = o || i,
                r = n && "parentNode" === s,
                a = F++;
              return t.first
                ? function (t, n, o) {
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || r) return e(t, n, o);
                    return !1;
                  }
                : function (t, n, l) {
                    var c,
                      d,
                      u,
                      p = [q, a];
                    if (l) {
                      for (; (t = t[i]); )
                        if ((1 === t.nodeType || r) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[i]); )
                        if (1 === t.nodeType || r)
                          if (
                            ((u = t[N] || (t[N] = {})),
                            (d = u[t.uniqueID] || (u[t.uniqueID] = {})),
                            o && o === t.nodeName.toLowerCase())
                          )
                            t = t[i] || t;
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
                ? function (t, n, i) {
                    for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function h(e, n, i) {
              for (var o = 0, s = n.length; o < s; o++) t(e, n[o], i);
              return i;
            }
            function g(e, t, n, i, o) {
              for (
                var s, r = [], a = 0, l = e.length, c = null != t;
                a < l;
                a++
              )
                (s = e[a]) &&
                  ((n && !n(s, i, o)) || (r.push(s), c && t.push(a)));
              return r;
            }
            function v(e, t, n, o, s, r) {
              return (
                o && !o[N] && (o = v(o)),
                s && !s[N] && (s = v(s, r)),
                i(function (i, r, a, l) {
                  var c,
                    d,
                    u,
                    p = [],
                    f = [],
                    v = r.length,
                    m = i || h(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || (!i && t) ? m : g(m, p, e, a, l),
                    b = n ? (s || (i ? e : v || o) ? [] : r) : y;
                  if ((n && n(y, b, a, l), o))
                    for (c = g(b, f), o(c, [], a, l), d = c.length; d--; )
                      (u = c[d]) && (b[f[d]] = !(y[f[d]] = u));
                  if (i) {
                    if (s || e) {
                      if (s) {
                        for (c = [], d = b.length; d--; )
                          (u = b[d]) && c.push((y[d] = u));
                        s(null, (b = []), c, l);
                      }
                      for (d = b.length; d--; )
                        (u = b[d]) &&
                          (c = s ? J(i, u) : p[d]) > -1 &&
                          (i[c] = !(r[c] = u));
                    }
                  } else (b = g(b === r ? b.splice(v, b.length) : b)), s ? s(null, r, b, l) : G.apply(r, b);
                })
              );
            }
            function m(e) {
              for (
                var t,
                  n,
                  i,
                  o = e.length,
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
                    function (e, n, i) {
                      var o =
                        (!s && (i || n !== A)) ||
                        ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                      return (t = null), o;
                    },
                  ];
                a < o;
                a++
              )
                if ((n = x.relative[e[a].type])) d = [p(f(d), n)];
                else {
                  if (
                    ((n = x.filter[e[a].type].apply(null, e[a].matches)), n[N])
                  ) {
                    for (i = ++a; i < o && !x.relative[e[i].type]; i++);
                    return v(
                      a > 1 && f(d),
                      a > 1 &&
                        u(
                          e
                            .slice(0, a - 1)
                            .concat({ value: " " === e[a - 2].type ? "*" : "" })
                        ).replace(re, "$1"),
                      n,
                      a < i && m(e.slice(a, i)),
                      i < o && m((e = e.slice(i))),
                      i < o && u(e)
                    );
                  }
                  d.push(n);
                }
              return f(d);
            }
            function y(e, n) {
              var o = n.length > 0,
                s = e.length > 0,
                r = function (i, r, a, l, c) {
                  var d,
                    u,
                    p,
                    f = 0,
                    h = "0",
                    v = i && [],
                    m = [],
                    y = A,
                    b = i || (s && x.find.TAG("*", c)),
                    w = (q += null == y ? 1 : Math.random() || 0.1),
                    T = b.length;
                  for (
                    c && (A = r == L || r || c);
                    h !== T && null != (d = b[h]);
                    h++
                  ) {
                    if (s && d) {
                      for (
                        u = 0, r || d.ownerDocument == L || (_(d), (a = !j));
                        (p = e[u++]);

                      )
                        if (p(d, r || L, a)) {
                          l.push(d);
                          break;
                        }
                      c && (q = w);
                    }
                    o && ((d = !p && d) && f--, i && v.push(d));
                  }
                  if (((f += h), o && h !== f)) {
                    for (u = 0; (p = n[u++]); ) p(v, m, r, a);
                    if (i) {
                      if (f > 0)
                        for (; h--; ) v[h] || m[h] || (m[h] = Q.call(l));
                      m = g(m);
                    }
                    G.apply(l, m),
                      c &&
                        !i &&
                        m.length > 0 &&
                        f + n.length > 1 &&
                        t.uniqueSort(l);
                  }
                  return c && ((q = w), (A = y)), v;
                };
              return o ? i(r) : r;
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
              P,
              E,
              _,
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
              W = n(),
              B = n(),
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
                for (var n = 0, i = e.length; n < i; n++)
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
              ie =
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
              oe =
                ":(" +
                ne +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                ie +
                ")*)|.*)\\)|)",
              se = new RegExp(te + "+", "g"),
              re = new RegExp(
                "^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$",
                "g"
              ),
              ae = new RegExp("^" + te + "*," + te + "*"),
              le = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
              ce = new RegExp(te + "|>"),
              de = new RegExp(oe),
              ue = new RegExp("^" + ne + "$"),
              pe = {
                ID: new RegExp("^#(" + ne + ")"),
                CLASS: new RegExp("^\\.(" + ne + ")"),
                TAG: new RegExp("^(" + ne + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
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
                _();
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
                      for (var n = e.length, i = 0; (e[n++] = t[i++]); );
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
              (_ = t.setDocument = function (e) {
                var t,
                  n,
                  i = e ? e.ownerDocument || e : z;
                return i != L && 9 === i.nodeType && i.documentElement
                  ? ((L = i),
                    (D = L.documentElement),
                    (j = !S(L)),
                    z != L &&
                      (n = L.defaultView) &&
                      n.top !== n &&
                      (n.addEventListener
                        ? n.addEventListener("unload", Se, !1)
                        : n.attachEvent && n.attachEvent("onunload", Se)),
                    (w.scope = o(function (e) {
                      return (
                        D.appendChild(e).appendChild(L.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (w.attributes = o(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (w.getElementsByTagName = o(function (e) {
                      return (
                        e.appendChild(L.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (w.getElementsByClassName = ve.test(
                      L.getElementsByClassName
                    )),
                    (w.getById = o(function (e) {
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
                              i,
                              o,
                              s = t.getElementById(e);
                            if (s) {
                              if (
                                (n = s.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [s];
                              for (
                                o = t.getElementsByName(e), i = 0;
                                (s = o[i++]);

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
                            i = [],
                            o = 0,
                            s = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = s[o++]); )
                              1 === n.nodeType && i.push(n);
                            return i;
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
                      (o(function (e) {
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
                      o(function (e) {
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
                      o(function (e) {
                        (w.disconnectedMatch = O.call(e, "*")),
                          O.call(e, "[s!='']:x"),
                          M.push("!=", oe);
                      }),
                    (H = H.length && new RegExp(H.join("|"))),
                    (M = M.length && new RegExp(M.join("|"))),
                    (t = ve.test(D.compareDocumentPosition)),
                    (I =
                      t || ve.test(D.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              i = t && t.parentNode;
                            return (
                              e === i ||
                              !(
                                !i ||
                                1 !== i.nodeType ||
                                !(n.contains
                                  ? n.contains(i)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(i))
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
                                : P
                                ? J(P, e) - J(P, t)
                                : 0
                              : 4 & n
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (E = !0), 0;
                          var n,
                            i = 0,
                            o = e.parentNode,
                            s = t.parentNode,
                            a = [e],
                            l = [t];
                          if (!o || !s)
                            return e == L
                              ? -1
                              : t == L
                              ? 1
                              : o
                              ? -1
                              : s
                              ? 1
                              : P
                              ? J(P, e) - J(P, t)
                              : 0;
                          if (o === s) return r(e, t);
                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                          for (n = t; (n = n.parentNode); ) l.unshift(n);
                          for (; a[i] === l[i]; ) i++;
                          return i
                            ? r(a[i], l[i])
                            : a[i] == z
                            ? -1
                            : l[i] == z
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
                  (_(e),
                  w.matchesSelector &&
                    j &&
                    !X[n + " "] &&
                    (!M || !M.test(n)) &&
                    (!H || !H.test(n)))
                )
                  try {
                    var i = O.call(e, n);
                    if (
                      i ||
                      w.disconnectedMatch ||
                      (e.document && 11 !== e.document.nodeType)
                    )
                      return i;
                  } catch (e) {
                    X(n, !0);
                  }
                return t(n, L, null, [e]).length > 0;
              }),
              (t.contains = function (e, t) {
                return (e.ownerDocument || e) != L && _(e), I(e, t);
              }),
              (t.attr = function (e, t) {
                (e.ownerDocument || e) != L && _(e);
                var n = x.attrHandle[t.toLowerCase()],
                  i =
                    n && U.call(x.attrHandle, t.toLowerCase())
                      ? n(e, t, !j)
                      : void 0;
                return void 0 !== i
                  ? i
                  : w.attributes || !j
                  ? e.getAttribute(t)
                  : (i = e.getAttributeNode(t)) && i.specified
                  ? i.value
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
                  i = 0,
                  o = 0;
                if (
                  ((E = !w.detectDuplicates),
                  (P = !w.sortStable && e.slice(0)),
                  e.sort(Y),
                  E)
                ) {
                  for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
                  for (; i--; ) e.splice(n[i], 1);
                }
                return (P = null), e;
              }),
              (T = t.getText = function (e) {
                var t,
                  n = "",
                  i = 0,
                  o = e.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
                  } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[i++]); ) n += T(t);
                return n;
              }),
              (x = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
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
                  ATTR: function (e, n, i) {
                    return function (o) {
                      var s = t.attr(o, e);
                      return null == s
                        ? "!=" === n
                        : !n ||
                            ((s += ""),
                            "=" === n
                              ? s === i
                              : "!=" === n
                              ? s !== i
                              : "^=" === n
                              ? i && 0 === s.indexOf(i)
                              : "*=" === n
                              ? i && s.indexOf(i) > -1
                              : "$=" === n
                              ? i && s.slice(-i.length) === i
                              : "~=" === n
                              ? (" " + s.replace(se, " ") + " ").indexOf(i) > -1
                              : "|=" === n &&
                                (s === i ||
                                  s.slice(0, i.length + 1) === i + "-"));
                    };
                  },
                  CHILD: function (e, t, n, i, o) {
                    var s = "nth" !== e.slice(0, 3),
                      r = "last" !== e.slice(-4),
                      a = "of-type" === t;
                    return 1 === i && 0 === o
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
                            return (b -= o) === i || (b % i == 0 && b / i >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, n) {
                    var o,
                      s =
                        x.pseudos[e] ||
                        x.setFilters[e.toLowerCase()] ||
                        t.error("unsupported pseudo: " + e);
                    return s[N]
                      ? s(n)
                      : s.length > 1
                      ? ((o = [e, e, "", n]),
                        x.setFilters.hasOwnProperty(e.toLowerCase())
                          ? i(function (e, t) {
                              for (var i, o = s(e, n), r = o.length; r--; )
                                (i = J(e, o[r])), (e[i] = !(t[i] = o[r]));
                            })
                          : function (e) {
                              return s(e, 0, o);
                            })
                      : s;
                  },
                },
                pseudos: {
                  not: i(function (e) {
                    var t = [],
                      n = [],
                      o = C(e.replace(re, "$1"));
                    return o[N]
                      ? i(function (e, t, n, i) {
                          for (
                            var s, r = o(e, null, i, []), a = e.length;
                            a--;

                          )
                            (s = r[a]) && (e[a] = !(t[a] = s));
                        })
                      : function (e, i, s) {
                          return (
                            (t[0] = e),
                            o(t, null, s, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: i(function (e) {
                    return function (n) {
                      return t(e, n).length > 0;
                    };
                  }),
                  contains: i(function (e) {
                    return (
                      (e = e.replace(be, we)),
                      function (t) {
                        return (t.textContent || T(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: i(function (e) {
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
                    for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                      e.push(i);
                    return e;
                  }),
                  gt: l(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
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
                var i,
                  o,
                  s,
                  r,
                  a,
                  l,
                  c,
                  d = W[e + " "];
                if (d) return n ? 0 : d.slice(0);
                for (a = e, l = [], c = x.preFilter; a; ) {
                  (i && !(o = ae.exec(a))) ||
                    (o && (a = a.slice(o[0].length) || a), l.push((s = []))),
                    (i = !1),
                    (o = le.exec(a)) &&
                      ((i = o.shift()),
                      s.push({ value: i, type: o[0].replace(re, " ") }),
                      (a = a.slice(i.length)));
                  for (r in x.filter)
                    !(o = pe[r].exec(a)) ||
                      (c[r] && !(o = c[r](o))) ||
                      ((i = o.shift()),
                      s.push({ value: i, type: r, matches: o }),
                      (a = a.slice(i.length)));
                  if (!i) break;
                }
                return n ? a.length : a ? t.error(e) : W(e, l).slice(0);
              }),
              (C = t.compile = function (e, t) {
                var n,
                  i = [],
                  o = [],
                  s = B[e + " "];
                if (!s) {
                  for (t || (t = k(e)), n = t.length; n--; )
                    (s = m(t[n])), s[N] ? i.push(s) : o.push(s);
                  (s = B(e, y(o, i))), (s.selector = e);
                }
                return s;
              }),
              ($ = t.select = function (e, t, n, i) {
                var o,
                  s,
                  r,
                  a,
                  l,
                  d = "function" == typeof e && e,
                  p = !i && k((e = d.selector || e));
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
                    o = pe.needsContext.test(e) ? 0 : s.length;
                    o-- && ((r = s[o]), !x.relative[(a = r.type)]);

                  )
                    if (
                      (l = x.find[a]) &&
                      (i = l(
                        r.matches[0].replace(be, we),
                        (ye.test(s[0].type) && c(t.parentNode)) || t
                      ))
                    ) {
                      if ((s.splice(o, 1), !(e = i.length && u(s))))
                        return G.apply(n, i), n;
                      break;
                    }
                }
                return (
                  (d || C(e, p))(
                    i,
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
              _(),
              (w.sortDetached = o(function (e) {
                return (
                  1 & e.compareDocumentPosition(L.createElement("fieldset"))
                );
              })),
              o(function (e) {
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
                o(function (e) {
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
              o(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                s(ee, function (e, t, n) {
                  var i;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (i = e.getAttributeNode(t)) && i.specified
                      ? i.value
                      : null;
                }),
              t
            );
          })(s);
        (Pe.find = Ee),
          (Pe.expr = Ee.selectors),
          (Pe.expr[":"] = Pe.expr.pseudos),
          (Pe.uniqueSort = Pe.unique = Ee.uniqueSort),
          (Pe.text = Ee.getText),
          (Pe.isXMLDoc = Ee.isXML),
          (Pe.contains = Ee.contains),
          (Pe.escapeSelector = Ee.escape);
        var _e = function (e, t, n) {
            for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (o && Pe(e).is(n)) break;
                i.push(e);
              }
            return i;
          },
          Le = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
          De = Pe.expr.match.needsContext,
          je = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        (Pe.filter = function (e, t, n) {
          var i = t[0];
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType
              ? Pe.find.matchesSelector(i, e)
                ? [i]
                : []
              : Pe.find.matches(
                  e,
                  Pe.grep(t, function (e) {
                    return 1 === e.nodeType;
                  })
                )
          );
        }),
          Pe.fn.extend({
            find: function (e) {
              var t,
                n,
                i = this.length,
                o = this;
              if ("string" != typeof e)
                return this.pushStack(
                  Pe(e).filter(function () {
                    for (t = 0; t < i; t++)
                      if (Pe.contains(o[t], this)) return !0;
                  })
                );
              for (n = this.pushStack([]), t = 0; t < i; t++)
                Pe.find(e, o[t], n);
              return i > 1 ? Pe.uniqueSort(n) : n;
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
                "string" == typeof e && De.test(e) ? Pe(e) : e || [],
                !1
              ).length;
            },
          });
        var He,
          Me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((Pe.fn.init = function (e, t, n) {
          var i, o;
          if (!e) return this;
          if (((n = n || He), "string" == typeof e)) {
            if (
              !(i =
                "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                  ? [null, e, null]
                  : Me.exec(e)) ||
              (!i[1] && t)
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
            if (i[1]) {
              if (
                ((t = t instanceof Pe ? t[0] : t),
                Pe.merge(
                  this,
                  Pe.parseHTML(
                    i[1],
                    t && t.nodeType ? t.ownerDocument || t : $e,
                    !0
                  )
                ),
                je.test(i[1]) && Pe.isPlainObject(t))
              )
                for (i in t) ke(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
              return this;
            }
            return (
              (o = $e.getElementById(i[2])),
              o && ((this[0] = o), (this.length = 1)),
              this
            );
          }
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : ke(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(Pe)
            : Pe.makeArray(e, this);
        }).prototype = Pe.fn),
          (He = Pe($e));
        var Oe = /^(?:parents|prev(?:Until|All))/,
          Ie = { children: !0, contents: !0, next: !0, prev: !0 };
        Pe.fn.extend({
          has: function (e) {
            var t = Pe(e, this),
              n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++)
                if (Pe.contains(this, t[e])) return !0;
            });
          },
          closest: function (e, t) {
            var n,
              i = 0,
              o = this.length,
              s = [],
              r = "string" != typeof e && Pe(e);
            if (!De.test(e))
              for (; i < o; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (r
                      ? r.index(n) > -1
                      : 1 === n.nodeType && Pe.find.matchesSelector(n, e))
                  ) {
                    s.push(n);
                    break;
                  }
            return this.pushStack(s.length > 1 ? Pe.uniqueSort(s) : s);
          },
          index: function (e) {
            return e
              ? "string" == typeof e
                ? me.call(Pe(e), this[0])
                : me.call(this, e.jquery ? e[0] : e)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function (e, t) {
            return this.pushStack(
              Pe.uniqueSort(Pe.merge(this.get(), Pe(e, t)))
            );
          },
          addBack: function (e) {
            return this.add(
              null == e ? this.prevObject : this.prevObject.filter(e)
            );
          },
        }),
          Pe.each(
            {
              parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function (e) {
                return _e(e, "parentNode");
              },
              parentsUntil: function (e, t, n) {
                return _e(e, "parentNode", n);
              },
              next: function (e) {
                return p(e, "nextSibling");
              },
              prev: function (e) {
                return p(e, "previousSibling");
              },
              nextAll: function (e) {
                return _e(e, "nextSibling");
              },
              prevAll: function (e) {
                return _e(e, "previousSibling");
              },
              nextUntil: function (e, t, n) {
                return _e(e, "nextSibling", n);
              },
              prevUntil: function (e, t, n) {
                return _e(e, "previousSibling", n);
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
                    Pe.merge([], e.childNodes));
              },
            },
            function (e, t) {
              Pe.fn[e] = function (n, i) {
                var o = Pe.map(this, t, n);
                return (
                  "Until" !== e.slice(-5) && (i = n),
                  i && "string" == typeof i && (o = Pe.filter(i, o)),
                  this.length > 1 &&
                    (Ie[e] || Pe.uniqueSort(o), Oe.test(e) && o.reverse()),
                  this.pushStack(o)
                );
              };
            }
          );
        var Ne = /[^\x20\t\r\n\f]+/g;
        (Pe.Callbacks = function (e) {
          e = "string" == typeof e ? f(e) : Pe.extend({}, e);
          var t,
            n,
            i,
            o,
            s = [],
            r = [],
            a = -1,
            c = function () {
              for (o = o || e.once, i = t = !0; r.length; a = -1)
                for (n = r.shift(); ++a < s.length; )
                  !1 === s[a].apply(n[0], n[1]) &&
                    e.stopOnFalse &&
                    ((a = s.length), (n = !1));
              e.memory || (n = !1), (t = !1), o && (s = n ? [] : "");
            },
            d = {
              add: function () {
                return (
                  s &&
                    (n && !t && ((a = s.length - 1), r.push(n)),
                    (function t(n) {
                      Pe.each(n, function (n, i) {
                        ke(i)
                          ? (e.unique && d.has(i)) || s.push(i)
                          : i && i.length && "string" !== l(i) && t(i);
                      });
                    })(arguments),
                    n && !t && c()),
                  this
                );
              },
              remove: function () {
                return (
                  Pe.each(arguments, function (e, t) {
                    for (var n; (n = Pe.inArray(t, s, n)) > -1; )
                      s.splice(n, 1), n <= a && a--;
                  }),
                  this
                );
              },
              has: function (e) {
                return e ? Pe.inArray(e, s) > -1 : s.length > 0;
              },
              empty: function () {
                return s && (s = []), this;
              },
              disable: function () {
                return (o = r = []), (s = n = ""), this;
              },
              disabled: function () {
                return !s;
              },
              lock: function () {
                return (o = r = []), n || t || (s = n = ""), this;
              },
              locked: function () {
                return !!o;
              },
              fireWith: function (e, n) {
                return (
                  o ||
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
                return !!i;
              },
            };
          return d;
        }),
          Pe.extend({
            Deferred: function (e) {
              var t = [
                  [
                    "notify",
                    "progress",
                    Pe.Callbacks("memory"),
                    Pe.Callbacks("memory"),
                    2,
                  ],
                  [
                    "resolve",
                    "done",
                    Pe.Callbacks("once memory"),
                    Pe.Callbacks("once memory"),
                    0,
                    "resolved",
                  ],
                  [
                    "reject",
                    "fail",
                    Pe.Callbacks("once memory"),
                    Pe.Callbacks("once memory"),
                    1,
                    "rejected",
                  ],
                ],
                n = "pending",
                i = {
                  state: function () {
                    return n;
                  },
                  always: function () {
                    return r.done(arguments).fail(arguments), this;
                  },
                  catch: function (e) {
                    return i.then(null, e);
                  },
                  pipe: function () {
                    var e = arguments;
                    return Pe.Deferred(function (n) {
                      Pe.each(t, function (t, i) {
                        var o = ke(e[i[4]]) && e[i[4]];
                        r[i[1]](function () {
                          var e = o && o.apply(this, arguments);
                          e && ke(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[i[0] + "With"](this, o ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    }).promise();
                  },
                  then: function (e, n, i) {
                    function r(e, t, n, i) {
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
                                  (void 0 === s ? "undefined" : o(s)) ||
                                  "function" == typeof s) &&
                                s.then),
                                ke(d)
                                  ? i
                                    ? d.call(s, r(a, t, h, i), r(a, t, g, i))
                                    : (a++,
                                      d.call(
                                        s,
                                        r(a, t, h, i),
                                        r(a, t, g, i),
                                        r(a, t, h, t.notifyWith)
                                      ))
                                  : (n !== h && ((l = void 0), (c = [s])),
                                    (i || t.resolveWith)(l, c));
                            }
                          },
                          u = i
                            ? d
                            : function () {
                                try {
                                  d();
                                } catch (i) {
                                  Pe.Deferred.exceptionHook &&
                                    Pe.Deferred.exceptionHook(i, u.stackTrace),
                                    e + 1 >= a &&
                                      (n !== g && ((l = void 0), (c = [i])),
                                      t.rejectWith(l, c));
                                }
                              };
                        e
                          ? u()
                          : (Pe.Deferred.getStackHook &&
                              (u.stackTrace = Pe.Deferred.getStackHook()),
                            s.setTimeout(u));
                      };
                    }
                    var a = 0;
                    return Pe.Deferred(function (o) {
                      t[0][3].add(r(0, o, ke(i) ? i : h, o.notifyWith)),
                        t[1][3].add(r(0, o, ke(e) ? e : h)),
                        t[2][3].add(r(0, o, ke(n) ? n : g));
                    }).promise();
                  },
                  promise: function (e) {
                    return null != e ? Pe.extend(e, i) : i;
                  },
                },
                r = {};
              return (
                Pe.each(t, function (e, o) {
                  var s = o[2],
                    a = o[5];
                  (i[o[1]] = s.add),
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
                    s.add(o[3].fire),
                    (r[o[0]] = function () {
                      return (
                        r[o[0] + "With"](this === r ? void 0 : this, arguments),
                        this
                      );
                    }),
                    (r[o[0] + "With"] = s.fireWith);
                }),
                i.promise(r),
                e && e.call(r, r),
                r
              );
            },
            when: function (e) {
              var t = arguments.length,
                n = t,
                i = Array(n),
                o = he.call(arguments),
                s = Pe.Deferred(),
                r = function (e) {
                  return function (n) {
                    (i[e] = this),
                      (o[e] = arguments.length > 1 ? he.call(arguments) : n),
                      --t || s.resolveWith(i, o);
                  };
                };
              if (
                t <= 1 &&
                (v(e, s.done(r(n)).resolve, s.reject, !t),
                "pending" === s.state() || ke(o[n] && o[n].then))
              )
                return s.then();
              for (; n--; ) v(o[n], r(n), s.reject);
              return s.promise();
            },
          });
        var ze = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (Pe.Deferred.exceptionHook = function (e, t) {
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
          (Pe.readyException = function (e) {
            s.setTimeout(function () {
              throw e;
            });
          });
        var qe = Pe.Deferred();
        (Pe.fn.ready = function (e) {
          return (
            qe.then(e).catch(function (e) {
              Pe.readyException(e);
            }),
            this
          );
        }),
          Pe.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
              (!0 === e ? --Pe.readyWait : Pe.isReady) ||
                ((Pe.isReady = !0),
                (!0 !== e && --Pe.readyWait > 0) || qe.resolveWith($e, [Pe]));
            },
          }),
          (Pe.ready.then = qe.then),
          "complete" === $e.readyState ||
          ("loading" !== $e.readyState && !$e.documentElement.doScroll)
            ? s.setTimeout(Pe.ready)
            : ($e.addEventListener("DOMContentLoaded", m),
              s.addEventListener("load", m));
        var Fe = function e(t, n, i, o, s, r, a) {
            var c = 0,
              d = t.length,
              u = null == i;
            if ("object" === l(i)) {
              s = !0;
              for (c in i) e(t, n, c, i[c], !0, r, a);
            } else if (
              void 0 !== o &&
              ((s = !0),
              ke(o) || (a = !0),
              u &&
                (a
                  ? (n.call(t, o), (n = null))
                  : ((u = n),
                    (n = function (e, t, n) {
                      return u.call(Pe(e), n);
                    }))),
              n)
            )
              for (; c < d; c++)
                n(t[c], i, a ? o : o.call(t[c], c, n(t[c], i)));
            return s ? t : u ? n.call(t) : d ? n(t[0], i) : r;
          },
          Re = /^-ms-/,
          We = /-([a-z])/g,
          Be = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
        (w.uid = 1),
          (w.prototype = {
            cache: function (e) {
              var t = e[this.expando];
              return (
                t ||
                  ((t = {}),
                  Be(e) &&
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
              var i,
                o = this.cache(e);
              if ("string" == typeof t) o[b(t)] = n;
              else for (i in t) o[b(i)] = t[i];
              return o;
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
                i = e[this.expando];
              if (void 0 !== i) {
                if (void 0 !== t) {
                  Array.isArray(t)
                    ? (t = t.map(b))
                    : ((t = b(t)), (t = t in i ? [t] : t.match(Ne) || [])),
                    (n = t.length);
                  for (; n--; ) delete i[t[n]];
                }
                (void 0 === t || Pe.isEmptyObject(i)) &&
                  (e.nodeType
                    ? (e[this.expando] = void 0)
                    : delete e[this.expando]);
              }
            },
            hasData: function (e) {
              var t = e[this.expando];
              return void 0 !== t && !Pe.isEmptyObject(t);
            },
          });
        var Xe = new w(),
          Ye = new w(),
          Ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          Ve = /[A-Z]/g;
        Pe.extend({
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
          Pe.fn.extend({
            data: function (e, t) {
              var n,
                i,
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
                      ((i = a[n].name),
                      0 === i.indexOf("data-") &&
                        ((i = b(i.slice(5))), T(r, i, s[i])));
                  Xe.set(r, "hasDataAttrs", !0);
                }
                return s;
              }
              return "object" === (void 0 === e ? "undefined" : o(e))
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
          Pe.extend({
            queue: function (e, t, n) {
              var i;
              if (e)
                return (
                  (t = (t || "fx") + "queue"),
                  (i = Xe.get(e, t)),
                  n &&
                    (!i || Array.isArray(n)
                      ? (i = Xe.access(e, t, Pe.makeArray(n)))
                      : i.push(n)),
                  i || []
                );
            },
            dequeue: function (e, t) {
              t = t || "fx";
              var n = Pe.queue(e, t),
                i = n.length,
                o = n.shift(),
                s = Pe._queueHooks(e, t),
                r = function () {
                  Pe.dequeue(e, t);
                };
              "inprogress" === o && ((o = n.shift()), i--),
                o &&
                  ("fx" === t && n.unshift("inprogress"),
                  delete s.stop,
                  o.call(e, r, s)),
                !i && s && s.empty.fire();
            },
            _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return (
                Xe.get(e, n) ||
                Xe.access(e, n, {
                  empty: Pe.Callbacks("once memory").add(function () {
                    Xe.remove(e, [t + "queue", n]);
                  }),
                })
              );
            },
          }),
          Pe.fn.extend({
            queue: function (e, t) {
              var n = 2;
              return (
                "string" != typeof e && ((t = e), (e = "fx"), n--),
                arguments.length < n
                  ? Pe.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function () {
                      var n = Pe.queue(this, e, t);
                      Pe._queueHooks(this, e),
                        "fx" === e &&
                          "inprogress" !== n[0] &&
                          Pe.dequeue(this, e);
                    })
              );
            },
            dequeue: function (e) {
              return this.each(function () {
                Pe.dequeue(this, e);
              });
            },
            clearQueue: function (e) {
              return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
              var n,
                i = 1,
                o = Pe.Deferred(),
                s = this,
                r = this.length,
                a = function () {
                  --i || o.resolveWith(s, [s]);
                };
              for (
                "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
                r--;

              )
                (n = Xe.get(s[r], e + "queueHooks")) &&
                  n.empty &&
                  (i++, n.empty.add(a));
              return a(), o.promise(t);
            },
          });
        var Qe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          Ze = new RegExp("^(?:([+-])=|)(" + Qe + ")([a-z%]*)$", "i"),
          Ge = ["Top", "Right", "Bottom", "Left"],
          Ke = $e.documentElement,
          Je = function (e) {
            return Pe.contains(e.ownerDocument, e);
          },
          et = { composed: !0 };
        Ke.getRootNode &&
          (Je = function (e) {
            return (
              Pe.contains(e.ownerDocument, e) ||
              e.getRootNode(et) === e.ownerDocument
            );
          });
        var tt = function (e, t) {
            return (
              (e = t || e),
              "none" === e.style.display ||
                ("" === e.style.display &&
                  Je(e) &&
                  "none" === Pe.css(e, "display"))
            );
          },
          nt = {};
        Pe.fn.extend({
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
                  tt(this) ? Pe(this).show() : Pe(this).hide();
                });
          },
        });
        var it = /^(?:checkbox|radio)$/i,
          ot = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
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
        (Pe.event = {
          global: {},
          add: function (e, t, n, i, o) {
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
            if (Be(e))
              for (
                n.handler && ((s = n), (n = s.handler), (o = s.selector)),
                  o && Pe.find.matchesSelector(Ke, o),
                  n.guid || (n.guid = Pe.guid++),
                  (l = v.events) || (l = v.events = Object.create(null)),
                  (r = v.handle) ||
                    (r = v.handle = function (t) {
                      return void 0 !== Pe && Pe.event.triggered !== t.type
                        ? Pe.event.dispatch.apply(e, arguments)
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
                    ((u = Pe.event.special[f] || {}),
                    (f = (o ? u.delegateType : u.bindType) || f),
                    (u = Pe.event.special[f] || {}),
                    (d = Pe.extend(
                      {
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && Pe.expr.match.needsContext.test(o),
                        namespace: h.join("."),
                      },
                      s
                    )),
                    (p = l[f]) ||
                      ((p = l[f] = []),
                      (p.delegateCount = 0),
                      (u.setup && !1 !== u.setup.call(e, i, h, r)) ||
                        (e.addEventListener && e.addEventListener(f, r))),
                    u.add &&
                      (u.add.call(e, d),
                      d.handler.guid || (d.handler.guid = n.guid)),
                    o ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                    (Pe.event.global[f] = !0));
          },
          remove: function (e, t, n, i, o) {
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
                    u = Pe.event.special[f] || {},
                      f = (i ? u.delegateType : u.bindType) || f,
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
                      (!o && g !== d.origType) ||
                        (n && n.guid !== d.guid) ||
                        (a && !a.test(d.namespace)) ||
                        (i &&
                          i !== d.selector &&
                          ("**" !== i || !d.selector)) ||
                        (p.splice(s, 1),
                        d.selector && p.delegateCount--,
                        u.remove && u.remove.call(e, d));
                  r &&
                    !p.length &&
                    ((u.teardown && !1 !== u.teardown.call(e, h, v.handle)) ||
                      Pe.removeEvent(e, f, v.handle),
                    delete l[f]);
                } else for (f in l) Pe.event.remove(e, f + t[c], n, i, !0);
              Pe.isEmptyObject(l) && Xe.remove(e, "handle events");
            }
          },
          dispatch: function (e) {
            var t,
              n,
              i,
              o,
              s,
              r,
              a = new Array(arguments.length),
              l = Pe.event.fix(e),
              c = (Xe.get(this, "events") || Object.create(null))[l.type] || [],
              d = Pe.event.special[l.type] || {};
            for (a[0] = l, t = 1; t < arguments.length; t++)
              a[t] = arguments[t];
            if (
              ((l.delegateTarget = this),
              !d.preDispatch || !1 !== d.preDispatch.call(this, l))
            ) {
              for (
                r = Pe.event.handlers.call(this, l, c), t = 0;
                (o = r[t++]) && !l.isPropagationStopped();

              )
                for (
                  l.currentTarget = o.elem, n = 0;
                  (s = o.handlers[n++]) && !l.isImmediatePropagationStopped();

                )
                  (l.rnamespace &&
                    !1 !== s.namespace &&
                    !l.rnamespace.test(s.namespace)) ||
                    ((l.handleObj = s),
                    (l.data = s.data),
                    void 0 !==
                      (i = (
                        (Pe.event.special[s.origType] || {}).handle || s.handler
                      ).apply(o.elem, a)) &&
                      !1 === (l.result = i) &&
                      (l.preventDefault(), l.stopPropagation()));
              return d.postDispatch && d.postDispatch.call(this, l), l.result;
            }
          },
          handlers: function (e, t) {
            var n,
              i,
              o,
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
                    (i = t[n]),
                      (o = i.selector + " "),
                      void 0 === r[o] &&
                        (r[o] = i.needsContext
                          ? Pe(o, this).index(c) > -1
                          : Pe.find(o, this, null, [c]).length),
                      r[o] && s.push(i);
                  s.length && a.push({ elem: c, handlers: s });
                }
            return (
              (c = this),
              l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
              a
            );
          },
          addProp: function (e, t) {
            Object.defineProperty(Pe.Event.prototype, e, {
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
            return e[Pe.expando] ? e : new Pe.Event(e);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function (e) {
                var t = this || e;
                return (
                  it.test(t.type) &&
                    t.click &&
                    d(t, "input") &&
                    H(t, "click", E),
                  !1
                );
              },
              trigger: function (e) {
                var t = this || e;
                return (
                  it.test(t.type) && t.click && d(t, "input") && H(t, "click"),
                  !0
                );
              },
              _default: function (e) {
                var t = e.target;
                return (
                  (it.test(t.type) &&
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
          (Pe.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
          (Pe.Event = function (e, t) {
            if (!(this instanceof Pe.Event)) return new Pe.Event(e, t);
            e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? E
                    : _),
                (this.target =
                  e.target && 3 === e.target.nodeType
                    ? e.target.parentNode
                    : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && Pe.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[Pe.expando] = !0);
          }),
          (Pe.Event.prototype = {
            constructor: Pe.Event,
            isDefaultPrevented: _,
            isPropagationStopped: _,
            isImmediatePropagationStopped: _,
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
          Pe.each(
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
            Pe.event.addProp
          ),
          Pe.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            Pe.event.special[e] = {
              setup: function () {
                return H(this, e, L), !1;
              },
              trigger: function () {
                return H(this, e), !0;
              },
              delegateType: t,
            };
          }),
          Pe.each(
            {
              mouseenter: "mouseover",
              mouseleave: "mouseout",
              pointerenter: "pointerover",
              pointerleave: "pointerout",
            },
            function (e, t) {
              Pe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                  var n,
                    i = this,
                    o = e.relatedTarget,
                    s = e.handleObj;
                  return (
                    (o && (o === i || Pe.contains(i, o))) ||
                      ((e.type = s.origType),
                      (n = s.handler.apply(this, arguments)),
                      (e.type = t)),
                    n
                  );
                },
              };
            }
          ),
          Pe.fn.extend({
            on: function (e, t, n, i) {
              return j(this, e, t, n, i);
            },
            one: function (e, t, n, i) {
              return j(this, e, t, n, i, 1);
            },
            off: function (e, t, n) {
              var i, s;
              if (e && e.preventDefault && e.handleObj)
                return (
                  (i = e.handleObj),
                  Pe(e.delegateTarget).off(
                    i.namespace ? i.origType + "." + i.namespace : i.origType,
                    i.selector,
                    i.handler
                  ),
                  this
                );
              if ("object" === (void 0 === e ? "undefined" : o(e))) {
                for (s in e) this.off(s, t, e[s]);
                return this;
              }
              return (
                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = _),
                this.each(function () {
                  Pe.event.remove(this, e, n, t);
                })
              );
            },
          });
        var ut = /<script|<style|<link/i,
          pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
          ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        Pe.extend({
          htmlPrefilter: function (e) {
            return e;
          },
          clone: function (e, t, n) {
            var i,
              o,
              s,
              r,
              a = e.cloneNode(!0),
              l = Je(e);
            if (
              !(
                Se.noCloneChecked ||
                (1 !== e.nodeType && 11 !== e.nodeType) ||
                Pe.isXMLDoc(e)
              )
            )
              for (r = $(a), s = $(e), i = 0, o = s.length; i < o; i++)
                z(s[i], r[i]);
            if (t)
              if (n)
                for (
                  s = s || $(e), r = r || $(a), i = 0, o = s.length;
                  i < o;
                  i++
                )
                  N(s[i], r[i]);
              else N(e, a);
            return (
              (r = $(a, "script")),
              r.length > 0 && A(r, !l && $(e, "script")),
              a
            );
          },
          cleanData: function (e) {
            for (
              var t, n, i, o = Pe.event.special, s = 0;
              void 0 !== (n = e[s]);
              s++
            )
              if (Be(n)) {
                if ((t = n[Xe.expando])) {
                  if (t.events)
                    for (i in t.events)
                      o[i]
                        ? Pe.event.remove(n, i)
                        : Pe.removeEvent(n, i, t.handle);
                  n[Xe.expando] = void 0;
                }
                n[Ye.expando] && (n[Ye.expando] = void 0);
              }
          },
        }),
          Pe.fn.extend({
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
                    ? Pe.text(this)
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
                  (Pe.cleanData($(e, !1)), (e.textContent = ""));
              return this;
            },
            clone: function (e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function () {
                  return Pe.clone(this, e, t);
                })
              );
            },
            html: function (e) {
              return Fe(
                this,
                function (e) {
                  var t = this[0] || {},
                    n = 0,
                    i = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if (
                    "string" == typeof e &&
                    !ut.test(e) &&
                    !rt[(ot.exec(e) || ["", ""])[1].toLowerCase()]
                  ) {
                    e = Pe.htmlPrefilter(e);
                    try {
                      for (; n < i; n++)
                        (t = this[n] || {}),
                          1 === t.nodeType &&
                            (Pe.cleanData($(t, !1)), (t.innerHTML = e));
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
                  Pe.inArray(this, e) < 0 &&
                    (Pe.cleanData($(this)), n && n.replaceChild(t, this));
                },
                e
              );
            },
          }),
          Pe.each(
            {
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith",
            },
            function (e, t) {
              Pe.fn[e] = function (e) {
                for (
                  var n, i = [], o = Pe(e), s = o.length - 1, r = 0;
                  r <= s;
                  r++
                )
                  (n = r === s ? this : this.clone(!0)),
                    Pe(o[r])[t](n),
                    ve.apply(i, n.get());
                return this.pushStack(i);
              };
            }
          );
        var ht = new RegExp("^(" + Qe + ")(?!px)[a-z%]+$", "i"),
          gt = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = s), t.getComputedStyle(e);
          },
          vt = function (e, t, n) {
            var i,
              o,
              s = {};
            for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
            i = n.call(e);
            for (o in t) e.style[o] = s[o];
            return i;
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
                (i = 36 === t(e.width)),
                (d.style.position = "absolute"),
                (o = 12 === t(d.offsetWidth / 3)),
                Ke.removeChild(c),
                (d = null);
            }
          }
          function t(e) {
            return Math.round(parseFloat(e));
          }
          var n,
            i,
            o,
            r,
            a,
            l,
            c = $e.createElement("div"),
            d = $e.createElement("div");
          d.style &&
            ((d.style.backgroundClip = "content-box"),
            (d.cloneNode(!0).style.backgroundClip = ""),
            (Se.clearCloneStyle = "content-box" === d.style.backgroundClip),
            Pe.extend(Se, {
              boxSizingReliable: function () {
                return e(), i;
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
                return e(), o;
              },
              reliableTrDimensions: function () {
                var e, t, n, i;
                return (
                  null == a &&
                    ((e = $e.createElement("table")),
                    (t = $e.createElement("tr")),
                    (n = $e.createElement("div")),
                    (e.style.cssText = "position:absolute;left:-11111px"),
                    (t.style.height = "1px"),
                    (n.style.height = "9px"),
                    Ke.appendChild(e).appendChild(t).appendChild(n),
                    (i = s.getComputedStyle(t)),
                    (a = parseInt(i.height) > 3),
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
        Pe.extend({
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
          style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var s,
                r,
                a,
                l = b(t),
                c = Tt.test(t),
                d = e.style;
              if (
                (c || (t = X(l)),
                (a = Pe.cssHooks[t] || Pe.cssHooks[l]),
                void 0 === n)
              )
                return a && "get" in a && void 0 !== (s = a.get(e, !1, i))
                  ? s
                  : d[t];
              (r = void 0 === n ? "undefined" : o(n)),
                "string" === r &&
                  (s = Ze.exec(n)) &&
                  s[1] &&
                  ((n = S(e, t, s)), (r = "number")),
                null != n &&
                  n === n &&
                  ("number" !== r ||
                    c ||
                    (n += (s && s[3]) || (Pe.cssNumber[l] ? "" : "px")),
                  Se.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (d[t] = "inherit"),
                  (a && "set" in a && void 0 === (n = a.set(e, n, i))) ||
                    (c ? d.setProperty(t, n) : (d[t] = n)));
            }
          },
          css: function (e, t, n, i) {
            var o,
              s,
              r,
              a = b(t);
            return (
              Tt.test(t) || (t = X(a)),
              (r = Pe.cssHooks[t] || Pe.cssHooks[a]),
              r && "get" in r && (o = r.get(e, !0, n)),
              void 0 === o && (o = R(e, t, i)),
              "normal" === o && t in kt && (o = kt[t]),
              "" === n || n
                ? ((s = parseFloat(o)), !0 === n || isFinite(s) ? s || 0 : o)
                : o
            );
          },
        }),
          Pe.each(["height", "width"], function (e, t) {
            Pe.cssHooks[t] = {
              get: function (e, n, i) {
                if (n)
                  return !xt.test(Pe.css(e, "display")) ||
                    (e.getClientRects().length &&
                      e.getBoundingClientRect().width)
                    ? V(e, t, i)
                    : vt(e, St, function () {
                        return V(e, t, i);
                      });
              },
              set: function (e, n, i) {
                var o,
                  s = gt(e),
                  r = !Se.scrollboxSize() && "absolute" === s.position,
                  a = r || i,
                  l = a && "border-box" === Pe.css(e, "boxSizing", !1, s),
                  c = i ? U(e, t, i, l, s) : 0;
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
                    (o = Ze.exec(n)) &&
                    "px" !== (o[3] || "px") &&
                    ((e.style[t] = n), (n = Pe.css(e, t))),
                  Y(e, n, c)
                );
              },
            };
          }),
          (Pe.cssHooks.marginLeft = W(Se.reliableMarginLeft, function (e, t) {
            if (t)
              return (
                (parseFloat(R(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                    vt(e, { marginLeft: 0 }, function () {
                      return e.getBoundingClientRect().left;
                    })) + "px"
              );
          })),
          Pe.each({ margin: "", padding: "", border: "Width" }, function (
            e,
            t
          ) {
            (Pe.cssHooks[e + t] = {
              expand: function (n) {
                for (
                  var i = 0,
                    o = {},
                    s = "string" == typeof n ? n.split(" ") : [n];
                  i < 4;
                  i++
                )
                  o[e + Ge[i] + t] = s[i] || s[i - 2] || s[0];
                return o;
              },
            }),
              "margin" !== e && (Pe.cssHooks[e + t].set = Y);
          }),
          Pe.fn.extend({
            css: function (e, t) {
              return Fe(
                this,
                function (e, t, n) {
                  var i,
                    o,
                    s = {},
                    r = 0;
                  if (Array.isArray(t)) {
                    for (i = gt(e), o = t.length; r < o; r++)
                      s[t[r]] = Pe.css(e, t[r], !1, i);
                    return s;
                  }
                  return void 0 !== n ? Pe.style(e, t, n) : Pe.css(e, t);
                },
                e,
                t,
                arguments.length > 1
              );
            },
          }),
          (Pe.Tween = Q),
          (Q.prototype = {
            constructor: Q,
            init: function (e, t, n, i, o, s) {
              (this.elem = e),
                (this.prop = n),
                (this.easing = o || Pe.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = i),
                (this.unit = s || (Pe.cssNumber[n] ? "" : "px"));
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
                  ? (this.pos = t = Pe.easing[this.easing](
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
                  : ((t = Pe.css(e.elem, e.prop, "")),
                    t && "auto" !== t ? t : 0);
              },
              set: function (e) {
                Pe.fx.step[e.prop]
                  ? Pe.fx.step[e.prop](e)
                  : 1 !== e.elem.nodeType ||
                    (!Pe.cssHooks[e.prop] && null == e.elem.style[X(e.prop)])
                  ? (e.elem[e.prop] = e.now)
                  : Pe.style(e.elem, e.prop, e.now + e.unit);
              },
            },
          }),
          (Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
          (Pe.easing = {
            linear: function (e) {
              return e;
            },
            swing: function (e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
          }),
          (Pe.fx = Q.prototype.init),
          (Pe.fx.step = {});
        var Ct,
          $t,
          At = /^(?:toggle|show|hide)$/,
          Pt = /queueHooks$/;
        (Pe.Animation = Pe.extend(ne, {
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
            for (var n, i = 0, o = e.length; i < o; i++)
              (n = e[i]),
                (ne.tweeners[n] = ne.tweeners[n] || []),
                ne.tweeners[n].unshift(t);
          },
          prefilters: [ee],
          prefilter: function (e, t) {
            t ? ne.prefilters.unshift(e) : ne.prefilters.push(e);
          },
        })),
          (Pe.speed = function (e, t, n) {
            var i =
              e && "object" === (void 0 === e ? "undefined" : o(e))
                ? Pe.extend({}, e)
                : {
                    complete: n || (!n && t) || (ke(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !ke(t) && t),
                  };
            return (
              Pe.fx.off
                ? (i.duration = 0)
                : "number" != typeof i.duration &&
                  (i.duration in Pe.fx.speeds
                    ? (i.duration = Pe.fx.speeds[i.duration])
                    : (i.duration = Pe.fx.speeds._default)),
              (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
              (i.old = i.complete),
              (i.complete = function () {
                ke(i.old) && i.old.call(this),
                  i.queue && Pe.dequeue(this, i.queue);
              }),
              i
            );
          }),
          Pe.fn.extend({
            fadeTo: function (e, t, n, i) {
              return this.filter(tt)
                .css("opacity", 0)
                .show()
                .end()
                .animate({ opacity: t }, e, n, i);
            },
            animate: function (e, t, n, i) {
              var o = Pe.isEmptyObject(e),
                s = Pe.speed(t, n, i),
                r = function () {
                  var t = ne(this, Pe.extend({}, e), s);
                  (o || Xe.get(this, "finish")) && t.stop(!0);
                };
              return (
                (r.finish = r),
                o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
              );
            },
            stop: function (e, t, n) {
              var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n);
              };
              return (
                "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                t && this.queue(e || "fx", []),
                this.each(function () {
                  var t = !0,
                    o = null != e && e + "queueHooks",
                    s = Pe.timers,
                    r = Xe.get(this);
                  if (o) r[o] && r[o].stop && i(r[o]);
                  else for (o in r) r[o] && r[o].stop && Pt.test(o) && i(r[o]);
                  for (o = s.length; o--; )
                    s[o].elem !== this ||
                      (null != e && s[o].queue !== e) ||
                      (s[o].anim.stop(n), (t = !1), s.splice(o, 1));
                  (!t && n) || Pe.dequeue(this, e);
                })
              );
            },
            finish: function (e) {
              return (
                !1 !== e && (e = e || "fx"),
                this.each(function () {
                  var t,
                    n = Xe.get(this),
                    i = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    s = Pe.timers,
                    r = i ? i.length : 0;
                  for (
                    n.finish = !0,
                      Pe.queue(this, e, []),
                      o && o.stop && o.stop.call(this, !0),
                      t = s.length;
                    t--;

                  )
                    s[t].elem === this &&
                      s[t].queue === e &&
                      (s[t].anim.stop(!0), s.splice(t, 1));
                  for (t = 0; t < r; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                  delete n.finish;
                })
              );
            },
          }),
          Pe.each(["toggle", "show", "hide"], function (e, t) {
            var n = Pe.fn[t];
            Pe.fn[t] = function (e, i, o) {
              return null == e || "boolean" == typeof e
                ? n.apply(this, arguments)
                : this.animate(K(t, !0), e, i, o);
            };
          }),
          Pe.each(
            {
              slideDown: K("show"),
              slideUp: K("hide"),
              slideToggle: K("toggle"),
              fadeIn: { opacity: "show" },
              fadeOut: { opacity: "hide" },
              fadeToggle: { opacity: "toggle" },
            },
            function (e, t) {
              Pe.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i);
              };
            }
          ),
          (Pe.timers = []),
          (Pe.fx.tick = function () {
            var e,
              t = 0,
              n = Pe.timers;
            for (Ct = Date.now(); t < n.length; t++)
              (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || Pe.fx.stop(), (Ct = void 0);
          }),
          (Pe.fx.timer = function (e) {
            Pe.timers.push(e), Pe.fx.start();
          }),
          (Pe.fx.interval = 13),
          (Pe.fx.start = function () {
            $t || (($t = !0), Z());
          }),
          (Pe.fx.stop = function () {
            $t = null;
          }),
          (Pe.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (Pe.fn.delay = function (e, t) {
            return (
              (e = Pe.fx ? Pe.fx.speeds[e] || e : e),
              (t = t || "fx"),
              this.queue(t, function (t, n) {
                var i = s.setTimeout(t, e);
                n.stop = function () {
                  s.clearTimeout(i);
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
          _t = Pe.expr.attrHandle;
        Pe.fn.extend({
          attr: function (e, t) {
            return Fe(this, Pe.attr, e, t, arguments.length > 1);
          },
          removeAttr: function (e) {
            return this.each(function () {
              Pe.removeAttr(this, e);
            });
          },
        }),
          Pe.extend({
            attr: function (e, t, n) {
              var i,
                o,
                s = e.nodeType;
              if (3 !== s && 8 !== s && 2 !== s)
                return void 0 === e.getAttribute
                  ? Pe.prop(e, t, n)
                  : ((1 === s && Pe.isXMLDoc(e)) ||
                      (o =
                        Pe.attrHooks[t.toLowerCase()] ||
                        (Pe.expr.match.bool.test(t) ? Et : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void Pe.removeAttr(e, t)
                        : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                        ? i
                        : (e.setAttribute(t, n + ""), n)
                      : o && "get" in o && null !== (i = o.get(e, t))
                      ? i
                      : ((i = Pe.find.attr(e, t)), null == i ? void 0 : i));
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
                i = 0,
                o = t && t.match(Ne);
              if (o && 1 === e.nodeType)
                for (; (n = o[i++]); ) e.removeAttribute(n);
            },
          }),
          (Et = {
            set: function (e, t, n) {
              return !1 === t ? Pe.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
          }),
          Pe.each(Pe.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = _t[t] || Pe.find.attr;
            _t[t] = function (e, t, i) {
              var o,
                s,
                r = t.toLowerCase();
              return (
                i ||
                  ((s = _t[r]),
                  (_t[r] = o),
                  (o = null != n(e, t, i) ? r : null),
                  (_t[r] = s)),
                o
              );
            };
          });
        var Lt = /^(?:input|select|textarea|button)$/i,
          Dt = /^(?:a|area)$/i;
        Pe.fn.extend({
          prop: function (e, t) {
            return Fe(this, Pe.prop, e, t, arguments.length > 1);
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[Pe.propFix[e] || e];
            });
          },
        }),
          Pe.extend({
            prop: function (e, t, n) {
              var i,
                o,
                s = e.nodeType;
              if (3 !== s && 8 !== s && 2 !== s)
                return (
                  (1 === s && Pe.isXMLDoc(e)) ||
                    ((t = Pe.propFix[t] || t), (o = Pe.propHooks[t])),
                  void 0 !== n
                    ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                      ? i
                      : (e[t] = n)
                    : o && "get" in o && null !== (i = o.get(e, t))
                    ? i
                    : e[t]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (e) {
                  var t = Pe.find.attr(e, "tabindex");
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
            (Pe.propHooks.selected = {
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
          Pe.each(
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
              Pe.propFix[this.toLowerCase()] = this;
            }
          ),
          Pe.fn.extend({
            addClass: function (e) {
              var t,
                n,
                i,
                o,
                s,
                r,
                a,
                l = 0;
              if (ke(e))
                return this.each(function (t) {
                  Pe(this).addClass(e.call(this, t, oe(this)));
                });
              if (((t = se(e)), t.length))
                for (; (n = this[l++]); )
                  if (
                    ((o = oe(n)), (i = 1 === n.nodeType && " " + ie(o) + " "))
                  ) {
                    for (r = 0; (s = t[r++]); )
                      i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                    (a = ie(i)), o !== a && n.setAttribute("class", a);
                  }
              return this;
            },
            removeClass: function (e) {
              var t,
                n,
                i,
                o,
                s,
                r,
                a,
                l = 0;
              if (ke(e))
                return this.each(function (t) {
                  Pe(this).removeClass(e.call(this, t, oe(this)));
                });
              if (!arguments.length) return this.attr("class", "");
              if (((t = se(e)), t.length))
                for (; (n = this[l++]); )
                  if (
                    ((o = oe(n)), (i = 1 === n.nodeType && " " + ie(o) + " "))
                  ) {
                    for (r = 0; (s = t[r++]); )
                      for (; i.indexOf(" " + s + " ") > -1; )
                        i = i.replace(" " + s + " ", " ");
                    (a = ie(i)), o !== a && n.setAttribute("class", a);
                  }
              return this;
            },
            toggleClass: function (e, t) {
              var n = void 0 === e ? "undefined" : o(e),
                i = "string" === n || Array.isArray(e);
              return "boolean" == typeof t && i
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : ke(e)
                ? this.each(function (n) {
                    Pe(this).toggleClass(e.call(this, n, oe(this), t), t);
                  })
                : this.each(function () {
                    var t, o, s, r;
                    if (i)
                      for (o = 0, s = Pe(this), r = se(e); (t = r[o++]); )
                        s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                    else
                      (void 0 !== e && "boolean" !== n) ||
                        ((t = oe(this)),
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
                i = 0;
              for (t = " " + e + " "; (n = this[i++]); )
                if (1 === n.nodeType && (" " + ie(oe(n)) + " ").indexOf(t) > -1)
                  return !0;
              return !1;
            },
          });
        var jt = /\r/g;
        Pe.fn.extend({
          val: function (e) {
            var t,
              n,
              i,
              o = this[0];
            {
              if (arguments.length)
                return (
                  (i = ke(e)),
                  this.each(function (n) {
                    var o;
                    1 === this.nodeType &&
                      ((o = i ? e.call(this, n, Pe(this).val()) : e),
                      null == o
                        ? (o = "")
                        : "number" == typeof o
                        ? (o += "")
                        : Array.isArray(o) &&
                          (o = Pe.map(o, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        Pe.valHooks[this.type] ||
                        Pe.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, o, "value")) ||
                        (this.value = o));
                  })
                );
              if (o)
                return (t =
                  Pe.valHooks[o.type] ||
                  Pe.valHooks[o.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(o, "value"))
                  ? n
                  : ((n = o.value),
                    "string" == typeof n
                      ? n.replace(jt, "")
                      : null == n
                      ? ""
                      : n);
            }
          },
        }),
          Pe.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = Pe.find.attr(e, "value");
                  return null != t ? t : ie(Pe.text(e));
                },
              },
              select: {
                get: function (e) {
                  var t,
                    n,
                    i,
                    o = e.options,
                    s = e.selectedIndex,
                    r = "select-one" === e.type,
                    a = r ? null : [],
                    l = r ? s + 1 : o.length;
                  for (i = s < 0 ? l : r ? s : 0; i < l; i++)
                    if (
                      ((n = o[i]),
                      (n.selected || i === s) &&
                        !n.disabled &&
                        (!n.parentNode.disabled ||
                          !d(n.parentNode, "optgroup")))
                    ) {
                      if (((t = Pe(n).val()), r)) return t;
                      a.push(t);
                    }
                  return a;
                },
                set: function (e, t) {
                  for (
                    var n, i, o = e.options, s = Pe.makeArray(t), r = o.length;
                    r--;

                  )
                    (i = o[r]),
                      (i.selected =
                        Pe.inArray(Pe.valHooks.option.get(i), s) > -1) &&
                        (n = !0);
                  return n || (e.selectedIndex = -1), s;
                },
              },
            },
          }),
          Pe.each(["radio", "checkbox"], function () {
            (Pe.valHooks[this] = {
              set: function (e, t) {
                if (Array.isArray(t))
                  return (e.checked = Pe.inArray(Pe(e).val(), t) > -1);
              },
            }),
              Se.checkOn ||
                (Pe.valHooks[this].get = function (e) {
                  return null === e.getAttribute("value") ? "on" : e.value;
                });
          }),
          (Se.focusin = "onfocusin" in s);
        var Ht = /^(?:focusinfocus|focusoutblur)$/,
          Mt = function (e) {
            e.stopPropagation();
          };
        Pe.extend(Pe.event, {
          trigger: function (e, t, n, i) {
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
                !Ht.test(g + Pe.event.triggered) &&
                (g.indexOf(".") > -1 &&
                  ((v = g.split(".")), (g = v.shift()), v.sort()),
                (d = g.indexOf(":") < 0 && "on" + g),
                (e = e[Pe.expando]
                  ? e
                  : new Pe.Event(
                      g,
                      "object" === (void 0 === e ? "undefined" : o(e)) && e
                    )),
                (e.isTrigger = i ? 2 : 3),
                (e.namespace = v.join(".")),
                (e.rnamespace = e.namespace
                  ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (e.result = void 0),
                e.target || (e.target = n),
                (t = null == t ? [e] : Pe.makeArray(t, [e])),
                (p = Pe.event.special[g] || {}),
                i || !p.trigger || !1 !== p.trigger.apply(n, t)))
            ) {
              if (!i && !p.noBubble && !Ce(n)) {
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
                    Be(a) &&
                    ((e.result = u.apply(a, t)),
                    !1 === e.result && e.preventDefault());
              return (
                (e.type = g),
                i ||
                  e.isDefaultPrevented() ||
                  (p._default && !1 !== p._default.apply(h.pop(), t)) ||
                  !Be(n) ||
                  (d &&
                    ke(n[g]) &&
                    !Ce(n) &&
                    ((l = n[d]),
                    l && (n[d] = null),
                    (Pe.event.triggered = g),
                    e.isPropagationStopped() && f.addEventListener(g, Mt),
                    n[g](),
                    e.isPropagationStopped() && f.removeEventListener(g, Mt),
                    (Pe.event.triggered = void 0),
                    l && (n[d] = l))),
                e.result
              );
            }
          },
          simulate: function (e, t, n) {
            var i = Pe.extend(new Pe.Event(), n, { type: e, isSimulated: !0 });
            Pe.event.trigger(i, null, t);
          },
        }),
          Pe.fn.extend({
            trigger: function (e, t) {
              return this.each(function () {
                Pe.event.trigger(e, t, this);
              });
            },
            triggerHandler: function (e, t) {
              var n = this[0];
              if (n) return Pe.event.trigger(e, t, n, !0);
            },
          }),
          Se.focusin ||
            Pe.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              var n = function (e) {
                Pe.event.simulate(t, e.target, Pe.event.fix(e));
              };
              Pe.event.special[t] = {
                setup: function () {
                  var i = this.ownerDocument || this.document || this,
                    o = Xe.access(i, t);
                  o || i.addEventListener(e, n, !0),
                    Xe.access(i, t, (o || 0) + 1);
                },
                teardown: function () {
                  var i = this.ownerDocument || this.document || this,
                    o = Xe.access(i, t) - 1;
                  o
                    ? Xe.access(i, t, o)
                    : (i.removeEventListener(e, n, !0), Xe.remove(i, t));
                },
              };
            });
        var Ot = s.location,
          It = { guid: Date.now() },
          Nt = /\?/;
        Pe.parseXML = function (e) {
          var t;
          if (!e || "string" != typeof e) return null;
          try {
            t = new s.DOMParser().parseFromString(e, "text/xml");
          } catch (e) {
            t = void 0;
          }
          return (
            (t && !t.getElementsByTagName("parsererror").length) ||
              Pe.error("Invalid XML: " + e),
            t
          );
        };
        var zt = /\[\]$/,
          qt = /\r?\n/g,
          Ft = /^(?:submit|button|image|reset|file)$/i,
          Rt = /^(?:input|select|textarea|keygen)/i;
        (Pe.param = function (e, t) {
          var n,
            i = [],
            o = function (e, t) {
              var n = ke(t) ? t() : t;
              i[i.length] =
                encodeURIComponent(e) +
                "=" +
                encodeURIComponent(null == n ? "" : n);
            };
          if (null == e) return "";
          if (Array.isArray(e) || (e.jquery && !Pe.isPlainObject(e)))
            Pe.each(e, function () {
              o(this.name, this.value);
            });
          else for (n in e) re(n, e[n], t, o);
          return i.join("&");
        }),
          Pe.fn.extend({
            serialize: function () {
              return Pe.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var e = Pe.prop(this, "elements");
                return e ? Pe.makeArray(e) : this;
              })
                .filter(function () {
                  var e = this.type;
                  return (
                    this.name &&
                    !Pe(this).is(":disabled") &&
                    Rt.test(this.nodeName) &&
                    !Ft.test(e) &&
                    (this.checked || !it.test(e))
                  );
                })
                .map(function (e, t) {
                  var n = Pe(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                    ? Pe.map(n, function (e) {
                        return { name: t.name, value: e.replace(qt, "\r\n") };
                      })
                    : { name: t.name, value: n.replace(qt, "\r\n") };
                })
                .get();
            },
          });
        var Wt = /%20/g,
          Bt = /#.*$/,
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
          Pe.extend({
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
                "text xml": Pe.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
              return t ? ce(ce(e, Pe.ajaxSettings), t) : ce(Pe.ajaxSettings, e);
            },
            ajaxPrefilter: ae(Zt),
            ajaxTransport: ae(Gt),
            ajax: function (e, t) {
              function n(e, t, n, o) {
                var l,
                  d,
                  f,
                  h,
                  x,
                  T = t;
                u ||
                  ((u = !0),
                  c && s.clearTimeout(c),
                  (i = void 0),
                  (a = o || ""),
                  (k.readyState = e > 0 ? 4 : 0),
                  (l = (e >= 200 && e < 300) || 304 === e),
                  n && (h = de(g, k, n)),
                  !l &&
                    Pe.inArray("script", g.dataTypes) > -1 &&
                    (g.converters["text script"] = function () {}),
                  (h = ue(g, h, k, l)),
                  l
                    ? (g.ifModified &&
                        ((x = k.getResponseHeader("Last-Modified")),
                        x && (Pe.lastModified[r] = x),
                        (x = k.getResponseHeader("etag")) && (Pe.etag[r] = x)),
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
                    --Pe.active || Pe.event.trigger("ajaxStop")));
              }
              "object" === (void 0 === e ? "undefined" : o(e)) &&
                ((t = e), (e = void 0)),
                (t = t || {});
              var i,
                r,
                a,
                l,
                c,
                d,
                u,
                p,
                f,
                h,
                g = Pe.ajaxSetup({}, t),
                v = g.context || g,
                m = g.context && (v.nodeType || v.jquery) ? Pe(v) : Pe.event,
                y = Pe.Deferred(),
                b = Pe.Callbacks("once memory"),
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
                    return i && i.abort(t), n(0, t), this;
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
                  (g.data = Pe.param(g.data, g.traditional)),
                le(Zt, g, t, k),
                u)
              )
                return k;
              (p = Pe.event && g.global),
                p && 0 == Pe.active++ && Pe.event.trigger("ajaxStart"),
                (g.type = g.type.toUpperCase()),
                (g.hasContent = !Vt.test(g.type)),
                (r = g.url.replace(Bt, "")),
                g.hasContent
                  ? g.data &&
                    g.processData &&
                    0 ===
                      (g.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (g.data = g.data.replace(Wt, "+"))
                  : ((h = g.url.slice(r.length)),
                    g.data &&
                      (g.processData || "string" == typeof g.data) &&
                      ((r += (Nt.test(r) ? "&" : "?") + g.data), delete g.data),
                    !1 === g.cache &&
                      ((r = r.replace(Xt, "$1")),
                      (h = (Nt.test(r) ? "&" : "?") + "_=" + It.guid++ + h)),
                    (g.url = r + h)),
                g.ifModified &&
                  (Pe.lastModified[r] &&
                    k.setRequestHeader("If-Modified-Since", Pe.lastModified[r]),
                  Pe.etag[r] &&
                    k.setRequestHeader("If-None-Match", Pe.etag[r])),
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
                (i = le(Gt, g, t, k)))
              ) {
                if (((k.readyState = 1), p && m.trigger("ajaxSend", [k, g]), u))
                  return k;
                g.async &&
                  g.timeout > 0 &&
                  (c = s.setTimeout(function () {
                    k.abort("timeout");
                  }, g.timeout));
                try {
                  (u = !1), i.send(x, n);
                } catch (e) {
                  if (u) throw e;
                  n(-1, e);
                }
              } else n(-1, "No Transport");
              return k;
            },
            getJSON: function (e, t, n) {
              return Pe.get(e, t, n, "json");
            },
            getScript: function (e, t) {
              return Pe.get(e, void 0, t, "script");
            },
          }),
          Pe.each(["get", "post"], function (e, t) {
            Pe[t] = function (e, n, i, o) {
              return (
                ke(n) && ((o = o || i), (i = n), (n = void 0)),
                Pe.ajax(
                  Pe.extend(
                    { url: e, type: t, dataType: o, data: n, success: i },
                    Pe.isPlainObject(e) && e
                  )
                )
              );
            };
          }),
          Pe.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers)
              "content-type" === t.toLowerCase() &&
                (e.contentType = e.headers[t] || "");
          }),
          (Pe._evalUrl = function (e, t, n) {
            return Pe.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: { "text script": function () {} },
              dataFilter: function (e) {
                Pe.globalEval(e, t, n);
              },
            });
          }),
          Pe.fn.extend({
            wrapAll: function (e) {
              var t;
              return (
                this[0] &&
                  (ke(e) && (e = e.call(this[0])),
                  (t = Pe(e, this[0].ownerDocument).eq(0).clone(!0)),
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
                    Pe(this).wrapInner(e.call(this, t));
                  })
                : this.each(function () {
                    var t = Pe(this),
                      n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e);
                  });
            },
            wrap: function (e) {
              var t = ke(e);
              return this.each(function (n) {
                Pe(this).wrapAll(t ? e.call(this, n) : e);
              });
            },
            unwrap: function (e) {
              return (
                this.parent(e)
                  .not("body")
                  .each(function () {
                    Pe(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (Pe.expr.pseudos.hidden = function (e) {
            return !Pe.expr.pseudos.visible(e);
          }),
          (Pe.expr.pseudos.visible = function (e) {
            return !!(
              e.offsetWidth ||
              e.offsetHeight ||
              e.getClientRects().length
            );
          }),
          (Pe.ajaxSettings.xhr = function () {
            try {
              return new s.XMLHttpRequest();
            } catch (e) {}
          });
        var en = { 0: 200, 1223: 204 },
          tn = Pe.ajaxSettings.xhr();
        (Se.cors = !!tn && "withCredentials" in tn),
          (Se.ajax = tn = !!tn),
          Pe.ajaxTransport(function (e) {
            var t, n;
            if (Se.cors || (tn && !e.crossDomain))
              return {
                send: function (i, o) {
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
                      i["X-Requested-With"] ||
                      (i["X-Requested-With"] = "XMLHttpRequest");
                  for (r in i) a.setRequestHeader(r, i[r]);
                  (t = function (e) {
                    return function () {
                      t &&
                        ((t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                        "abort" === e
                          ? a.abort()
                          : "error" === e
                          ? "number" != typeof a.status
                            ? o(0, "error")
                            : o(a.status, a.statusText)
                          : o(
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
          Pe.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
          }),
          Pe.ajaxSetup({
            accepts: {
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function (e) {
                return Pe.globalEval(e), e;
              },
            },
          }),
          Pe.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
              e.crossDomain && (e.type = "GET");
          }),
          Pe.ajaxTransport("script", function (e) {
            if (e.crossDomain || e.scriptAttrs) {
              var t, n;
              return {
                send: function (i, o) {
                  (t = Pe("<script>")
                    .attr(e.scriptAttrs || {})
                    .prop({ charset: e.scriptCharset, src: e.url })
                    .on(
                      "load error",
                      (n = function (e) {
                        t.remove(),
                          (n = null),
                          e && o("error" === e.type ? 404 : 200, e.type);
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
        Pe.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = nn.pop() || Pe.expando + "_" + It.guid++;
            return (this[e] = !0), e;
          },
        }),
          Pe.ajaxPrefilter("json jsonp", function (e, t, n) {
            var i,
              o,
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
                (i = e.jsonpCallback = ke(e.jsonpCallback)
                  ? e.jsonpCallback()
                  : e.jsonpCallback),
                a
                  ? (e[a] = e[a].replace(on, "$1" + i))
                  : !1 !== e.jsonp &&
                    (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                (e.converters["script json"] = function () {
                  return r || Pe.error(i + " was not called"), r[0];
                }),
                (e.dataTypes[0] = "json"),
                (o = s[i]),
                (s[i] = function () {
                  r = arguments;
                }),
                n.always(function () {
                  void 0 === o ? Pe(s).removeProp(i) : (s[i] = o),
                    e[i] && ((e.jsonpCallback = t.jsonpCallback), nn.push(i)),
                    r && ke(o) && o(r[0]),
                    (r = o = void 0);
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
          (Pe.parseHTML = function (e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && ((n = t), (t = !1));
            var i, o, s;
            return (
              t ||
                (Se.createHTMLDocument
                  ? ((t = $e.implementation.createHTMLDocument("")),
                    (i = t.createElement("base")),
                    (i.href = $e.location.href),
                    t.head.appendChild(i))
                  : (t = $e)),
              (o = je.exec(e)),
              (s = !n && []),
              o
                ? [t.createElement(o[1])]
                : ((o = P([e], t, s)),
                  s && s.length && Pe(s).remove(),
                  Pe.merge([], o.childNodes))
            );
          }),
          (Pe.fn.load = function (e, t, n) {
            var i,
              s,
              r,
              a = this,
              l = e.indexOf(" ");
            return (
              l > -1 && ((i = ie(e.slice(l))), (e = e.slice(0, l))),
              ke(t)
                ? ((n = t), (t = void 0))
                : t &&
                  "object" === (void 0 === t ? "undefined" : o(t)) &&
                  (s = "POST"),
              a.length > 0 &&
                Pe.ajax({ url: e, type: s || "GET", dataType: "html", data: t })
                  .done(function (e) {
                    (r = arguments),
                      a.html(
                        i ? Pe("<div>").append(Pe.parseHTML(e)).find(i) : e
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
          (Pe.expr.pseudos.animated = function (e) {
            return Pe.grep(Pe.timers, function (t) {
              return e === t.elem;
            }).length;
          }),
          (Pe.offset = {
            setOffset: function (e, t, n) {
              var i,
                o,
                s,
                r,
                a,
                l,
                c,
                d = Pe.css(e, "position"),
                u = Pe(e),
                p = {};
              "static" === d && (e.style.position = "relative"),
                (a = u.offset()),
                (s = Pe.css(e, "top")),
                (l = Pe.css(e, "left")),
                (c =
                  ("absolute" === d || "fixed" === d) &&
                  (s + l).indexOf("auto") > -1),
                c
                  ? ((i = u.position()), (r = i.top), (o = i.left))
                  : ((r = parseFloat(s) || 0), (o = parseFloat(l) || 0)),
                ke(t) && (t = t.call(e, n, Pe.extend({}, a))),
                null != t.top && (p.top = t.top - a.top + r),
                null != t.left && (p.left = t.left - a.left + o),
                "using" in t
                  ? t.using.call(e, p)
                  : ("number" == typeof p.top && (p.top += "px"),
                    "number" == typeof p.left && (p.left += "px"),
                    u.css(p));
            },
          }),
          Pe.fn.extend({
            offset: function (e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function (t) {
                      Pe.offset.setOffset(this, e, t);
                    });
              var t,
                n,
                i = this[0];
              if (i)
                return i.getClientRects().length
                  ? ((t = i.getBoundingClientRect()),
                    (n = i.ownerDocument.defaultView),
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
                  i = this[0],
                  o = { top: 0, left: 0 };
                if ("fixed" === Pe.css(i, "position"))
                  t = i.getBoundingClientRect();
                else {
                  for (
                    t = this.offset(),
                      n = i.ownerDocument,
                      e = i.offsetParent || n.documentElement;
                    e &&
                    (e === n.body || e === n.documentElement) &&
                    "static" === Pe.css(e, "position");

                  )
                    e = e.parentNode;
                  e &&
                    e !== i &&
                    1 === e.nodeType &&
                    ((o = Pe(e).offset()),
                    (o.top += Pe.css(e, "borderTopWidth", !0)),
                    (o.left += Pe.css(e, "borderLeftWidth", !0)));
                }
                return {
                  top: t.top - o.top - Pe.css(i, "marginTop", !0),
                  left: t.left - o.left - Pe.css(i, "marginLeft", !0),
                };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (
                  var e = this.offsetParent;
                  e && "static" === Pe.css(e, "position");

                )
                  e = e.offsetParent;
                return e || Ke;
              });
            },
          }),
          Pe.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (e, t) {
              var n = "pageYOffset" === t;
              Pe.fn[e] = function (i) {
                return Fe(
                  this,
                  function (e, i, o) {
                    var s;
                    if (
                      (Ce(e)
                        ? (s = e)
                        : 9 === e.nodeType && (s = e.defaultView),
                      void 0 === o)
                    )
                      return s ? s[t] : e[i];
                    s
                      ? s.scrollTo(n ? s.pageXOffset : o, n ? o : s.pageYOffset)
                      : (e[i] = o);
                  },
                  e,
                  i,
                  arguments.length
                );
              };
            }
          ),
          Pe.each(["top", "left"], function (e, t) {
            Pe.cssHooks[t] = W(Se.pixelPosition, function (e, n) {
              if (n)
                return (
                  (n = R(e, t)), ht.test(n) ? Pe(e).position()[t] + "px" : n
                );
            });
          }),
          Pe.each({ Height: "height", Width: "width" }, function (e, t) {
            Pe.each(
              { padding: "inner" + e, content: t, "": "outer" + e },
              function (n, i) {
                Pe.fn[i] = function (o, s) {
                  var r = arguments.length && (n || "boolean" != typeof o),
                    a = n || (!0 === o || !0 === s ? "margin" : "border");
                  return Fe(
                    this,
                    function (t, n, o) {
                      var s;
                      return Ce(t)
                        ? 0 === i.indexOf("outer")
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
                        : void 0 === o
                        ? Pe.css(t, n, a)
                        : Pe.style(t, n, o, a);
                    },
                    t,
                    r ? o : void 0,
                    r
                  );
                };
              }
            );
          }),
          Pe.each(
            [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend",
            ],
            function (e, t) {
              Pe.fn[t] = function (e) {
                return this.on(t, e);
              };
            }
          ),
          Pe.fn.extend({
            bind: function (e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
              return this.off(e, null, t);
            },
            delegate: function (e, t, n, i) {
              return this.on(t, e, n, i);
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
          Pe.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
              " "
            ),
            function (e, t) {
              Pe.fn[t] = function (e, n) {
                return arguments.length > 0
                  ? this.on(t, null, e, n)
                  : this.trigger(t);
              };
            }
          );
        var sn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        (Pe.proxy = function (e, t) {
          var n, i, o;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), ke(e)))
            return (
              (i = he.call(arguments, 2)),
              (o = function () {
                return e.apply(t || this, i.concat(he.call(arguments)));
              }),
              (o.guid = e.guid = e.guid || Pe.guid++),
              o
            );
        }),
          (Pe.holdReady = function (e) {
            e ? Pe.readyWait++ : Pe.ready(!0);
          }),
          (Pe.isArray = Array.isArray),
          (Pe.parseJSON = JSON.parse),
          (Pe.nodeName = d),
          (Pe.isFunction = ke),
          (Pe.isWindow = Ce),
          (Pe.camelCase = b),
          (Pe.type = l),
          (Pe.now = Date.now),
          (Pe.isNumeric = function (e) {
            var t = Pe.type(e);
            return (
              ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
          }),
          (Pe.trim = function (e) {
            return null == e ? "" : (e + "").replace(sn, "");
          }),
          (n = []),
          void 0 !==
            (i = function () {
              return Pe;
            }.apply(t, n)) && (e.exports = i);
        var rn = s.jQuery,
          an = s.$;
        return (
          (Pe.noConflict = function (e) {
            return (
              s.$ === Pe && (s.$ = an),
              e && s.jQuery === Pe && (s.jQuery = rn),
              Pe
            );
          }),
          void 0 === r && (s.jQuery = s.$ = Pe),
          Pe
        );
      });
    }.call(t, n(3)(e)));
  },
  function (e, t, n) {
    "use strict";
    n(2);
    var i = n(0),
      o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i);
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
      (window.jQuery = window.$ = o.default);
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
    function i(e) {
      window.addEventListener("mousemove", function (t) {
        var n = t.clientX / window.innerWidth,
          i = t.clientY / window.innerHeight;
        (e.style.transform = "translate(-" + 25 * n + "px, -" + 25 * i + "px)"),
          (e.style.transform =
            "translate(-" + 25 * n + "px, -" + 25 * i + "px)");
      });
    }
    function o(e) {
      window.addEventListener("mousemove", function (t) {
        var n = t.clientX / window.innerWidth,
          i = t.clientY / window.innerHeight;
        (e.style.transform = "translate(+" + 25 * n + "px, +" + 25 * i + "px)"),
          (e.style.transform =
            "translate(+" + 25 * n + "px, +" + 25 * i + "px)");
      });
    }
    document.querySelectorAll(".blur").forEach(function (e) {
      i(e);
    }),
      document.querySelectorAll(".blur2").forEach(function (e) {
        o(e);
      });
  },
  function (e, t, n) {
    "use strict";
    var i = n(0),
      o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i),
      s = (0, o.default)(".header__map"),
      r = (0, o.default)(".header__map-iframe");
    !(function () {
      window.innerWidth < 901 ||
        s.hover(
          function () {
            r.css("display", "block");
          },
          function () {
            r.css("display", "none");
          }
        );
    })();
  },
  function (e, t, n) {
    "use strict";
    var i = n(0),
      o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i),
      s = (0, o.default)(".card__popup"),
      r = (0, o.default)(".main__popup-complete"),
      a = (0, o.default)(".main__descr-btn--popup"),
      l = (0, o.default)(".main__popup-submit"),
      c = (0, o.default)(".main__popup_background"),
      d = (0, o.default)(".main__popup-close"),
      u = (0, o.default)(".main__popup-complete_close"),
      p = (0, o.default)(".popup__leave"),
      f = (0, o.default)(".popup__leave-close"),
      h = (0, o.default)(".main__popup-name input"),
      g = (0, o.default)(".main__popup-tel input");
    (0, o.default)(".request__form-name input"),
      (0, o.default)(".request__form-tel input"),
      (0, o.default)(".presentBtn"),
      (0, o.default)(".presentBtnOnline"),
      (0, o.default)(".online__form-name input"),
      (0, o.default)(".online__form-tel input");
    !(function () {
      function e() {
        s.toggleClass("show"),
          (0, o.default)("html").toggleClass("overflowToggle"),
          c.toggleClass("show");
      }
      function t() {
        r.toggleClass("show"), s.toggleClass("show");
      }
      function n() {
        s.removeClass("show"),
          r.removeClass("show"),
          c.removeClass("show"),
          p.removeClass("show"),
          (0, o.default)("html").toggleClass("overflowToggle");
      }
      a.on("click", function () {
        e();
      }),
        l.on("click", function () {
          h.val().length > 0 && g.val().length > 0 && t();
        }),
        c.on("click", function () {
          n();
        }),
        d.on("click", function () {
          n();
        }),
        u.on("click", function () {
          n();
        }),
        f.on("click", function () {
          n();
        });
    })(),
      (0, o.default)(document).one("mouseleave", function (e) {
        e.clientY < 0 &&
          (p.addClass("show"),
          c.addClass("show"),
          (0, o.default)("html").addClass("overflowToggle"));
      });
  },
  function (e, t, n) {
    "use strict";
    var i = n(0),
      o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i);
    (window.jQuery = o.default), (window.$ = window.jQuery = n(0));
    n(8);
    (0, o.default)('[data-fancybox="gallery"]').fancybox({
      arrows: !0,
      thumbs: !1,
    });
  },
  function (e, t, n) {
    "use strict";
    !(function (e, t, n, i) {
      function o(e, t) {
        var i,
          o,
          s,
          r = [],
          a = 0;
        (e && e.isDefaultPrevented()) ||
          (e.preventDefault(),
          (t = t || {}),
          e && e.data && (t = h(e.data.options, t)),
          (i = t.$target || n(e.currentTarget).trigger("blur")),
          ((s = n.fancybox.getInstance()) && s.$trigger && s.$trigger.is(i)) ||
            (t.selector
              ? (r = n(t.selector))
              : ((o = i.attr("data-fancybox") || ""),
                o
                  ? ((r = e.data ? e.data.items : []),
                    (r = r.length
                      ? r.filter('[data-fancybox="' + o + '"]')
                      : n('[data-fancybox="' + o + '"]')))
                  : (r = [i])),
            (a = n(r).index(i)),
            a < 0 && (a = 0),
            (s = n.fancybox.open(r, t, a)),
            (s.$trigger = i)));
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
              i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
              };
            for (e in i) if (void 0 !== n.style[e]) return i[e];
            return "transitionend";
          })(),
          f = function (e) {
            return e && e.length && e[0].offsetHeight;
          },
          h = function (e, t) {
            var i = n.extend(!0, {}, e, t);
            return (
              n.each(t, function (e, t) {
                n.isArray(t) && (i[e] = t);
              }),
              i
            );
          },
          g = function (e) {
            var i, o;
            return (
              !(!e || e.ownerDocument !== t) &&
              (n(".fancybox-container").css("pointer-events", "none"),
              (i = {
                x: e.getBoundingClientRect().left + e.offsetWidth / 2,
                y: e.getBoundingClientRect().top + e.offsetHeight / 2,
              }),
              (o = t.elementFromPoint(i.x, i.y) === e),
              n(".fancybox-container").css("pointer-events", ""),
              o)
            );
          },
          v = function (e, t, i) {
            var o = this;
            (o.opts = h({ index: i }, n.fancybox.defaults)),
              n.isPlainObject(t) && (o.opts = h(o.opts, t)),
              n.fancybox.isMobile && (o.opts = h(o.opts, o.opts.mobile)),
              (o.id = o.opts.id || ++l),
              (o.currIndex = parseInt(o.opts.index, 10) || 0),
              (o.prevIndex = null),
              (o.prevPos = null),
              (o.currPos = 0),
              (o.firstRun = !0),
              (o.group = []),
              (o.slides = {}),
              o.addContent(e),
              o.group.length && o.init();
          };
        n.extend(v.prototype, {
          init: function () {
            var i,
              o,
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
              (o = ""),
              n.each(a.buttons, function (e, t) {
                o += a.btnTpl[t] || "";
              }),
              (i = n(
                s.translate(
                  s,
                  a.baseTpl
                    .replace("{{buttons}}", o)
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
              (s.$refs = { container: i }),
              [
                "bg",
                "inner",
                "infobar",
                "toolbar",
                "stage",
                "caption",
                "navigation",
              ].forEach(function (e) {
                s.$refs[e] = i.find(".fancybox-" + e);
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
              i = this,
              o = n.makeArray(e);
            n.each(o, function (e, t) {
              var o,
                s,
                r,
                a,
                l,
                c = {},
                d = {};
              n.isPlainObject(t)
                ? ((c = t), (d = t.opts || t))
                : "object" === n.type(t) && n(t).length
                ? ((o = n(t)),
                  (d = o.data() || {}),
                  (d = n.extend(!0, {}, d, d.options)),
                  (d.$orig = o),
                  (c.src = i.opts.src || d.src || o.attr("href")),
                  c.type || c.src || ((c.type = "inline"), (c.src = t)))
                : (c = { type: "html", src: t + "" }),
                (c.opts = n.extend(!0, {}, i.opts, d)),
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
                s ? (c.type = s) : i.trigger("objectNeedsType", c),
                c.contentType ||
                  (c.contentType =
                    n.inArray(c.type, ["html", "inline", "ajax"]) > -1
                      ? "html"
                      : c.type),
                (c.index = i.group.length),
                "auto" == c.opts.smallBtn &&
                  (c.opts.smallBtn =
                    n.inArray(c.type, ["html", "inline", "ajax"]) > -1),
                "auto" === c.opts.toolbar &&
                  (c.opts.toolbar = !c.opts.smallBtn),
                (c.$thumb = c.opts.$thumb || null),
                c.opts.$trigger &&
                  c.index === i.opts.index &&
                  ((c.$thumb = c.opts.$trigger.find("img:first")),
                  c.$thumb.length && (c.opts.$orig = c.opts.$trigger)),
                (c.$thumb && c.$thumb.length) ||
                  !c.opts.$orig ||
                  (c.$thumb = c.opts.$orig.find("img:first")),
                c.$thumb && !c.$thumb.length && (c.$thumb = null),
                (c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null)),
                "function" === n.type(c.opts.caption) &&
                  (c.opts.caption = c.opts.caption.apply(t, [i, c])),
                "function" === n.type(i.opts.caption) &&
                  (c.opts.caption = i.opts.caption.apply(t, [i, c])),
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
                i.group.push(c);
            }),
              Object.keys(i.slides).length &&
                (i.updateControls(),
                (t = i.Thumbs) && t.isActive && (t.create(), t.focus()));
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
                var i = n.fancybox ? n.fancybox.getInstance() : null,
                  o = i.current,
                  s = e.keyCode || e.which;
                if (9 == s) return void (o.opts.trapFocus && t.focus(e));
                if (
                  !(
                    !o.opts.keyboard ||
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
            var i,
              o,
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
                ((i = p.firstRun = !Object.keys(p.slides).length),
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
                p.trigger("beforeShow", i),
                p.updateControls(),
                (r.forcedDuration = void 0),
                n.isNumeric(t)
                  ? (r.forcedDuration = t)
                  : (t =
                      r.opts[i ? "animationDuration" : "transitionDuration"]),
                (t = parseInt(t, 10)),
                (o = p.isMoved(r)),
                r.$slide.addClass("fancybox-slide--current"),
                i)
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
                o
                  ? ((u = l.left - (a.pos * l.width + a.pos * a.opts.gutter)),
                    n.each(p.slides, function (e, i) {
                      i.$slide
                        .removeClass("fancybox-animated")
                        .removeClass(function (e, t) {
                          return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                            " "
                          );
                        });
                      var o = i.pos * l.width + i.pos * i.opts.gutter;
                      n.fancybox.setTranslate(i.$slide, {
                        top: 0,
                        left: o - c.left + u,
                      }),
                        i.pos !== r.pos &&
                          i.$slide.addClass(
                            "fancybox-slide--" +
                              (i.pos > r.pos ? "next" : "previous")
                          ),
                        f(i.$slide),
                        n.fancybox.animate(
                          i.$slide,
                          {
                            top: 0,
                            left:
                              (i.pos - r.pos) * l.width +
                              (i.pos - r.pos) * i.opts.gutter,
                          },
                          t,
                          function () {
                            i.$slide
                              .css({ transform: "", opacity: "" })
                              .removeClass(
                                "fancybox-slide--next fancybox-slide--previous"
                              ),
                              i.pos === p.currPos && p.complete();
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
              i,
              o = this;
            return (
              (i = e % o.group.length),
              (i = i < 0 ? o.group.length + i : i),
              !o.slides[e] &&
                o.group[i] &&
                ((t = n('<div class="fancybox-slide"></div>').appendTo(
                  o.$refs.stage
                )),
                (o.slides[e] = n.extend(!0, {}, o.group[i], {
                  pos: e,
                  $slide: t,
                  isLoaded: !1,
                })),
                o.updateSlide(o.slides[e])),
              o.slides[e]
            );
          },
          scaleToActual: function (e, t, i) {
            var o,
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
              (o = n.fancybox.getTranslate(u)),
              (o.top -= n.fancybox.getTranslate(d.$slide).top),
              (o.left -= n.fancybox.getTranslate(d.$slide).left),
              (a = h / o.width),
              (l = g / o.height),
              (s = 0.5 * p - 0.5 * h),
              (r = 0.5 * f - 0.5 * g),
              h > p &&
                ((s = o.left * a - (e * a - e)),
                s > 0 && (s = 0),
                s < p - h && (s = p - h)),
              g > f &&
                ((r = o.top * l - (t * l - t)),
                r > 0 && (r = 0),
                r < f - g && (r = f - g)),
              c.updateCursor(h, g),
              n.fancybox.animate(
                u,
                { top: r, left: s, scaleX: a, scaleY: l },
                i || 366,
                function () {
                  c.isAnimating = !1;
                }
              ),
              c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop());
          },
          scaleToFit: function (e) {
            var t,
              i = this,
              o = i.current,
              s = o.$content;
            i.isAnimating ||
              i.isMoved() ||
              !s ||
              "image" != o.type ||
              !o.isLoaded ||
              o.hasError ||
              ((i.isAnimating = !0),
              n.fancybox.stop(s),
              (t = i.getFitPos(o)),
              i.updateCursor(t.width, t.height),
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
                  i.isAnimating = !1;
                }
              ));
          },
          getFitPos: function (e) {
            var t,
              i,
              o,
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
              (i = n.fancybox.getTranslate(r.$refs.stage).height),
              (t -=
                parseFloat(l.css("paddingLeft")) +
                parseFloat(l.css("paddingRight")) +
                parseFloat(a.css("marginLeft")) +
                parseFloat(a.css("marginRight"))),
              (i -=
                parseFloat(l.css("paddingTop")) +
                parseFloat(l.css("paddingBottom")) +
                parseFloat(a.css("marginTop")) +
                parseFloat(a.css("marginBottom"))),
              (c && d) || ((c = t), (d = i)),
              (o = Math.min(1, t / c, i / d)),
              (c *= o),
              (d *= o),
              c > t - 0.5 && (c = t),
              d > i - 0.5 && (d = i),
              "image" === e.type
                ? ((u.top =
                    Math.floor(0.5 * (i - d)) +
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
            n.each(t.slides, function (n, i) {
              t.updateSlide(i, e);
            });
          },
          updateSlide: function (e, t) {
            var i = this,
              o = e && e.$content,
              s = e.width || e.opts.width,
              r = e.height || e.opts.height,
              a = e.$slide;
            i.adjustCaption(e),
              o &&
                (s || r || "video" === e.contentType) &&
                !e.hasError &&
                (n.fancybox.stop(o),
                n.fancybox.setTranslate(o, i.getFitPos(e)),
                e.pos === i.currPos &&
                  ((i.isAnimating = !1), i.updateCursor())),
              i.adjustLayout(e),
              a.length &&
                (a.trigger("refresh"),
                e.pos === i.currPos &&
                  i.$refs.toolbar
                    .add(
                      i.$refs.navigation.find(".fancybox-button--arrow_right")
                    )
                    .toggleClass(
                      "compensate-for-scrollbar",
                      a.get(0).scrollHeight > a.get(0).clientHeight
                    )),
              i.trigger("onUpdate", e, t);
          },
          centerSlide: function (e) {
            var t = this,
              i = t.current,
              o = i.$slide;
            !t.isClosing &&
              i &&
              (o.siblings().css({ transform: "", opacity: "" }),
              o
                .parent()
                .children()
                .removeClass("fancybox-slide--previous fancybox-slide--next"),
              n.fancybox.animate(
                o,
                { top: 0, left: 0, opacity: 1 },
                void 0 === e ? 0 : e,
                function () {
                  o.css({ transform: "", opacity: "" }),
                    i.isComplete || t.complete();
                },
                !1
              ));
          },
          isMoved: function (e) {
            var t,
              i,
              o = e || this.current;
            return (
              !!o &&
              ((i = n.fancybox.getTranslate(this.$refs.stage)),
              (t = n.fancybox.getTranslate(o.$slide)),
              !o.$slide.hasClass("fancybox-animated") &&
                (Math.abs(t.top - i.top) > 0.5 ||
                  Math.abs(t.left - i.left) > 0.5))
            );
          },
          updateCursor: function (e, t) {
            var i,
              o,
              s = this,
              r = s.current,
              a = s.$refs.container;
            r &&
              !s.isClosing &&
              s.Guestures &&
              (a.removeClass(
                "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"
              ),
              (i = s.canPan(e, t)),
              (o = !!i || s.isZoomable()),
              a.toggleClass("fancybox-is-zoomable", o),
              n("[data-fancybox-zoom]").prop("disabled", !o),
              i
                ? a.addClass("fancybox-can-pan")
                : o &&
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
            var i = this,
              o = !1,
              s = i.current,
              r = s.$content;
            return (
              void 0 !== e && void 0 !== t
                ? (o = e < s.width && t < s.height)
                : r &&
                  ((o = n.fancybox.getTranslate(r)),
                  (o = o.width < s.width && o.height < s.height)),
              o
            );
          },
          canPan: function (e, t) {
            var i = this,
              o = i.current,
              s = null,
              r = !1;
            return (
              "image" === o.type &&
                (o.isComplete || (e && t)) &&
                !o.hasError &&
                ((r = i.getFitPos(o)),
                void 0 !== e && void 0 !== t
                  ? (s = { width: e, height: t })
                  : o.isComplete && (s = n.fancybox.getTranslate(o.$content)),
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
              i,
              o,
              s = this;
            if (!e.isLoading && !e.isLoaded) {
              if (((e.isLoading = !0), !1 === s.trigger("beforeLoad", e)))
                return (e.isLoading = !1), !1;
              switch (
                ((t = e.type),
                (i = e.$slide),
                i.off("refresh").trigger("onReset").addClass(e.opts.slideClass),
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
                    (o = n.ajax(
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
                    i.one("onReset", function () {
                      o.abort();
                    });
                  break;
                default:
                  s.setError(e);
              }
              return !0;
            }
          },
          setImage: function (e) {
            var i,
              o = this;
            setTimeout(function () {
              var t = e.$image;
              o.isClosing ||
                !e.isLoading ||
                (t && t.length && t[0].complete) ||
                e.hasError ||
                o.showLoading(e);
            }, 50),
              o.checkSrcset(e),
              (e.$content = n('<div class="fancybox-content"></div>')
                .addClass("fancybox-is-hidden")
                .appendTo(e.$slide.addClass("fancybox-slide--image"))),
              !1 !== e.opts.preload &&
                e.opts.width &&
                e.opts.height &&
                e.thumb &&
                ((e.width = e.opts.width),
                (e.height = e.opts.height),
                (i = t.createElement("img")),
                (i.onerror = function () {
                  n(this).remove(), (e.$ghost = null);
                }),
                (i.onload = function () {
                  o.afterLoad(e);
                }),
                (e.$ghost = n(i)
                  .addClass("fancybox-image")
                  .appendTo(e.$content)
                  .attr("src", e.thumb))),
              o.setBigImage(e);
          },
          checkSrcset: function (t) {
            var n,
              i,
              o,
              s,
              r = t.opts.srcset || t.opts.image.srcset;
            if (r) {
              (o = e.devicePixelRatio || 1),
                (s = e.innerWidth * o),
                (i = r.split(",").map(function (e) {
                  var t = {};
                  return (
                    e
                      .trim()
                      .split(/\s+/)
                      .forEach(function (e, n) {
                        var i = parseInt(e.substring(0, e.length - 1), 10);
                        if (0 === n) return (t.url = e);
                        i && ((t.value = i), (t.postfix = e[e.length - 1]));
                      }),
                    t
                  );
                })),
                i.sort(function (e, t) {
                  return e.value - t.value;
                });
              for (var a = 0; a < i.length; a++) {
                var l = i[a];
                if (
                  ("w" === l.postfix && l.value >= s) ||
                  ("x" === l.postfix && l.value >= o)
                ) {
                  n = l;
                  break;
                }
              }
              !n && i.length && (n = i[i.length - 1]),
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
            var i = this,
              o = t.createElement("img"),
              s = n(o);
            (e.$image = s
              .one("error", function () {
                i.setError(e);
              })
              .one("load", function () {
                var t;
                e.$ghost ||
                  (i.resolveImageSlideSize(
                    e,
                    this.naturalWidth,
                    this.naturalHeight
                  ),
                  i.afterLoad(e)),
                  i.isClosing ||
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
                        e.$ghost && !i.isClosing && e.$ghost.hide();
                      }, Math.min(300, Math.max(1e3, e.height / 1600))),
                    i.hideLoading(e));
              })
              .addClass("fancybox-image")
              .attr("src", e.src)
              .appendTo(e.$content)),
              (o.complete || "complete" == o.readyState) &&
              s.naturalWidth &&
              s.naturalHeight
                ? s.trigger("load")
                : o.error && s.trigger("error");
          },
          resolveImageSlideSize: function (e, t, n) {
            var i = parseInt(e.opts.width, 10),
              o = parseInt(e.opts.height, 10);
            (e.width = t),
              (e.height = n),
              i > 0 && ((e.width = i), (e.height = Math.floor((i * n) / t))),
              o > 0 && ((e.width = Math.floor((o * t) / n)), (e.height = o));
          },
          setIframe: function (e) {
            var t,
              i = this,
              o = e.opts.iframe,
              s = e.$slide;
            (e.$content = n(
              '<div class="fancybox-content' +
                (o.preload ? " fancybox-is-hidden" : "") +
                '"></div>'
            )
              .css(o.css)
              .appendTo(s)),
              s.addClass("fancybox-slide--" + e.contentType),
              (e.$iframe = t = n(
                o.tpl.replace(/\{rnd\}/g, new Date().getTime())
              )
                .attr(o.attr)
                .appendTo(e.$content)),
              o.preload
                ? (i.showLoading(e),
                  t.on("load.fb error.fb", function (t) {
                    (this.isReady = 1),
                      e.$slide.trigger("refresh"),
                      i.afterLoad(e);
                  }),
                  s.on("refresh.fb", function () {
                    var n,
                      i,
                      r = e.$content,
                      a = o.css.width,
                      l = o.css.height;
                    if (1 === t[0].isReady) {
                      try {
                        (n = t.contents()), (i = n.find("body"));
                      } catch (e) {}
                      i &&
                        i.length &&
                        i.children().length &&
                        (s.css("overflow", "visible"),
                        r.css({
                          width: "100%",
                          "max-width": "100%",
                          height: "9999px",
                        }),
                        void 0 === a &&
                          (a = Math.ceil(
                            Math.max(i[0].clientWidth, i.outerWidth(!0))
                          )),
                        r.css("width", a || "").css("max-width", ""),
                        void 0 === l &&
                          (l = Math.ceil(
                            Math.max(i[0].clientHeight, i.outerHeight(!0))
                          )),
                        r.css("height", l || ""),
                        s.css("overflow", "auto")),
                        r.removeClass("fancybox-is-hidden");
                    }
                  }))
                : i.afterLoad(e),
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
            var i = this;
            i.isClosing ||
              (i.hideLoading(e),
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
              i.afterLoad(e));
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
              i = e || n.current,
              o = i.opts.caption,
              s = i.opts.preventCaptionOverlap,
              r = n.$refs.caption,
              a = !1;
            r.toggleClass("fancybox-caption--separate", s),
              s &&
                o &&
                o.length &&
                (i.pos !== n.currPos
                  ? ((t = r.clone().appendTo(r.parent())),
                    t.children().eq(0).empty().html(o),
                    (a = t.outerHeight(!0)),
                    t.empty().remove())
                  : n.$caption && (a = n.$caption.outerHeight(!0)),
                i.$slide.css("padding-bottom", a || ""));
          },
          adjustLayout: function (e) {
            var t,
              n,
              i,
              o,
              s = this,
              r = e || s.current;
            r.isLoaded &&
              !0 !== r.opts.disableLayoutFix &&
              (r.$content.css("margin-bottom", ""),
              r.$content.outerHeight() > r.$slide.height() + 0.5 &&
                ((i = r.$slide[0].style["padding-bottom"]),
                (o = r.$slide.css("padding-bottom")),
                parseFloat(o) > 0 &&
                  ((t = r.$slide[0].scrollHeight),
                  r.$slide.css("padding-bottom", 0),
                  Math.abs(t - r.$slide[0].scrollHeight) < 1 && (n = o),
                  r.$slide.css("padding-bottom", i))),
              r.$content.css("margin-bottom", n));
          },
          revealContent: function (e) {
            var t,
              i,
              o,
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
              (o =
                e.opts[
                  r.firstRun ? "animationDuration" : "transitionDuration"
                ]),
              (o = parseInt(
                void 0 === e.forcedDuration ? o : e.forcedDuration,
                10
              )),
              (!d && e.pos === r.currPos && o) || (t = !1),
              "zoom" === t &&
                (e.pos === r.currPos &&
                o &&
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
                  void n.fancybox.animate(e.$content, l, o, function () {
                    (r.isAnimating = !1), r.complete();
                  }))
                : (r.updateSlide(e),
                  t
                    ? (n.fancybox.stop(a),
                      (i =
                        "fancybox-slide--" +
                        (e.pos >= r.prevPos ? "next" : "previous") +
                        " fancybox-animated fancybox-fx-" +
                        t),
                      a.addClass(i).removeClass("fancybox-slide--current"),
                      e.$content.removeClass("fancybox-is-hidden"),
                      f(a),
                      "image" !== e.type && e.$content.hide().show(0),
                      void n.fancybox.animate(
                        a,
                        "fancybox-slide--current",
                        o,
                        function () {
                          a.removeClass(i).css({ transform: "", opacity: "" }),
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
              i,
              o,
              s,
              r,
              a = !1,
              l = e.$thumb;
            return (
              !(!l || !g(l[0])) &&
              ((t = n.fancybox.getTranslate(l)),
              (i = parseFloat(l.css("border-top-width") || 0)),
              (o = parseFloat(l.css("border-right-width") || 0)),
              (s = parseFloat(l.css("border-bottom-width") || 0)),
              (r = parseFloat(l.css("border-left-width") || 0)),
              (a = {
                top: t.top + i,
                left: t.left + r,
                width: t.width - o - r,
                height: t.height - i - s,
                scaleX: 1,
                scaleY: 1,
              }),
              t.width > 0 && t.height > 0 && a)
            );
          },
          complete: function () {
            var e,
              t = this,
              i = t.current,
              o = {};
            !t.isMoved() &&
              i.isLoaded &&
              (i.isComplete ||
                ((i.isComplete = !0),
                i.$slide.siblings().trigger("onReset"),
                t.preload("inline"),
                f(i.$slide),
                i.$slide.addClass("fancybox-slide--complete"),
                n.each(t.slides, function (e, i) {
                  i.pos >= t.currPos - 1 && i.pos <= t.currPos + 1
                    ? (o[i.pos] = i)
                    : i && (n.fancybox.stop(i.$slide), i.$slide.off().remove());
                }),
                (t.slides = o)),
              (t.isAnimating = !1),
              t.updateCursor(),
              t.trigger("afterShow"),
              i.opts.video.autoStart &&
                i.$slide
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
              i.opts.autoFocus &&
                "html" === i.contentType &&
                ((e = i.$content.find(
                  "input[autofocus]:enabled:visible:first"
                )),
                e.length ? e.trigger("focus") : t.focus(null, !0)),
              i.$slide.scrollTop(0).scrollLeft(0));
          },
          preload: function (e) {
            var t,
              n,
              i = this;
            i.group.length < 2 ||
              ((n = i.slides[i.currPos + 1]),
              (t = i.slides[i.currPos - 1]),
              t && t.type === e && i.loadSlide(t),
              n && n.type === e && i.loadSlide(n));
          },
          focus: function (e, i) {
            var o,
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
              ((o =
                !e && r.current && r.current.isComplete
                  ? r.current.$slide.find(
                      "*:visible" + (i ? ":not(.fancybox-close-small)" : "")
                    )
                  : r.$refs.container.find("*:visible")),
              (o = o.filter(a).filter(function () {
                return (
                  "hidden" !== n(this).css("visibility") &&
                  !n(this).hasClass("disabled")
                );
              })),
              o.length
                ? ((s = o.index(t.activeElement)),
                  e && e.shiftKey
                    ? (s < 0 || 0 == s) &&
                      (e.preventDefault(), o.eq(o.length - 1).trigger("focus"))
                    : (s < 0 || s == o.length - 1) &&
                      (e && e.preventDefault(), o.eq(0).trigger("focus")))
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
            var i,
              o,
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
                  (i = p.opts.animationEffect),
                  (o = n.isNumeric(t) ? t : i ? p.opts.animationDuration : 0),
                  p.$slide.removeClass(
                    "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                  ),
                  !0 !== e ? n.fancybox.stop(p.$slide) : (i = !1),
                  p.$slide.siblings().trigger("onReset").remove(),
                  o &&
                    u.$refs.container
                      .removeClass("fancybox-is-open")
                      .addClass("fancybox-is-closing")
                      .css("transition-duration", o + "ms"),
                  u.hideLoading(p),
                  u.hideControls(!0),
                  u.updateCursor(),
                  "zoom" !== i ||
                    (s &&
                      o &&
                      "image" === p.type &&
                      !u.isMoved() &&
                      !p.hasError &&
                      (c = u.getThumbPos(p))) ||
                    (i = "fade"),
                  "zoom" === i
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
                      n.fancybox.animate(s, c, o, h),
                      !0)
                    : (i && o
                        ? n.fancybox.animate(
                            p.$slide
                              .addClass("fancybox-slide--previous")
                              .removeClass("fancybox-slide--current"),
                            "fancybox-animated fancybox-fx-" + i,
                            o,
                            h
                          )
                        : !0 === e
                        ? setTimeout(h, o)
                        : h(),
                      !0)))
            );
          },
          cleanUp: function (t) {
            var i,
              o,
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
                  ((o = e.scrollX),
                  (s = e.scrollY),
                  a.trigger("focus"),
                  n("html, body").scrollTop(s).scrollLeft(o))),
              (r.current = null),
              (i = n.fancybox.getInstance()),
              i
                ? i.activate()
                : (n("body").removeClass(
                    "fancybox-active compensate-for-scrollbar"
                  ),
                  n("#fancybox-style-noscroll").remove());
          },
          trigger: function (e, t) {
            var i,
              o = Array.prototype.slice.call(arguments, 1),
              s = this,
              r = t && t.opts ? t : s.current;
            if (
              (r ? o.unshift(r) : (r = s),
              o.unshift(s),
              n.isFunction(r.opts[e]) && (i = r.opts[e].apply(r, o)),
              !1 === i)
            )
              return i;
            "afterClose" !== e && s.$refs
              ? s.$refs.container.trigger(e + ".fb", o)
              : a.trigger(e + ".fb", o);
          },
          updateControls: function () {
            var e = this,
              i = e.current,
              o = i.index,
              s = e.$refs.container,
              r = e.$refs.caption,
              a = i.opts.caption;
            i.$slide.trigger("refresh"),
              a && a.length
                ? ((e.$caption = r), r.children().eq(0).html(a))
                : (e.$caption = null),
              e.hasHiddenControls || e.isIdle || e.showControls(),
              s.find("[data-fancybox-count]").html(e.group.length),
              s.find("[data-fancybox-index]").html(o + 1),
              s
                .find("[data-fancybox-prev]")
                .prop("disabled", !i.opts.loop && o <= 0),
              s
                .find("[data-fancybox-next]")
                .prop("disabled", !i.opts.loop && o >= e.group.length - 1),
              "image" === i.type
                ? s
                    .find("[data-fancybox-zoom]")
                    .show()
                    .end()
                    .find("[data-fancybox-download]")
                    .attr("href", i.opts.image.src || i.src)
                    .show()
                : i.opts.toolbar &&
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
                i = Array.prototype.slice.call(arguments, 1);
              return (
                t instanceof v &&
                ("string" === n.type(e)
                  ? t[e].apply(t, i)
                  : "function" === n.type(e) && e.apply(t, i),
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
                i = {};
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
                  n.length && (i.transform = n),
                  void 0 !== t.opacity && (i.opacity = t.opacity),
                  void 0 !== t.width && (i.width = t.width),
                  void 0 !== t.height && (i.height = t.height),
                  e.css(i)
                );
            },
            animate: function (e, t, i, o, s) {
              var r,
                a = this;
              n.isFunction(i) && ((o = i), (i = null)),
                a.stop(e),
                (r = a.getTranslate(e)),
                e.on(p, function (l) {
                  (!l ||
                    !l.originalEvent ||
                    (e.is(l.originalEvent.target) &&
                      "z-index" != l.originalEvent.propertyName)) &&
                    (a.stop(e),
                    n.isNumeric(i) && e.css("transition-duration", ""),
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
                    n.isFunction(o) && o(l));
                }),
                n.isNumeric(i) && e.css("transition-duration", i + "ms"),
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
                  }, i + 33)
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
                    .on("click.fb-start", t, { options: e }, o)
                : this.off("click.fb-start").on(
                    "click.fb-start",
                    { items: this, options: e },
                    o
                  ),
              this
            );
          }),
          a.on("click.fb-start", "[data-fancybox]", o),
          a.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
            n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]')
              .eq(n(this).attr("data-fancybox-index") || 0)
              .trigger("click.fb-start", { $trigger: n(this) });
          }),
          (function () {
            var e = null;
            a.on("mousedown mouseup focus blur", ".fancybox-button", function (
              t
            ) {
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
            });
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
          n = function (t, n, i) {
            if (t)
              return (
                (i = i || ""),
                "object" === e.type(i) && (i = e.param(i, !0)),
                e.each(n, function (e, n) {
                  t = t.replace("$" + e, n || "");
                }),
                i.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + i),
                t
              );
          };
        e(document).on("objectNeedsType.fb", function (i, o, s) {
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
            e.each(r, function (t, i) {
              if ((l = f.match(i.matcher))) {
                if (
                  ((h = i.type),
                  (p = t),
                  (u = {}),
                  i.paramPlace && l[i.paramPlace])
                ) {
                  (d = l[i.paramPlace]),
                    "?" == d[0] && (d = d.substring(1)),
                    (d = d.split("&"));
                  for (var o = 0; o < d.length; ++o) {
                    var r = d[o].split("=", 2);
                    2 == r.length &&
                      (u[r[0]] = decodeURIComponent(r[1].replace(/\+/g, " ")));
                  }
                }
                return (
                  (c = e.extend(!0, {}, i.params, s.opts[t], u)),
                  (f =
                    "function" === e.type(i.url)
                      ? i.url.call(this, l, c, s)
                      : n(i.url, l, c)),
                  (a =
                    "function" === e.type(i.thumb)
                      ? i.thumb.call(this, l, c, s)
                      : n(i.thumb, l)),
                  "youtube" === t
                    ? (f = f.replace(/&t=((\d+)m)?(\d+)s/, function (
                        e,
                        t,
                        n,
                        i
                      ) {
                        return (
                          "&start=" +
                          ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10))
                        );
                      }))
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
        var i = {
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
            var n, i, o;
            "youtube" === t && delete window.onYouTubeIframeAPIReady,
              (n = e.fancybox.getInstance()) &&
                ((i = n.current.$content.find("iframe")),
                "youtube" === t && void 0 !== YT && YT
                  ? (o = new YT.Player(i.attr("id"), {
                      events: {
                        onStateChange: function (e) {
                          0 == e.data && n.next();
                        },
                      },
                    }))
                  : "vimeo" === t &&
                    void 0 !== Vimeo &&
                    Vimeo &&
                    ((o = new Vimeo.Player(i)),
                    o.on("ended", function () {
                      n.next();
                    })));
          },
        };
        e(document).on({
          "afterShow.fb": function (e, t, n) {
            t.group.length > 1 &&
              ("youtube" === n.contentSource || "vimeo" === n.contentSource) &&
              i.load(n.contentSource);
          },
        });
      })(jQuery),
      (function (e, t, n) {
        var i = (function () {
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
          o = (function () {
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
            for (var i in t)
              t[i].pageX
                ? n.push({ x: t[i].pageX, y: t[i].pageY })
                : t[i].clientX && n.push({ x: t[i].clientX, y: t[i].clientY });
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
            for (var t = 0, i = e[0].attributes, o = i.length; t < o; t++)
              if ("data-fancybox-" === i[t].nodeName.substr(0, 14)) return !0;
            return !1;
          },
          l = function (t) {
            var n = e.getComputedStyle(t)["overflow-y"],
              i = e.getComputedStyle(t)["overflow-x"],
              o =
                ("scroll" === n || "auto" === n) &&
                t.scrollHeight > t.clientHeight,
              s =
                ("scroll" === i || "auto" === i) &&
                t.scrollWidth > t.clientWidth;
            return o || s;
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
            e.requestId && (o(e.requestId), (e.requestId = null)),
            e.tapped && (clearTimeout(e.tapped), (e.tapped = null));
        }),
          (d.prototype.ontouchstart = function (i) {
            var o = this,
              l = n(i.target),
              d = o.instance,
              u = d.current,
              p = u.$slide,
              f = u.$content,
              h = "touchstart" == i.type;
            if (
              (h && o.$container.off("mousedown.fb.touch"),
              (!i.originalEvent || 2 != i.originalEvent.button) &&
                p.length &&
                l.length &&
                !a(l) &&
                !a(l.parent()) &&
                (l.is("img") ||
                  !(
                    i.originalEvent.clientX >
                    l[0].clientWidth + l.offset().left
                  )))
            ) {
              if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated"))
                return i.stopPropagation(), void i.preventDefault();
              (o.realPoints = o.startPoints = s(i)),
                o.startPoints.length &&
                  (u.touch && i.stopPropagation(),
                  (o.startEvent = i),
                  (o.canTap = !0),
                  (o.$target = l),
                  (o.$content = f),
                  (o.opts = u.opts.touch),
                  (o.isPanning = !1),
                  (o.isSwiping = !1),
                  (o.isZooming = !1),
                  (o.isScrolling = !1),
                  (o.canPan = d.canPan()),
                  (o.startTime = new Date().getTime()),
                  (o.distanceX = o.distanceY = o.distance = 0),
                  (o.canvasWidth = Math.round(p[0].clientWidth)),
                  (o.canvasHeight = Math.round(p[0].clientHeight)),
                  (o.contentLastPos = null),
                  (o.contentStartPos = n.fancybox.getTranslate(o.$content) || {
                    top: 0,
                    left: 0,
                  }),
                  (o.sliderStartPos = n.fancybox.getTranslate(p)),
                  (o.stagePos = n.fancybox.getTranslate(d.$refs.stage)),
                  (o.sliderStartPos.top -= o.stagePos.top),
                  (o.sliderStartPos.left -= o.stagePos.left),
                  (o.contentStartPos.top -= o.stagePos.top),
                  (o.contentStartPos.left -= o.stagePos.left),
                  n(t)
                    .off(".fb.touch")
                    .on(
                      h
                        ? "touchend.fb.touch touchcancel.fb.touch"
                        : "mouseup.fb.touch mouseleave.fb.touch",
                      n.proxy(o, "ontouchend")
                    )
                    .on(
                      h ? "touchmove.fb.touch" : "mousemove.fb.touch",
                      n.proxy(o, "ontouchmove")
                    ),
                  n.fancybox.isMobile &&
                    t.addEventListener("scroll", o.onscroll, !0),
                  (((o.opts || o.canPan) &&
                    (l.is(o.$stage) || o.$stage.find(l).length)) ||
                    (l.is(".fancybox-image") && i.preventDefault(),
                    n.fancybox.isMobile &&
                      l.parents(".fancybox-caption").length)) &&
                    ((o.isScrollable = c(l) || c(l.parent())),
                    (n.fancybox.isMobile && o.isScrollable) ||
                      i.preventDefault(),
                    (1 === o.startPoints.length || u.hasError) &&
                      (o.canPan
                        ? (n.fancybox.stop(o.$content), (o.isPanning = !0))
                        : (o.isSwiping = !0),
                      o.$container.addClass("fancybox-is-grabbing")),
                    2 === o.startPoints.length &&
                      "image" === u.type &&
                      (u.isLoaded || u.$ghost) &&
                      ((o.canTap = !1),
                      (o.isSwiping = !1),
                      (o.isPanning = !1),
                      (o.isZooming = !0),
                      n.fancybox.stop(o.$content),
                      (o.centerPointStartX =
                        0.5 * (o.startPoints[0].x + o.startPoints[1].x) -
                        n(e).scrollLeft()),
                      (o.centerPointStartY =
                        0.5 * (o.startPoints[0].y + o.startPoints[1].y) -
                        n(e).scrollTop()),
                      (o.percentageOfImageAtPinchPointX =
                        (o.centerPointStartX - o.contentStartPos.left) /
                        o.contentStartPos.width),
                      (o.percentageOfImageAtPinchPointY =
                        (o.centerPointStartY - o.contentStartPos.top) /
                        o.contentStartPos.height),
                      (o.startDistanceBetweenFingers = r(
                        o.startPoints[0],
                        o.startPoints[1]
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
                r.requestId && (o(r.requestId), (r.requestId = null)),
                (r.requestId = i(function () {
                  r.sliderLastPos &&
                    (n.each(r.instance.slides, function (e, t) {
                      var i = t.pos - r.instance.currPos;
                      n.fancybox.setTranslate(t.$slide, {
                        top: r.sliderLastPos.top,
                        left:
                          r.sliderLastPos.left +
                          i * r.canvasWidth +
                          i * t.opts.gutter,
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
                  var i, o;
                  n.fancybox.stop(t.$slide),
                    (i = n.fancybox.getTranslate(t.$slide)),
                    (o = n.fancybox.getTranslate(a.$refs.stage)),
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
                      ((r.sliderStartPos.top = i.top - o.top),
                      (r.sliderStartPos.left = i.left - o.left)),
                    n.fancybox.setTranslate(t.$slide, {
                      top: i.top - o.top,
                      left: i.left - o.left,
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
              e.requestId && o(e.requestId),
              (e.requestId = i(function () {
                n.fancybox.setTranslate(e.$content, e.contentLastPos);
              }));
          }),
          (d.prototype.limitMovement = function () {
            var e,
              t,
              n,
              i,
              o,
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
              (o = h > a ? p + c : p),
              (s = f + d),
              (e = Math.max(0, 0.5 * a - 0.5 * h)),
              (t = Math.max(0, 0.5 * l - 0.5 * g)),
              (n = Math.min(a - h, 0.5 * a - 0.5 * h)),
              (i = Math.min(l - g, 0.5 * l - 0.5 * g)),
              c > 0 && o > e && (o = e - 1 + Math.pow(-e + p + c, 0.8) || 0),
              c < 0 && o < n && (o = n + 1 - Math.pow(n - p - c, 0.8) || 0),
              d > 0 && s > t && (s = t - 1 + Math.pow(-t + f + d, 0.8) || 0),
              d < 0 && s < i && (s = i + 1 - Math.pow(i - f - d, 0.8) || 0),
              { top: s, left: o }
            );
          }),
          (d.prototype.limitPosition = function (e, t, n, i) {
            var o = this,
              s = o.canvasWidth,
              r = o.canvasHeight;
            return (
              n > s
                ? ((e = e > 0 ? 0 : e), (e = e < s - n ? s - n : e))
                : (e = Math.max(0, s / 2 - n / 2)),
              i > r
                ? ((t = t > 0 ? 0 : t), (t = t < r - i ? r - i : t))
                : (t = Math.max(0, r / 2 - i / 2)),
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
              t.requestId && o(t.requestId),
              (t.requestId = i(function () {
                n.fancybox.setTranslate(t.$content, t.contentLastPos);
              }));
          }),
          (d.prototype.ontouchend = function (e) {
            var i = this,
              r = i.isSwiping,
              a = i.isPanning,
              l = i.isZooming,
              c = i.isScrolling;
            if (
              ((i.endPoints = s(e)),
              (i.dMs = Math.max(new Date().getTime() - i.startTime, 1)),
              i.$container.removeClass("fancybox-is-grabbing"),
              n(t).off(".fb.touch"),
              t.removeEventListener("scroll", i.onscroll, !0),
              i.requestId && (o(i.requestId), (i.requestId = null)),
              (i.isSwiping = !1),
              (i.isPanning = !1),
              (i.isZooming = !1),
              (i.isScrolling = !1),
              (i.instance.isDragging = !1),
              i.canTap)
            )
              return i.onTap(e);
            (i.speed = 100),
              (i.velocityX = (i.distanceX / i.dMs) * 0.5),
              (i.velocityY = (i.distanceY / i.dMs) * 0.5),
              a ? i.endPanning() : l ? i.endZooming() : i.endSwiping(r, c);
          }),
          (d.prototype.endSwiping = function (e, t) {
            var i = this,
              o = !1,
              s = i.instance.group.length,
              r = Math.abs(i.distanceX),
              a = "x" == e && s > 1 && ((i.dMs > 130 && r > 10) || r > 50);
            (i.sliderLastPos = null),
              "y" == e && !t && Math.abs(i.distanceY) > 50
                ? (n.fancybox.animate(
                    i.instance.current.$slide,
                    {
                      top:
                        i.sliderStartPos.top + i.distanceY + 150 * i.velocityY,
                      opacity: 0,
                    },
                    200
                  ),
                  (o = i.instance.close(!0, 250)))
                : a && i.distanceX > 0
                ? (o = i.instance.previous(300))
                : a && i.distanceX < 0 && (o = i.instance.next(300)),
              !1 !== o || ("x" != e && "y" != e) || i.instance.centerSlide(200),
              i.$container.removeClass("fancybox-is-sliding");
          }),
          (d.prototype.endPanning = function () {
            var e,
              t,
              i,
              o = this;
            o.contentLastPos &&
              (!1 === o.opts.momentum || o.dMs > 350
                ? ((e = o.contentLastPos.left), (t = o.contentLastPos.top))
                : ((e = o.contentLastPos.left + 500 * o.velocityX),
                  (t = o.contentLastPos.top + 500 * o.velocityY)),
              (i = o.limitPosition(
                e,
                t,
                o.contentStartPos.width,
                o.contentStartPos.height
              )),
              (i.width = o.contentStartPos.width),
              (i.height = o.contentStartPos.height),
              n.fancybox.animate(o.$content, i, 366));
          }),
          (d.prototype.endZooming = function () {
            var e,
              t,
              i,
              o,
              s = this,
              r = s.instance.current,
              a = s.newWidth,
              l = s.newHeight;
            s.contentLastPos &&
              ((e = s.contentLastPos.left),
              (t = s.contentLastPos.top),
              (o = {
                top: t,
                left: e,
                width: a,
                height: l,
                scaleX: 1,
                scaleY: 1,
              }),
              n.fancybox.setTranslate(s.$content, o),
              a < s.canvasWidth && l < s.canvasHeight
                ? s.instance.scaleToFit(150)
                : a > r.width || l > r.height
                ? s.instance.scaleToActual(
                    s.centerPointStartX,
                    s.centerPointStartY,
                    150
                  )
                : ((i = s.limitPosition(e, t, a, l)),
                  n.fancybox.animate(s.$content, i, 150)));
          }),
          (d.prototype.onTap = function (t) {
            var i,
              o = this,
              r = n(t.target),
              a = o.instance,
              l = a.current,
              c = (t && s(t)) || o.startPoints,
              d = c[0] ? c[0].x - n(e).scrollLeft() - o.stagePos.left : 0,
              u = c[0] ? c[0].y - n(e).scrollTop() - o.stagePos.top : 0,
              p = function (e) {
                var i = l.opts[e];
                if ((n.isFunction(i) && (i = i.apply(a, [l, t])), i))
                  switch (i) {
                    case "close":
                      a.close(o.startEvent);
                      break;
                    case "toggleControls":
                      a.toggleControls();
                      break;
                    case "next":
                      a.next();
                      break;
                    case "nextOrClose":
                      a.group.length > 1 ? a.next() : a.close(o.startEvent);
                      break;
                    case "zoom":
                      "image" == l.type &&
                        (l.isLoaded || l.$ghost) &&
                        (a.canPan()
                          ? a.scaleToFit()
                          : a.isScaledDown()
                          ? a.scaleToActual(d, u)
                          : a.group.length < 2 && a.close(o.startEvent));
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
                i = "Outside";
              else if (r.is(".fancybox-slide")) i = "Slide";
              else {
                if (
                  !a.current.$content ||
                  !a.current.$content.find(r).addBack().filter(r).length
                )
                  return;
                i = "Content";
              }
              if (o.tapped) {
                if (
                  (clearTimeout(o.tapped),
                  (o.tapped = null),
                  Math.abs(d - o.tapX) > 50 || Math.abs(u - o.tapY) > 50)
                )
                  return this;
                p("dblclick" + i);
              } else
                (o.tapX = d),
                  (o.tapY = u),
                  l.opts["dblclick" + i] &&
                  l.opts["dblclick" + i] !== l.opts["click" + i]
                    ? (o.tapped = setTimeout(function () {
                        (o.tapped = null), a.isAnimating || p("click" + i);
                      }, 500))
                    : p("click" + i);
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
              i = n.group[n.currIndex].opts.slideShow;
            (e.$button = n.$refs.toolbar
              .find("[data-fancybox-play]")
              .on("click", function () {
                e.toggle();
              })),
              n.group.length < 2 || !i
                ? e.$button.hide()
                : i.progress &&
                  (e.$progress = t(
                    '<div class="fancybox-progress"></div>'
                  ).appendTo(n.$refs.inner));
          },
          set: function (e) {
            var n = this,
              i = n.instance,
              o = i.current;
            o && (!0 === e || o.opts.loop || i.currIndex < i.group.length - 1)
              ? n.isActive &&
                "video" !== o.contentType &&
                (n.$progress &&
                  t.fancybox.animate(
                    n.$progress.show(),
                    { scaleX: 1 },
                    o.opts.slideShow.speed
                  ),
                (n.timer = setTimeout(function () {
                  i.current.opts.loop || i.current.index != i.group.length - 1
                    ? i.next()
                    : i.jumpTo(0);
                }, o.opts.slideShow.speed)))
              : (n.stop(), (i.idleSecondsCounter = 0), i.showControls());
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
            "beforeShow.fb": function (e, t, n, i) {
              var o = t && t.SlideShow;
              i
                ? o && n.opts.slideShow.autoStart && o.start()
                : o && o.isActive && o.clear();
            },
            "afterShow.fb": function (e, t, n) {
              var i = t && t.SlideShow;
              i && i.isActive && i.set();
            },
            "afterKeydown.fb": function (n, i, o, s, r) {
              var a = i && i.SlideShow;
              !a ||
                !o.opts.slideShow ||
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
              i = n && n.SlideShow;
            i && i.isActive && (e.hidden ? i.clear() : i.set());
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
              i = 0;
            i < t.length;
            i++
          ) {
            var o = t[i];
            if (o && o[1] in e) {
              for (var s = 0; s < o.length; s++) n[t[0][s]] = o[s];
              return n;
            }
          }
          return !1;
        })();
        if (n) {
          var i = {
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
              var e = i.isFullscreen(),
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
            var o;
            if (!n)
              return void t.$refs.toolbar
                .find("[data-fancybox-fullscreen]")
                .remove();
            t && t.group[t.currIndex].opts.fullScreen
              ? ((o = t.$refs.container),
                o.on(
                  "click.fb-fullscreen",
                  "[data-fancybox-fullscreen]",
                  function (e) {
                    e.stopPropagation(), e.preventDefault(), i.toggle();
                  }
                ),
                t.opts.fullScreen &&
                  !0 === t.opts.fullScreen.autoStart &&
                  i.request(),
                (t.FullScreen = i))
              : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
          },
          "afterKeydown.fb": function (e, t, n, i, o) {
            t &&
              t.FullScreen &&
              70 === o &&
              (i.preventDefault(), t.FullScreen.toggle());
          },
          "beforeClose.fb": function (e, t) {
            t &&
              t.FullScreen &&
              t.$refs.container.hasClass("fancybox-is-fullscreen") &&
              i.exit();
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
        var i = function (e) {
          this.init(e);
        };
        t.extend(i.prototype, {
          $button: null,
          $grid: null,
          $list: null,
          isVisible: !1,
          isActive: !1,
          init: function (e) {
            var t = this,
              n = e.group,
              i = 0;
            (t.instance = e),
              (t.opts = n[e.currIndex].opts.thumbs),
              (e.Thumbs = t),
              (t.$button = e.$refs.toolbar.find("[data-fancybox-thumbs]"));
            for (
              var o = 0, s = n.length;
              o < s && (n[o].thumb && i++, !(i > 1));
              o++
            );
            i > 1 && t.opts
              ? (t.$button.removeAttr("style").on("click", function () {
                  t.toggle();
                }),
                (t.isActive = !0))
              : t.$button.hide();
          },
          create: function () {
            var e,
              i = this,
              o = i.instance,
              s = i.opts.parentEl,
              r = [];
            i.$grid ||
              ((i.$grid = t(
                '<div class="' + n + " " + n + "-" + i.opts.axis + '"></div>'
              ).appendTo(o.$refs.container.find(s).addBack().filter(s))),
              i.$grid.on("click", "a", function () {
                o.jumpTo(t(this).attr("data-index"));
              })),
              i.$list ||
                (i.$list = t('<div class="' + n + '__list">').appendTo(
                  i.$grid
                )),
              t.each(o.group, function (t, n) {
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
              (i.$list[0].innerHTML = r.join("")),
              "x" === i.opts.axis &&
                i.$list.width(
                  parseInt(i.$grid.css("padding-right"), 10) +
                    o.group.length * i.$list.children().eq(0).outerWidth(!0)
                );
          },
          focus: function (e) {
            var t,
              n,
              i = this,
              o = i.$list,
              s = i.$grid;
            i.instance.current &&
              ((t = o
                .children()
                .removeClass("fancybox-thumbs-active")
                .filter('[data-index="' + i.instance.current.index + '"]')
                .addClass("fancybox-thumbs-active")),
              (n = t.position()),
              "y" === i.opts.axis &&
              (n.top < 0 || n.top > o.height() - t.outerHeight())
                ? o.stop().animate({ scrollTop: o.scrollTop() + n.top }, e)
                : "x" === i.opts.axis &&
                  (n.left < s.scrollLeft() ||
                    n.left > s.scrollLeft() + (s.width() - t.outerWidth())) &&
                  o.parent().stop().animate({ scrollLeft: n.left }, e));
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
                ((n = new i(t)),
                n.isActive && !0 === n.opts.autoStart && n.show());
            },
            "beforeShow.fb": function (e, t, n, i) {
              var o = t && t.Thumbs;
              o && o.isVisible && o.focus(i ? 0 : 250);
            },
            "afterKeydown.fb": function (e, t, n, i, o) {
              var s = t && t.Thumbs;
              s && s.isActive && 71 === o && (i.preventDefault(), s.toggle());
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
              i,
              o = t.fancybox.getInstance(),
              s = o.current || null;
            s &&
              ("function" === t.type(s.opts.share.url) &&
                (e = s.opts.share.url.apply(s, [o, s])),
              (i = s.opts.share.tpl
                .replace(
                  /\{\{media\}\}/g,
                  "image" === s.type ? encodeURIComponent(s.src) : ""
                )
                .replace(/\{\{url\}\}/g, encodeURIComponent(e))
                .replace(/\{\{url_raw\}\}/g, n(e))
                .replace(
                  /\{\{descr\}\}/g,
                  o.$caption ? encodeURIComponent(o.$caption.text()) : ""
                )),
              t.fancybox.open({
                src: o.translate(o, i),
                type: "html",
                opts: {
                  touch: !1,
                  animationEffect: !1,
                  afterLoad: function (e, t) {
                    o.$refs.container.one("beforeClose.fb", function () {
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
        function i() {
          var t = e.location.hash.substr(1),
            n = t.split("-"),
            i =
              n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
                ? parseInt(n.pop(-1), 10) || 1
                : 1,
            o = n.join("-");
          return { hash: t, index: i < 1 ? 1 : i, gallery: o };
        }
        function o(e) {
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
                  var n, o;
                  !1 !== t.group[t.currIndex].opts.hash &&
                    ((n = i()),
                    (o = s(t)) &&
                      n.gallery &&
                      o == n.gallery &&
                      (t.currIndex = n.index - 1));
                },
                "beforeShow.fb": function (n, i, o, r) {
                  var a;
                  o &&
                    !1 !== o.opts.hash &&
                    (a = s(i)) &&
                    ((i.currentHash =
                      a + (i.group.length > 1 ? "-" + (o.index + 1) : "")),
                    e.location.hash !== "#" + i.currentHash &&
                      (r && !i.origHash && (i.origHash = e.location.hash),
                      i.hashTimer && clearTimeout(i.hashTimer),
                      (i.hashTimer = setTimeout(function () {
                        "replaceState" in e.history
                          ? (e.history[r ? "pushState" : "replaceState"](
                              {},
                              t.title,
                              e.location.pathname +
                                e.location.search +
                                "#" +
                                i.currentHash
                            ),
                            r && (i.hasCreatedHistory = !0))
                          : (e.location.hash = i.currentHash),
                          (i.hashTimer = null);
                      }, 300))));
                },
                "beforeClose.fb": function (n, i, o) {
                  o &&
                    !1 !== o.opts.hash &&
                    (clearTimeout(i.hashTimer),
                    i.currentHash && i.hasCreatedHistory
                      ? e.history.back()
                      : i.currentHash &&
                        ("replaceState" in e.history
                          ? e.history.replaceState(
                              {},
                              t.title,
                              e.location.pathname +
                                e.location.search +
                                (i.origHash || "")
                            )
                          : (e.location.hash = i.origHash)),
                    (i.currentHash = null));
                },
              }),
              n(e).on("hashchange.fb", function () {
                var e = i(),
                  t = null;
                n.each(n(".fancybox-container").get().reverse(), function (
                  e,
                  i
                ) {
                  var o = n(i).data("FancyBox");
                  if (o && o.currentHash) return (t = o), !1;
                }),
                  t
                    ? t.currentHash === e.gallery + "-" + e.index ||
                      (1 === e.index && t.currentHash == e.gallery) ||
                      ((t.currentHash = null), t.close())
                    : "" !== e.gallery && o(e);
              }),
              setTimeout(function () {
                n.fancybox.getInstance() || o(i());
              }, 50));
          });
      })(window, document, jQuery),
      (function (e, t) {
        var n = new Date().getTime();
        t(e).on({
          "onInit.fb": function (e, t, i) {
            t.$refs.stage.on(
              "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
              function (e) {
                var i = t.current,
                  o = new Date().getTime();
                t.group.length < 2 ||
                  !1 === i.opts.wheel ||
                  ("auto" === i.opts.wheel && "image" !== i.type) ||
                  (e.preventDefault(),
                  e.stopPropagation(),
                  i.$slide.hasClass("fancybox-animated") ||
                    ((e = e.originalEvent || e),
                    o - n < 250 ||
                      ((n = o),
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
    function i(e) {
      var t = (0, r.default)(this);
      (0, r.default)(window).scroll(function (e) {
        if ((0, r.default)(window).width() <= "600") {
          var n = t.offset().top - (0, r.default)(window).height() - 30;
          (0, r.default)(document).scrollTop() > n && t.addClass("fade_in");
        } else {
          var n = t.offset().top - (0, r.default)(window).height() - 10;
          (0, r.default)(document).scrollTop() > n && t.addClass("fade_in");
        }
      });
    }
    function o(e) {
      var t = (0, r.default)(this);
      (0, r.default)(document).ready(function () {
        (0, r.default)(document).ready() && t.addClass("fade_in");
      });
    }
    var s = n(0),
      r = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(s);
    (0, r.default)("h1").each(o),
      (0, r.default)("h2").each(i),
      (0, r.default)("h3").each(i),
      (0, r.default)(".wait__img").each(i),
      (0, r.default)(".complex__item").each(i),
      (0, r.default)(".fade__content").each(o),
      (0, r.default)(".animat").each(i);
  },
  function (e, t, n) {
    "use strict";
    var i = n(0),
      o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i);
    n(11),
      (0, o.default)(".qualification__workers-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: !1,
        infinite: !0,
        nextArrow: (0, o.default)(".arrowRight"),
        prevArrow: (0, o.default)(".arrowLeft"),
        autoplay: !0,
        autoplaySpeed: 3e3,
        lazyLoad: "progressive",
        responsive: [
          { breakpoint: 901, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 568, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
      (0, o.default)(".qualification__certificate-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: !1,
        infinite: !0,
        nextArrow: (0, o.default)(".arrowRightBot"),
        prevArrow: (0, o.default)(".arrowLeftBot"),
        autoplay: !0,
        autoplaySpeed: 3e3,
        lazyLoad: "progressive",
        responsive: [
          { breakpoint: 901, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          { breakpoint: 568, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
      (0, o.default)(".reviews__screenshots-phoneSlide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
        asNavFor: ".reviews__screenshots-slider",
        autoplay: !0,
        autoplaySpeed: 3e3,
        lazyLoad: "progressive",
      }),
      (0, o.default)(".reviews__screenshots-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: !1,
        infinite: !0,
        nextArrow: (0, o.default)(".reviews__screenshots-arrowRight"),
        prevArrow: (0, o.default)(".reviews__screenshots-arrowLeft"),
        autoplay: !0,
        autoplaySpeed: 3e3,
        pauseOnHover: !0,
        variableWidth: !0,
        asNavFor: ".reviews__screenshots-phoneSlide",
        lazyLoad: "progressive",
        responsive: [
          { breakpoint: 901, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          { breakpoint: 568, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
      (0, o.default)(".master__workers-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !1,
        infinite: !0,
        nextArrow: (0, o.default)(".arrowRight"),
        prevArrow: (0, o.default)(".arrowLeft"),
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
      (0, o.default)(".master__descr-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !1,
        arrows: !1,
        fade: !0,
        asNavFor: ".master__workers-slider",
        lazyLoad: "progressive",
      }),
      (0, o.default)(".master__certificate-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: !1,
        infinite: !0,
        nextArrow: (0, o.default)(".arrowRightBot"),
        prevArrow: (0, o.default)(".arrowLeftBot"),
        autoplay: !0,
        autoplaySpeed: 3e3,
        lazyLoad: "progressive",
        responsive: [
          { breakpoint: 901, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          { breakpoint: 568, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      });
    var s = (0, o.default)(".screenshots__slider-paging");
    (0, o.default)(".screenshots__slider-phoneSlide").on(
      "init reInit afterChange",
      function (e, t, n, i) {
        var o = (n || 0) + 1;
        s.html(
          "<span class='bold roze'>" +
            o +
            "</span>  /  <span>" +
            t.slideCount +
            "</span>"
        );
      }
    ),
      (0, o.default)(".screenshots__slider-phoneSlide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !1,
        infinite: !0,
        nextArrow: (0, o.default)(".screenshots__slider-arrowRight"),
        prevArrow: (0, o.default)(".screenshots__slider-arrowLeft"),
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
      (0, o.default)(".screenshots__mesage-items").slick({
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
      (0, o.default)(".graduate__student-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: !1,
        infinite: !1,
        nextArrow: (0, o.default)(".graduate__student-slider--arrowR"),
        prevArrow: (0, o.default)(".graduate__student-slider--arrowL"),
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
    var i,
      o,
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
      (o = [n(0)]),
        (i = r),
        void 0 !== (s = "function" == typeof i ? i.apply(t, o) : i) &&
          (e.exports = s);
    })(function (e) {
      var t = window.Slick || {};
      (t = (function () {
        function t(t, i) {
          var o,
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
            (o = e(t).data("slick") || {}),
            (s.options = e.extend({}, s.defaults, i, o)),
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
        (t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
          var o = this;
          if ("boolean" == typeof n) (i = n), (n = null);
          else if (n < 0 || n >= o.slideCount) return !1;
          o.unload(),
            "number" == typeof n
              ? 0 === n && 0 === o.$slides.length
                ? e(t).appendTo(o.$slideTrack)
                : i
                ? e(t).insertBefore(o.$slides.eq(n))
                : e(t).insertAfter(o.$slides.eq(n))
              : !0 === i
              ? e(t).prependTo(o.$slideTrack)
              : e(t).appendTo(o.$slideTrack),
            (o.$slides = o.$slideTrack.children(this.options.slide)),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            o.$slides.each(function (t, n) {
              e(n).attr("data-slick-index", t);
            }),
            (o.$slidesCache = o.$slides),
            o.reinit();
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
          var i = {},
            o = this;
          o.animateHeight(),
            !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
            !1 === o.transformsEnabled
              ? !1 === o.options.vertical
                ? o.$slideTrack.animate(
                    { left: t },
                    o.options.speed,
                    o.options.easing,
                    n
                  )
                : o.$slideTrack.animate(
                    { top: t },
                    o.options.speed,
                    o.options.easing,
                    n
                  )
              : !1 === o.cssTransitions
              ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
                e({ animStart: o.currentLeft }).animate(
                  { animStart: t },
                  {
                    duration: o.options.speed,
                    easing: o.options.easing,
                    step: function (e) {
                      (e = Math.ceil(e)),
                        !1 === o.options.vertical
                          ? ((i[o.animType] = "translate(" + e + "px, 0px)"),
                            o.$slideTrack.css(i))
                          : ((i[o.animType] = "translate(0px," + e + "px)"),
                            o.$slideTrack.css(i));
                    },
                    complete: function () {
                      n && n.call();
                    },
                  }
                ))
              : (o.applyTransition(),
                (t = Math.ceil(t)),
                !1 === o.options.vertical
                  ? (i[o.animType] = "translate3d(" + t + "px, 0px, 0px)")
                  : (i[o.animType] = "translate3d(0px," + t + "px, 0px)"),
                o.$slideTrack.css(i),
                n &&
                  setTimeout(function () {
                    o.disableTransition(), n.call();
                  }, o.options.speed));
        }),
        (t.prototype.getNavTarget = function () {
          var t = this,
            n = t.options.asNavFor;
          return n && null !== n && (n = e(n).not(t.$slider)), n;
        }),
        (t.prototype.asNavFor = function (t) {
          var n = this,
            i = n.getNavTarget();
          null !== i &&
            "object" === (void 0 === i ? "undefined" : r(i)) &&
            i.each(function () {
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
            i = this;
          if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (
              i.$slider.addClass("slick-dotted"),
                n = e("<ul />").addClass(i.options.dotsClass),
                t = 0;
              t <= i.getDotCount();
              t += 1
            )
              n.append(
                e("<li />").append(i.options.customPaging.call(this, i, t))
              );
            (i.$dots = n.appendTo(i.options.appendDots)),
              i.$dots.find("li").first().addClass("slick-active");
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
            i,
            o,
            s,
            r,
            a = this;
          if (
            ((i = document.createDocumentFragment()),
            (s = a.$slider.children()),
            a.options.rows > 0)
          ) {
            for (
              r = a.options.slidesPerRow * a.options.rows,
                o = Math.ceil(s.length / r),
                e = 0;
              e < o;
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
              i.appendChild(l);
            }
            a.$slider.empty().append(i),
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
          var i,
            o,
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
            o = null;
            for (i in r.breakpoints)
              r.breakpoints.hasOwnProperty(i) &&
                (!1 === r.originalSettings.mobileFirst
                  ? s < r.breakpoints[i] && (o = r.breakpoints[i])
                  : s > r.breakpoints[i] && (o = r.breakpoints[i]));
            null !== o
              ? null !== r.activeBreakpoint
                ? (o !== r.activeBreakpoint || n) &&
                  ((r.activeBreakpoint = o),
                  "unslick" === r.breakpointSettings[o]
                    ? r.unslick(o)
                    : ((r.options = e.extend(
                        {},
                        r.originalSettings,
                        r.breakpointSettings[o]
                      )),
                      !0 === t && (r.currentSlide = r.options.initialSlide),
                      r.refresh(t)),
                  (a = o))
                : ((r.activeBreakpoint = o),
                  "unslick" === r.breakpointSettings[o]
                    ? r.unslick(o)
                    : ((r.options = e.extend(
                        {},
                        r.originalSettings,
                        r.breakpointSettings[o]
                      )),
                      !0 === t && (r.currentSlide = r.options.initialSlide),
                      r.refresh(t)),
                  (a = o))
              : null !== r.activeBreakpoint &&
                ((r.activeBreakpoint = null),
                (r.options = r.originalSettings),
                !0 === t && (r.currentSlide = r.options.initialSlide),
                r.refresh(t),
                (a = o)),
              t || !1 === a || r.$slider.trigger("breakpoint", [r, a]);
          }
        }),
        (t.prototype.changeSlide = function (t, n) {
          var i,
            o,
            s,
            r = this,
            a = e(t.currentTarget);
          switch (
            (a.is("a") && t.preventDefault(),
            a.is("li") || (a = a.closest("li")),
            (s = r.slideCount % r.options.slidesToScroll != 0),
            (i = s
              ? 0
              : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
            t.data.message)
          ) {
            case "previous":
              (o =
                0 === i
                  ? r.options.slidesToScroll
                  : r.options.slidesToShow - i),
                r.slideCount > r.options.slidesToShow &&
                  r.slideHandler(r.currentSlide - o, !1, n);
              break;
            case "next":
              (o = 0 === i ? r.options.slidesToScroll : i),
                r.slideCount > r.options.slidesToShow &&
                  r.slideHandler(r.currentSlide + o, !1, n);
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
            i = this;
          if (((t = i.getNavigableIndexes()), (n = 0), e > t[t.length - 1]))
            e = t[t.length - 1];
          else
            for (var o in t) {
              if (e < t[o]) {
                e = n;
                break;
              }
              n = t[o];
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
              var i = e(this);
              setTimeout(function () {
                t.options.pauseOnFocus &&
                  ((t.focussed = i.is(":focus")), t.autoPlay());
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
            i = 0;
          if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow) ++i;
            else
              for (; t < e.slideCount; )
                ++i,
                  (t = n + e.options.slidesToScroll),
                  (n +=
                    e.options.slidesToScroll <= e.options.slidesToShow
                      ? e.options.slidesToScroll
                      : e.options.slidesToShow);
          else if (!0 === e.options.centerMode) i = e.slideCount;
          else if (e.options.asNavFor)
            for (; t < e.slideCount; )
              ++i,
                (t = n + e.options.slidesToScroll),
                (n +=
                  e.options.slidesToScroll <= e.options.slidesToShow
                    ? e.options.slidesToScroll
                    : e.options.slidesToShow);
          else
            i =
              1 +
              Math.ceil(
                (e.slideCount - e.options.slidesToShow) /
                  e.options.slidesToScroll
              );
          return i - 1;
        }),
        (t.prototype.getLeft = function (e) {
          var t,
            n,
            i,
            o,
            s = this,
            r = 0;
          return (
            (s.slideOffset = 0),
            (n = s.$slides.first().outerHeight(!0)),
            !0 === s.options.infinite
              ? (s.slideCount > s.options.slidesToShow &&
                  ((s.slideOffset = s.slideWidth * s.options.slidesToShow * -1),
                  (o = -1),
                  !0 === s.options.vertical &&
                    !0 === s.options.centerMode &&
                    (2 === s.options.slidesToShow
                      ? (o = -1.5)
                      : 1 === s.options.slidesToShow && (o = -2)),
                  (r = n * s.options.slidesToShow * o)),
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
              ((i =
                s.slideCount <= s.options.slidesToShow ||
                !1 === s.options.infinite
                  ? s.$slideTrack.children(".slick-slide").eq(e)
                  : s.$slideTrack
                      .children(".slick-slide")
                      .eq(e + s.options.slidesToShow)),
              (t =
                !0 === s.options.rtl
                  ? i[0]
                    ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width())
                    : 0
                  : i[0]
                  ? -1 * i[0].offsetLeft
                  : 0),
              !0 === s.options.centerMode &&
                ((i =
                  s.slideCount <= s.options.slidesToShow ||
                  !1 === s.options.infinite
                    ? s.$slideTrack.children(".slick-slide").eq(e)
                    : s.$slideTrack
                        .children(".slick-slide")
                        .eq(e + s.options.slidesToShow + 1)),
                (t =
                  !0 === s.options.rtl
                    ? i[0]
                      ? -1 *
                        (s.$slideTrack.width() - i[0].offsetLeft - i.width())
                      : 0
                    : i[0]
                    ? -1 * i[0].offsetLeft
                    : 0),
                (t += (s.$list.width() - i.outerWidth()) / 2))),
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
            i = 0,
            o = [];
          for (
            !1 === t.options.infinite
              ? (e = t.slideCount)
              : ((n = -1 * t.options.slidesToScroll),
                (i = -1 * t.options.slidesToScroll),
                (e = 2 * t.slideCount));
            n < e;

          )
            o.push(n),
              (n = i + t.options.slidesToScroll),
              (i +=
                t.options.slidesToScroll <= t.options.slidesToShow
                  ? t.options.slidesToScroll
                  : t.options.slidesToShow);
          return o;
        }),
        (t.prototype.getSlick = function () {
          return this;
        }),
        (t.prototype.getSlideCount = function () {
          var t,
            n,
            i = this;
          return (
            (n =
              !0 === i.options.centerMode
                ? i.slideWidth * Math.floor(i.options.slidesToShow / 2)
                : 0),
            !0 === i.options.swipeToSlide
              ? (i.$slideTrack.find(".slick-slide").each(function (o, s) {
                  if (
                    s.offsetLeft - n + e(s).outerWidth() / 2 >
                    -1 * i.swipeLeft
                  )
                    return (t = s), !1;
                }),
                Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1)
              : i.options.slidesToScroll
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
            i = t.getNavigableIndexes().filter(function (e) {
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
                  var o = i.indexOf(n);
                  if (
                    (e(this).attr({
                      role: "tabpanel",
                      id: "slick-slide" + t.instanceUid + n,
                      tabindex: -1,
                    }),
                    -1 !== o)
                  ) {
                    var s = "slick-slide-control" + t.instanceUid + o;
                    e("#" + s).length &&
                      e(this).attr({ "aria-describedby": s });
                  }
                }),
              t.$dots
                .attr("role", "tablist")
                .find("li")
                .each(function (o) {
                  var s = i[o];
                  e(this).attr({ role: "presentation" }),
                    e(this)
                      .find("button")
                      .first()
                      .attr({
                        role: "tab",
                        id: "slick-slide-control" + t.instanceUid + o,
                        "aria-controls": "slick-slide" + t.instanceUid + s,
                        "aria-label": o + 1 + " of " + n,
                        "aria-selected": null,
                        tabindex: "-1",
                      });
                })
                .eq(t.currentSlide)
                .find("button")
                .attr({ "aria-selected": "true", tabindex: "0" })
                .end());
          for (
            var o = t.currentSlide, s = o + t.options.slidesToShow;
            o < s;
            o++
          )
            t.options.focusOnChange
              ? t.$slides.eq(o).attr({ tabindex: "0" })
              : t.$slides.eq(o).removeAttr("tabindex");
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
                i = e(this).attr("data-srcset"),
                o = e(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                s = document.createElement("img");
              (s.onload = function () {
                t.animate({ opacity: 0 }, 100, function () {
                  i && (t.attr("srcset", i), o && t.attr("sizes", o)),
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
            i,
            o,
            s,
            r = this;
          if (
            (!0 === r.options.centerMode
              ? !0 === r.options.infinite
                ? ((o = r.currentSlide + (r.options.slidesToShow / 2 + 1)),
                  (s = o + r.options.slidesToShow + 2))
                : ((o = Math.max(
                    0,
                    r.currentSlide - (r.options.slidesToShow / 2 + 1)
                  )),
                  (s = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide))
              : ((o = r.options.infinite
                  ? r.options.slidesToShow + r.currentSlide
                  : r.currentSlide),
                (s = Math.ceil(o + r.options.slidesToShow)),
                !0 === r.options.fade &&
                  (o > 0 && o--, s <= r.slideCount && s++)),
            (n = r.$slider.find(".slick-slide").slice(o, s)),
            "anticipated" === r.options.lazyLoad)
          )
            for (
              var a = o - 1, l = s, c = r.$slider.find(".slick-slide"), d = 0;
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
              ? ((i = r.$slider.find(".slick-slide")), t(i))
              : r.currentSlide >= r.slideCount - r.options.slidesToShow
              ? ((i = r.$slider
                  .find(".slick-cloned")
                  .slice(0, r.options.slidesToShow)),
                t(i))
              : 0 === r.currentSlide &&
                ((i = r.$slider
                  .find(".slick-cloned")
                  .slice(-1 * r.options.slidesToShow)),
                t(i));
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
            i,
            o,
            s,
            r,
            a = this,
            l = e("img[data-lazy]", a.$slider);
          l.length
            ? ((n = l.first()),
              (i = n.attr("data-lazy")),
              (o = n.attr("data-srcset")),
              (s = n.attr("data-sizes") || a.$slider.attr("data-sizes")),
              (r = document.createElement("img")),
              (r.onload = function () {
                o && (n.attr("srcset", o), s && n.attr("sizes", s)),
                  n
                    .attr("src", i)
                    .removeAttr("data-lazy data-srcset data-sizes")
                    .removeClass("slick-loading"),
                  !0 === a.options.adaptiveHeight && a.setPosition(),
                  a.$slider.trigger("lazyLoaded", [a, n, i]),
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
                    a.$slider.trigger("lazyLoadError", [a, n, i]),
                    a.progressiveLazyLoad());
              }),
              (r.src = i))
            : a.$slider.trigger("allImagesLoaded", [a]);
        }),
        (t.prototype.refresh = function (t) {
          var n,
            i,
            o = this;
          (i = o.slideCount - o.options.slidesToShow),
            !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
            o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
            (n = o.currentSlide),
            o.destroy(!0),
            e.extend(o, o.initials, { currentSlide: n }),
            o.init(),
            t || o.changeSlide({ data: { message: "index", index: n } }, !1);
        }),
        (t.prototype.registerBreakpoints = function () {
          var t,
            n,
            i,
            o = this,
            s = o.options.responsive || null;
          if ("array" === e.type(s) && s.length) {
            o.respondTo = o.options.respondTo || "window";
            for (t in s)
              if (((i = o.breakpoints.length - 1), s.hasOwnProperty(t))) {
                for (n = s[t].breakpoint; i >= 0; )
                  o.breakpoints[i] &&
                    o.breakpoints[i] === n &&
                    o.breakpoints.splice(i, 1),
                    i--;
                o.breakpoints.push(n),
                  (o.breakpointSettings[n] = s[t].settings);
              }
            o.breakpoints.sort(function (e, t) {
              return o.options.mobileFirst ? e - t : t - e;
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
          var i = this;
          if (
            ("boolean" == typeof e
              ? ((t = e), (e = !0 === t ? 0 : i.slideCount - 1))
              : (e = !0 === t ? --e : e),
            i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
          )
            return !1;
          i.unload(),
            !0 === n
              ? i.$slideTrack.children().remove()
              : i.$slideTrack.children(this.options.slide).eq(e).remove(),
            (i.$slides = i.$slideTrack.children(this.options.slide)),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slideTrack.append(i.$slides),
            (i.$slidesCache = i.$slides),
            i.reinit();
        }),
        (t.prototype.setCSS = function (e) {
          var t,
            n,
            i = this,
            o = {};
          !0 === i.options.rtl && (e = -e),
            (t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
            (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
            (o[i.positionProp] = e),
            !1 === i.transformsEnabled
              ? i.$slideTrack.css(o)
              : ((o = {}),
                !1 === i.cssTransitions
                  ? ((o[i.animType] = "translate(" + t + ", " + n + ")"),
                    i.$slideTrack.css(o))
                  : ((o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"),
                    i.$slideTrack.css(o)));
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
          n.$slides.each(function (i, o) {
            (t = n.slideWidth * i * -1),
              !0 === n.options.rtl
                ? e(o).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0,
                  })
                : e(o).css({
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
            i,
            o,
            s,
            r = this,
            a = !1;
          if (
            ("object" === e.type(arguments[0])
              ? ((i = arguments[0]), (a = arguments[1]), (s = "multiple"))
              : "string" === e.type(arguments[0]) &&
                ((i = arguments[0]),
                (o = arguments[1]),
                (a = arguments[2]),
                "responsive" === arguments[0] &&
                "array" === e.type(arguments[1])
                  ? (s = "responsive")
                  : void 0 !== arguments[1] && (s = "single")),
            "single" === s)
          )
            r.options[i] = o;
          else if ("multiple" === s)
            e.each(i, function (e, t) {
              r.options[e] = t;
            });
          else if ("responsive" === s)
            for (n in o)
              if ("array" !== e.type(r.options.responsive))
                r.options.responsive = [o[n]];
              else {
                for (t = r.options.responsive.length - 1; t >= 0; )
                  r.options.responsive[t].breakpoint === o[n].breakpoint &&
                    r.options.responsive.splice(t, 1),
                    t--;
                r.options.responsive.push(o[n]);
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
            i,
            o,
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
                  : ((i = s.options.slidesToShow + e),
                    n
                      .slice(i - t + 1 + r, i + t + 2)
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
              : ((o = s.slideCount % s.options.slidesToShow),
                (i =
                  !0 === s.options.infinite ? s.options.slidesToShow + e : e),
                s.options.slidesToShow == s.options.slidesToScroll &&
                s.slideCount - e < s.options.slidesToShow
                  ? n
                      .slice(i - (s.options.slidesToShow - o), i + o)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : n
                      .slice(i, i + s.options.slidesToShow)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false"));
          ("ondemand" !== s.options.lazyLoad &&
            "anticipated" !== s.options.lazyLoad) ||
            s.lazyLoad();
        }),
        (t.prototype.setupInfinite = function () {
          var t,
            n,
            i,
            o = this;
          if (
            (!0 === o.options.fade && (o.options.centerMode = !1),
            !0 === o.options.infinite &&
              !1 === o.options.fade &&
              ((n = null), o.slideCount > o.options.slidesToShow))
          ) {
            for (
              i =
                !0 === o.options.centerMode
                  ? o.options.slidesToShow + 1
                  : o.options.slidesToShow,
                t = o.slideCount;
              t > o.slideCount - i;
              t -= 1
            )
              (n = t - 1),
                e(o.$slides[n])
                  .clone(!0)
                  .attr("id", "")
                  .attr("data-slick-index", n - o.slideCount)
                  .prependTo(o.$slideTrack)
                  .addClass("slick-cloned");
            for (t = 0; t < i + o.slideCount; t += 1)
              (n = t),
                e(o.$slides[n])
                  .clone(!0)
                  .attr("id", "")
                  .attr("data-slick-index", n + o.slideCount)
                  .appendTo(o.$slideTrack)
                  .addClass("slick-cloned");
            o.$slideTrack
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
            i = e(t.target).is(".slick-slide")
              ? e(t.target)
              : e(t.target).parents(".slick-slide"),
            o = parseInt(i.attr("data-slick-index"));
          if ((o || (o = 0), n.slideCount <= n.options.slidesToShow))
            return void n.slideHandler(o, !1, !0);
          n.slideHandler(o);
        }),
        (t.prototype.slideHandler = function (e, t, n) {
          var i,
            o,
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
              (i = e),
              (l = c.getLeft(i)),
              (r = c.getLeft(c.currentSlide)),
              (c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft),
              !1 === c.options.infinite &&
                !1 === c.options.centerMode &&
                (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
            )
              return void (
                !1 === c.options.fade &&
                ((i = c.currentSlide),
                !0 !== n && c.slideCount > c.options.slidesToShow
                  ? c.animateSlide(r, function () {
                      c.postSlide(i);
                    })
                  : c.postSlide(i))
              );
            if (
              !1 === c.options.infinite &&
              !0 === c.options.centerMode &&
              (e < 0 || e > c.slideCount - c.options.slidesToScroll)
            )
              return void (
                !1 === c.options.fade &&
                ((i = c.currentSlide),
                !0 !== n && c.slideCount > c.options.slidesToShow
                  ? c.animateSlide(r, function () {
                      c.postSlide(i);
                    })
                  : c.postSlide(i))
              );
            if (
              (c.options.autoplay && clearInterval(c.autoPlayTimer),
              (o =
                i < 0
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                    : c.slideCount + i
                  : i >= c.slideCount
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? 0
                    : i - c.slideCount
                  : i),
              (c.animating = !0),
              c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
              (s = c.currentSlide),
              (c.currentSlide = o),
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
                    c.fadeSlide(o, function () {
                      c.postSlide(o);
                    }))
                  : c.postSlide(o),
                void c.animateHeight()
              );
            !0 !== n && c.slideCount > c.options.slidesToShow
              ? c.animateSlide(l, function () {
                  c.postSlide(o);
                })
              : c.postSlide(o);
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
            i,
            o = this;
          return (
            (e = o.touchObject.startX - o.touchObject.curX),
            (t = o.touchObject.startY - o.touchObject.curY),
            (n = Math.atan2(t, e)),
            (i = Math.round((180 * n) / Math.PI)),
            i < 0 && (i = 360 - Math.abs(i)),
            i <= 45 && i >= 0
              ? !1 === o.options.rtl
                ? "left"
                : "right"
              : i <= 360 && i >= 315
              ? !1 === o.options.rtl
                ? "left"
                : "right"
              : i >= 135 && i <= 225
              ? !1 === o.options.rtl
                ? "right"
                : "left"
              : !0 === o.options.verticalSwiping
              ? i >= 35 && i <= 135
                ? "down"
                : "up"
              : "vertical"
          );
        }),
        (t.prototype.swipeEnd = function (e) {
          var t,
            n,
            i = this;
          if (((i.dragging = !1), (i.swiping = !1), i.scrolling))
            return (i.scrolling = !1), !1;
          if (
            ((i.interrupted = !1),
            (i.shouldClick = !(i.touchObject.swipeLength > 10)),
            void 0 === i.touchObject.curX)
          )
            return !1;
          if (
            (!0 === i.touchObject.edgeHit &&
              i.$slider.trigger("edge", [i, i.swipeDirection()]),
            i.touchObject.swipeLength >= i.touchObject.minSwipe)
          ) {
            switch ((n = i.swipeDirection())) {
              case "left":
              case "down":
                (t = i.options.swipeToSlide
                  ? i.checkNavigable(i.currentSlide + i.getSlideCount())
                  : i.currentSlide + i.getSlideCount()),
                  (i.currentDirection = 0);
                break;
              case "right":
              case "up":
                (t = i.options.swipeToSlide
                  ? i.checkNavigable(i.currentSlide - i.getSlideCount())
                  : i.currentSlide - i.getSlideCount()),
                  (i.currentDirection = 1);
            }
            "vertical" != n &&
              (i.slideHandler(t),
              (i.touchObject = {}),
              i.$slider.trigger("swipe", [i, n]));
          } else
            i.touchObject.startX !== i.touchObject.curX &&
              (i.slideHandler(i.currentSlide), (i.touchObject = {}));
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
            i,
            o,
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
                  (o =
                    (!1 === a.options.rtl ? 1 : -1) *
                    (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                  !0 === a.options.verticalSwiping &&
                    (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                  (i = a.touchObject.swipeLength),
                  (a.touchObject.edgeHit = !1),
                  !1 === a.options.infinite &&
                    ((0 === a.currentSlide && "right" === n) ||
                      (a.currentSlide >= a.getDotCount() && "left" === n)) &&
                    ((i = a.touchObject.swipeLength * a.options.edgeFriction),
                    (a.touchObject.edgeHit = !0)),
                  !1 === a.options.vertical
                    ? (a.swipeLeft = t + i * o)
                    : (a.swipeLeft =
                        t + i * (a.$list.height() / a.listWidth) * o),
                  !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o),
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
            i = this,
            o = arguments[0],
            s = Array.prototype.slice.call(arguments, 1),
            a = i.length;
          for (e = 0; e < a; e++)
            if (
              ("object" == (void 0 === o ? "undefined" : r(o)) || void 0 === o
                ? (i[e].slick = new t(i[e], o))
                : (n = i[e].slick[o].apply(i[e].slick, s)),
              void 0 !== n)
            )
              return n;
          return i;
        });
    });
  },
  function (e, t, n) {
    "use strict";
    var i = n(0),
      o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i);
    (window.mask = n(13)),
      (0, o.default)(function (e) {
        e("#inputTel").mask("+375 99 999 99 99", {
          placeholder: "+375 -- --- -- -- ",
        });
      }),
      (0, o.default)(function (e) {
        e(".inputTel").mask("+375 99 999 99 99", {
          placeholder: "+375 -- --- -- -- ",
        });
      });
  },
  function (e, t, n) {
    "use strict";
    var i, o, s;
    "function" == typeof Symbol && Symbol.iterator;
    !(function (r) {
      (o = [n(0)]),
        (i = r),
        void 0 !== (s = "function" == typeof i ? i.apply(t, o) : i) &&
          (e.exports = s);
    })(function (e) {
      var t,
        n = navigator.userAgent,
        i = /iphone/i.test(n),
        o = /chrome/i.test(n),
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
                      if (c[e] && P[e] === g(e)) return;
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
                  var n, i;
                  if (!(e < 0)) {
                    for (n = e, i = v(t); n < f; n++)
                      if (c[n]) {
                        if (!(i < f && c[n].test(P[i]))) break;
                        (P[n] = P[i]), (P[i] = g(i)), (i = v(i));
                      }
                    C(), A.caret(Math.max(u, e));
                  }
                }
                function b(e) {
                  var t, n, i, o;
                  for (t = e, n = g(e); t < f; t++)
                    if (c[t]) {
                      if (
                        ((i = v(t)),
                        (o = P[t]),
                        (P[t] = n),
                        !(i < f && c[i].test(o)))
                      )
                        break;
                      n = o;
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
                    var i = ($(!0), t.charAt(n.begin));
                    n.begin < f &&
                      (c[n.begin]
                        ? c[n.begin].test(i) && n.begin++
                        : (n.begin++, c[n.begin].test(i) && n.begin++)),
                      A.caret(n.begin, n.begin);
                  }
                  a();
                }
                function x(e) {
                  $(), A.val() != _ && A.change();
                }
                function T(e) {
                  if (!A.prop("readonly")) {
                    var t,
                      n,
                      o,
                      s = e.which || e.keyCode;
                    (h = A.val()),
                      8 === s || 46 === s || (i && 127 === s)
                        ? ((t = A.caret()),
                          (n = t.begin),
                          (o = t.end),
                          o - n == 0 &&
                            ((n = 46 !== s ? m(n) : (o = v(n - 1))),
                            (o = 46 === s ? v(o) : o)),
                          k(n, o),
                          y(n, o - 1),
                          e.preventDefault())
                        : 13 === s
                        ? x.call(this, e)
                        : 27 === s &&
                          (A.val(_), A.caret(0, $()), e.preventDefault());
                  }
                }
                function S(t) {
                  if (!A.prop("readonly")) {
                    var n,
                      i,
                      o,
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
                          ((i = String.fromCharCode(r)), c[n].test(i)))
                      ) {
                        if ((b(n), (P[n] = i), C(), (o = v(n)), s)) {
                          var d = function () {
                            e.proxy(e.fn.caret, A, o)();
                          };
                          setTimeout(d, 0);
                        } else A.caret(o);
                        l.begin <= p && a();
                      }
                      t.preventDefault();
                    }
                  }
                }
                function k(e, t) {
                  var n;
                  for (n = e; n < t && n < f; n++) c[n] && (P[n] = g(n));
                }
                function C() {
                  A.val(P.join(""));
                }
                function $(e) {
                  var t,
                    n,
                    i,
                    o = A.val(),
                    s = -1;
                  for (t = 0, i = 0; t < f; t++)
                    if (c[t]) {
                      for (P[t] = g(t); i++ < o.length; )
                        if (((n = o.charAt(i - 1)), c[t].test(n))) {
                          (P[t] = n), (s = t);
                          break;
                        }
                      if (i > o.length) {
                        k(t + 1, f);
                        break;
                      }
                    } else P[t] === o.charAt(i) && i++, t < d && (s = t);
                  return (
                    e
                      ? C()
                      : s + 1 < d
                      ? r.autoclear || P.join("") === E
                        ? (A.val() && A.val(""), k(0, f))
                        : C()
                      : (C(), A.val(A.val().substring(0, s + 1))),
                    d ? t : u
                  );
                }
                var A = e(this),
                  P = e.map(n.split(""), function (e, t) {
                    if ("?" != e) return l[e] ? g(t) : e;
                  }),
                  E = P.join(""),
                  _ = A.val();
                A.data(e.mask.dataName, function () {
                  return e
                    .map(P, function (e, t) {
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
                        (_ = A.val()),
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
                  o && s && A.off("input.mask").on("input.mask", w),
                  $();
              })
            );
          },
        });
    });
  },
  function (e, t, n) {
    "use strict";
    $(".header__burger-img").on("click", function () {
      $(".header__burger-menu")
        .addClass("header__menu-show")
        .animate({ opacity: 1 }, 200);
    }),
      $(".header__burger-close").on("click", function () {
        $(".header__burger-menu")
          .removeClass("header__menu-show")
          .animate({ opacity: 0 }, 200);
      });
  },
  function (e, t, n) {
    "use strict";
    $("details").click(function (e) {
      $("details").not(this).removeAttr("open");
    }),
      $("details").on("click", function () {
        var e = $(this).offset().top;
        $("body, html").animate({ scrollTop: e }, 200);
      });
  },
  function (e, t, n) {
    "use strict";
    var i = n(0),
      o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(i),
      s = (0, o.default)("#delivery-yes"),
      r = (0, o.default)("#delivery-no"),
      a = (0, o.default)(".cosmetic__cart-request--adress");
    s.change(function () {
      s.prop("checked") && a.addClass("show");
    }),
      r.click(function () {
        a.removeClass("show");
      });
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var o = n(0),
      s = i(o),
      r = n(18);
    i(r);
    (0, s.default)(".basic").fancySelect(),
      (0, s.default)(".popupSelect").fancySelect();
  },
  function (e, t, n) {
    "use strict";
    (function () {
      var e;
      (e = window.jQuery || window.Zepto || window.$),
        (e.fn.fancySelect = function (t) {
          var n, i;
          return (
            null == t && (t = {}),
            (i = e.extend(
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
              var t, o, s, r, a, l, c;
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
                  (n && !i.forceiOS) || c.append('<ul class="select__list">'),
                  (a = c.find(".select__btn")),
                  (s = c.find(".select__list")),
                  (o = r.prop("select--disabled")),
                  o && c.addClass("select--disabled"),
                  (l = function () {
                    var e;
                    return (
                      (e = i.triggerTemplate(r.find(":selected"))), a.html(e)
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
                    if (!o)
                      if (
                        (a.toggleClass("select__btn--opened"), n && !i.forceiOS)
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
                      (o = !1),
                      t()
                    );
                  }),
                  r.on("disable", function () {
                    return (
                      r.prop("disabled", !0),
                      c.addClass("select--disabled"),
                      (o = !0)
                    );
                  }),
                  r.on("change.fs", function (e) {
                    return e.originalEvent && e.originalEvent.isTrusted
                      ? e.stopPropagation()
                      : l();
                  }),
                  s.on("mousedown.fs", "li", function (t) {
                    var i;
                    return (
                      (i = e(this)),
                      r.val(i.data("raw-value")),
                      n || r.trigger("blur.fs").trigger("focus.fs"),
                      s.find(".selected").removeClass("selected"),
                      i.addClass("selected"),
                      a.addClass("select__btn--selected"),
                      r
                        .val(i.data("raw-value"))
                        .trigger("change.fs")
                        .trigger("blur.fs")
                        .trigger("focus.fs")
                    );
                  }),
                  (t = function () {
                    if ((l(), !n || i.forceiOS))
                      return (
                        r.find("option"),
                        r.find("option").each(function (t, n) {
                          var o;
                          if (
                            ((n = e(n)),
                            !n.prop("disabled") && (n.val() || i.includeBlank))
                          )
                            return (
                              (o = i.optionTemplate(n)),
                              n.prop("selected")
                                ? s.append(
                                    '<li data-raw-value="' +
                                      n.val() +
                                      '" class="selected">' +
                                      o +
                                      "</li>"
                                  )
                                : s.append(
                                    '<li data-raw-value="' +
                                      n.val() +
                                      '">' +
                                      o +
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
      $("body,html").animate({ scrollTop: 0 }, 200);
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
              e.filter(this.hash).fadeIn(800, "linear"),
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
                e.filter(this.hash).fadeIn(800, "linear"),
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
                e.filter(this.hash).fadeIn(800, "linear"),
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
      (i = []),
        $(".price__calc-total--js").html("0руб"),
        $(".price__calc-discount--js").html("0руб"),
        $(".price__calc-row input").each(function () {
          $(this).prop("checked", !1);
        });
    });
    var i = [];
    $(".costMas__calc-row input").each(function () {
      var e = 0;
      $(this).change(function () {
        (i = []),
          $(".costMas__calc-row input:checked").each(function () {
            i.push(Number($(this).val()));
          }),
          (function () {
            for (var t = 0; t < i.length; t++) e += i[t];
          })(),
          $(".price__calc-total--js").html(e + "руб");
        var t = e - (e / 100) * 15;
        (t = t.toFixed(1)),
          $(".price__calc-discount--js").html(t + "руб"),
          (e = 0);
      });
    });
    var o = 0;
    $("input:checkbox").on("change input", function () {
      $("input:checkbox[name='" + $(this).attr("name") + "']")
        .not(this)
        .prop("checked", !1);
    }),
      $(".price__calc-main input").on("change input", function () {
        (o = 0),
          $(".price__calc-main input:checked").each(function () {
            o += Number($(this).val());
          }),
          $(".price__calc-total--js").html(o + "руб");
        var e = o - (o / 100) * 15;
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
      $.each($(".header__menu a"), function () {
        this.href == e && $(this).addClass("menu--active");
      });
    });
  },
  function (e, t, n) {
    "use strict";
    $(".cosmetic__catalog-item a").on("click", function (e) {
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
        i();
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
            o(a, t, r),
            i();
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
              i(),
              o(a, t, r));
          });
      }),
      $("body").on("click", ".cosmetic__cart-delete", function (e) {
        $(this).closest(".cosmetic__cart-item").remove(), i();
      });
    var i = function () {
        var e = void 0,
          t = 0;
        $(".cosmetic__cart-price").each(function () {
          (e = parseFloat($(this).text(), 10)), (t += e);
        }),
          $(".cosmetic__cart-total--sum").html(t + " <span>руб</span>"),
          $(".cosmetic__cart-total input").val(t);
      },
      o = function (e, t, n) {
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
]);
