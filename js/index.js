$(function(){
    var $flag=true;
    $('.btn').click(function(){
        if ($flag) {
            $('.header').css('opacity',1)
            $('.show').slideDown(600);
            $('.page').css('display', 'none');
            $('.min-nav ul li:last a').css('margin-left',60)
            $flag=false;
        }else if (!$flag){
            $('.header').css('opacity',0.8)
            $('.show').slideUp(600);
            $('.page').css('display', 'block');
            $flag=true;
        }
    })

    //var box=$(".img-box"); //大盒子
    //var a=$(".img-box li div"); //图片
    //$(a.eq(0)).css({left:0});
    //
    ////经过左右按钮变色
    //var left=$(".jt-left");
    //var right=$(".jt-right");
    //var xiaobtn=$(".tab div");  //小按钮
    //var t=setInterval(move,1500);
    //var now=0;
    //var next=0;
    //var flag=true;
    //function move(){
    //    if(!flag){return};
    //    flag=false;
    //    next++;
    //    if(next== a.length){
    //        next=0;
    //    }
    //    a.eq(next).css({marginLeft:"100%"});
    //    a.eq(now).animate({marginLeft:"-100%"},800);
    //    a.eq(next).animate({marginLeft:0},800,function(){
    //        flag=true;
    //    });
    //    xiaobtn.eq(now).removeClass("hot");
    //    xiaobtn.eq(next).addClass("hot");
    //    now=next;
    //}
    ////左右按钮经过
    //left.hover(function(){
    //    left.animate({opacity:1},200);
    //},function(){
    //    left.animate({opacity:0.5},200);
    //});
    //right.hover(function(){
    //    right.animate({opacity:1},200);
    //},function(){
    //    right.animate({opacity:0.5},200);
    //});
    //box.hover(function(){
    //    clearInterval(t);
    //},function(){
    //    t=setInterval(move,1500);
    //    left.animate({opacity:1});
    //});
    ////右按钮
    //right.click(function(){
    //    move();
    //})
    ////左按钮
    //left.click(function(){
    //    if(!flag){return};
    //    flag=false;
    //    next--;
    //    if(next==-1){
    //        next= a.length-1;
    //    }
    //    a.eq(next).css({marginLeft:"-100%"});
    //    a.eq(now).animate({marginLeft:"100%"},800);
    //    a.eq(next).animate({marginLeft:"0"},800,function(){
    //        flag=true;
    //    });
    //    now=next;
    //})
    //
    ////小按钮
    //xiaobtn.click(function(){
    //    var index1=$(this).index();
    //    //if(index1=now || !flag){return};
    //    if(index1>now){
    //        a.eq(index1).css({left:"100%"});
    //        a.eq(now).animate({left:"-100%"},800);
    //    }
    //    if(index1<now){
    //        a.eq(index1).css({left:"-100%"});
    //        a.eq(now).animate({left:"100%"},800);
    //    }
    //    a.eq(index1).animate({left:0},800);
    //    xiaobtn.eq(now).removeClass("hot");
    //    xiaobtn.eq(index1).addClass("hot");
    //    now=next=index1;
    //});

    var swiper = new Swiper('.img-box', {
        pagination: '.tab',
        nextButton: '.jt-right',
        prevButton: '.jt-left',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });


    $("h3").click(function(){
        var $W=document.documentElement.clientWidth;
        if($W>=768){
            return;
        }else{
            $("span",this).slideToggle("normal")
        }
    })
})
