
$("section img").on("click", function (){

	var imageSrc = $(this).attr("src");

	$("div#lightbox img").attr("src", imageSrc);

	$("div#lightbox").fadeIn(250);

});

$("div#lightbox").on("click", function (){

	$("div#lightbox").fadeOut(250);
	
});










