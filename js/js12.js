function MemeberViewControl() {
    var e, s, o = $(".set-view-more-btn .members-block"),
        a = $(".set-view-more-btn .member"),
        i = $(".set-view-more-btn").data("start"),
        r = $(window).width(),
        t = $(".cssload-container"),
        l = $(".member_btn i");
    for (e = 0; e < i; ++e) a.eq(e).addClass("show");
    var n = $(".set-view-more-btn").data("add-desktop"),
        c = $(".set-view-more-btn").data("add-tablet"),
        d = $(".set-view-more-btn").data("add-mobile");
    s = 1, $(".set-view-more-btn .member_btn button").click(function() {
        if (t.addClass("vis"), l.addClass("invis"), o.css({ opacity: .5 }), s > 2) return show_reg_form("centered"), t.removeClass("vis"), l.removeClass("invis"), o.css({ opacity: 1 }), !1;
        setTimeout(function() {
            if (r >= 770) {
                for (e = i; e < i + n * s; ++e) a.eq(e).addClass("show");
                t.removeClass("vis"), l.removeClass("invis"), o.css({ opacity: 1 }), ++s
            }
            if (r < 770 && r >= 590) {
                for (e = i; e < i + c * s; ++e) a.eq(e).addClass("show");
                t.removeClass("vis"), l.removeClass("invis"), o.css({ opacity: 1 }), ++s
            }
            if (r < 590) {
                for (e = i; e < i + d * s; ++e) a.eq(e).addClass("show");
                t.removeClass("vis"), l.removeClass("invis"), o.css({ opacity: 1 }), ++s
            }
        }, 1e3);
        setTimeout(function() { jQuery(document).trigger("resize") }, 1300)
    })
}

function show_reg_form(e) { window.reg_active = 1, $(".popup-show-hide").addClass("abs-block"), $(".popup-show-hide").addClass("abs-block-current"), $("div.form-Registration").css({ visibility: "visible" }), "centered" == e && ($(".popup-show-hide").addClass("abs-centered"), showPopup("popup-show-hide")), $(".hide-layout").fadeIn(300) }

function showPopup(e) { $(".abs-block").addClass("abs-block-opened"), $(".abs-block-opened").hide(), $(".abs-block-opened").removeClass("abs-block"), $(".abs-block-opened").removeClass("abs-block-current"), e = "." + e, $(e).addClass("abs-block"), $(e).addClass("abs-block-current"), $(".hide-layout").fadeIn(300), e && ($(e).css("top", 0), $(e).css("margin-top", 0), set_vertical_centered(e), $(e).fadeIn(300)), $(e).hasClass("slider-Registration") && (reg_owl.reinit(), reg_owl.goTo(current_step_slider)) }

function set_vertical_centered(e) { offset = 0, $(e).hasClass("popup-autoHeight") ? offset = 25 : $(e).height() < $(window).height() ? (offset = ($(window).height() - $(e).height()) / 2, offset -= 100) : offset = 0, 0 === $(e).height() && (offset = 0), $(e).css("top", $(window).scrollTop() + offset) }

function closePopup_() { $(".hide-layout").fadeOut(300), $(".abs-block-current").removeClass("abs-block"), $(".abs-block-current").removeClass("abs-block-current"), $(".popup-second").length && $(".abs-block-opened").length && ($(".hide-layout").fadeIn(300), $(".abs-block-opened").fadeIn(300), $(".abs-block-opened").addClass("abs-block"), $(".abs-block-opened").addClass("abs-block-current"), $(".abs-block").removeClass("abs-block-opened")), $(".popup-show-hide").hasClass("slider-Registration") && (reg_owl.reinit(), reg_owl.goTo(current_step_slider)), $(".popup-second").removeAttr("style"), $(".popup-second").removeClass("popup-second") }
$(function() {
    MemeberViewControl(), $("div.members-block div.member div.img, div.members-block div.member div.username p, .member .actions a, div.members-block .member-info").click(function() {
        var e = $("div.form-Registration"),
            s = $(this).parents(".member"),
            o = $(".member_in_form");
        if (e.hasClass("set-form-with-member")) {
            e.addClass("show");
            var a = s.html();
            $(".member_in_form").html('<div class="close">&times;</div>'), $(".member_in_form .close").after(a);
            var i = s.hasClass("online") ? "online" : s.hasClass("offline") ? "offline" : "none";
            o.removeClass("online").removeClass("offline").addClass(i), $(".member_in_form img").click(function() {
                $(window).width();
                $(".set-form-with-member").addClass("mobile-view")
            }), show_reg_form("centered")
        } else if (0 == window.reg_active) return show_reg_form("centered"), !1
    }), $(".member_in_form .dop").click(function(e) { e.stopPropagation(), alert("@@") }), $(".member_in_form").click(function(e) { $(".set-form-with-member").addClass("mobile-view") })
}), $(function() { $(".layout_bg").click(function(e) { e.stopPropagation() }), $(".abs, .close, .hide-layout ").click(function() { $("div.popup-show-hide").hasClass("form-Registration") && $("div.popup-show-hide").hasClass("abs-block-current") && $("div.form-Registration").removeClass("show").removeClass("mobile-view") }), $(".abs, .hide-layout, .close").click(function() { $(".popup-second").length ? closePopup_() : ($(".hide-layout").fadeOut(300), $(".abs-block-current").hasClass("popup-show-hide") ? (window.reg_active = 0, $(".popup-show-hide").removeClass("abs-centered"), $(".popup-show-hide").removeAttr("style"), $(".abs-block-current").removeClass("abs-block"), $(".abs-block-current").removeClass("abs-block-current"), $(".abs-block-opened").removeClass("abs-block-opened")) : $(".abs-block-current").hide(), $(".abs-block").removeClass("abs-block"), $(".abs-block-current").removeClass("abs-block-current"), $(".abs-block-opened").removeClass("abs-block-opened"), $(".popup-show-hide").hasClass("slider-Registration") && (reg_owl.reinit(), reg_owl.goTo(current_step_slider))) }) });