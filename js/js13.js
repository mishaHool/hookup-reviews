$(function() {
    function t() { var t = $(".content-txt img"),
            i = $(window).width() - 100;
        t.each(function() { var t = $(this).data("width");
            parseInt(t, 10) >= i ? $(this).width("100%").height("auto") : $(this).width(t) }) }
    $(".content-txt img").each(function() { var t = $(this).css("width");
        $(this).attr("data-width", t), $(this).height("auto") }), t(), $(window).resize(function() { t() }) });