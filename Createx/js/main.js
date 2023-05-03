$(function  () {

   var mixer = mixitup('.direction__list');
   
   $('.direction__filter-btn').on('click', function () {
      $('.direction__filter-btn').removeClass('direction__filter-btn--activ')
      $(this).addClass('direction__filter-btn--activ')
   })

   $('.team__slider').slick({
      arrows: false,
      slidesToShow: 4,
      infinite: true,
      draggable: false,
      appendArrows: $(`.team__slider-arrows`),
      waitForAnimate: false,
   })

   $('.team__slider-prev').on('click', function (e) {
      e.preventDefault()
      $('.team__slider').slick('slickPrev')
   })
   $('.team__slider-next').on('click', function (e) {
      e.preventDefault()
      $('.team__slider').slick('slickNext')
   })
})
