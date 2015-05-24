(function() {
  
})();

function startup() {
    var el = document.getElementsByTagName("body")[0];
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchmove", $.debounce(5, handleMove));
    console.log("initialized.");
}

var ongoingTouches = new Array();

function handleStart(evt) {
    evt.preventDefault();
    console.log("touchstart.");
    var touches = evt.changedTouches;

    for (var i=0; i < touches.length; i++) {
        console.log("touchstart:"+i+"...");
        var x = Math.round(touches[i].pageX);
        var y = Math.round(touches[i].pageY);
        console.log("x,y:" + x + "," + y);
        var coords = {x:x, y:y, r:20, s:0.01, f: navigator.userAgent};
        var coords1 = {x:x, y:y, r:30, s:0.14, f: navigator.userAgent};
        ws.send(JSON.stringify(coords));
        ws.send(JSON.stringify(coords1));
    }
}

function handleMove(evt) {
    evt.preventDefault();
    //var ctx = el.getContext("2d");
    var touches = evt.changedTouches;

    for (var i=0; i < touches.length; i++) {
        var x = Math.round(touches[i].pageX);
        var y = Math.round(touches[i].pageY);
        console.log("(move) x,y:" + x + "," + y);
        var coords = {x:x, y:y, r:20, s:0.01, f: navigator.userAgent};
        ws.send(JSON.stringify(coords));

      
    }
}