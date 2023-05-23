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
      responsive:
      [
         {
            breakpoint: 1100,
            settings: {
               slidesToShow: 3
            }
         },
         {
            breakpoint: 750,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 550,
            settings: {
               slidesToShow: 1,
               draggable: true,
               dots: true,
               appendDots: $('.team__dots'),
               waitForAnimate: false,
            }
         },
      ]
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
      // [
      //    // {
      //    //    breakpoint: 700,
      //    //    settings: {
               
      //    //    }
      //    // },
      // ]
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

   $(".header__nav-list a, .header__top-btn, .footer__bottom-linck").on("click", function (e) {
		//отменяем стандартную обработку нажатия по ссылке
		e.preventDefault()

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top-60}, 1000)
   })

   setInterval(() => {
      if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
         $('.burger').addClass('burger--follow')
      } else {
         $('.burger').removeClass('burger--follow')
      }
   }, 0)
   
   $('.burger, .overlay, .header__top a').on('click', function (e) {
      e.preventDefault()
      $('.header__top').toggleClass('header__top--open')
      $('.overlay').toggleClass('overlay--show')
      $('.burger').toggleClass('burger--click')
   })

   $('.footer__top-title--slide').on('click', function () {
      $(this).next().slideToggle()
   })
})
