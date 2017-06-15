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

  //слайдер в конструкторе
  require('./modules/lg-slider')();

  //слайдер в конструкторе
  require('./modules/tab-slider')();

  //Выравнивание высоты фона у sale-card
  // require('./modules/sale-card')();

  //animate section in loaded
  // require('./modules/waypoints')();
  // require('./modules/animate-css')();

});
},{"./modules/accordeon-masters":2,"./modules/accordeon-price":3,"./modules/hamburger":4,"./modules/lg-slider":5,"./modules/lightbox":6,"./modules/masters-sec-carousel":7,"./modules/masters-works-carousel":8,"./modules/mob-menu":9,"./modules/preloader":10,"./modules/reviews-slider":11,"./modules/salon-masters-carousel":12,"./modules/salon-one-slider":13,"./modules/scroll-2-ancor":14,"./modules/select-ui":15,"./modules/svg4everybody":16,"./modules/tab-slider":17,"./modules/temp-nav":18,"./modules/top-slider":19,"./modules/work-gallery":20}],2:[function(require,module,exports){
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

  //слайдер в конструкторе
  $('#lg-slider').slick({
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 1000,
  });

};
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
module.exports = function() {

  //mobile menu
  $('.menu-mob__link').on('click', function() {
    $(".hamburger").toggleClass('on');
    $(".menu-mob__list").slideToggle();
    $(".menu-mob__item").toggleClass('active');
    $('body').toggleClass("fix");
  });

};
},{}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
module.exports = function() {

  $('.reviews-slider').bxSlider({
    mode: 'fade',
    auto: true,
    pager: false,
  });

};
},{}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
module.exports = function() {

  $('#salon-one-slider').bxSlider({
    // auto: true,
    pagerCustom: '#salon-one-slider-pager'
  });

};
},{}],14:[function(require,module,exports){
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
},{}],15:[function(require,module,exports){
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
},{}],16:[function(require,module,exports){
module.exports = function() {

  //SVG for IE
  $(function() {
    svg4everybody();
  });

};
},{}],17:[function(require,module,exports){
module.exports = function() {

  //слайдер в конструкторе
  $('#tab-sec__slider').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 1000,
    fade:true,
  });

};
},{}],18:[function(require,module,exports){
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
},{}],19:[function(require,module,exports){
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
},{}],20:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvanMvYXBwLmpzIiwic291cmNlL2pzL21vZHVsZXMvYWNjb3JkZW9uLW1hc3RlcnMuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9hY2NvcmRlb24tcHJpY2UuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9oYW1idXJnZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9sZy1zbGlkZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9saWdodGJveC5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL21hc3RlcnMtc2VjLWNhcm91c2VsLmpzIiwic291cmNlL2pzL21vZHVsZXMvbWFzdGVycy13b3Jrcy1jYXJvdXNlbC5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL21vYi1tZW51LmpzIiwic291cmNlL2pzL21vZHVsZXMvcHJlbG9hZGVyLmpzIiwic291cmNlL2pzL21vZHVsZXMvcmV2aWV3cy1zbGlkZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9zYWxvbi1tYXN0ZXJzLWNhcm91c2VsLmpzIiwic291cmNlL2pzL21vZHVsZXMvc2Fsb24tb25lLXNsaWRlci5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL3Njcm9sbC0yLWFuY29yLmpzIiwic291cmNlL2pzL21vZHVsZXMvc2VsZWN0LXVpLmpzIiwic291cmNlL2pzL21vZHVsZXMvc3ZnNGV2ZXJ5Ym9keS5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL3RhYi1zbGlkZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy90ZW1wLW5hdi5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL3RvcC1zbGlkZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy93b3JrLWdhbGxlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJChmdW5jdGlvbigpIHtcblxuICAvL9CS0YDQtdC80LXQvdC90L7QtSDQvNC10L3RjiDQtNC70Y8g0YDQsNC30YDQsNCx0L7RgtGH0LjQutCwXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy90ZW1wLW5hdicpKCk7XG5cbiAgLy9wcmVsb2FkZXJcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByZWxvYWRlcicpKCk7XG5cbiAgLy96b29tIGZvciBNYWNCb29rXG4gIC8vIHJlcXVpcmUoJy4vbW9kdWxlcy96b29tJykoKTtcblxuICAvL3RvcC1tZW51X19pY29uIGhhbWJ1cmdlciArIG1vYmlsZSBtZW51XG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9oYW1idXJnZXInKSgpO1xuICByZXF1aXJlKCcuL21vZHVsZXMvbW9iLW1lbnUnKSgpO1xuXG4gIC8vc2Nyb2xsIDIgYW5jb3ItbGlua1xuICByZXF1aXJlKCcuL21vZHVsZXMvc2Nyb2xsLTItYW5jb3InKSgpO1xuXG4gIC8vZ2FsbGVyeSBpbiB3b3JrLXNlY3Rpb25cbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3dvcmstZ2FsbGVyeScpKCk7XG5cbiAgLy9jYXJvdXNlbCBpbiBtYXN0ZXJzIHNlY3Rpb25cbiAgcmVxdWlyZSgnLi9tb2R1bGVzL21hc3RlcnMtc2VjLWNhcm91c2VsJykoKTtcblxuICAvL2Nhcm91c2VsIGluIG1hc3RlcnMtb25lLmh0bWxcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL21hc3RlcnMtd29ya3MtY2Fyb3VzZWwnKSgpO1xuXG4gIC8vY2Fyb3VzZWwgaW4gc2Fsb25lLW9uZS5odG1sXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9zYWxvbi1tYXN0ZXJzLWNhcm91c2VsJykoKTtcblxuICAvL3NsaWRlciBpbiByZXZpZXdzIHNlY3Rpb25cbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3Jldmlld3Mtc2xpZGVyJykoKTtcblxuICAvL3NsaWRlciBpbiB0b3Agc2VjdGlvbiBpbmRleC5odG1sXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy90b3Atc2xpZGVyJykoKTtcblxuICAvL2FjY29yZGVvbiBpbiBtYXN0ZXJzLmh0bWxcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL2FjY29yZGVvbi1tYXN0ZXJzJykoKTtcblxuICAvL2FjY29yZGVvbiBmb3IgcHJpY2VcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL2FjY29yZGVvbi1wcmljZScpKCk7XG5cbiAgLy9TVkcgZm9yIElFXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9zdmc0ZXZlcnlib2R5JykoKTtcblxuICAvL2NvbG9yLXRvLWdyZXkgcGhvdG8gaW4gc2VydmljZSZzYWxsb24gc2VjdGlvblxuICAvLyByZXF1aXJlKCcuL21vZHVsZXMvZ3JleXNjYWxlJykoKTtcbiAgLy8gcmVxdWlyZSgnLi9tb2R1bGVzL2dyZXlzY2FsZS1zYWxvbnMnKSgpO1xuXG4gIC8vc2Fsb24tb25lLXNsaWRlclxuICByZXF1aXJlKCcuL21vZHVsZXMvc2Fsb24tb25lLXNsaWRlcicpKCk7XG5cbiAgLy9saWdodGJveFxuICByZXF1aXJlKCcuL21vZHVsZXMvbGlnaHRib3gnKSgpO1xuXG4gIC8vY3VzdG9tIHNlbGVjdGJveCB3aXRoIGpxdWVyeVVJXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9zZWxlY3QtdWknKSgpO1xuXG4gIC8v0YHQu9Cw0LnQtNC10YAg0LIg0LrQvtC90YHRgtGA0YPQutGC0L7RgNC1XG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9sZy1zbGlkZXInKSgpO1xuXG4gIC8v0YHQu9Cw0LnQtNC10YAg0LIg0LrQvtC90YHRgtGA0YPQutGC0L7RgNC1XG4gIHJlcXVpcmUoJy4vbW9kdWxlcy90YWItc2xpZGVyJykoKTtcblxuICAvL9CS0YvRgNCw0LLQvdC40LLQsNC90LjQtSDQstGL0YHQvtGC0Ysg0YTQvtC90LAg0YMgc2FsZS1jYXJkXG4gIC8vIHJlcXVpcmUoJy4vbW9kdWxlcy9zYWxlLWNhcmQnKSgpO1xuXG4gIC8vYW5pbWF0ZSBzZWN0aW9uIGluIGxvYWRlZFxuICAvLyByZXF1aXJlKCcuL21vZHVsZXMvd2F5cG9pbnRzJykoKTtcbiAgLy8gcmVxdWlyZSgnLi9tb2R1bGVzL2FuaW1hdGUtY3NzJykoKTtcblxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgLy9hY2Nyb3JkZW9uIGluIG1hc3RlcnMuaHRtbFxyXG4gICQoJy5tYXN0ZXJzLWZpbHRlcl9fcm93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgLy9hY2Nyb3JkZW9uIGZvciBwcmljZSZzZXJ2aWNlXHJcbiAgJChmdW5jdGlvbigkKXtcclxuICAgIHZhciBjb250ZW50cyA9ICQoJy5hY2NvcmRlb24tY29udGVudCcpO1xyXG4gICAgdmFyIHRpdGxlcyA9ICQoJy5hY2NvcmRlb24tdGl0bGVfX2NsaWNrJyk7XHJcbiAgICB0aXRsZXMub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgdGl0bGUgPSAkKHRoaXMpO1xyXG4gICAgICBjb250ZW50cy5maWx0ZXIoJzp2aXNpYmxlJykuc2xpZGVVcChmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykucHJldignLmFjY29yZGVvbi10aXRsZScpLnJlbW92ZUNsYXNzKCdpcy1vcGVuZWQnKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB2YXIgdGl0bGVQYXJlbnQgPSB0aXRsZS5wYXJlbnQoKTtcclxuICAgICAgdmFyIGNvbnRlbnQgPSB0aXRsZVBhcmVudC5uZXh0KCcuYWNjb3JkZW9uLWNvbnRlbnQnKTtcclxuXHJcbiAgICAgIGlmICghY29udGVudC5pcygnOnZpc2libGUnKSkge1xyXG4gICAgICAgIGNvbnRlbnQuc2xpZGVEb3duKGZ1bmN0aW9uKCl7dGl0bGVQYXJlbnQuYWRkQ2xhc3MoJ2lzLW9wZW5lZCcpfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAvL3RvcC1tZW51X19pY29uIGhhbWJ1cmdlclxyXG4gICQoJy5oYW1idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKFwiLm1lbnUtbW9iX19saXN0XCIpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAkKFwiLm1lbnUtbW9iX19pdGVtXCIpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcyhcImZpeFwiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgLy/RgdC70LDQudC00LXRgCDQsiDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LVcclxuICAkKCcjbGctc2xpZGVyJykuc2xpY2soe1xyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6dHJ1ZSxcclxuICAgIHNwZWVkOiAxMDAwLFxyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAvL2dhbGxlcnkgbGlnaHRib3hcclxuICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICBsaWdodGJveC5vcHRpb24oe1xyXG4gICAgICAgICd3cmFwQXJvdW5kJzogdHJ1ZSxcclxuICAgICAgICBkaXNhYmxlU2Nyb2xsaW5nOiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uRnJvbVRvcDogMFxyXG4gICAgICB9KTtcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgJCgnLm1hc3RlcnMtc2VjX19jYXJvdXNlbCcpLmJ4U2xpZGVyKHtcclxuICAgIG1pblNsaWRlczogMSxcclxuICAgIG1heFNsaWRlczogNSxcclxuICAgIHNsaWRlV2lkdGg6IDEzOCxcclxuICAgIHNsaWRlTWFyZ2luOiAxOCxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBwYWdlcjogZmFsc2UsXHJcbiAgICBtb3ZlU2xpZGVzOiAxXHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICQoJy5tYXN0ZXItd29ya3NfX2Nhcm91c2VsJykuYnhTbGlkZXIoe1xyXG4gICAgbWluU2xpZGVzOiAxLFxyXG4gICAgbWF4U2xpZGVzOiA1LFxyXG4gICAgc2xpZGVXaWR0aDogMTg4LFxyXG4gICAgc2xpZGVNYXJnaW46IDE1LFxyXG4gICAgLy8gYXV0bzogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBwYWdlcjogZmFsc2UsXHJcbiAgICBtb3ZlU2xpZGVzOiAxXHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8vbW9iaWxlIG1lbnVcclxuICAkKCcubWVudS1tb2JfX2xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICQoXCIuaGFtYnVyZ2VyXCIpLnRvZ2dsZUNsYXNzKCdvbicpO1xyXG4gICAgJChcIi5tZW51LW1vYl9fbGlzdFwiKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgJChcIi5tZW51LW1vYl9faXRlbVwiKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoXCJmaXhcIik7XHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgLy9wcmVsb2FkZXJcclxuICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGltZ3MgPSBbXTtcclxuXHJcbiAgICAkLmVhY2goJCgnKicpLCBmdW5jdGlvbigpIHsgLy/Qv9C10YDQtdCx0LjRgNCw0LXQvCDQstGB0LUg0YHQtdC70LXQutGC0L7RgNGLXHJcbiAgICAgIHZhclxyXG4gICAgICAgICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICBiYWNrZ3JvdW5kID0gJHRoaXMuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyksXHJcbiAgICAgICAgaW1nID0gJHRoaXMuaXMoJ2ltZycpOyAvL9C/0YDQvtCy0LXRgNGP0LXQvCDQutCw0YDRgtC40L3QutCwINC70Lgg0Y3RgtC+XHJcblxyXG4gICAgICBpZiAoYmFja2dyb3VuZCAhPSAnbm9uZScpIHtcclxuICAgICAgICB2YXIgcGF0aCA9IGJhY2tncm91bmQucmVwbGFjZSgndXJsKFwiJywgJycpLnJlcGxhY2UoJ1wiKScsICcnKTtcclxuICAgICAgICBpbWdzLnB1c2gocGF0aCk7IC8v0LTQvtCx0LDQstC70Y/QtdC8INC/0YPRgtC4INC6INGE0L7QvdCw0Lwg0LIg0LzQsNGB0YHQuNCyXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpbWcpIHtcclxuICAgICAgICB2YXIgcGF0aCA9ICR0aGlzLmF0dHIoJ3NyYycpOyAvL9Cx0LXRgNC10Lwg0L/Rg9GC0Ywg0Log0LrQsNGA0YLQuNC90LrQtSBpbWdcclxuXHJcbiAgICAgICAgaWYgKHBhdGgpIHsgLy/QtdGB0LvQuCDQv9GD0YLRjCDQvdC1INC/0YPRgdGC0L7QuVxyXG4gICAgICAgICAgaW1ncy5wdXNoKHBhdGgpOyAvL9C00L7QsdCw0LLQu9GP0LXQvCDQtdCz0L4g0LIg0LzQsNGB0YHQuNCyXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcGVyY2VudHNUb3RhbCA9IDE7XHJcblxyXG4gICAgLy/Qv9GA0L7RhdC+0LTQuNC8INC/0L4g0LzQsNGB0YHQuNCy0YMg0Lgg0L/RgNC+0LLQtdGA0Y/QtdC8INC30LDQs9GA0YPQt9C40LvQuNGB0Ywg0LvQuCDQutCw0YDRgtC40L3QutC4XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGltYWdlID0gJCgnPGltZz4nLCB7IC8v0YHQvtC30LTQsNC10Lwg0Y3Qu9C10LzQtdC90YJcclxuICAgICAgICBhdHRyOiB7IC8v0LfQsNC00LDQtdC8INC10LzRgyDQv9C10YDQtdC80LXRgtGA0YsgKNCyINC00LDQvdC90L7QvCDRgdC70YPRh9C1INCw0YLRgNC40LHRg9GCKVxyXG4gICAgICAgICAgc3JjOiBpbWdzW2ldXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGltYWdlLm9uKHtcclxuICAgICAgICAvL9C/0YDQvtCy0LXRgNGP0LXQvCDQt9Cw0LPRgNGD0LfQuNC70L7RgdGMINC70Lgg0LjQt9C+0LHRgNCw0LbQtdC90LjQtVxyXG4gICAgICAgIGxvYWQgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIC8v0LLRi9C30YvQstCw0LXQvCDRhNGD0L0t0Y4g0LLRi9Cy0L7QtNCwINC/0YDQvtGG0LXQvdGC0L7QslxyXG4gICAgICAgICAgc2V0UGVyY2VudHMoaW1ncy5sZW5ndGgsIHBlcmNlbnRzVG90YWwpO1xyXG4gICAgICAgICAgLy/Rg9Cy0LXQu9C40YfQuNCy0LDQtdC8INGB0YfQtdGC0YfQuNC6INC30LDQs9GA0YPQttC10L3QvdGL0Lkg0LrQsNGA0YLQuNC90L7QuiDQvdCwIDFcclxuICAgICAgICAgIHBlcmNlbnRzVG90YWwrKztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBlcnJvciA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgc2V0UGVyY2VudHMoaW1ncy5sZW5ndGgsIHBlcmNlbnRzVG90YWwpO1xyXG4gICAgICAgICAgLy/Qv9GA0Lgg0L7RiNC40LHQutC1INC30LDQs9GA0YPQt9C60LggKzEg0Lgg0LjQtNC10Lwg0LTQsNC70YzRiNC1XHJcbiAgICAgICAgICBwZXJjZW50c1RvdGFsKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL9C/0LXRgNC10LTQsNC10Lwg0L/RgNC+0YbQtdC90YLRiyDQsiDQv9GA0LXQu9C+0LDQtNC10YBcclxuICAgIGZ1bmN0aW9uIHNldFBlcmNlbnRzKHRvdGFsLCBjdXJyZW50KSB7XHJcbiAgICAgIHZhciBwZXJjZW50ID0gTWF0aC5jZWlsKGN1cnJlbnQgLyB0b3RhbCAqIDEwMCk7XHJcblxyXG4gICAgICBpZiAocGVyY2VudCA+PSAxMDApIHtcclxuICAgICAgICAkKCcucHJlbG9hZGVyJykuZmFkZU91dCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkKCcucHJlbG9hZGVyX19wZXJjZW50cycpLnRleHQocGVyY2VudCArICclJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgJCgnLnJldmlld3Mtc2xpZGVyJykuYnhTbGlkZXIoe1xyXG4gICAgbW9kZTogJ2ZhZGUnLFxyXG4gICAgYXV0bzogdHJ1ZSxcclxuICAgIHBhZ2VyOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgJCgnLnNhbG9uLW1hc3RlcnNfX2Nhcm91c2VsJykuYnhTbGlkZXIoe1xyXG4gICAgbWluU2xpZGVzOiAxLFxyXG4gICAgbWF4U2xpZGVzOiA1LFxyXG4gICAgc2xpZGVXaWR0aDogMTM4LFxyXG4gICAgc2xpZGVNYXJnaW46IDE4LFxyXG4gICAgLy8gYXV0bzogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBwYWdlcjogZmFsc2UsXHJcbiAgICBtb3ZlU2xpZGVzOiAxLFxyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAkKCcjc2Fsb24tb25lLXNsaWRlcicpLmJ4U2xpZGVyKHtcclxuICAgIC8vIGF1dG86IHRydWUsXHJcbiAgICBwYWdlckN1c3RvbTogJyNzYWxvbi1vbmUtc2xpZGVyLXBhZ2VyJ1xyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyAvL3Njcm9sbCAyIGFuY29yXHJcbiAgICAvLyAkKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICB2YXIgcG9zaXRpb25zID0ge307XHJcblxyXG4gICAgLy8gICAgICQoJ2JvZHksIGh0bWwnKS5zY3JvbGxUb3AoMCk7XHJcblxyXG4gICAgLy8gICAgICQoXCIjc2VydmljZSwgI21hc3RlcnMsICNzYWxvbnNcIikuZWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgLy8gICAgICAgICBwb3NpdGlvbnNbJCh0aGlzKS5hdHRyKCdpZCcpXSA9ICgkKHRoaXMpLm9mZnNldCgpLnRvcCAqICQoXCJib2R5XCIpLmNzcygnem9vbScpKTtcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgJCgnLm1lbnVfX2xpbmtbaHJlZio9XFxcXCNdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gICAgICAgICB2YXIgYW5jaG9yID0gJCh0aGlzKTtcclxuICAgIC8vICAgICAgICAgdmFyIGhyZWYgPSBhbmNob3IuYXR0cignaHJlZicpO1xyXG4gICAgLy8gICAgICAgICB2YXIgdG9wID0gcG9zaXRpb25zW2hyZWYucmVwbGFjZSgnIycsICcnKV07XHJcblxyXG4gICAgLy8gICAgICAgICBpZigkKGhyZWYpLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IGRvY3VtZW50Lm9yaWdpbiArIGhyZWZcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgJCgnYm9keSwgaHRtbCcpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgIC8vICAgICAgICAgICAgIHNjcm9sbFRvcDogKHRvcCAtIDgwKSArICdweCdcclxuICAgIC8vICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAvLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyB9KTtcclxuXHJcblxyXG4gICAgLy8gJChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgJCgnLm1lbnUtbW9iX19saW5rW2hyZWYqPVxcXFwjXScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICAgICAgICAgdmFyIGFuY2hvciA9ICQodGhpcyk7XHJcbiAgICAvLyAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAvLyAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoYW5jaG9yLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wIC0gODAgKyAncHgnXHJcbiAgICAvLyAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gYmVnaW4gc2Nyb2xsIDIgYW5jb3IgZGVzY3RvcCBtZW51XHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCcubWVudV9fbGlua1tocmVmKj1cXFxcI10nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICB2YXIgYW5jaG9yID0gJCh0aGlzKTtcclxuICAgICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogJChhbmNob3IuYXR0cignaHJlZicpKS5vZmZzZXQoKS50b3AgLSAwICsgJ3B4J1xyXG4gICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICAvLyBlbmQgc2Nyb2xsIDIgYW5jb3IgZGVzY3RvcCBtZW51XHJcblxyXG4gICAgLy8gYmVnaW4gc2Nyb2xsIDIgYW5jb3IgbW9iaWxlIG1lbnVcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJy5tZW51LW1vYl9fbGlua1tocmVmKj1cXFxcI10nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICB2YXIgYW5jaG9yID0gJCh0aGlzKTtcclxuICAgICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogJChhbmNob3IuYXR0cignaHJlZicpKS5vZmZzZXQoKS50b3AgLSAwICsgJ3B4J1xyXG4gICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICAvLyBlbmQgc2Nyb2xsIDIgYW5jb3IgbW9iaWxlIG1lbnVcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgJChmdW5jdGlvbigpIHtcclxuICAgIC8vIGN1c3RvbSBzZWxlY3Rib3hcclxuICAgICQoIFwiLnNlbGVjdG1lbnVcIiApLnNlbGVjdG1lbnUoKTtcclxuXHJcbiAgICAvLyBjaGFuZ2UgcGljdHVyZXMgaW4gc2VydGlmaWNhdGUgcGFnZVxyXG4gICAgJCggXCIuY2VydGlmaWNhdGUtc2VsZWN0XCIgKS5zZWxlY3RtZW51KHtcclxuICAgICAgY2hhbmdlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcclxuICAgICAgICB2YXIgc2VydGlmaWNhdGVQaWMgPSAnI3BpYy0nICsgJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCQodGhpcykuYXR0cignaWQnKSk7XHJcbiAgICAgICAgdmFyIHNlcnRpZmljYXRlSW1nID0gJCh1aS5pdGVtLmVsZW1lbnRbMF0pLmRhdGEoJ3BhdGgnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZXJ0aWZpY2F0ZVBpYyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VydGlmaWNhdGVJbWcpO1xyXG4gICAgICAgICQoc2VydGlmaWNhdGVQaWMpLmZpbmQoJ2ltZzpmaXJzdCcpLmF0dHIoJ3NyYycsIHNlcnRpZmljYXRlSW1nKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygkKHVpLml0ZW0uZWxlbWVudFswXSkuZGF0YSgncGF0aCcpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAvL1NWRyBmb3IgSUVcclxuICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgc3ZnNGV2ZXJ5Ym9keSgpO1xyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAvL9GB0LvQsNC50LTQtdGAINCyINC60L7QvdGB0YLRgNGD0LrRgtC+0YDQtVxyXG4gICQoJyN0YWItc2VjX19zbGlkZXInKS5zbGljayh7XHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6dHJ1ZSxcclxuICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgZmFkZTp0cnVlLFxyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xyXG4gICAgcGFnZVdpZGdldChbJ2luZGV4JyxcclxuICAgICAgICAgICAgICAgICc0MDQnLFxyXG4gICAgICAgICAgICAgICAgJ2NvbnN0cnVjdG9yJyxcclxuICAgICAgICAgICAgICAgICdlbWFpbCcsXHJcbiAgICAgICAgICAgICAgICAnaW5uZXInLFxyXG4gICAgICAgICAgICAgICAgJ2pvYicsXHJcbiAgICAgICAgICAgICAgICAnbWFzdGVyLW9uZScsXHJcbiAgICAgICAgICAgICAgICAnbWFzdGVycycsXHJcbiAgICAgICAgICAgICAgICAnbmV3cy1vbmUnLFxyXG4gICAgICAgICAgICAgICAgJ25ld3MnLFxyXG4gICAgICAgICAgICAgICAgJ3NhbGUnLFxyXG4gICAgICAgICAgICAgICAgJ3NhbG9uLW9uZScsXHJcbiAgICAgICAgICAgICAgICAnc2VydGlmaWNhdGUtMicsXHJcbiAgICAgICAgICAgICAgICAnc2VydGlmaWNhdGUnLFxyXG4gICAgICAgICAgICAgICAgJ3NlcnZpY2UtMScsXHJcbiAgICAgICAgICAgICAgICAnc2VydmljZS0yJyxcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBwYWdlV2lkZ2V0KHBhZ2VzKSB7XHJcbiAgICB2YXIgd2lkZ2V0V3JhcCA9ICQoJzxkaXYgY2xhc3M9XCJ3aWRnZXRfd3JhcFwiPjx1bCBjbGFzcz1cIndpZGdldF9saXN0XCI+PC91bD48L2Rpdj4nKTtcclxuICAgIHdpZGdldFdyYXAucHJlcGVuZFRvKFwiYm9keVwiKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJCgnPGxpIGNsYXNzPVwid2lkZ2V0X2l0ZW1cIj48YSBjbGFzcz1cIndpZGdldF9saW5rXCIgaHJlZj1cIicgKyBwYWdlc1tpXSArICcuaHRtbCcgKyAnXCI+JyArIHBhZ2VzW2ldICsgJzwvYT48L2xpPicpLmFwcGVuZFRvKCcud2lkZ2V0X2xpc3QnKTtcclxuICAgIH1cclxuICAgIHZhciB3aWRnZXRTdGlsaXphdGlvbiA9ICQoJzxzdHlsZT5ib2R5IHtwb3NpdGlvbjpyZWxhdGl2ZX0gLndpZGdldF93cmFwe3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt6LWluZGV4OjE5OTk5O3BhZGRpbmc6MTBweCAyMHB4O2JhY2tncm91bmQ6IzIyMjtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoxMHB4Oy13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjNzIGVhc2U7dHJhbnNpdGlvbjphbGwgLjNzIGVhc2U7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC0xMDAlLDApOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlKC0xMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTEwMCUsMCl9LndpZGdldF93cmFwOmFmdGVye2NvbnRlbnQ6XCIgXCI7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDoxMDAlO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7YmFja2dyb3VuZDojMjIyIHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFBZ01BQUFCaW5SZnlBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQXhRVEZSRi8vLy8vLy8vQUFBQS8vLy9CUUJrd2dBQUFBTjBVazVUeE1NQWpBZCt6d0FBQUNOSlJFRlVDTmRqcVAvLy95L0RmeUJnK0xWcTFYb284VzgvQ2tGWUFtd0EwS2cvQUZjQU5UNWZlN2w0QUFBQUFFbEZUa1N1UW1DQykgbm8tcmVwZWF0IDUwJSA1MCU7Y3Vyc29yOnBvaW50ZXJ9LndpZGdldF93cmFwOmhvdmVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDApOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDApfS53aWRnZXRfaXRlbXtwYWRkaW5nOjAgMCAxMHB4fS53aWRnZXRfbGlua3tjb2xvcjojZmZmO3RleHQtZGVjb3JhdGlvbjpub25lO2ZvbnQtc2l6ZToxNXB4O30ud2lkZ2V0X2xpbms6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0gPC9zdHlsZT4nKTtcclxuICAgIHdpZGdldFN0aWxpemF0aW9uLnByZXBlbmRUbyhcIi53aWRnZXRfd3JhcFwiKTtcclxuICB9XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIGpRdWVyeShcIiNsYXllcnNsaWRlclwiKS5sYXllclNsaWRlcih7XHJcbiAgICByZXNwb25zaXZlOiBmYWxzZSxcclxuICAgIC8vIHJlc3BvbnNpdmVVbmRlcjogMTE0MCxcclxuICAgIHJlc3BvbnNpdmVVbmRlcjogODYwLFxyXG4gICAgLy8gbGF5ZXJzQ29udGFpbmVyOiAxMTQwLFxyXG4gICAgbGF5ZXJzQ29udGFpbmVyOiA4NjAsXHJcbiAgICBza2luc1BhdGg6ICcnLFxyXG4gICAgc2tpbjogJycsXHJcbiAgICAvLyBhdXRvU3RhcnQgOiBmYWxzZSxcclxuICAgIGF1dG9TdGFydCA6IHRydWVcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgJCgnI3JpLWdyaWQnKS5ncmlkcm90YXRvcih7XHJcbiAgICByb3dzICAgICAgOiAyLFxyXG4gICAgY29sdW1ucyAgIDogNixcclxuICAgIGFuaW1UeXBlICA6ICdyb3RhdGVMZWZ0U2NhbGUnLFxyXG4gICAgYW5pbVNwZWVkIDogNzAwLFxyXG4gICAgaW50ZXJ2YWwgIDogMTUwMCxcclxuICAgIHN0ZXAgICAgICA6IDIsXHJcbiAgICB3MTAyNCAgICAgICAgICAgOiB7XHJcbiAgICAgICAgcm93cyAgICA6IDIsXHJcbiAgICAgICAgY29sdW1ucyA6IDVcclxuICAgIH0sXHJcblxyXG4gICAgdzc2OCAgICAgICAgICAgIDoge1xyXG4gICAgICAgIHJvd3MgICAgOiAyLFxyXG4gICAgICAgIGNvbHVtbnMgOiA0XHJcbiAgICB9LFxyXG5cclxuICAgIHc0ODAgICAgICAgICAgICA6IHtcclxuICAgICAgICByb3dzICAgIDogMixcclxuICAgICAgICBjb2x1bW5zIDogM1xyXG4gICAgfSxcclxuXHJcbiAgICB3MzIwICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgcm93cyAgICA6IDIsXHJcbiAgICAgICAgY29sdW1ucyA6IDJcclxuICAgIH1cclxuICB9KTtcclxuXHJcbn07Il19
