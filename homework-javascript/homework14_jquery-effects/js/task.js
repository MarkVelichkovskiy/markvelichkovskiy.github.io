$(document).ready(function () {
    let btn = $('#button');
    $(window).scroll(function () {
        if ($(window).scrollTop() > window.outerHeight) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '1500');
    });
});

$('html, body').animate({ scrollTop: 0 }, '1500');

$(document).ready(function () {
    $(".header-menu").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

});

$("#toggle").on("click", function () {
    $(".popular-projects").toggleClass("hide");
});