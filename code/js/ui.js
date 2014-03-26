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
	        .animate({scrollTop: targetOffset}, 500);
	       return false;
	      }
	    }
  	});

	if(windowWidth < 480){
		$("#navToggle").css("display","block");
		$("nav").hide();
	}

	$("#navToggle").click(function() {
		$("nav").slideToggle(1000);
	});

	$(".main-menu").click(function() {
		if($("nav").show() && windowWidth < 480){
		$("nav").slideToggle(1000);
	}
	});

	$(window).resize(function(){
	var windowWidth = $(window).width();
		if(windowWidth > 480){
			$("#navToggle").css("display","none");
			$("nav").show();
		}
		else{
			$("#navToggle").css("display","block");
			$("nav").hide();
		}
	});
});