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
                '404',
                'constructor',
                'email',
                'inner',
                'job',
                'master-one',
                'masters',
                'news-one',
                'news',
                'sale',
                'salon-one',
                'sertificate-2',
                'sertificate',
                'service-1',
                'service-2',
                ]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvanMvYXBwLmpzIiwic291cmNlL2pzL21vZHVsZXMvYWNjb3JkZW9uLW1hc3RlcnMuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9hY2NvcmRlb24tcHJpY2UuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9oYW1idXJnZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9saWdodGJveC5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL21hc3RlcnMtc2VjLWNhcm91c2VsLmpzIiwic291cmNlL2pzL21vZHVsZXMvbWFzdGVycy13b3Jrcy1jYXJvdXNlbC5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL21vYi1tZW51LmpzIiwic291cmNlL2pzL21vZHVsZXMvcHJlbG9hZGVyLmpzIiwic291cmNlL2pzL21vZHVsZXMvcmV2aWV3cy1zbGlkZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9zYWxvbi1tYXN0ZXJzLWNhcm91c2VsLmpzIiwic291cmNlL2pzL21vZHVsZXMvc2Fsb24tb25lLXNsaWRlci5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL3Njcm9sbC0yLWFuY29yLmpzIiwic291cmNlL2pzL21vZHVsZXMvc2VsZWN0LXVpLmpzIiwic291cmNlL2pzL21vZHVsZXMvc3ZnNGV2ZXJ5Ym9keS5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL3RlbXAtbmF2LmpzIiwic291cmNlL2pzL21vZHVsZXMvdG9wLXNsaWRlci5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL3dvcmstZ2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKGZ1bmN0aW9uKCkge1xuXG4gIC8v0JLRgNC10LzQtdC90L3QvtC1INC80LXQvdGOINC00LvRjyDRgNCw0LfRgNCw0LHQvtGC0YfQuNC60LBcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3RlbXAtbmF2JykoKTtcblxuICAvL3ByZWxvYWRlclxuICByZXF1aXJlKCcuL21vZHVsZXMvcHJlbG9hZGVyJykoKTtcblxuICAvL3pvb20gZm9yIE1hY0Jvb2tcbiAgLy8gcmVxdWlyZSgnLi9tb2R1bGVzL3pvb20nKSgpO1xuXG4gIC8vdG9wLW1lbnVfX2ljb24gaGFtYnVyZ2VyICsgbW9iaWxlIG1lbnVcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL2hhbWJ1cmdlcicpKCk7XG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9tb2ItbWVudScpKCk7XG5cbiAgLy9zY3JvbGwgMiBhbmNvci1saW5rXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9zY3JvbGwtMi1hbmNvcicpKCk7XG5cbiAgLy9nYWxsZXJ5IGluIHdvcmstc2VjdGlvblxuICByZXF1aXJlKCcuL21vZHVsZXMvd29yay1nYWxsZXJ5JykoKTtcblxuICAvL2Nhcm91c2VsIGluIG1hc3RlcnMgc2VjdGlvblxuICByZXF1aXJlKCcuL21vZHVsZXMvbWFzdGVycy1zZWMtY2Fyb3VzZWwnKSgpO1xuXG4gIC8vY2Fyb3VzZWwgaW4gbWFzdGVycy1vbmUuaHRtbFxuICByZXF1aXJlKCcuL21vZHVsZXMvbWFzdGVycy13b3Jrcy1jYXJvdXNlbCcpKCk7XG5cbiAgLy9jYXJvdXNlbCBpbiBzYWxvbmUtb25lLmh0bWxcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3NhbG9uLW1hc3RlcnMtY2Fyb3VzZWwnKSgpO1xuXG4gIC8vc2xpZGVyIGluIHJldmlld3Mgc2VjdGlvblxuICByZXF1aXJlKCcuL21vZHVsZXMvcmV2aWV3cy1zbGlkZXInKSgpO1xuXG4gIC8vc2xpZGVyIGluIHRvcCBzZWN0aW9uIGluZGV4Lmh0bWxcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3RvcC1zbGlkZXInKSgpO1xuXG4gIC8vYWNjb3JkZW9uIGluIG1hc3RlcnMuaHRtbFxuICByZXF1aXJlKCcuL21vZHVsZXMvYWNjb3JkZW9uLW1hc3RlcnMnKSgpO1xuXG4gIC8vYWNjb3JkZW9uIGZvciBwcmljZVxuICByZXF1aXJlKCcuL21vZHVsZXMvYWNjb3JkZW9uLXByaWNlJykoKTtcblxuICAvL1NWRyBmb3IgSUVcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3N2ZzRldmVyeWJvZHknKSgpO1xuXG4gIC8vY29sb3ItdG8tZ3JleSBwaG90byBpbiBzZXJ2aWNlJnNhbGxvbiBzZWN0aW9uXG4gIC8vIHJlcXVpcmUoJy4vbW9kdWxlcy9ncmV5c2NhbGUnKSgpO1xuICAvLyByZXF1aXJlKCcuL21vZHVsZXMvZ3JleXNjYWxlLXNhbG9ucycpKCk7XG5cbiAgLy9zYWxvbi1vbmUtc2xpZGVyXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9zYWxvbi1vbmUtc2xpZGVyJykoKTtcblxuICAvL2xpZ2h0Ym94XG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9saWdodGJveCcpKCk7XG5cbiAgLy9jdXN0b20gc2VsZWN0Ym94IHdpdGgganF1ZXJ5VUlcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3NlbGVjdC11aScpKCk7XG5cbiAgLy/QktGL0YDQsNCy0L3QuNCy0LDQvdC40LUg0LLRi9GB0L7RgtGLINGE0L7QvdCwINGDIHNhbGUtY2FyZFxuICAvLyByZXF1aXJlKCcuL21vZHVsZXMvc2FsZS1jYXJkJykoKTtcblxuICAvL2FuaW1hdGUgc2VjdGlvbiBpbiBsb2FkZWRcbiAgLy8gcmVxdWlyZSgnLi9tb2R1bGVzL3dheXBvaW50cycpKCk7XG4gIC8vIHJlcXVpcmUoJy4vbW9kdWxlcy9hbmltYXRlLWNzcycpKCk7XG5cbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8vYWNjcm9yZGVvbiBpbiBtYXN0ZXJzLmh0bWxcclxuICAkKCcubWFzdGVycy1maWx0ZXJfX3JvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8vYWNjcm9yZGVvbiBmb3IgcHJpY2Umc2VydmljZVxyXG4gICQoZnVuY3Rpb24oJCl7XHJcbiAgICB2YXIgY29udGVudHMgPSAkKCcuYWNjb3JkZW9uLWNvbnRlbnQnKTtcclxuICAgIHZhciB0aXRsZXMgPSAkKCcuYWNjb3JkZW9uLXRpdGxlX19jbGljaycpO1xyXG4gICAgdGl0bGVzLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgdmFyIHRpdGxlID0gJCh0aGlzKTtcclxuICAgICAgY29udGVudHMuZmlsdGVyKCc6dmlzaWJsZScpLnNsaWRlVXAoZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLnByZXYoJy5hY2NvcmRlb24tdGl0bGUnKS5yZW1vdmVDbGFzcygnaXMtb3BlbmVkJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdmFyIHRpdGxlUGFyZW50ID0gdGl0bGUucGFyZW50KCk7XHJcbiAgICAgIHZhciBjb250ZW50ID0gdGl0bGVQYXJlbnQubmV4dCgnLmFjY29yZGVvbi1jb250ZW50Jyk7XHJcblxyXG4gICAgICBpZiAoIWNvbnRlbnQuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICBjb250ZW50LnNsaWRlRG93bihmdW5jdGlvbigpe3RpdGxlUGFyZW50LmFkZENsYXNzKCdpcy1vcGVuZWQnKX0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgLy90b3AtbWVudV9faWNvbiBoYW1idXJnZXJcclxuICAkKCcuaGFtYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvbicpO1xyXG4gICAgJChcIi5tZW51LW1vYl9fbGlzdFwiKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgJChcIi5tZW51LW1vYl9faXRlbVwiKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoXCJmaXhcIik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8vZ2FsbGVyeSBsaWdodGJveFxyXG4gICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxpZ2h0Ym94Lm9wdGlvbih7XHJcbiAgICAgICAgJ3dyYXBBcm91bmQnOiB0cnVlLFxyXG4gICAgICAgIGRpc2FibGVTY3JvbGxpbmc6IHRydWUsXHJcbiAgICAgICAgcG9zaXRpb25Gcm9tVG9wOiAwXHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAkKCcubWFzdGVycy1zZWNfX2Nhcm91c2VsJykuYnhTbGlkZXIoe1xyXG4gICAgbWluU2xpZGVzOiAxLFxyXG4gICAgbWF4U2xpZGVzOiA1LFxyXG4gICAgc2xpZGVXaWR0aDogMTM4LFxyXG4gICAgc2xpZGVNYXJnaW46IDE4LFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHBhZ2VyOiBmYWxzZSxcclxuICAgIG1vdmVTbGlkZXM6IDFcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgJCgnLm1hc3Rlci13b3Jrc19fY2Fyb3VzZWwnKS5ieFNsaWRlcih7XHJcbiAgICBtaW5TbGlkZXM6IDEsXHJcbiAgICBtYXhTbGlkZXM6IDUsXHJcbiAgICBzbGlkZVdpZHRoOiAxODgsXHJcbiAgICBzbGlkZU1hcmdpbjogMTUsXHJcbiAgICAvLyBhdXRvOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHBhZ2VyOiBmYWxzZSxcclxuICAgIG1vdmVTbGlkZXM6IDFcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgLy9tb2JpbGUgbWVudVxyXG4gICQoJy5tZW51LW1vYl9fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIi5oYW1idXJnZXJcIikudG9nZ2xlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKFwiLm1lbnUtbW9iX19saXN0XCIpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAkKFwiLm1lbnUtbW9iX19pdGVtXCIpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcyhcImZpeFwiKTtcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuICAvL3ByZWxvYWRlclxyXG4gICQoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaW1ncyA9IFtdO1xyXG5cclxuICAgICQuZWFjaCgkKCcqJyksIGZ1bmN0aW9uKCkgeyAvL9C/0LXRgNC10LHQuNGA0LDQtdC8INCy0YHQtSDRgdC10LvQtdC60YLQvtGA0YtcclxuICAgICAgdmFyXHJcbiAgICAgICAgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgIGJhY2tncm91bmQgPSAkdGhpcy5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnKSxcclxuICAgICAgICBpbWcgPSAkdGhpcy5pcygnaW1nJyk7IC8v0L/RgNC+0LLQtdGA0Y/QtdC8INC60LDRgNGC0LjQvdC60LAg0LvQuCDRjdGC0L5cclxuXHJcbiAgICAgIGlmIChiYWNrZ3JvdW5kICE9ICdub25lJykge1xyXG4gICAgICAgIHZhciBwYXRoID0gYmFja2dyb3VuZC5yZXBsYWNlKCd1cmwoXCInLCAnJykucmVwbGFjZSgnXCIpJywgJycpO1xyXG4gICAgICAgIGltZ3MucHVzaChwYXRoKTsgLy/QtNC+0LHQsNCy0LvRj9C10Lwg0L/Rg9GC0Lgg0Log0YTQvtC90LDQvCDQsiDQvNCw0YHRgdC40LJcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGltZykge1xyXG4gICAgICAgIHZhciBwYXRoID0gJHRoaXMuYXR0cignc3JjJyk7IC8v0LHQtdGA0LXQvCDQv9GD0YLRjCDQuiDQutCw0YDRgtC40L3QutC1IGltZ1xyXG5cclxuICAgICAgICBpZiAocGF0aCkgeyAvL9C10YHQu9C4INC/0YPRgtGMINC90LUg0L/Rg9GB0YLQvtC5XHJcbiAgICAgICAgICBpbWdzLnB1c2gocGF0aCk7IC8v0LTQvtCx0LDQstC70Y/QtdC8INC10LPQviDQsiDQvNCw0YHRgdC40LJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBwZXJjZW50c1RvdGFsID0gMTtcclxuXHJcbiAgICAvL9C/0YDQvtGF0L7QtNC40Lwg0L/QviDQvNCw0YHRgdC40LLRgyDQuCDQv9GA0L7QstC10YDRj9C10Lwg0LfQsNCz0YDRg9C30LjQu9C40YHRjCDQu9C4INC60LDRgNGC0LjQvdC60LhcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgaW1hZ2UgPSAkKCc8aW1nPicsIHsgLy/RgdC+0LfQtNCw0LXQvCDRjdC70LXQvNC10L3RglxyXG4gICAgICAgIGF0dHI6IHsgLy/Qt9Cw0LTQsNC10Lwg0LXQvNGDINC/0LXRgNC10LzQtdGC0YDRiyAo0LIg0LTQsNC90L3QvtC8INGB0LvRg9GH0LUg0LDRgtGA0LjQsdGD0YIpXHJcbiAgICAgICAgICBzcmM6IGltZ3NbaV1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaW1hZ2Uub24oe1xyXG4gICAgICAgIC8v0L/RgNC+0LLQtdGA0Y/QtdC8INC30LDQs9GA0YPQt9C40LvQvtGB0Ywg0LvQuCDQuNC30L7QsdGA0LDQttC10L3QuNC1XHJcbiAgICAgICAgbG9hZCA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgLy/QstGL0LfRi9Cy0LDQtdC8INGE0YPQvS3RjiDQstGL0LLQvtC00LAg0L/RgNC+0YbQtdC90YLQvtCyXHJcbiAgICAgICAgICBzZXRQZXJjZW50cyhpbWdzLmxlbmd0aCwgcGVyY2VudHNUb3RhbCk7XHJcbiAgICAgICAgICAvL9GD0LLQtdC70LjRh9C40LLQsNC10Lwg0YHRh9C10YLRh9C40Log0LfQsNCz0YDRg9C20LXQvdC90YvQuSDQutCw0YDRgtC40L3QvtC6INC90LAgMVxyXG4gICAgICAgICAgcGVyY2VudHNUb3RhbCsrO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGVycm9yIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBzZXRQZXJjZW50cyhpbWdzLmxlbmd0aCwgcGVyY2VudHNUb3RhbCk7XHJcbiAgICAgICAgICAvL9C/0YDQuCDQvtGI0LjQsdC60LUg0LfQsNCz0YDRg9C30LrQuCArMSDQuCDQuNC00LXQvCDQtNCw0LvRjNGI0LVcclxuICAgICAgICAgIHBlcmNlbnRzVG90YWwrKztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8v0L/QtdGA0LXQtNCw0LXQvCDQv9GA0L7RhtC10L3RgtGLINCyINC/0YDQtdC70L7QsNC00LXRgFxyXG4gICAgZnVuY3Rpb24gc2V0UGVyY2VudHModG90YWwsIGN1cnJlbnQpIHtcclxuICAgICAgdmFyIHBlcmNlbnQgPSBNYXRoLmNlaWwoY3VycmVudCAvIHRvdGFsICogMTAwKTtcclxuXHJcbiAgICAgIGlmIChwZXJjZW50ID49IDEwMCkge1xyXG4gICAgICAgICQoJy5wcmVsb2FkZXInKS5mYWRlT3V0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICQoJy5wcmVsb2FkZXJfX3BlcmNlbnRzJykudGV4dChwZXJjZW50ICsgJyUnKTtcclxuICAgIH1cclxuICB9KTtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAkKCcucmV2aWV3cy1zbGlkZXInKS5ieFNsaWRlcih7XHJcbiAgICBtb2RlOiAnZmFkZScsXHJcbiAgICBhdXRvOiB0cnVlLFxyXG4gICAgcGFnZXI6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAkKCcuc2Fsb24tbWFzdGVyc19fY2Fyb3VzZWwnKS5ieFNsaWRlcih7XHJcbiAgICBtaW5TbGlkZXM6IDEsXHJcbiAgICBtYXhTbGlkZXM6IDUsXHJcbiAgICBzbGlkZVdpZHRoOiAxMzgsXHJcbiAgICBzbGlkZU1hcmdpbjogMTgsXHJcbiAgICAvLyBhdXRvOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHBhZ2VyOiBmYWxzZSxcclxuICAgIG1vdmVTbGlkZXM6IDEsXHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICQoJyNzYWxvbi1vbmUtc2xpZGVyJykuYnhTbGlkZXIoe1xyXG4gICAgLy8gYXV0bzogdHJ1ZSxcclxuICAgIHBhZ2VyQ3VzdG9tOiAnI3NhbG9uLW9uZS1zbGlkZXItcGFnZXInXHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vIC8vc2Nyb2xsIDIgYW5jb3JcclxuICAgIC8vICQoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgIHZhciBwb3NpdGlvbnMgPSB7fTtcclxuXHJcbiAgICAvLyAgICAgJCgnYm9keSwgaHRtbCcpLnNjcm9sbFRvcCgwKTtcclxuXHJcbiAgICAvLyAgICAgJChcIiNzZXJ2aWNlLCAjbWFzdGVycywgI3NhbG9uc1wiKS5lYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAvLyAgICAgICAgIHBvc2l0aW9uc1skKHRoaXMpLmF0dHIoJ2lkJyldID0gKCQodGhpcykub2Zmc2V0KCkudG9wICogJChcImJvZHlcIikuY3NzKCd6b29tJykpO1xyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAkKCcubWVudV9fbGlua1tocmVmKj1cXFxcI10nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyAgICAgICAgIHZhciBhbmNob3IgPSAkKHRoaXMpO1xyXG4gICAgLy8gICAgICAgICB2YXIgaHJlZiA9IGFuY2hvci5hdHRyKCdocmVmJyk7XHJcbiAgICAvLyAgICAgICAgIHZhciB0b3AgPSBwb3NpdGlvbnNbaHJlZi5yZXBsYWNlKCcjJywgJycpXTtcclxuXHJcbiAgICAvLyAgICAgICAgIGlmKCQoaHJlZikubGVuZ3RoIDw9IDApIHtcclxuICAgIC8vICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gZG9jdW1lbnQub3JpZ2luICsgaHJlZlxyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAkKCdib2R5LCBodG1sJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgLy8gICAgICAgICAgICAgc2Nyb2xsVG9wOiAodG9wIC0gODApICsgJ3B4J1xyXG4gICAgLy8gICAgICAgICB9LCAxMDAwKTtcclxuICAgIC8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vIH0pO1xyXG5cclxuXHJcbiAgICAvLyAkKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAkKCcubWVudS1tb2JfX2xpbmtbaHJlZio9XFxcXCNdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gICAgICAgICB2YXIgYW5jaG9yID0gJCh0aGlzKTtcclxuICAgIC8vICAgICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgIC8vICAgICAgICAgICAgIHNjcm9sbFRvcDogJChhbmNob3IuYXR0cignaHJlZicpKS5vZmZzZXQoKS50b3AgLSA4MCArICdweCdcclxuICAgIC8vICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAvLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyBiZWdpbiBzY3JvbGwgMiBhbmNvciBkZXNjdG9wIG1lbnVcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJy5tZW51X19saW5rW2hyZWYqPVxcXFwjXScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgIHZhciBhbmNob3IgPSAkKHRoaXMpO1xyXG4gICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKGFuY2hvci5hdHRyKCdocmVmJykpLm9mZnNldCgpLnRvcCAtIDAgKyAncHgnXHJcbiAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgIC8vIGVuZCBzY3JvbGwgMiBhbmNvciBkZXNjdG9wIG1lbnVcclxuXHJcbiAgICAvLyBiZWdpbiBzY3JvbGwgMiBhbmNvciBtb2JpbGUgbWVudVxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgJCgnLm1lbnUtbW9iX19saW5rW2hyZWYqPVxcXFwjXScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgIHZhciBhbmNob3IgPSAkKHRoaXMpO1xyXG4gICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKGFuY2hvci5hdHRyKCdocmVmJykpLm9mZnNldCgpLnRvcCAtIDAgKyAncHgnXHJcbiAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgIC8vIGVuZCBzY3JvbGwgMiBhbmNvciBtb2JpbGUgbWVudVxyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gY3VzdG9tIHNlbGVjdGJveFxyXG4gICAgJCggXCIuc2VsZWN0bWVudVwiICkuc2VsZWN0bWVudSgpO1xyXG5cclxuICAgIC8vIGNoYW5nZSBwaWN0dXJlcyBpbiBzZXJ0aWZpY2F0ZSBwYWdlXHJcbiAgICAkKCBcIi5jZXJ0aWZpY2F0ZS1zZWxlY3RcIiApLnNlbGVjdG1lbnUoe1xyXG4gICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xyXG4gICAgICAgIHZhciBzZXJ0aWZpY2F0ZVBpYyA9ICcjcGljLScgKyAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJCh0aGlzKS5hdHRyKCdpZCcpKTtcclxuICAgICAgICB2YXIgc2VydGlmaWNhdGVJbWcgPSAkKHVpLml0ZW0uZWxlbWVudFswXSkuZGF0YSgncGF0aCcpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlcnRpZmljYXRlUGljKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZXJ0aWZpY2F0ZUltZyk7XHJcbiAgICAgICAgJChzZXJ0aWZpY2F0ZVBpYykuZmluZCgnaW1nOmZpcnN0JykuYXR0cignc3JjJywgc2VydGlmaWNhdGVJbWcpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCQodWkuaXRlbS5lbGVtZW50WzBdKS5kYXRhKCdwYXRoJykpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8vU1ZHIGZvciBJRVxyXG4gICQoZnVuY3Rpb24oKSB7XHJcbiAgICBzdmc0ZXZlcnlib2R5KCk7XHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBwYWdlV2lkZ2V0KFsnaW5kZXgnLFxyXG4gICAgICAgICAgICAgICAgJzQwNCcsXHJcbiAgICAgICAgICAgICAgICAnY29uc3RydWN0b3InLFxyXG4gICAgICAgICAgICAgICAgJ2VtYWlsJyxcclxuICAgICAgICAgICAgICAgICdpbm5lcicsXHJcbiAgICAgICAgICAgICAgICAnam9iJyxcclxuICAgICAgICAgICAgICAgICdtYXN0ZXItb25lJyxcclxuICAgICAgICAgICAgICAgICdtYXN0ZXJzJyxcclxuICAgICAgICAgICAgICAgICduZXdzLW9uZScsXHJcbiAgICAgICAgICAgICAgICAnbmV3cycsXHJcbiAgICAgICAgICAgICAgICAnc2FsZScsXHJcbiAgICAgICAgICAgICAgICAnc2Fsb24tb25lJyxcclxuICAgICAgICAgICAgICAgICdzZXJ0aWZpY2F0ZS0yJyxcclxuICAgICAgICAgICAgICAgICdzZXJ0aWZpY2F0ZScsXHJcbiAgICAgICAgICAgICAgICAnc2VydmljZS0xJyxcclxuICAgICAgICAgICAgICAgICdzZXJ2aWNlLTInLFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHBhZ2VXaWRnZXQocGFnZXMpIHtcclxuICAgIHZhciB3aWRnZXRXcmFwID0gJCgnPGRpdiBjbGFzcz1cIndpZGdldF93cmFwXCI+PHVsIGNsYXNzPVwid2lkZ2V0X2xpc3RcIj48L3VsPjwvZGl2PicpO1xyXG4gICAgd2lkZ2V0V3JhcC5wcmVwZW5kVG8oXCJib2R5XCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKCc8bGkgY2xhc3M9XCJ3aWRnZXRfaXRlbVwiPjxhIGNsYXNzPVwid2lkZ2V0X2xpbmtcIiBocmVmPVwiJyArIHBhZ2VzW2ldICsgJy5odG1sJyArICdcIj4nICsgcGFnZXNbaV0gKyAnPC9hPjwvbGk+JykuYXBwZW5kVG8oJy53aWRnZXRfbGlzdCcpO1xyXG4gICAgfVxyXG4gICAgdmFyIHdpZGdldFN0aWxpemF0aW9uID0gJCgnPHN0eWxlPmJvZHkge3Bvc2l0aW9uOnJlbGF0aXZlfSAud2lkZ2V0X3dyYXB7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3otaW5kZXg6MTk5OTk7cGFkZGluZzoxMHB4IDIwcHg7YmFja2dyb3VuZDojMjIyO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEwcHg7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuM3MgZWFzZTt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTEwMCUsMCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGUoLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMTAwJSwwKX0ud2lkZ2V0X3dyYXA6YWZ0ZXJ7Y29udGVudDpcIiBcIjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjEwMCU7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtiYWNrZ3JvdW5kOiMyMjIgdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUFnTUFBQUJpblJmeUFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFBeFFURlJGLy8vLy8vLy9BQUFBLy8vL0JRQmt3Z0FBQUFOMFVrNVR4TU1BakFkK3p3QUFBQ05KUkVGVUNOZGpxUC8vL3kvRGZ5QmcrTFZxMVhvbzhXOC9Da0ZZQW13QTBLZy9BRmNBTlQ1ZmU3bDRBQUFBQUVsRlRrU3VRbUNDKSBuby1yZXBlYXQgNTAlIDUwJTtjdXJzb3I6cG9pbnRlcn0ud2lkZ2V0X3dyYXA6aG92ZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCl9LndpZGdldF9pdGVte3BhZGRpbmc6MCAwIDEwcHh9LndpZGdldF9saW5re2NvbG9yOiNmZmY7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Zm9udC1zaXplOjE1cHg7fS53aWRnZXRfbGluazpob3Zlcnt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfSA8L3N0eWxlPicpO1xyXG4gICAgd2lkZ2V0U3RpbGl6YXRpb24ucHJlcGVuZFRvKFwiLndpZGdldF93cmFwXCIpO1xyXG4gIH1cclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgalF1ZXJ5KFwiI2xheWVyc2xpZGVyXCIpLmxheWVyU2xpZGVyKHtcclxuICAgIHJlc3BvbnNpdmU6IGZhbHNlLFxyXG4gICAgLy8gcmVzcG9uc2l2ZVVuZGVyOiAxMTQwLFxyXG4gICAgcmVzcG9uc2l2ZVVuZGVyOiA4NjAsXHJcbiAgICAvLyBsYXllcnNDb250YWluZXI6IDExNDAsXHJcbiAgICBsYXllcnNDb250YWluZXI6IDg2MCxcclxuICAgIHNraW5zUGF0aDogJycsXHJcbiAgICBza2luOiAnJyxcclxuICAgIC8vIGF1dG9TdGFydCA6IGZhbHNlLFxyXG4gICAgYXV0b1N0YXJ0IDogdHJ1ZVxyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAkKCcjcmktZ3JpZCcpLmdyaWRyb3RhdG9yKHtcclxuICAgIHJvd3MgICAgICA6IDIsXHJcbiAgICBjb2x1bW5zICAgOiA2LFxyXG4gICAgYW5pbVR5cGUgIDogJ3JvdGF0ZUxlZnRTY2FsZScsXHJcbiAgICBhbmltU3BlZWQgOiA3MDAsXHJcbiAgICBpbnRlcnZhbCAgOiAxNTAwLFxyXG4gICAgc3RlcCAgICAgIDogMixcclxuICAgIHcxMDI0ICAgICAgICAgICA6IHtcclxuICAgICAgICByb3dzICAgIDogMixcclxuICAgICAgICBjb2x1bW5zIDogNVxyXG4gICAgfSxcclxuXHJcbiAgICB3NzY4ICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgcm93cyAgICA6IDIsXHJcbiAgICAgICAgY29sdW1ucyA6IDRcclxuICAgIH0sXHJcblxyXG4gICAgdzQ4MCAgICAgICAgICAgIDoge1xyXG4gICAgICAgIHJvd3MgICAgOiAyLFxyXG4gICAgICAgIGNvbHVtbnMgOiAzXHJcbiAgICB9LFxyXG5cclxuICAgIHczMjAgICAgICAgICAgICA6IHtcclxuICAgICAgICByb3dzICAgIDogMixcclxuICAgICAgICBjb2x1bW5zIDogMlxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxufTsiXX0=
