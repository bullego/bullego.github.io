$(document).ready(function() {

	//____________________plugin(fullpage)_and_resize
	function response() {
		if($(window).width() > '767') {

	        $('#fullpage').fullpage({
				autoScrolling: true,
				scrollHorizontally: true,
				scrollOverflow: true,
				navigation: false,
				loopTop: false,
				loopBottom: false
			});

			$.fn.fullpage.setAllowScrolling(true);
	    }
	    else if($(window).width() <= '767') {

			$('#fullpage').removeAttr('id');
		}
	}

	$(window).on('load', function() {
		response();	    
	});
	$(window).on('resize', function() {
		window.location.reload();
	}); 


	//____________________mobile_menu
	$(window).scroll(function() {

		if($(this).scrollTop() >= '945' && $(this).scrollTop() < '1712') {
			$('.phone').hide();
			$('.menu_btn').removeClass('menu_btn_third_mobile');
			$('.menu_btn').addClass('menu_btn_second_mobile');
		}
		else if($(this).scrollTop() >= '1712') {			
			
			if($(this).scrollTop() >= '1782' && $(this).scrollTop() <= '1937') {
				$('.menu_btn').addClass('menu_btn_third_mobile');
				$('.page_header').css('backgroundColor', 'transparent');
			}
			else {
				$('.menu_btn').removeClass('menu_btn_third_mobile');
				$('.page_header').css('backgroundColor', '#e5e5e5');
			}
		}
		else {
			$('.phone').show();
			$('.menu_btn').removeClass('menu_btn_second_mobile');
		};
	});

});

