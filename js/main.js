// Выберите все элементы с тегом "i" и сохраните их в списке узлов под названием "звезды".
const stars = document.querySelectorAll(".stars i");

// Пройдите по списку узлов "звезды"
stars.forEach((star, index1) => {
  // Добавьте прослушиватель событий, который запускает функцию при срабатывании события "click"
  star.addEventListener("click", () => {
    // Еще раз пройдите по списку узлов "звезды"
    stars.forEach((star, index2) => {
      // Добавьте класс "активный" к выбранной звезде и любым звездам с меньшим индексом
      // и удалите класс "активный" из любых звезд с более высоким индексом
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});

$(function () {

  var mixer = mixitup('.blog__list');

  $('.blog__filter-btn').on('click', function () {
    $('.blog__filter-btn').removeClass('blog__filter-btn--active')
    $(this).addClass('blog__filter-btn--active')
  })

  $('.service__slider').slick({
    // infinite: true,
    arrows:false,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    appendDots: $('.service__dots'),
    infinite: false,
    speed: 1000,
    appendArrows: $('.service__slider-arrows')
  });
  $('.service__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.service__slider').slick('slickPrev')
  })
  $('.service__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.service__slider').slick('slickNext')
  })
})