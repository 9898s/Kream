$(() => {
    // 스크롤 시 #header_inner 밑줄 생성
    $(window).scroll(function () {
        $(this).scrollTop() > 0 ? $("#header_inner").css('boxShadow', '0 1px 0 0 rgb(0 0 0 / 10%)') : $("#header_inner").css('boxShadow', 'none');
    });

    $('#register_shoes').click(function () {
        $('#layout').css('display', 'block');
        $('#shoes_size').css('display', 'block');
        $('#content').css('background', 'rgba(0, 0, 0, .5)');
    });
});