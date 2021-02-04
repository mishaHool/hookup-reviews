function setStickBlock() { $(window).width() > 1200 ? $("#sticker").sticky({ topSpacing: 0 }) : $("#sticker").unstick() }

function OnlineCountRandom(t) {
    if (randomCounterFlag) {
        var o, e, n = t.data("random-min"),
            a = t.data("random-max");
        if ("" !== n && "" !== a) setInterval(function() {
            var i = Math.floor(Math.random() * (a - n + 1)) + n;
            o = t.html(), e = i + parseInt(o, 10), number_counter(o, e, 2, 100, t)
        }, 1e4)
    }
    return randomCounterFlag = !1, randomCounterFlag
}

function number_counter(t, o, e, n, a) { var i, s, l; "up" === (i = (t = Number(t)) <= o ? "up" : "down") && (s = setInterval(function() { t <= o ? (t += e, $(a).html(t)) : clearInterval(s) }, n)), "down" === i && (l = setInterval(function() { t > o ? (t -= e, $(a).html(t)) : clearInterval(l) }, n)) }

function come(t) { return !$("section").is(t) || $(window).scrollTop() + 100 + $(window).height() >= $(t).offset().top }

function DefaultCounter(t) { t.countTo().removeClass("activity") }


function get_document(t, o, e) {
    $(".popup-second").removeAttr("style"), $(".popup-second").removeClass("abs-block"), $(".popup-second").removeClass("abs-block-current"), $(".popup-second").removeClass("abs-block-opened"), $(".popup-second").removeClass("popup-second");
    var n = "document_name=" + o + "&class_popup=" + t + "&lang_current=" + e;
}
$(function() {
    $(document).ready(function() { $(".preloader-layout").addClass("ready_page") })
}), window.randomCounterFlag = !0, setStickBlock(), $(window).resize(function() { setStickBlock() }), $(".bottom_banner .fa").click(function() { $(".bottom_banner").addClass("no-display") }), $(".country_switcher").click(function(t) { $(this).hasClass("set-nodropdown") || $(".country_switcher__list").toggleClass("showed") }), $(".country_switcher__list a").click(function(t) {
    $(".lang_active a").removeClass();
    var o = $(this).attr("class");
    $(".lang_active a").addClass(o)
}), $(document).mouseup(function(t) {
    var o = $(".country_switcher");
    o.is(t.target) || 0 !== o.has(t.target).length || $(".country_switcher__list").removeClass("showed")
}), $(".main_nav__toggle").click(function() { $(".responsive_layout").toggleClass("showed"), $(this).toggleClass("close-nav") });
var t = "";
device.desktop() && (t = $(".parallax-Desktop")), device.tablet() && (t = $(".parallax-Tablet")), device.mobile() && (t = $(".parallax-Mobile")), $(window).scroll(function() { come("#MEMBERS") && (DefaultCounter($(".online-counter b.activity")), randomCounterFlag = OnlineCountRandom($(".online-counter b"))), come("#STATS") && (DefaultCounter($(".STATS .numbers b.activity")), $(".STATS .numbers b").addClass("trans")), come("#STATISTIC") && DefaultCounter($(".STATISTIC .statistic_block b.activity")) }), come("#MEMBERS") && (DefaultCounter($(".online-counter b.activity")), randomCounterFlag = OnlineCountRandom($(".online-counter b"))), come("#STATS") && (DefaultCounter($(".STATS .numbers b.activity")), $(".STATS .numbers b").addClass("trans")), come("#STATISTIC") && DefaultCounter($(".STATISTIC .statistic_block b.activity")), window.reg_active = 0, $("div.form-Registration input, div.form-Registration select, div.form-Registration .my-button, div.form-Registration .btn").click(function() { 0 == window.reg_active && show_reg_form("") }), $("section").is(".single-comments") && $(".single-comments .owl-carousel").owlCarousel({ items: 1, itemsDesktop: [1199, 1], itemsTablet: [900, 1], itemsMobile: [600, 1], singleItem: !1, autoPlay: 5e3, navigation: !0, navigationText: !1, pagination: !0, responsive: !0 }), $("div").is(".comments-slider") && $(".comments-slider.owl-carousel").owlCarousel({ items: 3, itemsDesktop: [1199, 3], itemsTablet: [900, 2], itemsMobile: [600, 1], singleItem: !1, autoPlay: 5e3, navigation: !0, navigationText: !1, pagination: !0, responsive: !0 }), $(".lang-login .login").click(function() { $(".lang-login .toggled").toggleClass("showed"), $(this).toggleClass("active") }), $(document).mouseup(function(t) {
    var o = $(".lang-login");
    o.is(t.target) || 0 !== o.has(t.target).length || ($(".lang-login .toggled").removeClass("showed"), $(".lang-login .login").removeClass("active"))
})