$(document).ready(function(){
	drawGrid(96);
});

function drawGrid(x) {

	for (i = 0; i < x; i++) {
		$("div.canvas").append("<div class=\"pixel\"></div>");
	}
	console.log("fromtest");
}