$(() => {
    // 스크롤 시 #header_inner 밑줄 생성
    $(window).scroll(function () {
        $(this).scrollTop() > 0 ? $("#header_inner").css('boxShadow', '0 1px 0 0 rgb(0 0 0 / 10%)') : $("#header_inner").css('boxShadow', 'none');
    });

    // 신발 사이즈 팝업
    $(document).mouseup(function (event) {
        if($('#layout').has(event.target).length === 0) {
            $('#layout').hide();
        }
    });

    $('#register_shoes').click(function () {
        $('#layout').show();
    });

    let size = 0;
    $('#shoes_body li').click(function () {
        $('#shoes_body li').each(function () {
            $(this).css({
                border: '1px solid #ccc',
                color: '#333'
            });
        });

        $(this).css({
            border: '1px solid #000',
            color: '#000'
        });

        $('#shoes_footer p').css({
            background: '#000',
            cursor: 'pointer',
            color: '#fff'
        });

        size = parseInt($(this).html());
    });

    $('#shoes_footer p').click(function () {
        if(size != 0) {
            $('.form_input').val(size);
            $('#layout').hide();
        }
    });
});