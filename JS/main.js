$(document).ready(function () {
    $('.navmenu').click(function () {
        $('.mobileview').slideToggle(500)
    });
    function checkwidth() {
        var windowSize = $(window).width();
        if (windowSize >= 769) {
            $('.mobileview').hide()
        }
    }
    checkwidth();
    // Bind event listener
    $(window).resize(checkwidth);
});
