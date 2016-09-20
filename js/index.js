/**
 * Created by Administrator on 2016/6/29.
 */
$(function () {
    $('#box').fullpage({
        sectionsColor: ['#00317F', '#003D75', '#002966', '#003D75', '#002966', '#003D75', '#002966', '#003D75', '#002966', '#003D75', '#002966', '#003D75', '#002966','#003D75','#003384'],
        navigation: true,
        verticalCentered: false,
        continuousVertical:true,
        afterLoad: function (anchorLink, index) {
            switch (index) {
                case 2:
                    $('.div2 .p1').fadeIn(500, function () {
                        $('.div2 .p2').fadeIn(500, function () {
                            $('.div2 .p3').fadeIn(500, function () {
                                $('.div2 .p4').fadeIn(500);
                            });
                        });
                    });
                    break;
                case 3:
                    $('.div3_l ul li').eq(0).animate({'width': '43px'}, 500);
                    $('.div3_l ul li').eq(1).animate({'width': '108px'}, 500);
                    $('.div3_l ul li').eq(2).animate({'width': '162px'}, 500);
                    $('.div3_l ul li').eq(3).animate({'width': '277px'}, 500);
                    $('.div3_r ul li').eq(0).animate({'width': '43px'}, 500);
                    $('.div3_r ul li').eq(1).animate({'width': '108px'}, 500);
                    $('.div3_r ul li').eq(2).animate({'width': '162px'}, 500);
                    $('.div3_r ul li').eq(3).animate({'width': '277px'}, 500);
                    $('.div3 ul li img').fadeIn(1200);
                    break;
                case 4:
                    $('.div4 ul .li1').fadeIn(1000);
                    setTimeout(function () {
                        $('.div4 ul .li2').fadeIn(1000);
                    }, 400);
                    setTimeout(function () {
                        $('.div4 ul .li3').fadeIn(1000);
                    }, 800);
                    setTimeout(function () {
                        $('.div4 ul .li4').fadeIn(1000);
                    }, 1200);
                    break;
                case 5:
                    $('.div5 .dun1').addClass('dundh');
                    $('.div5 .yun1').animate({'left': '-100px'}, 1000);
                    $('.div5 .yun2').animate({'left': '450px'}, 1000);
                    $('.div5 p').fadeIn(1000);
                    break;
                case 6:
                    $('.div6 ul li').eq(0).slideDown(500, function () {
                        $('.div6 ul li').eq(1).slideDown(500, function () {
                            $('.div6 ul li').eq(2).slideDown(500);
                        });
                    });
                    break;
                case 7:
                    $('.div7 .centerBOX7 div').animate({'top': '0px'}, 500);
                    setTimeout(function () {
                        $('.div7 .centerBOX7 .img1').animate({'left': 0, 'opacity': 1}, 500);
                    }, 500)
                    setTimeout(function () {
                        $('.div7 .centerBOX7 .img3').animate({'left': 0, 'opacity': 1}, 500);
                    }, 500)
                    break;
                case 8:
                    $('.div8 .centerBOX8 ul li').eq(0).animate({'opacity': 1}, 1000);
                    setTimeout(function () {
                        $('.div8 .centerBOX8 ul li').eq(2).animate({'opacity': 1}, 1000);
                        $('.div8 .centerBOX8 ul li').eq(4).animate({'opacity': 1}, 1000);
                    }, 400);
                    setTimeout(function () {
                        $('.div8 .centerBOX8 ul li').eq(1).animate({'opacity': 1}, 1000);
                        $('.div8 .centerBOX8 ul li').eq(3).animate({'opacity': 1}, 1000);
                        $('.div8 .centerBOX8 ul li').eq(5).animate({'opacity': 1}, 1000);
                    }, 800);
                    break;
                case 9:
                    $('.div9 .centerBOX9 img').addClass('lwdh');
                    setTimeout(function () {
                        $('.div9 .centerBOX9 .p1').fadeIn(500, function () {
                            $('.div9 .centerBOX9 .p2').fadeIn(500)
                        });
                    }, 1000);
                    break;
                case 10:
                    $('.centerBOX10 .img2').fadeIn(500);
                    setTimeout(function () {
                        $('.centerBOX10 .img3').fadeIn(500);
                    }, 300);
                    setTimeout(function () {
                        $('.centerBOX10 .img4').fadeIn(500);
                    }, 600);
                    setTimeout(function () {
                        $('.centerBOX10 .img5').fadeIn(500);
                    }, 900);
                    setTimeout(function () {
                        $('.centerBOX10 .img6').fadeIn(500);
                    }, 1200);
                    break;
                case 11:
                    $('.centerBOX11 .img1').animate({'left': '213px'}, 1000);
                    $('.centerBOX11 .img2').animate({'left': '380px'}, 1000);
                    setTimeout(function () {
                        $('.centerBOX11 .txt p').eq(0).fadeIn(500);
                    }, 1000);
                    setTimeout(function () {
                        $('.centerBOX11 .txt p').eq(1).fadeIn(500);
                    }, 1500);
                    break;
                case 12:
                    $('.centerBOX12 ul li').eq(0).fadeIn(300);
                    setTimeout(function () {
                        $('.centerBOX12 ul li').eq(1).fadeIn(300);
                    }, 100);
                    setTimeout(function () {
                        $('.centerBOX12 ul li').eq(2).fadeIn(300);
                    }, 200);
                    setTimeout(function () {
                        $('.centerBOX12 ul li').eq(3).fadeIn(300);
                    }, 300);
                    setTimeout(function () {
                        $('.centerBOX12 ul li').eq(4).fadeIn(300);
                    }, 400);
                    setTimeout(function () {
                        $('.centerBOX12 ul li').eq(5).fadeIn(300);
                    }, 500);
                    setTimeout(function () {
                        $('.centerBOX12 ul li').eq(6).fadeIn(300);
                    }, 600);
                    setTimeout(function () {
                        $('.centerBOX12 ul li').eq(7).fadeIn(300);
                    }, 700);
                    setTimeout(function () {
                        $('.centerBOX12 ul li').eq(8).fadeIn(300);
                    }, 800);
                    setTimeout(function () {
                        $('.centerBOX12 ul li').eq(9).fadeIn(300);
                    }, 900);
                    setTimeout(function () {
                        $('.centerBOX12 ul li').eq(10).fadeIn(300);
                    }, 1000);
                    setTimeout(function () {
                        $('.centerBOX12 ul li').eq(11).fadeIn(300);
                    }, 1100);
                    setTimeout(function () {
                        $('.centerBOX12 ul li').eq(12).fadeIn(300);
                    }, 1200);
                    setTimeout(function () {
                        $('.centerBOX12 ul li').eq(13).fadeIn(300);
                    }, 1300);
                    setTimeout(function () {
                        $('.centerBOX12 ul li').eq(14).fadeIn(300);
                    }, 1400);
                    break;
                case 13:
                    $('.div13 .centerBOX13 .img1').animate({'top': '50px'},800);
                    setTimeout(function(){
                        $('.div13 .centerBOX13 .img2').fadeIn(500);
                    },700);
                    setTimeout(function(){
                        $('.div13 .centerBOX13 .p1 span span').html('320');
                        $('.div13 .centerBOX13 .p2 span span').html('2');
                        $('.div13 .centerBOX13 .p3 span span').html('2');
                    },100);
                    setTimeout(function(){
                        $('.div13 .centerBOX13 .p1 span span').html('639');
                        $('.div13 .centerBOX13 .p2 span span').html('4');
                        $('.div13 .centerBOX13 .p3 span span').html('5');
                    },200);
                    setTimeout(function(){
                        $('.div13 .centerBOX13 .p1 span span').html('792');
                        $('.div13 .centerBOX13 .p2 span span').html('6');
                        $('.div13 .centerBOX13 .p3 span span').html('7');
                    },300);
                    setTimeout(function(){
                        $('.div13 .centerBOX13 .p1 span span').html('930');
                        $('.div13 .centerBOX13 .p2 span span').html('8');
                        $('.div13 .centerBOX13 .p3 span span').html('10');
                    },400);
                    setTimeout(function(){
                        $('.div13 .centerBOX13 .p1 span span').html('1,042');
                        $('.div13 .centerBOX13 .p2 span span').html('10');
                        $('.div13 .centerBOX13 .p3 span span').html('12');
                    },500);
                    setTimeout(function(){
                        $('.div13 .centerBOX13 .p1 span span').html('1,310');
                        $('.div13 .centerBOX13 .p2 span span').html('12');
                        $('.div13 .centerBOX13 .p3 span span').html('15');
                    },600);
                    setTimeout(function(){
                        $('.div13 .centerBOX13 .p1 span span').html('1,532');
                        $('.div13 .centerBOX13 .p2 span span').html('14');
                        $('.div13 .centerBOX13 .p3 span span').html('17');
                    },700);
                    setTimeout(function(){
                        $('.div13 .centerBOX13 .p1 span span').html('1,800');
                        $('.div13 .centerBOX13 .p2 span span').html('16');
                        $('.div13 .centerBOX13 .p3 span span').html('20');
                    },800);
                    setTimeout(function(){
                        $('.div13 .centerBOX13 .p1 span span').html('2,312');
                        $('.div13 .centerBOX13 .p2 span span').html('18');
                        $('.div13 .centerBOX13 .p3 span span').html('22');
                    },900);
                    setTimeout(function(){
                        $('.div13 .centerBOX13 .p1 span span').html('2,510');
                        $('.div13 .centerBOX13 .p2 span span').html('20');
                        $('.div13 .centerBOX13 .p3 span span').html('25');
                    },1000);
                    break;
                case 14:
                    $('.div14 .centerBOX14 .img1').fadeIn(300);
                    setTimeout(function(){
                        $('.div14 .centerBOX14 .img2').fadeIn(300);
                    },100);
                    setTimeout(function(){
                        $('.div14 .centerBOX14 .img3').fadeIn(300);
                    },200);
                    setTimeout(function(){
                        $('.div14 .centerBOX14 .img4').fadeIn(300);
                    },300);
                    setTimeout(function(){
                        $('.div14 .centerBOX14 .img5').fadeIn(300);
                    },400);
                    setTimeout(function(){
                        $('.div14 .centerBOX14 .img6').fadeIn(300);
                    },500);
                    setTimeout(function(){
                        $('.div14 .centerBOX14 .img7').fadeIn(300);
                    },600);
                    setTimeout(function(){
                        $('.div14 .centerBOX14 .img8').fadeIn(300);
                    },700);
                    setTimeout(function(){
                        $('.div14 .centerBOX14 .img9').fadeIn(300);
                    },800);
                    setTimeout(function(){
                        $('.div14 .centerBOX14 .img10').fadeIn(300);
                    },900);
                    setTimeout(function(){
                        $('.div14 .centerBOX14 .img11').fadeIn(300);
                    },1000);
                    break;
            }

        },
        onLeave: function (anchorLink, index) {
            switch (index) {
                case 2:
                    $('.div2 p').fadeOut(10);
                    break;
                case 3:
                    $('.div3 ul li').css({'width': '0px'});
                    $('.div3 ul li img').fadeOut(10);
                    break;
                case 4:
                    $('.div4 ul li').css({'display': 'none'});
                    break;
                case 5:
                    $('.div5 .dun1').removeClass('dundh');
                    $('.div5 .yun1').css({'left': '0px'});
                    $('.div5 .yun2').css({'left': '350px'});
                    $('.div5 p').css({'display': 'none'});
                    break;
                case 6:
                    $('.div6 ul li').css({'display': 'none'});
                    break;
                case 7:
                    $('.div7 .centerBOX7 div').animate({'top': '-500px'}, 10);
                    $('.div7 .centerBOX7 .img1').animate({'left': '380px', 'opacity': '0'}, 10);
                    $('.div7 .centerBOX7 .img3').animate({'left': '-380px', 'opacity': '0'}, 10);
                    break;
                case 8:
                    $('.div8 .centerBOX8 ul li').animate({'opacity': 0}, 10);
                    break;
                case 9:
                    $('.div9 .centerBOX9 img').removeClass('lwdh');
                    $('.div9 .centerBOX9 p').css({'display': 'none'});
                    break;
                case 10:
                    $('.centerBOX10 img').css({'display': 'none'});
                    break;
                case 11:
                    $('.centerBOX11 .img1').css({'left': '-120%'});
                    $('.centerBOX11 .img2').css({'left': '120%'});
                    $('.centerBOX11 .txt p').css({'display': 'none'});
                    break;
                case 12:
                    $('.div12 .centerBOX12 ul li').css({'display': 'none'});
                    break;
                case 13:
                    $('.div13 .centerBOX13 .img1').css({'top': '-120%'});
                    $('.div13 .centerBOX13 .img2').css({'display': 'none'});
                    $('.div13 .centerBOX13 p span span').html('0');
                    break;
                case 14:
                    $('.div14 .centerBOX14 img').css({'display':'none'});
                    break;
            }
        },

    })


})

