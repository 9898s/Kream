$(() => {
    // 스크롤 시 #header_inner 밑줄 생성
    $(window).scroll(function () {
        $(this).scrollTop() > 0 ? $("#header_inner").css('boxShadow', '0 1px 0 0 rgb(0 0 0 / 10%)') : $("#header_inner").css('boxShadow', 'none');
    });

    // 이메일, 비밀번호 유효성 검사
    let isEmail = false, isPassword = false;
    $("#input_email").keyup(function (e) {
        let email = $(this).val();
        if(isValidEmail(email)) {
            $('.email_title').css('color', '#000');
            $(this).css('border-bottom', '1px solid #000');
            $('.email_wrong').css('display', 'none');
            isEmail = true;
        }
        else {
            $('.email_title').css('color', '#f15746');
            $(this).css('border-bottom', '1px solid #f15746');
            $('.email_wrong').css('display', 'block');
            isEmail = false;
        }
        checkEmailAndPassword();
    });

    $("#input_pwd").keyup(function (e) {
        let pwd = $(this).val();
        if(isValidPassword(pwd)) {
            $('.pwd_title').css('color', '#000');
            $(this).css('border-bottom', '1px solid #000');
            $('.password_wrong').css('display', 'none');
            isPassword = true;
        }
        else {
            $('.pwd_title').css('color', '#f15746');
            $(this).css('border-bottom', '1px solid #f15746');
            $('.password_wrong').css('display', 'block');
            isPassword = false;
        }
        checkEmailAndPassword();
    });

    function isValidEmail(email) {
        var pattern = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
        return pattern.test(email);
    }

    function isValidPassword(password) {
        var pattern = new RegExp(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/);
        return pattern.test(password);
    }

    function checkEmailAndPassword() {
        if(isEmail && isPassword) {
            $('.login_btn').css({
                backgroundColor: '#000',
                cursor: 'pointer'
            });
        }
        else {
            $('.login_btn').css({
                backgroundColor: '#ebebeb',
                cursor: 'default'
            });
        }
    }
});