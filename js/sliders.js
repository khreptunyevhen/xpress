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

  const sellingSlider = new Swiper('.slider-selling', {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 5,
    coverflowEffect: {
      rotate: 25,
      stretch: 0,
      depth: 80,
      modifier: 1,
      slideShadows: true,
    },
    breakpoints: {
      320: {
        slidesPerView: "auto"
      },
      576: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 4
      }
    }
  });
}

sliders();