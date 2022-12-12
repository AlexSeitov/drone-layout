import burger from './modules/burger.js';
// import smoothscroll from 'smoothscroll-polyfill';
// import scroll from './modules/smoothScroll.js';
// import tabbis from './vendors/tabs.js';
// import accordion from './modules/accordion.js';
// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import LazyLoad from 'vanilla-lazyload';
// import transParallax from './modules/transParallax.js';
// import A11yDialog from 'a11y-dialog';
// import getCurrentYear from './modules/getYear.js';
// import phoneInput from './vendors/phoneInput.js';
// import GLightbox from 'glightbox';
// import 'glightbox/dist/css/glightbox.css';
// import dropdownSelect from './modules/dropdown-select.js';
import moveLinkMarker from './modules/moveLinkMarker.js';

// moveLinkMarker ==============================================================
moveLinkMarker('.nav__list', '.nav__item', '.link-marker');

// Dropdown select ==========================================================
// dropdownSelect();

// gLightbox ==========================================================
// https://github.com/biati-digital/glightbox
// const lightbox = GLightbox({
//   touchNavigation: true,
//   loop: true
// });

// map loading ==========================================================
// mapLoading('map-container', 'ymap-lazy');

// Phone input mask ============================================================
// phoneInput('input[data-tel-input]');

// Popup ===================================================================
// https://a11y-dialog.netlify.app/
// const dialogUser = document.getElementById('dialog-user');
// const dialog = new A11yDialog(dialogUser);

// dialogUser.addEventListener('hide', function (event) {
//   const closePopupBtn = document.querySelector('[data-a11y-dialog-show]');
//   closePopupBtn.blur();
// });

// Lazy loading ================================================================
// const lazyLoadInstance = new LazyLoad({});

// Paralax =====================================================================
// transParallax();

// Burger ======================================================================
burger('.burger', '.nav', '.nav__link', 'body');

// SmoothScroll ================================================================
// smoothscroll.polyfill();
// scroll('.anchor-link');

// Tabs ========================================================================
// https://github.com/jenstornell/tabbis.js
// tabbis();

// Accordeon ===================================================================
// accordion('.accordion__head');

// Swiper ======================================================================
/* eslint-disable no-unused-vars */
// const swiper = new Swiper('.swiper', {
//   modules: [Navigation, Pagination],
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev'
//   },
//   slidesPerView: 1,
//   spaceBetween: 20,
//   breakpoints: {
//     568: {
//       slidesPerView: 2
//     },
//     1024: {
//       slidesPerView: 3
//     }
//   }
// });

// Swiper breakpoint ======================================================================

// const breakpoint = window.matchMedia('(min-width: 768px)');

// let mySwiper;

// const luxurySwiper = function () {
//   mySwiper = new Swiper('.swiper', {
//     modules: [Navigation, Pagination],
//     slidesPerView: 1,
//     spaceBetween: 15,
//     a11y: true,
//     keyboardControl: true,
//     grabCursor: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//     },
//     breakpoints: {
//       480: {
//         slidesPerView: 2
//       }
//     }
//   });
// };

// const breakpointChecker = function () {
//   if (breakpoint.matches === true) {
//     if (mySwiper !== undefined) mySwiper.destroy(true, true);
//   } else if (breakpoint.matches === false) {
//     return luxurySwiper();
//   }
//   return null;
// };

// breakpoint.addEventListener('change', () => {
//   breakpointChecker();
// });

// breakpointChecker();
