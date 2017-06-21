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