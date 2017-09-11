// BEGIN Меню для навигации при разработке

// закоментить перед prodaction
$(document).ready(function ($) {
    pageWidget([
        '404',
        'constructor',
        'email',
        'index',
        'inner',
        'job',
        'master-one',
        'masters',
        'news',
        'news-one',
        'sale',
        'salon-one',
        'sertificate',
        'sertificate-2',
        'service-1',
        'service-2',
    ]);
});

function pageWidget(pages) {
    var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
    widgetWrap.prependTo("body");
    for (var i = 0; i < pages.length; i++) {
        $('<li class="widget_item"><a class="widget_link" href="'
            + pages[i]
            + '.html'
            + '">'
            + pages[i]
            + '</a></li>').appendTo('.widget_list');
    }
    var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:fixed;top:0;left:0;z-index:19999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
    widgetStilization.prependTo(".widget_wrap");
}

// END Меню для навигации при разработке

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


// Begin выпадающий блок в секции с калькулятором
$('.calc-hairs__item').on('click', function() {
    if ('.calc-hairs__item input.checked == true') {
        $('.calc-hairs__item').removeClass('active');
        $(this).addClass('active');
    }else {
        console.log('чёт поломалось');
    }
});

$('#calc-select__dropdown').on('click', function() {
  $('.calc-hairs__dropbox').toggleClass('active');
});
// End выпадающий блок в секции с калькулятором