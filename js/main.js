
$(function () {

  $('.rateYo').rateYo({
    "rating": 4.5,
    starSvg: '<svg width="30" height="28" viewBox="0 0 30 28" xmlns="http://www.w3.org/2000/svg"><path d="M12.3662 1.82936C13.5032 -0.255461 16.4968 -0.255465 17.6338 1.82936L19.9256 6.03174C20.3571 6.82292 21.1214 7.37822 22.0072 7.5441L26.7121 8.42517C29.0463 8.86228 29.9713 11.7093 28.3399 13.4349L25.0514 16.9132C24.4323 17.5681 24.1404 18.4666 24.2563 19.3603L24.8723 24.1072C25.1779 26.4621 22.756 28.2217 20.6107 27.2034L16.2865 25.1507C15.4724 24.7642 14.5276 24.7642 13.7135 25.1507L9.38927 27.2034C7.24399 28.2217 4.82214 26.4621 5.12772 24.1072L5.74367 19.3603C5.85964 18.4666 5.5677 17.5681 4.94858 16.9132L1.66009 13.4349C0.0286616 11.7093 0.953722 8.86228 3.28786 8.42517L7.99278 7.5441C8.87858 7.37822 9.64288 6.82293 10.0744 6.03174L12.3662 1.82936Z"/></svg>',
    ratedFill: "#FFB648",
    spacing: "8px",
    readOnly: true
  });

  var mixer = mixitup('.blog__list');

  $('.blog__filter-btn').on('click', function () {
    $('.blog__filter-btn').removeClass('blog__filter-btn--active')
    $(this).addClass('blog__filter-btn--active')
  })

  $('.service__slider').slick({
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    appendDots: $('.service__dots'),
    infinite: false,
    speed: 1000,
    appendArrows: $('.service__slider-arrows'),
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.service__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.service__slider').slick('slickPrev')
  })
  $('.service__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.service__slider').slick('slickNext')
  })

  $('.faq__accordeon-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('faq__accordeon-link--active')) {
      $(this).removeClass('faq__accordeon-link--active')
      $(this).children('.faq__accordeon-text').slideUp()
    } else {
      $('.faq__accordeon-link').removeClass('faq__accordeon-link--active')
      $('.faq__accordeon-text').slideUp()
      $(this).addClass('faq__accordeon-link--active')
      $(this).children('.faq__accordeon-text').slideDown()
    }
  })


  let center = [40.708528113497835, -73.99840628320314];

  function init() {
    let map = new ymaps.Map('git__map-test', {
      center: center,
      zoom: 11
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  }

  ymaps.ready(init);

  $(".header__nav-list a, .header__button,.cta__button, .footer__logo, .footer__nav-list a").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1000)
  })

  $('.menu-burger, .overlay, .header__nav-list a').click(function (e) {
    e.preventDefault()
    $('.menu-burger').toggleClass('open-menu');
    $('.header__top').toggleClass('header__top-open');
    $('.overlay').toggleClass('overlay--show');
  });
})