function sliders() {
  const previewSlider = new Swiper('.preview__slider', {
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      }
    }
  });
}

sliders();