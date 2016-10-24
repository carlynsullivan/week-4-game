$(document).ready(function() {

	$("div.img").on("click", function() {		
		if ($(this).hasClass("r2d2")) {
			$(".c3po, .chewy, .yoda").appendTo(".enemiesAvail");
		} else if ($(this).hasClass("c3po")) {
			$(".r2d2, .chewy, .yoda").appendTo(".enemiesAvail");
		} else if ($(this).hasClass("chewy")) {
			$(".r2d2, .c3po, .yoda").appendTo(".enemiesAvail");
		} else if ($(this).hasClass("yoda")) {
			$(".r2d2, .c3po, .chewy").appendTo(".enemiesAvail");
		}
	});
});



