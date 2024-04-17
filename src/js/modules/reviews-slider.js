var swiper12 = new Swiper(".swiper-reviews", {
  spaceBetween: 21,
  slidesPerView: 2,
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  breakpoints: {
    1300: {
      slidesPerView: 3,
    },
  },
});
