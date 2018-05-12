(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

  //снег
  // require('./modules/snow')();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvanMvYXBwLmpzIiwic291cmNlL2pzL21vZHVsZXMvYWNjb3JkZW9uLW1hc3RlcnMuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9hY2NvcmRlb24tcHJpY2UuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9oYW1idXJnZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9sZy1zbGlkZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9saWdodGJveC5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL21hc3RlcnMtc2VjLWNhcm91c2VsLmpzIiwic291cmNlL2pzL21vZHVsZXMvbWFzdGVycy13b3Jrcy1jYXJvdXNlbC5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL21vYi1tZW51LmpzIiwic291cmNlL2pzL21vZHVsZXMvcHJlbG9hZGVyLmpzIiwic291cmNlL2pzL21vZHVsZXMvcmV2aWV3cy1zbGlkZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy9zYWxvbi1tYXN0ZXJzLWNhcm91c2VsLmpzIiwic291cmNlL2pzL21vZHVsZXMvc2Fsb24tb25lLXNsaWRlci5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL3Njcm9sbC0yLWFuY29yLmpzIiwic291cmNlL2pzL21vZHVsZXMvc2VsZWN0LXVpLmpzIiwic291cmNlL2pzL21vZHVsZXMvc3ZnNGV2ZXJ5Ym9keS5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL3RhYi1zbGlkZXIuanMiLCJzb3VyY2UvanMvbW9kdWxlcy90YWJzLmpzIiwic291cmNlL2pzL21vZHVsZXMvdG9wLXNsaWRlci5qcyIsInNvdXJjZS9qcy9tb2R1bGVzL3dvcmstZ2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoZnVuY3Rpb24oKSB7XG5cbiAgLy/QktGA0LXQvNC10L3QvdC+0LUg0LzQtdC90Y4g0LTQu9GPINGA0LDQt9GA0LDQsdC+0YLRh9C40LrQsFxuICAvLyByZXF1aXJlKCcuL21vZHVsZXMvdGVtcC1uYXYnKSgpO1xuXG4gIC8vcHJlbG9hZGVyXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9wcmVsb2FkZXInKSgpO1xuXG4gIC8vem9vbSBmb3IgTWFjQm9va1xuICAvLyByZXF1aXJlKCcuL21vZHVsZXMvem9vbScpKCk7XG5cbiAgLy90b3AtbWVudV9faWNvbiBoYW1idXJnZXIgKyBtb2JpbGUgbWVudVxuICByZXF1aXJlKCcuL21vZHVsZXMvaGFtYnVyZ2VyJykoKTtcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL21vYi1tZW51JykoKTtcblxuICAvL3Njcm9sbCAyIGFuY29yLWxpbmtcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3Njcm9sbC0yLWFuY29yJykoKTtcblxuICAvL2dhbGxlcnkgaW4gd29yay1zZWN0aW9uXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy93b3JrLWdhbGxlcnknKSgpO1xuXG4gIC8vY2Fyb3VzZWwgaW4gbWFzdGVycyBzZWN0aW9uXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9tYXN0ZXJzLXNlYy1jYXJvdXNlbCcpKCk7XG5cbiAgLy9jYXJvdXNlbCBpbiBtYXN0ZXJzLW9uZS5odG1sXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9tYXN0ZXJzLXdvcmtzLWNhcm91c2VsJykoKTtcblxuICAvL2Nhcm91c2VsIGluIHNhbG9uZS1vbmUuaHRtbFxuICByZXF1aXJlKCcuL21vZHVsZXMvc2Fsb24tbWFzdGVycy1jYXJvdXNlbCcpKCk7XG5cbiAgLy9zbGlkZXIgaW4gcmV2aWV3cyBzZWN0aW9uXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9yZXZpZXdzLXNsaWRlcicpKCk7XG5cbiAgLy9zbGlkZXIgaW4gdG9wIHNlY3Rpb24gaW5kZXguaHRtbFxuICByZXF1aXJlKCcuL21vZHVsZXMvdG9wLXNsaWRlcicpKCk7XG5cbiAgLy9hY2NvcmRlb24gaW4gbWFzdGVycy5odG1sXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9hY2NvcmRlb24tbWFzdGVycycpKCk7XG5cbiAgLy9hY2NvcmRlb24gZm9yIHByaWNlXG4gIHJlcXVpcmUoJy4vbW9kdWxlcy9hY2NvcmRlb24tcHJpY2UnKSgpO1xuXG4gIC8vU1ZHIGZvciBJRVxuICByZXF1aXJlKCcuL21vZHVsZXMvc3ZnNGV2ZXJ5Ym9keScpKCk7XG5cbiAgLy9jb2xvci10by1ncmV5IHBob3RvIGluIHNlcnZpY2Umc2FsbG9uIHNlY3Rpb25cbiAgLy8gcmVxdWlyZSgnLi9tb2R1bGVzL2dyZXlzY2FsZScpKCk7XG4gIC8vIHJlcXVpcmUoJy4vbW9kdWxlcy9ncmV5c2NhbGUtc2Fsb25zJykoKTtcblxuICAvL3NhbG9uLW9uZS1zbGlkZXJcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3NhbG9uLW9uZS1zbGlkZXInKSgpO1xuXG4gIC8vbGlnaHRib3hcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL2xpZ2h0Ym94JykoKTtcblxuICAvL2N1c3RvbSBzZWxlY3Rib3ggd2l0aCBqcXVlcnlVSVxuICByZXF1aXJlKCcuL21vZHVsZXMvc2VsZWN0LXVpJykoKTtcblxuICAvL9GB0LvQsNC50LTQtdGAINCyINC60L7QvdGB0YLRgNGD0LrRgtC+0YDQtVxuICByZXF1aXJlKCcuL21vZHVsZXMvbGctc2xpZGVyJykoKTtcblxuICAvL9GB0LvQsNC50LTQtdGAINCyINC60L7QvdGB0YLRgNGD0LrRgtC+0YDQtVxuICByZXF1aXJlKCcuL21vZHVsZXMvdGFiLXNsaWRlcicpKCk7XG5cbiAgLy/RgtCw0LHRiyDQsiDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LVcbiAgcmVxdWlyZSgnLi9tb2R1bGVzL3RhYnMnKSgpO1xuXG4gIC8v0YHQvdC10LNcbiAgLy8gcmVxdWlyZSgnLi9tb2R1bGVzL3Nub3cnKSgpO1xuXG4gIC8v0JLRi9GA0LDQstC90LjQstCw0L3QuNC1INCy0YvRgdC+0YLRiyDRhNC+0L3QsCDRgyBzYWxlLWNhcmRcbiAgLy8gcmVxdWlyZSgnLi9tb2R1bGVzL3NhbGUtY2FyZCcpKCk7XG5cbiAgLy9hbmltYXRlIHNlY3Rpb24gaW4gbG9hZGVkXG4gIC8vIHJlcXVpcmUoJy4vbW9kdWxlcy93YXlwb2ludHMnKSgpO1xuICAvLyByZXF1aXJlKCcuL21vZHVsZXMvYW5pbWF0ZS1jc3MnKSgpO1xuXG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAvL2FjY3JvcmRlb24gaW4gbWFzdGVycy5odG1sXHJcbiAgJCgnLm1hc3RlcnMtZmlsdGVyX19yb3cnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAvL2FjY3JvcmRlb24gZm9yIHByaWNlJnNlcnZpY2VcclxuICAkKGZ1bmN0aW9uKCQpe1xyXG4gICAgdmFyIGNvbnRlbnRzID0gJCgnLmFjY29yZGVvbi1jb250ZW50Jyk7XHJcbiAgICB2YXIgdGl0bGVzID0gJCgnLmFjY29yZGVvbi10aXRsZV9fY2xpY2snKTtcclxuICAgIHRpdGxlcy5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciB0aXRsZSA9ICQodGhpcyk7XHJcbiAgICAgIGNvbnRlbnRzLmZpbHRlcignOnZpc2libGUnKS5zbGlkZVVwKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5wcmV2KCcuYWNjb3JkZW9uLXRpdGxlJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW5lZCcpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHZhciB0aXRsZVBhcmVudCA9IHRpdGxlLnBhcmVudCgpO1xyXG4gICAgICB2YXIgY29udGVudCA9IHRpdGxlUGFyZW50Lm5leHQoJy5hY2NvcmRlb24tY29udGVudCcpO1xyXG5cclxuICAgICAgaWYgKCFjb250ZW50LmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgY29udGVudC5zbGlkZURvd24oZnVuY3Rpb24oKXt0aXRsZVBhcmVudC5hZGRDbGFzcygnaXMtb3BlbmVkJyl9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8vdG9wLW1lbnVfX2ljb24gaGFtYnVyZ2VyXHJcbiAgJCgnLmhhbWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb24nKTtcclxuICAgICQoXCIubWVudS1tb2JfX2xpc3RcIikuc2xpZGVUb2dnbGUoKTtcclxuICAgICQoXCIubWVudS1tb2JfX2l0ZW1cIikudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKFwiZml4XCIpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAvL9GB0LvQsNC50LTQtdGAINCyINC60L7QvdGB0YLRgNGD0LrRgtC+0YDQtVxyXG4gICQoJyNsZy1zbGlkZXInKS5zbGljayh7XHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgc3BlZWQ6IDEwMDAsXHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8vZ2FsbGVyeSBsaWdodGJveFxyXG4gICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxpZ2h0Ym94Lm9wdGlvbih7XHJcbiAgICAgICAgJ3dyYXBBcm91bmQnOiB0cnVlLFxyXG4gICAgICAgIGRpc2FibGVTY3JvbGxpbmc6IHRydWUsXHJcbiAgICAgICAgcG9zaXRpb25Gcm9tVG9wOiAwXHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAkKCcubWFzdGVycy1zZWNfX2Nhcm91c2VsJykuYnhTbGlkZXIoe1xyXG4gICAgbWluU2xpZGVzOiAxLFxyXG4gICAgbWF4U2xpZGVzOiA1LFxyXG4gICAgc2xpZGVXaWR0aDogMTM4LFxyXG4gICAgc2xpZGVNYXJnaW46IDE4LFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHBhZ2VyOiBmYWxzZSxcclxuICAgIG1vdmVTbGlkZXM6IDFcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgJCgnLm1hc3Rlci13b3Jrc19fY2Fyb3VzZWwnKS5ieFNsaWRlcih7XHJcbiAgICBtaW5TbGlkZXM6IDEsXHJcbiAgICBtYXhTbGlkZXM6IDUsXHJcbiAgICBzbGlkZVdpZHRoOiAxODgsXHJcbiAgICBzbGlkZU1hcmdpbjogMTUsXHJcbiAgICAvLyBhdXRvOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHBhZ2VyOiBmYWxzZSxcclxuICAgIG1vdmVTbGlkZXM6IDFcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgLy9tb2JpbGUgbWVudVxyXG4gICQoJy5tZW51LW1vYl9fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIi5oYW1idXJnZXJcIikudG9nZ2xlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKFwiLm1lbnUtbW9iX19saXN0XCIpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAkKFwiLm1lbnUtbW9iX19pdGVtXCIpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcyhcImZpeFwiKTtcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuICAvL3ByZWxvYWRlclxyXG4gICQoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaW1ncyA9IFtdO1xyXG5cclxuICAgICQuZWFjaCgkKCcqJyksIGZ1bmN0aW9uKCkgeyAvL9C/0LXRgNC10LHQuNGA0LDQtdC8INCy0YHQtSDRgdC10LvQtdC60YLQvtGA0YtcclxuICAgICAgdmFyXHJcbiAgICAgICAgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgIGJhY2tncm91bmQgPSAkdGhpcy5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnKSxcclxuICAgICAgICBpbWcgPSAkdGhpcy5pcygnaW1nJyk7IC8v0L/RgNC+0LLQtdGA0Y/QtdC8INC60LDRgNGC0LjQvdC60LAg0LvQuCDRjdGC0L5cclxuXHJcbiAgICAgIGlmIChiYWNrZ3JvdW5kICE9ICdub25lJykge1xyXG4gICAgICAgIHZhciBwYXRoID0gYmFja2dyb3VuZC5yZXBsYWNlKCd1cmwoXCInLCAnJykucmVwbGFjZSgnXCIpJywgJycpO1xyXG4gICAgICAgIGltZ3MucHVzaChwYXRoKTsgLy/QtNC+0LHQsNCy0LvRj9C10Lwg0L/Rg9GC0Lgg0Log0YTQvtC90LDQvCDQsiDQvNCw0YHRgdC40LJcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGltZykge1xyXG4gICAgICAgIHZhciBwYXRoID0gJHRoaXMuYXR0cignc3JjJyk7IC8v0LHQtdGA0LXQvCDQv9GD0YLRjCDQuiDQutCw0YDRgtC40L3QutC1IGltZ1xyXG5cclxuICAgICAgICBpZiAocGF0aCkgeyAvL9C10YHQu9C4INC/0YPRgtGMINC90LUg0L/Rg9GB0YLQvtC5XHJcbiAgICAgICAgICBpbWdzLnB1c2gocGF0aCk7IC8v0LTQvtCx0LDQstC70Y/QtdC8INC10LPQviDQsiDQvNCw0YHRgdC40LJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBwZXJjZW50c1RvdGFsID0gMTtcclxuXHJcbiAgICAvL9C/0YDQvtGF0L7QtNC40Lwg0L/QviDQvNCw0YHRgdC40LLRgyDQuCDQv9GA0L7QstC10YDRj9C10Lwg0LfQsNCz0YDRg9C30LjQu9C40YHRjCDQu9C4INC60LDRgNGC0LjQvdC60LhcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgaW1hZ2UgPSAkKCc8aW1nPicsIHsgLy/RgdC+0LfQtNCw0LXQvCDRjdC70LXQvNC10L3RglxyXG4gICAgICAgIGF0dHI6IHsgLy/Qt9Cw0LTQsNC10Lwg0LXQvNGDINC/0LXRgNC10LzQtdGC0YDRiyAo0LIg0LTQsNC90L3QvtC8INGB0LvRg9GH0LUg0LDRgtGA0LjQsdGD0YIpXHJcbiAgICAgICAgICBzcmM6IGltZ3NbaV1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaW1hZ2Uub24oe1xyXG4gICAgICAgIC8v0L/RgNC+0LLQtdGA0Y/QtdC8INC30LDQs9GA0YPQt9C40LvQvtGB0Ywg0LvQuCDQuNC30L7QsdGA0LDQttC10L3QuNC1XHJcbiAgICAgICAgbG9hZCA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgLy/QstGL0LfRi9Cy0LDQtdC8INGE0YPQvS3RjiDQstGL0LLQvtC00LAg0L/RgNC+0YbQtdC90YLQvtCyXHJcbiAgICAgICAgICBzZXRQZXJjZW50cyhpbWdzLmxlbmd0aCwgcGVyY2VudHNUb3RhbCk7XHJcbiAgICAgICAgICAvL9GD0LLQtdC70LjRh9C40LLQsNC10Lwg0YHRh9C10YLRh9C40Log0LfQsNCz0YDRg9C20LXQvdC90YvQuSDQutCw0YDRgtC40L3QvtC6INC90LAgMVxyXG4gICAgICAgICAgcGVyY2VudHNUb3RhbCsrO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGVycm9yIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBzZXRQZXJjZW50cyhpbWdzLmxlbmd0aCwgcGVyY2VudHNUb3RhbCk7XHJcbiAgICAgICAgICAvL9C/0YDQuCDQvtGI0LjQsdC60LUg0LfQsNCz0YDRg9C30LrQuCArMSDQuCDQuNC00LXQvCDQtNCw0LvRjNGI0LVcclxuICAgICAgICAgIHBlcmNlbnRzVG90YWwrKztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8v0L/QtdGA0LXQtNCw0LXQvCDQv9GA0L7RhtC10L3RgtGLINCyINC/0YDQtdC70L7QsNC00LXRgFxyXG4gICAgZnVuY3Rpb24gc2V0UGVyY2VudHModG90YWwsIGN1cnJlbnQpIHtcclxuICAgICAgdmFyIHBlcmNlbnQgPSBNYXRoLmNlaWwoY3VycmVudCAvIHRvdGFsICogMTAwKTtcclxuXHJcbiAgICAgIGlmIChwZXJjZW50ID49IDEwMCkge1xyXG4gICAgICAgICQoJy5wcmVsb2FkZXInKS5mYWRlT3V0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICQoJy5wcmVsb2FkZXJfX3BlcmNlbnRzJykudGV4dChwZXJjZW50ICsgJyUnKTtcclxuICAgIH1cclxuICB9KTtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAkKCcucmV2aWV3cy1zbGlkZXInKS5ieFNsaWRlcih7XHJcbiAgICBtb2RlOiAnZmFkZScsXHJcbiAgICBhdXRvOiB0cnVlLFxyXG4gICAgcGFnZXI6IGZhbHNlLFxyXG4gICAgcGF1c2U6IDYwMDBcclxuICB9KTtcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgJCgnLnNhbG9uLW1hc3RlcnNfX2Nhcm91c2VsJykuYnhTbGlkZXIoe1xyXG4gICAgbWluU2xpZGVzOiAxLFxyXG4gICAgbWF4U2xpZGVzOiA1LFxyXG4gICAgc2xpZGVXaWR0aDogMTM4LFxyXG4gICAgc2xpZGVNYXJnaW46IDE4LFxyXG4gICAgLy8gYXV0bzogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBwYWdlcjogZmFsc2UsXHJcbiAgICBtb3ZlU2xpZGVzOiAxLFxyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAkKCcjc2Fsb24tb25lLXNsaWRlcicpLmJ4U2xpZGVyKHtcclxuICAgIC8vIGF1dG86IHRydWUsXHJcbiAgICBwYWdlckN1c3RvbTogJyNzYWxvbi1vbmUtc2xpZGVyLXBhZ2VyJ1xyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyAvL3Njcm9sbCAyIGFuY29yXHJcbiAgICAvLyAkKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICB2YXIgcG9zaXRpb25zID0ge307XHJcblxyXG4gICAgLy8gICAgICQoJ2JvZHksIGh0bWwnKS5zY3JvbGxUb3AoMCk7XHJcblxyXG4gICAgLy8gICAgICQoXCIjc2VydmljZSwgI21hc3RlcnMsICNzYWxvbnNcIikuZWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgLy8gICAgICAgICBwb3NpdGlvbnNbJCh0aGlzKS5hdHRyKCdpZCcpXSA9ICgkKHRoaXMpLm9mZnNldCgpLnRvcCAqICQoXCJib2R5XCIpLmNzcygnem9vbScpKTtcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgJCgnLm1lbnVfX2xpbmtbaHJlZio9XFxcXCNdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gICAgICAgICB2YXIgYW5jaG9yID0gJCh0aGlzKTtcclxuICAgIC8vICAgICAgICAgdmFyIGhyZWYgPSBhbmNob3IuYXR0cignaHJlZicpO1xyXG4gICAgLy8gICAgICAgICB2YXIgdG9wID0gcG9zaXRpb25zW2hyZWYucmVwbGFjZSgnIycsICcnKV07XHJcblxyXG4gICAgLy8gICAgICAgICBpZigkKGhyZWYpLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IGRvY3VtZW50Lm9yaWdpbiArIGhyZWZcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgJCgnYm9keSwgaHRtbCcpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgIC8vICAgICAgICAgICAgIHNjcm9sbFRvcDogKHRvcCAtIDgwKSArICdweCdcclxuICAgIC8vICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAvLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyB9KTtcclxuXHJcblxyXG4gICAgLy8gJChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgJCgnLm1lbnUtbW9iX19saW5rW2hyZWYqPVxcXFwjXScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICAgICAgICAgdmFyIGFuY2hvciA9ICQodGhpcyk7XHJcbiAgICAvLyAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAvLyAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoYW5jaG9yLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wIC0gODAgKyAncHgnXHJcbiAgICAvLyAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gYmVnaW4gc2Nyb2xsIDIgYW5jb3IgZGVzY3RvcCBtZW51XHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCcubWVudV9fbGlua1tocmVmKj1cXFxcI10nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICB2YXIgYW5jaG9yID0gJCh0aGlzKTtcclxuICAgICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogJChhbmNob3IuYXR0cignaHJlZicpKS5vZmZzZXQoKS50b3AgLSAwICsgJ3B4J1xyXG4gICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICAvLyBlbmQgc2Nyb2xsIDIgYW5jb3IgZGVzY3RvcCBtZW51XHJcblxyXG4gICAgLy8gYmVnaW4gc2Nyb2xsIDIgYW5jb3IgbW9iaWxlIG1lbnVcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJy5tZW51LW1vYl9fbGlua1tocmVmKj1cXFxcI10nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICB2YXIgYW5jaG9yID0gJCh0aGlzKTtcclxuICAgICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogJChhbmNob3IuYXR0cignaHJlZicpKS5vZmZzZXQoKS50b3AgLSAwICsgJ3B4J1xyXG4gICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICAvLyBlbmQgc2Nyb2xsIDIgYW5jb3IgbW9iaWxlIG1lbnVcclxuXHJcbiAgICAvLyBiZWdpbiBzY3JvbGwgMiBhbmNvciDRg9C90LjQstC10YDRgdCw0LvRjNC90LDRjyDRgdGB0YvQu9C60LBcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJy5zY3JvbGwtbGlua1tocmVmKj1cXFxcI10nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICB2YXIgYW5jaG9yID0gJCh0aGlzKTtcclxuICAgICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogJChhbmNob3IuYXR0cignaHJlZicpKS5vZmZzZXQoKS50b3AgLSA4NSArICdweCdcclxuICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgLy8gZW5kIHNjcm9sbCAyIGFuY29yINGD0L3QuNCy0LXRgNGB0LDQu9GM0L3QsNGPINGB0YHRi9C70LrQsFxyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gY3VzdG9tIHNlbGVjdGJveFxyXG4gICAgJCggXCIuc2VsZWN0bWVudVwiICkuc2VsZWN0bWVudSgpO1xyXG5cclxuICAgIC8vIGNoYW5nZSBwaWN0dXJlcyBpbiBzZXJ0aWZpY2F0ZSBwYWdlXHJcbiAgICAkKCBcIi5jZXJ0aWZpY2F0ZS1zZWxlY3RcIiApLnNlbGVjdG1lbnUoe1xyXG4gICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xyXG4gICAgICAgIHZhciBzZXJ0aWZpY2F0ZVBpYyA9ICcjcGljLScgKyAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJCh0aGlzKS5hdHRyKCdpZCcpKTtcclxuICAgICAgICB2YXIgc2VydGlmaWNhdGVJbWcgPSAkKHVpLml0ZW0uZWxlbWVudFswXSkuZGF0YSgncGF0aCcpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlcnRpZmljYXRlUGljKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZXJ0aWZpY2F0ZUltZyk7XHJcbiAgICAgICAgJChzZXJ0aWZpY2F0ZVBpYykuZmluZCgnaW1nOmZpcnN0JykuYXR0cignc3JjJywgc2VydGlmaWNhdGVJbWcpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCQodWkuaXRlbS5lbGVtZW50WzBdKS5kYXRhKCdwYXRoJykpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8vU1ZHIGZvciBJRVxyXG4gICQoZnVuY3Rpb24oKSB7XHJcbiAgICBzdmc0ZXZlcnlib2R5KCk7XHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8v0YHQu9Cw0LnQtNC10YAg0LIg0LrQvtC90YHRgtGA0YPQutGC0L7RgNC1XHJcbiAgJCgnLnRhYi1zZWNfX3NsaWRlcicpLnNsaWNrKHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBhdXRvcGxheTp0cnVlLFxyXG4gICAgc3BlZWQ6IDEwMDAsXHJcbiAgICBmYWRlOnRydWUsXHJcbiAgfSk7XHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8vIGJlZ2luIHRodW1iLXRhYnNcclxuICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIi50YWItc2VjX190YWItaXRlbVwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJChcIi50YWItc2VjX190YWItaXRlbVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgIHZhciBhY3RpdmVUYWIgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXRhYlwiKTsgLy/QndCw0LnRgtC4IGRhdGEg0LDRgtGA0LjQsdGD0YIg0LTQu9GPINC+0L/RgNC10LTQtdC70LXQvdC40Y8g0LDQutGC0LjQstC90L7QuSDQstC60LvQsNC00LrQuCvQutC+0L3RgtC10L3RgtCwXHJcblxyXG4gICAgICAkKFwiLnRhYi1zZWNfX2l0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQoYWN0aXZlVGFiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIC8vIGVuZCAgIHRodW1iLXRhYnNcclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgalF1ZXJ5KFwiI2xheWVyc2xpZGVyXCIpLmxheWVyU2xpZGVyKHtcclxuICAgIHJlc3BvbnNpdmU6IGZhbHNlLFxyXG4gICAgLy8gcmVzcG9uc2l2ZVVuZGVyOiAxMTQwLFxyXG4gICAgcmVzcG9uc2l2ZVVuZGVyOiA4NjAsXHJcbiAgICAvLyBsYXllcnNDb250YWluZXI6IDExNDAsXHJcbiAgICBsYXllcnNDb250YWluZXI6IDg2MCxcclxuICAgIHNraW5zUGF0aDogJycsXHJcbiAgICBza2luOiAnJyxcclxuICAgIC8vIGF1dG9TdGFydCA6IGZhbHNlLFxyXG4gICAgYXV0b1N0YXJ0IDogdHJ1ZVxyXG4gIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAkKCcjcmktZ3JpZCcpLmdyaWRyb3RhdG9yKHtcclxuICAgIHJvd3MgICAgICA6IDIsXHJcbiAgICBjb2x1bW5zICAgOiA2LFxyXG4gICAgYW5pbVR5cGUgIDogJ3JvdGF0ZUxlZnRTY2FsZScsXHJcbiAgICBhbmltU3BlZWQgOiA3MDAsXHJcbiAgICBpbnRlcnZhbCAgOiAxNTAwLFxyXG4gICAgc3RlcCAgICAgIDogMixcclxuICAgIHcxMDI0ICAgICAgICAgICA6IHtcclxuICAgICAgICByb3dzICAgIDogMixcclxuICAgICAgICBjb2x1bW5zIDogNVxyXG4gICAgfSxcclxuXHJcbiAgICB3NzY4ICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgcm93cyAgICA6IDIsXHJcbiAgICAgICAgY29sdW1ucyA6IDRcclxuICAgIH0sXHJcblxyXG4gICAgdzQ4MCAgICAgICAgICAgIDoge1xyXG4gICAgICAgIHJvd3MgICAgOiAyLFxyXG4gICAgICAgIGNvbHVtbnMgOiAzXHJcbiAgICB9LFxyXG5cclxuICAgIHczMjAgICAgICAgICAgICA6IHtcclxuICAgICAgICByb3dzICAgIDogMixcclxuICAgICAgICBjb2x1bW5zIDogMlxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxufTsiXX0=
