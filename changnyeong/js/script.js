$(function () {

    let txt;
    //헤더 호버 
    $('header').hover(
        function () {
            txt = $('header nav ul.gnb>li.on>a').text();
            $('.nav_bg').stop().slideDown().find('.dec_box h2').text(txt);
            $('header').css({ background: '#f8faf3' });
        },
        function () {
            txt = $('header nav ul.gnb>li.on>a').text();
            $('.nav_bg').stop().slideUp().find('.dec_box h2').text(txt);
            $('header').css({ background: '#FFFAE8' });
            $('header nav ul.gnb>li').removeClass('on');
        });


    //nav호버
    $('header nav ul.gnb>li').hover(function () {
        txt = $(this).children('a').text();
        $('.dec_box h2').text(txt);
        $(this).addClass('on').siblings().removeClass('on')
    }, function () {
        txt = $(this).children('a').text();
        $('.dec_box h2').text(txt);
        $('.nav_bg').mouseleave(function () {
            //$('header nav ul.gnb>li.on ul.sub').stop().slideUp();
            $('header nav ul.gnb>li').removeClass('on');
        });
    });






    $('main .go_office').click(function () {
        $('main .office_bg').fadeIn()
    })
    $('main .office_bg i').click(function () {
        $('main .office_bg').fadeOut();
    });
    $('main go_office').fadeIn();



    /*    $('.main2 .imgSlide .bx1, .main2 .imgSlide .bx2,.main2 .imgSlide . bx4, .main2 .imgSlide .bx5').remove('p') */



    $('.imgSlide').slick({
        arrows:false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });







});//ready end