// Owner and Founder
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// Roadmap
var swiper = new Swiper(".roadmapSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
    },
    990: {
      slidesPerView: 3,
    },
  },
});

// Partners
$("#sliderPartner").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  dots: false,
  slideBy: 1,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
