$(function(){
    var Width = 0;
    var HeaderTop = 0;

    function WidthPoint(){
        Width = $(window).width();
    }
    function HeaderPoint(){
        HeaderTop = $('header').offset().top;
    }

    WidthPoint();

    $(window).scroll(function(){
        WidthPoint();
        HeaderPoint();
    
        if(Width > 1100 && HeaderTop >= 120){
            $('header').addClass('on');
        }else if(Width > 1100 && HeaderTop < 120){
            $('header').removeClass('on');
        }
    });

    if($(window).width() <= 1100){
        $('header').addClass('on');
    } else{
        $('header').removeClass('on');
    }

    $(window).resize(function(){
        WidthPoint();
        HeaderPoint();

        if($(window).width() <= 1100){
            $('header').addClass('on');
        } else{
            $('header').removeClass('on');
        }
    });


    //nav open & close
    $('.hamB').click(function(){
        $('nav').show();
    })
    $('#Close').click(function(){
        $('nav').hide();
    })

    //sns메뉴
    $('#Sns>a').click(function(){
        $('.snsChannel').slideToggle();
    })

    //nav sns메뉴
    $('#navSns>a').click(function(){
        $('.navSnsChannel').slideToggle();
    })

    $('.pcSearchBtn').click(function(){
        $('.pcSearch').slideToggle();
    })

    //section3 배경/이미지 바꾸기
    $('.travel').click(function(){
        $(this).children('a').addClass('clickOn');
        $(this).siblings().children('a').removeClass('clickOn');
    })

    $('.travel01').click(function(){
        $('.container .section03').css({"background-image":"url('images/shinhwa01.jpg')"})
        $('.circle>div>img').attr("src","images/rotate01.png");
        $('.right>div>.rTitle').text('스카이풀');
        $('.right>div>.rSub').html('낮에도, 밤에도 아름다운 이곳에서 <br> 행복을 찾아가세요!');
    })
    $('.travel02').click(function(){
        $('.container .section03').css({"background-image":"url('images/shinhwa02.jpg')"})
        $('.circle>div>img').attr("src","images/rotate02.png");
        $('.right>div>.rTitle').text('신화워터파크');
        $('.right>div>.rSub').html('추울땐 안에서, 더울땐 밖에서! <br> 어디서나 즐기자!');
    })
    $('.travel03').click(function(){
        $('.container .section03').css({"background-image":"url('images/shinhwa03.jpg')"})
        $('.circle>div>img').attr("src","images/rotate03.png");
        $('.right>div>.rTitle').text('신화테마파크');
        $('.right>div>.rSub').html('다양한 놀이기구로 가득한 <br> 이곳은 아이들의 천국!');
    })
    $('.travel04').click(function(){
        $('.container .section03').css({"background-image":"url('images/shinhwa04.jpg')"})
        $('.circle>div>img').attr("src","images/rotate04.png");
        $('.right>div>.rTitle').text('로맨틱 바');
        $('.right>div>.rSub').html('사랑하는 사람과 이곳에서라면, <br> 모든 날이 기념일!');
    })
    $('.travel05').click(function(){
        $('.container .section03').css({"background-image":"url('images/shinhwa05.jpg')"})
        $('.circle>div>img').attr("src","images/rotate05.png");
        $('.right>div>.rTitle').text('대형 쇼핑몰');
        $('.right>div>.rSub').html('아동복부터 명품까지, <br> 온가족이 행복지는 쇼핑 타임!');
    })
    $('.travel06').click(function(){
        $('.container .section03').css("background-image","url('images/shinhwa06.jpg')")
        $('.circle>div>img').attr("src","images/rotate06.png");
        $('.rTitle').html('신화 다이닝');
        $('.rSub').html('산해진미가 가득한 레스토랑에서 <br> 감사의 마음을 전해요! ');
    })
    $('.travel07').click(function(){
        $('.container .section03').css("background-image","url('images/shinhwa07.jpg')")
        $('.circle>div>img').attr("src","images/rotate07.png");
        $('.rTitle').html('다양한 놀거리');
        $('.rSub').html('볼링부터 오락실, 게임존까지 <br> 만들어 낼 추억이 한가득!');
    })
    $('.travel08').click(function(){
        $('.container .section03').css("background-image","url('images/shinhwa08.jpg')")
        $('.circle>div>img').attr("src","images/rotate08.png");
        $('.rTitle').html('힐링 데이트');
        $('.rSub').html('발길 닿는 곳곳 <br> 힐링 스팟이 되는 제주의 낙원!');
    })

    //모바일 하단  nㅡ
    $('.review02').on({
        mouseenter:function(){
            $('.review02>img').attr('src','images/icon02_hover.png');
        },
        mouseleave:function(){
            $('.review02>img').attr('src','images/icon02.png');
        }
    })
    $('.review03').on({
        mouseenter:function(){
            $('.review03>img').attr('src','images/icon03_hover.png');
        },
        mouseleave:function(){
            $('.review03>img').attr('src','images/icon03.png');
        }
    })
    $('.review04').on({
        mouseenter:function(){
            $('.review04>img').attr('src','images/icon04_hover.png');
        },
        mouseleave:function(){
            $('.review04>img').attr('src','images/icon04.png');
        }
    })
    $('.review05').on({
        mouseenter:function(){
            $('.review05>img').attr('src','images/icon05_hover.png');
        },
        mouseleave:function(){
            $('.review05>img').attr('src','images/icon05.png');
        }
    })
    $('.review06').on({
        mouseenter:function(){
            $('.review06>img').attr('src','images/icon06_hover.png');
        },
        mouseleave:function(){
            $('.review06>img').attr('src','images/icon06.png');
        }
    })


    $('.headLeft>a').click(function(){
        $('.resMenu').slideToggle();
    })

    $('.rsvCancel').click(function(){
        $('.resMenu').hide();
    })


    $(".btn>li").click(function(){
        let sNum = $(this).index();

        console.log($(this).index())
        $(this).addClass("active").siblings().removeClass("active")

        if($('.btn>li:eq(0)').hasClass('active')){
            $('.hotelRsv').css('display','block')
            $('.attraRsv').css('display','none')
        } else if($('.btn>li:eq(1)').hasClass('active')){
            $('.hotelRsv').css('display','none')
            $('.attraRsv').css('display','block')
        }
    })

    $('.list>li>a').click(function(){
        $('.list>li>ul').slideToggle();
    })


    $('.trans>div>a').click(function(){
        $(this).siblings('p').slideToggle();
    })
})