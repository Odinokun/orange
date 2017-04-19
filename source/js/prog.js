// Begin Popupform
$(function() {
    // popup open
    $('.popupOpen').on('click', function() {
        $('.layerBox').fadeIn();
        $('.feedback').addClass('active');
        return false;
    });
    $('.feedback .btnBox').on('click', function() {
        $('.feedback').removeClass('active');
        $('.success').addClass('active');
        return false;
    });

    // popup close
    $('.layerBox, .success .btnBox, .close, .success__btn').on('click', function() {
        $('.layerBox').fadeOut();
        $('.feedback').removeClass('active');
        $('.success').removeClass('active');
        return false;
    });
});
// End   Popupform


// Begin уведомление при email подписке 
$('.email-notification__btn').on('click', function() {
  $('.email-notification__form-wrap, .email-notification__success').toggleClass('active');
  return false;
});
// End уведомление при email подписке 