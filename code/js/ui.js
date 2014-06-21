$(document).ready(function(){

	var windowWidth = $(window).width();

	$('a[href*=#]').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	    && location.hostname == this.hostname) {
	      var $target = $(this.hash);
	      $target = $target.length && $target
	      || $('[name=' + this.hash.slice(1) +']');
	      if ($target.length) {
	        var targetOffset = $target.offset().top;
	        $('html,body')
	        .animate({scrollTop: targetOffset}, 1000);
	       return false;
	      }
	    }
  	});

	if(windowWidth < 1024){
		$("#navToggle").css("display","block");
		$("nav").hide();
	}

	$("#navToggle").click(function() {
		$("nav").slideToggle(500);
	});

	$(".main-menu").click(function() {
		if($("nav").show() && windowWidth < 1024){
		$("nav").slideToggle(500);
	}
	});

	$(window).resize(function(){
	var windowWidth = $(window).width();
		if(windowWidth > 1024){
			$("#navToggle").css("display","none");
			$("nav").show();
		}
		else{
			$("#navToggle").css("display","block");
			$("nav").hide();
		}
	});

	$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});