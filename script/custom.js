toggleFade = function (targetAlert) {
    setTimeout(function () {
        jQuery(targetAlert).$('#topbody').fadeIn(1000).delay(9000).fadeOut(1000);
    }, 1000);
};