$(function () {

  //백그라운드 별배경 
  for (let i = 0; i < 43; i++) {
    $('.star_all').append('<div class="star"></div>');
  }

  //코인 드래그 상황
  $('.full .coin_d').on({
    'dragstart': function () {
      $(this).addClass('on', function () {
        $(this).mousemove();
      });
    },
    'dragend': function () {
    }
  });

  //캡슐 랜덤
  function aa() {
    let capsules = $('.ballf').find('img').get()
    let random_index = Math.floor(Math.random() * capsules.length);
    let random_capsules = capsules[random_index];
    $(random_capsules).addClass('move').stop();
    setTimeout(() => {
      $('.full .img_box .btn').addClass('start');
    }, 2000);
  }

  //메인 레버 클릭하면 돌려지는 상황
  $('.full .img_box .imgc').click(function () {
    $('.full .img_box').addClass('on');
    setTimeout(aa, 3000);
    $('.full .img_box').css({
      /*   transform: scale(2) */
    })
    $('.full .txt_box').hide();
    $('.full .coin_d').hide();
    $('.full .txtL ').show(1000);
  });

  //토글 클릭 -> 메뉴 페이지 전환
  let menuWeb = "menuWeb.html"
  let menuMobile = "menuMobile.html"
  let menuProfile = "menuProfile.html"
  let menuEmail = "menuEmail.html"
  /* 웹 */
  $('.full .toggle #web1, .full .toggle #web2').on({
    click: function () {
      window.location = menuWeb
    }
  });
  /* 모바일 */
  $('.full .toggle #mo').click(function () {
    window.location = menuMobile;

  });
  /* 이메일 */
  $('.full .toggle #contact').click(function () {
    window.location = menuEmail;
  });
  /* 프로필 */
  $('.full .toggle #profile').click(function () {
    window.location = menuProfile;
  });


  //메뉴 토글 클릭시 뒤로가기
  $('.full .flip .toggleC').click(function () {
    window.history.back();
  });


  //웹 페이지 랜덤 주기
  function ran() {
    $('.full .card .web .web_box').eq(0).addClass('green').removeClass('green', function () {
      $('.full .card .web .web_box').eq(1).addClass('green').removeClass('green', function () {
        $('.full .card .web .web_box').eq(2).addClass('green').removeClass('green', function () {
          $('.full .card .web .web_box').eq(2).removeClass('green');
        });
      });
    })
  }
  /* 
      $('.full .lv img').click(function(){
        $('.full .lv img:nth-child(1),.full .lv img:nth-child(3)').addClass('on');
        setInterval(() => {
          $(ran)
        }, 1100);
        setTimeout(() => {
          $('.full .card').hide();
        }, 3400);
        setTimeout(() => {
          $('.full .card2').show();
        }, 3400);
    }); */

  /*   let stp = setInterval(() => {
      $(ran)
    }, 1000);
  
    
    let st = setInterval(function() {
      $(ran)++;
      if ($(ran) === 2) {
        clearInterval(stp);
      }
    }, 1000);
   */

  //웹 랜덤에서 레버 클릭하고 페이지로 넘어가는 상황
  $('.full .lv img').click(function () {
    $('.full .lv img:nth-child(1),.full .lv img:nth-child(3)').addClass('on');
    setInterval(() => {
      $(ran)
    }, 1000);
    setTimeout(() => {
      $('.full .card').hide();
    }, 2900);
    setTimeout(() => {
      $('.full .card2').show();
    }, 2900); 
  });
  $('.full .card2 .web .web_box img').mouseover(function(){
    $(this).stop().slideUp(3000);

  })
  $('.full .card2 .web .web_box img').mouseleave(function(){
    $(this).stop().slideDown(2000);
  })

});  //ready end
