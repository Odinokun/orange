(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function() {

  //Временное меню для разработчика
  require('./modules/temp-nav')();

  //preloader
  require('./modules/preloader')();

  //zoom for MacBook
  // require('./modules/zoom')();

  //top-menu__icon hamburger + mobile menu
  require('./modules/hamburger')();
  require('./modules/mob-menu')();

  //scroll 2 ancor-link
  require('./modules/scroll-2-ancor')();

  //gallery in work-section
  require('./modules/work-gallery')();

  //carousel in masters section
  require('./modules/masters-sec-carousel')();

  //carousel in masters-one.html
  require('./modules/masters-works-carousel')();

  //carousel in salone-one.html
  require('./modules/salon-masters-carousel')();

  //slider in reviews section
  require('./modules/reviews-slider')();

  //slider in top section index.html
  require('./modules/top-slider')();

  //accordeon in masters.html
  require('./modules/accordeon-masters')();

  //accordeon for price
  require('./modules/accordeon-price')();

  //SVG for IE
  require('./modules/svg4everybody')();

  //color-to-grey photo in service&sallon section
  // require('./modules/greyscale')();
  // require('./modules/greyscale-salons')();

  //salon-one-slider
  require('./modules/salon-one-slider')();

  //lightbox
  require('./modules/lightbox')();

  //custom selectbox with jqueryUI
  require('./modules/select-ui')();

  //Выравнивание высоты фона у sale-card
  // require('./modules/sale-card')();

  //animate section in loaded
  // require('./modules/waypoints')();
  // require('./modules/animate-css')();

});
},{"./modules/accordeon-masters":2,"./modules/accordeon-price":3,"./modules/hamburger":4,"./modules/lightbox":5,"./modules/masters-sec-carousel":6,"./modules/masters-works-carousel":7,"./modules/mob-menu":8,"./modules/preloader":9,"./modules/reviews-slider":10,"./modules/salon-masters-carousel":11,"./modules/salon-one-slider":12,"./modules/scroll-2-ancor":13,"./modules/select-ui":14,"./modules/svg4everybody":15,"./modules/temp-nav":16,"./modules/top-slider":17,"./modules/work-gallery":18}],2:[function(require,module,exports){
module.exports = function() {

  //accrordeon in masters.html
  $('.masters-filter__row').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });

};
},{}],3:[function(require,module,exports){
module.exports = function() {

  //accrordeon for price&service
  $(function($){
    var contents = $('.accordeon-content');
    var titles = $('.accordeon-title__click');
    titles.on('click',function(){
      var title = $(this);
      contents.filter(':visible').slideUp(function(){
        $(this).prev('.accordeon-title').removeClass('is-opened');
      });

      var titleParent = title.parent();
      var content = titleParent.next('.accordeon-content');

      if (!content.is(':visible')) {
        content.slideDown(function(){titleParent.addClass('is-opened')});
      }
    });
  });

};
},{}],4:[function(require,module,exports){
module.exports = function() {

  //top-menu__icon hamburger
  $('.hamburger').on('click', function() {
    $(this).toggleClass('on');
    $(".menu-mob__list").slideToggle();
    $(".menu-mob__item").toggleClass('active');
    $('body').toggleClass("fix");
    return false;
  });

};
},{}],5:[function(require,module,exports){
module.exports = function() {

  //gallery lightbox
  $(function() {
      lightbox.option({
        'wrapAround': true,
        disableScrolling: true,
        positionFromTop: 0
      });
  });

};
},{}],6:[function(require,module,exports){
module.exports = function() {

  $('.masters-sec__carousel').bxSlider({
    minSlides: 1,
    maxSlides: 5,
    slideWidth: 138,
    slideMargin: 18,
    speed: 500,
    pager: false,
    moveSlides: 1
  });

};
},{}],7:[function(require,module,exports){
module.exports = function() {

  $('.master-works__carousel').bxSlider({
    minSlides: 1,
    maxSlides: 5,
    slideWidth: 188,
    slideMargin: 15,
    // auto: true,
    speed: 500,
    pager: false,
    moveSlides: 1
  });

};
},{}],8:[function(require,module,exports){
module.exports = function() {

  //mobile menu
  $('.menu-mob__link').on('click', function() {
    $(".hamburger").toggleClass('on');
    $(".menu-mob__list").slideToggle();
    $(".menu-mob__item").toggleClass('active');
    $('body').toggleClass("fix");
  });

};
},{}],9:[function(require,module,exports){
module.exports = function() {
  //preloader
  $(function() {
    var imgs = [];

    $.each($('*'), function() { //перебираем все селекторы
      var
        $this = $(this),
        background = $this.css('background-image'),
        img = $this.is('img'); //проверяем картинка ли это

      if (background != 'none') {
        var path = background.replace('url("', '').replace('")', '');
        imgs.push(path); //добавляем пути к фонам в массив
      }

      if (img) {
        var path = $this.attr('src'); //берем путь к картинке img

        if (path) { //если путь не пустой
          imgs.push(path); //добавляем его в массив
        }
      }
    });

    var percentsTotal = 1;

    //проходим по массиву и проверяем загрузились ли картинки
    for (var i = 0; i < imgs.length; i++) {
      var image = $('<img>', { //создаем элемент
        attr: { //задаем ему переметры (в данном случе атрибут)
          src: imgs[i]
        }
      });

      image.on({
        //проверяем загрузилось ли изображение
        load : function() {
          //вызываем фун-ю вывода процентов
          setPercents(imgs.length, percentsTotal);
          //увеличиваем счетчик загруженный картинок на 1
          percentsTotal++;
        },

        error : function() {
          setPercents(imgs.length, percentsTotal);
          //при ошибке загрузки +1 и идем дальше
          percentsTotal++;
        }
      });
    }

    //передаем проценты в прелоадер
    function setPercents(total, current) {
      var percent = Math.ceil(current / total * 100);

      if (percent >= 100) {
        $('.preloader').fadeOut();
      }

      $('.preloader__percents').text(percent + '%');
    }
  });
};
},{}],10:[function(require,module,exports){
module.exports = function() {

  $('.reviews-slider').bxSlider({
    mode: 'fade',
    auto: true,
    pager: false,
  });

};
},{}],11:[function(require,module,exports){
module.exports = function() {

  $('.salon-masters__carousel').bxSlider({
    minSlides: 1,
    maxSlides: 5,
    slideWidth: 138,
    slideMargin: 18,
    // auto: true,
    speed: 500,
    pager: false,
    moveSlides: 1,
  });

};
},{}],12:[function(require,module,exports){
module.exports = function() {

  $('#salon-one-slider').bxSlider({
    // auto: true,
    pagerCustom: '#salon-one-slider-pager'
  });

};
},{}],13:[function(require,module,exports){
module.exports = function () {

    // //scroll 2 ancor
    // $(function () {
    //     var positions = {};

    //     $('body, html').scrollTop(0);

    //     $("#service, #masters, #salons").each(function (item) {
    //         positions[$(this).attr('id')] = ($(this).offset().top * $("body").css('zoom'));
    //     });

    //     $('.menu__link[href*=\\#]').on("click", function (e) {
    //         var anchor = $(this);
    //         var href = anchor.attr('href');
    //         var top = positions[href.replace('#', '')];

    //         if($(href).length <= 0) {
    //             document.location = document.origin + href
    //         }

    //         $('body, html').stop().animate({
    //             scrollTop: (top - 80) + 'px'
    //         }, 1000);
    //         e.preventDefault();
    //     });
    //     return false;
    // });


    // $(function () {
    //     $('.menu-mob__link[href*=\\#]').on("click", function (e) {
    //         var anchor = $(this);
    //         $('html, body').stop().animate({
    //             scrollTop: $(anchor.attr('href')).offset().top - 80 + 'px'
    //         }, 1000);
    //         e.preventDefault();
    //     });
    //     return false;
    // });

    // begin scroll 2 ancor desctop menu
    $(function() {
      $('.menu__link[href*=\\#]').on("click", function(e){
         var anchor = $(this);
         $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top - 0 + 'px'
         }, 1000);
         e.preventDefault();
      });
      return false;
    });
    // end scroll 2 ancor desctop menu

    // begin scroll 2 ancor mobile menu
    $(function() {
      $('.menu-mob__link[href*=\\#]').on("click", function(e){
         var anchor = $(this);
         $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top - 0 + 'px'
         }, 1000);
         e.preventDefault();
      });
      return false;
    });
    // end scroll 2 ancor mobile menu

};
},{}],14:[function(require,module,exports){
module.exports = function() {

  $(function() {
    // custom selectbox
    $( ".selectmenu" ).selectmenu();

    // change pictures in sertificate page
    $( ".certificate-select" ).selectmenu({
      change: function(event, ui) {
        var sertificatePic = '#pic-' + $(this).attr('id');
        // console.log($(this).attr('id'));
        var sertificateImg = $(ui.item.element[0]).data('path');
        // console.log(sertificatePic);
        // console.log(sertificateImg);
        $(sertificatePic).find('img:first').attr('src', sertificateImg);
        // console.log($(ui.item.element[0]).data('path'));
      }
    });
  });


};
},{}],15:[function(require,module,exports){
module.exports = function() {

  //SVG for IE
  $(function() {
    svg4everybody();
  });

};
},{}],16:[function(require,module,exports){
module.exports = function() {

  $(document).ready(function ($) {
    pageWidget(['index',
                'inner',
                'master-one',
                'masters',
                'news',
                'news-one',
                'sale',
                'salon-one',
                'sertificate',
                'sertificate-2',
                'service-1',
                'service-2',
                '404',
                'job',
                'email']);
  });

  function pageWidget(pages) {
    var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
    widgetWrap.prependTo("body");
    for (var i = 0; i < pages.length; i++) {
      $('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
    }
    var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:fixed;top:0;left:0;z-index:19999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
    widgetStilization.prependTo(".widget_wrap");
  }

};
},{}],17:[function(require,module,exports){
module.exports = function() {

  jQuery("#layerslider").layerSlider({
    responsive: false,
    // responsiveUnder: 1140,
    responsiveUnder: 860,
    // layersContainer: 1140,
    layersContainer: 860,
    skinsPath: '',
    skin: '',
    // autoStart : false,
    autoStart : true
  });

};
},{}],18:[function(require,module,exports){
module.exports = function() {

  $('#ri-grid').gridrotator({
    rows      : 2,
    columns   : 6,
    animType  : 'rotateLeftScale',
    animSpeed : 700,
    interval  : 1500,
    step      : 2,
    w1024           : {
        rows    : 2,
        columns : 5
    },

    w768            : {
        rows    : 2,
        columns : 4
    },

    w480            : {
        rows    : 2,
        columns : 3
    },

    w320            : {
        rows    : 2,
        columns : 2
    }
  });

};
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvanMvYXBwLmpzIiwic291cmNlL2pzL21vZHVsZXMvYWNjb3JkZW9uLW1hc3RlcnMuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9hY2NvcmRlb24tcHJpY2UuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9oYW1idXJnZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9saWdodGJveC5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL21hc3RlcnMtc2VjLWNhcm91c2VsLmpzIiwic291cmNlL2pzL21vZHVsZXMvbWFzdGVycy13b3Jrcy1jYXJvdXNlbC5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL21vYi1tZW51LmpzIiwic291cmNlL2pzL21vZHVsZXMvcHJlbG9hZGVyLmpzIiwic291cmNlL2pzL21vZHVsZXMvcmV2aWV3cy1zbGlkZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9zYWxvbi1tYXN0ZXJzLWNhcm91c2VsLmpzIiwic291cmNlL2pzL21vZHVsZXMvc2Fsb24tb25lLXNsaWRlci5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL3Njcm9sbC0yLWFuY29yLmpzIiwic291cmNlL2pzL21vZHVsZXMvc2VsZWN0LXVpLmpzIiwic291cmNlL2pzL21vZHVsZXMvc3ZnNGV2ZXJ5Ym9keS5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL3RlbXAtbmF2LmpzIiwic291cmNlL2pzL21vZHVsZXMvdG9wLXNsaWRlci5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL3dvcmstZ2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoZnVuY3Rpb24oKSB7XG5cbiAgLy/QktGA0LXQvNC10L3QvdC+0LUg0LzQtdC90Y4g0LTQu9GPINGA0LDQt9GA0LDQsdC+0YLRh9C40LrQsFxuICByZXF1aXJlKCcuL21vZHVsZXMvdGVtcC1uYXYnKSgpO1xuXG4gIC8vcHJlbG9hZGVyXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9wcmVsb2FkZXInKSgpO1xuXG4gIC8vem9vbSBmb3IgTWFjQm9va1xuICAvLyByZXF1aXJlKCcuL21vZHVsZXMvem9vbScpKCk7XG5cbiAgLy90b3AtbWVudV9faWNvbiBoYW1idXJnZXIgKyBtb2JpbGUgbWVudVxuICByZXF1aXJlKCcuL21vZHVsZXMvaGFtYnVyZ2VyJykoKTtcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL21vYi1tZW51JykoKTtcblxuICAvL3Njcm9sbCAyIGFuY29yLWxpbmtcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3Njcm9sbC0yLWFuY29yJykoKTtcblxuICAvL2dhbGxlcnkgaW4gd29yay1zZWN0aW9uXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy93b3JrLWdhbGxlcnknKSgpO1xuXG4gIC8vY2Fyb3VzZWwgaW4gbWFzdGVycyBzZWN0aW9uXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9tYXN0ZXJzLXNlYy1jYXJvdXNlbCcpKCk7XG5cbiAgLy9jYXJvdXNlbCBpbiBtYXN0ZXJzLW9uZS5odG1sXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9tYXN0ZXJzLXdvcmtzLWNhcm91c2VsJykoKTtcblxuICAvL2Nhcm91c2VsIGluIHNhbG9uZS1vbmUuaHRtbFxuICByZXF1aXJlKCcuL21vZHVsZXMvc2Fsb24tbWFzdGVycy1jYXJvdXNlbCcpKCk7XG5cbiAgLy9zbGlkZXIgaW4gcmV2aWV3cyBzZWN0aW9uXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9yZXZpZXdzLXNsaWRlcicpKCk7XG5cbiAgLy9zbGlkZXIgaW4gdG9wIHNlY3Rpb24gaW5kZXguaHRtbFxuICByZXF1aXJlKCcuL21vZHVsZXMvdG9wLXNsaWRlcicpKCk7XG5cbiAgLy9hY2NvcmRlb24gaW4gbWFzdGVycy5odG1sXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9hY2NvcmRlb24tbWFzdGVycycpKCk7XG5cbiAgLy9hY2NvcmRlb24gZm9yIHByaWNlXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9hY2NvcmRlb24tcHJpY2UnKSgpO1xuXG4gIC8vU1ZHIGZvciBJRVxuICByZXF1aXJlKCcuL21vZHVsZXMvc3ZnNGV2ZXJ5Ym9keScpKCk7XG5cbiAgLy9jb2xvci10by1ncmV5IHBob3RvIGluIHNlcnZpY2Umc2FsbG9uIHNlY3Rpb25cbiAgLy8gcmVxdWlyZSgnLi9tb2R1bGVzL2dyZXlzY2FsZScpKCk7XG4gIC8vIHJlcXVpcmUoJy4vbW9kdWxlcy9ncmV5c2NhbGUtc2Fsb25zJykoKTtcblxuICAvL3NhbG9uLW9uZS1zbGlkZXJcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3NhbG9uLW9uZS1zbGlkZXInKSgpO1xuXG4gIC8vbGlnaHRib3hcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL2xpZ2h0Ym94JykoKTtcblxuICAvL2N1c3RvbSBzZWxlY3Rib3ggd2l0aCBqcXVlcnlVSVxuICByZXF1aXJlKCcuL21vZHVsZXMvc2VsZWN0LXVpJykoKTtcblxuICAvL9CS0YvRgNCw0LLQvdC40LLQsNC90LjQtSDQstGL0YHQvtGC0Ysg0YTQvtC90LAg0YMgc2FsZS1jYXJkXG4gIC8vIHJlcXVpcmUoJy4vbW9kdWxlcy9zYWxlLWNhcmQnKSgpO1xuXG4gIC8vYW5pbWF0ZSBzZWN0aW9uIGluIGxvYWRlZFxuICAvLyByZXF1aXJlKCcuL21vZHVsZXMvd2F5cG9pbnRzJykoKTtcbiAgLy8gcmVxdWlyZSgnLi9tb2R1bGVzL2FuaW1hdGUtY3NzJykoKTtcblxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgLy9hY2Nyb3JkZW9uIGluIG1hc3RlcnMuaHRtbFxyXG4gICQoJy5tYXN0ZXJzLWZpbHRlcl9fcm93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgLy9hY2Nyb3JkZW9uIGZvciBwcmljZSZzZXJ2aWNlXHJcbiAgJChmdW5jdGlvbigkKXtcclxuICAgIHZhciBjb250ZW50cyA9ICQoJy5hY2NvcmRlb24tY29udGVudCcpO1xyXG4gICAgdmFyIHRpdGxlcyA9ICQoJy5hY2NvcmRlb24tdGl0bGVfX2NsaWNrJyk7XHJcbiAgICB0aXRsZXMub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgdGl0bGUgPSAkKHRoaXMpO1xyXG4gICAgICBjb250ZW50cy5maWx0ZXIoJzp2aXNpYmxlJykuc2xpZGVVcChmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykucHJldignLmFjY29yZGVvbi10aXRsZScpLnJlbW92ZUNsYXNzKCdpcy1vcGVuZWQnKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB2YXIgdGl0bGVQYXJlbnQgPSB0aXRsZS5wYXJlbnQoKTtcclxuICAgICAgdmFyIGNvbnRlbnQgPSB0aXRsZVBhcmVudC5uZXh0KCcuYWNjb3JkZW9uLWNvbnRlbnQnKTtcclxuXHJcbiAgICAgIGlmICghY29udGVudC5pcygnOnZpc2libGUnKSkge1xyXG4gICAgICAgIGNvbnRlbnQuc2xpZGVEb3duKGZ1bmN0aW9uKCl7dGl0bGVQYXJlbnQuYWRkQ2xhc3MoJ2lzLW9wZW5lZCcpfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAvL3RvcC1tZW51X19pY29uIGhhbWJ1cmdlclxyXG4gICQoJy5oYW1idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKFwiLm1lbnUtbW9iX19saXN0XCIpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAkKFwiLm1lbnUtbW9iX19pdGVtXCIpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcyhcImZpeFwiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgLy9nYWxsZXJ5IGxpZ2h0Ym94XHJcbiAgJChmdW5jdGlvbigpIHtcclxuICAgICAgbGlnaHRib3gub3B0aW9uKHtcclxuICAgICAgICAnd3JhcEFyb3VuZCc6IHRydWUsXHJcbiAgICAgICAgZGlzYWJsZVNjcm9sbGluZzogdHJ1ZSxcclxuICAgICAgICBwb3NpdGlvbkZyb21Ub3A6IDBcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICQoJy5tYXN0ZXJzLXNlY19fY2Fyb3VzZWwnKS5ieFNsaWRlcih7XHJcbiAgICBtaW5TbGlkZXM6IDEsXHJcbiAgICBtYXhTbGlkZXM6IDUsXHJcbiAgICBzbGlkZVdpZHRoOiAxMzgsXHJcbiAgICBzbGlkZU1hcmdpbjogMTgsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgcGFnZXI6IGZhbHNlLFxyXG4gICAgbW92ZVNsaWRlczogMVxyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAkKCcubWFzdGVyLXdvcmtzX19jYXJvdXNlbCcpLmJ4U2xpZGVyKHtcclxuICAgIG1pblNsaWRlczogMSxcclxuICAgIG1heFNsaWRlczogNSxcclxuICAgIHNsaWRlV2lkdGg6IDE4OCxcclxuICAgIHNsaWRlTWFyZ2luOiAxNSxcclxuICAgIC8vIGF1dG86IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgcGFnZXI6IGZhbHNlLFxyXG4gICAgbW92ZVNsaWRlczogMVxyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAvL21vYmlsZSBtZW51XHJcbiAgJCgnLm1lbnUtbW9iX19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLmhhbWJ1cmdlclwiKS50b2dnbGVDbGFzcygnb24nKTtcclxuICAgICQoXCIubWVudS1tb2JfX2xpc3RcIikuc2xpZGVUb2dnbGUoKTtcclxuICAgICQoXCIubWVudS1tb2JfX2l0ZW1cIikudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKFwiZml4XCIpO1xyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG4gIC8vcHJlbG9hZGVyXHJcbiAgJChmdW5jdGlvbigpIHtcclxuICAgIHZhciBpbWdzID0gW107XHJcblxyXG4gICAgJC5lYWNoKCQoJyonKSwgZnVuY3Rpb24oKSB7IC8v0L/QtdGA0LXQsdC40YDQsNC10Lwg0LLRgdC1INGB0LXQu9C10LrRgtC+0YDRi1xyXG4gICAgICB2YXJcclxuICAgICAgICAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgYmFja2dyb3VuZCA9ICR0aGlzLmNzcygnYmFja2dyb3VuZC1pbWFnZScpLFxyXG4gICAgICAgIGltZyA9ICR0aGlzLmlzKCdpbWcnKTsgLy/Qv9GA0L7QstC10YDRj9C10Lwg0LrQsNGA0YLQuNC90LrQsCDQu9C4INGN0YLQvlxyXG5cclxuICAgICAgaWYgKGJhY2tncm91bmQgIT0gJ25vbmUnKSB7XHJcbiAgICAgICAgdmFyIHBhdGggPSBiYWNrZ3JvdW5kLnJlcGxhY2UoJ3VybChcIicsICcnKS5yZXBsYWNlKCdcIiknLCAnJyk7XHJcbiAgICAgICAgaW1ncy5wdXNoKHBhdGgpOyAvL9C00L7QsdCw0LLQu9GP0LXQvCDQv9GD0YLQuCDQuiDRhNC+0L3QsNC8INCyINC80LDRgdGB0LjQslxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaW1nKSB7XHJcbiAgICAgICAgdmFyIHBhdGggPSAkdGhpcy5hdHRyKCdzcmMnKTsgLy/QsdC10YDQtdC8INC/0YPRgtGMINC6INC60LDRgNGC0LjQvdC60LUgaW1nXHJcblxyXG4gICAgICAgIGlmIChwYXRoKSB7IC8v0LXRgdC70Lgg0L/Rg9GC0Ywg0L3QtSDQv9GD0YHRgtC+0LlcclxuICAgICAgICAgIGltZ3MucHVzaChwYXRoKTsgLy/QtNC+0LHQsNCy0LvRj9C10Lwg0LXQs9C+INCyINC80LDRgdGB0LjQslxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHBlcmNlbnRzVG90YWwgPSAxO1xyXG5cclxuICAgIC8v0L/RgNC+0YXQvtC00LjQvCDQv9C+INC80LDRgdGB0LjQstGDINC4INC/0YDQvtCy0LXRgNGP0LXQvCDQt9Cw0LPRgNGD0LfQuNC70LjRgdGMINC70Lgg0LrQsNGA0YLQuNC90LrQuFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBpbWFnZSA9ICQoJzxpbWc+JywgeyAvL9GB0L7Qt9C00LDQtdC8INGN0LvQtdC80LXQvdGCXHJcbiAgICAgICAgYXR0cjogeyAvL9C30LDQtNCw0LXQvCDQtdC80YMg0L/QtdGA0LXQvNC10YLRgNGLICjQsiDQtNCw0L3QvdC+0Lwg0YHQu9GD0YfQtSDQsNGC0YDQuNCx0YPRgilcclxuICAgICAgICAgIHNyYzogaW1nc1tpXVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpbWFnZS5vbih7XHJcbiAgICAgICAgLy/Qv9GA0L7QstC10YDRj9C10Lwg0LfQsNCz0YDRg9C30LjQu9C+0YHRjCDQu9C4INC40LfQvtCx0YDQsNC20LXQvdC40LVcclxuICAgICAgICBsb2FkIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAvL9Cy0YvQt9GL0LLQsNC10Lwg0YTRg9C9LdGOINCy0YvQstC+0LTQsCDQv9GA0L7RhtC10L3RgtC+0LJcclxuICAgICAgICAgIHNldFBlcmNlbnRzKGltZ3MubGVuZ3RoLCBwZXJjZW50c1RvdGFsKTtcclxuICAgICAgICAgIC8v0YPQstC10LvQuNGH0LjQstCw0LXQvCDRgdGH0LXRgtGH0LjQuiDQt9Cw0LPRgNGD0LbQtdC90L3Ri9C5INC60LDRgNGC0LjQvdC+0Log0L3QsCAxXHJcbiAgICAgICAgICBwZXJjZW50c1RvdGFsKys7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZXJyb3IgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHNldFBlcmNlbnRzKGltZ3MubGVuZ3RoLCBwZXJjZW50c1RvdGFsKTtcclxuICAgICAgICAgIC8v0L/RgNC4INC+0YjQuNCx0LrQtSDQt9Cw0LPRgNGD0LfQutC4ICsxINC4INC40LTQtdC8INC00LDQu9GM0YjQtVxyXG4gICAgICAgICAgcGVyY2VudHNUb3RhbCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/Qv9C10YDQtdC00LDQtdC8INC/0YDQvtGG0LXQvdGC0Ysg0LIg0L/RgNC10LvQvtCw0LTQtdGAXHJcbiAgICBmdW5jdGlvbiBzZXRQZXJjZW50cyh0b3RhbCwgY3VycmVudCkge1xyXG4gICAgICB2YXIgcGVyY2VudCA9IE1hdGguY2VpbChjdXJyZW50IC8gdG90YWwgKiAxMDApO1xyXG5cclxuICAgICAgaWYgKHBlcmNlbnQgPj0gMTAwKSB7XHJcbiAgICAgICAgJCgnLnByZWxvYWRlcicpLmZhZGVPdXQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJCgnLnByZWxvYWRlcl9fcGVyY2VudHMnKS50ZXh0KHBlcmNlbnQgKyAnJScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICQoJy5yZXZpZXdzLXNsaWRlcicpLmJ4U2xpZGVyKHtcclxuICAgIG1vZGU6ICdmYWRlJyxcclxuICAgIGF1dG86IHRydWUsXHJcbiAgICBwYWdlcjogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICQoJy5zYWxvbi1tYXN0ZXJzX19jYXJvdXNlbCcpLmJ4U2xpZGVyKHtcclxuICAgIG1pblNsaWRlczogMSxcclxuICAgIG1heFNsaWRlczogNSxcclxuICAgIHNsaWRlV2lkdGg6IDEzOCxcclxuICAgIHNsaWRlTWFyZ2luOiAxOCxcclxuICAgIC8vIGF1dG86IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgcGFnZXI6IGZhbHNlLFxyXG4gICAgbW92ZVNsaWRlczogMSxcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgJCgnI3NhbG9uLW9uZS1zbGlkZXInKS5ieFNsaWRlcih7XHJcbiAgICAvLyBhdXRvOiB0cnVlLFxyXG4gICAgcGFnZXJDdXN0b206ICcjc2Fsb24tb25lLXNsaWRlci1wYWdlcidcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gLy9zY3JvbGwgMiBhbmNvclxyXG4gICAgLy8gJChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgdmFyIHBvc2l0aW9ucyA9IHt9O1xyXG5cclxuICAgIC8vICAgICAkKCdib2R5LCBodG1sJykuc2Nyb2xsVG9wKDApO1xyXG5cclxuICAgIC8vICAgICAkKFwiI3NlcnZpY2UsICNtYXN0ZXJzLCAjc2Fsb25zXCIpLmVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIC8vICAgICAgICAgcG9zaXRpb25zWyQodGhpcykuYXR0cignaWQnKV0gPSAoJCh0aGlzKS5vZmZzZXQoKS50b3AgKiAkKFwiYm9keVwiKS5jc3MoJ3pvb20nKSk7XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgICQoJy5tZW51X19saW5rW2hyZWYqPVxcXFwjXScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICAgICAgICAgdmFyIGFuY2hvciA9ICQodGhpcyk7XHJcbiAgICAvLyAgICAgICAgIHZhciBocmVmID0gYW5jaG9yLmF0dHIoJ2hyZWYnKTtcclxuICAgIC8vICAgICAgICAgdmFyIHRvcCA9IHBvc2l0aW9uc1tocmVmLnJlcGxhY2UoJyMnLCAnJyldO1xyXG5cclxuICAgIC8vICAgICAgICAgaWYoJChocmVmKS5sZW5ndGggPD0gMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSBkb2N1bWVudC5vcmlnaW4gKyBocmVmXHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICQoJ2JvZHksIGh0bWwnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAvLyAgICAgICAgICAgICBzY3JvbGxUb3A6ICh0b3AgLSA4MCkgKyAncHgnXHJcbiAgICAvLyAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gfSk7XHJcblxyXG5cclxuICAgIC8vICQoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICQoJy5tZW51LW1vYl9fbGlua1tocmVmKj1cXFxcI10nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyAgICAgICAgIHZhciBhbmNob3IgPSAkKHRoaXMpO1xyXG4gICAgLy8gICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgLy8gICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKGFuY2hvci5hdHRyKCdocmVmJykpLm9mZnNldCgpLnRvcCAtIDgwICsgJ3B4J1xyXG4gICAgLy8gICAgICAgICB9LCAxMDAwKTtcclxuICAgIC8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIGJlZ2luIHNjcm9sbCAyIGFuY29yIGRlc2N0b3AgbWVudVxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgJCgnLm1lbnVfX2xpbmtbaHJlZio9XFxcXCNdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgdmFyIGFuY2hvciA9ICQodGhpcyk7XHJcbiAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoYW5jaG9yLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wIC0gMCArICdweCdcclxuICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgLy8gZW5kIHNjcm9sbCAyIGFuY29yIGRlc2N0b3AgbWVudVxyXG5cclxuICAgIC8vIGJlZ2luIHNjcm9sbCAyIGFuY29yIG1vYmlsZSBtZW51XHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCcubWVudS1tb2JfX2xpbmtbaHJlZio9XFxcXCNdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgdmFyIGFuY2hvciA9ICQodGhpcyk7XHJcbiAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoYW5jaG9yLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wIC0gMCArICdweCdcclxuICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgLy8gZW5kIHNjcm9sbCAyIGFuY29yIG1vYmlsZSBtZW51XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICQoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBjdXN0b20gc2VsZWN0Ym94XHJcbiAgICAkKCBcIi5zZWxlY3RtZW51XCIgKS5zZWxlY3RtZW51KCk7XHJcblxyXG4gICAgLy8gY2hhbmdlIHBpY3R1cmVzIGluIHNlcnRpZmljYXRlIHBhZ2VcclxuICAgICQoIFwiLmNlcnRpZmljYXRlLXNlbGVjdFwiICkuc2VsZWN0bWVudSh7XHJcbiAgICAgIGNoYW5nZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcbiAgICAgICAgdmFyIHNlcnRpZmljYXRlUGljID0gJyNwaWMtJyArICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygkKHRoaXMpLmF0dHIoJ2lkJykpO1xyXG4gICAgICAgIHZhciBzZXJ0aWZpY2F0ZUltZyA9ICQodWkuaXRlbS5lbGVtZW50WzBdKS5kYXRhKCdwYXRoJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VydGlmaWNhdGVQaWMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlcnRpZmljYXRlSW1nKTtcclxuICAgICAgICAkKHNlcnRpZmljYXRlUGljKS5maW5kKCdpbWc6Zmlyc3QnKS5hdHRyKCdzcmMnLCBzZXJ0aWZpY2F0ZUltZyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJCh1aS5pdGVtLmVsZW1lbnRbMF0pLmRhdGEoJ3BhdGgnKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgLy9TVkcgZm9yIElFXHJcbiAgJChmdW5jdGlvbigpIHtcclxuICAgIHN2ZzRldmVyeWJvZHkoKTtcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcclxuICAgIHBhZ2VXaWRnZXQoWydpbmRleCcsXHJcbiAgICAgICAgICAgICAgICAnaW5uZXInLFxyXG4gICAgICAgICAgICAgICAgJ21hc3Rlci1vbmUnLFxyXG4gICAgICAgICAgICAgICAgJ21hc3RlcnMnLFxyXG4gICAgICAgICAgICAgICAgJ25ld3MnLFxyXG4gICAgICAgICAgICAgICAgJ25ld3Mtb25lJyxcclxuICAgICAgICAgICAgICAgICdzYWxlJyxcclxuICAgICAgICAgICAgICAgICdzYWxvbi1vbmUnLFxyXG4gICAgICAgICAgICAgICAgJ3NlcnRpZmljYXRlJyxcclxuICAgICAgICAgICAgICAgICdzZXJ0aWZpY2F0ZS0yJyxcclxuICAgICAgICAgICAgICAgICdzZXJ2aWNlLTEnLFxyXG4gICAgICAgICAgICAgICAgJ3NlcnZpY2UtMicsXHJcbiAgICAgICAgICAgICAgICAnNDA0JyxcclxuICAgICAgICAgICAgICAgICdqb2InLFxyXG4gICAgICAgICAgICAgICAgJ2VtYWlsJ10pO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBwYWdlV2lkZ2V0KHBhZ2VzKSB7XHJcbiAgICB2YXIgd2lkZ2V0V3JhcCA9ICQoJzxkaXYgY2xhc3M9XCJ3aWRnZXRfd3JhcFwiPjx1bCBjbGFzcz1cIndpZGdldF9saXN0XCI+PC91bD48L2Rpdj4nKTtcclxuICAgIHdpZGdldFdyYXAucHJlcGVuZFRvKFwiYm9keVwiKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJCgnPGxpIGNsYXNzPVwid2lkZ2V0X2l0ZW1cIj48YSBjbGFzcz1cIndpZGdldF9saW5rXCIgaHJlZj1cIicgKyBwYWdlc1tpXSArICcuaHRtbCcgKyAnXCI+JyArIHBhZ2VzW2ldICsgJzwvYT48L2xpPicpLmFwcGVuZFRvKCcud2lkZ2V0X2xpc3QnKTtcclxuICAgIH1cclxuICAgIHZhciB3aWRnZXRTdGlsaXphdGlvbiA9ICQoJzxzdHlsZT5ib2R5IHtwb3NpdGlvbjpyZWxhdGl2ZX0gLndpZGdldF93cmFwe3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt6LWluZGV4OjE5OTk5O3BhZGRpbmc6MTBweCAyMHB4O2JhY2tncm91bmQ6IzIyMjtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoxMHB4Oy13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjNzIGVhc2U7dHJhbnNpdGlvbjphbGwgLjNzIGVhc2U7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC0xMDAlLDApOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlKC0xMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTEwMCUsMCl9LndpZGdldF93cmFwOmFmdGVye2NvbnRlbnQ6XCIgXCI7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDoxMDAlO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7YmFja2dyb3VuZDojMjIyIHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFBZ01BQUFCaW5SZnlBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQXhRVEZSRi8vLy8vLy8vQUFBQS8vLy9CUUJrd2dBQUFBTjBVazVUeE1NQWpBZCt6d0FBQUNOSlJFRlVDTmRqcVAvLy95L0RmeUJnK0xWcTFYb284VzgvQ2tGWUFtd0EwS2cvQUZjQU5UNWZlN2w0QUFBQUFFbEZUa1N1UW1DQykgbm8tcmVwZWF0IDUwJSA1MCU7Y3Vyc29yOnBvaW50ZXJ9LndpZGdldF93cmFwOmhvdmVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDApOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDApfS53aWRnZXRfaXRlbXtwYWRkaW5nOjAgMCAxMHB4fS53aWRnZXRfbGlua3tjb2xvcjojZmZmO3RleHQtZGVjb3JhdGlvbjpub25lO2ZvbnQtc2l6ZToxNXB4O30ud2lkZ2V0X2xpbms6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0gPC9zdHlsZT4nKTtcclxuICAgIHdpZGdldFN0aWxpemF0aW9uLnByZXBlbmRUbyhcIi53aWRnZXRfd3JhcFwiKTtcclxuICB9XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIGpRdWVyeShcIiNsYXllcnNsaWRlclwiKS5sYXllclNsaWRlcih7XHJcbiAgICByZXNwb25zaXZlOiBmYWxzZSxcclxuICAgIC8vIHJlc3BvbnNpdmVVbmRlcjogMTE0MCxcclxuICAgIHJlc3BvbnNpdmVVbmRlcjogODYwLFxyXG4gICAgLy8gbGF5ZXJzQ29udGFpbmVyOiAxMTQwLFxyXG4gICAgbGF5ZXJzQ29udGFpbmVyOiA4NjAsXHJcbiAgICBza2luc1BhdGg6ICcnLFxyXG4gICAgc2tpbjogJycsXHJcbiAgICAvLyBhdXRvU3RhcnQgOiBmYWxzZSxcclxuICAgIGF1dG9TdGFydCA6IHRydWVcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgJCgnI3JpLWdyaWQnKS5ncmlkcm90YXRvcih7XHJcbiAgICByb3dzICAgICAgOiAyLFxyXG4gICAgY29sdW1ucyAgIDogNixcclxuICAgIGFuaW1UeXBlICA6ICdyb3RhdGVMZWZ0U2NhbGUnLFxyXG4gICAgYW5pbVNwZWVkIDogNzAwLFxyXG4gICAgaW50ZXJ2YWwgIDogMTUwMCxcclxuICAgIHN0ZXAgICAgICA6IDIsXHJcbiAgICB3MTAyNCAgICAgICAgICAgOiB7XHJcbiAgICAgICAgcm93cyAgICA6IDIsXHJcbiAgICAgICAgY29sdW1ucyA6IDVcclxuICAgIH0sXHJcblxyXG4gICAgdzc2OCAgICAgICAgICAgIDoge1xyXG4gICAgICAgIHJvd3MgICAgOiAyLFxyXG4gICAgICAgIGNvbHVtbnMgOiA0XHJcbiAgICB9LFxyXG5cclxuICAgIHc0ODAgICAgICAgICAgICA6IHtcclxuICAgICAgICByb3dzICAgIDogMixcclxuICAgICAgICBjb2x1bW5zIDogM1xyXG4gICAgfSxcclxuXHJcbiAgICB3MzIwICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgcm93cyAgICA6IDIsXHJcbiAgICAgICAgY29sdW1ucyA6IDJcclxuICAgIH1cclxuICB9KTtcclxuXHJcbn07Il19
