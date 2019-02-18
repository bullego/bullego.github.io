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

		if($(this).scrollTop() >= '945') {
			$('.phone').hide();
			$('.page_header').css('backgroundColor', '#e5e5e5');
			$('.menu_btn').addClass('menu_btn_second_mobile');
		} else {
			$('.phone').show();
			$('.page_header').css('backgroundColor', 'transparent');
			$('.menu_btn').removeClass('menu_btn_second_mobile');
		};
	});

});

