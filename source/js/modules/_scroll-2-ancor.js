module.exports = function() {

  // // scroll 2 ancor
  // $(function() {
  //   $('.menu__link[href*=\\#]').on("click", function(e){
  //      var anchor = $(this);
  //      $('html, body').stop().animate({
  //       scrollTop: $(anchor.attr('href')).offset().top - 80 + 'px'
  //      }, 1000);
  //      e.preventDefault();
  //   });
  //   return false;
  // });




  // $(function() {
  //   $('.menu-mob__link[href*=\\#]').on("click", function(e){
  //      var anchor = $(this);
  //      $('html, body').stop().animate({
  //       scrollTop: $(anchor.attr('href')).offset().top - 80 + 'px'
  //      }, 1000);
  //      e.preventDefault();
  //   });
  //   return false;
  // });

    //scroll 2 ancor
      $(function () {
          var positions = {};
          var bodyZoom = parseFloat($("body").css('zoom'));

          $('body, html').scrollTop(0);

          setTimeout(function(){

            $("#service, #masters, #salons").each(function (item) {
                if(detectIE()) {
                  positions[$(this).attr('id')] = ($(this).offset().top);
                } else {
                  positions[$(this).attr('id')] = ($(this).offset().top * bodyZoom);
                }
            });

          }, 1000)

          console.log(positions);

          $('.menu__link[href*=\\#]').on("click", function (e) {
              var anchor = $(this);
              var top = positions[anchor.attr('href').replace('#', '')];

              $('body, html').stop().animate({
                  scrollTop: (top - 80) + 'px'
              }, 1000);
              e.preventDefault();
          });
          return false;
      });


      $(function () {
          $('.menu-mob__link[href*=\\#]').on("click", function (e) {
              var anchor = $(this);
              $('html, body').stop().animate({
                  scrollTop: $(anchor.attr('href')).offset().top - 80 + 'px'
              }, 1000);
              e.preventDefault();
          });
          return false;
      });

  /**
   * detect IE
   * returns version of IE or false, if browser is not Internet Explorer
   */
  function detectIE() {
    var ua = window.navigator.userAgent;

    // Test values; Uncomment to check result …

    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

    // Edge 12 (Spartan)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    // Edge 13
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
  }



};