(function() {
    /*
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();

    function drawStuff() {
    }
    */
})();

function startup() {
    var el = document.getElementsByTagName("body")[0];
    el.addEventListener("touchstart", handleStart, false);
   // el.addEventListener("touchend", handleEnd, false);

    //el.addEventListener("touchcancel", handleCancel, false);
    //el.addEventListener("touchleave", handleEnd, false);
    el.addEventListener("touchmove", $.debounce(5, handleMove));
    console.log("initialized.");
}

var ongoingTouches = new Array();
//var el = document.getElementsByTagName("canvas")[0];

function handleStart(evt) {
    evt.preventDefault();
    console.log("touchstart.");
    //var ctx = el.getContext("2d");
    var touches = evt.changedTouches;

    for (var i=0; i < touches.length; i++) {
        console.log("touchstart:"+i+"...");
        var x = Math.round(touches[i].pageX);
        var y = Math.round(touches[i].pageY);
        console.log("x,y:" + x + "," + y);
        var coords = {x:x, y:y, r:20, s:0.01, f: navigator.userAgent};
        var coords1 = {x:x, y:y, r:30, s:0.14, f: navigator.userAgent};
        socket.emit('c', coords);
        socket.emit('c', coords1);

        /*
        ongoingTouches.push(copyTouch(touches[i]));
        var color = colorForTouch(touches[i]);
        ctx.beginPath();
        ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0,2*Math.PI, false);  // a circle at the start
        ctx.fillStyle = color;
        ctx.fill();
        console.log("touchstart:"+i+".");
        */
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
        socket.emit('c', coords);

        //var color = colorForTouch(touches[i]);
        /*
        var idx = ongoingTouchIndexById(touches[i].identifier);
        if(idx >= 0) {
            log("continuing touch "+idx);
            ctx.beginPath();
            log("ctx.moveTo("+ongoingTouches[idx].pageX+", "+ongoingTouches[idx].pageY+");");
            ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
            log("ctx.lineTo("+touches[i].pageX+", "+touches[i].pageY+");");
            ctx.lineTo(touches[i].pageX, touches[i].pageY);
            ctx.lineWidth = 4;
            ctx.strokeStyle = color;
            ctx.stroke();

            ongoingTouches.splice(idx, 1, copyTouch(touches[i]));  // swap in the new touch record
            log(".");
        } else {
            log("can't figure out which touch to continue");
        }
        */
    }
}