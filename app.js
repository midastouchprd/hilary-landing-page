$(document).ready(function() {
    console.log("booya");
    $('.parallax').parallax();
    $(".button-collapse").sideNav();

    $('#menu-items a').on('click', function(event) {
        event.preventDefault();

        var section = this.getAttribute('href');
        $('html,body').animate({
                scrollTop: $(section).offset().top
            },
            1000, 'swing');
    });
})
