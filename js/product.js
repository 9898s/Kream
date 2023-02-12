$(() => {
    // 스크롤 시 영역 안에서만 이미지 움직이기
    $(window).scroll(function () {
        let contentHeight = $('#product_detail').height();
        let imageHeight = $('#product_detail_left img').height();

        if($(this).scrollTop() >= contentHeight - imageHeight + 40) {
            $('#product_detail_left img').css({
                position: 'absolute',
                top: 726,
                left: -17
            });
        }
        else {
            $('#product_detail_left img').css({
                position: 'fixed',
                top: 60,
                left: 217
            });
        }
    });
});