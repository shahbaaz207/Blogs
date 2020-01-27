// create-blog  function here

$(function() {
    $("#username").hide();
    $("#username2").hide();
    $("#username3").hide();

    $("#username5").hide();
    var error_username = false;
    var error_username2 = false;
    var error_username3 = false;

    var error_username5 = false;

    $("#first").focusout(() => {
        check_first();
    })
    $("#second").focusout(() => {
        check_second();
    })
    $("#third").focusout(() => {
        check_third();
    })

    $("#fivth").focusout(() => {
        check_fivth();
    })


    function check_first() {
        var first_length = $("#first").val().length;
        if (first_length < 5) {
            $('#username').html('required');
            $('#username').show();
            error_username = true
        } else {
            $("#username").hide();
        }
    }

    function check_second() {
        var second_length = $("#second").val().length;
        if (second_length < 20) {
            $('#username2').html('characters should be 20 words');
            $('#username2').show();
            error_username2 = true
        } else {
            $("#username2").hide();
        }
    }

    function check_third() {
        var third_length = $("#third").val().length;
        if (third_length == 0) {
            $('#username3').html('its required');
            $('#username3').show();
            error_username3 = true
        } else {
            $("#username3").hide();
        }
    }


    function check_fivth() {
        var fivth_length = $("#fivth").val().length;
        if (fivth_length < 25) {
            $('#username5').html('charactres should be 25 words');
            $('#username5').show();
            error_username5 = true
        } else {
            $("#username5").hide();
        }
    }
    $('#blog_form').submit(() => {
        error_username = false;
        error_username2 = false;
        error_username3 = false;

        error_username5 = false;
        check_first();
        check_second();
        check_third();

        check_fivth();
        if (error_username == false && error_username2 == false  && error_username3 == false && error_username5 == false) {
            return true
        } else {
            return false
        }
    })
});
