(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [98],
  {
    4155: function (e) {
      var t,
        n,
        r,
        o = (e.exports = {});
      function l() {
        throw Error('setTimeout has not been defined');
      }
      function i() {
        throw Error('clearTimeout has not been defined');
      }
      function u(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === l || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
        try {
          return t(e, 0);
        } catch (n) {
          try {
            return t.call(null, e, 0);
          } catch (n) {
            return t.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          t = 'function' == typeof setTimeout ? setTimeout : l;
        } catch (e) {
          t = l;
        }
        try {
          n = 'function' == typeof clearTimeout ? clearTimeout : i;
        } catch (e) {
          n = i;
        }
      })();
      var a = [],
        s = !1,
        c = -1;
      function d() {
        s && r && ((s = !1), r.length ? (a = r.concat(a)) : (c = -1), a.length && f());
      }
      function f() {
        if (!s) {
          var e = u(d);
          s = !0;
          for (var t = a.length; t; ) {
            for (r = a, a = []; ++c < t; ) r && r[c].run();
            (c = -1), (t = a.length);
          }
          (r = null),
            (s = !1),
            (function (e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === i || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(e);
              try {
                n(e);
              } catch (t) {
                try {
                  return n.call(null, e);
                } catch (t) {
                  return n.call(this, e);
                }
              }
            })(e);
        }
      }
      function m(e, t) {
        (this.fun = e), (this.array = t);
      }
      function p() {}
      (o.nextTick = function (e) {
        var t = Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        a.push(new m(e, t)), 1 !== a.length || s || u(f);
      }),
        (m.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (o.title = 'browser'),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ''),
        (o.versions = {}),
        (o.on = p),
        (o.addListener = p),
        (o.once = p),
        (o.off = p),
        (o.removeListener = p),
        (o.removeAllListeners = p),
        (o.emit = p),
        (o.prependListener = p),
        (o.prependOnceListener = p),
        (o.listeners = function (e) {
          return [];
        }),
        (o.binding = function (e) {
          throw Error('process.binding is not supported');
        }),
        (o.cwd = function () {
          return '/';
        }),
        (o.chdir = function (e) {
          throw Error('process.chdir is not supported');
        }),
        (o.umask = function () {
          return 0;
        });
    },
    1098: function (e, t, n) {
      'use strict';
      let r, o, l, i, u, a, s, c, d, f, m, p, h, v, g, E;
      n.d(t, {
        Vq: function () {
          return tv;
        },
        ZR: function () {
          return th;
        },
        EM: function () {
          return tp;
        },
      });
      var b,
        y,
        w = n(7294),
        T = n.t(w, 2),
        F =
          (((r = F || {}).Space = ' '),
          (r.Enter = 'Enter'),
          (r.Escape = 'Escape'),
          (r.Backspace = 'Backspace'),
          (r.Delete = 'Delete'),
          (r.ArrowLeft = 'ArrowLeft'),
          (r.ArrowUp = 'ArrowUp'),
          (r.ArrowRight = 'ArrowRight'),
          (r.ArrowDown = 'ArrowDown'),
          (r.Home = 'Home'),
          (r.End = 'End'),
          (r.PageUp = 'PageUp'),
          (r.PageDown = 'PageDown'),
          (r.Tab = 'Tab'),
          r),
        P = Object.defineProperty,
        C = (e, t, n) => (t in e ? P(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
        A = (e, t, n) => (C(e, 'symbol' != typeof t ? t + '' : t, n), n);
      class S {
        set(e) {
          this.current !== e && ((this.handoffState = 'pending'), (this.currentId = 0), (this.current = e));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return 'server' === this.current;
        }
        get isClient() {
          return 'client' === this.current;
        }
        detect() {
          return 'undefined' == typeof document ? 'server' : 'client';
        }
        handoff() {
          'pending' === this.handoffState && (this.handoffState = 'complete');
        }
        get isHandoffComplete() {
          return 'complete' === this.handoffState;
        }
        constructor() {
          A(this, 'current', this.detect()), A(this, 'handoffState', 'pending'), A(this, 'currentId', 0);
        }
      }
      let L = new S(),
        O = (e, t) => {
          L.isServer ? (0, w.useEffect)(e, t) : (0, w.useLayoutEffect)(e, t);
        };
      function x(e) {
        let t = (0, w.useRef)(e);
        return (
          O(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
      function k(e, t, n, r) {
        let o = x(n);
        (0, w.useEffect)(() => {
          function n(e) {
            o.current(e);
          }
          return (e = null != e ? e : window).addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
        }, [e, t, r]);
      }
      class R extends Map {
        get(e) {
          let t = super.get(e);
          return void 0 === t && ((t = this.factory(e)), this.set(e, t)), t;
        }
        constructor(e) {
          super(), (this.factory = e);
        }
      }
      function N(e, t) {
        let n = e(),
          r = new Set();
        return {
          getSnapshot: () => n,
          subscribe: (e) => (r.add(e), () => r.delete(e)),
          dispatch(e) {
            for (var o = arguments.length, l = Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) l[i - 1] = arguments[i];
            let u = t[e].call(n, ...l);
            u && ((n = u), r.forEach((e) => e()));
          },
        };
      }
      function M(e) {
        return (0, w.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot);
      }
      let D = new R(() =>
        N(() => [], {
          ADD(e) {
            return this.includes(e) ? this : [...this, e];
          },
          REMOVE(e) {
            let t = this.indexOf(e);
            if (-1 === t) return this;
            let n = this.slice();
            return n.splice(t, 1), n;
          },
        })
      );
      function I(e, t) {
        let n = D.get(t),
          r = (0, w.useId)(),
          o = M(n);
        if (
          (O(() => {
            if (e) return n.dispatch('ADD', r), () => n.dispatch('REMOVE', r);
          }, [n, e]),
          !e)
        )
          return !1;
        let l = o.indexOf(r),
          i = o.length;
        return -1 === l && ((l = i), (i += 1)), l === i - 1;
      }
      let H = function (e) {
        let t = x(e);
        return w.useCallback(
          function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return t.current(...n);
          },
          [t]
        );
      };
      function j(e) {
        'function' == typeof queueMicrotask
          ? queueMicrotask(e)
          : Promise.resolve()
              .then(e)
              .catch((e) =>
                setTimeout(() => {
                  throw e;
                })
              );
      }
      function _() {
        let e = [],
          t = {
            addEventListener: (e, n, r, o) => (
              e.addEventListener(n, r, o), t.add(() => e.removeEventListener(n, r, o))
            ),
            requestAnimationFrame() {
              for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
              let o = requestAnimationFrame(...n);
              return t.add(() => cancelAnimationFrame(o));
            },
            nextFrame() {
              for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
              return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
            },
            setTimeout() {
              for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
              let o = setTimeout(...n);
              return t.add(() => clearTimeout(o));
            },
            microTask() {
              for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
              let o = { current: !0 };
              return (
                j(() => {
                  o.current && n[0]();
                }),
                t.add(() => {
                  o.current = !1;
                })
              );
            },
            style(e, t, n) {
              let r = e.style.getPropertyValue(t);
              return (
                Object.assign(e.style, { [t]: n }),
                this.add(() => {
                  Object.assign(e.style, { [t]: r });
                })
              );
            },
            group(e) {
              let t = _();
              return e(t), this.add(() => t.dispose());
            },
            add: (t) => (
              e.includes(t) || e.push(t),
              () => {
                let n = e.indexOf(t);
                if (n >= 0) for (let t of e.splice(n, 1)) t();
              }
            ),
            dispose() {
              for (let t of e.splice(0)) t();
            },
          };
        return t;
      }
      function U(e) {
        return L.isServer
          ? null
          : e instanceof Node
            ? e.ownerDocument
            : null != e && e.hasOwnProperty('current') && e.current instanceof Node
              ? e.current.ownerDocument
              : document;
      }
      let V = new Map(),
        W = new Map();
      function B(e) {
        var t;
        let n = null != (t = W.get(e)) ? t : 0;
        return (
          W.set(e, n + 1),
          0 !== n ||
            (V.set(e, { 'aria-hidden': e.getAttribute('aria-hidden'), inert: e.inert }),
            e.setAttribute('aria-hidden', 'true'),
            (e.inert = !0)),
          () =>
            (function (e) {
              var t;
              let n = null != (t = W.get(e)) ? t : 1;
              if ((1 === n ? W.delete(e) : W.set(e, n - 1), 1 !== n)) return;
              let r = V.get(e);
              r &&
                (null === r['aria-hidden']
                  ? e.removeAttribute('aria-hidden')
                  : e.setAttribute('aria-hidden', r['aria-hidden']),
                (e.inert = r.inert),
                V.delete(e));
            })(e)
        );
      }
      function q(e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
        if (e in t) {
          let n = t[e];
          return 'function' == typeof n ? n(...r) : n;
        }
        let l = Error(
          'Tried to handle "'.concat(e, '" but there is no handler defined. Only defined handlers are: ').concat(
            Object.keys(t)
              .map((e) => '"'.concat(e, '"'))
              .join(', '),
            '.'
          )
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(l, q), l);
      }
      let Y = [
          '[contentEditable=true]',
          '[tabindex]',
          'a[href]',
          'area[href]',
          'button:not([disabled])',
          'iframe',
          'input:not([disabled])',
          'select:not([disabled])',
          'textarea:not([disabled])',
        ]
          .map((e) => ''.concat(e, ":not([tabindex='-1'])"))
          .join(','),
        G = ['[data-autofocus]'].map((e) => ''.concat(e, ":not([tabindex='-1'])")).join(',');
      var K =
          (((o = K || {})[(o.First = 1)] = 'First'),
          (o[(o.Previous = 2)] = 'Previous'),
          (o[(o.Next = 4)] = 'Next'),
          (o[(o.Last = 8)] = 'Last'),
          (o[(o.WrapAround = 16)] = 'WrapAround'),
          (o[(o.NoScroll = 32)] = 'NoScroll'),
          (o[(o.AutoFocus = 64)] = 'AutoFocus'),
          o),
        X =
          (((l = X || {})[(l.Error = 0)] = 'Error'),
          (l[(l.Overflow = 1)] = 'Overflow'),
          (l[(l.Success = 2)] = 'Success'),
          (l[(l.Underflow = 3)] = 'Underflow'),
          l),
        z = (((i = z || {})[(i.Previous = -1)] = 'Previous'), (i[(i.Next = 1)] = 'Next'), i),
        Z = (((u = Z || {})[(u.Strict = 0)] = 'Strict'), (u[(u.Loose = 1)] = 'Loose'), u),
        $ = (((a = $ || {})[(a.Keyboard = 0)] = 'Keyboard'), (a[(a.Mouse = 1)] = 'Mouse'), a);
      function J(e) {
        null == e || e.focus({ preventScroll: !0 });
      }
      function Q(e, t) {
        var n, r, o;
        let {
            sorted: l = !0,
            relativeTo: i = null,
            skipElements: u = [],
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = Array.isArray(e) ? (e.length > 0 ? e[0].ownerDocument : document) : e.ownerDocument,
          s = Array.isArray(e)
            ? l
              ? (function (e) {
                  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e) => e;
                  return e.slice().sort((e, n) => {
                    let r = t(e),
                      o = t(n);
                    if (null === r || null === o) return 0;
                    let l = r.compareDocumentPosition(o);
                    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
                  });
                })(e)
              : e
            : 64 & t
              ? (function () {
                  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
                  return null == e
                    ? []
                    : Array.from(e.querySelectorAll(G)).sort((e, t) =>
                        Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER))
                      );
                })(e)
              : (function () {
                  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
                  return null == e
                    ? []
                    : Array.from(e.querySelectorAll(Y)).sort((e, t) =>
                        Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER))
                      );
                })(e);
        u.length > 0 &&
          s.length > 1 &&
          (s = s.filter(
            (e) => !u.some((t) => (null != t && 'current' in t ? (null == t ? void 0 : t.current) === e : t === e))
          )),
          (i = null != i ? i : a.activeElement);
        let c = (() => {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last');
          })(),
          d = (() => {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, s.indexOf(i)) - 1;
            if (4 & t) return Math.max(0, s.indexOf(i)) + 1;
            if (8 & t) return s.length - 1;
            throw Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last');
          })(),
          f = 32 & t ? { preventScroll: !0 } : {},
          m = 0,
          p = s.length,
          h;
        do {
          if (m >= p || m + p <= 0) return 0;
          let e = d + m;
          if (16 & t) e = (e + p) % p;
          else {
            if (e < 0) return 3;
            if (e >= p) return 1;
          }
          null == (h = s[e]) || h.focus(f), (m += c);
        } while (h !== a.activeElement);
        return (
          6 & t &&
            null != (o = null == (r = null == (n = h) ? void 0 : n.matches) ? void 0 : r.call(n, 'textarea,input')) &&
            o &&
            h.select(),
          2
        );
      }
      function ee() {
        return (
          /iPhone/gi.test(window.navigator.platform) ||
          (/Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0)
        );
      }
      function et(e, t, n, r) {
        let o = x(n);
        (0, w.useEffect)(() => {
          if (e) return document.addEventListener(t, n, r), () => document.removeEventListener(t, n, r);
          function n(e) {
            o.current(e);
          }
        }, [e, t, r]);
      }
      function en(e, t, n, r) {
        let o = x(n);
        (0, w.useEffect)(() => {
          if (e) return window.addEventListener(t, n, r), () => window.removeEventListener(t, n, r);
          function n(e) {
            o.current(e);
          }
        }, [e, t, r]);
      }
      function er() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return (0, w.useMemo)(() => U(...t), [...t]);
      }
      function eo() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return Array.from(new Set(t.flatMap((e) => ('string' == typeof e ? e.split(' ') : []))))
          .filter(Boolean)
          .join(' ');
      }
      'undefined' != typeof document &&
        (document.addEventListener(
          'keydown',
          (e) => {
            e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = '');
          },
          !0
        ),
        document.addEventListener(
          'click',
          (e) => {
            1 === e.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = '');
          },
          !0
        ));
      var el =
          (((s = el || {})[(s.None = 0)] = 'None'),
          (s[(s.RenderStrategy = 1)] = 'RenderStrategy'),
          (s[(s.Static = 2)] = 'Static'),
          s),
        ei = (((c = ei || {})[(c.Unmount = 0)] = 'Unmount'), (c[(c.Hidden = 1)] = 'Hidden'), c);
      function eu() {
        let e, t;
        let n =
          ((e = (0, w.useRef)([])),
          (t = (0, w.useCallback)((t) => {
            for (let n of e.current) null != n && ('function' == typeof n ? n(t) : (n.current = t));
          }, [])),
          function () {
            for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            if (!r.every((e) => null == e)) return (e.current = r), t;
          });
        return (0, w.useCallback)(
          (e) =>
            (function (e) {
              let {
                ourProps: t,
                theirProps: n,
                slot: r,
                defaultTag: o,
                features: l,
                visible: i = !0,
                name: u,
                mergeRefs: a,
              } = e;
              a = null != a ? a : es;
              let s = ec(n, t);
              if (i) return ea(s, r, o, u, a);
              let c = null != l ? l : 0;
              if (2 & c) {
                let { static: e = !1, ...t } = s;
                if (e) return ea(t, r, o, u, a);
              }
              if (1 & c) {
                let { unmount: e = !0, ...t } = s;
                return q(e ? 0 : 1, {
                  0: () => null,
                  1: () => ea({ ...t, hidden: !0, style: { display: 'none' } }, r, o, u, a),
                });
              }
              return ea(s, r, o, u, a);
            })({ mergeRefs: n, ...e }),
          [n]
        );
      }
      function ea(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = arguments.length > 3 ? arguments[3] : void 0,
          o = arguments.length > 4 ? arguments[4] : void 0,
          { as: l = n, children: i, refName: u = 'ref', ...a } = em(e, ['unmount', 'static']),
          s = void 0 !== e.ref ? { [u]: e.ref } : {},
          c = 'function' == typeof i ? i(t) : i;
        'className' in a && a.className && 'function' == typeof a.className && (a.className = a.className(t)),
          a['aria-labelledby'] && a['aria-labelledby'] === a.id && (a['aria-labelledby'] = void 0);
        let d = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, o] of Object.entries(t))
            'boolean' == typeof o && (e = !0),
              !0 === o && n.push(r.replace(/([A-Z])/g, (e) => '-'.concat(e.toLowerCase())));
          if (e) for (let e of ((d['data-headlessui-state'] = n.join(' ')), n)) d['data-'.concat(e)] = '';
        }
        if (l === w.Fragment && (Object.keys(ef(a)).length > 0 || Object.keys(ef(d)).length > 0)) {
          if (!(0, w.isValidElement)(c) || (Array.isArray(c) && c.length > 1)) {
            if (Object.keys(ef(a)).length > 0)
              throw Error(
                [
                  'Passing props on "Fragment"!',
                  '',
                  'The current component <'.concat(r, ' /> is rendering a "Fragment".'),
                  'However we need to passthrough the following props:',
                  Object.keys(ef(a))
                    .concat(Object.keys(ef(d)))
                    .map((e) => '  - '.concat(e))
                    .join('\n'),
                  '',
                  'You can apply a few solutions:',
                  [
                    'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                    'Render a single element as the child so that we can forward the props onto that element.',
                  ]
                    .map((e) => '  - '.concat(e))
                    .join('\n'),
                ].join('\n')
              );
          } else {
            let e = c.props,
              t = null == e ? void 0 : e.className,
              n =
                'function' == typeof t
                  ? function () {
                      for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                      return eo(t(...n), a.className);
                    }
                  : eo(t, a.className),
              r = ec(c.props, ef(em(a, ['ref'])));
            for (let e in d) e in r && delete d[e];
            return (0, w.cloneElement)(
              c,
              Object.assign(
                {},
                r,
                d,
                s,
                { ref: o(w.version.split('.')[0] >= '19' ? c.props.ref : c.ref, s.ref) },
                n ? { className: n } : {}
              )
            );
          }
        }
        return (0, w.createElement)(
          l,
          Object.assign({}, em(a, ['ref']), l !== w.Fragment && s, l !== w.Fragment && d),
          c
        );
      }
      function es() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t.every((e) => null == e)
          ? void 0
          : (e) => {
              for (let n of t) null != n && ('function' == typeof n ? n(e) : (n.current = e));
            };
      }
      function ec() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        if (0 === t.length) return {};
        if (1 === t.length) return t[0];
        let r = {},
          o = {};
        for (let e of t)
          for (let t in e)
            t.startsWith('on') && 'function' == typeof e[t]
              ? (null != o[t] || (o[t] = []), o[t].push(e[t]))
              : (r[t] = e[t]);
        if (r.disabled || r['aria-disabled'])
          for (let e in o)
            /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(e) &&
              (o[e] = [
                (e) => {
                  var t;
                  return null == (t = null == e ? void 0 : e.preventDefault) ? void 0 : t.call(e);
                },
              ]);
        for (let e in o)
          Object.assign(r, {
            [e](t) {
              for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
              for (let n of o[e]) {
                if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented)
                  return;
                n(t, ...r);
              }
            },
          });
        return r;
      }
      function ed(e) {
        var t;
        return Object.assign((0, w.forwardRef)(e), { displayName: null != (t = e.displayName) ? t : e.name });
      }
      function ef(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function em(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
      var ep =
        (((d = ep || {})[(d.None = 1)] = 'None'),
        (d[(d.Focusable = 2)] = 'Focusable'),
        (d[(d.Hidden = 4)] = 'Hidden'),
        d);
      let eh = ed(function (e, t) {
          var n;
          let { features: r = 1, ...o } = e,
            l = {
              ref: t,
              'aria-hidden': (2 & r) == 2 || (null != (n = o['aria-hidden']) ? n : void 0),
              hidden: (4 & r) == 4 || void 0,
              style: {
                position: 'fixed',
                top: 1,
                left: 1,
                width: 1,
                height: 0,
                padding: 0,
                margin: -1,
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                borderWidth: '0',
                ...((4 & r) == 4 && (2 & r) != 2 && { display: 'none' }),
              },
            };
          return eu()({ ourProps: l, theirProps: o, slot: {}, defaultTag: 'span', name: 'Hidden' });
        }),
        ev = (0, w.createContext)(null);
      function eg(e) {
        let { children: t, node: n } = e,
          [r, o] = (0, w.useState)(null),
          l = eE(null != n ? n : r);
        return w.createElement(
          ev.Provider,
          { value: l },
          t,
          null === l &&
            w.createElement(eh, {
              features: ep.Hidden,
              ref: (e) => {
                var t, n;
                if (e) {
                  for (let r of null != (n = null == (t = U(e)) ? void 0 : t.querySelectorAll('html > *, body > *'))
                    ? n
                    : [])
                    if (
                      r !== document.body &&
                      r !== document.head &&
                      r instanceof HTMLElement &&
                      null != r &&
                      r.contains(e)
                    ) {
                      o(r);
                      break;
                    }
                }
              },
            })
        );
      }
      function eE() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return null != (e = (0, w.useContext)(ev)) ? e : t;
      }
      let eb = N(() => new Map(), {
        PUSH(e, t) {
          var n;
          let r = null != (n = this.get(e)) ? n : { doc: e, count: 0, d: _(), meta: new Set() };
          return r.count++, r.meta.add(t), this.set(e, r), this;
        },
        POP(e, t) {
          let n = this.get(e);
          return n && (n.count--, n.meta.delete(t)), this;
        },
        SCROLL_PREVENT(e) {
          let t,
            { doc: n, d: r, meta: o } = e,
            l = {
              doc: n,
              d: r,
              meta: (function (e) {
                let t = {};
                for (let n of e) Object.assign(t, n(t));
                return t;
              })(o),
            },
            i = [
              ee()
                ? {
                    before(e) {
                      let { doc: t, d: n, meta: r } = e;
                      function o(e) {
                        return r.containers.flatMap((e) => e()).some((t) => t.contains(e));
                      }
                      n.microTask(() => {
                        var e;
                        if ('auto' !== window.getComputedStyle(t.documentElement).scrollBehavior) {
                          let e = _();
                          e.style(t.documentElement, 'scrollBehavior', 'auto'),
                            n.add(() => n.microTask(() => e.dispose()));
                        }
                        let r = null != (e = window.scrollY) ? e : window.pageYOffset,
                          l = null;
                        n.addEventListener(
                          t,
                          'click',
                          (e) => {
                            if (e.target instanceof HTMLElement)
                              try {
                                let n = e.target.closest('a');
                                if (!n) return;
                                let { hash: r } = new URL(n.href),
                                  i = t.querySelector(r);
                                i && !o(i) && (l = i);
                              } catch (e) {}
                          },
                          !0
                        ),
                          n.addEventListener(t, 'touchstart', (e) => {
                            if (e.target instanceof HTMLElement) {
                              if (o(e.target)) {
                                let t = e.target;
                                for (; t.parentElement && o(t.parentElement); ) t = t.parentElement;
                                n.style(t, 'overscrollBehavior', 'contain');
                              } else n.style(e.target, 'touchAction', 'none');
                            }
                          }),
                          n.addEventListener(
                            t,
                            'touchmove',
                            (e) => {
                              if (e.target instanceof HTMLElement && 'INPUT' !== e.target.tagName) {
                                if (o(e.target)) {
                                  let t = e.target;
                                  for (
                                    ;
                                    t.parentElement &&
                                    '' !== t.dataset.headlessuiPortal &&
                                    !(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);

                                  )
                                    t = t.parentElement;
                                  '' === t.dataset.headlessuiPortal && e.preventDefault();
                                } else e.preventDefault();
                              }
                            },
                            { passive: !1 }
                          ),
                          n.add(() => {
                            var e;
                            r !== (null != (e = window.scrollY) ? e : window.pageYOffset) && window.scrollTo(0, r),
                              l && l.isConnected && (l.scrollIntoView({ block: 'nearest' }), (l = null));
                          });
                      });
                    },
                  }
                : {},
              {
                before(e) {
                  var n;
                  let { doc: r } = e,
                    o = r.documentElement;
                  t = Math.max(0, (null != (n = r.defaultView) ? n : window).innerWidth - o.clientWidth);
                },
                after(e) {
                  let { doc: n, d: r } = e,
                    o = n.documentElement,
                    l = Math.max(0, o.clientWidth - o.offsetWidth),
                    i = Math.max(0, t - l);
                  r.style(o, 'paddingRight', ''.concat(i, 'px'));
                },
              },
              {
                before(e) {
                  let { doc: t, d: n } = e;
                  n.style(t.documentElement, 'overflow', 'hidden');
                },
              },
            ];
          i.forEach((e) => {
            let { before: t } = e;
            return null == t ? void 0 : t(l);
          }),
            i.forEach((e) => {
              let { after: t } = e;
              return null == t ? void 0 : t(l);
            });
        },
        SCROLL_ALLOW(e) {
          let { d: t } = e;
          t.dispose();
        },
        TEARDOWN(e) {
          let { doc: t } = e;
          this.delete(t);
        },
      });
      function ey() {
        let e;
        let t =
            ((e = 'undefined' == typeof document),
            (0, T.useSyncExternalStore)(
              () => () => {},
              () => !1,
              () => !e
            )),
          [n, r] = w.useState(L.isHandoffComplete);
        return (
          n && !1 === L.isHandoffComplete && r(!1),
          w.useEffect(() => {
            !0 !== n && r(!0);
          }, [n]),
          w.useEffect(() => L.handoff(), []),
          !t && n
        );
      }
      eb.subscribe(() => {
        let e = eb.getSnapshot(),
          t = new Map();
        for (let [n] of e) t.set(n, n.documentElement.style.overflow);
        for (let n of e.values()) {
          let e = 'hidden' === t.get(n.doc),
            r = 0 !== n.count;
          ((r && !e) || (!r && e)) && eb.dispatch(n.count > 0 ? 'SCROLL_PREVENT' : 'SCROLL_ALLOW', n),
            0 === n.count && eb.dispatch('TEARDOWN', n);
        }
      });
      let ew = Symbol();
      function eT() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let r = (0, w.useRef)(t);
        (0, w.useEffect)(() => {
          r.current = t;
        }, [t]);
        let o = H((e) => {
          for (let t of r.current) null != t && ('function' == typeof t ? t(e) : (t.current = e));
        });
        return t.every((e) => null == e || (null == e ? void 0 : e[ew])) ? void 0 : o;
      }
      let eF = (0, w.createContext)(() => {});
      function eP(e) {
        let { value: t, children: n } = e;
        return w.createElement(eF.Provider, { value: t }, n);
      }
      let eC = (0, w.createContext)(null);
      eC.displayName = 'OpenClosedContext';
      var eA =
        (((f = eA || {})[(f.Open = 1)] = 'Open'),
        (f[(f.Closed = 2)] = 'Closed'),
        (f[(f.Closing = 4)] = 'Closing'),
        (f[(f.Opening = 8)] = 'Opening'),
        f);
      function eS() {
        return (0, w.useContext)(eC);
      }
      function eL(e) {
        let { value: t, children: n } = e;
        return w.createElement(eC.Provider, { value: t }, n);
      }
      function eO(e) {
        let { children: t } = e;
        return w.createElement(eC.Provider, { value: null }, t);
      }
      let ex = (0, w.createContext)(!1);
      function ek(e) {
        return w.createElement(ex.Provider, { value: e.force }, e.children);
      }
      let eR = (0, w.createContext)(void 0),
        eN = (0, w.createContext)(null);
      eN.displayName = 'DescriptionContext';
      let eM = Object.assign(
        ed(function (e, t) {
          let n = (0, w.useId)(),
            r = (0, w.useContext)(eR),
            { id: o = 'headlessui-description-'.concat(n), ...l } = e,
            i = (function e() {
              let t = (0, w.useContext)(eN);
              if (null === t) {
                let t = Error('You used a <Description /> component, but it is not inside a relevant parent.');
                throw (Error.captureStackTrace && Error.captureStackTrace(t, e), t);
              }
              return t;
            })(),
            u = eT(t);
          O(() => i.register(o), [o, i.register]);
          let a = r || !1,
            s = (0, w.useMemo)(() => ({ ...i.slot, disabled: a }), [i.slot, a]),
            c = { ref: u, ...i.props, id: o };
          return eu()({ ourProps: c, theirProps: l, slot: s, defaultTag: 'p', name: i.name || 'Description' });
        }),
        {}
      );
      function eD() {
        let [e] = (0, w.useState)(_);
        return (0, w.useEffect)(() => () => e.dispose(), [e]), e;
      }
      function eI() {
        let e = (0, w.useRef)(!1);
        return (
          O(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      function eH(e) {
        let t = H(e),
          n = (0, w.useRef)(!1);
        (0, w.useEffect)(
          () => (
            (n.current = !1),
            () => {
              (n.current = !0),
                j(() => {
                  n.current && t();
                });
            }
          ),
          [t]
        );
      }
      var ej = (((m = ej || {})[(m.Forwards = 0)] = 'Forwards'), (m[(m.Backwards = 1)] = 'Backwards'), m);
      function e_(e, t) {
        let n = (0, w.useRef)([]),
          r = H(e);
        (0, w.useEffect)(() => {
          let e = [...n.current];
          for (let [o, l] of t.entries())
            if (n.current[o] !== l) {
              let o = r(t, e);
              return (n.current = t), o;
            }
        }, [r, ...t]);
      }
      let eU = [];
      function eV(e) {
        if (!e) return new Set();
        if ('function' == typeof e) return new Set(e());
        let t = new Set();
        for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
        return t;
      }
      !(function (e) {
        function t() {
          'loading' !== document.readyState && (e(), document.removeEventListener('DOMContentLoaded', t));
        }
        'undefined' != typeof document && (document.addEventListener('DOMContentLoaded', t), t());
      })(() => {
        function e(e) {
          if (!(e.target instanceof HTMLElement) || e.target === document.body || eU[0] === e.target) return;
          let t = e.target;
          (t = t.closest(Y)),
            eU.unshift(null != t ? t : e.target),
            (eU = eU.filter((e) => null != e && e.isConnected)).splice(10);
        }
        window.addEventListener('click', e, { capture: !0 }),
          window.addEventListener('mousedown', e, { capture: !0 }),
          window.addEventListener('focus', e, { capture: !0 }),
          document.body.addEventListener('click', e, { capture: !0 }),
          document.body.addEventListener('mousedown', e, { capture: !0 }),
          document.body.addEventListener('focus', e, { capture: !0 });
      });
      var eW =
        (((p = eW || {})[(p.None = 0)] = 'None'),
        (p[(p.InitialFocus = 1)] = 'InitialFocus'),
        (p[(p.TabLock = 2)] = 'TabLock'),
        (p[(p.FocusLock = 4)] = 'FocusLock'),
        (p[(p.RestoreFocus = 8)] = 'RestoreFocus'),
        (p[(p.AutoFocus = 16)] = 'AutoFocus'),
        p);
      let eB = Object.assign(
        ed(function (e, t) {
          let n,
            r = (0, w.useRef)(null),
            o = eT(r, t),
            { initialFocus: l, initialFocusFallback: i, containers: u, features: a = 15, ...s } = e;
          ey() || (a = 0);
          let c = er(r);
          !(function (e, t) {
            let { ownerDocument: n } = t,
              r = !!(8 & e),
              o = (function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                  t = (0, w.useRef)(eU.slice());
                return (
                  e_(
                    (e, n) => {
                      let [r] = e,
                        [o] = n;
                      !0 === o &&
                        !1 === r &&
                        j(() => {
                          t.current.splice(0);
                        }),
                        !1 === o && !0 === r && (t.current = eU.slice());
                    },
                    [e, eU, t]
                  ),
                  H(() => {
                    var e;
                    return null != (e = t.current.find((e) => null != e && e.isConnected)) ? e : null;
                  })
                );
              })(r);
            e_(() => {
              r || ((null == n ? void 0 : n.activeElement) === (null == n ? void 0 : n.body) && J(o()));
            }, [r]),
              eH(() => {
                r && J(o());
              });
          })(a, { ownerDocument: c });
          let d = (function (e, t) {
            let { ownerDocument: n, container: r, initialFocus: o, initialFocusFallback: l } = t,
              i = (0, w.useRef)(null),
              u = I(!!(1 & e), 'focus-trap#initial-focus'),
              a = eI();
            return (
              e_(() => {
                if (0 === e) return;
                if (!u) {
                  null != l && l.current && J(l.current);
                  return;
                }
                let t = r.current;
                t &&
                  j(() => {
                    if (!a.current) return;
                    let r = null == n ? void 0 : n.activeElement;
                    if (null != o && o.current) {
                      if ((null == o ? void 0 : o.current) === r) {
                        i.current = r;
                        return;
                      }
                    } else if (t.contains(r)) {
                      i.current = r;
                      return;
                    }
                    if (null != o && o.current) J(o.current);
                    else {
                      if (16 & e) {
                        if (Q(t, K.First | K.AutoFocus) !== X.Error) return;
                      } else if (Q(t, K.First) !== X.Error) return;
                      if (
                        null != l &&
                        l.current &&
                        (J(l.current), (null == n ? void 0 : n.activeElement) === l.current)
                      )
                        return;
                      console.warn('There are no focusable elements inside the <FocusTrap />');
                    }
                    i.current = null == n ? void 0 : n.activeElement;
                  });
              }, [l, u, e]),
              i
            );
          })(a, { ownerDocument: c, container: r, initialFocus: l, initialFocusFallback: i });
          !(function (e, t) {
            let { ownerDocument: n, container: r, containers: o, previousActiveElement: l } = t,
              i = eI(),
              u = !!(4 & e);
            k(
              null == n ? void 0 : n.defaultView,
              'focus',
              (e) => {
                if (!u || !i.current) return;
                let t = eV(o);
                r.current instanceof HTMLElement && t.add(r.current);
                let n = l.current;
                if (!n) return;
                let a = e.target;
                a && a instanceof HTMLElement
                  ? eq(t, a)
                    ? ((l.current = a), J(a))
                    : (e.preventDefault(), e.stopPropagation(), J(n))
                  : J(l.current);
              },
              !0
            );
          })(a, { ownerDocument: c, container: r, containers: u, previousActiveElement: d });
          let f =
              ((n = (0, w.useRef)(0)),
              en(
                !0,
                'keydown',
                (e) => {
                  'Tab' === e.key && (n.current = e.shiftKey ? 1 : 0);
                },
                !0
              ),
              n),
            m = H((e) => {
              let t = r.current;
              t &&
                q(f.current, {
                  [ej.Forwards]: () => {
                    Q(t, K.First, { skipElements: [e.relatedTarget, i] });
                  },
                  [ej.Backwards]: () => {
                    Q(t, K.Last, { skipElements: [e.relatedTarget, i] });
                  },
                });
            }),
            p = I(!!(2 & a), 'focus-trap#tab-lock'),
            h = eD(),
            v = (0, w.useRef)(!1),
            g = eu();
          return w.createElement(
            w.Fragment,
            null,
            p &&
              w.createElement(eh, {
                as: 'button',
                type: 'button',
                'data-headlessui-focus-guard': !0,
                onFocus: m,
                features: ep.Focusable,
              }),
            g({
              ourProps: {
                ref: o,
                onKeyDown(e) {
                  'Tab' == e.key &&
                    ((v.current = !0),
                    h.requestAnimationFrame(() => {
                      v.current = !1;
                    }));
                },
                onBlur(e) {
                  if (!(4 & a)) return;
                  let t = eV(u);
                  r.current instanceof HTMLElement && t.add(r.current);
                  let n = e.relatedTarget;
                  n instanceof HTMLElement &&
                    'true' !== n.dataset.headlessuiFocusGuard &&
                    (eq(t, n) ||
                      (v.current
                        ? Q(
                            r.current,
                            q(f.current, { [ej.Forwards]: () => K.Next, [ej.Backwards]: () => K.Previous }) |
                              K.WrapAround,
                            { relativeTo: e.target }
                          )
                        : e.target instanceof HTMLElement && J(e.target)));
                },
              },
              theirProps: s,
              defaultTag: 'div',
              name: 'FocusTrap',
            }),
            p &&
              w.createElement(eh, {
                as: 'button',
                type: 'button',
                'data-headlessui-focus-guard': !0,
                onFocus: m,
                features: ep.Focusable,
              })
          );
        }),
        { features: eW }
      );
      function eq(e, t) {
        for (let n of e) if (n.contains(t)) return !0;
        return !1;
      }
      var eY = n(3935);
      let eG = w.Fragment,
        eK = ed(function (e, t) {
          let n = (0, w.useRef)(null),
            r = eT(
              (function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return Object.assign(e, { [ew]: t });
              })((e) => {
                n.current = e;
              }),
              t
            ),
            o = er(n),
            l = (function (e) {
              let t = (0, w.useContext)(ex),
                n = (0, w.useContext)(ez),
                r = er(e),
                [o, l] = (0, w.useState)(() => {
                  var e;
                  if (!t && null !== n) return null != (e = n.current) ? e : null;
                  if (L.isServer) return null;
                  let o = null == r ? void 0 : r.getElementById('headlessui-portal-root');
                  if (o) return o;
                  if (null === r) return null;
                  let l = r.createElement('div');
                  return l.setAttribute('id', 'headlessui-portal-root'), r.body.appendChild(l);
                });
              return (
                (0, w.useEffect)(() => {
                  null !== o && ((null != r && r.body.contains(o)) || null == r || r.body.appendChild(o));
                }, [o, r]),
                (0, w.useEffect)(() => {
                  t || (null !== n && l(n.current));
                }, [n, l, t]),
                o
              );
            })(n),
            [i] = (0, w.useState)(() => {
              var e;
              return L.isServer ? null : null != (e = null == o ? void 0 : o.createElement('div')) ? e : null;
            }),
            u = (0, w.useContext)(eZ),
            a = ey();
          O(() => {
            !l || !i || l.contains(i) || (i.setAttribute('data-headlessui-portal', ''), l.appendChild(i));
          }, [l, i]),
            O(() => {
              if (i && u) return u.register(i);
            }, [u, i]),
            eH(() => {
              var e;
              l &&
                i &&
                (i instanceof Node && l.contains(i) && l.removeChild(i),
                l.childNodes.length <= 0 && (null == (e = l.parentElement) || e.removeChild(l)));
            });
          let s = eu();
          return a && l && i
            ? (0, eY.createPortal)(
                s({ ourProps: { ref: r }, theirProps: e, slot: {}, defaultTag: eG, name: 'Portal' }),
                i
              )
            : null;
        }),
        eX = w.Fragment,
        ez = (0, w.createContext)(null),
        eZ = (0, w.createContext)(null),
        e$ = ed(function (e, t) {
          let n = eT(t),
            { enabled: r = !0, ...o } = e,
            l = eu();
          return r
            ? w.createElement(eK, { ...o, ref: n })
            : l({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: eG, name: 'Portal' });
        }),
        eJ = ed(function (e, t) {
          let { target: n, ...r } = e,
            o = { ref: eT(t) },
            l = eu();
          return w.createElement(
            ez.Provider,
            { value: n },
            l({ ourProps: o, theirProps: r, defaultTag: eX, name: 'Popover.Group' })
          );
        }),
        eQ = Object.assign(e$, { Group: eJ });
      var e0 = n(4155);
      void 0 !== e0 &&
        'undefined' != typeof globalThis &&
        'undefined' != typeof Element &&
        (null == (b = null == e0 ? void 0 : e0.env) ? void 0 : b.NODE_ENV) === 'test' &&
        void 0 === (null == (y = null == Element ? void 0 : Element.prototype) ? void 0 : y.getAnimations) &&
        (Element.prototype.getAnimations = function () {
          return (
            console.warn(
              "Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.\nPlease install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.\n\nExample usage:\n```js\nimport { mockAnimationsApi } from 'jsdom-testing-mocks'\nmockAnimationsApi()\n```"
            ),
            []
          );
        });
      var e1 =
        (((h = e1 || {})[(h.None = 0)] = 'None'),
        (h[(h.Closed = 1)] = 'Closed'),
        (h[(h.Enter = 2)] = 'Enter'),
        (h[(h.Leave = 4)] = 'Leave'),
        h);
      function e2(e) {
        var t;
        return (
          !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) ||
          (null != (t = e.as) ? t : e9) !== w.Fragment ||
          1 === w.Children.count(e.children)
        );
      }
      let e4 = (0, w.createContext)(null);
      e4.displayName = 'TransitionContext';
      var e3 = (((v = e3 || {}).Visible = 'visible'), (v.Hidden = 'hidden'), v);
      let e5 = (0, w.createContext)(null);
      function e6(e) {
        return 'children' in e
          ? e6(e.children)
          : e.current
              .filter((e) => {
                let { el: t } = e;
                return null !== t.current;
              })
              .filter((e) => {
                let { state: t } = e;
                return 'visible' === t;
              }).length > 0;
      }
      function e8(e, t) {
        let n = x(e),
          r = (0, w.useRef)([]),
          o = eI(),
          l = eD(),
          i = H(function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.Hidden,
              i = r.current.findIndex((t) => {
                let { el: n } = t;
                return n === e;
              });
            -1 !== i &&
              (q(t, {
                [ei.Unmount]() {
                  r.current.splice(i, 1);
                },
                [ei.Hidden]() {
                  r.current[i].state = 'hidden';
                },
              }),
              l.microTask(() => {
                var e;
                !e6(r) && o.current && (null == (e = n.current) || e.call(n));
              }));
          }),
          u = H((e) => {
            let t = r.current.find((t) => {
              let { el: n } = t;
              return n === e;
            });
            return (
              t ? 'visible' !== t.state && (t.state = 'visible') : r.current.push({ el: e, state: 'visible' }),
              () => i(e, ei.Unmount)
            );
          }),
          a = (0, w.useRef)([]),
          s = (0, w.useRef)(Promise.resolve()),
          c = (0, w.useRef)({ enter: [], leave: [] }),
          d = H((e, n, r) => {
            a.current.splice(0),
              t &&
                (t.chains.current[n] = t.chains.current[n].filter((t) => {
                  let [n] = t;
                  return n !== e;
                })),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    a.current.push(e);
                  }),
                ]),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    Promise.all(
                      c.current[n].map((e) => {
                        let [t, n] = e;
                        return n;
                      })
                    ).then(() => e());
                  }),
                ]),
              'enter' === n
                ? (s.current = s.current.then(() => (null == t ? void 0 : t.wait.current)).then(() => r(n)))
                : r(n);
          }),
          f = H((e, t, n) => {
            Promise.all(
              c.current[t].splice(0).map((e) => {
                let [t, n] = e;
                return n;
              })
            )
              .then(() => {
                var e;
                null == (e = a.current.shift()) || e();
              })
              .then(() => n(t));
          });
        return (0, w.useMemo)(
          () => ({ children: r, register: u, unregister: i, onStart: d, onStop: f, wait: s, chains: c }),
          [u, i, r, d, f, c, s]
        );
      }
      e5.displayName = 'NestingContext';
      let e9 = w.Fragment,
        e7 = el.RenderStrategy,
        te = ed(function (e, t) {
          let { show: n, appear: r = !1, unmount: o = !0, ...l } = e,
            i = (0, w.useRef)(null),
            u = eT(...(e2(e) ? [i, t] : null === t ? [] : [t]));
          ey();
          let a = eS();
          if ((void 0 === n && null !== a && (n = (a & eA.Open) === eA.Open), void 0 === n))
            throw Error('A <Transition /> is used but it is missing a `show={true | false}` prop.');
          let [s, c] = (0, w.useState)(n ? 'visible' : 'hidden'),
            d = e8(() => {
              n || c('hidden');
            }),
            [f, m] = (0, w.useState)(!0),
            p = (0, w.useRef)([n]);
          O(() => {
            !1 !== f && p.current[p.current.length - 1] !== n && (p.current.push(n), m(!1));
          }, [p, n]);
          let h = (0, w.useMemo)(() => ({ show: n, appear: r, initial: f }), [n, r, f]);
          O(() => {
            n ? c('visible') : e6(d) || null === i.current || c('hidden');
          }, [n, d]);
          let v = { unmount: o },
            g = H(() => {
              var t;
              f && m(!1), null == (t = e.beforeEnter) || t.call(e);
            }),
            E = H(() => {
              var t;
              f && m(!1), null == (t = e.beforeLeave) || t.call(e);
            }),
            b = eu();
          return w.createElement(
            e5.Provider,
            { value: d },
            w.createElement(
              e4.Provider,
              { value: h },
              b({
                ourProps: {
                  ...v,
                  as: w.Fragment,
                  children: w.createElement(tt, { ref: u, ...v, ...l, beforeEnter: g, beforeLeave: E }),
                },
                theirProps: {},
                defaultTag: w.Fragment,
                features: e7,
                visible: 'visible' === s,
                name: 'Transition',
              })
            )
          );
        }),
        tt = ed(function (e, t) {
          var n, r;
          let {
              transition: o = !0,
              beforeEnter: l,
              afterEnter: i,
              beforeLeave: u,
              afterLeave: a,
              enter: s,
              enterFrom: c,
              enterTo: d,
              entered: f,
              leave: m,
              leaveFrom: p,
              leaveTo: h,
              ...v
            } = e,
            [g, E] = (0, w.useState)(null),
            b = (0, w.useRef)(null),
            y = e2(e),
            T = eT(...(y ? [b, t, E] : null === t ? [] : [t])),
            F = null == (n = v.unmount) || n ? ei.Unmount : ei.Hidden,
            {
              show: P,
              appear: C,
              initial: A,
            } = (function () {
              let e = (0, w.useContext)(e4);
              if (null === e)
                throw Error(
                  'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
                );
              return e;
            })(),
            [S, L] = (0, w.useState)(P ? 'visible' : 'hidden'),
            x = (function () {
              let e = (0, w.useContext)(e5);
              if (null === e)
                throw Error(
                  'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
                );
              return e;
            })(),
            { register: k, unregister: R } = x;
          O(() => k(b), [k, b]),
            O(() => {
              if (F === ei.Hidden && b.current) {
                if (P && 'visible' !== S) {
                  L('visible');
                  return;
                }
                return q(S, { hidden: () => R(b), visible: () => k(b) });
              }
            }, [S, b, k, R, P, F]);
          let N = ey();
          O(() => {
            if (y && N && 'visible' === S && null === b.current)
              throw Error('Did you forget to passthrough the `ref` to the actual DOM node?');
          }, [b, S, N, y]);
          let M = A && !C,
            D = C && P && A,
            I = (0, w.useRef)(!1),
            j = e8(() => {
              I.current || (L('hidden'), R(b));
            }, x),
            U = H((e) => {
              (I.current = !0),
                j.onStart(b, e ? 'enter' : 'leave', (e) => {
                  'enter' === e ? null == l || l() : 'leave' === e && (null == u || u());
                });
            }),
            V = H((e) => {
              let t = e ? 'enter' : 'leave';
              (I.current = !1),
                j.onStop(b, t, (e) => {
                  'enter' === e ? null == i || i() : 'leave' === e && (null == a || a());
                }),
                'leave' !== t || e6(j) || (L('hidden'), R(b));
            });
          (0, w.useEffect)(() => {
            (y && o) || (U(P), V(P));
          }, [P, y, o]);
          let [, W] = (function (e, t, n, r) {
              let [o, l] = (0, w.useState)(n),
                {
                  hasFlag: i,
                  addFlag: u,
                  removeFlag: a,
                } = (function () {
                  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    [t, n] = (0, w.useState)(e),
                    r = (0, w.useCallback)((e) => n(e), [t]),
                    o = (0, w.useCallback)((e) => n((t) => t | e), [t]),
                    l = (0, w.useCallback)((e) => (t & e) === e, [t]);
                  return {
                    flags: t,
                    setFlag: r,
                    addFlag: o,
                    hasFlag: l,
                    removeFlag: (0, w.useCallback)((e) => n((t) => t & ~e), [n]),
                    toggleFlag: (0, w.useCallback)((e) => n((t) => t ^ e), [n]),
                  };
                })(e && o ? 3 : 0),
                s = (0, w.useRef)(!1),
                c = (0, w.useRef)(!1);
              return (
                O(() => {
                  var o;
                  if (e) {
                    if ((n && l(!0), !t)) {
                      n && u(3);
                      return;
                    }
                    return (
                      null == (o = null == r ? void 0 : r.start) || o.call(r, n),
                      (function (e, t) {
                        let { prepare: n, run: r, done: o, inFlight: l } = t,
                          i = _();
                        return (
                          (function (e, t) {
                            let { inFlight: n, prepare: r } = t;
                            if (null != n && n.current) {
                              r();
                              return;
                            }
                            let o = e.style.transition;
                            (e.style.transition = 'none'), r(), e.offsetHeight, (e.style.transition = o);
                          })(e, { prepare: n, inFlight: l }),
                          i.nextFrame(() => {
                            r(),
                              i.requestAnimationFrame(() => {
                                i.add(
                                  (function (e, t) {
                                    var n, r;
                                    let o = _();
                                    if (!e) return o.dispose;
                                    let l = !1;
                                    o.add(() => {
                                      l = !0;
                                    });
                                    let i =
                                      null !=
                                      (r =
                                        null == (n = e.getAnimations)
                                          ? void 0
                                          : n.call(e).filter((e) => e instanceof CSSTransition))
                                        ? r
                                        : [];
                                    return (
                                      0 === i.length
                                        ? t()
                                        : Promise.allSettled(i.map((e) => e.finished)).then(() => {
                                            l || t();
                                          }),
                                      o.dispose
                                    );
                                  })(e, o)
                                );
                              });
                          }),
                          i.dispose
                        );
                      })(t, {
                        inFlight: s,
                        prepare() {
                          c.current ? (c.current = !1) : (c.current = s.current),
                            (s.current = !0),
                            c.current || (n ? (u(3), a(4)) : (u(4), a(2)));
                        },
                        run() {
                          c.current ? (n ? (a(3), u(4)) : (a(4), u(3))) : n ? a(1) : u(1);
                        },
                        done() {
                          var e;
                          (c.current && 'function' == typeof t.getAnimations && t.getAnimations().length > 0) ||
                            ((s.current = !1),
                            a(7),
                            n || l(!1),
                            null == (e = null == r ? void 0 : r.end) || e.call(r, n));
                        },
                      })
                    );
                  }
                }, [e, n, t, eD()]),
                e
                  ? [o, { closed: i(1), enter: i(2), leave: i(4), transition: i(2) || i(4) }]
                  : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }]
              );
            })(!(!o || !y || !N || M), g, P, { start: U, end: V }),
            B = ef({
              ref: T,
              className:
                (null ==
                (r = eo(
                  v.className,
                  D && s,
                  D && c,
                  W.enter && s,
                  W.enter && W.closed && c,
                  W.enter && !W.closed && d,
                  W.leave && m,
                  W.leave && !W.closed && p,
                  W.leave && W.closed && h,
                  !W.transition && P && f
                ))
                  ? void 0
                  : r.trim()) || void 0,
              ...(function (e) {
                let t = {};
                for (let n in e) !0 === e[n] && (t['data-'.concat(n)] = '');
                return t;
              })(W),
            }),
            Y = 0;
          'visible' === S && (Y |= eA.Open),
            'hidden' === S && (Y |= eA.Closed),
            W.enter && (Y |= eA.Opening),
            W.leave && (Y |= eA.Closing);
          let G = eu();
          return w.createElement(
            e5.Provider,
            { value: j },
            w.createElement(
              eL,
              { value: Y },
              G({
                ourProps: B,
                theirProps: v,
                defaultTag: e9,
                features: e7,
                visible: 'visible' === S,
                name: 'Transition.Child',
              })
            )
          );
        }),
        tn = ed(function (e, t) {
          let n = null !== (0, w.useContext)(e4),
            r = null !== eS();
          return w.createElement(
            w.Fragment,
            null,
            !n && r ? w.createElement(te, { ref: t, ...e }) : w.createElement(tt, { ref: t, ...e })
          );
        }),
        tr = Object.assign(te, { Child: tn, Root: te });
      var to = (((g = to || {})[(g.Open = 0)] = 'Open'), (g[(g.Closed = 1)] = 'Closed'), g),
        tl = (((E = tl || {})[(E.SetTitleId = 0)] = 'SetTitleId'), E);
      let ti = { 0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id }) },
        tu = (0, w.createContext)(null);
      function ta(e) {
        let t = (0, w.useContext)(tu);
        if (null === t) {
          let t = Error('<'.concat(e, ' /> is missing a parent <Dialog /> component.'));
          throw (Error.captureStackTrace && Error.captureStackTrace(t, ta), t);
        }
        return t;
      }
      function ts(e, t) {
        return q(t.type, ti, e, t);
      }
      tu.displayName = 'DialogContext';
      let tc = ed(function (e, t) {
          var n;
          let r,
            o,
            l,
            i,
            u,
            a,
            s,
            c,
            d,
            f,
            m,
            p = (0, w.useId)(),
            {
              id: h = 'headlessui-dialog-'.concat(p),
              open: v,
              onClose: g,
              initialFocus: E,
              role: b = 'dialog',
              autoFocus: y = !0,
              __demoMode: T = !1,
              unmount: P = !1,
              ...C
            } = e,
            A = (0, w.useRef)(!1);
          b =
            'dialog' === b || 'alertdialog' === b
              ? b
              : (A.current ||
                  ((A.current = !0),
                  console.warn(
                    'Invalid role ['.concat(
                      b,
                      '] passed to <Dialog />. Only `dialog` and and `alertdialog` are supported. Using `dialog` instead.'
                    )
                  )),
                'dialog');
          let S = eS();
          void 0 === v && null !== S && (v = (S & eA.Open) === eA.Open);
          let L = (0, w.useRef)(null),
            R = eT(L, t),
            N = er(L),
            D = v ? 0 : 1,
            [j, V] = (0, w.useReducer)(ts, { titleId: null, descriptionId: null, panelRef: (0, w.createRef)() }),
            W = H(() => g(!1)),
            G = H((e) => V({ type: 0, id: e })),
            K = !!ey() && 0 === D,
            [X, z] =
              ((r = (0, w.useContext)(eZ)),
              (o = (0, w.useRef)([])),
              (l = H((e) => (o.current.push(e), r && r.register(e), () => i(e)))),
              (i = H((e) => {
                let t = o.current.indexOf(e);
                -1 !== t && o.current.splice(t, 1), r && r.unregister(e);
              })),
              (u = (0, w.useMemo)(() => ({ register: l, unregister: i, portals: o }), [l, i, o])),
              [
                o,
                (0, w.useMemo)(
                  () =>
                    function (e) {
                      let { children: t } = e;
                      return w.createElement(eZ.Provider, { value: u }, t);
                    },
                  [u]
                ),
              ]),
            $ = eE(),
            { resolveContainers: J } = (function () {
              let {
                  defaultContainers: e = [],
                  portals: t,
                  mainTreeNode: n,
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = er(n),
                o = H(() => {
                  var o, l;
                  let i = [];
                  for (let t of e)
                    null !== t &&
                      (t instanceof HTMLElement
                        ? i.push(t)
                        : 'current' in t && t.current instanceof HTMLElement && i.push(t.current));
                  if (null != t && t.current) for (let e of t.current) i.push(e);
                  for (let e of null != (o = null == r ? void 0 : r.querySelectorAll('html > *, body > *')) ? o : [])
                    e !== document.body &&
                      e !== document.head &&
                      e instanceof HTMLElement &&
                      'headlessui-portal-root' !== e.id &&
                      ((n &&
                        (e.contains(n) ||
                          e.contains(null == (l = null == n ? void 0 : n.getRootNode()) ? void 0 : l.host))) ||
                        i.some((t) => e.contains(t)) ||
                        i.push(e));
                  return i;
                });
              return { resolveContainers: o, contains: H((e) => o().some((t) => t.contains(e))) };
            })({
              mainTreeNode: $,
              portals: X,
              defaultContainers: [
                {
                  get current() {
                    var Q;
                    return null != (Q = j.panelRef.current) ? Q : L.current;
                  },
                },
              ],
            }),
            eo = null !== S && (S & eA.Closing) === eA.Closing;
          (function (e) {
            let { allowed: t, disallowed: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              r = I(e, 'inert-others');
            O(() => {
              var e, o;
              if (!r) return;
              let l = _();
              for (let t of null != (e = null == n ? void 0 : n()) ? e : []) t && l.add(B(t));
              let i = null != (o = null == t ? void 0 : t()) ? o : [];
              for (let e of i) {
                if (!e) continue;
                let t = U(e);
                if (!t) continue;
                let n = e.parentElement;
                for (; n && n !== t.body; ) {
                  for (let e of n.children) i.some((t) => e.contains(t)) || l.add(B(e));
                  n = n.parentElement;
                }
              }
              return l.dispose;
            }, [r, t, n]);
          })(!T && !eo && K, {
            allowed: H(() => {
              var e, t;
              return [
                null != (t = null == (e = L.current) ? void 0 : e.closest('[data-headlessui-portal]')) ? t : null,
              ];
            }),
            disallowed: H(() => {
              var e;
              return [null != (e = null == $ ? void 0 : $.closest('body > *:not(#headlessui-portal-root)')) ? e : null];
            }),
          }),
            (n = (e) => {
              e.preventDefault(), W();
            }),
            (a = I(K, 'outside-click')),
            (s = x(n)),
            (c = (0, w.useCallback)(
              function (e, t) {
                if (e.defaultPrevented) return;
                let n = t(e);
                if (null !== n && n.getRootNode().contains(n) && n.isConnected) {
                  for (let t of (function e(t) {
                    return 'function' == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t];
                  })(J))
                    if (null !== t && (t.contains(n) || (e.composed && e.composedPath().includes(t)))) return;
                  return (
                    !(function (e) {
                      var t;
                      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                      return (
                        e !== (null == (t = U(e)) ? void 0 : t.body) &&
                        q(n, {
                          0: () => e.matches(Y),
                          1() {
                            let t = e;
                            for (; null !== t; ) {
                              if (t.matches(Y)) return !0;
                              t = t.parentElement;
                            }
                            return !1;
                          },
                        })
                      );
                    })(n, Z.Loose) &&
                      -1 !== n.tabIndex &&
                      e.preventDefault(),
                    s.current(e, n)
                  );
                }
              },
              [s, J]
            )),
            (d = (0, w.useRef)(null)),
            et(
              a,
              'pointerdown',
              (e) => {
                var t, n;
                d.current =
                  (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target;
              },
              !0
            ),
            et(
              a,
              'mousedown',
              (e) => {
                var t, n;
                d.current =
                  (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target;
              },
              !0
            ),
            et(
              a,
              'click',
              (e) => {
                ee() ||
                  /Android/gi.test(window.navigator.userAgent) ||
                  (d.current && (c(e, () => d.current), (d.current = null)));
              },
              !0
            ),
            (f = (0, w.useRef)({ x: 0, y: 0 })),
            et(
              a,
              'touchstart',
              (e) => {
                (f.current.x = e.touches[0].clientX), (f.current.y = e.touches[0].clientY);
              },
              !0
            ),
            et(
              a,
              'touchend',
              (e) => {
                let t = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
                if (!(Math.abs(t.x - f.current.x) >= 30 || Math.abs(t.y - f.current.y) >= 30))
                  return c(e, () => (e.target instanceof HTMLElement ? e.target : null));
              },
              !0
            ),
            en(
              a,
              'blur',
              (e) =>
                c(e, () =>
                  window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null
                ),
              !0
            ),
            (function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 'undefined' != typeof document
                      ? document.defaultView
                      : null,
                n = arguments.length > 2 ? arguments[2] : void 0,
                r = I(e, 'escape');
              k(t, 'keydown', (e) => {
                r && (e.defaultPrevented || (e.key === F.Escape && n(e)));
              });
            })(K, null == N ? void 0 : N.defaultView, (e) => {
              e.preventDefault(),
                e.stopPropagation(),
                document.activeElement &&
                  'blur' in document.activeElement &&
                  'function' == typeof document.activeElement.blur &&
                  document.activeElement.blur(),
                W();
            }),
            (function (e, t) {
              let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => [document.body];
              !(function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => ({ containers: [] }),
                  r = M(eb),
                  o = t ? r.get(t) : void 0;
                o && o.count,
                  O(() => {
                    if (!(!t || !e)) return eb.dispatch('PUSH', t, n), () => eb.dispatch('POP', t, n);
                  }, [e, t]);
              })(I(e, 'scroll-lock'), t, (e) => {
                var t;
                return { containers: [...(null != (t = e.containers) ? t : []), n] };
              });
            })(!T && !eo && K, N, J),
            (m = x((e) => {
              let t = e.getBoundingClientRect();
              0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && W();
            })),
            (0, w.useEffect)(() => {
              if (!K) return;
              let e = null === L ? null : L instanceof HTMLElement ? L : L.current;
              if (!e) return;
              let t = _();
              if ('undefined' != typeof ResizeObserver) {
                let n = new ResizeObserver(() => m.current(e));
                n.observe(e), t.add(() => n.disconnect());
              }
              if ('undefined' != typeof IntersectionObserver) {
                let n = new IntersectionObserver(() => m.current(e));
                n.observe(e), t.add(() => n.disconnect());
              }
              return () => t.dispose();
            }, [L, m, K]);
          let [el, ei] = (function () {
              let [e, t] = (0, w.useState)([]);
              return [
                e.length > 0 ? e.join(' ') : void 0,
                (0, w.useMemo)(
                  () =>
                    function (e) {
                      let n = H(
                          (e) => (
                            t((t) => [...t, e]),
                            () =>
                              t((t) => {
                                let n = t.slice(),
                                  r = n.indexOf(e);
                                return -1 !== r && n.splice(r, 1), n;
                              })
                          )
                        ),
                        r = (0, w.useMemo)(
                          () => ({ register: n, slot: e.slot, name: e.name, props: e.props, value: e.value }),
                          [n, e.slot, e.name, e.props, e.value]
                        );
                      return w.createElement(eN.Provider, { value: r }, e.children);
                    },
                  [t]
                ),
              ];
            })(),
            ea = (0, w.useMemo)(() => [{ dialogState: D, close: W, setTitleId: G, unmount: P }, j], [D, j, W, G, P]),
            es = (0, w.useMemo)(() => ({ open: 0 === D }), [D]),
            ec = {
              ref: R,
              id: h,
              role: b,
              tabIndex: -1,
              'aria-modal': T ? void 0 : 0 === D || void 0,
              'aria-labelledby': j.titleId,
              'aria-describedby': el,
              unmount: P,
            },
            ed = !(function () {
              var e;
              let [t] = (0, w.useState)(() =>
                  'function' == typeof window.matchMedia ? window.matchMedia('(pointer: coarse)') : null
                ),
                [n, r] = (0, w.useState)(null != (e = null == t ? void 0 : t.matches) && e);
              return (
                O(() => {
                  if (t) return t.addEventListener('change', e), () => t.removeEventListener('change', e);
                  function e(e) {
                    r(e.matches);
                  }
                }, [t]),
                n
              );
            })(),
            ef = eW.None;
          K &&
            !T &&
            ((ef |= eW.RestoreFocus), (ef |= eW.TabLock), y && (ef |= eW.AutoFocus), ed && (ef |= eW.InitialFocus));
          let em = eu();
          return w.createElement(
            eO,
            null,
            w.createElement(
              ek,
              { force: !0 },
              w.createElement(
                eQ,
                null,
                w.createElement(
                  tu.Provider,
                  { value: ea },
                  w.createElement(
                    eJ,
                    { target: L },
                    w.createElement(
                      ek,
                      { force: !1 },
                      w.createElement(
                        ei,
                        { slot: es },
                        w.createElement(
                          z,
                          null,
                          w.createElement(
                            eB,
                            { initialFocus: E, initialFocusFallback: L, containers: J, features: ef },
                            w.createElement(
                              eP,
                              { value: W },
                              em({
                                ourProps: ec,
                                theirProps: C,
                                slot: es,
                                defaultTag: td,
                                features: tf,
                                visible: 0 === D,
                                name: 'Dialog',
                              })
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        }),
        td = 'div',
        tf = el.RenderStrategy | el.Static,
        tm = ed(function (e, t) {
          let { transition: n = !1, open: r, ...o } = e,
            l = eS(),
            i = e.hasOwnProperty('open') || null !== l,
            u = e.hasOwnProperty('onClose');
          if (!i && !u) throw Error('You have to provide an `open` and an `onClose` prop to the `Dialog` component.');
          if (!i) throw Error('You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.');
          if (!u) throw Error('You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.');
          if (!l && 'boolean' != typeof e.open)
            throw Error(
              'You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: '.concat(e.open)
            );
          if ('function' != typeof e.onClose)
            throw Error(
              'You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: '.concat(
                e.onClose
              )
            );
          return (void 0 !== r || n) && !o.static
            ? w.createElement(
                eg,
                null,
                w.createElement(
                  tr,
                  { show: r, transition: n, unmount: o.unmount },
                  w.createElement(tc, { ref: t, ...o })
                )
              )
            : w.createElement(eg, null, w.createElement(tc, { ref: t, open: r, ...o }));
        }),
        tp = ed(function (e, t) {
          let n = (0, w.useId)(),
            { id: r = 'headlessui-dialog-panel-'.concat(n), transition: o = !1, ...l } = e,
            [{ dialogState: i, unmount: u }, a] = ta('Dialog.Panel'),
            s = eT(t, a.panelRef),
            c = (0, w.useMemo)(() => ({ open: 0 === i }), [i]),
            d = H((e) => {
              e.stopPropagation();
            }),
            f = o ? tn : w.Fragment,
            m = eu();
          return w.createElement(
            f,
            { ...(o ? { unmount: u } : {}) },
            m({
              ourProps: { ref: s, id: r, onClick: d },
              theirProps: l,
              slot: c,
              defaultTag: 'div',
              name: 'Dialog.Panel',
            })
          );
        }),
        th = ed(function (e, t) {
          let { transition: n = !1, ...r } = e,
            [{ dialogState: o, unmount: l }] = ta('Dialog.Backdrop'),
            i = (0, w.useMemo)(() => ({ open: 0 === o }), [o]),
            u = n ? tn : w.Fragment,
            a = eu();
          return w.createElement(
            u,
            { ...(n ? { unmount: l } : {}) },
            a({
              ourProps: { ref: t, 'aria-hidden': !0 },
              theirProps: r,
              slot: i,
              defaultTag: 'div',
              name: 'Dialog.Backdrop',
            })
          );
        }),
        tv = Object.assign(tm, {
          Panel: tp,
          Title: ed(function (e, t) {
            let n = (0, w.useId)(),
              { id: r = 'headlessui-dialog-title-'.concat(n), ...o } = e,
              [{ dialogState: l, setTitleId: i }] = ta('Dialog.Title'),
              u = eT(t);
            (0, w.useEffect)(() => (i(r), () => i(null)), [r, i]);
            let a = (0, w.useMemo)(() => ({ open: 0 === l }), [l]);
            return eu()({
              ourProps: { ref: u, id: r },
              theirProps: o,
              slot: a,
              defaultTag: 'h2',
              name: 'Dialog.Title',
            });
          }),
          Description: eM,
        });
    },
  },
]);
