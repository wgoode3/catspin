$(document).ready(function(){
	$("#moreCats").click(function(){
		$("#catField").append(`<img src="img/happycat.gif" alt="happycat">`);
	});

	$("#lessCats").click(function(){
		$("#catField").html("");
	})

	$("#lessSpin").click(function(){
		$("img").removeClass("spin");
	})

	// $("img").click(function(){
	// 	$(this).addClass("spin");
	// })

	$(document).on("click", "img", function(){
		$(this).addClass("spin");
	})
});