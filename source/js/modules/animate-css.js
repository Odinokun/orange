module.exports = function() {

  //Animate CSS + WayPoints javaScript Plugin
  //Example: $(".element").animated("zoomInUp");
  //Author URL: http://webdesign-master.ru
  (function($) {
    $.fn.animated = function(inEffect) {
      $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
        if (dir === "down") {
            $(this).addClass(inEffect).css("opacity", "1");
        };
      }, {
        offset: "100%"
      });
    };
  })(jQuery);

  //animate effect
  $(".service-sec-item").animated("zoomIn", "fadeOut");
  $(".about-sec__item").animated("flipInX", "fadeOut");
  $(".salone-sec__item").animated("zoomIn", "fadeOut");

};