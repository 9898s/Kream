$(() => {
    // 스크롤 시 #header_inner 밑줄 생성
    $(window).scroll(function () {
        $(this).scrollTop() > 0 ? $("#header_inner").css('boxShadow', '0 1px 0 0 rgb(0 0 0 / 10%)') : $("#header_inner").css('boxShadow', 'none');
    });

    // 신발 사이즈 팝업
    $(document).mouseup(function (event) {
        if ($('#shoes_size').has(event.target).length === 0) {
            $('body').css('overflow', 'auto');
            $('#shoes_size').hide();
            $('#layout').hide();
        }
    });

    $('#register_shoes').click(function () {
        $('#shoes_size').css({
            top: (($(window).height() - $('#shoes_size').outerHeight()) / 2 + $(window).scrollTop()) + 'px',
            left: (($(window).width() - $('#shoes_size').outerWidth()) / 2 + $(window).scrollLeft()) + 'px'
        });

        $('body').css('overflow', 'hidden');
        $('#shoes_size').show();
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
        if (size != 0) {
            $('.form_input_size').val(size);
            $('body').css('overflow', 'auto');
            $('#shoes_size').hide();
            $('#layout').hide();
        }
    });

    // 더보기 클릭
    $('.more').click(function () {
        $(this).next().toggle();
    });

    $('#terms_essential').click(function () {
        let isChecked = $('#terms_essential').is(':checked');
        isChecked ? $('.terms_checkbox').prop('checked', true) : $('.terms_checkbox').prop('checked', false);
    });

    // 더보기 체크박스
    $('#terms_essential').click(function () {
        let isChecked = $('#terms_essential').is(':checked');
        isChecked ? $('.essential_checkbox').prop('checked', true) : $('.essential_checkbox').prop('checked', false);
    });

    $('#terms_select').click(function () {
        let isChecked = $('#terms_select').is(':checked');
        isChecked ? $('.select_checkbox').prop('checked', true) : $('.select_checkbox').prop('checked', false);
    });

    $('.essential_checkbox').click(function () {
        let count = 0;

        $('.essential_checkbox').each(function () {
            if($(this).is(':checked')) {
                count++;
            }
        });

        count == 2 ? $('#terms_essential').prop('checked', true) :  $('#terms_essential').prop('checked', false);
    });

    $('.select_checkbox').click(function () {
        let count = 0;

        $('.select_checkbox').each(function () {
            if($(this).is(':checked')) {
                count++;
            }
        });

        count == 3 ? $('#terms_select').prop('checked', true) :  $('#terms_select').prop('checked', false);
    });
});