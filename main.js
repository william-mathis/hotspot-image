$(document).ready(function () {
	$("#circle-transcript").on("click", function (e) {
		e.preventDefault(); //we add this to prevent weird behavior from older browsers or IE
		console.log('click worked')
		var circle_clicked = $(this),
			text = circle_clicked.data("text"); //looks for the data-text attribute and stores its value

		$(".popIn").text(text); //assigns the text for the element to the popIn container in the slide

		$("#slide_1").addClass("active"); //add a class active to #slide_1 to apply the #slide.active styles to it, making it visible
	});

	$(".btn_close").on("click", function (e) {
		e.preventDefault();
		$("#slide_1").removeClass("active"); //remove class="active" from #slide, making it not visible
	});

	$("#circle-notes").on("click", function (e) {
		e.preventDefault(); //we add this to prevent weird behavior from older browsers or IE
		console.log('click worked')
		var circle_clicked = $(this),
			text = circle_clicked.data("text"); //looks for the data-text attribute and stores its value

		$(".popIn").text(text); //assigns the text for the element to the popIn container in the slide

		$("#slide_2").addClass("active"); //add a class active to #slide_2 to apply the #slide.active styles to it, making it visible
	});
	$(".btn_close").on("click", function (e) {
		e.preventDefault();
		$("#slide_2").removeClass("active"); //remove class="active" from #slide, making it not visible
	});

	$("#circle-backpack").on("click", function (e) {
		e.preventDefault();
		console.log("click worked")
		var circle_clicked = $(this),
			text = circle_clicked.data("text"); //looks for the data-text attribute and stores its value
		$(".popIn").text(text); //assigns the text for the element to the popIn container in the slide
		$("#slide_3").addClass("active"); //this adds class active to slide_3 to make it visible//
	});
	$(".btn_close").on("click", function (e) {
		e.preventDefault();
		$("#slide_3").removeClass("active");
	});

	$("#circle-ring").on("click", function (e) {
		e.preventDefault();
		console.log("click worked")
		var circle_clicked = $(this),
			text = circle_clicked.data("text");
		$(".popIn").text(text);
		$("#slide_4").addClass("active");
	});
	$(".btn_close").on("click", function (e) {
		e.preventDefault();
		$("#slide_4").removeClass("active");
	});

});
