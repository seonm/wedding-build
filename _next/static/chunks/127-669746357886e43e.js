(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [127],
  {
    1877: function (e, i, t) {
      'use strict';
      t.d(i, {
        default: function () {
          return o.a;
        },
      });
      var n = t(4080),
        o = t.n(n);
    },
    905: function (e, i) {
      'use strict';
      let t;
      Object.defineProperty(i, '__esModule', { value: !0 }),
        (function (e, i) {
          for (var t in i) Object.defineProperty(e, t, { enumerable: !0, get: i[t] });
        })(i, {
          DOMAttributeNames: function () {
            return n;
          },
          default: function () {
            return a;
          },
          isEqualNode: function () {
            return r;
          },
        });
      let n = {
        acceptCharset: 'accept-charset',
        className: 'class',
        htmlFor: 'for',
        httpEquiv: 'http-equiv',
        noModule: 'noModule',
      };
      function o(e) {
        let { type: i, props: t } = e,
          o = document.createElement(i);
        for (let e in t) {
          if (!t.hasOwnProperty(e) || 'children' === e || 'dangerouslySetInnerHTML' === e || void 0 === t[e]) continue;
          let r = n[e] || e.toLowerCase();
          'script' === i && ('async' === r || 'defer' === r || 'noModule' === r)
            ? (o[r] = !!t[e])
            : o.setAttribute(r, t[e]);
        }
        let { children: r, dangerouslySetInnerHTML: a } = t;
        return (
          a
            ? (o.innerHTML = a.__html || '')
            : r && (o.textContent = 'string' == typeof r ? r : Array.isArray(r) ? r.join('') : ''),
          o
        );
      }
      function r(e, i) {
        if (e instanceof HTMLElement && i instanceof HTMLElement) {
          let t = i.getAttribute('nonce');
          if (t && !e.getAttribute('nonce')) {
            let n = i.cloneNode(!0);
            return n.setAttribute('nonce', ''), (n.nonce = t), t === e.nonce && e.isEqualNode(n);
          }
        }
        return e.isEqualNode(i);
      }
      function a() {
        return {
          mountedInstances: new Set(),
          updateHead: (e) => {
            let i = {};
            e.forEach((e) => {
              if ('link' === e.type && e.props['data-optimized-fonts']) {
                if (document.querySelector('style[data-href="' + e.props['data-href'] + '"]')) return;
                (e.props.href = e.props['data-href']), (e.props['data-href'] = void 0);
              }
              let t = i[e.type] || [];
              t.push(e), (i[e.type] = t);
            });
            let n = i.title ? i.title[0] : null,
              o = '';
            if (n) {
              let { children: e } = n.props;
              o = 'string' == typeof e ? e : Array.isArray(e) ? e.join('') : '';
            }
            o !== document.title && (document.title = o),
              ['meta', 'base', 'link', 'style', 'script'].forEach((e) => {
                t(e, i[e] || []);
              });
          },
        };
      }
      (t = (e, i) => {
        let t = document.getElementsByTagName('head')[0],
          n = t.querySelector('meta[name=next-head-count]'),
          a = Number(n.content),
          s = [];
        for (
          let i = 0, t = n.previousElementSibling;
          i < a;
          i++, t = (null == t ? void 0 : t.previousElementSibling) || null
        ) {
          var l;
          (null == t ? void 0 : null == (l = t.tagName) ? void 0 : l.toLowerCase()) === e && s.push(t);
        }
        let d = i.map(o).filter((e) => {
          for (let i = 0, t = s.length; i < t; i++) if (r(s[i], e)) return s.splice(i, 1), !1;
          return !0;
        });
        s.forEach((e) => {
          var i;
          return null == (i = e.parentNode) ? void 0 : i.removeChild(e);
        }),
          d.forEach((e) => t.insertBefore(e, n)),
          (n.content = (a - s.length + d.length).toString());
      }),
        ('function' == typeof i.default || ('object' == typeof i.default && null !== i.default)) &&
          void 0 === i.default.__esModule &&
          (Object.defineProperty(i.default, '__esModule', { value: !0 }),
          Object.assign(i.default, i),
          (e.exports = i.default));
    },
    4080: function (e, i, t) {
      'use strict';
      Object.defineProperty(i, '__esModule', { value: !0 }),
        (function (e, i) {
          for (var t in i) Object.defineProperty(e, t, { enumerable: !0, get: i[t] });
        })(i, {
          default: function () {
            return v;
          },
          handleClientScriptLoad: function () {
            return m;
          },
          initScriptLoader: function () {
            return h;
          },
        });
      let n = t(1609),
        o = t(6720),
        r = t(7437),
        a = n._(t(4887)),
        s = o._(t(2265)),
        l = t(6590),
        d = t(905),
        u = t(9189),
        c = new Map(),
        p = new Set(),
        b = ['onLoad', 'onReady', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy', 'stylesheets'],
        f = (e) => {
          if (a.default.preinit) {
            e.forEach((e) => {
              a.default.preinit(e, { as: 'style' });
            });
            return;
          }
          if ('undefined' != typeof window) {
            let i = document.head;
            e.forEach((e) => {
              let t = document.createElement('link');
              (t.type = 'text/css'), (t.rel = 'stylesheet'), (t.href = e), i.appendChild(t);
            });
          }
        },
        w = (e) => {
          let {
              src: i,
              id: t,
              onLoad: n = () => {},
              onReady: o = null,
              dangerouslySetInnerHTML: r,
              children: a = '',
              strategy: s = 'afterInteractive',
              onError: l,
              stylesheets: u,
            } = e,
            w = t || i;
          if (w && p.has(w)) return;
          if (c.has(i)) {
            p.add(w), c.get(i).then(n, l);
            return;
          }
          let m = () => {
              o && o(), p.add(w);
            },
            h = document.createElement('script'),
            g = new Promise((e, i) => {
              h.addEventListener('load', function (i) {
                e(), n && n.call(this, i), m();
              }),
                h.addEventListener('error', function (e) {
                  i(e);
                });
            }).catch(function (e) {
              l && l(e);
            });
          for (let [t, n] of (r
            ? ((h.innerHTML = r.__html || ''), m())
            : a
              ? ((h.textContent = 'string' == typeof a ? a : Array.isArray(a) ? a.join('') : ''), m())
              : i && ((h.src = i), c.set(i, g)),
          Object.entries(e))) {
            if (void 0 === n || b.includes(t)) continue;
            let e = d.DOMAttributeNames[t] || t.toLowerCase();
            h.setAttribute(e, n);
          }
          'worker' === s && h.setAttribute('type', 'text/partytown'),
            h.setAttribute('data-nscript', s),
            u && f(u),
            document.body.appendChild(h);
        };
      function m(e) {
        let { strategy: i = 'afterInteractive' } = e;
        'lazyOnload' === i
          ? window.addEventListener('load', () => {
              (0, u.requestIdleCallback)(() => w(e));
            })
          : w(e);
      }
      function h(e) {
        e.forEach(m),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let i = e.id || e.getAttribute('src');
            p.add(i);
          });
      }
      function g(e) {
        let {
            id: i,
            src: t = '',
            onLoad: n = () => {},
            onReady: o = null,
            strategy: d = 'afterInteractive',
            onError: c,
            stylesheets: b,
            ...f
          } = e,
          { updateScripts: m, scripts: h, getIsSsr: g, appDir: v, nonce: k } = (0, s.useContext)(l.HeadManagerContext),
          y = (0, s.useRef)(!1);
        (0, s.useEffect)(() => {
          let e = i || t;
          y.current || (o && e && p.has(e) && o(), (y.current = !0));
        }, [o, i, t]);
        let x = (0, s.useRef)(!1);
        if (
          ((0, s.useEffect)(() => {
            !x.current &&
              ('afterInteractive' === d
                ? w(e)
                : 'lazyOnload' === d &&
                  ('complete' === document.readyState
                    ? (0, u.requestIdleCallback)(() => w(e))
                    : window.addEventListener('load', () => {
                        (0, u.requestIdleCallback)(() => w(e));
                      })),
              (x.current = !0));
          }, [e, d]),
          ('beforeInteractive' === d || 'worker' === d) &&
            (m
              ? ((h[d] = (h[d] || []).concat([{ id: i, src: t, onLoad: n, onReady: o, onError: c, ...f }])), m(h))
              : g && g()
                ? p.add(i || t)
                : g && !g() && w(e)),
          v)
        ) {
          if (
            (b &&
              b.forEach((e) => {
                a.default.preinit(e, { as: 'style' });
              }),
            'beforeInteractive' === d)
          )
            return t
              ? (a.default.preload(
                  t,
                  f.integrity
                    ? { as: 'script', integrity: f.integrity, nonce: k, crossOrigin: f.crossOrigin }
                    : { as: 'script', nonce: k, crossOrigin: f.crossOrigin }
                ),
                (0, r.jsx)('script', {
                  nonce: k,
                  dangerouslySetInnerHTML: {
                    __html: '(self.__next_s=self.__next_s||[]).push(' + JSON.stringify([t, { ...f, id: i }]) + ')',
                  },
                }))
              : (f.dangerouslySetInnerHTML &&
                  ((f.children = f.dangerouslySetInnerHTML.__html), delete f.dangerouslySetInnerHTML),
                (0, r.jsx)('script', {
                  nonce: k,
                  dangerouslySetInnerHTML: {
                    __html: '(self.__next_s=self.__next_s||[]).push(' + JSON.stringify([0, { ...f, id: i }]) + ')',
                  },
                }));
          'afterInteractive' === d &&
            t &&
            a.default.preload(
              t,
              f.integrity
                ? { as: 'script', integrity: f.integrity, nonce: k, crossOrigin: f.crossOrigin }
                : { as: 'script', nonce: k, crossOrigin: f.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(g, '__nextScript', { value: !0 });
      let v = g;
      ('function' == typeof i.default || ('object' == typeof i.default && null !== i.default)) &&
        void 0 === i.default.__esModule &&
        (Object.defineProperty(i.default, '__esModule', { value: !0 }),
        Object.assign(i.default, i),
        (e.exports = i.default));
    },
    4398: function (e, i, t) {
      'use strict';
      var n,
        o,
        r,
        a,
        s,
        l,
        d = t(2265);
      d && 'object' == typeof d && 'default' in d && d.default;
      var u = t(7914),
        c = new u(),
        p = c.getBrowser(),
        b = c.getCPU(),
        f = c.getDevice(),
        w = c.getEngine(),
        m = c.getOS(),
        h = c.getUA(),
        g = {
          Mobile: 'mobile',
          Tablet: 'tablet',
          SmartTv: 'smarttv',
          Console: 'console',
          Wearable: 'wearable',
          Embedded: 'embedded',
          Browser: void 0,
        },
        v = {
          Chrome: 'Chrome',
          Firefox: 'Firefox',
          Opera: 'Opera',
          Yandex: 'Yandex',
          Safari: 'Safari',
          InternetExplorer: 'Internet Explorer',
          Edge: 'Edge',
          Chromium: 'Chromium',
          Ie: 'IE',
          MobileSafari: 'Mobile Safari',
          MIUI: 'MIUI Browser',
          SamsungBrowser: 'Samsung Browser',
        },
        k = function (e) {
          var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'none';
          return e || i;
        },
        y = function () {
          return !!('undefined' != typeof window && (window.navigator || navigator)) && (window.navigator || navigator);
        },
        x = function (e) {
          var i = y();
          return (
            i &&
            i.platform &&
            (-1 !== i.platform.indexOf(e) || ('MacIntel' === i.platform && i.maxTouchPoints > 1 && !window.MSStream))
          );
        },
        E = function (e) {
          return e.type === g.Browser;
        },
        S = function (e) {
          return e.name === v.Edge;
        },
        _ = function (e) {
          return 'string' == typeof e && -1 !== e.indexOf('Edg/');
        },
        C = function () {
          return x('iPad');
        };
      f.type,
        g.SmartTv,
        f.type,
        g.Console,
        f.type,
        g.Wearable,
        f.type,
        g.Embedded,
        p.name === v.MobileSafari || C(),
        p.name,
        v.Chromium;
      var T = (n = f.type) === g.Mobile || n === g.Tablet || C();
      f.type,
        g.Mobile,
        f.type === g.Tablet || C(),
        E(f),
        E(f),
        m.name,
        m.name,
        'iOS' === m.name || C(),
        p.name,
        v.Chrome,
        p.name,
        v.Firefox,
        (o = p.name) === v.Safari || v.MobileSafari,
        p.name,
        v.Opera,
        (r = p.name) === v.InternetExplorer || v.Ie,
        k(m.version),
        k(m.name),
        k(p.version),
        k(p.major),
        k(p.name),
        k(f.vendor),
        k(f.model),
        k(w.name),
        k(w.version),
        k(h),
        S(p) || _(h),
        p.name,
        v.Yandex,
        k(f.type, 'browser'),
        (a = y()) &&
          (/iPad|iPhone|iPod/.test(a.platform) || ('MacIntel' === a.platform && a.maxTouchPoints > 1)) &&
          window.MSStream,
        C(),
        x('iPhone'),
        x('iPod'),
        'string' == typeof (l = (s = y()) && s.userAgent && s.userAgent.toLowerCase()) && /electron/.test(l),
        _(h),
        S(p) && _(h),
        m.name,
        m.name,
        p.name,
        v.MIUI,
        p.name,
        v.SamsungBrowser,
        (i.tq = T);
    },
    7914: function (e, i, t) {
      var n;
      !(function (o, r) {
        'use strict';
        var a = 'function',
          s = 'undefined',
          l = 'object',
          d = 'string',
          u = 'major',
          c = 'model',
          p = 'name',
          b = 'type',
          f = 'vendor',
          w = 'version',
          m = 'architecture',
          h = 'console',
          g = 'mobile',
          v = 'tablet',
          k = 'smarttv',
          y = 'wearable',
          x = 'embedded',
          E = 'Amazon',
          S = 'Apple',
          _ = 'ASUS',
          C = 'BlackBerry',
          T = 'Browser',
          L = 'Chrome',
          I = 'Firefox',
          M = 'Google',
          O = 'Huawei',
          A = 'Microsoft',
          P = 'Motorola',
          N = 'Opera',
          D = 'Samsung',
          q = 'Sharp',
          j = 'Sony',
          z = 'Xiaomi',
          R = 'Zebra',
          U = 'Facebook',
          H = 'Chromium OS',
          B = 'Mac OS',
          F = ' Browser',
          G = function (e, i) {
            var t = {};
            for (var n in e) i[n] && i[n].length % 2 == 0 ? (t[n] = i[n].concat(e[n])) : (t[n] = e[n]);
            return t;
          },
          Z = function (e) {
            for (var i = {}, t = 0; t < e.length; t++) i[e[t].toUpperCase()] = e[t];
            return i;
          },
          $ = function (e, i) {
            return typeof e === d && -1 !== V(i).indexOf(V(e));
          },
          V = function (e) {
            return e.toLowerCase();
          },
          W = function (e, i) {
            if (typeof e === d) return (e = e.replace(/^\s\s*/, '')), typeof i === s ? e : e.substring(0, 500);
          },
          J = function (e, i) {
            for (var t, n, o, s, d, u, c = 0; c < i.length && !d; ) {
              var p = i[c],
                b = i[c + 1];
              for (t = n = 0; t < p.length && !d && p[t]; )
                if ((d = p[t++].exec(e)))
                  for (o = 0; o < b.length; o++)
                    (u = d[++n]),
                      typeof (s = b[o]) === l && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == a
                            ? (this[s[0]] = s[1].call(this, u))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                            ? typeof s[1] !== a || (s[1].exec && s[1].test)
                              ? (this[s[0]] = u ? u.replace(s[1], s[2]) : void 0)
                              : (this[s[0]] = u ? s[1].call(this, u, s[2]) : void 0)
                            : 4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : void 0)
                        : (this[s] = u || r);
              c += 2;
            }
          },
          K = function (e, i) {
            for (var t in i)
              if (typeof i[t] === l && i[t].length > 0) {
                for (var n = 0; n < i[t].length; n++) if ($(i[t][n], e)) return '?' === t ? r : t;
              } else if ($(i[t], e)) return '?' === t ? r : t;
            return i.hasOwnProperty('*') ? i['*'] : e;
          },
          X = {
            ME: '4.90',
            'NT 3.11': 'NT3.51',
            'NT 4.0': 'NT4.0',
            2e3: 'NT 5.0',
            XP: ['NT 5.1', 'NT 5.2'],
            Vista: 'NT 6.0',
            7: 'NT 6.1',
            8: 'NT 6.2',
            8.1: 'NT 6.3',
            10: ['NT 6.4', 'NT 10.0'],
            RT: 'ARM',
          },
          Y = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [w, [p, 'Chrome']],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [w, [p, 'Edge']],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [p, w],
              [/opios[\/ ]+([\w\.]+)/i],
              [w, [p, N + ' Mini']],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [w, [p, N + ' GX']],
              [/\bopr\/([\w\.]+)/i],
              [w, [p, N]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [w, [p, 'Baidu']],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i,
                /(heytap|ovi)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [p, w],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [w, [p, 'Quark']],
              [/\bddg\/([\w\.]+)/i],
              [w, [p, 'DuckDuckGo']],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [w, [p, 'UC' + T]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
              [w, [p, 'WeChat']],
              [/konqueror\/([\w\.]+)/i],
              [w, [p, 'Konqueror']],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [w, [p, 'IE']],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [w, [p, 'Yandex']],
              [/slbrowser\/([\w\.]+)/i],
              [w, [p, 'Smart Lenovo ' + T]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[p, /(.+)/, '$1 Secure ' + T], w],
              [/\bfocus\/([\w\.]+)/i],
              [w, [p, I + ' Focus']],
              [/\bopt\/([\w\.]+)/i],
              [w, [p, N + ' Touch']],
              [/coc_coc\w+\/([\w\.]+)/i],
              [w, [p, 'Coc Coc']],
              [/dolfin\/([\w\.]+)/i],
              [w, [p, 'Dolphin']],
              [/coast\/([\w\.]+)/i],
              [w, [p, N + ' Coast']],
              [/miuibrowser\/([\w\.]+)/i],
              [w, [p, 'MIUI ' + T]],
              [/fxios\/([-\w\.]+)/i],
              [w, [p, I]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[p, '360' + F]],
              [/\b(qq)\/([\w\.]+)/i],
              [[p, /(.+)/, '$1Browser'], w],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [[p, /(.+)/, '$1' + F], w],
              [/samsungbrowser\/([\w\.]+)/i],
              [w, [p, D + ' Internet']],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[p, /_/g, ' '], w],
              [/metasr[\/ ]?([\d\.]+)/i],
              [w, [p, 'Sogou Explorer']],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[p, 'Sogou Mobile'], w],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [p, w],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [p],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[p, U], w],
              [
                /(Klarna)\/([\w\.]+)/i,
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
              ],
              [p, w],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [w, [p, 'GSA']],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [w, [p, 'TikTok']],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [w, [p, L + ' Headless']],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[p, L + ' WebView'], w],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [w, [p, 'Android ' + T]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [p, w],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [w, [p, 'Mobile Safari']],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [w, p],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                p,
                [
                  w,
                  K,
                  {
                    '1.0': '/8',
                    1.2: '/1',
                    1.3: '/3',
                    '2.0': '/412',
                    '2.0.2': '/416',
                    '2.0.3': '/417',
                    '2.0.4': '/419',
                    '?': '/',
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [p, w],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[p, 'Netscape'], w],
              [/(wolvic)\/([\w\.]+)/i],
              [p, w],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [w, [p, I + ' Reality']],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
              ],
              [p, [w, /_/g, '.']],
              [/(cobalt)\/([\w\.]+)/i],
              [p, [w, /master.|lts./, '']],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[m, 'amd64']],
              [/(ia32(?=;))/i],
              [[m, V]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[m, 'ia32']],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[m, 'arm64']],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[m, 'armhf']],
              [/windows (ce|mobile); ppc;/i],
              [[m, 'arm']],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[m, /ower/, '', V]],
              [/(sun4\w)[;\)]/i],
              [[m, 'sparc']],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[m, V]],
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [c, [f, D], [b, v]],
              [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [c, [f, D], [b, g]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [c, [f, S], [b, g]],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [c, [f, S], [b, v]],
              [/(macintosh);/i],
              [c, [f, S]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [c, [f, q], [b, g]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [c, [f, O], [b, v]],
              [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [c, [f, O], [b, g]],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
              ],
              [
                [c, /_/g, ' '],
                [f, z],
                [b, g],
              ],
              [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [c, /_/g, ' '],
                [f, z],
                [b, v],
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [c, [f, 'OPPO'], [b, g]],
              [/\b(opd2\d{3}a?) bui/i],
              [c, [f, 'OPPO'], [b, v]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [c, [f, 'Vivo'], [b, g]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [c, [f, 'Realme'], [b, g]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [c, [f, P], [b, g]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [c, [f, P], [b, v]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [c, [f, 'LG'], [b, v]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [c, [f, 'LG'], [b, g]],
              [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
              [c, [f, 'Lenovo'], [b, v]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [c, /_/g, ' '],
                [f, 'Nokia'],
                [b, g],
              ],
              [/(pixel c)\b/i],
              [c, [f, M], [b, v]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [c, [f, M], [b, g]],
              [
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [c, [f, j], [b, g]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [c, 'Xperia Tablet'],
                [f, j],
                [b, v],
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [c, [f, 'OnePlus'], [b, g]],
              [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [c, [f, E], [b, v]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [c, /(.+)/g, 'Fire Phone $1'],
                [f, E],
                [b, g],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [c, f, [b, v]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [c, [f, C], [b, g]],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [c, [f, _], [b, v]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [c, [f, _], [b, g]],
              [/(nexus 9)/i],
              [c, [f, 'HTC'], [b, v]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [f, [c, /_/g, ' '], [b, g]],
              [
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
              ],
              [c, [f, 'TCL'], [b, v]],
              [/(itel) ((\w+))/i],
              [[f, V], c, [b, K, { tablet: ['p10001l', 'w7001'], '*': 'mobile' }]],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [c, [f, 'Acer'], [b, v]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [c, [f, 'Meizu'], [b, g]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [c, [f, 'Ulefone'], [b, g]],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [c, [f, 'Nothing'], [b, g]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [f, c, [b, g]],
              [
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [f, c, [b, v]],
              [/(surface duo)/i],
              [c, [f, A], [b, v]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [c, [f, 'Fairphone'], [b, g]],
              [/(u304aa)/i],
              [c, [f, 'AT&T'], [b, g]],
              [/\bsie-(\w*)/i],
              [c, [f, 'Siemens'], [b, g]],
              [/\b(rct\w+) b/i],
              [c, [f, 'RCA'], [b, v]],
              [/\b(venue[\d ]{2,7}) b/i],
              [c, [f, 'Dell'], [b, v]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [c, [f, 'Verizon'], [b, v]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [c, [f, 'Barnes & Noble'], [b, v]],
              [/\b(tm\d{3}\w+) b/i],
              [c, [f, 'NuVision'], [b, v]],
              [/\b(k88) b/i],
              [c, [f, 'ZTE'], [b, v]],
              [/\b(nx\d{3}j) b/i],
              [c, [f, 'ZTE'], [b, g]],
              [/\b(gen\d{3}) b.+49h/i],
              [c, [f, 'Swiss'], [b, g]],
              [/\b(zur\d{3}) b/i],
              [c, [f, 'Swiss'], [b, v]],
              [/\b((zeki)?tb.*\b) b/i],
              [c, [f, 'Zeki'], [b, v]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[f, 'Dragon Touch'], c, [b, v]],
              [/\b(ns-?\w{0,9}) b/i],
              [c, [f, 'Insignia'], [b, v]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [c, [f, 'NextBook'], [b, v]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[f, 'Voice'], c, [b, g]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[f, 'LvTel'], c, [b, g]],
              [/\b(ph-1) /i],
              [c, [f, 'Essential'], [b, g]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [c, [f, 'Envizen'], [b, v]],
              [/\b(trio[-\w\. ]+) b/i],
              [c, [f, 'MachSpeed'], [b, v]],
              [/\btu_(1491) b/i],
              [c, [f, 'Rotor'], [b, v]],
              [/(shield[\w ]+) b/i],
              [c, [f, 'Nvidia'], [b, v]],
              [/(sprint) (\w+)/i],
              [f, c, [b, g]],
              [/(kin\.[onetw]{3})/i],
              [
                [c, /\./g, ' '],
                [f, A],
                [b, g],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [c, [f, R], [b, v]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [c, [f, R], [b, g]],
              [/smart-tv.+(samsung)/i],
              [f, [b, k]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [c, /^/, 'SmartTV'],
                [f, D],
                [b, k],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [f, 'LG'],
                [b, k],
              ],
              [/(apple) ?tv/i],
              [f, [c, S + ' TV'], [b, k]],
              [/crkey/i],
              [
                [c, L + 'cast'],
                [f, M],
                [b, k],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [c, [f, E], [b, k]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [c, [f, q], [b, k]],
              [/(bravia[\w ]+)( bui|\))/i],
              [c, [f, j], [b, k]],
              [/(mitv-\w{5}) bui/i],
              [c, [f, z], [b, k]],
              [/Hbbtv.*(technisat) (.*);/i],
              [f, c, [b, k]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
              [
                [f, W],
                [c, W],
                [b, k],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[b, k]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [f, c, [b, h]],
              [/droid.+; (shield) bui/i],
              [c, [f, 'Nvidia'], [b, h]],
              [/(playstation [345portablevi]+)/i],
              [c, [f, j], [b, h]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [c, [f, A], [b, h]],
              [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
              [c, [f, D], [b, y]],
              [/((pebble))app/i],
              [f, c, [b, y]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [c, [f, S], [b, y]],
              [/droid.+; (glass) \d/i],
              [c, [f, M], [b, y]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [c, [f, R], [b, y]],
              [/(quest( \d| pro)?)/i],
              [c, [f, U], [b, y]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [f, [b, x]],
              [/(aeobc)\b/i],
              [c, [f, E], [b, x]],
              [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
              [c, [b, g]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [c, [b, v]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[b, v]],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [[b, g]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [c, [f, 'Generic']],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [w, [p, 'EdgeHTML']],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [w, [p, 'Blink']],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [p, w],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [w, p],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [p, w],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [p, [w, K, X]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [w, K, X],
                [p, 'Windows'],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [w, /_/g, '.'],
                [p, 'iOS'],
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [p, B],
                [w, /_/g, '.'],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [w, p],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [p, w],
              [/\(bb(10);/i],
              [w, [p, C]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [w, [p, 'Symbian']],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [w, [p, I + ' OS']],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [w, [p, 'webOS']],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [w, [p, 'watchOS']],
              [/crkey\/([\d\.]+)/i],
              [w, [p, L + 'cast']],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[p, H], w],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [p, w],
              [/(sunos) ?([\w\.\d]*)/i],
              [[p, 'Solaris'], w],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [p, w],
            ],
          },
          Q = function (e, i) {
            if ((typeof e === l && ((i = e), (e = r)), !(this instanceof Q))) return new Q(e, i).getResult();
            var t = typeof o !== s && o.navigator ? o.navigator : r,
              n = e || (t && t.userAgent ? t.userAgent : ''),
              h = t && t.userAgentData ? t.userAgentData : r,
              k = i ? G(Y, i) : Y,
              y = t && t.userAgent == n;
            return (
              (this.getBrowser = function () {
                var e,
                  i = {};
                return (
                  (i[p] = r),
                  (i[w] = r),
                  J.call(i, n, k.browser),
                  (i[u] = typeof (e = i[w]) === d ? e.replace(/[^\d\.]/g, '').split('.')[0] : r),
                  y && t && t.brave && typeof t.brave.isBrave == a && (i[p] = 'Brave'),
                  i
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e[m] = r), J.call(e, n, k.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e[f] = r),
                  (e[c] = r),
                  (e[b] = r),
                  J.call(e, n, k.device),
                  y && !e[b] && h && h.mobile && (e[b] = g),
                  y &&
                    'Macintosh' == e[c] &&
                    t &&
                    typeof t.standalone !== s &&
                    t.maxTouchPoints &&
                    t.maxTouchPoints > 2 &&
                    ((e[c] = 'iPad'), (e[b] = v)),
                  e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return (e[p] = r), (e[w] = r), J.call(e, n, k.engine), e;
              }),
              (this.getOS = function () {
                var e = {};
                return (
                  (e[p] = r),
                  (e[w] = r),
                  J.call(e, n, k.os),
                  y &&
                    !e[p] &&
                    h &&
                    h.platform &&
                    'Unknown' != h.platform &&
                    (e[p] = h.platform.replace(/chrome os/i, H).replace(/macos/i, B)),
                  e
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return n;
              }),
              (this.setUA = function (e) {
                return (n = typeof e === d && e.length > 500 ? W(e, 500) : e), this;
              }),
              this.setUA(n),
              this
            );
          };
        (Q.VERSION = '1.0.39'),
          (Q.BROWSER = Z([p, w, u])),
          (Q.CPU = Z([m])),
          (Q.DEVICE = Z([c, f, b, h, g, k, v, y, x])),
          (Q.ENGINE = Q.OS = Z([p, w])),
          typeof i !== s
            ? (e.exports && (i = e.exports = Q), (i.UAParser = Q))
            : t.amdO
              ? r !==
                  (n = function () {
                    return Q;
                  }.call(i, t, i, e)) && (e.exports = n)
              : typeof o !== s && (o.UAParser = Q);
        var ee = typeof o !== s && (o.jQuery || o.Zepto);
        if (ee && !ee.ua) {
          var ei = new Q();
          (ee.ua = ei.getResult()),
            (ee.ua.get = function () {
              return ei.getUA();
            }),
            (ee.ua.set = function (e) {
              ei.setUA(e);
              var i = ei.getResult();
              for (var t in i) ee.ua[t] = i[t];
            });
        }
      })('object' == typeof window ? window : this);
    },
    1259: function (e, i, t) {
      'use strict';
      t.d(i, {
        W: function () {
          return b;
        },
        D: function () {
          return f;
        },
      });
      var n,
        o = t(2265),
        r = t(551),
        a = t(3077);
      let s = '__react-kakao-maps-sdk__',
        l =
          (((n = {})[(n.INITIALIZED = 0)] = 'INITIALIZED'),
          (n[(n.LOADING = 1)] = 'LOADING'),
          (n[(n.SUCCESS = 2)] = 'SUCCESS'),
          (n[(n.FAILURE = 3)] = 'FAILURE'),
          n),
        d = `${s}_Loader`;
      class u {
        static loadEventCallback = new Set();
        callbacks = [];
        done = !1;
        loading = !1;
        errors = [];
        constructor(e) {
          let {
            appkey: i,
            id: t = d,
            libraries: n = [],
            nonce: o,
            retries: r = 3,
            url: a = '//dapi.kakao.com/v2/maps/sdk.js',
          } = e;
          if (
            ((this.id = t),
            (this.appkey = i),
            (this.libraries = n),
            (this.nonce = o),
            (this.retries = r),
            (this.url = a),
            u.instance &&
              !u.equalOptions(this.options, u.instance.options) &&
              !u.equalOptions(this.options, u.instance.options))
          ) {
            if (u.instance.status === l.FAILURE)
              throw Error(`Loader must not be called again with different options. 
${JSON.stringify(this.options, null, 2)}
!==
${JSON.stringify(u.instance.options, null, 2)}`);
            u.instance.reset(), (u.instance = this);
          }
          return u.instance || (u.instance = this), u.instance;
        }
        get options() {
          return {
            appkey: this.appkey,
            id: this.id,
            libraries: this.libraries,
            nonce: this.nonce,
            retries: this.retries,
            url: this.url,
          };
        }
        static addLoadEventLisnter(e) {
          return window.kakao && window.kakao.maps && window.kakao.maps.load(e), u.loadEventCallback.add(e), e;
        }
        static removeLoadEventLisnter(e) {
          return u.loadEventCallback.delete(e);
        }
        load() {
          return new Promise((e, i) => {
            this.loadCallback((t) => {
              t ? i(t) : e(window.kakao);
            });
          });
        }
        get status() {
          return this.onEvent ? l.FAILURE : this.done ? l.SUCCESS : this.loading ? l.LOADING : l.INITIALIZED;
        }
        get failed() {
          return this.done && !this.loading && this.errors.length >= this.retries + 1;
        }
        loadCallback(e) {
          this.callbacks.push(e), this.execute();
        }
        resetIfRetryingFailed() {
          this.failed && this.reset();
        }
        reset() {
          this.deleteScript(), (this.done = !0), (this.loading = !1), (this.errors = []), (this.onEvent = void 0);
        }
        execute() {
          if ((this.resetIfRetryingFailed(), this.done)) this.callback();
          else {
            if (window.kakao && window.kakao.maps) {
              console.warn(
                'Kakao Maps이 이미 외부 요소에 의해 로딩되어 있습니다.설정한 옵션과 일치 하지 않을 수 있으며, 이에 따른 예상치 동작이 발생할 수 있습니다.'
              ),
                window.kakao.maps.load(this.callback);
              return;
            }
            this.loading || ((this.loading = !0), this.setScript());
          }
        }
        setScript() {
          document.getElementById(this.id) && this.callback();
          let e = this.createUrl(),
            i = document.createElement('script');
          (i.id = this.id),
            (i.type = 'text/javascript'),
            (i.src = e),
            (i.onerror = this.loadErrorCallback.bind(this)),
            (i.onload = this.callback.bind(this)),
            (i.defer = !0),
            (i.async = !0),
            this.nonce && (i.nonce = this.nonce),
            document.head.appendChild(i);
        }
        loadErrorCallback(e) {
          if ((this.errors.push(e), this.errors.length <= this.retries)) {
            let e = this.errors.length * 2 ** this.errors.length;
            console.log(`Failed to load Kakao Maps script, retrying in ${e} ms.`),
              setTimeout(() => {
                this.deleteScript(), this.setScript();
              }, e);
          } else
            (this.done = !0),
              (this.loading = !1),
              (this.onEvent = this.errors[this.errors.length - 1]),
              this.callbacks.forEach((e) => {
                e(this.onEvent);
              }),
              (this.callbacks = []),
              u.loadEventCallback.forEach((e) => {
                e(this.onEvent);
              });
        }
        createUrl() {
          let e = this.url;
          return (
            (e += `?appkey=${this.appkey}`),
            this.libraries.length && (e += `&libraries=${this.libraries.join(',')}`),
            (e += '&autoload=false')
          );
        }
        deleteScript() {
          let e = document.getElementById(this.id);
          e && e.remove();
        }
        callback() {
          kakao.maps.load(() => {
            (u.instance.done = !0),
              (u.instance.loading = !1),
              u.instance.callbacks.forEach((e) => {
                e(u.instance.onEvent);
              }),
              (u.instance.callbacks = []),
              u.loadEventCallback.forEach((e) => {
                e(u.instance.onEvent);
              });
          });
        }
        static equalOptions(e, i) {
          if (e.appkey !== i.appkey || e.id !== i.id || e.libraries.length !== i.libraries.length) return !1;
          for (let t = 0; t < e.libraries.length; ++t) if (e.libraries[t] !== i.libraries[t]) return !1;
          return e.nonce === i.nonce && e.retries === i.retries && e.url === i.url;
        }
      }
      var c = t(733),
        p = t(7437);
      let b = o.createContext(void 0),
        f = o.forwardRef(function (e, i) {
          let {
              id: t,
              as: n,
              children: l,
              center: d,
              isPanto: f = !1,
              padding: w = 32,
              disableDoubleClick: m,
              disableDoubleClickZoom: h,
              draggable: g,
              zoomable: v,
              keyboardShortcuts: k,
              level: y,
              maxLevel: x,
              minLevel: E,
              mapTypeId: S,
              projectionId: _,
              scrollwheel: C,
              tileAnimation: T,
              onBoundsChanged: L,
              onCenterChanged: I,
              onClick: M,
              onDoubleClick: O,
              onDrag: A,
              onDragEnd: P,
              onDragStart: N,
              onIdle: D,
              onMaptypeidChanged: q,
              onMouseMove: j,
              onRightClick: z,
              onTileLoaded: R,
              onZoomChanged: U,
              onZoomStart: H,
              onCreate: B,
              ...F
            } = e,
            [G, Z] = (0, o.useState)(!1),
            [$, V] = (0, o.useState)(),
            W = (0, o.useRef)(null);
          return (
            (0, r.L)(() => {
              let e = u.addLoadEventLisnter((e) => Z(!e));
              return () => {
                u.removeLoadEventLisnter(e);
              };
            }, []),
            (0, r.L)(() => {
              if (!G) return;
              let e = W.current;
              if (!e) return;
              let i = 'lat' in d ? new kakao.maps.LatLng(d.lat, d.lng) : new kakao.maps.Coords(d.x, d.y);
              return (
                V(
                  new kakao.maps.Map(e, {
                    center: i,
                    disableDoubleClick: m,
                    disableDoubleClickZoom: h,
                    draggable: g,
                    keyboardShortcuts: k,
                    level: y,
                    mapTypeId: 'string' == typeof S ? kakao.maps.MapTypeId[S] : S,
                    projectionId: _,
                    scrollwheel: C,
                    tileAnimation: T,
                  })
                ),
                () => {
                  e.innerHTML = '';
                }
              );
            }, [G, m, h, T]),
            (0, o.useImperativeHandle)(i, () => $, [$]),
            (0, r.L)(() => {
              $ && B && B($);
            }, [$, B]),
            (0, r.L)(() => {
              if (!$) return;
              let e = $.getCenter();
              e instanceof kakao.maps.Coords && (e = e.toLatLng());
              let i = 'lat' in d ? new kakao.maps.LatLng(d.lat, d.lng) : new kakao.maps.Coords(d.x, d.y);
              (i instanceof kakao.maps.LatLng && i.equals(e)) ||
                (i instanceof kakao.maps.Coords && i.toLatLng().equals(e)) ||
                (f ? $.panTo(i, w) : $.setCenter(i));
            }, [$, d.lat, d.lng, d.x, d.y]),
            (0, c.D)($, 'setDraggable', g),
            (0, c.D)($, 'setZoomable', v),
            (0, c.D)($, 'setKeyboardShortcuts', k),
            (0, c.D)($, 'setLevel', y),
            (0, c.D)($, 'setMapTypeId', G ? ('string' == typeof S ? kakao.maps.MapTypeId[S] : S) : void 0),
            (0, c.D)($, 'setProjectionId', _),
            (0, c.D)($, 'setMinLevel', x),
            (0, c.D)($, 'setMaxLevel', E),
            (0, a.T)($, 'bounds_changed', L),
            (0, a.T)($, 'center_changed', I),
            (0, a.T)($, 'click', M),
            (0, a.T)($, 'dblclick', O),
            (0, a.T)($, 'drag', A),
            (0, a.T)($, 'dragstart', N),
            (0, a.T)($, 'dragend', P),
            (0, a.T)($, 'idle', D),
            (0, a.T)($, 'maptypeid_changed', q),
            (0, a.T)($, 'mousemove', j),
            (0, a.T)($, 'rightclick', z),
            (0, a.T)($, 'tilesloaded', R),
            (0, a.T)($, 'zoom_changed', U),
            (0, a.T)($, 'zoom_start', H),
            (0, p.jsxs)(p.Fragment, {
              children: [
                (0, p.jsx)(n || 'div', { id: t || `${s}_Map`, ...F, ref: W }),
                $ && (0, p.jsx)(b.Provider, { value: $, children: l }),
              ],
            })
          );
        });
    },
    1643: function (e, i, t) {
      'use strict';
      t.d(i, {
        O: function () {
          return p;
        },
      });
      var n = t(2265),
        o = t(1519),
        r = t(3077),
        a = t(4887),
        s = t(733);
      let l = n.forwardRef(function (e, i) {
        let {
            map: t,
            position: o,
            marker: r,
            children: l,
            altitude: d,
            disableAutoPan: u,
            range: c,
            removable: p,
            zIndex: b,
            onCreate: f,
          } = e,
          w = (0, n.useMemo)(() => {
            let e = document.createElement('div');
            return (
              (e.style.display = 'none'),
              new kakao.maps.InfoWindow({
                altitude: d,
                disableAutoPan: u,
                range: c,
                removable: p,
                zIndex: b,
                content: e,
                position: o,
              })
            );
          }, [u, p]),
          m = (0, n.useMemo)(() => w.getContent(), [w]);
        return (
          (0, n.useImperativeHandle)(i, () => w, [w]),
          (0, n.useLayoutEffect)(
            () => (
              w.open(t, r),
              () => {
                w.close();
              }
            ),
            [t, r]
          ),
          (0, n.useLayoutEffect)(() => {
            f && f(w);
          }, [w, f]),
          (0, s.D)(w, 'setPosition', o),
          (0, s.D)(w, 'setAltitude', d),
          (0, s.D)(w, 'setRange', c),
          (0, s.D)(w, 'setZIndex', b),
          a.createPortal(l, m.parentElement ?? m)
        );
      });
      var d = t(7437);
      let u = n.createContext(void 0),
        c = n.forwardRef(function (e, i) {
          let {
              map: t,
              position: o,
              children: a,
              altitude: c,
              clickable: p,
              draggable: b,
              image: f,
              infoWindowOptions: w,
              onCreate: m,
              onClick: h,
              onDragEnd: g,
              onDragStart: v,
              onMouseOut: k,
              onMouseOver: y,
              opacity: x,
              range: E,
              title: S,
              zIndex: _,
            } = e,
            C = (0, n.useContext)(u),
            T = (0, n.useMemo)(
              () =>
                f &&
                new kakao.maps.MarkerImage(f.src, new kakao.maps.Size(f.size.width, f.size.height), {
                  alt: f.options?.alt,
                  coords: f.options?.coords,
                  offset: f.options?.offset && new kakao.maps.Point(f.options?.offset.x, f.options?.offset.y),
                  shape: f.options?.shape,
                  spriteOrigin:
                    f.options?.spriteOrigin &&
                    new kakao.maps.Point(f.options?.spriteOrigin.x, f.options?.spriteOrigin.y),
                  spriteSize:
                    f.options?.spriteSize &&
                    new kakao.maps.Size(f.options?.spriteSize.width, f.options?.spriteSize.height),
                }),
              [JSON.stringify(f)]
            ),
            L = (0, n.useMemo)(
              () =>
                new kakao.maps.Marker({
                  altitude: c,
                  clickable: p,
                  draggable: b,
                  image: T,
                  opacity: x,
                  range: E,
                  title: S,
                  zIndex: _,
                  position: o,
                }),
              []
            );
          return ((0, n.useImperativeHandle)(i, () => L, [L]),
          (0, n.useLayoutEffect)(
            () => (C ? (C.addMarker(L, !0), () => C.removeMarker(L, !0)) : (L.setMap(t), () => L.setMap(null))),
            [t, C, L]
          ),
          (0, n.useLayoutEffect)(() => {
            m && m(L);
          }, [L, m]),
          (0, s.D)(L, 'setPosition', o),
          (0, s.D)(L, 'setImage', T),
          (0, s.D)(L, 'setAltitude', c),
          (0, s.D)(L, 'setClickable', p),
          (0, s.D)(L, 'setDraggable', b),
          (0, s.D)(L, 'setOpacity', x),
          (0, s.D)(L, 'setRange', E),
          (0, s.D)(L, 'setRange', E),
          (0, s.D)(L, 'setTitle', S),
          (0, s.D)(L, 'setTitle', S),
          (0, s.D)(L, 'setZIndex', _),
          (0, r.T)(L, 'click', h),
          (0, r.T)(L, 'dragstart', v),
          (0, r.T)(L, 'dragend', g),
          (0, r.T)(L, 'mouseout', k),
          (0, r.T)(L, 'mouseover', y),
          a)
            ? (0, d.jsx)(l, {
                position: o,
                map: t,
                marker: L,
                altitude: w?.altitude,
                disableAutoPan: w?.disableAutoPan,
                range: w?.range,
                removable: w?.removable,
                zIndex: w?.zIndex,
                children: a,
              })
            : null;
        }),
        p = n.forwardRef(function (e, i) {
          let { position: t, ...r } = e,
            a = (0, o.S)('MapMarker'),
            s = (0, n.useMemo)(
              () => ('lat' in t ? new kakao.maps.LatLng(t.lat, t.lng) : new kakao.maps.Coords(t.x, t.y).toLatLng()),
              [t.lat, t.lng, t.x, t.y]
            );
          return (0, d.jsx)(c, { map: a, position: s, ...r, ref: i });
        });
    },
    1304: function (e, i, t) {
      'use strict';
      t.d(i, {
        R: function () {
          return r;
        },
      });
      var n = t(2265),
        o = t(1519);
      let r = n.forwardRef(function (e, i) {
        let { position: t = kakao.maps.ControlPosition.TOPRIGHT } = e,
          r = (0, o.S)('MapTypeControl'),
          a = 'string' == typeof t ? kakao.maps.ControlPosition[t] : t,
          s = (0, n.useMemo)(() => new kakao.maps.MapTypeControl(), []);
        return (
          (0, n.useImperativeHandle)(i, () => s, [s]),
          (0, n.useLayoutEffect)(
            () => (
              r.addControl(s, a),
              () => {
                r.removeControl(a);
              }
            ),
            [r, s, a]
          ),
          null
        );
      });
    },
    3293: function (e, i, t) {
      'use strict';
      t.d(i, {
        L: function () {
          return r;
        },
      });
      var n = t(2265),
        o = t(1519);
      let r = n.forwardRef(function (e, i) {
        let { position: t = kakao.maps.ControlPosition.RIGHT } = e,
          r = (0, o.S)('ZoomControl'),
          a = 'string' == typeof t ? kakao.maps.ControlPosition[t] : t,
          s = (0, n.useMemo)(() => new kakao.maps.ZoomControl(), []);
        return (
          (0, n.useImperativeHandle)(i, () => s, [s]),
          (0, n.useLayoutEffect)(
            () => (
              r.addControl(s, a),
              () => {
                r.removeControl(s);
              }
            ),
            [r, a, s]
          ),
          null
        );
      });
    },
    551: function (e, i, t) {
      'use strict';
      t.d(i, {
        L: function () {
          return o;
        },
      });
      var n = t(2265);
      let o = 'undefined' != typeof window && 'undefined' != typeof document ? n.useLayoutEffect : n.useEffect;
    },
    3077: function (e, i, t) {
      'use strict';
      t.d(i, {
        T: function () {
          return o;
        },
      });
      var n = t(551);
      let o = (e, i, t) => {
        (0, n.L)(() => {
          if (!e || !t) return;
          let n = function () {
            for (var i = arguments.length, n = Array(i), o = 0; o < i; o++) n[o] = arguments[o];
            return void 0 === n ? t(e) : t(e, ...n);
          };
          return (
            kakao.maps.event.addListener(e, i, n),
            () => {
              kakao.maps.event.removeListener(e, i, n);
            }
          );
        }, [e, i, t]);
      };
    },
    733: function (e, i, t) {
      'use strict';
      t.d(i, {
        D: function () {
          return o;
        },
      });
      var n = t(551);
      let o = function (e, i) {
        for (var t = arguments.length, o = Array(t > 2 ? t - 2 : 0), r = 2; r < t; r++) o[r - 2] = arguments[r];
        (0, n.L)(() => {
          !e || o.every((e) => void 0 === e) || e[i].call(e, ...o);
        }, [e, i, ...o]);
      };
    },
    1519: function (e, i, t) {
      'use strict';
      t.d(i, {
        S: function () {
          return r;
        },
      });
      var n = t(2265),
        o = t(1259);
      let r = (e) => {
        let i = (0, n.useContext)(o.W);
        if (!i) throw Error(`${e ? e + ' Component' : 'useMap'} must exist inside Map Component!`);
        return i;
      };
    },
  },
]);
