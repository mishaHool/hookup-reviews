function number_counter(i, e, t, n, o) { interval = setInterval(function() { i < e && (i += t, $(o).html(i)) }, n) }

function StepUp_quiz(i, e, t) { return window.can_scrooll = 0, back_ = 0, koef = 20, "+-" == e && (back_ = 1), window._step - back_ <= window._wizard_total + window._add_steps && (height_current = window._wizard_height, window._step_ = window._step, height_cur_ = height_current, "+=" == e && ($(i).find(".step:eq(" + (window._step_ - 1) + ")").show(), $(i).css("margin-top", -$(i).find(".step:eq(" + (window._step_ - 1) + ")").height()), height_cur_ = $(i).find(".step:eq(" + (window._step_ - 1) + ")").height() - koef), $(i).animate({ marginTop: e + (height_cur_ + koef) }, 350, function() { "-=" == e && ($(i).find(".step:eq(" + window._step_ + ")").hide(), $(i).css("margin-top", 0)), window.can_scrooll = 1 }), "-=" == e ? (window._total == window._step && (window._total += 1), window._step += 1) : window._step -= 1, window._step > 0 && !$(window.formName + " .step:eq(" + window._step + ")").hasClass("final") ? ($(".nav-prev-next").addClass("showed"), $(".nav-prev-next .nav-prev").addClass("active"), $(".description, .title-15, .bullets, .free").slideUp(300)) : ($(".nav-prev-next .nav-prev").removeClass("active"), $(".nav-prev-next").removeClass("showed")), window._step < window._total ? $(".nav-prev-next .nav-next").addClass("active") : $(".nav-prev-next .nav-next").removeClass("active"), window._step < window._wizard_total + 1 ? ($(".current").html(window._step + 1), $(".my-button.big-button").hide()) : ($(".wizard-steps").css("visibility", "hidden"), $(".form-Registration .wizard-container .step:eq(" + window._step + ")").hasClass("registration") && ($(".diagram").fadeOut(300), $(".nav-prev-next").removeClass("showed"))), $(".form-Registration .wizard-container .step:eq(" + window._step + ")").hasClass("registration") ? ($(".my-button.big-button.final-button").show(), $(".wizard-steps-centered").hide()) : $(".my-button.big-button.final-button").hide(), $(".form-Registration .wizard-container .step:eq(" + window._step + ")").hasClass("first_reg") ? $(".my-button.big-button.reg-button").show() : $(".my-button.big-button.reg-button").hide(), direction_inverce = "-=" == e ? "+=" : "-=", window._step < window._wizard_total + 2 && $(window._diagram).animate({ width: direction_inverce + window._diagram_step + "%" }, 1e3), window._wizard_height_new = $(".form-Registration .wizard-container .step:eq(" + window._step + ")").height(), height_current > window._wizard_height_new ? (plus_min = "-=", padding = -20) : (plus_min = "+=", padding = 20), height = Math.abs(height_current - window._wizard_height_new), window._wizard_height = window._wizard_height_new, $(".form-Registration .wizard-container").animate({ height: plus_min + height }, 500)), window._step >= window._wizard_total && $(".show-in-end").show(), !0 }

function show_note(i) { 0 == $(i + " .error").is(":visible") && $(i + ".info-message.i-success").show() }

