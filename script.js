$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.navbar-inverse').css("background-color", "#fff")
    }
    else {
        $('.navbar-inverse').css("background-color", "#222")
    }
})