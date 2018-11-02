import $ from 'jquery';
import '../../node_modules/gsap/src/minified/TweenMax.min';
import '../../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min';
import  Slick from 'slick-carousel';
import '../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min';

$('.scroll-perfect').mCustomScrollbar();

var t1 = new TimelineMax({paused: true});

t1.to('.overlay', 1.6, {

  top: 0,
  ease: Expo.easeInOut

});
t1.staggerFrom('.nav ul li', 1, {y: 100, opacity: 0, ease: Expo.easeInOut}, 0,1);

t1.reverse();
$(document).on('click', '.toggle-btn', function() {
  t1.reversed(!t1.reversed());
  $('.toggle-btn').toggleClass('active');
});

$(window).scroll(function() {
  if($(this).scrollTop() > 760) {
    $('body').css('padding-top', 110);
    $('.header__fixed').addClass('sticky');
  }
  else {
    $('body').css('padding-top', 0);
    $('.header__fixed').removeClass('sticky');
  }
});
$(document).ready(function() {
  $('.gallery__wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '470px',
    dots: true,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 1880,
        settings: {
          centerMode: false,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          centerMode: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  });
});