function blinking_tipsy(i) { 0 == $("#email-block .error").is(":visible") && ($("div.info-message.i-success").show(), $("#email-title").length ? $("div.info-message.i-success p").html($("#email-title").html()) : $("div.info-message.i-success p").html($(i).attr("original-title"))) }
$(document).ready(function() { "none" == $("div.form-Registration").css("display") && (window.reg_was_hidden = 1), $("div.form-Registration").show(), $("div").hasClass("wizard-quiz"), $(".wizard-quiz").keypress(function(i) { if (13 == i.keyCode || 9 == i.keyCode) return i.preventDefault(), !1 }), path_for_script = "/common-templates/dating/_ajax", window.formName_compact = ".form-Registration.view-compact", window.formName_short = ".form-Registration", window.formName = ".form-Registration.wizard-quiz .wizard-container ", window._NAVprev = ".nav-prev-next .nav-prev", window._NAVnext = ".nav-prev-next .nav-next", window.error_class = "error", window.offset_height = 0, $(window.formName).height($(window.formName + " .step:eq(0)").height() + window.offset_height), window._wizard_height = $(window.formName).height(), $(window.formName + " .step:hidden").remove(), $(window.formName + " .form-control option.opt_1").remove(), $(window.formName_compact + " .form-control option.opt_2").remove(); var e = 1;
    $(window.formName + " .step").each(function(i, t) { $(this).find("label span span").html(e + "."), e++ }), window._wizard_total = $(window.formName + " .step:visible").length - 1, window._wizard_container = $(window.formName), window._wizard_go = $(window.formName + ".steps"), window._diagram = "div.diagram div.line", window._diagram_step = 100 / (window._wizard_total + 1), window._step = 0, window._total = 0, window._add_steps = 0, window.can_scrooll = 1, window._AGE = 0, $(".total").html(window._wizard_total + 1), $(".current").html(window._step + 1), $("body").hasClass("index"), $(".HEADER").hasClass("set-header-short") && $("div.form-Registration.wizard-quiz").hide(), $("input#email").focus(function() { show_note(".field-email") }), $("input#email").blur(function() { $("div.field-email.i-success").hide() }), $("input#scr").focus(function() { show_note(".field-scr") }), $("input#scr").blur(function() { $("div.field-scr.i-success").hide() }), window.reg_was_hidden && $("div.form-Registration").removeAttr("style"), $(window).resize(function() { if (!$("div.form-Registration.wizard-quiz .form-inline-member").is(":visible")) return 0;
        window._wizard_height_new = $(window.formName + " .step:eq(" + window._step + ")").height(), window._wizard_height > window._wizard_height_new ? (plus_min = "-=", padding = -20) : (plus_min = "+=", padding = 20), height = Math.abs(window._wizard_height - window._wizard_height_new), window._wizard_height = window._wizard_height_new, $(window.formName).css("height", plus_min + height) }), $(window.formName + " .btn").click(function() { window.formName; if (window._step < window._wizard_total && StepUp_quiz(window._wizard_go, "-=")) switch ($(this).parent().find(".btn").removeClass("active"), $(this).addClass("active"), $(this).attr("data-sex")) {
            case "1":
                $("select#sexId option").removeAttr("selected"), $("select#sexId option[value=1]").attr("selected", "selected"); break;
            case "2":
                $("select#sexId option").removeAttr("selected"), $("select#sexId option[value=2]").attr("selected", "selected") } }), $(window.formName_short + " .submit-block button").click(function() { check_form_for_errors() || checkEmailAndSendForm_v3(".form-Registration form") }), $(".form-Registration form select").change(function() { 0 == $(this).val() && "" == $(this).val() || !$(this).hasClass(window.error_class) || $(this).removeClass(window.error_class) }), $(".form-Registration input#email").keyup(function() { validation_email(this) }), $(".form-Registration input#email").change(function() { validation_email(this) }), $(".form-Registration input#scr").keyup(function() { validation_nick(this) }), $(".form-Registration input#scr").change(function() { validation_nick(this) }), $(".form-Registration input[type=checkbox]").change(function() { $(this).is(":checked") && $(this).parent().hasClass(window.error_class) && $(this).parent().removeClass(window.error_class) }), $(window.formName + " .type-SELECT select").change(function() { var e = $(this).closest(".type-SELECT").find("select").length; for (i = 0; i < e; i++)
            if (0 == $(this).closest(".type-SELECT").find("select:eq(" + i + ")").val()) return 0;
        StepUp_quiz(window._wizard_go, "-=") }), $(window._NAVprev).click(function() { $(this).hasClass("active") && window.can_scrooll && StepUp_quiz(window._wizard_go, "+=", "nav") }), $(window._NAVnext).click(function() { $(this).hasClass("active") && window.can_scrooll && StepUp_quiz(window._wizard_go, "-=", "nav") }) });