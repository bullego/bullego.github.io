"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function (factory) {
  typeof define === 'function' && define.amd ? define('app', factory) : factory();
})(function () {
  'use strict';

  var urlApi = 'https://my-json-server.typicode.com/IlyaLytvynov/ads-box-server/ads';

  function ajaxGet(url, callback) {
    var fun = callback || function (dataApi) {};

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
      try {
        fun(JSON.parse(xhr.responseText));
      } catch (err) {
        console.error(err.message);
      }
    });
    xhr.addEventListener("error", function () {
      console.error("Произошла ошибка соединения");
    });
    xhr.addEventListener("timeout", function () {
      console.error("Запрос не успел выполниться за " + xhr.timeout + "мс");
    });
    xhr.timeout = 10000;
    xhr.open('GET', url);
    xhr.send();
  }

  var Slider =
  /*#__PURE__*/
  function () {
    function Slider(options) {
      var _this = this;

      _classCallCheck(this, Slider);

      this.i = 0;
      this.isToggle = options.isToggle;
      this.imgs = options.imgArr;
      this.titles = options.titleArr;
      this.dscrs = options.dscrArr;
      this.btnNext = document.querySelector(options.btnNext);
      this.btnPrev = document.querySelector(options.btnPrev);
      this.btnStart = document.querySelector(options.btnStart);
      this.btnEnd = document.querySelector(options.btnEnd);
      this.btnToggle = document.querySelector(options.btnToggle);
      this.slImg = document.querySelector(options.slImg);
      this.slTitle = document.querySelector(options.slTitle);
      this.slDscr = document.querySelector(options.slDscr);
      this.dscr = document.querySelector('.sl-dscr-wrap');
      
      this.btnStart.addEventListener('click', function () {
        return _this.showStart();
      });
      this.btnEnd.addEventListener('click', function () {
        return _this.showEnd();
      });
      this.btnNext.addEventListener('click', function () {
        return _this.showNext();
      });
      this.btnPrev.addEventListener('click', function () {
        return _this.showPrev();
      });
      this.btnToggle.addEventListener('click', function () {
        return _this.onToggleHandler();
      });
    }

    _createClass(Slider, [{
      key: "showStart",
      value: function showStart() {
        this.i = 0;
        this.slImg.src = this.imgs[this.i];
        this.slTitle.innerHTML = this.titles[this.i];
        this.slDscr.innerHTML = this.dscrs[this.i].slice(0, 51) + '...';
      }
    }, {
      key: "showEnd",
      value: function showEnd() {
        this.i = this.imgs.length - 1;
        this.slImg.src = this.imgs[this.i];
        this.slTitle.innerHTML = this.titles[this.i];
        this.slDscr.innerHTML = this.dscrs[this.i].slice(0, 51) + '...';
      }
    }, {
      key: "showNext",
      value: function showNext() {
        if (this.i < this.imgs.length - 1) {
          this.i += 1;
          this.slImg.src = this.imgs[this.i];
          this.slTitle.innerHTML = this.titles[this.i];
          this.slDscr.innerHTML = this.dscrs[this.i].slice(0, 51) + '...';
        }
      }
    }, {
      key: "showPrev",
      value: function showPrev() {
        if (this.i > 0) {
          this.i--;
          this.slImg.src = this.imgs[this.i];
          this.slTitle.innerHTML = this.titles[this.i];
          this.slDscr.innerHTML = this.dscrs[this.i].slice(0, 51) + '...';
        }
      }
    }, {
      key: "onToggleHandler",
      value: function onToggleHandler() {
        //add animation
        if (this.dscr.classList.contains('animate')) {
          this.dscr.classList.remove('animate');
          this.dscr.classList.add('no-animate');
        } else {
          this.dscr.classList.remove('no-animate');
          this.dscr.classList.add('animate');
        }

        //add content
        if (!this.isToggle) {
          this.slDscr.innerHTML = this.dscrs[this.i];
          this.isToggle = !this.isToggle;
        } else {
          this.slDscr.innerHTML = this.dscrs[this.i].slice(0, 51) + '...';
          this.isToggle = !this.isToggle;
        }
      }
    }]);

    return Slider;
  }();

  ajaxGet(urlApi, function (dataApi) {
    var imgArr = [];
    var titleArr = [];
    var fullDscrArr = [];
    var isToggle = false;

    for (var i = 0; i < dataApi.length; i++) {
      imgArr.push(dataApi[i].img);
      titleArr.push(dataApi[i].title);
      fullDscrArr.push(dataApi[i].description);
    }

    var options = {
      isToggle: isToggle,
      imgArr: imgArr,
      titleArr: titleArr,
      dscrArr: fullDscrArr,
      btnPrev: '.btn-prev',
      btnNext: '.btn-next',
      btnStart: '.btn-start',
      btnEnd: '.btn-end',
      btnToggle: '.btn-toggle',
      slImg: '.sl-img',
      slTitle: '.sl-title',
      slDscr: '.sl-dscr'
    };
    var sl_1 = new Slider(options);
    sl_1.showStart();
  });
});