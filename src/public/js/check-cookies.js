var floaterCloseBtn = document.querySelector("#float-close-btn");
var floaterAcceptBtn = document.querySelector("#floater-accept-btn");
var floaterBnrBox = document.querySelector("#floater-bnr-box");

floaterCloseBtn.onclick = hideFloaterBox;
floaterAcceptBtn.onclick = hideFloaterBox;

function hideFloaterBox() {
    floaterBnrBox.classList.remove("actived");
}

function showFloaterBox() {
    floaterBnrBox.classList.add("actived");
}

function setCookie(name, val) {
    var expdate = "";
    if (name !== "") {
        var d = new Date();
        var future = new Date(d.getFullYear() + 10, d.getMonth(), d.getDate());
        expdate = "; expires=" + future.toUTCString();
    }
    document.cookie = name + "=" + (val || "") + expdate + "; path=/";
}

function getCookie(name) {
    var name = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return null;
}

(function ($) {
    $("body").on("click", "#floater-accept-btn, #float-close-btn", function () {
        if (getCookie("acceptCookies") === null) {
            setCookie("acceptCookies", 1);
        }
    });
})(jQuery);

(function ($) {
    $(document).ready(function () {
        $("#floater-bnr-box").css("display", "none");
        var user = getCookie("acceptCookies");
        if (user == "1") {
            hideFloaterBox();
        } else {
            showFloaterBox();
            $("#floater-bnr-box").show();
        }
    });
})(jQuery);
