


//resize: 브라우저 창 너비의 변경된 값을 width 변수에 저장
$(window).resize(function () {
    var width = $(window).width();
    if (width <= 720) {
        $(".gnb-button").click(function () {
            $(this).closest(".gnb").addClass("is-active");
        });
        $(".gnb-menu .gnb-button").click(function () {
            $(this).closest(".gnb").removeClass("is-active");
        });
    } else {
        
    }
});

$(window).trigger("resize"); //강제로 호출하는 함수


$(function () {
    var width = $(window).width();
    if (width <= 720) {
        $(".gnb-button").click(function () {
            $(this).closest(".gnb").addClass("is-active");
        });
        $(".gnb-menu .gnb-button").click(function () {
            $(this).closest(".gnb").removeClass("is-active");
        });
     
    } else {
      
    }

    
    $(window).scroll(function() {
        
        if ($(this).scrollTop() > 200) {
            $('.button-top').fadeIn();
        } else {
        	$('.button-top').fadeOut();
        	 
        }
    });
    
    $(".button-top").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });

})

