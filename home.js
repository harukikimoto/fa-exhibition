
jQuery(function(){

    //メインビジュアル拡大  
    $(window).on('load scroll', function() {
        var scroll = $(window).scrollTop();
        var Size = 33.3333 + (scroll/10);
        var Size2 = 100 - (scroll/10);
        if(window.matchMedia("(max-width: 900px)").matches) {
            $('#main-visual img').css({
                width: Size2  + "%",
            });
        }else{
            $('#main-visual img').css({
                width: Size  + "%",
            });
        }
    });//メインビジュアル拡大


    // ハンバーガメニュー
    $("#nav-toggle").click(function(){
        $(this).toggleClass("open");
        $(".gloval").slideToggle();
    });// ハンバーガメニュー


    //ヘッダー
    $(window).on('load scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 520){
            $('#header-wrapper').removeClass('FadeOut');
            $('#header-wrapper').addClass('FadeIn');
        }else{
            if($('#header-wrapper').hasClass('FadeIn')){
                $('#header-wrapper').removeClass('FadeIn');
                $('#header-wrapper').addClass('FadeOut');
            }
        }
    });//ヘッダー


    //要素を下からふわっと
    $(".inview").on("inview", function (isInView) {
        if (isInView) {
        $(this).stop().addClass("is-show");
        }
    });//要素を下からふわっと


    // サイドボタン
    $(window).on('load scroll', function() {
        var windowH = $(window).height();	
        var scroll = $(window).scrollTop(); 

        var contentsTop = Math.round($('.gallery').offset().top);	
        var contentsTop2 = Math.round($('#access').offset().top);	
        var contentsTop3 = Math.round($('#access-ttl').offset().top);

        var contentsH = $('.gallery').outerHeight(true);	
        var contentsH2 = contentsTop3 - contentsTop2;	
        var contentsH3 = contentsH + contentsH2 + 72;
        
        if(scroll+windowH >= contentsTop && scroll+windowH  <= contentsTop+contentsH3){
            $("#local").addClass("LeftMove"); 
            $("#local").removeClass("RightMove");
            $(".hide-btn").removeClass("hide-btn"); 
        }else{
            if(!$(".hide-btn").length){				
                $("#local").addClass("RightMove");  
                $("#local").removeClass("LeftMove");
            }		
        }
    });//サイドボタン


    //accessの背景
    $(window).on('load scroll', function() {
        var windowH = $(window).height();	
        var scroll = $(window).scrollTop(); 

        var contentsTop = Math.round($('#access-ttl').offset().top);	
        var contentsTop2 = Math.round($('#contact-ttl').offset().top);
        var contentsH = contentsTop2 - contentsTop;	
        
        if(scroll+windowH >= contentsTop && scroll+windowH  <= contentsTop+contentsH){
            $("#access").addClass("FadeIn"); 
            $("#access").removeClass("FadeOut");
            $(".hide-img").removeClass("hide-img"); 
        }
        else{
            if(!$(".hide-img").length){				
                $("#access").addClass("FadeOut");  
                $("#access").removeClass("FadeIn");
            }		
        }
    });//accessの背景

});