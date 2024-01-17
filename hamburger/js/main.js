$(function () {

    $('.first_pg').delay(800).slideUp(2000);


    //주문받기
    $('.second_pg .second_bg .order').click(function(){
        $('.second_pg .second_bg .payment_box').addClass('on')
    })

    //결제 화면창 버거
    $('.payment_box .payment_inner .burger_pay .hm').on('click', function(){
      let hm = '햄버거'
      $('.payment_box .payment_inner .payment_monitor .monitor_inner .pay_txt span').text(hm);
    });
    $('.payment_box .payment_inner .burger_pay .ch').on('click', function(){
      let ch = '치즈버거'
      $('.payment_box .payment_inner .payment_monitor .monitor_inner .pay_txt span').text(ch);

    });
    $('.payment_box .payment_inner .burger_pay .hh').on('click', function(){
      let hh = '해시브라운..'
      $('.payment_box .payment_inner .payment_monitor .monitor_inner .pay_txt span').text(hh);

    });

 
    //음료
    $('.payment_box .payment_inner .drink_pay .cola').on('click', function(){
      let cl = '콜라'
      $('.payment_box .payment_inner .payment_monitor .monitor_inner .pay_txt span').text(cl);
    });
    $('.payment_box .payment_inner .drink_pay .cider').on('click', function(){
      let cd = '사이다'
      $('.payment_box .payment_inner .payment_monitor .monitor_inner .pay_txt span').text(cd);
    });
    $('.payment_box .payment_inner .drink_pay .fanta').on('click', function(){
      let ft = '환타'
      $('.payment_box .payment_inner .payment_monitor .monitor_inner .pay_txt span').text(ft);
    });

    //토핑 추가 빼기
    $('.payment_box .payment_inner .option_pay .addT').on('click', function(){
      let at = '토핑추가'
      $('.payment_box .payment_inner .payment_monitor .monitor_inner .pay_txt span').text(at);
    });
    $('.payment_box .payment_inner .option_pay .minusT').on('click', function(){
      let mT = '토핑빼기'
      $('.payment_box .payment_inner .payment_monitor .monitor_inner .pay_txt span').text(mT);
    });


    //수량
    let num = 

      $('.payment_box .payment_inner .payment_monitor .monitor_inner .pay_txt .quantity button.plus_box').click(function(){
       let g = 'eklkl'
       let m = 0;
       let p;
       for(let m=0;m>=10;m++){
        $('.payment_box .payment_inner .payment_monitor .monitor_inner .pay_txt .quantity p').text(m)
      }



      
      //포장
      $('')
      $('.payment_box .payment_inner .payment_monitor .monitor_inner .pay_txt span').text(ch);
      $(this).off();

        /* $('.payment_box .payment_inner .payment_monitor .monitor_inner .pay_txt .quantity p').text(e,function(e){
          if (i>=10){
            i += 0
          }
        }
   
        ) */
      });

      
  


    //주문체크
    $('.order_pg .outline_box .stuff .order_rightTop .rightTop_box').click(function(){
        $('.order_pg .outline_box .order_box .order_container .order_txt .check_box').addClass('on')
    });

    //주문접수
    $('.accept_order').click(function(){
        $('.second_pg .second_bg .payment_box').removeClass('on');
        location.href='#order_pg'
    });

    //햄버거 쌓기
    let classI = 0;
    let hsum = 0;
    let h;
    $('.choose').click(function () {
        let src = $(this).find('img').attr('src').substr(9);
        src = 'img/' + src;
        $('.cook').prepend(`<img src=${src} alt='' class='c${classI}'>`);
        $('.cook img').on('load', function () {
            $('.making .cook img').css('top', 'auto');
            if(classI ==0){
                h=0;
            }else{
                h = $('.c' + (classI-1)).height();
            }       
            hsum += h;
            console.log(h + ':', hsum)
            $('.c' + classI).animate({ bottom: hsum }, 500);
            classI++;
          
        });
    });
    
});