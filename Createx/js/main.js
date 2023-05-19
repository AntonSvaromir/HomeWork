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



   $('.testimonials__slider').slick({
      arrows: false,
      dots: true,
      appendDots: $('.testimonials__dots'),
      waitForAnimate: false,
   })

   $('.testimonials__arrow__prev').on('click', function (e) {
      e.preventDefault()
      $('.testimonials__slider').slick('slickPrev')
   })
   $('.testimonials__arrow__next').on('click', function (e) {
      e.preventDefault()
      $('.testimonials__slider').slick('slickNext')
   })



   $('.program__accordeon-link').on('click', function (e) {
      e.preventDefault()
      if($(this).hasClass('program__accordeon-link--active')) {
         $(this).removeClass('program__accordeon-link--active')
         $(this).children('.program__acc-text').slideUp()
      } else {
         $('.program__accordeon-link').removeClass('program__accordeon-link--active')
         $('.program__acc-text').slideUp()
         $(this).addClass('program__accordeon-link--active')
         $(this).children('.program__acc-text').slideDown()
      }

   })

   // $('.program__accordeon-link').on('click', function (e) {
   //    e.preventDefault()
   //    $(this).toggleClass('program__accordeon-link--active')
   //    $(this).children('.program__acc-text').slideToggle()
   // })
})
