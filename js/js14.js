function ValidEmail(e) { return !!/.+@.+\..+/i.test(e) }

function check_form_for_errors_v2(e) { return error_flag = 0, $(e + " .form-control").each(function(e, r) { id_ = $(this), !0 === id_.is(":visible") && (checkForError_new(id_) || (error_flag = 1)) }), error_flag }

function check_form_for_errors() { return error_flag = 0, $(window.formName_short + " .form-control").each(function(e, r) { id = $(this), !0 === id.is(":visible") && (checkForError_new(id) || (error_flag = 1)) }), error_flag }

function checkForError_new(e) { if (!0 === e.is(":visible")) { if ("" == e.val() || 0 == e.val()) return e.addClass(window.error_class), !1; switch (e.attr("data-type")) {
            case "email":
                if (!ValidEmail(e.val())) return e.addClass(window.error_class), !1; break;
            case "age":
                if (!$.isNumeric(e.val()) || e.val() > 110) return e.addClass(window.error_class), !1; break;
            case "number":
                if (!$.isNumeric(e.val())) return e.addClass(window.error_class), !1; break;
            case "checkbox-mandatory":
                if ("checkbox" == e.attr("type") && !e.is(":checked")) return e.parent().addClass(window.error_class), !1 } return e.removeClass(window.error_class), !0 } return !0 }

function validation_nick(e) { return name.length < 6 ? error = "Bitte mindestens 6 Zeichen eingeben" : name.length > 12 ? error = "Bitte maximal 12 Zeichen eingeben" : /[^a-zA-Z0-9]/.test(name) && (error = "Es sind keine Sonderzeichen im Username erlaubt!"), error ? ($(e).addClass(window.error_class), error) : 0 }

function validation_email(e) { ValidEmail($(e).val()) || !$(e).hasClass("error") ? $(e).removeClass(window.error_class) : $(e).addClass(window.error_class) }

function checkEmailAndSendForm_v3(e) { e += " ", $(e + " .btn-registration").prop("disabled", !0), $(e + ".loader").show(), $(e + ".info-message").hide(), $(e + "input#email").removeClass(window.error_class), $(".form-Registration .wizard-container").height($(".form-Registration .wizard-container .step:eq(" + window._step + ")").height()); var r = $(e).serialize(),
        i = "";
    window.siteurl_api && (i = window.siteurl_api), $.ajax({ url: i + window.path_for_script + "/_sender.php", type: "POST", dataType: "json", data: r, success: function(r) { if (r.caroucel_test && alert(r.caroucel_error), "ERROR" == r.success) return r.messageText && (1 != r.messageText && ($(e + "input#email").addClass(window.error_class), $(e + ".info-message.field-email p").html(r.messageText), $(e + ".info-message.field-email").fadeIn(100)), r.messageText_username && ($(e + "input#scr").show(), $(e + "input#scr").val(r.usernames[0]), $(e + "input#scr").addClass(window.error_class), $(e + ".info-message.field-scr p").html(r.messageText_username), $(e + ".info-message.field-scr").fadeIn(100))), $(e + " .btn-registration").prop("disabled", !1), $(e + ".loader").hide(), void $(".form-Registration .wizard-container").height($(".form-Registration .wizard-container .step:eq(" + window._step + ")").height()); if ("SUCCESS" == r.success && "DATINGFACTORY" == r.provider && r.redirect_url) $(e + " input[name='subId']").val(r.subId), r.country_of_origin && $(e + " input[name='criteria[52]']").val(r.country_of_origin), $(e).attr("action", r.redirect_url), $(e).submit();
            else if (r.activation_block) $("#active_block").hide(), $("#active_block").html(r.activation_block), $("#active_block").fadeIn(300), $(".show-in-end .my-button input").val("Resend"), $(".wizard-container .control-sex").hide(), $(".wizard-container .field-birthday").hide(), $(".wizard-container dl.field-email dt label").remove(), $(".form-block .form-box h2").remove(), $(".bottom-container").hide(), $(e + ".my-button input").prop("disabled", !1), $(e + ".loader").hide();
            else { var i = document.location.hostname,
                    a = document.location.pathname,
                    o = document.location.port;
                a.length > 4 && (arr = a.split("/"), a = 2 == arr[1].length ? "/" + arr[1] + "/" : ""), o && (o = ":" + o); var n = "http://" + i + o + a + "?activation=" + r.subId;
                $(location).attr("href", n), $("div.hide-layout").fadeIn(300) } }, error: function(e) { alert("Error!") } }) }

function wld_send_form() { if (window.WLD_sendform) return 0;
    window.WLD_sendform = 1; var e = $(".WLD_registration form").serialize(),
        r = "";
    window.siteurl_api && (r = window.siteurl_api), $.ajax({ type: "POST", url: r + window.path_for_script + "/_sender_wld.php", data: e, dataType: "json", success: function(e) { window.WLD_sendform = 0, "SUCCESS" == e.status && $(".WLD_registration form").submit() } }) }