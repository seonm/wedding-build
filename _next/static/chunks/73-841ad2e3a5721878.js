(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [73],
  {
    8443: function () {},
    4885: function () {},
    7322: function () {},
    3034: function () {},
    5540: function (e, t, i) {
      'use strict';
      i.d(t, {
        xW: function () {
          return o;
        },
        W_: function () {
          return a;
        },
        tl: function () {
          return n;
        },
      }),
        i(3711);
      var s = i(9007);
      function r(e, t, i, r) {
        return (
          e.params.createElements &&
            Object.keys(r).forEach((a) => {
              if (!i[a] && !0 === i.auto) {
                let l = (0, s.e)(e.el, `.${r[a]}`)[0];
                l || (((l = (0, s.c)('div', r[a])).className = r[a]), e.el.append(l)), (i[a] = l), (t[a] = l);
              }
            }),
          i
        );
      }
      function a(e) {
        let { swiper: t, extendParams: i, on: a, emit: l } = e;
        function n(e) {
          let i;
          return e && 'string' == typeof e && t.isElement && (i = t.el.querySelector(e) || t.hostEl.querySelector(e))
            ? i
            : (e &&
                  ('string' == typeof e && (i = [...document.querySelectorAll(e)]),
                  t.params.uniqueNavElements &&
                  'string' == typeof e &&
                  i &&
                  i.length > 1 &&
                  1 === t.el.querySelectorAll(e).length
                    ? (i = t.el.querySelector(e))
                    : i && 1 === i.length && (i = i[0])),
                e && !i)
              ? e
              : i;
        }
        function o(e, i) {
          let r = t.params.navigation;
          (e = (0, s.m)(e)).forEach((e) => {
            e &&
              (e.classList[i ? 'add' : 'remove'](...r.disabledClass.split(' ')),
              'BUTTON' === e.tagName && (e.disabled = i),
              t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? 'add' : 'remove'](r.lockClass));
          });
        }
        function d() {
          let { nextEl: e, prevEl: i } = t.navigation;
          if (t.params.loop) {
            o(i, !1), o(e, !1);
            return;
          }
          o(i, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind);
        }
        function c(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), l('navigationPrev'));
        }
        function p(e) {
          e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), l('navigationNext'));
        }
        function u() {
          let e = t.params.navigation;
          if (
            ((t.params.navigation = r(t, t.originalParams.navigation, t.params.navigation, {
              nextEl: 'swiper-button-next',
              prevEl: 'swiper-button-prev',
            })),
            !(e.nextEl || e.prevEl))
          )
            return;
          let i = n(e.nextEl),
            a = n(e.prevEl);
          Object.assign(t.navigation, { nextEl: i, prevEl: a }), (i = (0, s.m)(i)), (a = (0, s.m)(a));
          let l = (i, s) => {
            i && i.addEventListener('click', 'next' === s ? p : c),
              !t.enabled && i && i.classList.add(...e.lockClass.split(' '));
          };
          i.forEach((e) => l(e, 'next')), a.forEach((e) => l(e, 'prev'));
        }
        function h() {
          let { nextEl: e, prevEl: i } = t.navigation;
          (e = (0, s.m)(e)), (i = (0, s.m)(i));
          let r = (e, i) => {
            e.removeEventListener('click', 'next' === i ? p : c),
              e.classList.remove(...t.params.navigation.disabledClass.split(' '));
          };
          e.forEach((e) => r(e, 'next')), i.forEach((e) => r(e, 'prev'));
        }
        i({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock',
            navigationDisabledClass: 'swiper-navigation-disabled',
          },
        }),
          (t.navigation = { nextEl: null, prevEl: null }),
          a('init', () => {
            !1 === t.params.navigation.enabled ? f() : (u(), d());
          }),
          a('toEdge fromEdge lock unlock', () => {
            d();
          }),
          a('destroy', () => {
            h();
          }),
          a('enable disable', () => {
            let { nextEl: e, prevEl: i } = t.navigation;
            if (((e = (0, s.m)(e)), (i = (0, s.m)(i)), t.enabled)) {
              d();
              return;
            }
            [...e, ...i].filter((e) => !!e).forEach((e) => e.classList.add(t.params.navigation.lockClass));
          }),
          a('click', (e, i) => {
            let { nextEl: r, prevEl: a } = t.navigation;
            (r = (0, s.m)(r)), (a = (0, s.m)(a));
            let n = i.target,
              o = a.includes(n) || r.includes(n);
            if (t.isElement && !o) {
              let e = i.path || (i.composedPath && i.composedPath());
              e && (o = e.find((e) => r.includes(e) || a.includes(e)));
            }
            if (t.params.navigation.hideOnClick && !o) {
              let e;
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === n || t.pagination.el.contains(n))
              )
                return;
              r.length
                ? (e = r[0].classList.contains(t.params.navigation.hiddenClass))
                : a.length && (e = a[0].classList.contains(t.params.navigation.hiddenClass)),
                !0 === e ? l('navigationShow') : l('navigationHide'),
                [...r, ...a].filter((e) => !!e).forEach((e) => e.classList.toggle(t.params.navigation.hiddenClass));
            }
          });
        let f = () => {
          t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(' ')), h();
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(' ')), u(), d();
          },
          disable: f,
          update: d,
          init: u,
          destroy: h,
        });
      }
      function l(e) {
        return (
          void 0 === e && (e = ''),
          `.${e
            .trim()
            .replace(/([\.:!+\/])/g, '\\$1')
            .replace(/ /g, '.')}`
        );
      }
      function n(e) {
        let t,
          { swiper: i, extendParams: a, on: n, emit: o } = e,
          d = 'swiper-pagination';
        a({
          pagination: {
            el: null,
            bulletElement: 'span',
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: 'bullets',
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${d}-bullet`,
            bulletActiveClass: `${d}-bullet-active`,
            modifierClass: `${d}-`,
            currentClass: `${d}-current`,
            totalClass: `${d}-total`,
            hiddenClass: `${d}-hidden`,
            progressbarFillClass: `${d}-progressbar-fill`,
            progressbarOppositeClass: `${d}-progressbar-opposite`,
            clickableClass: `${d}-clickable`,
            lockClass: `${d}-lock`,
            horizontalClass: `${d}-horizontal`,
            verticalClass: `${d}-vertical`,
            paginationDisabledClass: `${d}-disabled`,
          },
        }),
          (i.pagination = { el: null, bullets: [] });
        let c = 0;
        function p() {
          return (
            !i.params.pagination.el ||
            !i.pagination.el ||
            (Array.isArray(i.pagination.el) && 0 === i.pagination.el.length)
          );
        }
        function u(e, t) {
          let { bulletActiveClass: s } = i.params.pagination;
          e &&
            (e = e[`${'prev' === t ? 'previous' : 'next'}ElementSibling`]) &&
            (e.classList.add(`${s}-${t}`),
            (e = e[`${'prev' === t ? 'previous' : 'next'}ElementSibling`]) && e.classList.add(`${s}-${t}-${t}`));
        }
        function h(e) {
          let t = e.target.closest(l(i.params.pagination.bulletClass));
          if (!t) return;
          e.preventDefault();
          let r = (0, s.h)(t) * i.params.slidesPerGroup;
          if (i.params.loop) {
            var a, n, o;
            if (i.realIndex === r) return;
            let e =
              ((a = i.realIndex),
              (n = r),
              ((a %= o = i.slides.length), (n %= o) === a + 1) ? 'next' : n === a - 1 ? 'previous' : void 0);
            'next' === e ? i.slideNext() : 'previous' === e ? i.slidePrev() : i.slideToLoop(r);
          } else i.slideTo(r);
        }
        function f() {
          let e, r;
          let a = i.rtl,
            n = i.params.pagination;
          if (p()) return;
          let d = i.pagination.el;
          d = (0, s.m)(d);
          let h = i.virtual && i.params.virtual.enabled ? i.virtual.slides.length : i.slides.length,
            f = i.params.loop ? Math.ceil(h / i.params.slidesPerGroup) : i.snapGrid.length;
          if (
            (i.params.loop
              ? ((r = i.previousRealIndex || 0),
                (e = i.params.slidesPerGroup > 1 ? Math.floor(i.realIndex / i.params.slidesPerGroup) : i.realIndex))
              : void 0 !== i.snapIndex
                ? ((e = i.snapIndex), (r = i.previousSnapIndex))
                : ((r = i.previousIndex || 0), (e = i.activeIndex || 0)),
            'bullets' === n.type && i.pagination.bullets && i.pagination.bullets.length > 0)
          ) {
            let l, o, p;
            let h = i.pagination.bullets;
            if (
              (n.dynamicBullets &&
                ((t = (0, s.f)(h[0], i.isHorizontal() ? 'width' : 'height', !0)),
                d.forEach((e) => {
                  e.style[i.isHorizontal() ? 'width' : 'height'] = `${t * (n.dynamicMainBullets + 4)}px`;
                }),
                n.dynamicMainBullets > 1 &&
                  void 0 !== r &&
                  ((c += e - (r || 0)) > n.dynamicMainBullets - 1 ? (c = n.dynamicMainBullets - 1) : c < 0 && (c = 0)),
                (p = ((o = (l = Math.max(e - c, 0)) + (Math.min(h.length, n.dynamicMainBullets) - 1)) + l) / 2)),
              h.forEach((e) => {
                let t = [
                  ...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(
                    (e) => `${n.bulletActiveClass}${e}`
                  ),
                ]
                  .map((e) => ('string' == typeof e && e.includes(' ') ? e.split(' ') : e))
                  .flat();
                e.classList.remove(...t);
              }),
              d.length > 1)
            )
              h.forEach((t) => {
                let r = (0, s.h)(t);
                r === e
                  ? t.classList.add(...n.bulletActiveClass.split(' '))
                  : i.isElement && t.setAttribute('part', 'bullet'),
                  n.dynamicBullets &&
                    (r >= l && r <= o && t.classList.add(...`${n.bulletActiveClass}-main`.split(' ')),
                    r === l && u(t, 'prev'),
                    r === o && u(t, 'next'));
              });
            else {
              let t = h[e];
              if (
                (t && t.classList.add(...n.bulletActiveClass.split(' ')),
                i.isElement &&
                  h.forEach((t, i) => {
                    t.setAttribute('part', i === e ? 'bullet-active' : 'bullet');
                  }),
                n.dynamicBullets)
              ) {
                let e = h[l],
                  t = h[o];
                for (let e = l; e <= o; e += 1) h[e] && h[e].classList.add(...`${n.bulletActiveClass}-main`.split(' '));
                u(e, 'prev'), u(t, 'next');
              }
            }
            if (n.dynamicBullets) {
              let e = Math.min(h.length, n.dynamicMainBullets + 4),
                s = (t * e - t) / 2 - p * t,
                r = a ? 'right' : 'left';
              h.forEach((e) => {
                e.style[i.isHorizontal() ? r : 'top'] = `${s}px`;
              });
            }
          }
          d.forEach((t, s) => {
            if (
              ('fraction' === n.type &&
                (t.querySelectorAll(l(n.currentClass)).forEach((t) => {
                  t.textContent = n.formatFractionCurrent(e + 1);
                }),
                t.querySelectorAll(l(n.totalClass)).forEach((e) => {
                  e.textContent = n.formatFractionTotal(f);
                })),
              'progressbar' === n.type)
            ) {
              let s;
              s = n.progressbarOpposite
                ? i.isHorizontal()
                  ? 'vertical'
                  : 'horizontal'
                : i.isHorizontal()
                  ? 'horizontal'
                  : 'vertical';
              let r = (e + 1) / f,
                a = 1,
                o = 1;
              'horizontal' === s ? (a = r) : (o = r),
                t.querySelectorAll(l(n.progressbarFillClass)).forEach((e) => {
                  (e.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${o})`),
                    (e.style.transitionDuration = `${i.params.speed}ms`);
                });
            }
            'custom' === n.type && n.renderCustom
              ? ((t.innerHTML = n.renderCustom(i, e + 1, f)), 0 === s && o('paginationRender', t))
              : (0 === s && o('paginationRender', t), o('paginationUpdate', t)),
              i.params.watchOverflow && i.enabled && t.classList[i.isLocked ? 'add' : 'remove'](n.lockClass);
          });
        }
        function m() {
          let e = i.params.pagination;
          if (p()) return;
          let t =
              i.virtual && i.params.virtual.enabled
                ? i.virtual.slides.length
                : i.grid && i.params.grid.rows > 1
                  ? i.slides.length / Math.ceil(i.params.grid.rows)
                  : i.slides.length,
            r = i.pagination.el;
          r = (0, s.m)(r);
          let a = '';
          if ('bullets' === e.type) {
            let s = i.params.loop ? Math.ceil(t / i.params.slidesPerGroup) : i.snapGrid.length;
            i.params.freeMode && i.params.freeMode.enabled && s > t && (s = t);
            for (let t = 0; t < s; t += 1)
              e.renderBullet
                ? (a += e.renderBullet.call(i, t, e.bulletClass))
                : (a += `<${e.bulletElement} ${i.isElement ? 'part="bullet"' : ''} class="${e.bulletClass}"></${e.bulletElement}>`);
          }
          'fraction' === e.type &&
            (a = e.renderFraction
              ? e.renderFraction.call(i, e.currentClass, e.totalClass)
              : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            'progressbar' === e.type &&
              (a = e.renderProgressbar
                ? e.renderProgressbar.call(i, e.progressbarFillClass)
                : `<span class="${e.progressbarFillClass}"></span>`),
            (i.pagination.bullets = []),
            r.forEach((t) => {
              'custom' !== e.type && (t.innerHTML = a || ''),
                'bullets' === e.type && i.pagination.bullets.push(...t.querySelectorAll(l(e.bulletClass)));
            }),
            'custom' !== e.type && o('paginationRender', r[0]);
        }
        function g() {
          let e;
          i.params.pagination = r(i, i.originalParams.pagination, i.params.pagination, { el: 'swiper-pagination' });
          let t = i.params.pagination;
          t.el &&
            ('string' == typeof t.el && i.isElement && (e = i.el.querySelector(t.el)),
            e || 'string' != typeof t.el || (e = [...document.querySelectorAll(t.el)]),
            e || (e = t.el),
            e &&
              0 !== e.length &&
              (i.params.uniqueNavElements &&
                'string' == typeof t.el &&
                Array.isArray(e) &&
                e.length > 1 &&
                (e = [...i.el.querySelectorAll(t.el)]).length > 1 &&
                (e = e.filter((e) => (0, s.a)(e, '.swiper')[0] === i.el)[0]),
              Array.isArray(e) && 1 === e.length && (e = e[0]),
              Object.assign(i.pagination, { el: e }),
              (e = (0, s.m)(e)).forEach((e) => {
                'bullets' === t.type && t.clickable && e.classList.add(...(t.clickableClass || '').split(' ')),
                  e.classList.add(t.modifierClass + t.type),
                  e.classList.add(i.isHorizontal() ? t.horizontalClass : t.verticalClass),
                  'bullets' === t.type &&
                    t.dynamicBullets &&
                    (e.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                    (c = 0),
                    t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                  'progressbar' === t.type && t.progressbarOpposite && e.classList.add(t.progressbarOppositeClass),
                  t.clickable && e.addEventListener('click', h),
                  i.enabled || e.classList.add(t.lockClass);
              })));
        }
        function v() {
          let e = i.params.pagination;
          if (p()) return;
          let t = i.pagination.el;
          t &&
            (t = (0, s.m)(t)).forEach((t) => {
              t.classList.remove(e.hiddenClass),
                t.classList.remove(e.modifierClass + e.type),
                t.classList.remove(i.isHorizontal() ? e.horizontalClass : e.verticalClass),
                e.clickable &&
                  (t.classList.remove(...(e.clickableClass || '').split(' ')), t.removeEventListener('click', h));
            }),
            i.pagination.bullets &&
              i.pagination.bullets.forEach((t) => t.classList.remove(...e.bulletActiveClass.split(' ')));
        }
        n('changeDirection', () => {
          if (!i.pagination || !i.pagination.el) return;
          let e = i.params.pagination,
            { el: t } = i.pagination;
          (t = (0, s.m)(t)).forEach((t) => {
            t.classList.remove(e.horizontalClass, e.verticalClass),
              t.classList.add(i.isHorizontal() ? e.horizontalClass : e.verticalClass);
          });
        }),
          n('init', () => {
            !1 === i.params.pagination.enabled ? w() : (g(), m(), f());
          }),
          n('activeIndexChange', () => {
            void 0 === i.snapIndex && f();
          }),
          n('snapIndexChange', () => {
            f();
          }),
          n('snapGridLengthChange', () => {
            m(), f();
          }),
          n('destroy', () => {
            v();
          }),
          n('enable disable', () => {
            let { el: e } = i.pagination;
            e &&
              (e = (0, s.m)(e)).forEach((e) =>
                e.classList[i.enabled ? 'remove' : 'add'](i.params.pagination.lockClass)
              );
          }),
          n('lock unlock', () => {
            f();
          }),
          n('click', (e, t) => {
            let r = t.target,
              a = (0, s.m)(i.pagination.el);
            if (
              i.params.pagination.el &&
              i.params.pagination.hideOnClick &&
              a &&
              a.length > 0 &&
              !r.classList.contains(i.params.pagination.bulletClass)
            ) {
              if (
                i.navigation &&
                ((i.navigation.nextEl && r === i.navigation.nextEl) ||
                  (i.navigation.prevEl && r === i.navigation.prevEl))
              )
                return;
              !0 === a[0].classList.contains(i.params.pagination.hiddenClass)
                ? o('paginationShow')
                : o('paginationHide'),
                a.forEach((e) => e.classList.toggle(i.params.pagination.hiddenClass));
            }
          });
        let w = () => {
          i.el.classList.add(i.params.pagination.paginationDisabledClass);
          let { el: e } = i.pagination;
          e && (e = (0, s.m)(e)).forEach((e) => e.classList.add(i.params.pagination.paginationDisabledClass)), v();
        };
        Object.assign(i.pagination, {
          enable: () => {
            i.el.classList.remove(i.params.pagination.paginationDisabledClass);
            let { el: e } = i.pagination;
            e && (e = (0, s.m)(e)).forEach((e) => e.classList.remove(i.params.pagination.paginationDisabledClass)),
              g(),
              m(),
              f();
          },
          disable: w,
          render: m,
          update: f,
          init: g,
          destroy: v,
        });
      }
      function o(e) {
        let { swiper: t, extendParams: i, on: r } = e;
        i({ fadeEffect: { crossFade: !1 } }),
          (function (e) {
            let t;
            let {
              effect: i,
              swiper: s,
              on: r,
              setTranslate: a,
              setTransition: l,
              overwriteParams: n,
              perspective: o,
              recreateShadows: d,
              getEffectParams: c,
            } = e;
            r('beforeInit', () => {
              if (s.params.effect !== i) return;
              s.classNames.push(`${s.params.containerModifierClass}${i}`),
                o && o() && s.classNames.push(`${s.params.containerModifierClass}3d`);
              let e = n ? n() : {};
              Object.assign(s.params, e), Object.assign(s.originalParams, e);
            }),
              r('setTranslate', () => {
                s.params.effect === i && a();
              }),
              r('setTransition', (e, t) => {
                s.params.effect === i && l(t);
              }),
              r('transitionEnd', () => {
                s.params.effect === i &&
                  d &&
                  c &&
                  c().slideShadows &&
                  (s.slides.forEach((e) => {
                    e.querySelectorAll(
                      '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
                    ).forEach((e) => e.remove());
                  }),
                  d());
              }),
              r('virtualUpdate', () => {
                s.params.effect === i &&
                  (s.slides.length || (t = !0),
                  requestAnimationFrame(() => {
                    t && s.slides && s.slides.length && (a(), (t = !1));
                  }));
              });
          })({
            effect: 'fade',
            swiper: t,
            on: r,
            setTranslate: () => {
              let { slides: e } = t;
              t.params.fadeEffect;
              for (let i = 0; i < e.length; i += 1) {
                let e = t.slides[i],
                  r = -e.swiperSlideOffset;
                t.params.virtualTranslate || (r -= t.translate);
                let a = 0;
                t.isHorizontal() || ((a = r), (r = 0));
                let l = t.params.fadeEffect.crossFade
                    ? Math.max(1 - Math.abs(e.progress), 0)
                    : 1 + Math.min(Math.max(e.progress, -1), 0),
                  n = (function (e, t) {
                    let i = (0, s.g)(t);
                    return (
                      i !== t &&
                        ((i.style.backfaceVisibility = 'hidden'), (i.style['-webkit-backface-visibility'] = 'hidden')),
                      i
                    );
                  })(0, e);
                (n.style.opacity = l), (n.style.transform = `translate3d(${r}px, ${a}px, 0px)`);
              }
            },
            setTransition: (e) => {
              let i = t.slides.map((e) => (0, s.g)(e));
              i.forEach((t) => {
                t.style.transitionDuration = `${e}ms`;
              }),
                (function (e) {
                  let { swiper: t, duration: i, transformElements: r, allSlides: a } = e,
                    { activeIndex: l } = t,
                    n = (e) =>
                      e.parentElement
                        ? e.parentElement
                        : t.slides.filter((t) => t.shadowRoot && t.shadowRoot === e.parentNode)[0];
                  if (t.params.virtualTranslate && 0 !== i) {
                    let e = !1;
                    (a
                      ? r
                      : r.filter((e) => {
                          let i = e.classList.contains('swiper-slide-transform') ? n(e) : e;
                          return t.getSlideIndex(i) === l;
                        })
                    ).forEach((i) => {
                      (0, s.k)(i, () => {
                        if (e || !t || t.destroyed) return;
                        (e = !0), (t.animating = !1);
                        let i = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 });
                        t.wrapperEl.dispatchEvent(i);
                      });
                    });
                  }
                })({ swiper: t, duration: e, transformElements: i, allSlides: !0 });
            },
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !t.params.cssMode,
            }),
          });
      }
    },
    3711: function (e, t, i) {
      'use strict';
      function s(e) {
        return null !== e && 'object' == typeof e && 'constructor' in e && e.constructor === Object;
      }
      function r(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach((i) => {
            void 0 === e[i] ? (e[i] = t[i]) : s(t[i]) && s(e[i]) && Object.keys(t[i]).length > 0 && r(e[i], t[i]);
          });
      }
      i.d(t, {
        a: function () {
          return o;
        },
        g: function () {
          return l;
        },
      });
      let a = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: '' },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
      };
      function l() {
        let e = 'undefined' != typeof document ? document : {};
        return r(e, a), e;
      }
      let n = {
        document: a,
        navigator: { userAgent: '' },
        location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => '' }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) => ('undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0)),
        cancelAnimationFrame(e) {
          'undefined' != typeof setTimeout && clearTimeout(e);
        },
      };
      function o() {
        let e = 'undefined' != typeof window ? window : {};
        return r(e, n), e;
      }
    },
    9007: function (e, t, i) {
      'use strict';
      i.d(t, {
        a: function () {
          return S;
        },
        c: function () {
          return m;
        },
        d: function () {
          return l;
        },
        e: function () {
          return u;
        },
        f: function () {
          return E;
        },
        g: function () {
          return p;
        },
        h: function () {
          return b;
        },
        j: function () {
          return n;
        },
        k: function () {
          return y;
        },
        m: function () {
          return T;
        },
        n: function () {
          return a;
        },
        p: function () {
          return w;
        },
        q: function () {
          return v;
        },
        r: function () {
          return g;
        },
        s: function () {
          return d;
        },
        t: function () {
          return c;
        },
        u: function () {
          return f;
        },
        v: function () {
          return h;
        },
        w: function () {
          return function e() {
            let t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
              i = ['__proto__', 'constructor', 'prototype'];
            for (let s = 1; s < arguments.length; s += 1) {
              let r = s < 0 || arguments.length <= s ? void 0 : arguments[s];
              if (
                null != r &&
                ('undefined' != typeof window && void 0 !== window.HTMLElement
                  ? !(r instanceof HTMLElement)
                  : !r || (1 !== r.nodeType && 11 !== r.nodeType))
              ) {
                let s = Object.keys(Object(r)).filter((e) => 0 > i.indexOf(e));
                for (let i = 0, a = s.length; i < a; i += 1) {
                  let a = s[i],
                    l = Object.getOwnPropertyDescriptor(r, a);
                  void 0 !== l &&
                    l.enumerable &&
                    (o(t[a]) && o(r[a])
                      ? r[a].__swiper__
                        ? (t[a] = r[a])
                        : e(t[a], r[a])
                      : !o(t[a]) && o(r[a])
                        ? ((t[a] = {}), r[a].__swiper__ ? (t[a] = r[a]) : e(t[a], r[a]))
                        : (t[a] = r[a]));
                }
              }
            }
            return t;
          };
        },
        x: function () {
          return r;
        },
      });
      var s = i(3711);
      function r(e) {
        Object.keys(e).forEach((t) => {
          try {
            e[t] = null;
          } catch (e) {}
          try {
            delete e[t];
          } catch (e) {}
        });
      }
      function a(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function l() {
        return Date.now();
      }
      function n(e, t) {
        let i, r, a;
        void 0 === t && (t = 'x');
        let l = (0, s.a)(),
          n = (function (e) {
            let t;
            let i = (0, s.a)();
            return (
              i.getComputedStyle && (t = i.getComputedStyle(e, null)),
              !t && e.currentStyle && (t = e.currentStyle),
              t || (t = e.style),
              t
            );
          })(e);
        return (
          l.WebKitCSSMatrix
            ? ((r = n.transform || n.webkitTransform).split(',').length > 6 &&
                (r = r
                  .split(', ')
                  .map((e) => e.replace(',', '.'))
                  .join(', ')),
              (a = new l.WebKitCSSMatrix('none' === r ? '' : r)))
            : (i = (a =
                n.MozTransform ||
                n.OTransform ||
                n.MsTransform ||
                n.msTransform ||
                n.transform ||
                n.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,'))
                .toString()
                .split(',')),
          'x' === t && (r = l.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
          'y' === t && (r = l.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
          r || 0
        );
      }
      function o(e) {
        return (
          'object' == typeof e &&
          null !== e &&
          e.constructor &&
          'Object' === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function d(e, t, i) {
        e.style.setProperty(t, i);
      }
      function c(e) {
        let t,
          { swiper: i, targetPosition: r, side: a } = e,
          l = (0, s.a)(),
          n = -i.translate,
          o = null,
          d = i.params.speed;
        (i.wrapperEl.style.scrollSnapType = 'none'), l.cancelAnimationFrame(i.cssModeFrameID);
        let c = r > n ? 'next' : 'prev',
          p = (e, t) => ('next' === c && e >= t) || ('prev' === c && e <= t),
          u = () => {
            (t = new Date().getTime()), null === o && (o = t);
            let e = n + (0.5 - Math.cos(Math.max(Math.min((t - o) / d, 1), 0) * Math.PI) / 2) * (r - n);
            if ((p(e, r) && (e = r), i.wrapperEl.scrollTo({ [a]: e }), p(e, r))) {
              (i.wrapperEl.style.overflow = 'hidden'),
                (i.wrapperEl.style.scrollSnapType = ''),
                setTimeout(() => {
                  (i.wrapperEl.style.overflow = ''), i.wrapperEl.scrollTo({ [a]: e });
                }),
                l.cancelAnimationFrame(i.cssModeFrameID);
              return;
            }
            i.cssModeFrameID = l.requestAnimationFrame(u);
          };
        u();
      }
      function p(e) {
        return (
          e.querySelector('.swiper-slide-transform') ||
          (e.shadowRoot && e.shadowRoot.querySelector('.swiper-slide-transform')) ||
          e
        );
      }
      function u(e, t) {
        void 0 === t && (t = '');
        let i = [...e.children];
        return (e instanceof HTMLSlotElement && i.push(...e.assignedElements()), t) ? i.filter((e) => e.matches(t)) : i;
      }
      function h(e, t) {
        let i = t.contains(e);
        return !i && t instanceof HTMLSlotElement ? [...t.assignedElements()].includes(e) : i;
      }
      function f(e) {
        try {
          console.warn(e);
          return;
        } catch (e) {}
      }
      function m(e, t) {
        var i;
        void 0 === t && (t = []);
        let s = document.createElement(e);
        return (
          s.classList.add(
            ...(Array.isArray(t)
              ? t
              : (void 0 === (i = t) && (i = ''),
                i
                  .trim()
                  .split(' ')
                  .filter((e) => !!e.trim())))
          ),
          s
        );
      }
      function g(e, t) {
        let i = [];
        for (; e.previousElementSibling; ) {
          let s = e.previousElementSibling;
          t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
        }
        return i;
      }
      function v(e, t) {
        let i = [];
        for (; e.nextElementSibling; ) {
          let s = e.nextElementSibling;
          t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
        }
        return i;
      }
      function w(e, t) {
        return (0, s.a)().getComputedStyle(e, null).getPropertyValue(t);
      }
      function b(e) {
        let t,
          i = e;
        if (i) {
          for (t = 0; null !== (i = i.previousSibling); ) 1 === i.nodeType && (t += 1);
          return t;
        }
      }
      function S(e, t) {
        let i = [],
          s = e.parentElement;
        for (; s; ) t ? s.matches(t) && i.push(s) : i.push(s), (s = s.parentElement);
        return i;
      }
      function y(e, t) {
        t &&
          e.addEventListener('transitionend', function i(s) {
            s.target === e && (t.call(e, s), e.removeEventListener('transitionend', i));
          });
      }
      function E(e, t, i) {
        let r = (0, s.a)();
        return i
          ? e['width' === t ? 'offsetWidth' : 'offsetHeight'] +
              parseFloat(r.getComputedStyle(e, null).getPropertyValue('width' === t ? 'margin-right' : 'margin-top')) +
              parseFloat(r.getComputedStyle(e, null).getPropertyValue('width' === t ? 'margin-left' : 'margin-bottom'))
          : e.offsetWidth;
      }
      function T(e) {
        return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      }
    },
    3267: function (e, t, i) {
      'use strict';
      let s, r, a;
      i.d(t, {
        tq: function () {
          return q;
        },
        o5: function () {
          return W;
        },
      });
      var l = i(2265),
        n = i(3711),
        o = i(9007);
      function d() {
        return (
          s ||
            (s = (function () {
              let e = (0, n.a)(),
                t = (0, n.g)();
              return {
                smoothScroll:
                  t.documentElement && t.documentElement.style && 'scrollBehavior' in t.documentElement.style,
                touch: !!('ontouchstart' in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
              };
            })()),
          s
        );
      }
      function c(e) {
        return (
          void 0 === e && (e = {}),
          r ||
            (r = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e,
                i = d(),
                s = (0, n.a)(),
                r = s.navigator.platform,
                a = t || s.navigator.userAgent,
                l = { ios: !1, android: !1 },
                o = s.screen.width,
                c = s.screen.height,
                p = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                u = a.match(/(iPad).*OS\s([\d_]+)/),
                h = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                m = 'MacIntel' === r;
              return (
                !u &&
                  m &&
                  i.touch &&
                  [
                    '1024x1366',
                    '1366x1024',
                    '834x1194',
                    '1194x834',
                    '834x1112',
                    '1112x834',
                    '768x1024',
                    '1024x768',
                    '820x1180',
                    '1180x820',
                    '810x1080',
                    '1080x810',
                  ].indexOf(`${o}x${c}`) >= 0 &&
                  ((u = a.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, '13_0_0']), (m = !1)),
                p && 'Win32' !== r && ((l.os = 'android'), (l.android = !0)),
                (u || f || h) && ((l.os = 'ios'), (l.ios = !0)),
                l
              );
            })(e)),
          r
        );
      }
      let p = (e, t, i) => {
          t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        u = (e, t, i) => {
          t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        h = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          let i = t.closest(e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`);
          if (i) {
            let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t &&
              e.isElement &&
              (i.shadowRoot
                ? (t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
                : requestAnimationFrame(() => {
                    i.shadowRoot && (t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)) && t.remove();
                  })),
              t && t.remove();
          }
        },
        f = (e, t) => {
          if (!e.slides[t]) return;
          let i = e.slides[t].querySelector('[loading="lazy"]');
          i && i.removeAttribute('loading');
        },
        m = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext,
            i = e.slides.length;
          if (!i || !t || t < 0) return;
          t = Math.min(t, i);
          let s = 'auto' === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            r = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            let i = [r - t];
            i.push(...Array.from({ length: t }).map((e, t) => r + s + t)),
              e.slides.forEach((t, s) => {
                i.includes(t.column) && f(e, s);
              });
            return;
          }
          let a = r + s - 1;
          if (e.params.rewind || e.params.loop)
            for (let s = r - t; s <= a + t; s += 1) {
              let t = ((s % i) + i) % i;
              (t < r || t > a) && f(e, t);
            }
          else
            for (let s = Math.max(r - t, 0); s <= Math.min(a + t, i - 1); s += 1)
              s !== r && (s > a || s < r) && f(e, s);
        };
      function g(e) {
        let { swiper: t, runCallbacks: i, direction: s, step: r } = e,
          { activeIndex: a, previousIndex: l } = t,
          n = s;
        if ((n || (n = a > l ? 'next' : a < l ? 'prev' : 'reset'), t.emit(`transition${r}`), i && a !== l)) {
          if ('reset' === n) {
            t.emit(`slideResetTransition${r}`);
            return;
          }
          t.emit(`slideChangeTransition${r}`),
            'next' === n ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`);
        }
      }
      function v(e, t, i) {
        let s = (0, n.a)(),
          { params: r } = e,
          a = r.edgeSwipeDetection,
          l = r.edgeSwipeThreshold;
        return !a || (!(i <= l) && !(i >= s.innerWidth - l)) || ('prevent' === a && (t.preventDefault(), !0));
      }
      function w(e) {
        let t = (0, n.g)(),
          i = e;
        i.originalEvent && (i = i.originalEvent);
        let s = this.touchEventsData;
        if ('pointerdown' === i.type) {
          if (null !== s.pointerId && s.pointerId !== i.pointerId) return;
          s.pointerId = i.pointerId;
        } else 'touchstart' === i.type && 1 === i.targetTouches.length && (s.touchId = i.targetTouches[0].identifier);
        if ('touchstart' === i.type) {
          v(this, i, i.targetTouches[0].pageX);
          return;
        }
        let { params: r, touches: a, enabled: l } = this;
        if (
          !l ||
          (!r.simulateTouch && 'mouse' === i.pointerType) ||
          (this.animating && r.preventInteractionOnTransition)
        )
          return;
        !this.animating && r.cssMode && r.loop && this.loopFix();
        let d = i.target;
        if (
          ('wrapper' === r.touchEventsTarget && !(0, o.v)(d, this.wrapperEl)) ||
          ('which' in i && 3 === i.which) ||
          ('button' in i && i.button > 0) ||
          (s.isTouched && s.isMoved)
        )
          return;
        let c = !!r.noSwipingClass && '' !== r.noSwipingClass,
          p = i.composedPath ? i.composedPath() : i.path;
        c && i.target && i.target.shadowRoot && p && (d = p[0]);
        let u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
          h = !!(i.target && i.target.shadowRoot);
        if (
          r.noSwiping &&
          (h
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(i) {
                    if (!i || i === (0, n.g)() || i === (0, n.a)()) return null;
                    i.assignedSlot && (i = i.assignedSlot);
                    let s = i.closest(e);
                    return s || i.getRootNode ? s || t(i.getRootNode().host) : null;
                  })(t)
                );
              })(u, d)
            : d.closest(u))
        ) {
          this.allowClick = !0;
          return;
        }
        if (r.swipeHandler && !d.closest(r.swipeHandler)) return;
        (a.currentX = i.pageX), (a.currentY = i.pageY);
        let f = a.currentX,
          m = a.currentY;
        if (!v(this, i, f)) return;
        Object.assign(s, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (a.startX = f),
          (a.startY = m),
          (s.touchStartTime = (0, o.d)()),
          (this.allowClick = !0),
          this.updateSize(),
          (this.swipeDirection = void 0),
          r.threshold > 0 && (s.allowThresholdMove = !1);
        let g = !0;
        d.matches(s.focusableElements) && ((g = !1), 'SELECT' === d.nodeName && (s.isTouched = !1)),
          t.activeElement &&
            t.activeElement.matches(s.focusableElements) &&
            t.activeElement !== d &&
            ('mouse' === i.pointerType || ('mouse' !== i.pointerType && !d.matches(s.focusableElements))) &&
            t.activeElement.blur();
        let w = g && this.allowTouchMove && r.touchStartPreventDefault;
        (r.touchStartForcePreventDefault || w) && !d.isContentEditable && i.preventDefault(),
          r.freeMode &&
            r.freeMode.enabled &&
            this.freeMode &&
            this.animating &&
            !r.cssMode &&
            this.freeMode.onTouchStart(),
          this.emit('touchStart', i);
      }
      function b(e) {
        let t, i;
        let s = (0, n.g)(),
          r = this.touchEventsData,
          { params: a, touches: l, rtlTranslate: d, enabled: c } = this;
        if (!c || (!a.simulateTouch && 'mouse' === e.pointerType)) return;
        let p = e;
        if (
          (p.originalEvent && (p = p.originalEvent),
          'pointermove' === p.type && (null !== r.touchId || p.pointerId !== r.pointerId))
        )
          return;
        if ('touchmove' === p.type) {
          if (!(t = [...p.changedTouches].filter((e) => e.identifier === r.touchId)[0]) || t.identifier !== r.touchId)
            return;
        } else t = p;
        if (!r.isTouched) {
          r.startMoving && r.isScrolling && this.emit('touchMoveOpposite', p);
          return;
        }
        let u = t.pageX,
          h = t.pageY;
        if (p.preventedByNestedSwiper) {
          (l.startX = u), (l.startY = h);
          return;
        }
        if (!this.allowTouchMove) {
          p.target.matches(r.focusableElements) || (this.allowClick = !1),
            r.isTouched &&
              (Object.assign(l, { startX: u, startY: h, currentX: u, currentY: h }), (r.touchStartTime = (0, o.d)()));
          return;
        }
        if (a.touchReleaseOnEdges && !a.loop) {
          if (this.isVertical()) {
            if (
              (h < l.startY && this.translate <= this.maxTranslate()) ||
              (h > l.startY && this.translate >= this.minTranslate())
            ) {
              (r.isTouched = !1), (r.isMoved = !1);
              return;
            }
          } else if (
            (u < l.startX && this.translate <= this.maxTranslate()) ||
            (u > l.startX && this.translate >= this.minTranslate())
          )
            return;
        }
        if (
          (s.activeElement &&
            s.activeElement.matches(r.focusableElements) &&
            s.activeElement !== p.target &&
            'mouse' !== p.pointerType &&
            s.activeElement.blur(),
          s.activeElement && p.target === s.activeElement && p.target.matches(r.focusableElements))
        ) {
          (r.isMoved = !0), (this.allowClick = !1);
          return;
        }
        r.allowTouchCallbacks && this.emit('touchMove', p),
          (l.previousX = l.currentX),
          (l.previousY = l.currentY),
          (l.currentX = u),
          (l.currentY = h);
        let f = l.currentX - l.startX,
          m = l.currentY - l.startY;
        if (this.params.threshold && Math.sqrt(f ** 2 + m ** 2) < this.params.threshold) return;
        if (void 0 === r.isScrolling) {
          let e;
          (this.isHorizontal() && l.currentY === l.startY) || (this.isVertical() && l.currentX === l.startX)
            ? (r.isScrolling = !1)
            : f * f + m * m >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(m), Math.abs(f))) / Math.PI),
              (r.isScrolling = this.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle));
        }
        if (
          (r.isScrolling && this.emit('touchMoveOpposite', p),
          void 0 === r.startMoving && (l.currentX !== l.startX || l.currentY !== l.startY) && (r.startMoving = !0),
          r.isScrolling || ('touchmove' === p.type && r.preventTouchMoveFromPointerMove))
        ) {
          r.isTouched = !1;
          return;
        }
        if (!r.startMoving) return;
        (this.allowClick = !1),
          !a.cssMode && p.cancelable && p.preventDefault(),
          a.touchMoveStopPropagation && !a.nested && p.stopPropagation();
        let g = this.isHorizontal() ? f : m,
          v = this.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
        a.oneWayMovement && ((g = Math.abs(g) * (d ? 1 : -1)), (v = Math.abs(v) * (d ? 1 : -1))),
          (l.diff = g),
          (g *= a.touchRatio),
          d && ((g = -g), (v = -v));
        let w = this.touchesDirection;
        (this.swipeDirection = g > 0 ? 'prev' : 'next'), (this.touchesDirection = v > 0 ? 'prev' : 'next');
        let b = this.params.loop && !a.cssMode,
          S =
            ('next' === this.touchesDirection && this.allowSlideNext) ||
            ('prev' === this.touchesDirection && this.allowSlidePrev);
        if (!r.isMoved) {
          if (
            (b && S && this.loopFix({ direction: this.swipeDirection }),
            (r.startTranslate = this.getTranslate()),
            this.setTransition(0),
            this.animating)
          ) {
            let e = new window.CustomEvent('transitionend', {
              bubbles: !0,
              cancelable: !0,
              detail: { bySwiperTouchMove: !0 },
            });
            this.wrapperEl.dispatchEvent(e);
          }
          (r.allowMomentumBounce = !1),
            a.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0),
            this.emit('sliderFirstMove', p);
        }
        if (
          (new Date().getTime(),
          r.isMoved && r.allowThresholdMove && w !== this.touchesDirection && b && S && Math.abs(g) >= 1)
        ) {
          Object.assign(l, { startX: u, startY: h, currentX: u, currentY: h, startTranslate: r.currentTranslate }),
            (r.loopSwapReset = !0),
            (r.startTranslate = r.currentTranslate);
          return;
        }
        this.emit('sliderMove', p), (r.isMoved = !0), (r.currentTranslate = g + r.startTranslate);
        let y = !0,
          E = a.resistanceRatio;
        if (
          (a.touchReleaseOnEdges && (E = 0),
          g > 0
            ? (b &&
                S &&
                !i &&
                r.allowThresholdMove &&
                r.currentTranslate >
                  (a.centeredSlides
                    ? this.minTranslate() -
                      this.slidesSizesGrid[this.activeIndex + 1] -
                      ('auto' !== a.slidesPerView && this.slides.length - a.slidesPerView >= 2
                        ? this.slidesSizesGrid[this.activeIndex + 1] + this.params.spaceBetween
                        : 0) -
                      this.params.spaceBetween
                    : this.minTranslate()) &&
                this.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
              r.currentTranslate > this.minTranslate() &&
                ((y = !1),
                a.resistance &&
                  (r.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + r.startTranslate + g) ** E)))
            : g < 0 &&
              (b &&
                S &&
                !i &&
                r.allowThresholdMove &&
                r.currentTranslate <
                  (a.centeredSlides
                    ? this.maxTranslate() +
                      this.slidesSizesGrid[this.slidesSizesGrid.length - 1] +
                      this.params.spaceBetween +
                      ('auto' !== a.slidesPerView && this.slides.length - a.slidesPerView >= 2
                        ? this.slidesSizesGrid[this.slidesSizesGrid.length - 1] + this.params.spaceBetween
                        : 0)
                    : this.maxTranslate()) &&
                this.loopFix({
                  direction: 'next',
                  setTranslate: !0,
                  activeSlideIndex:
                    this.slides.length -
                    ('auto' === a.slidesPerView
                      ? this.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(a.slidesPerView, 10))),
                }),
              r.currentTranslate < this.maxTranslate() &&
                ((y = !1),
                a.resistance &&
                  (r.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - r.startTranslate - g) ** E))),
          y && (p.preventedByNestedSwiper = !0),
          !this.allowSlideNext &&
            'next' === this.swipeDirection &&
            r.currentTranslate < r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          !this.allowSlidePrev &&
            'prev' === this.swipeDirection &&
            r.currentTranslate > r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          this.allowSlidePrev || this.allowSlideNext || (r.currentTranslate = r.startTranslate),
          a.threshold > 0)
        ) {
          if (Math.abs(g) > a.threshold || r.allowThresholdMove) {
            if (!r.allowThresholdMove) {
              (r.allowThresholdMove = !0),
                (l.startX = l.currentX),
                (l.startY = l.currentY),
                (r.currentTranslate = r.startTranslate),
                (l.diff = this.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY);
              return;
            }
          } else {
            r.currentTranslate = r.startTranslate;
            return;
          }
        }
        a.followFinger &&
          !a.cssMode &&
          (((a.freeMode && a.freeMode.enabled && this.freeMode) || a.watchSlidesProgress) &&
            (this.updateActiveIndex(), this.updateSlidesClasses()),
          a.freeMode && a.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(),
          this.updateProgress(r.currentTranslate),
          this.setTranslate(r.currentTranslate));
      }
      function S(e) {
        let t, i;
        let s = this,
          r = s.touchEventsData,
          a = e;
        if ((a.originalEvent && (a = a.originalEvent), 'touchend' === a.type || 'touchcancel' === a.type)) {
          if (!(t = [...a.changedTouches].filter((e) => e.identifier === r.touchId)[0]) || t.identifier !== r.touchId)
            return;
        } else {
          if (null !== r.touchId || a.pointerId !== r.pointerId) return;
          t = a;
        }
        if (
          ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(a.type) &&
          !(['pointercancel', 'contextmenu'].includes(a.type) && (s.browser.isSafari || s.browser.isWebView))
        )
          return;
        (r.pointerId = null), (r.touchId = null);
        let { params: l, touches: n, rtlTranslate: d, slidesGrid: c, enabled: p } = s;
        if (!p || (!l.simulateTouch && 'mouse' === a.pointerType)) return;
        if ((r.allowTouchCallbacks && s.emit('touchEnd', a), (r.allowTouchCallbacks = !1), !r.isTouched)) {
          r.isMoved && l.grabCursor && s.setGrabCursor(!1), (r.isMoved = !1), (r.startMoving = !1);
          return;
        }
        l.grabCursor &&
          r.isMoved &&
          r.isTouched &&
          (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) &&
          s.setGrabCursor(!1);
        let u = (0, o.d)(),
          h = u - r.touchStartTime;
        if (s.allowClick) {
          let e = a.path || (a.composedPath && a.composedPath());
          s.updateClickedSlide((e && e[0]) || a.target, e),
            s.emit('tap click', a),
            h < 300 && u - r.lastClickTime < 300 && s.emit('doubleTap doubleClick', a);
        }
        if (
          ((r.lastClickTime = (0, o.d)()),
          (0, o.n)(() => {
            s.destroyed || (s.allowClick = !0);
          }),
          !r.isTouched ||
            !r.isMoved ||
            !s.swipeDirection ||
            (0 === n.diff && !r.loopSwapReset) ||
            (r.currentTranslate === r.startTranslate && !r.loopSwapReset))
        ) {
          (r.isTouched = !1), (r.isMoved = !1), (r.startMoving = !1);
          return;
        }
        if (
          ((r.isTouched = !1),
          (r.isMoved = !1),
          (r.startMoving = !1),
          (i = l.followFinger ? (d ? s.translate : -s.translate) : -r.currentTranslate),
          l.cssMode)
        )
          return;
        if (l.freeMode && l.freeMode.enabled) {
          s.freeMode.onTouchEnd({ currentPos: i });
          return;
        }
        let f = i >= -s.maxTranslate() && !s.params.loop,
          m = 0,
          g = s.slidesSizesGrid[0];
        for (let e = 0; e < c.length; e += e < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
          let t = e < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
          void 0 !== c[e + t]
            ? (f || (i >= c[e] && i < c[e + t])) && ((m = e), (g = c[e + t] - c[e]))
            : (f || i >= c[e]) && ((m = e), (g = c[c.length - 1] - c[c.length - 2]));
        }
        let v = null,
          w = null;
        l.rewind &&
          (s.isBeginning
            ? (w = l.virtual && l.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1)
            : s.isEnd && (v = 0));
        let b = (i - c[m]) / g,
          S = m < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
        if (h > l.longSwipesMs) {
          if (!l.longSwipes) {
            s.slideTo(s.activeIndex);
            return;
          }
          'next' === s.swipeDirection &&
            (b >= l.longSwipesRatio ? s.slideTo(l.rewind && s.isEnd ? v : m + S) : s.slideTo(m)),
            'prev' === s.swipeDirection &&
              (b > 1 - l.longSwipesRatio
                ? s.slideTo(m + S)
                : null !== w && b < 0 && Math.abs(b) > l.longSwipesRatio
                  ? s.slideTo(w)
                  : s.slideTo(m));
        } else {
          if (!l.shortSwipes) {
            s.slideTo(s.activeIndex);
            return;
          }
          s.navigation && (a.target === s.navigation.nextEl || a.target === s.navigation.prevEl)
            ? a.target === s.navigation.nextEl
              ? s.slideTo(m + S)
              : s.slideTo(m)
            : ('next' === s.swipeDirection && s.slideTo(null !== v ? v : m + S),
              'prev' === s.swipeDirection && s.slideTo(null !== w ? w : m));
        }
      }
      function y() {
        let e = this,
          { params: t, el: i } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        let { allowSlideNext: s, allowSlidePrev: r, snapGrid: a } = e,
          l = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        let n = l && t.loop;
        ('auto' !== t.slidesPerView && !(t.slidesPerView > 1)) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        n
          ? e.params.loop && !l
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = r),
          (e.allowSlideNext = s),
          e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
      }
      function E(e) {
        this.enabled &&
          !this.allowClick &&
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function T() {
        let { wrapperEl: e, rtlTranslate: t, enabled: i } = this;
        if (!i) return;
        (this.previousTranslate = this.translate),
          this.isHorizontal() ? (this.translate = -e.scrollLeft) : (this.translate = -e.scrollTop),
          0 === this.translate && (this.translate = 0),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
        let s = this.maxTranslate() - this.minTranslate();
        (0 === s ? 0 : (this.translate - this.minTranslate()) / s) !== this.progress &&
          this.updateProgress(t ? -this.translate : this.translate),
          this.emit('setTranslate', this.translate, !1);
      }
      function x(e) {
        h(this, e.target),
          !this.params.cssMode && ('auto' === this.params.slidesPerView || this.params.autoHeight) && this.update();
      }
      function C() {
        !this.documentTouchHandlerProceeded &&
          ((this.documentTouchHandlerProceeded = !0),
          this.params.touchReleaseOnEdges && (this.el.style.touchAction = 'auto'));
      }
      let M = (e, t) => {
          let i = (0, n.g)(),
            { params: s, el: r, wrapperEl: a, device: l } = e,
            o = !!s.nested,
            d = 'on' === t ? 'addEventListener' : 'removeEventListener';
          r &&
            'string' != typeof r &&
            (i[d]('touchstart', e.onDocumentTouchStart, { passive: !1, capture: o }),
            r[d]('touchstart', e.onTouchStart, { passive: !1 }),
            r[d]('pointerdown', e.onTouchStart, { passive: !1 }),
            i[d]('touchmove', e.onTouchMove, { passive: !1, capture: o }),
            i[d]('pointermove', e.onTouchMove, { passive: !1, capture: o }),
            i[d]('touchend', e.onTouchEnd, { passive: !0 }),
            i[d]('pointerup', e.onTouchEnd, { passive: !0 }),
            i[d]('pointercancel', e.onTouchEnd, { passive: !0 }),
            i[d]('touchcancel', e.onTouchEnd, { passive: !0 }),
            i[d]('pointerout', e.onTouchEnd, { passive: !0 }),
            i[d]('pointerleave', e.onTouchEnd, { passive: !0 }),
            i[d]('contextmenu', e.onTouchEnd, { passive: !0 }),
            (s.preventClicks || s.preventClicksPropagation) && r[d]('click', e.onClick, !0),
            s.cssMode && a[d]('scroll', e.onScroll),
            s.updateOnWindowResize
              ? e[t](l.ios || l.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', y, !0)
              : e[t]('observerUpdate', y, !0),
            r[d]('load', e.onLoad, { capture: !0 }));
        },
        P = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var L = {
        init: !0,
        direction: 'horizontal',
        oneWayMovement: !1,
        swiperElementNodeName: 'SWIPER-CONTAINER',
        touchEventsTarget: 'wrapper',
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: 'swiper',
        enabled: !0,
        focusableElements: 'input, select, option, textarea, button, video, label',
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: 'slide',
        breakpoints: void 0,
        breakpointsBase: 'window',
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: 'swiper-',
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-blank',
        slideActiveClass: 'swiper-slide-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideFullyVisibleClass: 'swiper-slide-fully-visible',
        slideNextClass: 'swiper-slide-next',
        slidePrevClass: 'swiper-slide-prev',
        wrapperClass: 'swiper-wrapper',
        lazyPreloaderClass: 'swiper-lazy-preloader',
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      let k = {
          eventsEmitter: {
            on(e, t, i) {
              let s = this;
              if (!s.eventsListeners || s.destroyed || 'function' != typeof t) return s;
              let r = i ? 'unshift' : 'push';
              return (
                e.split(' ').forEach((e) => {
                  s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][r](t);
                }),
                s
              );
            },
            once(e, t, i) {
              let s = this;
              if (!s.eventsListeners || s.destroyed || 'function' != typeof t) return s;
              function r() {
                s.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                for (var i = arguments.length, a = Array(i), l = 0; l < i; l++) a[l] = arguments[l];
                t.apply(s, a);
              }
              return (r.__emitterProxy = t), s.on(e, r, i);
            },
            onAny(e, t) {
              return (
                !this.eventsListeners ||
                  this.destroyed ||
                  'function' != typeof e ||
                  (0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? 'unshift' : 'push'](e)),
                this
              );
            },
            offAny(e) {
              if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
              let t = this.eventsAnyListeners.indexOf(e);
              return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
            },
            off(e, t) {
              let i = this;
              return (
                i.eventsListeners &&
                  !i.destroyed &&
                  i.eventsListeners &&
                  e.split(' ').forEach((e) => {
                    void 0 === t
                      ? (i.eventsListeners[e] = [])
                      : i.eventsListeners[e] &&
                        i.eventsListeners[e].forEach((s, r) => {
                          (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                            i.eventsListeners[e].splice(r, 1);
                        });
                  }),
                i
              );
            },
            emit() {
              let e, t, i;
              let s = this;
              if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s;
              for (var r = arguments.length, a = Array(r), l = 0; l < r; l++) a[l] = arguments[l];
              return (
                'string' == typeof a[0] || Array.isArray(a[0])
                  ? ((e = a[0]), (t = a.slice(1, a.length)), (i = s))
                  : ((e = a[0].events), (t = a[0].data), (i = a[0].context || s)),
                t.unshift(i),
                (Array.isArray(e) ? e : e.split(' ')).forEach((e) => {
                  s.eventsAnyListeners &&
                    s.eventsAnyListeners.length &&
                    s.eventsAnyListeners.forEach((s) => {
                      s.apply(i, [e, ...t]);
                    }),
                    s.eventsListeners &&
                      s.eventsListeners[e] &&
                      s.eventsListeners[e].forEach((e) => {
                        e.apply(i, t);
                      });
                }),
                s
              );
            },
          },
          update: {
            updateSize: function () {
              let e, t;
              let i = this.el;
              (e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i.clientWidth),
                (t =
                  void 0 !== this.params.height && null !== this.params.height ? this.params.height : i.clientHeight),
                (0 === e && this.isHorizontal()) ||
                  (0 === t && this.isVertical()) ||
                  ((e =
                    e -
                    parseInt((0, o.p)(i, 'padding-left') || 0, 10) -
                    parseInt((0, o.p)(i, 'padding-right') || 0, 10)),
                  (t =
                    t -
                    parseInt((0, o.p)(i, 'padding-top') || 0, 10) -
                    parseInt((0, o.p)(i, 'padding-bottom') || 0, 10)),
                  Number.isNaN(e) && (e = 0),
                  Number.isNaN(t) && (t = 0),
                  Object.assign(this, { width: e, height: t, size: this.isHorizontal() ? e : t }));
            },
            updateSlides: function () {
              let e;
              let t = this;
              function i(e, i) {
                return parseFloat(e.getPropertyValue(t.getDirectionLabel(i)) || 0);
              }
              let s = t.params,
                { wrapperEl: r, slidesEl: a, size: l, rtlTranslate: n, wrongRTL: d } = t,
                c = t.virtual && s.virtual.enabled,
                p = c ? t.virtual.slides.length : t.slides.length,
                u = (0, o.e)(a, `.${t.params.slideClass}, swiper-slide`),
                h = c ? t.virtual.slides.length : u.length,
                f = [],
                m = [],
                g = [],
                v = s.slidesOffsetBefore;
              'function' == typeof v && (v = s.slidesOffsetBefore.call(t));
              let w = s.slidesOffsetAfter;
              'function' == typeof w && (w = s.slidesOffsetAfter.call(t));
              let b = t.snapGrid.length,
                S = t.slidesGrid.length,
                y = s.spaceBetween,
                E = -v,
                T = 0,
                x = 0;
              if (void 0 === l) return;
              'string' == typeof y && y.indexOf('%') >= 0
                ? (y = (parseFloat(y.replace('%', '')) / 100) * l)
                : 'string' == typeof y && (y = parseFloat(y)),
                (t.virtualSize = -y),
                u.forEach((e) => {
                  n ? (e.style.marginLeft = '') : (e.style.marginRight = ''),
                    (e.style.marginBottom = ''),
                    (e.style.marginTop = '');
                }),
                s.centeredSlides &&
                  s.cssMode &&
                  ((0, o.s)(r, '--swiper-centered-offset-before', ''),
                  (0, o.s)(r, '--swiper-centered-offset-after', ''));
              let C = s.grid && s.grid.rows > 1 && t.grid;
              C ? t.grid.initSlides(u) : t.grid && t.grid.unsetSlides();
              let M =
                'auto' === s.slidesPerView &&
                s.breakpoints &&
                Object.keys(s.breakpoints).filter((e) => void 0 !== s.breakpoints[e].slidesPerView).length > 0;
              for (let r = 0; r < h; r += 1) {
                let a;
                if (
                  ((e = 0),
                  u[r] && (a = u[r]),
                  C && t.grid.updateSlide(r, a, u),
                  !u[r] || 'none' !== (0, o.p)(a, 'display'))
                ) {
                  if ('auto' === s.slidesPerView) {
                    M && (u[r].style[t.getDirectionLabel('width')] = '');
                    let l = getComputedStyle(a),
                      n = a.style.transform,
                      d = a.style.webkitTransform;
                    if ((n && (a.style.transform = 'none'), d && (a.style.webkitTransform = 'none'), s.roundLengths))
                      e = t.isHorizontal() ? (0, o.f)(a, 'width', !0) : (0, o.f)(a, 'height', !0);
                    else {
                      let t = i(l, 'width'),
                        s = i(l, 'padding-left'),
                        r = i(l, 'padding-right'),
                        n = i(l, 'margin-left'),
                        o = i(l, 'margin-right'),
                        d = l.getPropertyValue('box-sizing');
                      if (d && 'border-box' === d) e = t + n + o;
                      else {
                        let { clientWidth: i, offsetWidth: l } = a;
                        e = t + s + r + n + o + (l - i);
                      }
                    }
                    n && (a.style.transform = n),
                      d && (a.style.webkitTransform = d),
                      s.roundLengths && (e = Math.floor(e));
                  } else
                    (e = (l - (s.slidesPerView - 1) * y) / s.slidesPerView),
                      s.roundLengths && (e = Math.floor(e)),
                      u[r] && (u[r].style[t.getDirectionLabel('width')] = `${e}px`);
                  u[r] && (u[r].swiperSlideSize = e),
                    g.push(e),
                    s.centeredSlides
                      ? ((E = E + e / 2 + T / 2 + y),
                        0 === T && 0 !== r && (E = E - l / 2 - y),
                        0 === r && (E = E - l / 2 - y),
                        0.001 > Math.abs(E) && (E = 0),
                        s.roundLengths && (E = Math.floor(E)),
                        x % s.slidesPerGroup == 0 && f.push(E),
                        m.push(E))
                      : (s.roundLengths && (E = Math.floor(E)),
                        (x - Math.min(t.params.slidesPerGroupSkip, x)) % t.params.slidesPerGroup == 0 && f.push(E),
                        m.push(E),
                        (E = E + e + y)),
                    (t.virtualSize += e + y),
                    (T = e),
                    (x += 1);
                }
              }
              if (
                ((t.virtualSize = Math.max(t.virtualSize, l) + w),
                n &&
                  d &&
                  ('slide' === s.effect || 'coverflow' === s.effect) &&
                  (r.style.width = `${t.virtualSize + y}px`),
                s.setWrapperSize && (r.style[t.getDirectionLabel('width')] = `${t.virtualSize + y}px`),
                C && t.grid.updateWrapperSize(e, f),
                !s.centeredSlides)
              ) {
                let e = [];
                for (let i = 0; i < f.length; i += 1) {
                  let r = f[i];
                  s.roundLengths && (r = Math.floor(r)), f[i] <= t.virtualSize - l && e.push(r);
                }
                (f = e), Math.floor(t.virtualSize - l) - Math.floor(f[f.length - 1]) > 1 && f.push(t.virtualSize - l);
              }
              if (c && s.loop) {
                let e = g[0] + y;
                if (s.slidesPerGroup > 1) {
                  let i = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / s.slidesPerGroup),
                    r = e * s.slidesPerGroup;
                  for (let e = 0; e < i; e += 1) f.push(f[f.length - 1] + r);
                }
                for (let i = 0; i < t.virtual.slidesBefore + t.virtual.slidesAfter; i += 1)
                  1 === s.slidesPerGroup && f.push(f[f.length - 1] + e),
                    m.push(m[m.length - 1] + e),
                    (t.virtualSize += e);
              }
              if ((0 === f.length && (f = [0]), 0 !== y)) {
                let e = t.isHorizontal() && n ? 'marginLeft' : t.getDirectionLabel('marginRight');
                u.filter((e, t) => !s.cssMode || !!s.loop || t !== u.length - 1).forEach((t) => {
                  t.style[e] = `${y}px`;
                });
              }
              if (s.centeredSlides && s.centeredSlidesBounds) {
                let e = 0;
                g.forEach((t) => {
                  e += t + (y || 0);
                });
                let t = (e -= y) > l ? e - l : 0;
                f = f.map((e) => (e <= 0 ? -v : e > t ? t + w : e));
              }
              if (s.centerInsufficientSlides) {
                let e = 0;
                g.forEach((t) => {
                  e += t + (y || 0);
                }),
                  (e -= y);
                let t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
                if (e + t < l) {
                  let i = (l - e - t) / 2;
                  f.forEach((e, t) => {
                    f[t] = e - i;
                  }),
                    m.forEach((e, t) => {
                      m[t] = e + i;
                    });
                }
              }
              if (
                (Object.assign(t, { slides: u, snapGrid: f, slidesGrid: m, slidesSizesGrid: g }),
                s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
              ) {
                (0, o.s)(r, '--swiper-centered-offset-before', `${-f[0]}px`),
                  (0, o.s)(r, '--swiper-centered-offset-after', `${t.size / 2 - g[g.length - 1] / 2}px`);
                let e = -t.snapGrid[0],
                  i = -t.slidesGrid[0];
                (t.snapGrid = t.snapGrid.map((t) => t + e)), (t.slidesGrid = t.slidesGrid.map((e) => e + i));
              }
              if (
                (h !== p && t.emit('slidesLengthChange'),
                f.length !== b && (t.params.watchOverflow && t.checkOverflow(), t.emit('snapGridLengthChange')),
                m.length !== S && t.emit('slidesGridLengthChange'),
                s.watchSlidesProgress && t.updateSlidesOffset(),
                t.emit('slidesUpdated'),
                !c && !s.cssMode && ('slide' === s.effect || 'fade' === s.effect))
              ) {
                let e = `${s.containerModifierClass}backface-hidden`,
                  i = t.el.classList.contains(e);
                h <= s.maxBackfaceHiddenSlides ? i || t.el.classList.add(e) : i && t.el.classList.remove(e);
              }
            },
            updateAutoHeight: function (e) {
              let t;
              let i = this,
                s = [],
                r = i.virtual && i.params.virtual.enabled,
                a = 0;
              'number' == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
              let l = (e) => (r ? i.slides[i.getSlideIndexByData(e)] : i.slides[e]);
              if ('auto' !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                if (i.params.centeredSlides)
                  (i.visibleSlides || []).forEach((e) => {
                    s.push(e);
                  });
                else
                  for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                    let e = i.activeIndex + t;
                    if (e > i.slides.length && !r) break;
                    s.push(l(e));
                  }
              } else s.push(l(i.activeIndex));
              for (t = 0; t < s.length; t += 1)
                if (void 0 !== s[t]) {
                  let e = s[t].offsetHeight;
                  a = e > a ? e : a;
                }
              (a || 0 === a) && (i.wrapperEl.style.height = `${a}px`);
            },
            updateSlidesOffset: function () {
              let e = this.slides,
                t = this.isElement ? (this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop) : 0;
              for (let i = 0; i < e.length; i += 1)
                e[i].swiperSlideOffset =
                  (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - this.cssOverflowAdjustment();
            },
            updateSlidesProgress: function (e) {
              void 0 === e && (e = (this && this.translate) || 0);
              let t = this.params,
                { slides: i, rtlTranslate: s, snapGrid: r } = this;
              if (0 === i.length) return;
              void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
              let a = -e;
              s && (a = e), (this.visibleSlidesIndexes = []), (this.visibleSlides = []);
              let l = t.spaceBetween;
              'string' == typeof l && l.indexOf('%') >= 0
                ? (l = (parseFloat(l.replace('%', '')) / 100) * this.size)
                : 'string' == typeof l && (l = parseFloat(l));
              for (let e = 0; e < i.length; e += 1) {
                let n = i[e],
                  o = n.swiperSlideOffset;
                t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                let d = (a + (t.centeredSlides ? this.minTranslate() : 0) - o) / (n.swiperSlideSize + l),
                  c = (a - r[0] + (t.centeredSlides ? this.minTranslate() : 0) - o) / (n.swiperSlideSize + l),
                  u = -(a - o),
                  h = u + this.slidesSizesGrid[e],
                  f = u >= 0 && u <= this.size - this.slidesSizesGrid[e],
                  m = (u >= 0 && u < this.size - 1) || (h > 1 && h <= this.size) || (u <= 0 && h >= this.size);
                m && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(e)),
                  p(n, m, t.slideVisibleClass),
                  p(n, f, t.slideFullyVisibleClass),
                  (n.progress = s ? -d : d),
                  (n.originalProgress = s ? -c : c);
              }
            },
            updateProgress: function (e) {
              if (void 0 === e) {
                let t = this.rtlTranslate ? -1 : 1;
                e = (this && this.translate && this.translate * t) || 0;
              }
              let t = this.params,
                i = this.maxTranslate() - this.minTranslate(),
                { progress: s, isBeginning: r, isEnd: a, progressLoop: l } = this,
                n = r,
                o = a;
              if (0 === i) (s = 0), (r = !0), (a = !0);
              else {
                s = (e - this.minTranslate()) / i;
                let t = 1 > Math.abs(e - this.minTranslate()),
                  l = 1 > Math.abs(e - this.maxTranslate());
                (r = t || s <= 0), (a = l || s >= 1), t && (s = 0), l && (s = 1);
              }
              if (t.loop) {
                let t = this.getSlideIndexByData(0),
                  i = this.getSlideIndexByData(this.slides.length - 1),
                  s = this.slidesGrid[t],
                  r = this.slidesGrid[i],
                  a = this.slidesGrid[this.slidesGrid.length - 1],
                  n = Math.abs(e);
                (l = n >= s ? (n - s) / a : (n + a - r) / a) > 1 && (l -= 1);
              }
              Object.assign(this, { progress: s, progressLoop: l, isBeginning: r, isEnd: a }),
                (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) && this.updateSlidesProgress(e),
                r && !n && this.emit('reachBeginning toEdge'),
                a && !o && this.emit('reachEnd toEdge'),
                ((n && !r) || (o && !a)) && this.emit('fromEdge'),
                this.emit('progress', s);
            },
            updateSlidesClasses: function () {
              let e, t, i;
              let { slides: s, params: r, slidesEl: a, activeIndex: l } = this,
                n = this.virtual && r.virtual.enabled,
                d = this.grid && r.grid && r.grid.rows > 1,
                c = (e) => (0, o.e)(a, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
              if (n) {
                if (r.loop) {
                  let t = l - this.virtual.slidesBefore;
                  t < 0 && (t = this.virtual.slides.length + t),
                    t >= this.virtual.slides.length && (t -= this.virtual.slides.length),
                    (e = c(`[data-swiper-slide-index="${t}"]`));
                } else e = c(`[data-swiper-slide-index="${l}"]`);
              } else
                d
                  ? ((e = s.filter((e) => e.column === l)[0]),
                    (i = s.filter((e) => e.column === l + 1)[0]),
                    (t = s.filter((e) => e.column === l - 1)[0]))
                  : (e = s[l]);
              e &&
                !d &&
                ((i = (0, o.q)(e, `.${r.slideClass}, swiper-slide`)[0]),
                r.loop && !i && (i = s[0]),
                (t = (0, o.r)(e, `.${r.slideClass}, swiper-slide`)[0]),
                r.loop),
                s.forEach((s) => {
                  u(s, s === e, r.slideActiveClass), u(s, s === i, r.slideNextClass), u(s, s === t, r.slidePrevClass);
                }),
                this.emitSlidesClasses();
            },
            updateActiveIndex: function (e) {
              let t, i;
              let s = this,
                r = s.rtlTranslate ? s.translate : -s.translate,
                { snapGrid: a, params: l, activeIndex: n, realIndex: o, snapIndex: d } = s,
                c = e,
                p = (e) => {
                  let t = e - s.virtual.slidesBefore;
                  return (
                    t < 0 && (t = s.virtual.slides.length + t),
                    t >= s.virtual.slides.length && (t -= s.virtual.slides.length),
                    t
                  );
                };
              if (
                (void 0 === c &&
                  (c = (function (e) {
                    let t;
                    let { slidesGrid: i, params: s } = e,
                      r = e.rtlTranslate ? e.translate : -e.translate;
                    for (let e = 0; e < i.length; e += 1)
                      void 0 !== i[e + 1]
                        ? r >= i[e] && r < i[e + 1] - (i[e + 1] - i[e]) / 2
                          ? (t = e)
                          : r >= i[e] && r < i[e + 1] && (t = e + 1)
                        : r >= i[e] && (t = e);
                    return s.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), t;
                  })(s)),
                a.indexOf(r) >= 0)
              )
                t = a.indexOf(r);
              else {
                let e = Math.min(l.slidesPerGroupSkip, c);
                t = e + Math.floor((c - e) / l.slidesPerGroup);
              }
              if ((t >= a.length && (t = a.length - 1), c === n && !s.params.loop)) {
                t !== d && ((s.snapIndex = t), s.emit('snapIndexChange'));
                return;
              }
              if (c === n && s.params.loop && s.virtual && s.params.virtual.enabled) {
                s.realIndex = p(c);
                return;
              }
              let u = s.grid && l.grid && l.grid.rows > 1;
              if (s.virtual && l.virtual.enabled && l.loop) i = p(c);
              else if (u) {
                let e = s.slides.filter((e) => e.column === c)[0],
                  t = parseInt(e.getAttribute('data-swiper-slide-index'), 10);
                Number.isNaN(t) && (t = Math.max(s.slides.indexOf(e), 0)), (i = Math.floor(t / l.grid.rows));
              } else if (s.slides[c]) {
                let e = s.slides[c].getAttribute('data-swiper-slide-index');
                i = e ? parseInt(e, 10) : c;
              } else i = c;
              Object.assign(s, {
                previousSnapIndex: d,
                snapIndex: t,
                previousRealIndex: o,
                realIndex: i,
                previousIndex: n,
                activeIndex: c,
              }),
                s.initialized && m(s),
                s.emit('activeIndexChange'),
                s.emit('snapIndexChange'),
                (s.initialized || s.params.runCallbacksOnInit) &&
                  (o !== i && s.emit('realIndexChange'), s.emit('slideChange'));
            },
            updateClickedSlide: function (e, t) {
              let i;
              let s = this.params,
                r = e.closest(`.${s.slideClass}, swiper-slide`);
              !r &&
                this.isElement &&
                t &&
                t.length > 1 &&
                t.includes(e) &&
                [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
                  !r && e.matches && e.matches(`.${s.slideClass}, swiper-slide`) && (r = e);
                });
              let a = !1;
              if (r) {
                for (let e = 0; e < this.slides.length; e += 1)
                  if (this.slides[e] === r) {
                    (a = !0), (i = e);
                    break;
                  }
              }
              if (r && a)
                (this.clickedSlide = r),
                  this.virtual && this.params.virtual.enabled
                    ? (this.clickedIndex = parseInt(r.getAttribute('data-swiper-slide-index'), 10))
                    : (this.clickedIndex = i);
              else {
                (this.clickedSlide = void 0), (this.clickedIndex = void 0);
                return;
              }
              s.slideToClickedSlide &&
                void 0 !== this.clickedIndex &&
                this.clickedIndex !== this.activeIndex &&
                this.slideToClickedSlide();
            },
          },
          translate: {
            getTranslate: function (e) {
              void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
              let { params: t, rtlTranslate: i, translate: s, wrapperEl: r } = this;
              if (t.virtualTranslate) return i ? -s : s;
              if (t.cssMode) return s;
              let a = (0, o.j)(r, e);
              return (a += this.cssOverflowAdjustment()), i && (a = -a), a || 0;
            },
            setTranslate: function (e, t) {
              let { rtlTranslate: i, params: s, wrapperEl: r, progress: a } = this,
                l = 0,
                n = 0;
              this.isHorizontal() ? (l = i ? -e : e) : (n = e),
                s.roundLengths && ((l = Math.floor(l)), (n = Math.floor(n))),
                (this.previousTranslate = this.translate),
                (this.translate = this.isHorizontal() ? l : n),
                s.cssMode
                  ? (r[this.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = this.isHorizontal() ? -l : -n)
                  : s.virtualTranslate ||
                    (this.isHorizontal() ? (l -= this.cssOverflowAdjustment()) : (n -= this.cssOverflowAdjustment()),
                    (r.style.transform = `translate3d(${l}px, ${n}px, 0px)`));
              let o = this.maxTranslate() - this.minTranslate();
              (0 === o ? 0 : (e - this.minTranslate()) / o) !== a && this.updateProgress(e),
                this.emit('setTranslate', this.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, t, i, s, r) {
              let a;
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                void 0 === s && (s = !0);
              let l = this,
                { params: n, wrapperEl: d } = l;
              if (l.animating && n.preventInteractionOnTransition) return !1;
              let c = l.minTranslate(),
                p = l.maxTranslate();
              if (((a = s && e > c ? c : s && e < p ? p : e), l.updateProgress(a), n.cssMode)) {
                let e = l.isHorizontal();
                if (0 === t) d[e ? 'scrollLeft' : 'scrollTop'] = -a;
                else {
                  if (!l.support.smoothScroll)
                    return (0, o.t)({ swiper: l, targetPosition: -a, side: e ? 'left' : 'top' }), !0;
                  d.scrollTo({ [e ? 'left' : 'top']: -a, behavior: 'smooth' });
                }
                return !0;
              }
              return (
                0 === t
                  ? (l.setTransition(0),
                    l.setTranslate(a),
                    i && (l.emit('beforeTransitionStart', t, r), l.emit('transitionEnd')))
                  : (l.setTransition(t),
                    l.setTranslate(a),
                    i && (l.emit('beforeTransitionStart', t, r), l.emit('transitionStart')),
                    l.animating ||
                      ((l.animating = !0),
                      l.onTranslateToWrapperTransitionEnd ||
                        (l.onTranslateToWrapperTransitionEnd = function (e) {
                          l &&
                            !l.destroyed &&
                            e.target === this &&
                            (l.wrapperEl.removeEventListener('transitionend', l.onTranslateToWrapperTransitionEnd),
                            (l.onTranslateToWrapperTransitionEnd = null),
                            delete l.onTranslateToWrapperTransitionEnd,
                            (l.animating = !1),
                            i && l.emit('transitionEnd'));
                        }),
                      l.wrapperEl.addEventListener('transitionend', l.onTranslateToWrapperTransitionEnd))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              this.params.cssMode ||
                ((this.wrapperEl.style.transitionDuration = `${e}ms`),
                (this.wrapperEl.style.transitionDelay = 0 === e ? '0ms' : '')),
                this.emit('setTransition', e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              i.cssMode ||
                (i.autoHeight && this.updateAutoHeight(),
                g({ swiper: this, runCallbacks: e, direction: t, step: 'Start' }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              (this.animating = !1),
                i.cssMode || (this.setTransition(0), g({ swiper: this, runCallbacks: e, direction: t, step: 'End' }));
            },
          },
          slide: {
            slideTo: function (e, t, i, s, r) {
              let a;
              void 0 === e && (e = 0), void 0 === i && (i = !0), 'string' == typeof e && (e = parseInt(e, 10));
              let l = this,
                n = e;
              n < 0 && (n = 0);
              let {
                params: d,
                snapGrid: c,
                slidesGrid: p,
                previousIndex: u,
                activeIndex: h,
                rtlTranslate: f,
                wrapperEl: m,
                enabled: g,
              } = l;
              if ((!g && !s && !r) || l.destroyed || (l.animating && d.preventInteractionOnTransition)) return !1;
              void 0 === t && (t = l.params.speed);
              let v = Math.min(l.params.slidesPerGroupSkip, n),
                w = v + Math.floor((n - v) / l.params.slidesPerGroup);
              w >= c.length && (w = c.length - 1);
              let b = -c[w];
              if (d.normalizeSlideIndex)
                for (let e = 0; e < p.length; e += 1) {
                  let t = -Math.floor(100 * b),
                    i = Math.floor(100 * p[e]),
                    s = Math.floor(100 * p[e + 1]);
                  void 0 !== p[e + 1]
                    ? t >= i && t < s - (s - i) / 2
                      ? (n = e)
                      : t >= i && t < s && (n = e + 1)
                    : t >= i && (n = e);
                }
              if (
                l.initialized &&
                n !== h &&
                ((!l.allowSlideNext &&
                  (f ? b > l.translate && b > l.minTranslate() : b < l.translate && b < l.minTranslate())) ||
                  (!l.allowSlidePrev && b > l.translate && b > l.maxTranslate() && (h || 0) !== n))
              )
                return !1;
              n !== (u || 0) && i && l.emit('beforeSlideChangeStart'),
                l.updateProgress(b),
                (a = n > h ? 'next' : n < h ? 'prev' : 'reset');
              let S = l.virtual && l.params.virtual.enabled;
              if (!(S && r) && ((f && -b === l.translate) || (!f && b === l.translate)))
                return (
                  l.updateActiveIndex(n),
                  d.autoHeight && l.updateAutoHeight(),
                  l.updateSlidesClasses(),
                  'slide' !== d.effect && l.setTranslate(b),
                  'reset' !== a && (l.transitionStart(i, a), l.transitionEnd(i, a)),
                  !1
                );
              if (d.cssMode) {
                let e = l.isHorizontal(),
                  i = f ? b : -b;
                if (0 === t)
                  S && ((l.wrapperEl.style.scrollSnapType = 'none'), (l._immediateVirtual = !0)),
                    S && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
                      ? ((l._cssModeVirtualInitialSet = !0),
                        requestAnimationFrame(() => {
                          m[e ? 'scrollLeft' : 'scrollTop'] = i;
                        }))
                      : (m[e ? 'scrollLeft' : 'scrollTop'] = i),
                    S &&
                      requestAnimationFrame(() => {
                        (l.wrapperEl.style.scrollSnapType = ''), (l._immediateVirtual = !1);
                      });
                else {
                  if (!l.support.smoothScroll)
                    return (0, o.t)({ swiper: l, targetPosition: i, side: e ? 'left' : 'top' }), !0;
                  m.scrollTo({ [e ? 'left' : 'top']: i, behavior: 'smooth' });
                }
                return !0;
              }
              return (
                l.setTransition(t),
                l.setTranslate(b),
                l.updateActiveIndex(n),
                l.updateSlidesClasses(),
                l.emit('beforeTransitionStart', t, s),
                l.transitionStart(i, a),
                0 === t
                  ? l.transitionEnd(i, a)
                  : l.animating ||
                    ((l.animating = !0),
                    l.onSlideToWrapperTransitionEnd ||
                      (l.onSlideToWrapperTransitionEnd = function (e) {
                        l &&
                          !l.destroyed &&
                          e.target === this &&
                          (l.wrapperEl.removeEventListener('transitionend', l.onSlideToWrapperTransitionEnd),
                          (l.onSlideToWrapperTransitionEnd = null),
                          delete l.onSlideToWrapperTransitionEnd,
                          l.transitionEnd(i, a));
                      }),
                    l.wrapperEl.addEventListener('transitionend', l.onSlideToWrapperTransitionEnd)),
                !0
              );
            },
            slideToLoop: function (e, t, i, s) {
              void 0 === e && (e = 0), void 0 === i && (i = !0), 'string' == typeof e && (e = parseInt(e, 10));
              let r = this;
              if (r.destroyed) return;
              void 0 === t && (t = r.params.speed);
              let a = r.grid && r.params.grid && r.params.grid.rows > 1,
                l = e;
              if (r.params.loop) {
                if (r.virtual && r.params.virtual.enabled) l += r.virtual.slidesBefore;
                else {
                  let e;
                  if (a) {
                    let t = l * r.params.grid.rows;
                    e = r.slides.filter((e) => 1 * e.getAttribute('data-swiper-slide-index') === t)[0].column;
                  } else e = r.getSlideIndexByData(l);
                  let t = a ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
                    { centeredSlides: i } = r.params,
                    n = r.params.slidesPerView;
                  'auto' === n
                    ? (n = r.slidesPerViewDynamic())
                    : ((n = Math.ceil(parseFloat(r.params.slidesPerView, 10))), i && n % 2 == 0 && (n += 1));
                  let o = t - e < n;
                  if (
                    (i && (o = o || e < Math.ceil(n / 2)),
                    s && i && 'auto' !== r.params.slidesPerView && !a && (o = !1),
                    o)
                  ) {
                    let s = i
                      ? e < r.activeIndex
                        ? 'prev'
                        : 'next'
                      : e - r.activeIndex - 1 < r.params.slidesPerView
                        ? 'next'
                        : 'prev';
                    r.loopFix({
                      direction: s,
                      slideTo: !0,
                      activeSlideIndex: 'next' === s ? e + 1 : e - t + 1,
                      slideRealIndex: 'next' === s ? r.realIndex : void 0,
                    });
                  }
                  if (a) {
                    let e = l * r.params.grid.rows;
                    l = r.slides.filter((t) => 1 * t.getAttribute('data-swiper-slide-index') === e)[0].column;
                  } else l = r.getSlideIndexByData(l);
                }
              }
              return (
                requestAnimationFrame(() => {
                  r.slideTo(l, t, i, s);
                }),
                r
              );
            },
            slideNext: function (e, t, i) {
              void 0 === t && (t = !0);
              let s = this,
                { enabled: r, params: a, animating: l } = s;
              if (!r || s.destroyed) return s;
              void 0 === e && (e = s.params.speed);
              let n = a.slidesPerGroup;
              'auto' === a.slidesPerView &&
                1 === a.slidesPerGroup &&
                a.slidesPerGroupAuto &&
                (n = Math.max(s.slidesPerViewDynamic('current', !0), 1));
              let o = s.activeIndex < a.slidesPerGroupSkip ? 1 : n,
                d = s.virtual && a.virtual.enabled;
              if (a.loop) {
                if (l && !d && a.loopPreventsSliding) return !1;
                if (
                  (s.loopFix({ direction: 'next' }),
                  (s._clientLeft = s.wrapperEl.clientLeft),
                  s.activeIndex === s.slides.length - 1 && a.cssMode)
                )
                  return (
                    requestAnimationFrame(() => {
                      s.slideTo(s.activeIndex + o, e, t, i);
                    }),
                    !0
                  );
              }
              return a.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i);
            },
            slidePrev: function (e, t, i) {
              void 0 === t && (t = !0);
              let s = this,
                { params: r, snapGrid: a, slidesGrid: l, rtlTranslate: n, enabled: o, animating: d } = s;
              if (!o || s.destroyed) return s;
              void 0 === e && (e = s.params.speed);
              let c = s.virtual && r.virtual.enabled;
              if (r.loop) {
                if (d && !c && r.loopPreventsSliding) return !1;
                s.loopFix({ direction: 'prev' }), (s._clientLeft = s.wrapperEl.clientLeft);
              }
              function p(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              let u = p(n ? s.translate : -s.translate),
                h = a.map((e) => p(e)),
                f = a[h.indexOf(u) - 1];
              if (void 0 === f && r.cssMode) {
                let e;
                a.forEach((t, i) => {
                  u >= t && (e = i);
                }),
                  void 0 !== e && (f = a[e > 0 ? e - 1 : e]);
              }
              let m = 0;
              if (
                (void 0 !== f &&
                  ((m = l.indexOf(f)) < 0 && (m = s.activeIndex - 1),
                  'auto' === r.slidesPerView &&
                    1 === r.slidesPerGroup &&
                    r.slidesPerGroupAuto &&
                    (m = Math.max((m = m - s.slidesPerViewDynamic('previous', !0) + 1), 0))),
                r.rewind && s.isBeginning)
              ) {
                let r =
                  s.params.virtual && s.params.virtual.enabled && s.virtual
                    ? s.virtual.slides.length - 1
                    : s.slides.length - 1;
                return s.slideTo(r, e, t, i);
              }
              return r.loop && 0 === s.activeIndex && r.cssMode
                ? (requestAnimationFrame(() => {
                    s.slideTo(m, e, t, i);
                  }),
                  !0)
                : s.slideTo(m, e, t, i);
            },
            slideReset: function (e, t, i) {
              if ((void 0 === t && (t = !0), !this.destroyed))
                return void 0 === e && (e = this.params.speed), this.slideTo(this.activeIndex, e, t, i);
            },
            slideToClosest: function (e, t, i, s) {
              if ((void 0 === t && (t = !0), void 0 === s && (s = 0.5), this.destroyed)) return;
              void 0 === e && (e = this.params.speed);
              let r = this.activeIndex,
                a = Math.min(this.params.slidesPerGroupSkip, r),
                l = a + Math.floor((r - a) / this.params.slidesPerGroup),
                n = this.rtlTranslate ? this.translate : -this.translate;
              if (n >= this.snapGrid[l]) {
                let e = this.snapGrid[l];
                n - e > (this.snapGrid[l + 1] - e) * s && (r += this.params.slidesPerGroup);
              } else {
                let e = this.snapGrid[l - 1];
                n - e <= (this.snapGrid[l] - e) * s && (r -= this.params.slidesPerGroup);
              }
              return (r = Math.min((r = Math.max(r, 0)), this.slidesGrid.length - 1)), this.slideTo(r, e, t, i);
            },
            slideToClickedSlide: function () {
              let e;
              let t = this;
              if (t.destroyed) return;
              let { params: i, slidesEl: s } = t,
                r = 'auto' === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                a = t.clickedIndex,
                l = t.isElement ? 'swiper-slide' : `.${i.slideClass}`;
              if (i.loop) {
                if (t.animating) return;
                (e = parseInt(t.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
                  i.centeredSlides
                    ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2
                      ? (t.loopFix(),
                        (a = t.getSlideIndex((0, o.e)(s, `${l}[data-swiper-slide-index="${e}"]`)[0])),
                        (0, o.n)(() => {
                          t.slideTo(a);
                        }))
                      : t.slideTo(a)
                    : a > t.slides.length - r
                      ? (t.loopFix(),
                        (a = t.getSlideIndex((0, o.e)(s, `${l}[data-swiper-slide-index="${e}"]`)[0])),
                        (0, o.n)(() => {
                          t.slideTo(a);
                        }))
                      : t.slideTo(a);
              } else t.slideTo(a);
            },
          },
          loop: {
            loopCreate: function (e) {
              let t = this,
                { params: i, slidesEl: s } = t;
              if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
              let r = t.grid && i.grid && i.grid.rows > 1,
                a = i.slidesPerGroup * (r ? i.grid.rows : 1),
                l = t.slides.length % a != 0,
                n = r && t.slides.length % i.grid.rows != 0,
                d = (e) => {
                  for (let s = 0; s < e; s += 1) {
                    let e = t.isElement
                      ? (0, o.c)('swiper-slide', [i.slideBlankClass])
                      : (0, o.c)('div', [i.slideClass, i.slideBlankClass]);
                    t.slidesEl.append(e);
                  }
                };
              l
                ? i.loopAddBlankSlides
                  ? (d(a - (t.slides.length % a)), t.recalcSlides(), t.updateSlides())
                  : (0, o.u)(
                      'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
                    )
                : n &&
                  (i.loopAddBlankSlides
                    ? (d(i.grid.rows - (t.slides.length % i.grid.rows)), t.recalcSlides(), t.updateSlides())
                    : (0, o.u)(
                        'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
                      )),
                (0, o.e)(s, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
                  e.setAttribute('data-swiper-slide-index', t);
                }),
                t.loopFix({ slideRealIndex: e, direction: i.centeredSlides ? void 0 : 'next' });
            },
            loopFix: function (e) {
              let {
                  slideRealIndex: t,
                  slideTo: i = !0,
                  direction: s,
                  setTranslate: r,
                  activeSlideIndex: a,
                  byController: l,
                  byMousewheel: n,
                } = void 0 === e ? {} : e,
                d = this;
              if (!d.params.loop) return;
              d.emit('beforeLoopFix');
              let { slides: c, allowSlidePrev: p, allowSlideNext: u, slidesEl: h, params: f } = d,
                { centeredSlides: m } = f;
              if (((d.allowSlidePrev = !0), (d.allowSlideNext = !0), d.virtual && f.virtual.enabled)) {
                i &&
                  (f.centeredSlides || 0 !== d.snapIndex
                    ? f.centeredSlides && d.snapIndex < f.slidesPerView
                      ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0)
                      : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0)
                    : d.slideTo(d.virtual.slides.length, 0, !1, !0)),
                  (d.allowSlidePrev = p),
                  (d.allowSlideNext = u),
                  d.emit('loopFix');
                return;
              }
              let g = f.slidesPerView;
              'auto' === g
                ? (g = d.slidesPerViewDynamic())
                : ((g = Math.ceil(parseFloat(f.slidesPerView, 10))), m && g % 2 == 0 && (g += 1));
              let v = f.slidesPerGroupAuto ? g : f.slidesPerGroup,
                w = v;
              w % v != 0 && (w += v - (w % v)), (w += f.loopAdditionalSlides), (d.loopedSlides = w);
              let b = d.grid && f.grid && f.grid.rows > 1;
              c.length < g + w
                ? (0, o.u)(
                    'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
                  )
                : b &&
                  'row' === f.grid.fill &&
                  (0, o.u)('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
              let S = [],
                y = [],
                E = d.activeIndex;
              void 0 === a
                ? (a = d.getSlideIndex(c.filter((e) => e.classList.contains(f.slideActiveClass))[0]))
                : (E = a);
              let T = 'next' === s || !s,
                x = 'prev' === s || !s,
                C = 0,
                M = 0,
                P = b ? Math.ceil(c.length / f.grid.rows) : c.length,
                L = (b ? c[a].column : a) + (m && void 0 === r ? -g / 2 + 0.5 : 0);
              if (L < w) {
                C = Math.max(w - L, v);
                for (let e = 0; e < w - L; e += 1) {
                  let t = e - Math.floor(e / P) * P;
                  if (b) {
                    let e = P - t - 1;
                    for (let t = c.length - 1; t >= 0; t -= 1) c[t].column === e && S.push(t);
                  } else S.push(P - t - 1);
                }
              } else if (L + g > P - w) {
                M = Math.max(L - (P - 2 * w), v);
                for (let e = 0; e < M; e += 1) {
                  let t = e - Math.floor(e / P) * P;
                  b
                    ? c.forEach((e, i) => {
                        e.column === t && y.push(i);
                      })
                    : y.push(t);
                }
              }
              if (
                ((d.__preventObserver__ = !0),
                requestAnimationFrame(() => {
                  d.__preventObserver__ = !1;
                }),
                x &&
                  S.forEach((e) => {
                    (c[e].swiperLoopMoveDOM = !0), h.prepend(c[e]), (c[e].swiperLoopMoveDOM = !1);
                  }),
                T &&
                  y.forEach((e) => {
                    (c[e].swiperLoopMoveDOM = !0), h.append(c[e]), (c[e].swiperLoopMoveDOM = !1);
                  }),
                d.recalcSlides(),
                'auto' === f.slidesPerView
                  ? d.updateSlides()
                  : b &&
                    ((S.length > 0 && x) || (y.length > 0 && T)) &&
                    d.slides.forEach((e, t) => {
                      d.grid.updateSlide(t, e, d.slides);
                    }),
                f.watchSlidesProgress && d.updateSlidesOffset(),
                i)
              ) {
                if (S.length > 0 && x) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[E],
                      t = d.slidesGrid[E + C] - e;
                    n
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(E + Math.ceil(C), 0, !1, !0),
                        r &&
                          ((d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t)));
                  } else if (r) {
                    let e = b ? S.length / f.grid.rows : S.length;
                    d.slideTo(d.activeIndex + e, 0, !1, !0), (d.touchEventsData.currentTranslate = d.translate);
                  }
                } else if (y.length > 0 && T) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[E],
                      t = d.slidesGrid[E - M] - e;
                    n
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(E - M, 0, !1, !0),
                        r &&
                          ((d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t)));
                  } else {
                    let e = b ? y.length / f.grid.rows : y.length;
                    d.slideTo(d.activeIndex - e, 0, !1, !0);
                  }
                }
              }
              if (((d.allowSlidePrev = p), (d.allowSlideNext = u), d.controller && d.controller.control && !l)) {
                let e = { slideRealIndex: t, direction: s, setTranslate: r, activeSlideIndex: a, byController: !0 };
                Array.isArray(d.controller.control)
                  ? d.controller.control.forEach((t) => {
                      !t.destroyed &&
                        t.params.loop &&
                        t.loopFix({ ...e, slideTo: t.params.slidesPerView === f.slidesPerView && i });
                    })
                  : d.controller.control instanceof d.constructor &&
                    d.controller.control.params.loop &&
                    d.controller.control.loopFix({
                      ...e,
                      slideTo: d.controller.control.params.slidesPerView === f.slidesPerView && i,
                    });
              }
              d.emit('loopFix');
            },
            loopDestroy: function () {
              let { params: e, slidesEl: t } = this;
              if (!e.loop || (this.virtual && this.params.virtual.enabled)) return;
              this.recalcSlides();
              let i = [];
              this.slides.forEach((e) => {
                i[void 0 === e.swiperSlideIndex ? 1 * e.getAttribute('data-swiper-slide-index') : e.swiperSlideIndex] =
                  e;
              }),
                this.slides.forEach((e) => {
                  e.removeAttribute('data-swiper-slide-index');
                }),
                i.forEach((e) => {
                  t.append(e);
                }),
                this.recalcSlides(),
                this.slideTo(this.realIndex, 0);
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              let t = this;
              if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return;
              let i = 'container' === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0),
                (i.style.cursor = 'move'),
                (i.style.cursor = e ? 'grabbing' : 'grab'),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1;
                  });
            },
            unsetGrabCursor: function () {
              let e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e['container' === e.params.touchEventsTarget ? 'el' : 'wrapperEl'].style.cursor = ''),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              let { params: e } = this;
              (this.onTouchStart = w.bind(this)),
                (this.onTouchMove = b.bind(this)),
                (this.onTouchEnd = S.bind(this)),
                (this.onDocumentTouchStart = C.bind(this)),
                e.cssMode && (this.onScroll = T.bind(this)),
                (this.onClick = E.bind(this)),
                (this.onLoad = x.bind(this)),
                M(this, 'on');
            },
            detachEvents: function () {
              M(this, 'off');
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              let e = this,
                { realIndex: t, initialized: i, params: s, el: r } = e,
                a = s.breakpoints;
              if (!a || (a && 0 === Object.keys(a).length)) return;
              let l = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
              if (!l || e.currentBreakpoint === l) return;
              let n = (l in a ? a[l] : void 0) || e.originalParams,
                d = P(e, s),
                c = P(e, n),
                p = e.params.grabCursor,
                u = n.grabCursor,
                h = s.enabled;
              d && !c
                ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`),
                  e.emitContainerClasses())
                : !d &&
                  c &&
                  (r.classList.add(`${s.containerModifierClass}grid`),
                  ((n.grid.fill && 'column' === n.grid.fill) || (!n.grid.fill && 'column' === s.grid.fill)) &&
                    r.classList.add(`${s.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
                p && !u ? e.unsetGrabCursor() : !p && u && e.setGrabCursor(),
                ['navigation', 'pagination', 'scrollbar'].forEach((t) => {
                  if (void 0 === n[t]) return;
                  let i = s[t] && s[t].enabled,
                    r = n[t] && n[t].enabled;
                  i && !r && e[t].disable(), !i && r && e[t].enable();
                });
              let f = n.direction && n.direction !== s.direction,
                m = s.loop && (n.slidesPerView !== s.slidesPerView || f),
                g = s.loop;
              f && i && e.changeDirection(), (0, o.w)(e.params, n);
              let v = e.params.enabled,
                w = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                h && !v ? e.disable() : !h && v && e.enable(),
                (e.currentBreakpoint = l),
                e.emit('_beforeBreakpoint', n),
                i &&
                  (m
                    ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                    : !g && w
                      ? (e.loopCreate(t), e.updateSlides())
                      : g && !w && e.loopDestroy()),
                e.emit('breakpoint', n);
            },
            getBreakpoint: function (e, t, i) {
              if ((void 0 === t && (t = 'window'), !e || ('container' === t && !i))) return;
              let s = !1,
                r = (0, n.a)(),
                a = 'window' === t ? r.innerHeight : i.clientHeight,
                l = Object.keys(e).map((e) =>
                  'string' == typeof e && 0 === e.indexOf('@')
                    ? { value: a * parseFloat(e.substr(1)), point: e }
                    : { value: e, point: e }
                );
              l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < l.length; e += 1) {
                let { point: a, value: n } = l[e];
                'window' === t ? r.matchMedia(`(min-width: ${n}px)`).matches && (s = a) : n <= i.clientWidth && (s = a);
              }
              return s || 'max';
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              let { isLocked: e, params: t } = this,
                { slidesOffsetBefore: i } = t;
              if (i) {
                let e = this.slides.length - 1,
                  t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                this.isLocked = this.size > t;
              } else this.isLocked = 1 === this.snapGrid.length;
              !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked),
                !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked),
                e && e !== this.isLocked && (this.isEnd = !1),
                e !== this.isLocked && this.emit(this.isLocked ? 'lock' : 'unlock');
            },
          },
          classes: {
            addClasses: function () {
              let { classNames: e, params: t, rtl: i, el: s, device: r } = this,
                a = (function (e, t) {
                  let i = [];
                  return (
                    e.forEach((e) => {
                      'object' == typeof e
                        ? Object.keys(e).forEach((s) => {
                            e[s] && i.push(t + s);
                          })
                        : 'string' == typeof e && i.push(t + e);
                    }),
                    i
                  );
                })(
                  [
                    'initialized',
                    t.direction,
                    { 'free-mode': this.params.freeMode && t.freeMode.enabled },
                    { autoheight: t.autoHeight },
                    { rtl: i },
                    { grid: t.grid && t.grid.rows > 1 },
                    { 'grid-column': t.grid && t.grid.rows > 1 && 'column' === t.grid.fill },
                    { android: r.android },
                    { ios: r.ios },
                    { 'css-mode': t.cssMode },
                    { centered: t.cssMode && t.centeredSlides },
                    { 'watch-progress': t.watchSlidesProgress },
                  ],
                  t.containerModifierClass
                );
              e.push(...a), s.classList.add(...e), this.emitContainerClasses();
            },
            removeClasses: function () {
              let { el: e, classNames: t } = this;
              e && 'string' != typeof e && (e.classList.remove(...t), this.emitContainerClasses());
            },
          },
        },
        O = {};
      class A {
        constructor() {
          let e, t;
          for (var i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          1 === s.length && s[0].constructor && 'Object' === Object.prototype.toString.call(s[0]).slice(8, -1)
            ? (t = s[0])
            : ([e, t] = s),
            t || (t = {}),
            (t = (0, o.w)({}, t)),
            e && !t.el && (t.el = e);
          let l = (0, n.g)();
          if (t.el && 'string' == typeof t.el && l.querySelectorAll(t.el).length > 1) {
            let e = [];
            return (
              l.querySelectorAll(t.el).forEach((i) => {
                let s = (0, o.w)({}, t, { el: i });
                e.push(new A(s));
              }),
              e
            );
          }
          let p = this;
          (p.__swiper__ = !0),
            (p.support = d()),
            (p.device = c({ userAgent: t.userAgent })),
            (p.browser =
              (a ||
                (a = (function () {
                  let e = (0, n.a)(),
                    t = c(),
                    i = !1;
                  function s() {
                    let t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf('safari') >= 0 && 0 > t.indexOf('chrome') && 0 > t.indexOf('android');
                  }
                  if (s()) {
                    let t = String(e.navigator.userAgent);
                    if (t.includes('Version/')) {
                      let [e, s] = t
                        .split('Version/')[1]
                        .split(' ')[0]
                        .split('.')
                        .map((e) => Number(e));
                      i = e < 16 || (16 === e && s < 2);
                    }
                  }
                  let r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                    a = s(),
                    l = a || (r && t.ios);
                  return { isSafari: i || a, needPerspectiveFix: i, need3dFix: l, isWebView: r };
                })()),
              a)),
            (p.eventsListeners = {}),
            (p.eventsAnyListeners = []),
            (p.modules = [...p.__modules__]),
            t.modules && Array.isArray(t.modules) && p.modules.push(...t.modules);
          let u = {};
          p.modules.forEach((e) => {
            var i;
            e({
              params: t,
              swiper: p,
              extendParams:
                ((i = t),
                function (e) {
                  void 0 === e && (e = {});
                  let t = Object.keys(e)[0],
                    s = e[t];
                  if (
                    'object' != typeof s ||
                    null === s ||
                    (!0 === i[t] && (i[t] = { enabled: !0 }),
                    'navigation' === t && i[t] && i[t].enabled && !i[t].prevEl && !i[t].nextEl && (i[t].auto = !0),
                    ['pagination', 'scrollbar'].indexOf(t) >= 0 && i[t] && i[t].enabled && !i[t].el && (i[t].auto = !0),
                    !(t in i && 'enabled' in s))
                  ) {
                    (0, o.w)(u, e);
                    return;
                  }
                  'object' != typeof i[t] || 'enabled' in i[t] || (i[t].enabled = !0),
                    i[t] || (i[t] = { enabled: !1 }),
                    (0, o.w)(u, e);
                }),
              on: p.on.bind(p),
              once: p.once.bind(p),
              off: p.off.bind(p),
              emit: p.emit.bind(p),
            });
          });
          let h = (0, o.w)({}, L, u);
          return (
            (p.params = (0, o.w)({}, h, O, t)),
            (p.originalParams = (0, o.w)({}, p.params)),
            (p.passedParams = (0, o.w)({}, t)),
            p.params &&
              p.params.on &&
              Object.keys(p.params.on).forEach((e) => {
                p.on(e, p.params.on[e]);
              }),
            p.params && p.params.onAny && p.onAny(p.params.onAny),
            Object.assign(p, {
              enabled: p.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => 'horizontal' === p.params.direction,
              isVertical: () => 'vertical' === p.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return 8388608 * Math.trunc(this.translate / 8388608);
              },
              allowSlideNext: p.params.allowSlideNext,
              allowSlidePrev: p.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: p.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: p.params.allowTouchMove,
              touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            p.emit('_swiper'),
            p.params.init && p.init(),
            p
          );
        }
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: 'height',
                'margin-top': 'margin-left',
                'margin-bottom ': 'margin-right',
                'margin-left': 'margin-top',
                'margin-right': 'margin-bottom',
                'padding-left': 'padding-top',
                'padding-right': 'padding-bottom',
                marginRight: 'marginBottom',
              }[e];
        }
        getSlideIndex(e) {
          let { slidesEl: t, params: i } = this,
            s = (0, o.e)(t, `.${i.slideClass}, swiper-slide`),
            r = (0, o.h)(s[0]);
          return (0, o.h)(e) - r;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(this.slides.filter((t) => 1 * t.getAttribute('data-swiper-slide-index') === e)[0]);
        }
        recalcSlides() {
          let { slidesEl: e, params: t } = this;
          this.slides = (0, o.e)(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
          this.enabled || ((this.enabled = !0), this.params.grabCursor && this.setGrabCursor(), this.emit('enable'));
        }
        disable() {
          this.enabled && ((this.enabled = !1), this.params.grabCursor && this.unsetGrabCursor(), this.emit('disable'));
        }
        setProgress(e, t) {
          e = Math.min(Math.max(e, 0), 1);
          let i = this.minTranslate(),
            s = (this.maxTranslate() - i) * e + i;
          this.translateTo(s, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses();
        }
        emitContainerClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = e.el.className
            .split(' ')
            .filter((t) => 0 === t.indexOf('swiper') || 0 === t.indexOf(e.params.containerModifierClass));
          e.emit('_containerClasses', t.join(' '));
        }
        getSlideClasses(e) {
          let t = this;
          return t.destroyed
            ? ''
            : e.className
                .split(' ')
                .filter((e) => 0 === e.indexOf('swiper-slide') || 0 === e.indexOf(t.params.slideClass))
                .join(' ');
        }
        emitSlidesClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = [];
          e.slides.forEach((i) => {
            let s = e.getSlideClasses(i);
            t.push({ slideEl: i, classNames: s }), e.emit('_slideClass', i, s);
          }),
            e.emit('_slideClasses', t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = 'current'), void 0 === t && (t = !1);
          let { params: i, slides: s, slidesGrid: r, slidesSizesGrid: a, size: l, activeIndex: n } = this,
            o = 1;
          if ('number' == typeof i.slidesPerView) return i.slidesPerView;
          if (i.centeredSlides) {
            let e,
              t = s[n] ? Math.ceil(s[n].swiperSlideSize) : 0;
            for (let i = n + 1; i < s.length; i += 1)
              s[i] && !e && ((t += Math.ceil(s[i].swiperSlideSize)), (o += 1), t > l && (e = !0));
            for (let i = n - 1; i >= 0; i -= 1)
              s[i] && !e && ((t += s[i].swiperSlideSize), (o += 1), t > l && (e = !0));
          } else if ('current' === e)
            for (let e = n + 1; e < s.length; e += 1) (t ? r[e] + a[e] - r[n] < l : r[e] - r[n] < l) && (o += 1);
          else for (let e = n - 1; e >= 0; e -= 1) r[n] - r[e] < l && (o += 1);
          return o;
        }
        update() {
          let e;
          let t = this;
          if (!t || t.destroyed) return;
          let { snapGrid: i, params: s } = t;
          function r() {
            let e = Math.min(
              Math.max(t.rtlTranslate ? -1 * t.translate : t.translate, t.maxTranslate()),
              t.minTranslate()
            );
            t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
          }
          if (
            (s.breakpoints && t.setBreakpoint(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete && h(t, e);
            }),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            s.freeMode && s.freeMode.enabled && !s.cssMode)
          )
            r(), s.autoHeight && t.updateAutoHeight();
          else {
            if (('auto' === s.slidesPerView || s.slidesPerView > 1) && t.isEnd && !s.centeredSlides) {
              let i = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
              e = t.slideTo(i.length - 1, 0, !1, !0);
            } else e = t.slideTo(t.activeIndex, 0, !1, !0);
            e || r();
          }
          s.watchOverflow && i !== t.snapGrid && t.checkOverflow(), t.emit('update');
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          let i = this.params.direction;
          return (
            e || (e = 'horizontal' === i ? 'vertical' : 'horizontal'),
            e === i ||
              ('horizontal' !== e && 'vertical' !== e) ||
              (this.el.classList.remove(`${this.params.containerModifierClass}${i}`),
              this.el.classList.add(`${this.params.containerModifierClass}${e}`),
              this.emitContainerClasses(),
              (this.params.direction = e),
              this.slides.forEach((t) => {
                'vertical' === e ? (t.style.width = '') : (t.style.height = '');
              }),
              this.emit('changeDirection'),
              t && this.update()),
            this
          );
        }
        changeLanguageDirection(e) {
          (!this.rtl || 'rtl' !== e) &&
            (this.rtl || 'ltr' !== e) &&
            ((this.rtl = 'rtl' === e),
            (this.rtlTranslate = 'horizontal' === this.params.direction && this.rtl),
            this.rtl
              ? (this.el.classList.add(`${this.params.containerModifierClass}rtl`), (this.el.dir = 'rtl'))
              : (this.el.classList.remove(`${this.params.containerModifierClass}rtl`), (this.el.dir = 'ltr')),
            this.update());
        }
        mount(e) {
          let t = this;
          if (t.mounted) return !0;
          let i = e || t.params.el;
          if (('string' == typeof i && (i = document.querySelector(i)), !i)) return !1;
          (i.swiper = t),
            i.parentNode &&
              i.parentNode.host &&
              i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() &&
              (t.isElement = !0);
          let s = () => `.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`,
            r = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(s()) : (0, o.e)(i, s())[0];
          return (
            !r &&
              t.params.createElements &&
              ((r = (0, o.c)('div', t.params.wrapperClass)),
              i.append(r),
              (0, o.e)(i, `.${t.params.slideClass}`).forEach((e) => {
                r.append(e);
              })),
            Object.assign(t, {
              el: i,
              wrapperEl: r,
              slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : r,
              hostEl: t.isElement ? i.parentNode.host : i,
              mounted: !0,
              rtl: 'rtl' === i.dir.toLowerCase() || 'rtl' === (0, o.p)(i, 'direction'),
              rtlTranslate:
                'horizontal' === t.params.direction &&
                ('rtl' === i.dir.toLowerCase() || 'rtl' === (0, o.p)(i, 'direction')),
              wrongRTL: '-webkit-box' === (0, o.p)(r, 'display'),
            }),
            !0
          );
        }
        init(e) {
          let t = this;
          if (t.initialized || !1 === t.mount(e)) return t;
          t.emit('beforeInit'),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0)
              : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
          let i = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement && i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            i.forEach((e) => {
              e.complete
                ? h(t, e)
                : e.addEventListener('load', (e) => {
                    h(t, e.target);
                  });
            }),
            m(t),
            (t.initialized = !0),
            m(t),
            t.emit('init'),
            t.emit('afterInit'),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          let i = this,
            { params: s, el: r, wrapperEl: a, slides: l } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit('beforeDestroy'),
              (i.initialized = !1),
              i.detachEvents(),
              s.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                r && 'string' != typeof r && r.removeAttribute('style'),
                a && a.removeAttribute('style'),
                l &&
                  l.length &&
                  l.forEach((e) => {
                    e.classList.remove(
                      s.slideVisibleClass,
                      s.slideFullyVisibleClass,
                      s.slideActiveClass,
                      s.slideNextClass,
                      s.slidePrevClass
                    ),
                      e.removeAttribute('style'),
                      e.removeAttribute('data-swiper-slide-index');
                  })),
              i.emit('destroy'),
              Object.keys(i.eventsListeners).forEach((e) => {
                i.off(e);
              }),
              !1 !== e && (i.el && 'string' != typeof i.el && (i.el.swiper = null), (0, o.x)(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          (0, o.w)(O, e);
        }
        static get extendedDefaults() {
          return O;
        }
        static get defaults() {
          return L;
        }
        static installModule(e) {
          A.prototype.__modules__ || (A.prototype.__modules__ = []);
          let t = A.prototype.__modules__;
          'function' == typeof e && 0 > t.indexOf(e) && t.push(e);
        }
        static use(e) {
          return Array.isArray(e) ? e.forEach((e) => A.installModule(e)) : A.installModule(e), A;
        }
      }
      Object.keys(k).forEach((e) => {
        Object.keys(k[e]).forEach((t) => {
          A.prototype[t] = k[e][t];
        });
      }),
        A.use([
          function (e) {
            let { swiper: t, on: i, emit: s } = e,
              r = (0, n.a)(),
              a = null,
              l = null,
              o = () => {
                t && !t.destroyed && t.initialized && (s('beforeResize'), s('resize'));
              },
              d = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (a = new ResizeObserver((e) => {
                    l = r.requestAnimationFrame(() => {
                      let { width: i, height: s } = t,
                        r = i,
                        a = s;
                      e.forEach((e) => {
                        let { contentBoxSize: i, contentRect: s, target: l } = e;
                        (l && l !== t.el) ||
                          ((r = s ? s.width : (i[0] || i).inlineSize), (a = s ? s.height : (i[0] || i).blockSize));
                      }),
                        (r !== i || a !== s) && o();
                    });
                  })).observe(t.el);
              },
              c = () => {
                l && r.cancelAnimationFrame(l), a && a.unobserve && t.el && (a.unobserve(t.el), (a = null));
              },
              p = () => {
                t && !t.destroyed && t.initialized && s('orientationchange');
              };
            i('init', () => {
              if (t.params.resizeObserver && void 0 !== r.ResizeObserver) {
                d();
                return;
              }
              r.addEventListener('resize', o), r.addEventListener('orientationchange', p);
            }),
              i('destroy', () => {
                c(), r.removeEventListener('resize', o), r.removeEventListener('orientationchange', p);
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s, emit: r } = e,
              a = [],
              l = (0, n.a)(),
              d = function (e, i) {
                void 0 === i && (i = {});
                let s = new (l.MutationObserver || l.WebkitMutationObserver)((e) => {
                  if (t.__preventObserver__) return;
                  if (1 === e.length) {
                    r('observerUpdate', e[0]);
                    return;
                  }
                  let i = function () {
                    r('observerUpdate', e[0]);
                  };
                  l.requestAnimationFrame ? l.requestAnimationFrame(i) : l.setTimeout(i, 0);
                });
                s.observe(e, {
                  attributes: void 0 === i.attributes || i.attributes,
                  childList: t.isElement || (void 0 === i.childList || i).childList,
                  characterData: void 0 === i.characterData || i.characterData,
                }),
                  a.push(s);
              };
            i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              s('init', () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    let e = (0, o.a)(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) d(e[t]);
                  }
                  d(t.hostEl, { childList: t.params.observeSlideChildren }), d(t.wrapperEl, { attributes: !1 });
                }
              }),
              s('destroy', () => {
                a.forEach((e) => {
                  e.disconnect();
                }),
                  a.splice(0, a.length);
              });
          },
        ]);
      let _ = [
        'eventsPrefix',
        'injectStyles',
        'injectStylesUrls',
        'modules',
        'init',
        '_direction',
        'oneWayMovement',
        'swiperElementNodeName',
        'touchEventsTarget',
        'initialSlide',
        '_speed',
        'cssMode',
        'updateOnWindowResize',
        'resizeObserver',
        'nested',
        'focusableElements',
        '_enabled',
        '_width',
        '_height',
        'preventInteractionOnTransition',
        'userAgent',
        'url',
        '_edgeSwipeDetection',
        '_edgeSwipeThreshold',
        '_freeMode',
        '_autoHeight',
        'setWrapperSize',
        'virtualTranslate',
        '_effect',
        'breakpoints',
        'breakpointsBase',
        '_spaceBetween',
        '_slidesPerView',
        'maxBackfaceHiddenSlides',
        '_grid',
        '_slidesPerGroup',
        '_slidesPerGroupSkip',
        '_slidesPerGroupAuto',
        '_centeredSlides',
        '_centeredSlidesBounds',
        '_slidesOffsetBefore',
        '_slidesOffsetAfter',
        'normalizeSlideIndex',
        '_centerInsufficientSlides',
        '_watchOverflow',
        'roundLengths',
        'touchRatio',
        'touchAngle',
        'simulateTouch',
        '_shortSwipes',
        '_longSwipes',
        'longSwipesRatio',
        'longSwipesMs',
        '_followFinger',
        'allowTouchMove',
        '_threshold',
        'touchMoveStopPropagation',
        'touchStartPreventDefault',
        'touchStartForcePreventDefault',
        'touchReleaseOnEdges',
        'uniqueNavElements',
        '_resistance',
        '_resistanceRatio',
        '_watchSlidesProgress',
        '_grabCursor',
        'preventClicks',
        'preventClicksPropagation',
        '_slideToClickedSlide',
        '_loop',
        'loopAdditionalSlides',
        'loopAddBlankSlides',
        'loopPreventsSliding',
        '_rewind',
        '_allowSlidePrev',
        '_allowSlideNext',
        '_swipeHandler',
        '_noSwiping',
        'noSwipingClass',
        'noSwipingSelector',
        'passiveListeners',
        'containerModifierClass',
        'slideClass',
        'slideActiveClass',
        'slideVisibleClass',
        'slideFullyVisibleClass',
        'slideNextClass',
        'slidePrevClass',
        'slideBlankClass',
        'wrapperClass',
        'lazyPreloaderClass',
        'lazyPreloadPrevNext',
        'runCallbacksOnInit',
        'observer',
        'observeParents',
        'observeSlideChildren',
        'a11y',
        '_autoplay',
        '_controller',
        'coverflowEffect',
        'cubeEffect',
        'fadeEffect',
        'flipEffect',
        'creativeEffect',
        'cardsEffect',
        'hashNavigation',
        'history',
        'keyboard',
        'mousewheel',
        '_navigation',
        '_pagination',
        'parallax',
        '_scrollbar',
        '_thumbs',
        'virtual',
        'zoom',
        'control',
      ];
      function I(e) {
        return (
          'object' == typeof e &&
          null !== e &&
          e.constructor &&
          'Object' === Object.prototype.toString.call(e).slice(8, -1) &&
          !e.__swiper__
        );
      }
      function z(e, t) {
        let i = ['__proto__', 'constructor', 'prototype'];
        Object.keys(t)
          .filter((e) => 0 > i.indexOf(e))
          .forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : I(t[i]) && I(e[i]) && Object.keys(t[i]).length > 0
                ? t[i].__swiper__
                  ? (e[i] = t[i])
                  : z(e[i], t[i])
                : (e[i] = t[i]);
          });
      }
      function $(e) {
        return (
          void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
        );
      }
      function D(e) {
        return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el;
      }
      function G(e) {
        return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el;
      }
      function N(e) {
        void 0 === e && (e = '');
        let t = e
            .split(' ')
            .map((e) => e.trim())
            .filter((e) => !!e),
          i = [];
        return (
          t.forEach((e) => {
            0 > i.indexOf(e) && i.push(e);
          }),
          i.join(' ')
        );
      }
      let B = (e) => {
        e &&
          !e.destroyed &&
          e.params.virtual &&
          (!e.params.virtual || e.params.virtual.enabled) &&
          (e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
      };
      function V() {
        return (V = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
              }
              return e;
            }).apply(this, arguments);
      }
      function F(e) {
        return e.type && e.type.displayName && e.type.displayName.includes('SwiperSlide');
      }
      function j(e, t) {
        return 'undefined' == typeof window ? (0, l.useEffect)(e, t) : (0, l.useLayoutEffect)(e, t);
      }
      let H = (0, l.createContext)(null),
        R = (0, l.createContext)(null),
        q = (0, l.forwardRef)(function (e, t) {
          var i;
          let {
              className: s,
              tag: r = 'div',
              wrapperTag: a = 'div',
              children: n,
              onSwiper: o,
              ...d
            } = void 0 === e ? {} : e,
            c = !1,
            [p, u] = (0, l.useState)('swiper'),
            [h, f] = (0, l.useState)(null),
            [m, g] = (0, l.useState)(!1),
            v = (0, l.useRef)(!1),
            w = (0, l.useRef)(null),
            b = (0, l.useRef)(null),
            S = (0, l.useRef)(null),
            y = (0, l.useRef)(null),
            E = (0, l.useRef)(null),
            T = (0, l.useRef)(null),
            x = (0, l.useRef)(null),
            C = (0, l.useRef)(null),
            {
              params: M,
              passedParams: P,
              rest: k,
              events: O,
            } = (function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = !0);
              let i = { on: {} },
                s = {},
                r = {};
              z(i, L), (i._emitClasses = !0), (i.init = !1);
              let a = {},
                l = _.map((e) => e.replace(/_/, ''));
              return (
                Object.keys(Object.assign({}, e)).forEach((n) => {
                  void 0 !== e[n] &&
                    (l.indexOf(n) >= 0
                      ? I(e[n])
                        ? ((i[n] = {}), (r[n] = {}), z(i[n], e[n]), z(r[n], e[n]))
                        : ((i[n] = e[n]), (r[n] = e[n]))
                      : 0 === n.search(/on[A-Z]/) && 'function' == typeof e[n]
                        ? t
                          ? (s[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n])
                          : (i.on[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n])
                        : (a[n] = e[n]));
                }),
                ['navigation', 'pagination', 'scrollbar'].forEach((e) => {
                  !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e];
                }),
                { params: i, passedParams: r, rest: a, events: s }
              );
            })(d),
            { slides: H, slots: q } = (function (e) {
              let t = [],
                i = { 'container-start': [], 'container-end': [], 'wrapper-start': [], 'wrapper-end': [] };
              return (
                l.Children.toArray(e).forEach((e) => {
                  if (F(e)) t.push(e);
                  else if (e.props && e.props.slot && i[e.props.slot]) i[e.props.slot].push(e);
                  else if (e.props && e.props.children) {
                    let s = (function e(t) {
                      let i = [];
                      return (
                        l.Children.toArray(t).forEach((t) => {
                          F(t)
                            ? i.push(t)
                            : t.props && t.props.children && e(t.props.children).forEach((e) => i.push(e));
                        }),
                        i
                      );
                    })(e.props.children);
                    s.length > 0 ? s.forEach((e) => t.push(e)) : i['container-end'].push(e);
                  } else i['container-end'].push(e);
                }),
                { slides: t, slots: i }
              );
            })(n),
            W = () => {
              g(!m);
            };
          Object.assign(M.on, {
            _containerClasses(e, t) {
              u(t);
            },
          });
          let Y = () => {
            Object.assign(M.on, O), (c = !0);
            let e = { ...M };
            if (
              (delete e.wrapperClass, (b.current = new A(e)), b.current.virtual && b.current.params.virtual.enabled)
            ) {
              b.current.virtual.slides = H;
              let e = { cache: !1, slides: H, renderExternal: f, renderExternalUpdate: !1 };
              z(b.current.params.virtual, e), z(b.current.originalParams.virtual, e);
            }
          };
          w.current || Y(), b.current && b.current.on('_beforeBreakpoint', W);
          let X = () => {
              !c &&
                O &&
                b.current &&
                Object.keys(O).forEach((e) => {
                  b.current.on(e, O[e]);
                });
            },
            U = () => {
              O &&
                b.current &&
                Object.keys(O).forEach((e) => {
                  b.current.off(e, O[e]);
                });
            };
          return (
            (0, l.useEffect)(() => () => {
              b.current && b.current.off('_beforeBreakpoint', W);
            }),
            (0, l.useEffect)(() => {
              !v.current && b.current && (b.current.emitSlidesClasses(), (v.current = !0));
            }),
            j(() => {
              if ((t && (t.current = w.current), w.current))
                return (
                  b.current.destroyed && Y(),
                  (function (e, t) {
                    let { el: i, nextEl: s, prevEl: r, paginationEl: a, scrollbarEl: l, swiper: n } = e;
                    $(t) &&
                      s &&
                      r &&
                      ((n.params.navigation.nextEl = s),
                      (n.originalParams.navigation.nextEl = s),
                      (n.params.navigation.prevEl = r),
                      (n.originalParams.navigation.prevEl = r)),
                      D(t) && a && ((n.params.pagination.el = a), (n.originalParams.pagination.el = a)),
                      G(t) && l && ((n.params.scrollbar.el = l), (n.originalParams.scrollbar.el = l)),
                      n.init(i);
                  })(
                    {
                      el: w.current,
                      nextEl: E.current,
                      prevEl: T.current,
                      paginationEl: x.current,
                      scrollbarEl: C.current,
                      swiper: b.current,
                    },
                    M
                  ),
                  o && !b.current.destroyed && o(b.current),
                  () => {
                    b.current && !b.current.destroyed && b.current.destroy(!0, !1);
                  }
                );
            }, []),
            j(() => {
              X();
              let e = (function (e, t, i, s, r) {
                let a = [];
                if (!t) return a;
                let l = (e) => {
                  0 > a.indexOf(e) && a.push(e);
                };
                if (i && s) {
                  let e = s.map(r),
                    t = i.map(r);
                  e.join('') !== t.join('') && l('children'), s.length !== i.length && l('children');
                }
                return (
                  _.filter((e) => '_' === e[0])
                    .map((e) => e.replace(/_/, ''))
                    .forEach((i) => {
                      if (i in e && i in t) {
                        if (I(e[i]) && I(t[i])) {
                          let s = Object.keys(e[i]),
                            r = Object.keys(t[i]);
                          s.length !== r.length
                            ? l(i)
                            : (s.forEach((s) => {
                                e[i][s] !== t[i][s] && l(i);
                              }),
                              r.forEach((s) => {
                                e[i][s] !== t[i][s] && l(i);
                              }));
                        } else e[i] !== t[i] && l(i);
                      }
                    }),
                  a
                );
              })(P, S.current, H, y.current, (e) => e.key);
              return (
                (S.current = P),
                (y.current = H),
                e.length &&
                  b.current &&
                  !b.current.destroyed &&
                  (function (e) {
                    let t,
                      i,
                      s,
                      r,
                      a,
                      l,
                      n,
                      o,
                      {
                        swiper: d,
                        slides: c,
                        passedParams: p,
                        changedParams: u,
                        nextEl: h,
                        prevEl: f,
                        scrollbarEl: m,
                        paginationEl: g,
                      } = e,
                      v = u.filter((e) => 'children' !== e && 'direction' !== e && 'wrapperClass' !== e),
                      { params: w, pagination: b, navigation: S, scrollbar: y, virtual: E, thumbs: T } = d;
                    u.includes('thumbs') && p.thumbs && p.thumbs.swiper && w.thumbs && !w.thumbs.swiper && (t = !0),
                      u.includes('controller') &&
                        p.controller &&
                        p.controller.control &&
                        w.controller &&
                        !w.controller.control &&
                        (i = !0),
                      u.includes('pagination') &&
                        p.pagination &&
                        (p.pagination.el || g) &&
                        (w.pagination || !1 === w.pagination) &&
                        b &&
                        !b.el &&
                        (s = !0),
                      u.includes('scrollbar') &&
                        p.scrollbar &&
                        (p.scrollbar.el || m) &&
                        (w.scrollbar || !1 === w.scrollbar) &&
                        y &&
                        !y.el &&
                        (r = !0),
                      u.includes('navigation') &&
                        p.navigation &&
                        (p.navigation.prevEl || f) &&
                        (p.navigation.nextEl || h) &&
                        (w.navigation || !1 === w.navigation) &&
                        S &&
                        !S.prevEl &&
                        !S.nextEl &&
                        (a = !0);
                    let x = (e) => {
                      d[e] &&
                        (d[e].destroy(),
                        'navigation' === e
                          ? (d.isElement && (d[e].prevEl.remove(), d[e].nextEl.remove()),
                            (w[e].prevEl = void 0),
                            (w[e].nextEl = void 0),
                            (d[e].prevEl = void 0),
                            (d[e].nextEl = void 0))
                          : (d.isElement && d[e].el.remove(), (w[e].el = void 0), (d[e].el = void 0)));
                    };
                    u.includes('loop') &&
                      d.isElement &&
                      (w.loop && !p.loop ? (l = !0) : !w.loop && p.loop ? (n = !0) : (o = !0)),
                      v.forEach((e) => {
                        if (I(w[e]) && I(p[e]))
                          Object.assign(w[e], p[e]),
                            ('navigation' === e || 'pagination' === e || 'scrollbar' === e) &&
                              'enabled' in p[e] &&
                              !p[e].enabled &&
                              x(e);
                        else {
                          let t = p[e];
                          (!0 === t || !1 === t) && ('navigation' === e || 'pagination' === e || 'scrollbar' === e)
                            ? !1 === t && x(e)
                            : (w[e] = p[e]);
                        }
                      }),
                      v.includes('controller') &&
                        !i &&
                        d.controller &&
                        d.controller.control &&
                        w.controller &&
                        w.controller.control &&
                        (d.controller.control = w.controller.control),
                      u.includes('children') && c && E && w.virtual.enabled
                        ? ((E.slides = c), E.update(!0))
                        : u.includes('virtual') && E && w.virtual.enabled && (c && (E.slides = c), E.update(!0)),
                      u.includes('children') && c && w.loop && (o = !0),
                      t && T.init() && T.update(!0),
                      i && (d.controller.control = w.controller.control),
                      s &&
                        (d.isElement &&
                          (!g || 'string' == typeof g) &&
                          ((g = document.createElement('div')).classList.add('swiper-pagination'),
                          g.part.add('pagination'),
                          d.el.appendChild(g)),
                        g && (w.pagination.el = g),
                        b.init(),
                        b.render(),
                        b.update()),
                      r &&
                        (d.isElement &&
                          (!m || 'string' == typeof m) &&
                          ((m = document.createElement('div')).classList.add('swiper-scrollbar'),
                          m.part.add('scrollbar'),
                          d.el.appendChild(m)),
                        m && (w.scrollbar.el = m),
                        y.init(),
                        y.updateSize(),
                        y.setTranslate()),
                      a &&
                        (d.isElement &&
                          ((h && 'string' != typeof h) ||
                            ((h = document.createElement('div')).classList.add('swiper-button-next'),
                            (h.innerHTML = d.hostEl.constructor.nextButtonSvg),
                            h.part.add('button-next'),
                            d.el.appendChild(h)),
                          (f && 'string' != typeof f) ||
                            ((f = document.createElement('div')).classList.add('swiper-button-prev'),
                            (f.innerHTML = d.hostEl.constructor.prevButtonSvg),
                            f.part.add('button-prev'),
                            d.el.appendChild(f))),
                        h && (w.navigation.nextEl = h),
                        f && (w.navigation.prevEl = f),
                        S.init(),
                        S.update()),
                      u.includes('allowSlideNext') && (d.allowSlideNext = p.allowSlideNext),
                      u.includes('allowSlidePrev') && (d.allowSlidePrev = p.allowSlidePrev),
                      u.includes('direction') && d.changeDirection(p.direction, !1),
                      (l || o) && d.loopDestroy(),
                      (n || o) && d.loopCreate(),
                      d.update();
                  })({
                    swiper: b.current,
                    slides: H,
                    passedParams: P,
                    changedParams: e,
                    nextEl: E.current,
                    prevEl: T.current,
                    scrollbarEl: C.current,
                    paginationEl: x.current,
                  }),
                () => {
                  U();
                }
              );
            }),
            j(() => {
              B(b.current);
            }, [h]),
            l.createElement(
              r,
              V({ ref: w, className: N(`${p}${s ? ` ${s}` : ''}`) }, k),
              l.createElement(
                R.Provider,
                { value: b.current },
                q['container-start'],
                l.createElement(
                  a,
                  {
                    className: (void 0 === (i = M.wrapperClass) && (i = ''), i)
                      ? i.includes('swiper-wrapper')
                        ? i
                        : `swiper-wrapper ${i}`
                      : 'swiper-wrapper',
                  },
                  q['wrapper-start'],
                  M.virtual
                    ? (function (e, t, i) {
                        if (!i) return null;
                        let s = (e) => {
                            let i = e;
                            return e < 0 ? (i = t.length + e) : i >= t.length && (i -= t.length), i;
                          },
                          r = e.isHorizontal()
                            ? { [e.rtlTranslate ? 'right' : 'left']: `${i.offset}px` }
                            : { top: `${i.offset}px` },
                          { from: a, to: n } = i,
                          o = e.params.loop ? -t.length : 0,
                          d = e.params.loop ? 2 * t.length : t.length,
                          c = [];
                        for (let e = o; e < d; e += 1) e >= a && e <= n && c.push(t[s(e)]);
                        return c.map((t, i) =>
                          l.cloneElement(t, { swiper: e, style: r, key: t.props.virtualIndex || t.key || `slide-${i}` })
                        );
                      })(b.current, H, h)
                    : H.map((e, t) => l.cloneElement(e, { swiper: b.current, swiperSlideIndex: t })),
                  q['wrapper-end']
                ),
                $(M) &&
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement('div', { ref: T, className: 'swiper-button-prev' }),
                    l.createElement('div', { ref: E, className: 'swiper-button-next' })
                  ),
                G(M) && l.createElement('div', { ref: C, className: 'swiper-scrollbar' }),
                D(M) && l.createElement('div', { ref: x, className: 'swiper-pagination' }),
                q['container-end']
              )
            )
          );
        });
      q.displayName = 'Swiper';
      let W = (0, l.forwardRef)(function (e, t) {
        let {
            tag: i = 'div',
            children: s,
            className: r = '',
            swiper: a,
            zoom: n,
            lazy: o,
            virtualIndex: d,
            swiperSlideIndex: c,
            ...p
          } = void 0 === e ? {} : e,
          u = (0, l.useRef)(null),
          [h, f] = (0, l.useState)('swiper-slide'),
          [m, g] = (0, l.useState)(!1);
        function v(e, t, i) {
          t === u.current && f(i);
        }
        j(() => {
          if ((void 0 !== c && (u.current.swiperSlideIndex = c), t && (t.current = u.current), u.current && a)) {
            if (a.destroyed) {
              'swiper-slide' !== h && f('swiper-slide');
              return;
            }
            return (
              a.on('_slideClass', v),
              () => {
                a && a.off('_slideClass', v);
              }
            );
          }
        }),
          j(() => {
            a && u.current && !a.destroyed && f(a.getSlideClasses(u.current));
          }, [a]);
        let w = {
            isActive: h.indexOf('swiper-slide-active') >= 0,
            isVisible: h.indexOf('swiper-slide-visible') >= 0,
            isPrev: h.indexOf('swiper-slide-prev') >= 0,
            isNext: h.indexOf('swiper-slide-next') >= 0,
          },
          b = () => ('function' == typeof s ? s(w) : s);
        return l.createElement(
          i,
          V(
            {
              ref: u,
              className: N(`${h}${r ? ` ${r}` : ''}`),
              'data-swiper-slide-index': d,
              onLoad: () => {
                g(!0);
              },
            },
            p
          ),
          n &&
            l.createElement(
              H.Provider,
              { value: w },
              l.createElement(
                'div',
                { className: 'swiper-zoom-container', 'data-swiper-zoom': 'number' == typeof n ? n : void 0 },
                b(),
                o && !m && l.createElement('div', { className: 'swiper-lazy-preloader' })
              )
            ),
          !n &&
            l.createElement(
              H.Provider,
              { value: w },
              b(),
              o && !m && l.createElement('div', { className: 'swiper-lazy-preloader' })
            )
        );
      });
      W.displayName = 'SwiperSlide';
    },
  },
]);
