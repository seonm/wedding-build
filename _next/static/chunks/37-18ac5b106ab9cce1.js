(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [37],
  {
    7830: function (e, t) {
      'use strict';
      /**
       * @license React
       * react.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = Symbol.for('react.element'),
        r =
          (Symbol.for('react.portal'),
          Symbol.for('react.fragment'),
          Symbol.for('react.strict_mode'),
          Symbol.for('react.profiler'),
          Symbol.for('react.provider'),
          Symbol.for('react.context'),
          Symbol.for('react.forward_ref'),
          Symbol.for('react.suspense'),
          Symbol.for('react.memo'),
          Symbol.for('react.lazy'),
          {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          }),
        o = Object.assign,
        l = {};
      function i(e, t, n) {
        (this.props = e), (this.context = t), (this.refs = l), (this.updater = n || r);
      }
      function a() {}
      function u(e, t, n) {
        (this.props = e), (this.context = t), (this.refs = l), (this.updater = n || r);
      }
      (i.prototype.isReactComponent = {}),
        (i.prototype.setState = function (e, t) {
          if ('object' != typeof e && 'function' != typeof e && null != e)
            throw Error(
              'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
            );
          this.updater.enqueueSetState(this, e, t, 'setState');
        }),
        (i.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
        }),
        (a.prototype = i.prototype);
      var s = (u.prototype = new a());
      (s.constructor = u), o(s, i.prototype), (s.isPureReactComponent = !0);
      var c = Object.prototype.hasOwnProperty,
        d = { key: !0, ref: !0, __self: !0, __source: !0 };
      t.createElement = function (e, t, r) {
        var o,
          l = {},
          i = null,
          a = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (i = '' + t.key), t))
            c.call(t, o) && !d.hasOwnProperty(o) && (l[o] = t[o]);
        var u = arguments.length - 2;
        if (1 === u) l.children = r;
        else if (1 < u) {
          for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
          l.children = s;
        }
        if (e && e.defaultProps) for (o in (u = e.defaultProps)) void 0 === l[o] && (l[o] = u[o]);
        return { $$typeof: n, type: e, key: i, ref: a, props: l, _owner: null };
      };
    },
    4410: function (e, t, n) {
      'use strict';
      e.exports = n(7830);
    },
    1694: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Abril_Fatface_e78f02', '__Abril_Fatface_Fallback_e78f02'",
          fontWeight: 400,
          fontStyle: 'normal',
        },
        className: '__className_e78f02',
        variable: '__variable_e78f02',
      };
    },
    6961: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Italiana_900c85', '__Italiana_Fallback_900c85'",
          fontWeight: 400,
          fontStyle: 'normal',
        },
        className: '__className_900c85',
        variable: '__variable_900c85',
      };
    },
    5566: function (e) {
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
      function a(e) {
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
      var u = [],
        s = !1,
        c = -1;
      function d() {
        s && r && ((s = !1), r.length ? (u = r.concat(u)) : (c = -1), u.length && f());
      }
      function f() {
        if (!s) {
          var e = a(d);
          s = !0;
          for (var t = u.length; t; ) {
            for (r = u, u = []; ++c < t; ) r && r[c].run();
            (c = -1), (t = u.length);
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
      function p(e, t) {
        (this.fun = e), (this.array = t);
      }
      function m() {}
      (o.nextTick = function (e) {
        var t = Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new p(e, t)), 1 !== u.length || s || a(f);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (o.title = 'browser'),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ''),
        (o.versions = {}),
        (o.on = m),
        (o.addListener = m),
        (o.once = m),
        (o.off = m),
        (o.removeListener = m),
        (o.removeAllListeners = m),
        (o.emit = m),
        (o.prependListener = m),
        (o.prependOnceListener = m),
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
    7161: function (e, t, n) {
      'use strict';
      let r, o, l, i, a, u, s, c, d, f, p, m, h, v, g, E;
      n.d(t, {
        Vq: function () {
          return tv;
        },
        ZR: function () {
          return th;
        },
        EM: function () {
          return tm;
        },
      });
      var y,
        b,
        w = n(2265),
        T = n.t(w, 2),
        S =
          (((r = S || {}).Space = ' '),
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
        F = Object.defineProperty,
        P = (e, t, n) => (t in e ? F(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
        A = (e, t, n) => (P(e, 'symbol' != typeof t ? t + '' : t, n), n);
      class C {
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
          return 'undefined' == typeof window || 'undefined' == typeof document ? 'server' : 'client';
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
      let L = new C(),
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
      class N extends Map {
        get(e) {
          let t = super.get(e);
          return void 0 === t && ((t = this.factory(e)), this.set(e, t)), t;
        }
        constructor(e) {
          super(), (this.factory = e);
        }
      }
      function R(e, t) {
        let n = e(),
          r = new Set();
        return {
          getSnapshot: () => n,
          subscribe: (e) => (r.add(e), () => r.delete(e)),
          dispatch(e) {
            for (var o = arguments.length, l = Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) l[i - 1] = arguments[i];
            let a = t[e].call(n, ...l);
            a && ((n = a), r.forEach((e) => e()));
          },
        };
      }
      function M(e) {
        return (0, w.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot);
      }
      let D = new N(() =>
        R(() => [], {
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
      function _(e, t) {
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
      let I = function (e) {
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
      function H() {
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
              let t = H();
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
      let q = new Map(),
        W = new Map();
      function V(e) {
        var t;
        let n = null != (t = W.get(e)) ? t : 0;
        return (
          W.set(e, n + 1),
          0 !== n ||
            (q.set(e, { 'aria-hidden': e.getAttribute('aria-hidden'), inert: e.inert }),
            e.setAttribute('aria-hidden', 'true'),
            (e.inert = !0)),
          () =>
            (function (e) {
              var t;
              let n = null != (t = W.get(e)) ? t : 1;
              if ((1 === n ? W.delete(e) : W.set(e, n - 1), 1 !== n)) return;
              let r = q.get(e);
              r &&
                (null === r['aria-hidden']
                  ? e.removeAttribute('aria-hidden')
                  : e.setAttribute('aria-hidden', r['aria-hidden']),
                (e.inert = r.inert),
                q.delete(e));
            })(e)
        );
      }
      function B(e, t) {
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
        throw (Error.captureStackTrace && Error.captureStackTrace(l, B), l);
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
        $ = (((a = $ || {})[(a.Strict = 0)] = 'Strict'), (a[(a.Loose = 1)] = 'Loose'), a),
        Z = (((u = Z || {})[(u.Keyboard = 0)] = 'Keyboard'), (u[(u.Mouse = 1)] = 'Mouse'), u);
      function J(e) {
        null == e || e.focus({ preventScroll: !0 });
      }
      function Q(e, t) {
        var n, r, o;
        let {
            sorted: l = !0,
            relativeTo: i = null,
            skipElements: a = [],
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          u = Array.isArray(e) ? (e.length > 0 ? e[0].ownerDocument : document) : e.ownerDocument,
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
        a.length > 0 &&
          s.length > 1 &&
          (s = s.filter(
            (e) => !a.some((t) => (null != t && 'current' in t ? (null == t ? void 0 : t.current) === e : t === e))
          )),
          (i = null != i ? i : u.activeElement);
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
          p = 0,
          m = s.length,
          h;
        do {
          if (p >= m || p + m <= 0) return 0;
          let e = d + p;
          if (16 & t) e = (e + m) % m;
          else {
            if (e < 0) return 3;
            if (e >= m) return 1;
          }
          null == (h = s[e]) || h.focus(f), (p += c);
        } while (h !== u.activeElement);
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
      'undefined' != typeof window &&
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
      function ea() {
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
                name: a,
                mergeRefs: u,
              } = e;
              u = null != u ? u : es;
              let s = ec(n, t);
              if (i) return eu(s, r, o, a, u);
              let c = null != l ? l : 0;
              if (2 & c) {
                let { static: e = !1, ...t } = s;
                if (e) return eu(t, r, o, a, u);
              }
              if (1 & c) {
                let { unmount: e = !0, ...t } = s;
                return B(e ? 0 : 1, {
                  0: () => null,
                  1: () => eu({ ...t, hidden: !0, style: { display: 'none' } }, r, o, a, u),
                });
              }
              return eu(s, r, o, a, u);
            })({ mergeRefs: n, ...e }),
          [n]
        );
      }
      function eu(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = arguments.length > 3 ? arguments[3] : void 0,
          o = arguments.length > 4 ? arguments[4] : void 0,
          { as: l = n, children: i, refName: a = 'ref', ...u } = ep(e, ['unmount', 'static']),
          s = void 0 !== e.ref ? { [a]: e.ref } : {},
          c = 'function' == typeof i ? i(t) : i;
        'className' in u && u.className && 'function' == typeof u.className && (u.className = u.className(t)),
          u['aria-labelledby'] && u['aria-labelledby'] === u.id && (u['aria-labelledby'] = void 0);
        let d = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, o] of Object.entries(t))
            'boolean' == typeof o && (e = !0),
              !0 === o && n.push(r.replace(/([A-Z])/g, (e) => '-'.concat(e.toLowerCase())));
          if (e) for (let e of ((d['data-headlessui-state'] = n.join(' ')), n)) d['data-'.concat(e)] = '';
        }
        if (l === w.Fragment && (Object.keys(ef(u)).length > 0 || Object.keys(ef(d)).length > 0)) {
          if (!(0, w.isValidElement)(c) || (Array.isArray(c) && c.length > 1)) {
            if (Object.keys(ef(u)).length > 0)
              throw Error(
                [
                  'Passing props on "Fragment"!',
                  '',
                  'The current component <'.concat(r, ' /> is rendering a "Fragment".'),
                  'However we need to passthrough the following props:',
                  Object.keys(ef(u))
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
                      return eo(t(...n), u.className);
                    }
                  : eo(t, u.className),
              r = ec(c.props, ef(ep(u, ['ref'])));
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
          Object.assign({}, ep(u, ['ref']), l !== w.Fragment && s, l !== w.Fragment && d),
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
      function ep(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
      var em =
        (((d = em || {})[(d.None = 1)] = 'None'),
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
          return ea()({ ourProps: l, theirProps: o, slot: {}, defaultTag: 'span', name: 'Hidden' });
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
              features: em.Hidden,
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
      let ey = R(() => new Map(), {
        PUSH(e, t) {
          var n;
          let r = null != (n = this.get(e)) ? n : { doc: e, count: 0, d: H(), meta: new Set() };
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
                          let e = H();
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
      function eb() {
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
      ey.subscribe(() => {
        let e = ey.getSnapshot(),
          t = new Map();
        for (let [n] of e) t.set(n, n.documentElement.style.overflow);
        for (let n of e.values()) {
          let e = 'hidden' === t.get(n.doc),
            r = 0 !== n.count;
          ((r && !e) || (!r && e)) && ey.dispatch(n.count > 0 ? 'SCROLL_PREVENT' : 'SCROLL_ALLOW', n),
            0 === n.count && ey.dispatch('TEARDOWN', n);
        }
      });
      let ew = Symbol();
      function eT() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let r = (0, w.useRef)(t);
        (0, w.useEffect)(() => {
          r.current = t;
        }, [t]);
        let o = I((e) => {
          for (let t of r.current) null != t && ('function' == typeof t ? t(e) : (t.current = e));
        });
        return t.every((e) => null == e || (null == e ? void 0 : e[ew])) ? void 0 : o;
      }
      let eS = (0, w.createContext)(() => {});
      function eF(e) {
        let { value: t, children: n } = e;
        return w.createElement(eS.Provider, { value: t }, n);
      }
      let eP = (0, w.createContext)(null);
      eP.displayName = 'OpenClosedContext';
      var eA =
        (((f = eA || {})[(f.Open = 1)] = 'Open'),
        (f[(f.Closed = 2)] = 'Closed'),
        (f[(f.Closing = 4)] = 'Closing'),
        (f[(f.Opening = 8)] = 'Opening'),
        f);
      function eC() {
        return (0, w.useContext)(eP);
      }
      function eL(e) {
        let { value: t, children: n } = e;
        return w.createElement(eP.Provider, { value: t }, n);
      }
      function eO(e) {
        let { children: t } = e;
        return w.createElement(eP.Provider, { value: null }, t);
      }
      let ex = (0, w.createContext)(!1);
      function ek(e) {
        return w.createElement(ex.Provider, { value: e.force }, e.children);
      }
      let eN = (0, w.createContext)(void 0),
        eR = (0, w.createContext)(null);
      eR.displayName = 'DescriptionContext';
      let eM = Object.assign(
        ed(function (e, t) {
          let n = (0, w.useId)(),
            r = (0, w.useContext)(eN),
            { id: o = 'headlessui-description-'.concat(n), ...l } = e,
            i = (function e() {
              let t = (0, w.useContext)(eR);
              if (null === t) {
                let t = Error('You used a <Description /> component, but it is not inside a relevant parent.');
                throw (Error.captureStackTrace && Error.captureStackTrace(t, e), t);
              }
              return t;
            })(),
            a = eT(t);
          O(() => i.register(o), [o, i.register]);
          let u = r || !1,
            s = (0, w.useMemo)(() => ({ ...i.slot, disabled: u }), [i.slot, u]),
            c = { ref: a, ...i.props, id: o };
          return ea()({ ourProps: c, theirProps: l, slot: s, defaultTag: 'p', name: i.name || 'Description' });
        }),
        {}
      );
      function eD() {
        let [e] = (0, w.useState)(H);
        return (0, w.useEffect)(() => () => e.dispose(), [e]), e;
      }
      function e_() {
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
      function eI(e) {
        let t = I(e),
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
      var ej = (((p = ej || {})[(p.Forwards = 0)] = 'Forwards'), (p[(p.Backwards = 1)] = 'Backwards'), p);
      function eH(e, t) {
        let n = (0, w.useRef)([]),
          r = I(e);
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
      function eq(e) {
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
        'undefined' != typeof window &&
          'undefined' != typeof document &&
          (document.addEventListener('DOMContentLoaded', t), t());
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
        (((m = eW || {})[(m.None = 0)] = 'None'),
        (m[(m.InitialFocus = 1)] = 'InitialFocus'),
        (m[(m.TabLock = 2)] = 'TabLock'),
        (m[(m.FocusLock = 4)] = 'FocusLock'),
        (m[(m.RestoreFocus = 8)] = 'RestoreFocus'),
        (m[(m.AutoFocus = 16)] = 'AutoFocus'),
        m);
      let eV = Object.assign(
        ed(function (e, t) {
          let n,
            r = (0, w.useRef)(null),
            o = eT(r, t),
            { initialFocus: l, initialFocusFallback: i, containers: a, features: u = 15, ...s } = e;
          eb() || (u = 0);
          let c = er(r);
          !(function (e, t) {
            let { ownerDocument: n } = t,
              r = !!(8 & e),
              o = (function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                  t = (0, w.useRef)(eU.slice());
                return (
                  eH(
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
                  I(() => {
                    var e;
                    return null != (e = t.current.find((e) => null != e && e.isConnected)) ? e : null;
                  })
                );
              })(r);
            eH(() => {
              r || ((null == n ? void 0 : n.activeElement) === (null == n ? void 0 : n.body) && J(o()));
            }, [r]),
              eI(() => {
                r && J(o());
              });
          })(u, { ownerDocument: c });
          let d = (function (e, t) {
            let { ownerDocument: n, container: r, initialFocus: o, initialFocusFallback: l } = t,
              i = (0, w.useRef)(null),
              a = _(!!(1 & e), 'focus-trap#initial-focus'),
              u = e_();
            return (
              eH(() => {
                if (0 === e) return;
                if (!a) {
                  null != l && l.current && J(l.current);
                  return;
                }
                let t = r.current;
                t &&
                  j(() => {
                    if (!u.current) return;
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
              }, [l, a, e]),
              i
            );
          })(u, { ownerDocument: c, container: r, initialFocus: l, initialFocusFallback: i });
          !(function (e, t) {
            let { ownerDocument: n, container: r, containers: o, previousActiveElement: l } = t,
              i = e_(),
              a = !!(4 & e);
            k(
              null == n ? void 0 : n.defaultView,
              'focus',
              (e) => {
                if (!a || !i.current) return;
                let t = eq(o);
                r.current instanceof HTMLElement && t.add(r.current);
                let n = l.current;
                if (!n) return;
                let u = e.target;
                u && u instanceof HTMLElement
                  ? eB(t, u)
                    ? ((l.current = u), J(u))
                    : (e.preventDefault(), e.stopPropagation(), J(n))
                  : J(l.current);
              },
              !0
            );
          })(u, { ownerDocument: c, container: r, containers: a, previousActiveElement: d });
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
            p = I((e) => {
              let t = r.current;
              t &&
                B(f.current, {
                  [ej.Forwards]: () => {
                    Q(t, K.First, { skipElements: [e.relatedTarget, i] });
                  },
                  [ej.Backwards]: () => {
                    Q(t, K.Last, { skipElements: [e.relatedTarget, i] });
                  },
                });
            }),
            m = _(!!(2 & u), 'focus-trap#tab-lock'),
            h = eD(),
            v = (0, w.useRef)(!1),
            g = ea();
          return w.createElement(
            w.Fragment,
            null,
            m &&
              w.createElement(eh, {
                as: 'button',
                type: 'button',
                'data-headlessui-focus-guard': !0,
                onFocus: p,
                features: em.Focusable,
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
                  if (!(4 & u)) return;
                  let t = eq(a);
                  r.current instanceof HTMLElement && t.add(r.current);
                  let n = e.relatedTarget;
                  n instanceof HTMLElement &&
                    'true' !== n.dataset.headlessuiFocusGuard &&
                    (eB(t, n) ||
                      (v.current
                        ? Q(
                            r.current,
                            B(f.current, { [ej.Forwards]: () => K.Next, [ej.Backwards]: () => K.Previous }) |
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
            m &&
              w.createElement(eh, {
                as: 'button',
                type: 'button',
                'data-headlessui-focus-guard': !0,
                onFocus: p,
                features: em.Focusable,
              })
          );
        }),
        { features: eW }
      );
      function eB(e, t) {
        for (let n of e) if (n.contains(t)) return !0;
        return !1;
      }
      var eY = n(4887);
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
            a = (0, w.useContext)(e$),
            u = eb();
          O(() => {
            !l || !i || l.contains(i) || (i.setAttribute('data-headlessui-portal', ''), l.appendChild(i));
          }, [l, i]),
            O(() => {
              if (i && a) return a.register(i);
            }, [a, i]),
            eI(() => {
              var e;
              l &&
                i &&
                (i instanceof Node && l.contains(i) && l.removeChild(i),
                l.childNodes.length <= 0 && (null == (e = l.parentElement) || e.removeChild(l)));
            });
          let s = ea();
          return u && l && i
            ? (0, eY.createPortal)(
                s({ ourProps: { ref: r }, theirProps: e, slot: {}, defaultTag: eG, name: 'Portal' }),
                i
              )
            : null;
        }),
        eX = w.Fragment,
        ez = (0, w.createContext)(null),
        e$ = (0, w.createContext)(null),
        eZ = ed(function (e, t) {
          let n = eT(t),
            { enabled: r = !0, ...o } = e,
            l = ea();
          return r
            ? w.createElement(eK, { ...o, ref: n })
            : l({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: eG, name: 'Portal' });
        }),
        eJ = ed(function (e, t) {
          let { target: n, ...r } = e,
            o = { ref: eT(t) },
            l = ea();
          return w.createElement(
            ez.Provider,
            { value: n },
            l({ ourProps: o, theirProps: r, defaultTag: eX, name: 'Popover.Group' })
          );
        }),
        eQ = Object.assign(eZ, { Group: eJ });
      var e0 = n(5566);
      void 0 !== e0 &&
        'undefined' != typeof globalThis &&
        'undefined' != typeof Element &&
        (null == (y = null == e0 ? void 0 : e0.env) ? void 0 : y.NODE_ENV) === 'test' &&
        void 0 === (null == (b = null == Element ? void 0 : Element.prototype) ? void 0 : b.getAnimations) &&
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
          (null != (t = e.as) ? t : e7) !== w.Fragment ||
          1 === w.Children.count(e.children)
        );
      }
      let e4 = (0, w.createContext)(null);
      e4.displayName = 'TransitionContext';
      var e8 = (((v = e8 || {}).Visible = 'visible'), (v.Hidden = 'hidden'), v);
      let e3 = (0, w.createContext)(null);
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
      function e5(e, t) {
        let n = x(e),
          r = (0, w.useRef)([]),
          o = e_(),
          l = eD(),
          i = I(function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei.Hidden,
              i = r.current.findIndex((t) => {
                let { el: n } = t;
                return n === e;
              });
            -1 !== i &&
              (B(t, {
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
          a = I((e) => {
            let t = r.current.find((t) => {
              let { el: n } = t;
              return n === e;
            });
            return (
              t ? 'visible' !== t.state && (t.state = 'visible') : r.current.push({ el: e, state: 'visible' }),
              () => i(e, ei.Unmount)
            );
          }),
          u = (0, w.useRef)([]),
          s = (0, w.useRef)(Promise.resolve()),
          c = (0, w.useRef)({ enter: [], leave: [] }),
          d = I((e, n, r) => {
            u.current.splice(0),
              t &&
                (t.chains.current[n] = t.chains.current[n].filter((t) => {
                  let [n] = t;
                  return n !== e;
                })),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    u.current.push(e);
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
          f = I((e, t, n) => {
            Promise.all(
              c.current[t].splice(0).map((e) => {
                let [t, n] = e;
                return n;
              })
            )
              .then(() => {
                var e;
                null == (e = u.current.shift()) || e();
              })
              .then(() => n(t));
          });
        return (0, w.useMemo)(
          () => ({ children: r, register: a, unregister: i, onStart: d, onStop: f, wait: s, chains: c }),
          [a, i, r, d, f, c, s]
        );
      }
      e3.displayName = 'NestingContext';
      let e7 = w.Fragment,
        e9 = el.RenderStrategy,
        te = ed(function (e, t) {
          let { show: n, appear: r = !1, unmount: o = !0, ...l } = e,
            i = (0, w.useRef)(null),
            a = eT(...(e2(e) ? [i, t] : null === t ? [] : [t]));
          eb();
          let u = eC();
          if ((void 0 === n && null !== u && (n = (u & eA.Open) === eA.Open), void 0 === n))
            throw Error('A <Transition /> is used but it is missing a `show={true | false}` prop.');
          let [s, c] = (0, w.useState)(n ? 'visible' : 'hidden'),
            d = e5(() => {
              n || c('hidden');
            }),
            [f, p] = (0, w.useState)(!0),
            m = (0, w.useRef)([n]);
          O(() => {
            !1 !== f && m.current[m.current.length - 1] !== n && (m.current.push(n), p(!1));
          }, [m, n]);
          let h = (0, w.useMemo)(() => ({ show: n, appear: r, initial: f }), [n, r, f]);
          O(() => {
            n ? c('visible') : e6(d) || null === i.current || c('hidden');
          }, [n, d]);
          let v = { unmount: o },
            g = I(() => {
              var t;
              f && p(!1), null == (t = e.beforeEnter) || t.call(e);
            }),
            E = I(() => {
              var t;
              f && p(!1), null == (t = e.beforeLeave) || t.call(e);
            }),
            y = ea();
          return w.createElement(
            e3.Provider,
            { value: d },
            w.createElement(
              e4.Provider,
              { value: h },
              y({
                ourProps: {
                  ...v,
                  as: w.Fragment,
                  children: w.createElement(tt, { ref: a, ...v, ...l, beforeEnter: g, beforeLeave: E }),
                },
                theirProps: {},
                defaultTag: w.Fragment,
                features: e9,
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
              beforeLeave: a,
              afterLeave: u,
              enter: s,
              enterFrom: c,
              enterTo: d,
              entered: f,
              leave: p,
              leaveFrom: m,
              leaveTo: h,
              ...v
            } = e,
            [g, E] = (0, w.useState)(null),
            y = (0, w.useRef)(null),
            b = e2(e),
            T = eT(...(b ? [y, t, E] : null === t ? [] : [t])),
            S = null == (n = v.unmount) || n ? ei.Unmount : ei.Hidden,
            {
              show: F,
              appear: P,
              initial: A,
            } = (function () {
              let e = (0, w.useContext)(e4);
              if (null === e)
                throw Error(
                  'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
                );
              return e;
            })(),
            [C, L] = (0, w.useState)(F ? 'visible' : 'hidden'),
            x = (function () {
              let e = (0, w.useContext)(e3);
              if (null === e)
                throw Error(
                  'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
                );
              return e;
            })(),
            { register: k, unregister: N } = x;
          O(() => k(y), [k, y]),
            O(() => {
              if (S === ei.Hidden && y.current) {
                if (F && 'visible' !== C) {
                  L('visible');
                  return;
                }
                return B(C, { hidden: () => N(y), visible: () => k(y) });
              }
            }, [C, y, k, N, F, S]);
          let R = eb();
          O(() => {
            if (b && R && 'visible' === C && null === y.current)
              throw Error('Did you forget to passthrough the `ref` to the actual DOM node?');
          }, [y, C, R, b]);
          let M = A && !P,
            D = P && F && A,
            _ = (0, w.useRef)(!1),
            j = e5(() => {
              _.current || (L('hidden'), N(y));
            }, x),
            U = I((e) => {
              (_.current = !0),
                j.onStart(y, e ? 'enter' : 'leave', (e) => {
                  'enter' === e ? null == l || l() : 'leave' === e && (null == a || a());
                });
            }),
            q = I((e) => {
              let t = e ? 'enter' : 'leave';
              (_.current = !1),
                j.onStop(y, t, (e) => {
                  'enter' === e ? null == i || i() : 'leave' === e && (null == u || u());
                }),
                'leave' !== t || e6(j) || (L('hidden'), N(y));
            });
          (0, w.useEffect)(() => {
            (b && o) || (U(F), q(F));
          }, [F, b, o]);
          let [, W] = (function (e, t, n, r) {
              let [o, l] = (0, w.useState)(n),
                {
                  hasFlag: i,
                  addFlag: a,
                  removeFlag: u,
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
                      n && a(3);
                      return;
                    }
                    return (
                      null == (o = null == r ? void 0 : r.start) || o.call(r, n),
                      (function (e, t) {
                        let { prepare: n, run: r, done: o, inFlight: l } = t,
                          i = H();
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
                                    let o = H();
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
                            c.current || (n ? (a(3), u(4)) : (a(4), u(2)));
                        },
                        run() {
                          c.current ? (n ? (u(3), a(4)) : (u(4), a(3))) : n ? u(1) : a(1);
                        },
                        done() {
                          var e;
                          (c.current && 'function' == typeof t.getAnimations && t.getAnimations().length > 0) ||
                            ((s.current = !1),
                            u(7),
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
            })(!(!o || !b || !R || M), g, F, { start: U, end: q }),
            V = ef({
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
                  W.leave && p,
                  W.leave && !W.closed && m,
                  W.leave && W.closed && h,
                  !W.transition && F && f
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
          'visible' === C && (Y |= eA.Open),
            'hidden' === C && (Y |= eA.Closed),
            W.enter && (Y |= eA.Opening),
            W.leave && (Y |= eA.Closing);
          let G = ea();
          return w.createElement(
            e3.Provider,
            { value: j },
            w.createElement(
              eL,
              { value: Y },
              G({
                ourProps: V,
                theirProps: v,
                defaultTag: e7,
                features: e9,
                visible: 'visible' === C,
                name: 'Transition.Child',
              })
            )
          );
        }),
        tn = ed(function (e, t) {
          let n = null !== (0, w.useContext)(e4),
            r = null !== eC();
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
        ta = (0, w.createContext)(null);
      function tu(e) {
        let t = (0, w.useContext)(ta);
        if (null === t) {
          let t = Error('<'.concat(e, ' /> is missing a parent <Dialog /> component.'));
          throw (Error.captureStackTrace && Error.captureStackTrace(t, tu), t);
        }
        return t;
      }
      function ts(e, t) {
        return B(t.type, ti, e, t);
      }
      ta.displayName = 'DialogContext';
      let tc = ed(function (e, t) {
          var n;
          let r,
            o,
            l,
            i,
            a,
            u,
            s,
            c,
            d,
            f,
            p,
            m = (0, w.useId)(),
            {
              id: h = 'headlessui-dialog-'.concat(m),
              open: v,
              onClose: g,
              initialFocus: E,
              role: y = 'dialog',
              autoFocus: b = !0,
              __demoMode: T = !1,
              unmount: F = !1,
              ...P
            } = e,
            A = (0, w.useRef)(!1);
          y =
            'dialog' === y || 'alertdialog' === y
              ? y
              : (A.current ||
                  ((A.current = !0),
                  console.warn(
                    'Invalid role ['.concat(
                      y,
                      '] passed to <Dialog />. Only `dialog` and and `alertdialog` are supported. Using `dialog` instead.'
                    )
                  )),
                'dialog');
          let C = eC();
          void 0 === v && null !== C && (v = (C & eA.Open) === eA.Open);
          let L = (0, w.useRef)(null),
            N = eT(L, t),
            R = er(L),
            D = v ? 0 : 1,
            [j, q] = (0, w.useReducer)(ts, { titleId: null, descriptionId: null, panelRef: (0, w.createRef)() }),
            W = I(() => g(!1)),
            G = I((e) => q({ type: 0, id: e })),
            K = !!eb() && 0 === D,
            [X, z] =
              ((r = (0, w.useContext)(e$)),
              (o = (0, w.useRef)([])),
              (l = I((e) => (o.current.push(e), r && r.register(e), () => i(e)))),
              (i = I((e) => {
                let t = o.current.indexOf(e);
                -1 !== t && o.current.splice(t, 1), r && r.unregister(e);
              })),
              (a = (0, w.useMemo)(() => ({ register: l, unregister: i, portals: o }), [l, i, o])),
              [
                o,
                (0, w.useMemo)(
                  () =>
                    function (e) {
                      let { children: t } = e;
                      return w.createElement(e$.Provider, { value: a }, t);
                    },
                  [a]
                ),
              ]),
            Z = eE(),
            { resolveContainers: J } = (function () {
              let {
                  defaultContainers: e = [],
                  portals: t,
                  mainTreeNode: n,
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = er(n),
                o = I(() => {
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
              return { resolveContainers: o, contains: I((e) => o().some((t) => t.contains(e))) };
            })({
              mainTreeNode: Z,
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
            eo = null !== C && (C & eA.Closing) === eA.Closing;
          (function (e) {
            let { allowed: t, disallowed: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              r = _(e, 'inert-others');
            O(() => {
              var e, o;
              if (!r) return;
              let l = H();
              for (let t of null != (e = null == n ? void 0 : n()) ? e : []) t && l.add(V(t));
              let i = null != (o = null == t ? void 0 : t()) ? o : [];
              for (let e of i) {
                if (!e) continue;
                let t = U(e);
                if (!t) continue;
                let n = e.parentElement;
                for (; n && n !== t.body; ) {
                  for (let e of n.children) i.some((t) => e.contains(t)) || l.add(V(e));
                  n = n.parentElement;
                }
              }
              return l.dispose;
            }, [r, t, n]);
          })(!T && !eo && K, {
            allowed: I(() => {
              var e, t;
              return [
                null != (t = null == (e = L.current) ? void 0 : e.closest('[data-headlessui-portal]')) ? t : null,
              ];
            }),
            disallowed: I(() => {
              var e;
              return [null != (e = null == Z ? void 0 : Z.closest('body > *:not(#headlessui-portal-root)')) ? e : null];
            }),
          }),
            (n = (e) => {
              e.preventDefault(), W();
            }),
            (u = _(K, 'outside-click')),
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
                        B(n, {
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
                    })(n, $.Loose) &&
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
              u,
              'pointerdown',
              (e) => {
                var t, n;
                d.current =
                  (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target;
              },
              !0
            ),
            et(
              u,
              'mousedown',
              (e) => {
                var t, n;
                d.current =
                  (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target;
              },
              !0
            ),
            et(
              u,
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
              u,
              'touchstart',
              (e) => {
                (f.current.x = e.touches[0].clientX), (f.current.y = e.touches[0].clientY);
              },
              !0
            ),
            et(
              u,
              'touchend',
              (e) => {
                let t = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
                if (!(Math.abs(t.x - f.current.x) >= 30 || Math.abs(t.y - f.current.y) >= 30))
                  return c(e, () => (e.target instanceof HTMLElement ? e.target : null));
              },
              !0
            ),
            en(
              u,
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
                r = _(e, 'escape');
              k(t, 'keydown', (e) => {
                r && (e.defaultPrevented || (e.key === S.Escape && n(e)));
              });
            })(K, null == R ? void 0 : R.defaultView, (e) => {
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
                  r = M(ey),
                  o = t ? r.get(t) : void 0;
                o && o.count,
                  O(() => {
                    if (!(!t || !e)) return ey.dispatch('PUSH', t, n), () => ey.dispatch('POP', t, n);
                  }, [e, t]);
              })(_(e, 'scroll-lock'), t, (e) => {
                var t;
                return { containers: [...(null != (t = e.containers) ? t : []), n] };
              });
            })(!T && !eo && K, R, J),
            (p = x((e) => {
              let t = e.getBoundingClientRect();
              0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && W();
            })),
            (0, w.useEffect)(() => {
              if (!K) return;
              let e = null === L ? null : L instanceof HTMLElement ? L : L.current;
              if (!e) return;
              let t = H();
              if ('undefined' != typeof ResizeObserver) {
                let n = new ResizeObserver(() => p.current(e));
                n.observe(e), t.add(() => n.disconnect());
              }
              if ('undefined' != typeof IntersectionObserver) {
                let n = new IntersectionObserver(() => p.current(e));
                n.observe(e), t.add(() => n.disconnect());
              }
              return () => t.dispose();
            }, [L, p, K]);
          let [el, ei] = (function () {
              let [e, t] = (0, w.useState)([]);
              return [
                e.length > 0 ? e.join(' ') : void 0,
                (0, w.useMemo)(
                  () =>
                    function (e) {
                      let n = I(
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
                      return w.createElement(eR.Provider, { value: r }, e.children);
                    },
                  [t]
                ),
              ];
            })(),
            eu = (0, w.useMemo)(() => [{ dialogState: D, close: W, setTitleId: G, unmount: F }, j], [D, j, W, G, F]),
            es = (0, w.useMemo)(() => ({ open: 0 === D }), [D]),
            ec = {
              ref: N,
              id: h,
              role: y,
              tabIndex: -1,
              'aria-modal': T ? void 0 : 0 === D || void 0,
              'aria-labelledby': j.titleId,
              'aria-describedby': el,
              unmount: F,
            },
            ed = !(function () {
              var e;
              let [t] = (0, w.useState)(() =>
                  'undefined' != typeof window && 'function' == typeof window.matchMedia
                    ? window.matchMedia('(pointer: coarse)')
                    : null
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
            ((ef |= eW.RestoreFocus), (ef |= eW.TabLock), b && (ef |= eW.AutoFocus), ed && (ef |= eW.InitialFocus));
          let ep = ea();
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
                  ta.Provider,
                  { value: eu },
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
                            eV,
                            { initialFocus: E, initialFocusFallback: L, containers: J, features: ef },
                            w.createElement(
                              eF,
                              { value: W },
                              ep({
                                ourProps: ec,
                                theirProps: P,
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
        tp = ed(function (e, t) {
          let { transition: n = !1, open: r, ...o } = e,
            l = eC(),
            i = e.hasOwnProperty('open') || null !== l,
            a = e.hasOwnProperty('onClose');
          if (!i && !a) throw Error('You have to provide an `open` and an `onClose` prop to the `Dialog` component.');
          if (!i) throw Error('You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.');
          if (!a) throw Error('You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.');
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
        tm = ed(function (e, t) {
          let n = (0, w.useId)(),
            { id: r = 'headlessui-dialog-panel-'.concat(n), transition: o = !1, ...l } = e,
            [{ dialogState: i, unmount: a }, u] = tu('Dialog.Panel'),
            s = eT(t, u.panelRef),
            c = (0, w.useMemo)(() => ({ open: 0 === i }), [i]),
            d = I((e) => {
              e.stopPropagation();
            }),
            f = o ? tn : w.Fragment,
            p = ea();
          return w.createElement(
            f,
            { ...(o ? { unmount: a } : {}) },
            p({
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
            [{ dialogState: o, unmount: l }] = tu('Dialog.Backdrop'),
            i = (0, w.useMemo)(() => ({ open: 0 === o }), [o]),
            a = n ? tn : w.Fragment,
            u = ea();
          return w.createElement(
            a,
            { ...(n ? { unmount: l } : {}) },
            u({
              ourProps: { ref: t, 'aria-hidden': !0 },
              theirProps: r,
              slot: i,
              defaultTag: 'div',
              name: 'Dialog.Backdrop',
            })
          );
        }),
        tv = Object.assign(tp, {
          Panel: tm,
          Title: ed(function (e, t) {
            let n = (0, w.useId)(),
              { id: r = 'headlessui-dialog-title-'.concat(n), ...o } = e,
              [{ dialogState: l, setTitleId: i }] = tu('Dialog.Title'),
              a = eT(t);
            (0, w.useEffect)(() => (i(r), () => i(null)), [r, i]);
            let u = (0, w.useMemo)(() => ({ open: 0 === l }), [l]);
            return ea()({
              ourProps: { ref: a, id: r },
              theirProps: o,
              slot: u,
              defaultTag: 'h2',
              name: 'Dialog.Title',
            });
          }),
          Description: eM,
        });
    },
  },
]);
