$(() => {
    // 스크롤 시 영역 안에서만 이미지 움직이기
    $(window).scroll(function () {
        let contentHeight = $('#product_detail').height();
        let imageHeight = $('#product_detail_left_inner').height();

        console.log(imageHeight);

        if($(this).scrollTop() >= contentHeight - imageHeight - 30) {
            $('#product_detail_left_inner').css({
                position: 'absolute',
                top: contentHeight - 490,
                left: 330
            });
        }
        else {
            $('#product_detail_left_inner').css({
                position: 'fixed',
                top: 120,
                left: 330
            });
        }
    });

    // 클릭시 정보 드롭다운
    let oldIndex = -1;
    $('.info_list').click(function () {
        let index = $(this).index();

        if(oldIndex != index) {
            $('.info_area').hide();
            $('#product_detail').height(1680);
            $(this).children('.info_area').show();
            $(this).css('font-weight', '600');
            oldIndex = index;
        }
        else {
            $('.info_area').hide();
            $('#product_detail').height(1350);
            $(this).css('font-weight', '400');
            oldIndex = -1;
        }
    });
});