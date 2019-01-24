'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").addClass("active");
		$("a.thumbnail").click(projectClick);
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	function projectClick(e){
		console.log("Project Clicked")
		e.preventDefault();
		$(this).css("background-color", "#7fff00");
		$("p").text("Changed text");
	}

	$(".thumbnail p").click(changeText);
	function changeText(event)	{
		$(this).text("Changed text");
	}



}