$(() => {
    // .product_image 배경 색상 랜덤 지정
    $('.product_image').each(function () {
        $(this).css('background-color', randomBackgroundColor());
    });

    function randomBackgroundColor() {
        let color = ["#f6eeed", "#ebf0f5", "#f4f4f4"];
        let randomIndex = parseInt(Math.random() * color.length);
        return color[randomIndex];
    }

    // 스크롤 시 #top_btn 나타내기
    $(window).scroll(function () {
        let headerHeight = $("header").height();
        $(this).scrollTop() >= headerHeight ? $("#top_btn").fadeIn('slow') : $("#top_btn").fadeOut('normal');
    });

    // 배너 랜덤 이미지
    let bannerArray = [
        { src: "images/banner_static1.webp", backgroundColor: "#2E2E2E" },
        { src: "images/banner_static2.webp", backgroundColor: "rgb(242, 242, 242)" },
        { src: "images/banner_static3.webp", backgroundColor: "#4E1916" },
        { src: "images/banner_static4.webp", backgroundColor: "rgb(155, 156, 157)" }
    ];

    $('.banner').each(function (index) {
        let randomIndex = parseInt(Math.random() * bannerArray.length);
        $(this).css('background-color', bannerArray[randomIndex].backgroundColor);
        $(this).append('<a href="#"><img src="' + bannerArray[randomIndex].src + '" alt="고정 배너"></a>');
    });

    // 상품 더보기 버튼 클릭
    $('#just_dropped li').each(function (index) {
        if (parseInt(index / 4) > 0) {
            $(this).hide();
        }
    });
    $('#most_popular li').each(function (index) {
        if (parseInt(index / 4) > 0) {
            $(this).hide();
        }
    });
    $('#upcoming_release li').each(function (index) {
        if (parseInt(index / 4) > 0) {
            $(this).hide();
        }
    });

    let moreArray = [0, 0, 0];
    $('#just_dropped .product_btn').click(function () {
        moreArray[0]++;
        if (moreArray[0] == 2) {
            $(this).hide();
        }
        $('#just_dropped li').each(function (index) {
            if (parseInt(index / 4) == moreArray[0]) {
                $(this).show();
            }
        });
    });

    $('#most_popular .product_btn').click(function () {
        moreArray[1]++;
        if (moreArray[1] == 2) {
            $(this).hide();
        }
        $('#most_popular li').each(function (index) {
            if (parseInt(index / 4) == moreArray[1]) {
                $(this).show();
            }
        });
    });

    $('#upcoming_release .product_btn').click(function () {
        moreArray[2]++;
        if (moreArray[2] == 2) {
            $(this).hide();
        }
        $('#upcoming_release li').each(function (index) {
            if (parseInt(index / 4) == moreArray[2]) {
                $(this).show();
            }
        });
    });

    // 배너 슬라이드 영역
    let index = 0, autoTimer;
    $('#banner_slider').click(function () {
        index++;
        moveSlider(index);
    });

    $('#banner_slider').hover(function () {
        clearInterval(autoTimer);
    }, function () {
        autoTimer = setInterval(() => {
            index++;
            moveSlider(index);
        }, 3000);
    });

    autoTimer = setInterval(() => {
        index++;
        moveSlider(index);
    }, 3000);

    function moveSlider(pos) {
        if (pos > $('.slider_panel').length + 1) {
            pos = 0;
            index = 0;
        }

        $('.slider_panel').stop().animate({
            left: -pos * 100 + '%'
        }, 'slow');

        console.log(pos);
    }
});