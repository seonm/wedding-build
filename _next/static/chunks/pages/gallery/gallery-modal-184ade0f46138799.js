(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [939],
  {
    1022: function (a, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/gallery/gallery-modal',
        function () {
          return i(3541);
        },
      ]);
    },
    3541: function (a, t, i) {
      'use strict';
      i.r(t),
        i.d(t, {
          default: function () {
            return c;
          },
        });
      var s = i(5893),
        r = i(2261);
      i(5299), i(3598), i(2275), i(5083), i(1786);
      var g = i(4135);
      let e = [
        { src: '/img/003-1.jpg', alt: 'image', sort: 0 },
        { src: '/img/001-1.jpg', alt: 'image', sort: 1 },
        { src: '/img/001.jpg', alt: 'image', sort: 2 },
        { src: '/img/002-1.png', alt: 'image', sort: 3 },
        { src: '/img/005.jpg', alt: 'image', sort: 4 },
        { src: '/img/005-1.jpg', alt: 'image', sort: 5 },
        { src: '/img/004.jpg', alt: 'image', sort: 6 },
        { src: '/img/004-1.jpg', alt: 'image', sort: 7 },
        { src: '/img/006.jpg', alt: 'image', sort: 8 },
        { src: '/img/006-1.jpg', alt: 'image', sort: 9 },
        { src: '/img/007-1.jpg', alt: 'image', sort: 10 },
        { src: '/img/008.jpg', alt: 'image', sort: 11 },
        { src: '/img/008-1.jpg', alt: 'image', sort: 12 },
        { src: '/img/010.jpg', alt: 'image', sort: 13 },
      ];
      function c(a) {
        let { initNum: t = 0 } = a;
        return (0, s.jsx)(r.tq, {
          spaceBetween: 30,
          effect: 'fade',
          navigation: !0,
          pagination: { clickable: !0 },
          modules: [g.xW, g.W_, g.tl],
          className: 'swiper-gallery h-screen',
          initialSlide: t,
          children: e.map((a, t) =>
            (0, s.jsx)(
              r.o5,
              {
                className: 'bg-black',
                children: (0, s.jsx)('img', { src: a.src, className: 'w-auto object-contain' }),
              },
              a.src
            )
          ),
        });
      }
    },
    1786: function () {},
  },
  function (a) {
    a.O(0, [899, 888, 774, 179], function () {
      return a((a.s = 1022));
    }),
      (_N_E = a.O());
  },
]);
