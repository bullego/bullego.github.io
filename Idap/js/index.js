window.onload = function() {

	var tabsWrapper = document.querySelector('.tabs__items');
	var tabs = document.querySelectorAll('.tabs__btn');	
	var tabsContent = document.querySelectorAll('.tabs__content');

	tabs[0].classList.add('tabs__btn--active');	

	function hideTabsContent(a) {
		for(var i = a; i < tabsContent.length; i++) {
			tabsContent[i].classList.remove('show');
			tabsContent[i].classList.add('hide');
			tabs[i].classList.remove('tabs__btn--active');
		};
	};

	function showTabsContent(b) {
		if(tabsContent[b].classList.contains('hide')) {
			hideTabsContent(0);
			tabs[b].classList.add('tabs__btn--active');
			tabsContent[b].classList.remove('hide');
			tabsContent[b].classList.add('show');
		};
	};

	hideTabsContent(1);

	tabsWrapper.addEventListener('click', function(event) {

		var clickOn = event.target;

		if (clickOn.classList.contains('tabs__btn')) {
		
			for(var i = 0; i < tabs.length; i++) {

				if(clickOn == tabs[i]) {
					showTabsContent(i);
					break;
				};
			};
		};
	});

};