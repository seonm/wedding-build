(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [969, 158],
  {
    5635: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/splash/splash-view',
        function () {
          return n(4214);
        },
      ]);
    },
    2573: function (t, e, n) {
      'use strict';
      n.d(e, {
        Z: function () {
          return u;
        },
      });
      var a = n(5893),
        c = n(7624),
        s = n.n(c),
        i = n(9677),
        r = n.n(i);
      let l = {
          xs: 'text-xs font-light',
          'xs-b': 'text-xs',
          md: 'text-base font-light',
          'md-b': 'text-base',
          lg: 'text-2xl',
          xl: 'text-4xl',
        },
        o = { left: 'text-left', right: 'text-right', center: 'text-center' };
      function u(t) {
        let { children: e, size: n = 'md', color: c = 'text-black', font: i, align: u = 'left', className: x } = t;
        return (0, a.jsx)('div', {
          className: ''
            .concat(l[n], ' ')
            .concat(c, ' ')
            .concat('abril' === i ? r().className : '', ' ')
            .concat('italiana' === i ? s().className : '', ' ')
            .concat(u ? o[u] : '', ' break-keep ')
            .concat(x),
          children: e,
        });
      }
    },
    4214: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, {
          default: function () {
            return r;
          },
        });
      var a = n(5893),
        c = n(7294),
        s = n(9332),
        i = n(2573);
      function r() {
        let t = (0, s.useRouter)(),
          [e, n] = (0, c.useState)(!1),
          [r, l] = (0, c.useState)(''),
          o = 'We are\ngetting\nmarried',
          [u, x] = (0, c.useState)(0),
          [f, h] = (0, c.useState)(''),
          d = 'by.mi',
          [g, m] = (0, c.useState)(0),
          [p, b] = (0, c.useState)(!1);
        return (
          (0, c.useEffect)(() => {
            let t = setInterval(() => {
              u < o.length ? (l((t) => t + o[u]), x((t) => t + 1)) : p || (b(!0), clearInterval(t));
            }, 100);
            return () => clearInterval(t);
          }, [u, o, p]),
          (0, c.useEffect)(() => {
            if (p) {
              let e = setInterval(() => {
                g < d.length
                  ? (h((t) => t + d[g]), m((t) => t + 1))
                  : (clearInterval(e),
                    setTimeout(() => {
                      n(!0),
                        setTimeout(() => {
                          t.push('/main');
                        }, 500);
                    }, 800));
              }, 200);
              return () => clearInterval(e);
            }
          }, [p, g, d, t]),
          (0, a.jsx)('div', {
            className: 'h-screen bg-cover bg-center',
            style: { backgroundImage: 'url('.concat('/img/splash.png', ')') },
            children: (0, a.jsxs)('div', {
              className: 'flex h-screen flex-col items-center justify-center gap-12 text-center',
              children: [
                (0, a.jsx)(i.Z, {
                  size: 'xl',
                  font: 'italiana',
                  color: 'text-white',
                  align: 'center',
                  className: 'tracking-tight transition-opacity duration-1000 '.concat(e ? 'opacity-0' : 'opacity-100'),
                  children: r
                    .split('\n')
                    .map((t, e) => (0, a.jsxs)('span', { children: [t, (0, a.jsx)('br', {})] }, e)),
                }),
                (0, a.jsxs)(i.Z, {
                  size: 'md',
                  font: 'italiana',
                  color: 'text-white',
                  align: 'center',
                  className: 'tracking-tight transition-opacity duration-1000 '.concat(e ? 'opacity-0' : 'opacity-100'),
                  children: [f, ' '],
                }),
              ],
            }),
          })
        );
      }
    },
  },
  function (t) {
    t.O(0, [693, 888, 774, 179], function () {
      return t((t.s = 5635));
    }),
      (_N_E = t.O());
  },
]);
