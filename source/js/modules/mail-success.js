module.exports = function() {

  //top-menu__icon hamburger
  $('.hamburger').on('click', function() {
    $(this).toggleClass('on');
    $(".menu-mob__list").slideToggle();
    $(".menu-mob__item").toggleClass('active');
    $('body').toggleClass("fix");
    return false;
  });


    $('.email-notification__btn').on('click', function() {
    $('.email-notification__form-wrap, .email-notification__success').toggleClass('active');
    // $(".menu-mob__list").slideToggle();
    return false;
  });

};