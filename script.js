$(document).ready(function() {

    $(".footer-menu").hide();
    $("#clickme").click(function() {
        $("#landing-page").hide(1500);
        $(".footer-menu").show(1500);
    });

    $("#log-cabin").click(function() {
        $("#landing-page").show(1500);
        $(".footer-menu").toggle(1500);
    });
    //WEATHER PAGE
    $(function() {
      $('.slide-show img:gt(0)').hide();
        setInterval(function() {
                $('.slide-show :first-child').fadeOut('slow')
                    .next('img').fadeIn('slow')
                    .end().appendTo('.slide-show');
            },
            3000);
    });



});
