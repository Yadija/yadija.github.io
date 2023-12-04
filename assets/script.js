new Swiper(".mainSwiper", {
  direction: "vertical",
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  mousewheel: {
    invert: false,
  },
  keyboard: {
    enabled: true,
  },
  speed: 1500,
});
