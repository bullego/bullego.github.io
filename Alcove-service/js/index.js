$(document).ready(function(){

	//____________________scroll to section
	$('.menu-items a.nav-link').on('click', function(e) {
		e.preventDefault();

		var selector = $(this).attr('href');
		var section = $(selector);

		if ($(window).width() > '991') {
	        $('html, body').animate({scrollTop: section.offset().top-60}, 500);
	    } else {
	        $('html, body').animate({scrollTop: section.offset().top-276}, 500);
	    };		

		/*function windowSize(){
		    if ($(window).width() > '991'){
		        
		    } else {
		        
		    }
		};
		//$(window).load(windowSize); // при загрузке
		//$(window).resize(windowSize); // при изменении размеров		
		$(window).on('load resize', windowSize); // или "два-в-одном"*/

		
	});

	//____________________active menu-item
	function activeMenuItem() {

		$('.menu-items a.nav-link').each(function() {
			var selector = $(this).attr('href');
			var section = $(selector);
			var windowToTop = $(window).scrollTop();
			var sectionToTop = section.offset().top;

			if ($(window).width() > '991') {

				if(windowToTop > sectionToTop - 80) {
					$('.menu-items a.nav-link').closest('li.active').removeClass('active');
					$(this).closest('li').addClass('active');
				};

			} else {

				if(windowToTop > sectionToTop - 280) {
					$('.menu-items a.nav-link').closest('li.active').removeClass('active');
					$(this).closest('li').addClass('active');
				};
			};			
		});
	};
	activeMenuItem();

	$(window).on('scroll', function() {

		if( (scrollY > 800) && ($(window).width() > '991') ) {
			activeMenuItem();
		} else if ( (scrollY > 644) && ($(window).width() <= '991') ) {
			activeMenuItem();
		} else {
			$('.menu-items a.nav-link').closest('li.active').removeClass('active');
		};
	});

	//____________________scroll to top
	function scrollToTop() {
		if(scrollY > 800) {
			$('.up-btn').fadeIn(500);
		} else {
			$('.up-btn').fadeOut(500);
		};
	};
	scrollToTop();
	
	$(window).on('scroll', function() {
		scrollToTop();
	});

	$('.up-btn').on('click', function() {
		$('html, body').animate({scrollTop: 0}, 500);
	});

	//____________________scroll from price to discount <a>
	$('.rules-discount').on('click', function(e) {
		e.preventDefault();

		var selector = $(this).attr('href');
		var section = $(selector);

		$('html, body').animate({scrollTop: section.offset().top-60}, 500);
	});
	
	//____________________scroll from services to prices <a>
	$('.services-prices').on('click', function(e) {
		e.preventDefault();

		var selector = $(this).attr('href');
		var section = $(selector);

		$('html, body').animate({scrollTop: section.offset().top-60}, 500);
	});

	//____________________accordion active-marker
	$(".card-header").click(function() {
		$(".card-header").removeClass('accordion-active');
		$(this).addClass('accordion-active');
	});

	//____________________discount-code
	$(".discount-btn").click(function() {
		$(".discount-btn").hide(250);
		$(".discount-code").show(250);
		
	});

	//____________________slider
	$('.feedback-slider').slick({
	    infinite: true,
	    dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2	        
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	//____________________WOW-animate
	new WOW().init();

	//____________________phone-mask
	$("input[type='tel']").mask("+38(099) 999-99-99");
	
});
