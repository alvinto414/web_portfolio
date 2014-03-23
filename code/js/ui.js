$(document).ready(function(){

	var windowWidth = $(window).width();

	if(windowWidth < 480){
		$("#navToggle").css("display","block");
		$("nav").hide();
	}

	$("#navToggle").click(function() {
		$("nav").slideToggle(1000);
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