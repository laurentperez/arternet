var counter;

$(document).on('pagecreate', function(){
	console.log("pagecreate");
	
	$("#slider").on("slidestop", function( event, ui ) {
	console.log("slidestop");
	if($("#slider")[0].value === "10") {
		// go to play
		$.mobile.changePage("play.html");
		return;
	}
	});

})

$(document).ready(function () { 
console.log("document ready");

$( ":mobile-pagecontainer" ).on( "pagecontainershow", function( event, ui ) {
	console.log("pagecontainershow");
});

$( ":mobile-pagecontainer" ).on( "pagecontainerchange", function( event, ui ) {
	var to = ui.toPage[0].id;
	var from = ui.prevPage ? ui.prevPage[0].id : undefined;
	console.log("pagecontainerchange from:" + from + " to:" + to);

	// reset actor range
	if(to === "actor") {
		$("#slider").val(0).slider("refresh");
		return;
	}

	// play timer
	var count=10;
	var timer = function()
		{
		count=count-1;
		if (count <= 0)
		{
		 clearInterval(counter);
		 alert("timer");
		 // $.mobile.changePage("actor.html");
		 // return;
		}
		document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
		}

	if(to === "play") {
		console.log("starting timer");
		// debugger;
		counter=setInterval(timer, 1000); //1000 will  run it every 1 second

		$(".photo").on("click", function(e) {
			console.log("photo click");
			$.mobile.changePage("actor.html", {type:'get', data:{a:1}});
		 	clearInterval(counter);

		});

	} 
	if(from === "play") {
		console.log("pausing timer");
		 clearInterval(counter);
	}

} );

});


