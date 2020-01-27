// comments function here
$(() => {
    $("#user").hide();
    $("#email").hide();
    $("#comments").hide();
    var error_user = false;
    var error_email = false;
    var error_comments = false;

    $("#user_name").focusout(() => {
        check_six();
    })

    $("#user_mail").focusout(() => {
        check_seven();
    })
    $("#cmt").focusout(() => {
        check_eight();
    })

    function check_six() {
        var six_length = $("#user_name").val().length;
        if (six_length < 4) {
            $('#user').html("it's required");
            $('#user').show();
            error_user = true
        } else {
            $("#user").hide();
        }
    }

    function check_seven() {
        var seven_length = $("#user_mail").val().length;
        if (seven_length == 0) {
            $('#email').html("it's required");
            $('#email').show();
            error_email = true
        } else {
            $("#email").hide();
        }
    }

    function check_eight() {
        var eight_length = $("#cmt").val().length;
        if (eight_length < 20) {
            $('#comments').html("20 characters should be required");
            $('#comments').show();
            error_comments = true
        } else {
            $("#comments").hide();
        }
    }
    $('#comment').submit(() => {
        var error_user = true;
        var error_email = true;
        var error_comments = true;
        check_six();
        check_seven();
        check_eight();
        if (error_user == false && error_email == false  && error_comments == false) {
            return false
        } else {
            return true
        }
    })
})