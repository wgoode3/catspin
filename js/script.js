// console.log($("img"));

$(document).ready(function(){
	$("img").click(function(){
		alert("meow!")
	});

	$("img").hover(
		function(){
			$("img").addClass("spin");
		},
		function(){
			$("img").removeClass("spin");
		}
	);
});