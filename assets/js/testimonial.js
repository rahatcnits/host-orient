// testimonial

$("#slider").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  slideBy: 1,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
