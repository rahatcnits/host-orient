$(function () {
  $(window).scroll(function () {
    // sticky menu start
    //this is for sticky menu
    var sticky = $(this).scrollTop();
    if (sticky > 50) {
      $(".menu-bar").addClass("sticky-menu");
    } else {
      $(".menu-bar").removeClass("sticky-menu");
    }
    //this is for sticky menu padding
    if (sticky > 50) {
      $(".logo").addClass("scroll-logo");
    } else {
      $(".logo").removeClass("scroll-logo");
    }
    // sticky menu end

    // back to top start
    //back to to button animation
    if (sticky > 50) {
      $(".bottom-to-top").fadeIn(300);
    } else {
      $(".bottom-to-top").fadeOut(300);
    }
  });
  //back to top button click
  $(".bottom-to-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });
  // back to top end
});

// custom mobile menu end
