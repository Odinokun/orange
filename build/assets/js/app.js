(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function() {

  //Временное меню для разработчика
  // require('./modules/temp-nav')();

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

  //табы в конструкторе
  require('./modules/tabs')();

  //Выравнивание высоты фона у sale-card
  // require('./modules/sale-card')();

  //animate section in loaded
  // require('./modules/waypoints')();
  // require('./modules/animate-css')();

});
},{"./modules/accordeon-masters":2,"./modules/accordeon-price":3,"./modules/hamburger":4,"./modules/lg-slider":5,"./modules/lightbox":6,"./modules/masters-sec-carousel":7,"./modules/masters-works-carousel":8,"./modules/mob-menu":9,"./modules/preloader":10,"./modules/reviews-slider":11,"./modules/salon-masters-carousel":12,"./modules/salon-one-slider":13,"./modules/scroll-2-ancor":14,"./modules/select-ui":15,"./modules/svg4everybody":16,"./modules/tab-slider":17,"./modules/tabs":18,"./modules/top-slider":19,"./modules/work-gallery":20}],2:[function(require,module,exports){
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
    dots: false,
    infinite: true,
    autoplay: false,
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
    pause: 6000
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

    // begin scroll 2 ancor универсальная ссылка
    $(function() {
      $('.scroll-link[href*=\\#]').on("click", function(e){
         var anchor = $(this);
         $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top - 85 + 'px'
         }, 1000);
         e.preventDefault();
      });
      return false;
    });
    // end scroll 2 ancor универсальная ссылка

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
  $('.tab-sec__slider').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 1000,
    fade:true,
  });

};
},{}],18:[function(require,module,exports){
module.exports = function() {

  // begin thumb-tabs
  $(function() {
    $(".tab-sec__tab-item").click(function() {
      $(".tab-sec__tab-item").removeClass("active");
      $(this).addClass("active");

      var activeTab = $(this).attr("data-tab"); //Найти data атрибут для определения активной вкладки+контента

      $(".tab-sec__item").removeClass("active");
      $(activeTab).addClass("active");

      return false;
    });
  });
  // end   thumb-tabs

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvanMvYXBwLmpzIiwic291cmNlL2pzL21vZHVsZXMvYWNjb3JkZW9uLW1hc3RlcnMuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9hY2NvcmRlb24tcHJpY2UuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9oYW1idXJnZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9sZy1zbGlkZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9saWdodGJveC5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL21hc3RlcnMtc2VjLWNhcm91c2VsLmpzIiwic291cmNlL2pzL21vZHVsZXMvbWFzdGVycy13b3Jrcy1jYXJvdXNlbC5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL21vYi1tZW51LmpzIiwic291cmNlL2pzL21vZHVsZXMvcHJlbG9hZGVyLmpzIiwic291cmNlL2pzL21vZHVsZXMvcmV2aWV3cy1zbGlkZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9zYWxvbi1tYXN0ZXJzLWNhcm91c2VsLmpzIiwic291cmNlL2pzL21vZHVsZXMvc2Fsb24tb25lLXNsaWRlci5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL3Njcm9sbC0yLWFuY29yLmpzIiwic291cmNlL2pzL21vZHVsZXMvc2VsZWN0LXVpLmpzIiwic291cmNlL2pzL21vZHVsZXMvc3ZnNGV2ZXJ5Ym9keS5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL3RhYi1zbGlkZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy90YWJzLmpzIiwic291cmNlL2pzL21vZHVsZXMvdG9wLXNsaWRlci5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL3dvcmstZ2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKGZ1bmN0aW9uKCkge1xuXG4gIC8v0JLRgNC10LzQtdC90L3QvtC1INC80LXQvdGOINC00LvRjyDRgNCw0LfRgNCw0LHQvtGC0YfQuNC60LBcbiAgLy8gcmVxdWlyZSgnLi9tb2R1bGVzL3RlbXAtbmF2JykoKTtcblxuICAvL3ByZWxvYWRlclxuICByZXF1aXJlKCcuL21vZHVsZXMvcHJlbG9hZGVyJykoKTtcblxuICAvL3pvb20gZm9yIE1hY0Jvb2tcbiAgLy8gcmVxdWlyZSgnLi9tb2R1bGVzL3pvb20nKSgpO1xuXG4gIC8vdG9wLW1lbnVfX2ljb24gaGFtYnVyZ2VyICsgbW9iaWxlIG1lbnVcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL2hhbWJ1cmdlcicpKCk7XG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9tb2ItbWVudScpKCk7XG5cbiAgLy9zY3JvbGwgMiBhbmNvci1saW5rXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9zY3JvbGwtMi1hbmNvcicpKCk7XG5cbiAgLy9nYWxsZXJ5IGluIHdvcmstc2VjdGlvblxuICByZXF1aXJlKCcuL21vZHVsZXMvd29yay1nYWxsZXJ5JykoKTtcblxuICAvL2Nhcm91c2VsIGluIG1hc3RlcnMgc2VjdGlvblxuICByZXF1aXJlKCcuL21vZHVsZXMvbWFzdGVycy1zZWMtY2Fyb3VzZWwnKSgpO1xuXG4gIC8vY2Fyb3VzZWwgaW4gbWFzdGVycy1vbmUuaHRtbFxuICByZXF1aXJlKCcuL21vZHVsZXMvbWFzdGVycy13b3Jrcy1jYXJvdXNlbCcpKCk7XG5cbiAgLy9jYXJvdXNlbCBpbiBzYWxvbmUtb25lLmh0bWxcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3NhbG9uLW1hc3RlcnMtY2Fyb3VzZWwnKSgpO1xuXG4gIC8vc2xpZGVyIGluIHJldmlld3Mgc2VjdGlvblxuICByZXF1aXJlKCcuL21vZHVsZXMvcmV2aWV3cy1zbGlkZXInKSgpO1xuXG4gIC8vc2xpZGVyIGluIHRvcCBzZWN0aW9uIGluZGV4Lmh0bWxcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3RvcC1zbGlkZXInKSgpO1xuXG4gIC8vYWNjb3JkZW9uIGluIG1hc3RlcnMuaHRtbFxuICByZXF1aXJlKCcuL21vZHVsZXMvYWNjb3JkZW9uLW1hc3RlcnMnKSgpO1xuXG4gIC8vYWNjb3JkZW9uIGZvciBwcmljZVxuICByZXF1aXJlKCcuL21vZHVsZXMvYWNjb3JkZW9uLXByaWNlJykoKTtcblxuICAvL1NWRyBmb3IgSUVcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3N2ZzRldmVyeWJvZHknKSgpO1xuXG4gIC8vY29sb3ItdG8tZ3JleSBwaG90byBpbiBzZXJ2aWNlJnNhbGxvbiBzZWN0aW9uXG4gIC8vIHJlcXVpcmUoJy4vbW9kdWxlcy9ncmV5c2NhbGUnKSgpO1xuICAvLyByZXF1aXJlKCcuL21vZHVsZXMvZ3JleXNjYWxlLXNhbG9ucycpKCk7XG5cbiAgLy9zYWxvbi1vbmUtc2xpZGVyXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9zYWxvbi1vbmUtc2xpZGVyJykoKTtcblxuICAvL2xpZ2h0Ym94XG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9saWdodGJveCcpKCk7XG5cbiAgLy9jdXN0b20gc2VsZWN0Ym94IHdpdGgganF1ZXJ5VUlcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3NlbGVjdC11aScpKCk7XG5cbiAgLy/RgdC70LDQudC00LXRgCDQsiDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LVcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL2xnLXNsaWRlcicpKCk7XG5cbiAgLy/RgdC70LDQudC00LXRgCDQsiDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LVcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3RhYi1zbGlkZXInKSgpO1xuXG4gIC8v0YLQsNCx0Ysg0LIg0LrQvtC90YHRgtGA0YPQutGC0L7RgNC1XG4gIHJlcXVpcmUoJy4vbW9kdWxlcy90YWJzJykoKTtcblxuICAvL9CS0YvRgNCw0LLQvdC40LLQsNC90LjQtSDQstGL0YHQvtGC0Ysg0YTQvtC90LAg0YMgc2FsZS1jYXJkXG4gIC8vIHJlcXVpcmUoJy4vbW9kdWxlcy9zYWxlLWNhcmQnKSgpO1xuXG4gIC8vYW5pbWF0ZSBzZWN0aW9uIGluIGxvYWRlZFxuICAvLyByZXF1aXJlKCcuL21vZHVsZXMvd2F5cG9pbnRzJykoKTtcbiAgLy8gcmVxdWlyZSgnLi9tb2R1bGVzL2FuaW1hdGUtY3NzJykoKTtcblxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgLy9hY2Nyb3JkZW9uIGluIG1hc3RlcnMuaHRtbFxyXG4gICQoJy5tYXN0ZXJzLWZpbHRlcl9fcm93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgLy9hY2Nyb3JkZW9uIGZvciBwcmljZSZzZXJ2aWNlXHJcbiAgJChmdW5jdGlvbigkKXtcclxuICAgIHZhciBjb250ZW50cyA9ICQoJy5hY2NvcmRlb24tY29udGVudCcpO1xyXG4gICAgdmFyIHRpdGxlcyA9ICQoJy5hY2NvcmRlb24tdGl0bGVfX2NsaWNrJyk7XHJcbiAgICB0aXRsZXMub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgdGl0bGUgPSAkKHRoaXMpO1xyXG4gICAgICBjb250ZW50cy5maWx0ZXIoJzp2aXNpYmxlJykuc2xpZGVVcChmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykucHJldignLmFjY29yZGVvbi10aXRsZScpLnJlbW92ZUNsYXNzKCdpcy1vcGVuZWQnKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB2YXIgdGl0bGVQYXJlbnQgPSB0aXRsZS5wYXJlbnQoKTtcclxuICAgICAgdmFyIGNvbnRlbnQgPSB0aXRsZVBhcmVudC5uZXh0KCcuYWNjb3JkZW9uLWNvbnRlbnQnKTtcclxuXHJcbiAgICAgIGlmICghY29udGVudC5pcygnOnZpc2libGUnKSkge1xyXG4gICAgICAgIGNvbnRlbnQuc2xpZGVEb3duKGZ1bmN0aW9uKCl7dGl0bGVQYXJlbnQuYWRkQ2xhc3MoJ2lzLW9wZW5lZCcpfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAvL3RvcC1tZW51X19pY29uIGhhbWJ1cmdlclxyXG4gICQoJy5oYW1idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKFwiLm1lbnUtbW9iX19saXN0XCIpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAkKFwiLm1lbnUtbW9iX19pdGVtXCIpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcyhcImZpeFwiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgLy/RgdC70LDQudC00LXRgCDQsiDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LVcclxuICAkKCcjbGctc2xpZGVyJykuc2xpY2soe1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgIHNwZWVkOiAxMDAwLFxyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAvL2dhbGxlcnkgbGlnaHRib3hcclxuICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICBsaWdodGJveC5vcHRpb24oe1xyXG4gICAgICAgICd3cmFwQXJvdW5kJzogdHJ1ZSxcclxuICAgICAgICBkaXNhYmxlU2Nyb2xsaW5nOiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uRnJvbVRvcDogMFxyXG4gICAgICB9KTtcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgJCgnLm1hc3RlcnMtc2VjX19jYXJvdXNlbCcpLmJ4U2xpZGVyKHtcclxuICAgIG1pblNsaWRlczogMSxcclxuICAgIG1heFNsaWRlczogNSxcclxuICAgIHNsaWRlV2lkdGg6IDEzOCxcclxuICAgIHNsaWRlTWFyZ2luOiAxOCxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBwYWdlcjogZmFsc2UsXHJcbiAgICBtb3ZlU2xpZGVzOiAxXHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICQoJy5tYXN0ZXItd29ya3NfX2Nhcm91c2VsJykuYnhTbGlkZXIoe1xyXG4gICAgbWluU2xpZGVzOiAxLFxyXG4gICAgbWF4U2xpZGVzOiA1LFxyXG4gICAgc2xpZGVXaWR0aDogMTg4LFxyXG4gICAgc2xpZGVNYXJnaW46IDE1LFxyXG4gICAgLy8gYXV0bzogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBwYWdlcjogZmFsc2UsXHJcbiAgICBtb3ZlU2xpZGVzOiAxXHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8vbW9iaWxlIG1lbnVcclxuICAkKCcubWVudS1tb2JfX2xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICQoXCIuaGFtYnVyZ2VyXCIpLnRvZ2dsZUNsYXNzKCdvbicpO1xyXG4gICAgJChcIi5tZW51LW1vYl9fbGlzdFwiKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgJChcIi5tZW51LW1vYl9faXRlbVwiKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoXCJmaXhcIik7XHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgLy9wcmVsb2FkZXJcclxuICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGltZ3MgPSBbXTtcclxuXHJcbiAgICAkLmVhY2goJCgnKicpLCBmdW5jdGlvbigpIHsgLy/Qv9C10YDQtdCx0LjRgNCw0LXQvCDQstGB0LUg0YHQtdC70LXQutGC0L7RgNGLXHJcbiAgICAgIHZhclxyXG4gICAgICAgICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICBiYWNrZ3JvdW5kID0gJHRoaXMuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyksXHJcbiAgICAgICAgaW1nID0gJHRoaXMuaXMoJ2ltZycpOyAvL9C/0YDQvtCy0LXRgNGP0LXQvCDQutCw0YDRgtC40L3QutCwINC70Lgg0Y3RgtC+XHJcblxyXG4gICAgICBpZiAoYmFja2dyb3VuZCAhPSAnbm9uZScpIHtcclxuICAgICAgICB2YXIgcGF0aCA9IGJhY2tncm91bmQucmVwbGFjZSgndXJsKFwiJywgJycpLnJlcGxhY2UoJ1wiKScsICcnKTtcclxuICAgICAgICBpbWdzLnB1c2gocGF0aCk7IC8v0LTQvtCx0LDQstC70Y/QtdC8INC/0YPRgtC4INC6INGE0L7QvdCw0Lwg0LIg0LzQsNGB0YHQuNCyXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpbWcpIHtcclxuICAgICAgICB2YXIgcGF0aCA9ICR0aGlzLmF0dHIoJ3NyYycpOyAvL9Cx0LXRgNC10Lwg0L/Rg9GC0Ywg0Log0LrQsNGA0YLQuNC90LrQtSBpbWdcclxuXHJcbiAgICAgICAgaWYgKHBhdGgpIHsgLy/QtdGB0LvQuCDQv9GD0YLRjCDQvdC1INC/0YPRgdGC0L7QuVxyXG4gICAgICAgICAgaW1ncy5wdXNoKHBhdGgpOyAvL9C00L7QsdCw0LLQu9GP0LXQvCDQtdCz0L4g0LIg0LzQsNGB0YHQuNCyXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcGVyY2VudHNUb3RhbCA9IDE7XHJcblxyXG4gICAgLy/Qv9GA0L7RhdC+0LTQuNC8INC/0L4g0LzQsNGB0YHQuNCy0YMg0Lgg0L/RgNC+0LLQtdGA0Y/QtdC8INC30LDQs9GA0YPQt9C40LvQuNGB0Ywg0LvQuCDQutCw0YDRgtC40L3QutC4XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGltYWdlID0gJCgnPGltZz4nLCB7IC8v0YHQvtC30LTQsNC10Lwg0Y3Qu9C10LzQtdC90YJcclxuICAgICAgICBhdHRyOiB7IC8v0LfQsNC00LDQtdC8INC10LzRgyDQv9C10YDQtdC80LXRgtGA0YsgKNCyINC00LDQvdC90L7QvCDRgdC70YPRh9C1INCw0YLRgNC40LHRg9GCKVxyXG4gICAgICAgICAgc3JjOiBpbWdzW2ldXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGltYWdlLm9uKHtcclxuICAgICAgICAvL9C/0YDQvtCy0LXRgNGP0LXQvCDQt9Cw0LPRgNGD0LfQuNC70L7RgdGMINC70Lgg0LjQt9C+0LHRgNCw0LbQtdC90LjQtVxyXG4gICAgICAgIGxvYWQgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIC8v0LLRi9C30YvQstCw0LXQvCDRhNGD0L0t0Y4g0LLRi9Cy0L7QtNCwINC/0YDQvtGG0LXQvdGC0L7QslxyXG4gICAgICAgICAgc2V0UGVyY2VudHMoaW1ncy5sZW5ndGgsIHBlcmNlbnRzVG90YWwpO1xyXG4gICAgICAgICAgLy/Rg9Cy0LXQu9C40YfQuNCy0LDQtdC8INGB0YfQtdGC0YfQuNC6INC30LDQs9GA0YPQttC10L3QvdGL0Lkg0LrQsNGA0YLQuNC90L7QuiDQvdCwIDFcclxuICAgICAgICAgIHBlcmNlbnRzVG90YWwrKztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBlcnJvciA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgc2V0UGVyY2VudHMoaW1ncy5sZW5ndGgsIHBlcmNlbnRzVG90YWwpO1xyXG4gICAgICAgICAgLy/Qv9GA0Lgg0L7RiNC40LHQutC1INC30LDQs9GA0YPQt9C60LggKzEg0Lgg0LjQtNC10Lwg0LTQsNC70YzRiNC1XHJcbiAgICAgICAgICBwZXJjZW50c1RvdGFsKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL9C/0LXRgNC10LTQsNC10Lwg0L/RgNC+0YbQtdC90YLRiyDQsiDQv9GA0LXQu9C+0LDQtNC10YBcclxuICAgIGZ1bmN0aW9uIHNldFBlcmNlbnRzKHRvdGFsLCBjdXJyZW50KSB7XHJcbiAgICAgIHZhciBwZXJjZW50ID0gTWF0aC5jZWlsKGN1cnJlbnQgLyB0b3RhbCAqIDEwMCk7XHJcblxyXG4gICAgICBpZiAocGVyY2VudCA+PSAxMDApIHtcclxuICAgICAgICAkKCcucHJlbG9hZGVyJykuZmFkZU91dCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkKCcucHJlbG9hZGVyX19wZXJjZW50cycpLnRleHQocGVyY2VudCArICclJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgJCgnLnJldmlld3Mtc2xpZGVyJykuYnhTbGlkZXIoe1xyXG4gICAgbW9kZTogJ2ZhZGUnLFxyXG4gICAgYXV0bzogdHJ1ZSxcclxuICAgIHBhZ2VyOiBmYWxzZSxcclxuICAgIHBhdXNlOiA2MDAwXHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICQoJy5zYWxvbi1tYXN0ZXJzX19jYXJvdXNlbCcpLmJ4U2xpZGVyKHtcclxuICAgIG1pblNsaWRlczogMSxcclxuICAgIG1heFNsaWRlczogNSxcclxuICAgIHNsaWRlV2lkdGg6IDEzOCxcclxuICAgIHNsaWRlTWFyZ2luOiAxOCxcclxuICAgIC8vIGF1dG86IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgcGFnZXI6IGZhbHNlLFxyXG4gICAgbW92ZVNsaWRlczogMSxcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgJCgnI3NhbG9uLW9uZS1zbGlkZXInKS5ieFNsaWRlcih7XHJcbiAgICAvLyBhdXRvOiB0cnVlLFxyXG4gICAgcGFnZXJDdXN0b206ICcjc2Fsb24tb25lLXNsaWRlci1wYWdlcidcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gLy9zY3JvbGwgMiBhbmNvclxyXG4gICAgLy8gJChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgdmFyIHBvc2l0aW9ucyA9IHt9O1xyXG5cclxuICAgIC8vICAgICAkKCdib2R5LCBodG1sJykuc2Nyb2xsVG9wKDApO1xyXG5cclxuICAgIC8vICAgICAkKFwiI3NlcnZpY2UsICNtYXN0ZXJzLCAjc2Fsb25zXCIpLmVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIC8vICAgICAgICAgcG9zaXRpb25zWyQodGhpcykuYXR0cignaWQnKV0gPSAoJCh0aGlzKS5vZmZzZXQoKS50b3AgKiAkKFwiYm9keVwiKS5jc3MoJ3pvb20nKSk7XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgICQoJy5tZW51X19saW5rW2hyZWYqPVxcXFwjXScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICAgICAgICAgdmFyIGFuY2hvciA9ICQodGhpcyk7XHJcbiAgICAvLyAgICAgICAgIHZhciBocmVmID0gYW5jaG9yLmF0dHIoJ2hyZWYnKTtcclxuICAgIC8vICAgICAgICAgdmFyIHRvcCA9IHBvc2l0aW9uc1tocmVmLnJlcGxhY2UoJyMnLCAnJyldO1xyXG5cclxuICAgIC8vICAgICAgICAgaWYoJChocmVmKS5sZW5ndGggPD0gMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSBkb2N1bWVudC5vcmlnaW4gKyBocmVmXHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICQoJ2JvZHksIGh0bWwnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAvLyAgICAgICAgICAgICBzY3JvbGxUb3A6ICh0b3AgLSA4MCkgKyAncHgnXHJcbiAgICAvLyAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gfSk7XHJcblxyXG5cclxuICAgIC8vICQoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICQoJy5tZW51LW1vYl9fbGlua1tocmVmKj1cXFxcI10nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyAgICAgICAgIHZhciBhbmNob3IgPSAkKHRoaXMpO1xyXG4gICAgLy8gICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgLy8gICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKGFuY2hvci5hdHRyKCdocmVmJykpLm9mZnNldCgpLnRvcCAtIDgwICsgJ3B4J1xyXG4gICAgLy8gICAgICAgICB9LCAxMDAwKTtcclxuICAgIC8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIGJlZ2luIHNjcm9sbCAyIGFuY29yIGRlc2N0b3AgbWVudVxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgJCgnLm1lbnVfX2xpbmtbaHJlZio9XFxcXCNdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgdmFyIGFuY2hvciA9ICQodGhpcyk7XHJcbiAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoYW5jaG9yLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wIC0gMCArICdweCdcclxuICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgLy8gZW5kIHNjcm9sbCAyIGFuY29yIGRlc2N0b3AgbWVudVxyXG5cclxuICAgIC8vIGJlZ2luIHNjcm9sbCAyIGFuY29yIG1vYmlsZSBtZW51XHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCcubWVudS1tb2JfX2xpbmtbaHJlZio9XFxcXCNdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgdmFyIGFuY2hvciA9ICQodGhpcyk7XHJcbiAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoYW5jaG9yLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wIC0gMCArICdweCdcclxuICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgLy8gZW5kIHNjcm9sbCAyIGFuY29yIG1vYmlsZSBtZW51XHJcblxyXG4gICAgLy8gYmVnaW4gc2Nyb2xsIDIgYW5jb3Ig0YPQvdC40LLQtdGA0YHQsNC70YzQvdCw0Y8g0YHRgdGL0LvQutCwXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCcuc2Nyb2xsLWxpbmtbaHJlZio9XFxcXCNdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgdmFyIGFuY2hvciA9ICQodGhpcyk7XHJcbiAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoYW5jaG9yLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wIC0gODUgKyAncHgnXHJcbiAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgIC8vIGVuZCBzY3JvbGwgMiBhbmNvciDRg9C90LjQstC10YDRgdCw0LvRjNC90LDRjyDRgdGB0YvQu9C60LBcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgJChmdW5jdGlvbigpIHtcclxuICAgIC8vIGN1c3RvbSBzZWxlY3Rib3hcclxuICAgICQoIFwiLnNlbGVjdG1lbnVcIiApLnNlbGVjdG1lbnUoKTtcclxuXHJcbiAgICAvLyBjaGFuZ2UgcGljdHVyZXMgaW4gc2VydGlmaWNhdGUgcGFnZVxyXG4gICAgJCggXCIuY2VydGlmaWNhdGUtc2VsZWN0XCIgKS5zZWxlY3RtZW51KHtcclxuICAgICAgY2hhbmdlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcclxuICAgICAgICB2YXIgc2VydGlmaWNhdGVQaWMgPSAnI3BpYy0nICsgJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCQodGhpcykuYXR0cignaWQnKSk7XHJcbiAgICAgICAgdmFyIHNlcnRpZmljYXRlSW1nID0gJCh1aS5pdGVtLmVsZW1lbnRbMF0pLmRhdGEoJ3BhdGgnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZXJ0aWZpY2F0ZVBpYyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VydGlmaWNhdGVJbWcpO1xyXG4gICAgICAgICQoc2VydGlmaWNhdGVQaWMpLmZpbmQoJ2ltZzpmaXJzdCcpLmF0dHIoJ3NyYycsIHNlcnRpZmljYXRlSW1nKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygkKHVpLml0ZW0uZWxlbWVudFswXSkuZGF0YSgncGF0aCcpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAvL1NWRyBmb3IgSUVcclxuICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgc3ZnNGV2ZXJ5Ym9keSgpO1xyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAvL9GB0LvQsNC50LTQtdGAINCyINC60L7QvdGB0YLRgNGD0LrRgtC+0YDQtVxyXG4gICQoJy50YWItc2VjX19zbGlkZXInKS5zbGljayh7XHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6dHJ1ZSxcclxuICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgZmFkZTp0cnVlLFxyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAvLyBiZWdpbiB0aHVtYi10YWJzXHJcbiAgJChmdW5jdGlvbigpIHtcclxuICAgICQoXCIudGFiLXNlY19fdGFiLWl0ZW1cIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoXCIudGFiLXNlY19fdGFiLWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICB2YXIgYWN0aXZlVGFiID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10YWJcIik7IC8v0J3QsNC50YLQuCBkYXRhINCw0YLRgNC40LHRg9GCINC00LvRjyDQvtC/0YDQtdC00LXQu9C10L3QuNGPINCw0LrRgtC40LLQvdC+0Lkg0LLQutC70LDQtNC60Lgr0LrQvtC90YLQtdC90YLQsFxyXG5cclxuICAgICAgJChcIi50YWItc2VjX19pdGVtXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAkKGFjdGl2ZVRhYikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICAvLyBlbmQgICB0aHVtYi10YWJzXHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIGpRdWVyeShcIiNsYXllcnNsaWRlclwiKS5sYXllclNsaWRlcih7XHJcbiAgICByZXNwb25zaXZlOiBmYWxzZSxcclxuICAgIC8vIHJlc3BvbnNpdmVVbmRlcjogMTE0MCxcclxuICAgIHJlc3BvbnNpdmVVbmRlcjogODYwLFxyXG4gICAgLy8gbGF5ZXJzQ29udGFpbmVyOiAxMTQwLFxyXG4gICAgbGF5ZXJzQ29udGFpbmVyOiA4NjAsXHJcbiAgICBza2luc1BhdGg6ICcnLFxyXG4gICAgc2tpbjogJycsXHJcbiAgICAvLyBhdXRvU3RhcnQgOiBmYWxzZSxcclxuICAgIGF1dG9TdGFydCA6IHRydWVcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgJCgnI3JpLWdyaWQnKS5ncmlkcm90YXRvcih7XHJcbiAgICByb3dzICAgICAgOiAyLFxyXG4gICAgY29sdW1ucyAgIDogNixcclxuICAgIGFuaW1UeXBlICA6ICdyb3RhdGVMZWZ0U2NhbGUnLFxyXG4gICAgYW5pbVNwZWVkIDogNzAwLFxyXG4gICAgaW50ZXJ2YWwgIDogMTUwMCxcclxuICAgIHN0ZXAgICAgICA6IDIsXHJcbiAgICB3MTAyNCAgICAgICAgICAgOiB7XHJcbiAgICAgICAgcm93cyAgICA6IDIsXHJcbiAgICAgICAgY29sdW1ucyA6IDVcclxuICAgIH0sXHJcblxyXG4gICAgdzc2OCAgICAgICAgICAgIDoge1xyXG4gICAgICAgIHJvd3MgICAgOiAyLFxyXG4gICAgICAgIGNvbHVtbnMgOiA0XHJcbiAgICB9LFxyXG5cclxuICAgIHc0ODAgICAgICAgICAgICA6IHtcclxuICAgICAgICByb3dzICAgIDogMixcclxuICAgICAgICBjb2x1bW5zIDogM1xyXG4gICAgfSxcclxuXHJcbiAgICB3MzIwICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgcm93cyAgICA6IDIsXHJcbiAgICAgICAgY29sdW1ucyA6IDJcclxuICAgIH1cclxuICB9KTtcclxuXHJcbn07Il19
