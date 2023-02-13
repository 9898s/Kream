$(() => {
    // 스크롤 시 영역 안에서만 이미지 움직이기
    $(window).scroll(function () {
        let contentHeight = $('#product_detail').height();
        let imageHeight = $('#product_detail_left_inner').height();

        console.log(imageHeight);

        if($(this).scrollTop() >= contentHeight - imageHeight + 6) {
            $('#product_detail_left_inner').css({
                position: 'absolute',
                top: contentHeight - 490,
                left: 215
            });
        }
        else {
            $('#product_detail_left_inner').css({
                position: 'fixed',
                top: 70,
                left: 215
            });
        }
    });

    // 클릭시 정보 드롭다운
    let oldIndex = -1;
    $('.info_list').click(function () {
        let index = $(this).index();

        if(oldIndex != index) {
            $('.info_area').hide();
            $('#product_detail').height(1620);
            $(this).children('.info_area').show();
            $(this).css('font-weight', '600');
            oldIndex = index;
        }
        else {
            $('.info_area').hide();
            $('#product_detail').height(1315);
            $(this).css('font-weight', '400');
            oldIndex = -1;
        }
    });
});