var bg = document.getElementById("flex");

function blur(range) {
	console.log(range);
	if(range < 0.20) {
		bg.style.webkitFilter = "blur("+range+"px)";

	} else {
	bg.style.webkitFilter = "blur("+20+"px)";

	}
}