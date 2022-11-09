(function($) {
    "use strict";

    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function() {
        $(this).on('blur', function() {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        })
    })


    /*==================================================================
    [ Validate after type ]*/
    $('.validate-input .input100').each(function() {
        $(this).on('blur', function() {
            if (validate(this) == false) {
                showValidate(this);
            } else {
                $(this).parent().addClass('true-validate');
            }
        })
    })

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function() {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function() {
        $(this).focus(function() {
            hideValidate(this);
            $(this).parent().removeClass('true-validate');
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }


})(jQuery);

function checkLogin() {
    if (window.localStorage.length != 0) {
        window.location = './myLove.html';
    }
}

function login() {
    event.preventDefault();
    var userName = document.querySelector('#name');
    var password = document.querySelector('#password');
    if (userName.value.toLowerCase() == 'shru29' && password.value == "29102002") {
        alert('Đăng nhập vô tym anh thành công');
        var dataStore = {
            "name": 'Cao Thu Uyên',
        }
        var json = JSON.stringify(dataStore);
        localStorage.setItem("user", json);
        window.location = 'https://hieunguyen250102.github.io/loveu/myLove.html';
    } else {
        alert('Tài khoản với mật khẩu mà không đoán được thì chịu ròi!');
    }
}

function logout() {
    window.localStorage.clear();
}
