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