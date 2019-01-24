$(document).ready(function(){

	//____________________menu_item_active
	$('.menu_item').on('click', function() {
		$('.menu_items > li.menu_item__active').removeClass('menu_item__active');
		$(this).addClass('menu_item__active');

	});

	//____________________slider
	$('.slider_wrap').slick({
	    infinite: true,
	    dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1	        
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
	
});
