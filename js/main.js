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
        $(this).scrollTop() >= headerHeight ? $("#top_btn").show(1000) : $("#top_btn").hide(1000);
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
});