!function(){var e={751:function(){document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".faq-block__item-top").forEach((function(e){e.addEventListener("click",(function(){const e=this.parentNode,t=e.querySelector(".faq-block__item-body");document.querySelectorAll(".faq-block__item-body").forEach((function(e){e!==t&&e.classList.contains("open")&&(e.classList.remove("open"),e.parentNode.classList.remove("open"),e.parentNode.querySelector("span").textContent="+")})),t.classList.contains("open")?(t.classList.remove("open"),e.classList.remove("open"),this.querySelector("span").textContent="+"):(t.classList.add("open"),e.classList.add("open"),this.querySelector("span").textContent="-")}))}))}))},349:function(){document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".right-faq__item");e.forEach((t=>{const n=t.querySelector(".right-faq__top"),o=n.querySelector(".open-item");n.addEventListener("click",(function(){t.classList.contains("open")?(t.classList.remove("open"),o.innerText="+"):(e.forEach((e=>{e.classList.remove("open"),e.querySelector(".open-item").innerText="+"})),t.classList.add("open"),o.innerText="-")}))}))}))},944:function(){var e=new Swiper(".mySwiper",{spaceBetween:16,slidesPerView:5,freeMode:!0,watchSlidesProgress:!0});new Swiper(".mySwiper2",{spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},on:{click:function(){var e=this.activeIndex;this.slideTo(e+1)}},thumbs:{swiper:e}}),new Swiper(".mySwiper11",{spaceBetween:16,slidesPerView:5,freeMode:!0,watchSlidesProgress:!0}),new Swiper(".mySwiper22",{spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},on:{click:function(){var e=this.activeIndex;this.slideTo(e+1)}},thumbs:{swiper:e}})},482:function(){document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".right-number__item");e.forEach((t=>{t.addEventListener("click",(function(){e.forEach((e=>{e.classList.remove("active");const t=e.querySelector(".radio-box-active");t&&t.remove()})),this.classList.add("active");const t=this.querySelector(".radio-box"),n=document.createElement("div");n.classList.add("radio-box-active"),t.appendChild(n)}))}))}))},288:function(){document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".right-weight li");e.forEach((t=>{t.addEventListener("click",(function(){e.forEach((e=>{e.classList.remove("active")})),this.classList.add("active")}))}))}))}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(944),n(288),n(482),n(349),n(751)}()}();