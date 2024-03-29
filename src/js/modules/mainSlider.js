var swiper = new Swiper(".mySwiper", {
  spaceBetween: 16,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    click: function () {
      var activeIndex = this.activeIndex;
      this.slideTo(activeIndex + 1);
    },
  },
  thumbs: {
    swiper: swiper,
  },
});
