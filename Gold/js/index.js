$(document).ready(function() {
	
//______________________________soft-scroll menu-item for desktop
    $("#menu").on("click","a", function (event) {
    
        event.preventDefault(); //отменяем стандартную обработку нажатия по ссылке (т.е. переход по ссылке)       
        var idMenu  = $(this).attr('href'); //узнаем значение атрибута href блока, по которому кликнули       
        var section = $(idMenu).offset().top; //узнаем высоту от начала страницы до блока на который ссылается якорь       
        
        $('body,html').animate({scrollTop: section}, 1500);
    });	
//______________________________change active menu item
	$('li.main-nav__item').on("click", function(){
		
    	$('li.main-nav__item').each(function () { 
            $(this).removeClass('main-nav__item--active');    
        })        
        $(this).addClass('main-nav__item--active'); 

    });
//______________________________portfolio focus	
	$('div.portfolio__items > a.portfolio__item:eq(0)').on("focus", function() {
		$('div.portfolio__items > a.portfolio__item:eq(0) > h3.item-title').css("color", "#fed136");
	});
	$('div.portfolio__items > a.portfolio__item:eq(0)').on("blur", function() {
		$('div.portfolio__items > a.portfolio__item:eq(0) > h3.item-title').css("color", "#222222");
	});

	$('div.portfolio__items > a.portfolio__item:eq(1)').on("focus", function() {
		$('div.portfolio__items > a.portfolio__item:eq(1) > h3.item-title').css("color", "#fed136");
	});
	$('div.portfolio__items > a.portfolio__item:eq(1)').on("blur", function() {
		$('div.portfolio__items > a.portfolio__item:eq(1) > h3.item-title').css("color", "#222222");
	});

	$('div.portfolio__items > a.portfolio__item:eq(2)').on("focus", function() {
		$('div.portfolio__items > a.portfolio__item:eq(2) > h3.item-title').css("color", "#fed136");
	});
	$('div.portfolio__items > a.portfolio__item:eq(2)').on("blur", function() {
		$('div.portfolio__items > a.portfolio__item:eq(2) > h3.item-title').css("color", "#222222");
	});

	$('div.portfolio__items > a.portfolio__item:eq(3)').on("focus", function() {
		$('div.portfolio__items > a.portfolio__item:eq(3) > h3.item-title').css("color", "#fed136");
	});
	$('div.portfolio__items > a.portfolio__item:eq(3)').on("blur", function() {
		$('div.portfolio__items > a.portfolio__item:eq(3) > h3.item-title').css("color", "#222222");
	});

	$('div.portfolio__items > a.portfolio__item:eq(4)').on("focus", function() {
		$('div.portfolio__items > a.portfolio__item:eq(4) > h3.item-title').css("color", "#fed136");
	});
	$('div.portfolio__items > a.portfolio__item:eq(4)').on("blur", function() {
		$('div.portfolio__items > a.portfolio__item:eq(4) > h3.item-title').css("color", "#222222");
	});

	$('div.portfolio__items > a.portfolio__item:eq(5)').on("focus", function() {
		$('div.portfolio__items > a.portfolio__item:eq(5) > h3.item-title').css("color", "#fed136");
	});
	$('div.portfolio__items > a.portfolio__item:eq(5)').on("blur", function() {
		$('div.portfolio__items > a.portfolio__item:eq(5) > h3.item-title').css("color", "#222222");
	});		
	
//______________________________appear scroll-top button
	$(window).scroll(function() {

		if ($(this).scrollTop() > 640) {
			$('.btn__scroll-top').fadeIn();
		} else {
			$('.btn__scroll-top').fadeOut();
		}
	});	
	$('.btn__scroll-top').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

//______________________________form validation
	var inputs = $('input.validate');
	var message = $('textarea.validate');

	$('form').submit(function(e) {

		var error = false;

		for(var i = 0; i < inputs.length; i++) {

			if( inputs.eq(i).val() === '' ) {
				inputs.eq(i).addClass('error-field');				
				error = true;
			} else {
				inputs.eq(i).removeClass('error-field');			
			}
		}		

		if( message.val() === '' ) {				
			message.addClass('error-field');
			error = true;
		} else {
			message.removeClass('error-field');			
		}
		
		if(error) {
			e.preventDefault(); //не отправит форму если error = true
		}
	});	
//______________________________animate.css + WOW
	new WOW().init();
});