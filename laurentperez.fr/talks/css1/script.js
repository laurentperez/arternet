	var socket = io();

	var key = "kittens", animationTimeout;

    socket.emit('load', {
        key: key
    });

	socket.on('access', function(data){

		if(true) {

			var ignore = false;

			window.addEventListener('hashchange', function(){

                console.log('changed');
                
				// Notify other clients that we have navigated to a new slide
				// by sending the "slide-changed" message to socket.io

				if(ignore){
					// You will learn more about "ignore" in a bit
					return;
				}

				var hash = window.location.hash;

				socket.emit('slide-changed', {
					hash: hash,
					key: key
				});
			});

			socket.on('navigate', function(data){
	
				// Another device has changed its slide. Change it in this browser, too:

				window.location.hash = data.hash;

				// The "ignore" variable stops the hash change from
				// triggering our hashchange handler above and sending
				// us into a never-ending cycle.

				ignore = true;

				setInterval(function () {
					ignore = false;
				},100);

			});

		}
		

	});
