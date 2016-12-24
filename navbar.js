$(document).ready(function(){
	$(".navbar-chevron").click(function(){
		var parentList = $(this).parent().parent().parent();
		$(parentList).find(".dropdown").slideToggle();
		$(this).toggleClass('flipped');
		if ($(this).hasClass("navbar-chevron-nonsticky")){
			$(".top-navbar-wrap").toggleClass("opaque");
		}
	});
});