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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvanMvYXBwLmpzIiwic291cmNlL2pzL21vZHVsZXMvYWNjb3JkZW9uLW1hc3RlcnMuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9hY2NvcmRlb24tcHJpY2UuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9oYW1idXJnZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9sZy1zbGlkZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9saWdodGJveC5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL21hc3RlcnMtc2VjLWNhcm91c2VsLmpzIiwic291cmNlL2pzL21vZHVsZXMvbWFzdGVycy13b3Jrcy1jYXJvdXNlbC5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL21vYi1tZW51LmpzIiwic291cmNlL2pzL21vZHVsZXMvcHJlbG9hZGVyLmpzIiwic291cmNlL2pzL21vZHVsZXMvcmV2aWV3cy1zbGlkZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9zYWxvbi1tYXN0ZXJzLWNhcm91c2VsLmpzIiwic291cmNlL2pzL21vZHVsZXMvc2Fsb24tb25lLXNsaWRlci5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL3Njcm9sbC0yLWFuY29yLmpzIiwic291cmNlL2pzL21vZHVsZXMvc2VsZWN0LXVpLmpzIiwic291cmNlL2pzL21vZHVsZXMvc3ZnNGV2ZXJ5Ym9keS5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL3RhYi1zbGlkZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy90YWJzLmpzIiwic291cmNlL2pzL21vZHVsZXMvdG9wLXNsaWRlci5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL3dvcmstZ2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJChmdW5jdGlvbigpIHtcblxuICAvL9CS0YDQtdC80LXQvdC90L7QtSDQvNC10L3RjiDQtNC70Y8g0YDQsNC30YDQsNCx0L7RgtGH0LjQutCwXG4gIC8vIHJlcXVpcmUoJy4vbW9kdWxlcy90ZW1wLW5hdicpKCk7XG5cbiAgLy9wcmVsb2FkZXJcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByZWxvYWRlcicpKCk7XG5cbiAgLy96b29tIGZvciBNYWNCb29rXG4gIC8vIHJlcXVpcmUoJy4vbW9kdWxlcy96b29tJykoKTtcblxuICAvL3RvcC1tZW51X19pY29uIGhhbWJ1cmdlciArIG1vYmlsZSBtZW51XG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9oYW1idXJnZXInKSgpO1xuICByZXF1aXJlKCcuL21vZHVsZXMvbW9iLW1lbnUnKSgpO1xuXG4gIC8vc2Nyb2xsIDIgYW5jb3ItbGlua1xuICByZXF1aXJlKCcuL21vZHVsZXMvc2Nyb2xsLTItYW5jb3InKSgpO1xuXG4gIC8vZ2FsbGVyeSBpbiB3b3JrLXNlY3Rpb25cbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3dvcmstZ2FsbGVyeScpKCk7XG5cbiAgLy9jYXJvdXNlbCBpbiBtYXN0ZXJzIHNlY3Rpb25cbiAgcmVxdWlyZSgnLi9tb2R1bGVzL21hc3RlcnMtc2VjLWNhcm91c2VsJykoKTtcblxuICAvL2Nhcm91c2VsIGluIG1hc3RlcnMtb25lLmh0bWxcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL21hc3RlcnMtd29ya3MtY2Fyb3VzZWwnKSgpO1xuXG4gIC8vY2Fyb3VzZWwgaW4gc2Fsb25lLW9uZS5odG1sXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9zYWxvbi1tYXN0ZXJzLWNhcm91c2VsJykoKTtcblxuICAvL3NsaWRlciBpbiByZXZpZXdzIHNlY3Rpb25cbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3Jldmlld3Mtc2xpZGVyJykoKTtcblxuICAvL3NsaWRlciBpbiB0b3Agc2VjdGlvbiBpbmRleC5odG1sXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy90b3Atc2xpZGVyJykoKTtcblxuICAvL2FjY29yZGVvbiBpbiBtYXN0ZXJzLmh0bWxcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL2FjY29yZGVvbi1tYXN0ZXJzJykoKTtcblxuICAvL2FjY29yZGVvbiBmb3IgcHJpY2VcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL2FjY29yZGVvbi1wcmljZScpKCk7XG5cbiAgLy9TVkcgZm9yIElFXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9zdmc0ZXZlcnlib2R5JykoKTtcblxuICAvL2NvbG9yLXRvLWdyZXkgcGhvdG8gaW4gc2VydmljZSZzYWxsb24gc2VjdGlvblxuICAvLyByZXF1aXJlKCcuL21vZHVsZXMvZ3JleXNjYWxlJykoKTtcbiAgLy8gcmVxdWlyZSgnLi9tb2R1bGVzL2dyZXlzY2FsZS1zYWxvbnMnKSgpO1xuXG4gIC8vc2Fsb24tb25lLXNsaWRlclxuICByZXF1aXJlKCcuL21vZHVsZXMvc2Fsb24tb25lLXNsaWRlcicpKCk7XG5cbiAgLy9saWdodGJveFxuICByZXF1aXJlKCcuL21vZHVsZXMvbGlnaHRib3gnKSgpO1xuXG4gIC8vY3VzdG9tIHNlbGVjdGJveCB3aXRoIGpxdWVyeVVJXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9zZWxlY3QtdWknKSgpO1xuXG4gIC8v0YHQu9Cw0LnQtNC10YAg0LIg0LrQvtC90YHRgtGA0YPQutGC0L7RgNC1XG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9sZy1zbGlkZXInKSgpO1xuXG4gIC8v0YHQu9Cw0LnQtNC10YAg0LIg0LrQvtC90YHRgtGA0YPQutGC0L7RgNC1XG4gIHJlcXVpcmUoJy4vbW9kdWxlcy90YWItc2xpZGVyJykoKTtcblxuICAvL9GC0LDQsdGLINCyINC60L7QvdGB0YLRgNGD0LrRgtC+0YDQtVxuICByZXF1aXJlKCcuL21vZHVsZXMvdGFicycpKCk7XG5cbiAgLy/QktGL0YDQsNCy0L3QuNCy0LDQvdC40LUg0LLRi9GB0L7RgtGLINGE0L7QvdCwINGDIHNhbGUtY2FyZFxuICAvLyByZXF1aXJlKCcuL21vZHVsZXMvc2FsZS1jYXJkJykoKTtcblxuICAvL2FuaW1hdGUgc2VjdGlvbiBpbiBsb2FkZWRcbiAgLy8gcmVxdWlyZSgnLi9tb2R1bGVzL3dheXBvaW50cycpKCk7XG4gIC8vIHJlcXVpcmUoJy4vbW9kdWxlcy9hbmltYXRlLWNzcycpKCk7XG5cbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8vYWNjcm9yZGVvbiBpbiBtYXN0ZXJzLmh0bWxcclxuICAkKCcubWFzdGVycy1maWx0ZXJfX3JvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8vYWNjcm9yZGVvbiBmb3IgcHJpY2Umc2VydmljZVxyXG4gICQoZnVuY3Rpb24oJCl7XHJcbiAgICB2YXIgY29udGVudHMgPSAkKCcuYWNjb3JkZW9uLWNvbnRlbnQnKTtcclxuICAgIHZhciB0aXRsZXMgPSAkKCcuYWNjb3JkZW9uLXRpdGxlX19jbGljaycpO1xyXG4gICAgdGl0bGVzLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgdmFyIHRpdGxlID0gJCh0aGlzKTtcclxuICAgICAgY29udGVudHMuZmlsdGVyKCc6dmlzaWJsZScpLnNsaWRlVXAoZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLnByZXYoJy5hY2NvcmRlb24tdGl0bGUnKS5yZW1vdmVDbGFzcygnaXMtb3BlbmVkJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdmFyIHRpdGxlUGFyZW50ID0gdGl0bGUucGFyZW50KCk7XHJcbiAgICAgIHZhciBjb250ZW50ID0gdGl0bGVQYXJlbnQubmV4dCgnLmFjY29yZGVvbi1jb250ZW50Jyk7XHJcblxyXG4gICAgICBpZiAoIWNvbnRlbnQuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICBjb250ZW50LnNsaWRlRG93bihmdW5jdGlvbigpe3RpdGxlUGFyZW50LmFkZENsYXNzKCdpcy1vcGVuZWQnKX0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgLy90b3AtbWVudV9faWNvbiBoYW1idXJnZXJcclxuICAkKCcuaGFtYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvbicpO1xyXG4gICAgJChcIi5tZW51LW1vYl9fbGlzdFwiKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgJChcIi5tZW51LW1vYl9faXRlbVwiKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoXCJmaXhcIik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8v0YHQu9Cw0LnQtNC10YAg0LIg0LrQvtC90YHRgtGA0YPQutGC0L7RgNC1XHJcbiAgJCgnI2xnLXNsaWRlcicpLnNsaWNrKHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICBzcGVlZDogMTAwMCxcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgLy9nYWxsZXJ5IGxpZ2h0Ym94XHJcbiAgJChmdW5jdGlvbigpIHtcclxuICAgICAgbGlnaHRib3gub3B0aW9uKHtcclxuICAgICAgICAnd3JhcEFyb3VuZCc6IHRydWUsXHJcbiAgICAgICAgZGlzYWJsZVNjcm9sbGluZzogdHJ1ZSxcclxuICAgICAgICBwb3NpdGlvbkZyb21Ub3A6IDBcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICQoJy5tYXN0ZXJzLXNlY19fY2Fyb3VzZWwnKS5ieFNsaWRlcih7XHJcbiAgICBtaW5TbGlkZXM6IDEsXHJcbiAgICBtYXhTbGlkZXM6IDUsXHJcbiAgICBzbGlkZVdpZHRoOiAxMzgsXHJcbiAgICBzbGlkZU1hcmdpbjogMTgsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgcGFnZXI6IGZhbHNlLFxyXG4gICAgbW92ZVNsaWRlczogMVxyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAkKCcubWFzdGVyLXdvcmtzX19jYXJvdXNlbCcpLmJ4U2xpZGVyKHtcclxuICAgIG1pblNsaWRlczogMSxcclxuICAgIG1heFNsaWRlczogNSxcclxuICAgIHNsaWRlV2lkdGg6IDE4OCxcclxuICAgIHNsaWRlTWFyZ2luOiAxNSxcclxuICAgIC8vIGF1dG86IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgcGFnZXI6IGZhbHNlLFxyXG4gICAgbW92ZVNsaWRlczogMVxyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAvL21vYmlsZSBtZW51XHJcbiAgJCgnLm1lbnUtbW9iX19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLmhhbWJ1cmdlclwiKS50b2dnbGVDbGFzcygnb24nKTtcclxuICAgICQoXCIubWVudS1tb2JfX2xpc3RcIikuc2xpZGVUb2dnbGUoKTtcclxuICAgICQoXCIubWVudS1tb2JfX2l0ZW1cIikudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKFwiZml4XCIpO1xyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG4gIC8vcHJlbG9hZGVyXHJcbiAgJChmdW5jdGlvbigpIHtcclxuICAgIHZhciBpbWdzID0gW107XHJcblxyXG4gICAgJC5lYWNoKCQoJyonKSwgZnVuY3Rpb24oKSB7IC8v0L/QtdGA0LXQsdC40YDQsNC10Lwg0LLRgdC1INGB0LXQu9C10LrRgtC+0YDRi1xyXG4gICAgICB2YXJcclxuICAgICAgICAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgYmFja2dyb3VuZCA9ICR0aGlzLmNzcygnYmFja2dyb3VuZC1pbWFnZScpLFxyXG4gICAgICAgIGltZyA9ICR0aGlzLmlzKCdpbWcnKTsgLy/Qv9GA0L7QstC10YDRj9C10Lwg0LrQsNGA0YLQuNC90LrQsCDQu9C4INGN0YLQvlxyXG5cclxuICAgICAgaWYgKGJhY2tncm91bmQgIT0gJ25vbmUnKSB7XHJcbiAgICAgICAgdmFyIHBhdGggPSBiYWNrZ3JvdW5kLnJlcGxhY2UoJ3VybChcIicsICcnKS5yZXBsYWNlKCdcIiknLCAnJyk7XHJcbiAgICAgICAgaW1ncy5wdXNoKHBhdGgpOyAvL9C00L7QsdCw0LLQu9GP0LXQvCDQv9GD0YLQuCDQuiDRhNC+0L3QsNC8INCyINC80LDRgdGB0LjQslxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaW1nKSB7XHJcbiAgICAgICAgdmFyIHBhdGggPSAkdGhpcy5hdHRyKCdzcmMnKTsgLy/QsdC10YDQtdC8INC/0YPRgtGMINC6INC60LDRgNGC0LjQvdC60LUgaW1nXHJcblxyXG4gICAgICAgIGlmIChwYXRoKSB7IC8v0LXRgdC70Lgg0L/Rg9GC0Ywg0L3QtSDQv9GD0YHRgtC+0LlcclxuICAgICAgICAgIGltZ3MucHVzaChwYXRoKTsgLy/QtNC+0LHQsNCy0LvRj9C10Lwg0LXQs9C+INCyINC80LDRgdGB0LjQslxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHBlcmNlbnRzVG90YWwgPSAxO1xyXG5cclxuICAgIC8v0L/RgNC+0YXQvtC00LjQvCDQv9C+INC80LDRgdGB0LjQstGDINC4INC/0YDQvtCy0LXRgNGP0LXQvCDQt9Cw0LPRgNGD0LfQuNC70LjRgdGMINC70Lgg0LrQsNGA0YLQuNC90LrQuFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBpbWFnZSA9ICQoJzxpbWc+JywgeyAvL9GB0L7Qt9C00LDQtdC8INGN0LvQtdC80LXQvdGCXHJcbiAgICAgICAgYXR0cjogeyAvL9C30LDQtNCw0LXQvCDQtdC80YMg0L/QtdGA0LXQvNC10YLRgNGLICjQsiDQtNCw0L3QvdC+0Lwg0YHQu9GD0YfQtSDQsNGC0YDQuNCx0YPRgilcclxuICAgICAgICAgIHNyYzogaW1nc1tpXVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpbWFnZS5vbih7XHJcbiAgICAgICAgLy/Qv9GA0L7QstC10YDRj9C10Lwg0LfQsNCz0YDRg9C30LjQu9C+0YHRjCDQu9C4INC40LfQvtCx0YDQsNC20LXQvdC40LVcclxuICAgICAgICBsb2FkIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAvL9Cy0YvQt9GL0LLQsNC10Lwg0YTRg9C9LdGOINCy0YvQstC+0LTQsCDQv9GA0L7RhtC10L3RgtC+0LJcclxuICAgICAgICAgIHNldFBlcmNlbnRzKGltZ3MubGVuZ3RoLCBwZXJjZW50c1RvdGFsKTtcclxuICAgICAgICAgIC8v0YPQstC10LvQuNGH0LjQstCw0LXQvCDRgdGH0LXRgtGH0LjQuiDQt9Cw0LPRgNGD0LbQtdC90L3Ri9C5INC60LDRgNGC0LjQvdC+0Log0L3QsCAxXHJcbiAgICAgICAgICBwZXJjZW50c1RvdGFsKys7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZXJyb3IgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHNldFBlcmNlbnRzKGltZ3MubGVuZ3RoLCBwZXJjZW50c1RvdGFsKTtcclxuICAgICAgICAgIC8v0L/RgNC4INC+0YjQuNCx0LrQtSDQt9Cw0LPRgNGD0LfQutC4ICsxINC4INC40LTQtdC8INC00LDQu9GM0YjQtVxyXG4gICAgICAgICAgcGVyY2VudHNUb3RhbCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/Qv9C10YDQtdC00LDQtdC8INC/0YDQvtGG0LXQvdGC0Ysg0LIg0L/RgNC10LvQvtCw0LTQtdGAXHJcbiAgICBmdW5jdGlvbiBzZXRQZXJjZW50cyh0b3RhbCwgY3VycmVudCkge1xyXG4gICAgICB2YXIgcGVyY2VudCA9IE1hdGguY2VpbChjdXJyZW50IC8gdG90YWwgKiAxMDApO1xyXG5cclxuICAgICAgaWYgKHBlcmNlbnQgPj0gMTAwKSB7XHJcbiAgICAgICAgJCgnLnByZWxvYWRlcicpLmZhZGVPdXQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJCgnLnByZWxvYWRlcl9fcGVyY2VudHMnKS50ZXh0KHBlcmNlbnQgKyAnJScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICQoJy5yZXZpZXdzLXNsaWRlcicpLmJ4U2xpZGVyKHtcclxuICAgIG1vZGU6ICdmYWRlJyxcclxuICAgIGF1dG86IHRydWUsXHJcbiAgICBwYWdlcjogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICQoJy5zYWxvbi1tYXN0ZXJzX19jYXJvdXNlbCcpLmJ4U2xpZGVyKHtcclxuICAgIG1pblNsaWRlczogMSxcclxuICAgIG1heFNsaWRlczogNSxcclxuICAgIHNsaWRlV2lkdGg6IDEzOCxcclxuICAgIHNsaWRlTWFyZ2luOiAxOCxcclxuICAgIC8vIGF1dG86IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgcGFnZXI6IGZhbHNlLFxyXG4gICAgbW92ZVNsaWRlczogMSxcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgJCgnI3NhbG9uLW9uZS1zbGlkZXInKS5ieFNsaWRlcih7XHJcbiAgICAvLyBhdXRvOiB0cnVlLFxyXG4gICAgcGFnZXJDdXN0b206ICcjc2Fsb24tb25lLXNsaWRlci1wYWdlcidcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gLy9zY3JvbGwgMiBhbmNvclxyXG4gICAgLy8gJChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgdmFyIHBvc2l0aW9ucyA9IHt9O1xyXG5cclxuICAgIC8vICAgICAkKCdib2R5LCBodG1sJykuc2Nyb2xsVG9wKDApO1xyXG5cclxuICAgIC8vICAgICAkKFwiI3NlcnZpY2UsICNtYXN0ZXJzLCAjc2Fsb25zXCIpLmVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIC8vICAgICAgICAgcG9zaXRpb25zWyQodGhpcykuYXR0cignaWQnKV0gPSAoJCh0aGlzKS5vZmZzZXQoKS50b3AgKiAkKFwiYm9keVwiKS5jc3MoJ3pvb20nKSk7XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgICQoJy5tZW51X19saW5rW2hyZWYqPVxcXFwjXScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICAgICAgICAgdmFyIGFuY2hvciA9ICQodGhpcyk7XHJcbiAgICAvLyAgICAgICAgIHZhciBocmVmID0gYW5jaG9yLmF0dHIoJ2hyZWYnKTtcclxuICAgIC8vICAgICAgICAgdmFyIHRvcCA9IHBvc2l0aW9uc1tocmVmLnJlcGxhY2UoJyMnLCAnJyldO1xyXG5cclxuICAgIC8vICAgICAgICAgaWYoJChocmVmKS5sZW5ndGggPD0gMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSBkb2N1bWVudC5vcmlnaW4gKyBocmVmXHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICQoJ2JvZHksIGh0bWwnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAvLyAgICAgICAgICAgICBzY3JvbGxUb3A6ICh0b3AgLSA4MCkgKyAncHgnXHJcbiAgICAvLyAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gfSk7XHJcblxyXG5cclxuICAgIC8vICQoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICQoJy5tZW51LW1vYl9fbGlua1tocmVmKj1cXFxcI10nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyAgICAgICAgIHZhciBhbmNob3IgPSAkKHRoaXMpO1xyXG4gICAgLy8gICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgLy8gICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKGFuY2hvci5hdHRyKCdocmVmJykpLm9mZnNldCgpLnRvcCAtIDgwICsgJ3B4J1xyXG4gICAgLy8gICAgICAgICB9LCAxMDAwKTtcclxuICAgIC8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIGJlZ2luIHNjcm9sbCAyIGFuY29yIGRlc2N0b3AgbWVudVxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgJCgnLm1lbnVfX2xpbmtbaHJlZio9XFxcXCNdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgdmFyIGFuY2hvciA9ICQodGhpcyk7XHJcbiAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoYW5jaG9yLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wIC0gMCArICdweCdcclxuICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgLy8gZW5kIHNjcm9sbCAyIGFuY29yIGRlc2N0b3AgbWVudVxyXG5cclxuICAgIC8vIGJlZ2luIHNjcm9sbCAyIGFuY29yIG1vYmlsZSBtZW51XHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCcubWVudS1tb2JfX2xpbmtbaHJlZio9XFxcXCNdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgdmFyIGFuY2hvciA9ICQodGhpcyk7XHJcbiAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoYW5jaG9yLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wIC0gMCArICdweCdcclxuICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgLy8gZW5kIHNjcm9sbCAyIGFuY29yIG1vYmlsZSBtZW51XHJcblxyXG4gICAgLy8gYmVnaW4gc2Nyb2xsIDIgYW5jb3Ig0YPQvdC40LLQtdGA0YHQsNC70YzQvdCw0Y8g0YHRgdGL0LvQutCwXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCcuc2Nyb2xsLWxpbmtbaHJlZio9XFxcXCNdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgdmFyIGFuY2hvciA9ICQodGhpcyk7XHJcbiAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoYW5jaG9yLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wIC0gODUgKyAncHgnXHJcbiAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgIC8vIGVuZCBzY3JvbGwgMiBhbmNvciDRg9C90LjQstC10YDRgdCw0LvRjNC90LDRjyDRgdGB0YvQu9C60LBcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgJChmdW5jdGlvbigpIHtcclxuICAgIC8vIGN1c3RvbSBzZWxlY3Rib3hcclxuICAgICQoIFwiLnNlbGVjdG1lbnVcIiApLnNlbGVjdG1lbnUoKTtcclxuXHJcbiAgICAvLyBjaGFuZ2UgcGljdHVyZXMgaW4gc2VydGlmaWNhdGUgcGFnZVxyXG4gICAgJCggXCIuY2VydGlmaWNhdGUtc2VsZWN0XCIgKS5zZWxlY3RtZW51KHtcclxuICAgICAgY2hhbmdlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcclxuICAgICAgICB2YXIgc2VydGlmaWNhdGVQaWMgPSAnI3BpYy0nICsgJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCQodGhpcykuYXR0cignaWQnKSk7XHJcbiAgICAgICAgdmFyIHNlcnRpZmljYXRlSW1nID0gJCh1aS5pdGVtLmVsZW1lbnRbMF0pLmRhdGEoJ3BhdGgnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZXJ0aWZpY2F0ZVBpYyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VydGlmaWNhdGVJbWcpO1xyXG4gICAgICAgICQoc2VydGlmaWNhdGVQaWMpLmZpbmQoJ2ltZzpmaXJzdCcpLmF0dHIoJ3NyYycsIHNlcnRpZmljYXRlSW1nKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygkKHVpLml0ZW0uZWxlbWVudFswXSkuZGF0YSgncGF0aCcpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAvL1NWRyBmb3IgSUVcclxuICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgc3ZnNGV2ZXJ5Ym9keSgpO1xyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAvL9GB0LvQsNC50LTQtdGAINCyINC60L7QvdGB0YLRgNGD0LrRgtC+0YDQtVxyXG4gICQoJy50YWItc2VjX19zbGlkZXInKS5zbGljayh7XHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6dHJ1ZSxcclxuICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgZmFkZTp0cnVlLFxyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAvLyBiZWdpbiB0aHVtYi10YWJzXHJcbiAgJChmdW5jdGlvbigpIHtcclxuICAgICQoXCIudGFiLXNlY19fdGFiLWl0ZW1cIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoXCIudGFiLXNlY19fdGFiLWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICB2YXIgYWN0aXZlVGFiID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10YWJcIik7IC8v0J3QsNC50YLQuCBkYXRhINCw0YLRgNC40LHRg9GCINC00LvRjyDQvtC/0YDQtdC00LXQu9C10L3QuNGPINCw0LrRgtC40LLQvdC+0Lkg0LLQutC70LDQtNC60Lgr0LrQvtC90YLQtdC90YLQsFxyXG5cclxuICAgICAgJChcIi50YWItc2VjX19pdGVtXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAkKGFjdGl2ZVRhYikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICAvLyBlbmQgICB0aHVtYi10YWJzXHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIGpRdWVyeShcIiNsYXllcnNsaWRlclwiKS5sYXllclNsaWRlcih7XHJcbiAgICByZXNwb25zaXZlOiBmYWxzZSxcclxuICAgIC8vIHJlc3BvbnNpdmVVbmRlcjogMTE0MCxcclxuICAgIHJlc3BvbnNpdmVVbmRlcjogODYwLFxyXG4gICAgLy8gbGF5ZXJzQ29udGFpbmVyOiAxMTQwLFxyXG4gICAgbGF5ZXJzQ29udGFpbmVyOiA4NjAsXHJcbiAgICBza2luc1BhdGg6ICcnLFxyXG4gICAgc2tpbjogJycsXHJcbiAgICAvLyBhdXRvU3RhcnQgOiBmYWxzZSxcclxuICAgIGF1dG9TdGFydCA6IHRydWVcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgJCgnI3JpLWdyaWQnKS5ncmlkcm90YXRvcih7XHJcbiAgICByb3dzICAgICAgOiAyLFxyXG4gICAgY29sdW1ucyAgIDogNixcclxuICAgIGFuaW1UeXBlICA6ICdyb3RhdGVMZWZ0U2NhbGUnLFxyXG4gICAgYW5pbVNwZWVkIDogNzAwLFxyXG4gICAgaW50ZXJ2YWwgIDogMTUwMCxcclxuICAgIHN0ZXAgICAgICA6IDIsXHJcbiAgICB3MTAyNCAgICAgICAgICAgOiB7XHJcbiAgICAgICAgcm93cyAgICA6IDIsXHJcbiAgICAgICAgY29sdW1ucyA6IDVcclxuICAgIH0sXHJcblxyXG4gICAgdzc2OCAgICAgICAgICAgIDoge1xyXG4gICAgICAgIHJvd3MgICAgOiAyLFxyXG4gICAgICAgIGNvbHVtbnMgOiA0XHJcbiAgICB9LFxyXG5cclxuICAgIHc0ODAgICAgICAgICAgICA6IHtcclxuICAgICAgICByb3dzICAgIDogMixcclxuICAgICAgICBjb2x1bW5zIDogM1xyXG4gICAgfSxcclxuXHJcbiAgICB3MzIwICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgcm93cyAgICA6IDIsXHJcbiAgICAgICAgY29sdW1ucyA6IDJcclxuICAgIH1cclxuICB9KTtcclxuXHJcbn07Il19
