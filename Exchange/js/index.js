'use strict';
window.onload = function() {
//____________________ajax
	
	var ethPrice = document.querySelector('#etr-price');
	var ethHourChange = document.querySelector('#etr-hour-change');
	var ethDayChange = document.querySelector('#etr-day-change');
	var ethWeekChange = document.querySelector('#etr-week-change');
	var ethMonthChange = document.querySelector('#etr-month-change');

	var ltcPrice = document.querySelector('#ltc-price');
	var ltcHourChange = document.querySelector('#ltc-hour-change');
	var ltcDayChange = document.querySelector('#ltc-day-change');
	var ltcWeekChange = document.querySelector('#ltc-week-change');
	var ltcMonthChange = document.querySelector('#ltc-month-change');

	var btcPrice = document.querySelector('#btc-price');
	var btcHourChange = document.querySelector('#btc-hour-change');
	var btcDayChange = document.querySelector('#btc-day-change');
	var btcWeekChange = document.querySelector('#btc-week-change');
	var btcMonthChange = document.querySelector('#btc-month-change');

	var usd = document.querySelector('#select__usd-styler');	
	var eur = document.querySelector('#select__eur-styler');	
	var rub = document.querySelector('#select__rub-styler');	
	var gbp = document.querySelector('#select__gbp-styler');

	var switchEth = document.querySelector('#switch-eth');
	var switchLtc = document.querySelector('#switch-ltc');
	var switchBtc = document.querySelector('#switch-btc');


	var usdEthUrl = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHUSD';
	var eurEthUrl = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHEUR';
	var rubEthUrl = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHRUB';
	var gbpEthUrl = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHGBP';

	var usdLtcUrl = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCUSD';
	var eurLtcUrl = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCEUR';
	var rubLtcUrl = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCRUB';
	var gbpLtcUrl = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCGBP';

	var usdBtcUrl = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD';
	var eurBtcUrl = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCEUR';
	var rubBtcUrl = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCRUB';
	var gbpBtcUrl = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCGBP';

	//__________USD
	function showUsdPrice() {
		
		ajaxGet(usdEthUrl, function(data) {
			ethPrice.innerHTML = '<i class="fas fa-dollar-sign"></i> ' + data.open.hour;
		});
		ajaxGet(usdLtcUrl, function(data) {
				ltcPrice.innerHTML = '<i class="fas fa-dollar-sign"></i> ' + data.open.hour;
		});
		ajaxGet(usdBtcUrl, function(data) {
				btcPrice.innerHTML = '<i class="fas fa-dollar-sign"></i> ' + data.open.hour;
		});
	};
	function showUsdChanges() {
		ajaxGet(usdEthUrl, function(data) {			
			if(data.changes.price.hour < 0) {
				ethHourChange.classList.add('red__changed');			
			};
			if(data.changes.price.day < 0) {
				ethDayChange.classList.add('red__changed');			
			};
			if(data.changes.price.week < 0) {
				ethWeekChange.classList.add('red__changed');			
			};
			if(data.changes.price.month < 0) {
				ethMonthChange.classList.add('red__changed');			
			};

			ethHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-dollar-sign"></i>';
			ethDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-dollar-sign"></i>';
			ethWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-dollar-sign"></i>';
			ethMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-dollar-sign"></i>';
		});
		ajaxGet(usdLtcUrl, function(data) {
			if(data.changes.price.hour < 0) {
				ltcHourChange.classList.add('red__changed');			
			};
			if(data.changes.price.day < 0) {
				ltcDayChange.classList.add('red__changed');			
			};
			if(data.changes.price.week < 0) {
				ltcWeekChange.classList.add('red__changed');			
			};
			if(data.changes.price.month < 0) {
				ltcMonthChange.classList.add('red__changed');			
			};

			ltcHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-dollar-sign"></i>';
			ltcDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-dollar-sign"></i>';
			ltcWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-dollar-sign"></i>';
			ltcMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-dollar-sign"></i>';
		});
		ajaxGet(usdBtcUrl, function(data) {
			if(data.changes.price.hour < 0) {
				btcHourChange.classList.add('red__changed');			
			};
			if(data.changes.price.day < 0) {
				btcDayChange.classList.add('red__changed');			
			};
			if(data.changes.price.week < 0) {
				btcWeekChange.classList.add('red__changed');			
			};
			if(data.changes.price.month < 0) {
				btcMonthChange.classList.add('red__changed');			
			};

			btcHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-dollar-sign"></i>';
			btcDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-dollar-sign"></i>';
			btcWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-dollar-sign"></i>';
			btcMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-dollar-sign"></i>';
		});
	};

	showUsdPrice();	//показать разово при загрузке и обновлении страницы
	showUsdChanges(); //показать разово при загрузке и обновлении страницы
	
	usd.addEventListener('click', function() {
		switchEth.checked = false; //сброс переключателя при загрузке страницы
		switchLtc.checked = false;
		switchBtc.checked = false;

		showUsdPrice();
		showUsdChanges();		
	});

	//__________EUR
	function showEurPrice() {
		ajaxGet(eurEthUrl, function(data) {
				ethPrice.innerHTML = '<i class="fas fa-euro-sign"></i> ' + data.open.hour;
		});
		ajaxGet(eurLtcUrl, function(data) {
				ltcPrice.innerHTML = '<i class="fas fa-euro-sign"></i> ' + data.open.hour;
		});
		ajaxGet(eurBtcUrl, function(data) {
				btcPrice.innerHTML = '<i class="fas fa-euro-sign"></i> ' + data.open.hour;
		});
	};
	function showEurChanges() {
		ajaxGet(eurEthUrl, function(data) {
			if(data.changes.price.hour < 0) {
				ethHourChange.classList.add('red__changed');			
			};
			if(data.changes.price.day < 0) {
				ethDayChange.classList.add('red__changed');			
			};
			if(data.changes.price.week < 0) {
				ethWeekChange.classList.add('red__changed');			
			};
			if(data.changes.price.month < 0) {
				ethMonthChange.classList.add('red__changed');			
			};

			ethHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-euro-sign"></i>';
			ethDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-euro-sign"></i>';
			ethWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-euro-sign"></i>';
			ethMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-euro-sign"></i>';
		});
		ajaxGet(eurLtcUrl, function(data) {
			if(data.changes.price.hour < 0) {
				ltcHourChange.classList.add('red__changed');			
			};
			if(data.changes.price.day < 0) {
				ltcDayChange.classList.add('red__changed');			
			};
			if(data.changes.price.week < 0) {
				ltcWeekChange.classList.add('red__changed');			
			};
			if(data.changes.price.month < 0) {
				ltcMonthChange.classList.add('red__changed');			
			};

			ltcHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-euro-sign"></i>';
			ltcDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-euro-sign"></i>';
			ltcWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-euro-sign"></i>';
			ltcMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-euro-sign"></i>';
		});
		ajaxGet(eurBtcUrl, function(data) {
			if(data.changes.price.hour < 0) {
				btcHourChange.classList.add('red__changed');			
			};
			if(data.changes.price.day < 0) {
				btcDayChange.classList.add('red__changed');			
			};
			if(data.changes.price.week < 0) {
				btcWeekChange.classList.add('red__changed');			
			};
			if(data.changes.price.month < 0) {
				btcMonthChange.classList.add('red__changed');			
			};

			btcHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-euro-sign"></i>';
			btcDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-euro-sign"></i>';
			btcWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-euro-sign"></i>';
			btcMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-euro-sign"></i>';
		});
	};

	eur.addEventListener('click', function() {
		switchEth.checked = false; //сброс переключателя при загрузке страницы
		switchLtc.checked = false;
		switchBtc.checked = false;

		showEurPrice();
		showEurChanges();		
	});

	//__________RUB
	function showRubPrice() {
		ajaxGet(rubEthUrl, function(data) {
				ethPrice.innerHTML = '<i class="fas fa-ruble-sign"></i> ' + data.open.hour;
		});
		ajaxGet(rubLtcUrl, function(data) {
				ltcPrice.innerHTML = '<i class="fas fa-ruble-sign"></i> ' + data.open.hour;
		});
		ajaxGet(rubBtcUrl, function(data) {
				btcPrice.innerHTML = '<i class="fas fa-ruble-sign"></i> ' + data.open.hour;
		});
	};
	function showRubChanges() {
		ajaxGet(rubEthUrl, function(data) {
			if(data.changes.price.hour < 0) {
				ethHourChange.classList.add('red__changed');			
			};
			if(data.changes.price.day < 0) {
				ethDayChange.classList.add('red__changed');			
			};
			if(data.changes.price.week < 0) {
				ethWeekChange.classList.add('red__changed');			
			};
			if(data.changes.price.month < 0) {
				ethMonthChange.classList.add('red__changed');			
			};

			ethHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-ruble-sign"></i>';
			ethDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-ruble-sign"></i>';
			ethWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-ruble-sign"></i>';
			ethMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-ruble-sign"></i>';
		});
		ajaxGet(rubLtcUrl, function(data) {
			if(data.changes.price.hour < 0) {
				ltcHourChange.classList.add('red__changed');			
			};
			if(data.changes.price.day < 0) {
				ltcDayChange.classList.add('red__changed');			
			};
			if(data.changes.price.week < 0) {
				ltcWeekChange.classList.add('red__changed');			
			};
			if(data.changes.price.month < 0) {
				ltcMonthChange.classList.add('red__changed');			
			};

			ltcHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-ruble-sign"></i>';
			ltcDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-ruble-sign"></i>';
			ltcWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-ruble-sign"></i>';
			ltcMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-ruble-sign"></i>';
		});
		ajaxGet(rubBtcUrl, function(data) {
			if(data.changes.price.hour < 0) {
				btcHourChange.classList.add('red__changed');			
			};
			if(data.changes.price.day < 0) {
				btcDayChange.classList.add('red__changed');			
			};
			if(data.changes.price.week < 0) {
				btcWeekChange.classList.add('red__changed');			
			};
			if(data.changes.price.month < 0) {
				btcMonthChange.classList.add('red__changed');			
			};

			btcHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-ruble-sign"></i>';
			btcDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-ruble-sign"></i>';
			btcWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-ruble-sign"></i>';
			btcMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-ruble-sign"></i>';
		});
	};

	rub.addEventListener('click', function() {
		switchEth.checked = false; //сброс переключателя при загрузке страницы
		switchLtc.checked = false;
		switchBtc.checked = false;

		showRubPrice();
		showRubChanges();
	});

	//__________GBP
	function showGbpPrice() {
		ajaxGet(gbpEthUrl, function(data) {
				ethPrice.innerHTML = '<i class="fas fa-pound-sign"></i> ' + data.open.hour;
		});
		ajaxGet(gbpLtcUrl, function(data) {
				ltcPrice.innerHTML = '<i class="fas fa-pound-sign"></i> ' + data.open.hour;
		});
		ajaxGet(gbpBtcUrl, function(data) {
				btcPrice.innerHTML = '<i class="fas fa-pound-sign"></i> ' + data.open.hour;
		});
	};
	function showGpbChanges() {
		ajaxGet(gbpEthUrl, function(data) {
			if(data.changes.price.hour < 0) {
				ethHourChange.classList.add('red__changed');			
			};
			if(data.changes.price.day < 0) {
				ethDayChange.classList.add('red__changed');			
			};
			if(data.changes.price.week < 0) {
				ethWeekChange.classList.add('red__changed');			
			};
			if(data.changes.price.month < 0) {
				ethMonthChange.classList.add('red__changed');			
			};

			ethHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-pound-sign"></i>';
			ethDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-pound-sign"></i>';
			ethWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-pound-sign"></i>';
			ethMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-pound-sign"></i>';
		});
		ajaxGet(gbpLtcUrl, function(data) {
			if(data.changes.price.hour < 0) {
				ltcHourChange.classList.add('red__changed');			
			};
			if(data.changes.price.day < 0) {
				ltcDayChange.classList.add('red__changed');			
			};
			if(data.changes.price.week < 0) {
				ltcWeekChange.classList.add('red__changed');			
			};
			if(data.changes.price.month < 0) {
				ltcMonthChange.classList.add('red__changed');			
			};

			ltcHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-pound-sign"></i>';
			ltcDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-pound-sign"></i>';
			ltcWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-pound-sign"></i>';
			ltcMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-pound-sign"></i>';
		});
		ajaxGet(gbpBtcUrl, function(data) {
			if(data.changes.price.hour < 0) {
				btcHourChange.classList.add('red__changed');			
			};
			if(data.changes.price.day < 0) {
				btcDayChange.classList.add('red__changed');			
			};
			if(data.changes.price.week < 0) {
				btcWeekChange.classList.add('red__changed');			
			};
			if(data.changes.price.month < 0) {
				btcMonthChange.classList.add('red__changed');			
			};
			
			btcHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-pound-sign"></i>';
			btcDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-pound-sign"></i>';
			btcWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-pound-sign"></i>';
			btcMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-pound-sign"></i>';
		});
	};

	gbp.addEventListener('click', function() {
		switchEth.checked = false; //сброс переключателя при загрузке страницы
		switchLtc.checked = false;
		switchBtc.checked = false;
		
		showGbpPrice();
		showGpbChanges();		
	});	

	//__________switch_ETH
	switchEth.addEventListener('change', function() {
		if(switchEth.checked && usd.classList.contains('selected')) {
			ajaxGet(usdEthUrl, function(data) {
				ethHourChange.innerHTML = data.changes.percent.hour + '%';
				ethDayChange.innerHTML = data.changes.percent.day + '%';
				ethWeekChange.innerHTML = data.changes.percent.week + '%';
				ethMonthChange.innerHTML = data.changes.percent.month + '%';
			});
		}; 
		if(switchEth.checked && eur.classList.contains('selected')) {
			ajaxGet(eurEthUrl, function(data) {
				ethHourChange.innerHTML = data.changes.percent.hour + '%';
				ethDayChange.innerHTML = data.changes.percent.day + '%';
				ethWeekChange.innerHTML = data.changes.percent.week + '%';
				ethMonthChange.innerHTML = data.changes.percent.month + '%';
			});
		};
		if(switchEth.checked && rub.classList.contains('selected')) {
			ajaxGet(rubEthUrl, function(data) {
				ethHourChange.innerHTML = data.changes.percent.hour + '%';
				ethDayChange.innerHTML = data.changes.percent.day + '%';
				ethWeekChange.innerHTML = data.changes.percent.week + '%';
				ethMonthChange.innerHTML = data.changes.percent.month + '%';
			});
		};
		if(switchEth.checked && gbp.classList.contains('selected')) {
			ajaxGet(gbpEthUrl, function(data) {
				ethHourChange.innerHTML = data.changes.percent.hour + '%';
				ethDayChange.innerHTML = data.changes.percent.day + '%';
				ethWeekChange.innerHTML = data.changes.percent.week + '%';
				ethMonthChange.innerHTML = data.changes.percent.month + '%';
			});
		};
		if((!(switchEth.checked)) && usd.classList.contains('selected')) {
			ajaxGet(usdEthUrl, function(data) {
				ethHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-dollar-sign"></i>';
				ethDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-dollar-sign"></i>';
				ethWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-dollar-sign"></i>';
				ethMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-dollar-sign"></i>';
			});
		};
		if((!(switchEth.checked)) && eur.classList.contains('selected')) {
			ajaxGet(eurEthUrl, function(data) {
				ethHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-euro-sign"></i>';
				ethDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-euro-sign"></i>';
				ethWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-euro-sign"></i>';
				ethMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-euro-sign"></i>';
			});
		}; 
		if((!(switchEth.checked)) && rub.classList.contains('selected')) {
			ajaxGet(rubEthUrl, function(data) {
				ethHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-ruble-sign"></i>';
				ethDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-ruble-sign"></i>';
				ethWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-ruble-sign"></i>';
				ethMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-ruble-sign"></i>';
			});
		};
		if((!(switchEth.checked)) && gbp.classList.contains('selected')) {
			ajaxGet(gbpEthUrl, function(data) {
				ethHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-pound-sign"></i>';
				ethDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-pound-sign"></i>';
				ethWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-pound-sign"></i>';
				ethMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-pound-sign"></i>';
			});
		};
	});

	//__________switch_LTC
	switchLtc.addEventListener('change', function() {
		if(switchLtc.checked && usd.classList.contains('selected')) {
			ajaxGet(usdLtcUrl, function(data) {
				ltcHourChange.innerHTML = data.changes.percent.hour + '%';
				ltcDayChange.innerHTML = data.changes.percent.day + '%';
				ltcWeekChange.innerHTML = data.changes.percent.week + '%';
				ltcMonthChange.innerHTML = data.changes.percent.month + '%';
			});
		};
		if(switchLtc.checked && eur.classList.contains('selected')) {
			ajaxGet(eurLtcUrl, function(data) {
				ltcHourChange.innerHTML = data.changes.percent.hour + '%';
				ltcDayChange.innerHTML = data.changes.percent.day + '%';
				ltcWeekChange.innerHTML = data.changes.percent.week + '%';
				ltcMonthChange.innerHTML = data.changes.percent.month + '%';
			});
		};
		if(switchLtc.checked && rub.classList.contains('selected')) {
			ajaxGet(rubLtcUrl, function(data) {
				ltcHourChange.innerHTML = data.changes.percent.hour + '%';
				ltcDayChange.innerHTML = data.changes.percent.day + '%';
				ltcWeekChange.innerHTML = data.changes.percent.week + '%';
				ltcMonthChange.innerHTML = data.changes.percent.month + '%';
			});
		};
		if(switchLtc.checked && gbp.classList.contains('selected')) {
			ajaxGet(gbpLtcUrl, function(data) {
				ltcHourChange.innerHTML = data.changes.percent.hour + '%';
				ltcDayChange.innerHTML = data.changes.percent.day + '%';
				ltcWeekChange.innerHTML = data.changes.percent.week + '%';
				ltcMonthChange.innerHTML = data.changes.percent.month + '%';
			});
		};
		if((!(switchLtc.checked)) && usd.classList.contains('selected')) {
			ajaxGet(usdLtcUrl, function(data) {
				ltcHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-dollar-sign"></i>';
				ltcDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-dollar-sign"></i>';
				ltcWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-dollar-sign"></i>';
				ltcMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-dollar-sign"></i>';
			});
		};
		if((!(switchLtc.checked)) && eur.classList.contains('selected')) {
			ajaxGet(eurLtcUrl, function(data) {
				ltcHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-euro-sign"></i>';
				ltcDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-euro-sign"></i>';
				ltcWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-euro-sign"></i>';
				ltcMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-euro-sign"></i>';
			});
		};
		if((!(switchLtc.checked)) && rub.classList.contains('selected')) {
			ajaxGet(rubLtcUrl, function(data) {
				ltcHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-ruble-sign"></i>';
				ltcDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-ruble-sign"></i>';
				ltcWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-ruble-sign"></i>';
				ltcMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-ruble-sign"></i>';
			});
		};
		if((!(switchLtc.checked)) && gbp.classList.contains('selected')) {
			ajaxGet(gbpLtcUrl, function(data) {
				ltcHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-pound-sign"></i>';
				ltcDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-pound-sign"></i>';
				ltcWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-pound-sign"></i>';
				ltcMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-pound-sign"></i>';
			});
		};
	});

	//__________switch_BTC
	switchBtc.addEventListener('change', function() {
		if(switchBtc.checked && usd.classList.contains('selected')) {
			ajaxGet(usdBtcUrl, function(data) {
				btcHourChange.innerHTML = data.changes.percent.hour + '%';
				btcDayChange.innerHTML = data.changes.percent.day + '%';
				btcWeekChange.innerHTML = data.changes.percent.week + '%';
				btcMonthChange.innerHTML = data.changes.percent.month + '%';
			});
		};
		if(switchBtc.checked && eur.classList.contains('selected')) {
			ajaxGet(eurBtcUrl, function(data) {
				btcHourChange.innerHTML = data.changes.percent.hour + '%';
				btcDayChange.innerHTML = data.changes.percent.day + '%';
				btcWeekChange.innerHTML = data.changes.percent.week + '%';
				btcMonthChange.innerHTML = data.changes.percent.month + '%';
			});
		};
		if(switchBtc.checked && rub.classList.contains('selected')) {
			ajaxGet(rubBtcUrl, function(data) {
				btcHourChange.innerHTML = data.changes.percent.hour + '%';
				btcDayChange.innerHTML = data.changes.percent.day + '%';
				btcWeekChange.innerHTML = data.changes.percent.week + '%';
				btcMonthChange.innerHTML = data.changes.percent.month + '%';
			});
		};
		if(switchBtc.checked && gbp.classList.contains('selected')) {
			ajaxGet(gbpBtcUrl, function(data) {
				btcHourChange.innerHTML = data.changes.percent.hour + '%';
				btcDayChange.innerHTML = data.changes.percent.day + '%';
				btcWeekChange.innerHTML = data.changes.percent.week + '%';
				btcMonthChange.innerHTML = data.changes.percent.month + '%';
			});
		};
		if(!(switchBtc.checked) && usd.classList.contains('selected')) {
			ajaxGet(usdBtcUrl, function(data) {
				btcHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-dollar-sign"></i>';
				btcDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-dollar-sign"></i>';
				btcWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-dollar-sign"></i>';
				btcMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-dollar-sign"></i>';
			});
		};
		if((!(switchBtc.checked)) && eur.classList.contains('selected')) {
			ajaxGet(eurBtcUrl, function(data) {
				btcHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-euro-sign"></i>';
				btcDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-euro-sign"></i>';
				btcWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-euro-sign"></i>';
				btcMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-euro-sign"></i>';
			});
		};
		if((!(switchBtc.checked)) && rub.classList.contains('selected')) {
			ajaxGet(rubBtcUrl, function(data) {
				btcHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-ruble-sign"></i>';
				btcDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-ruble-sign"></i>';
				btcWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-ruble-sign"></i>';
				btcMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-ruble-sign"></i>';
			});
		};
		if((!(switchBtc.checked)) && gbp.classList.contains('selected')) {
			ajaxGet(gbpBtcUrl, function(data) {
				btcHourChange.innerHTML = data.changes.price.hour + '<i class="fas fa-pound-sign"></i>';
				btcDayChange.innerHTML = data.changes.price.day + '<i class="fas fa-pound-sign"></i>';
				btcWeekChange.innerHTML = data.changes.price.week + '<i class="fas fa-pound-sign"></i>';
				btcMonthChange.innerHTML = data.changes.price.month + '<i class="fas fa-pound-sign"></i>';
			});
		};
	});


	function ajaxGet(link, callback) {

		var fun = callback || function(data){ };
		var xhr = new XMLHttpRequest();

		//var.1
		/*xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200) {
				fun(JSON.parse(xhr.responseText));
			} else {
				console.log("ERROR!" + xhr.statusText)
			};
		};*/

		//var.2
		xhr.addEventListener("load", function() {
			try {
				fun(JSON.parse(xhr.responseText));
			} catch(err) {
				console.error(err.message);
			};
		});
		xhr.addEventListener("error", function() {			
			console.error("Произошла ошибка соединения");	
		});
		xhr.addEventListener("timeout", function() {
			console.error("Запрос не успел выполниться за " + xhr.timeout + "мс");						
		});
		xhr.timeout = 10000;

		//var.3
		/*xhr.responseType = 'json';

		xhr.addEventListener("load", function() {
			var err;

			switch(xhr.status) {
				case 200:
					fun(xhr.response);
					break;

				case 400:
					err = "Неверный запрос";
					break;	
				case 401:
					err = "Доступ запрещен";
					break;
				case 403:
					err = "Отказ в доступе";
					break;			
				case 404:
					err = "Запрос не найден";
					break;
				case 429:
					err = "Слишком много запросов";
					break;
				default: 
					err = "Статус ответа: " + xhr.status + " " + xhr.statusText;
			};

			if(err) {
				console.error(err);
			};						
		});
		xhr.addEventListener("error", function() {			
			console.error("Произошла ошибка соединения");	
		});
		xhr.addEventListener("timeout", function() {
			console.error("Запрос не успел выполниться за " + xhr.timeout + "мс");						
		});
		xhr.timeout = 10000;*/


		xhr.open('GET', link);
		xhr.send();
	};

};
