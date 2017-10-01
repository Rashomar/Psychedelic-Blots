	
	var canvas = document.getElementById('canvas');
	var c = canvas.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	var blotsArray = [];
	
	var fps = 60;
	var lastTime = 0;

	draw();
	function draw(time){
		requestAnimationFrame(draw);

		if(time - lastTime > 1000/fps){

			lastTime = time;

		for(var i=0; i<4; i++){
		var blot = {
			x: mX,
			y: mY,
			xSpeed: randomRange(-15,15),
			ySpeed: randomRange(-15,15),
			size: 50
		};

		blotsArray.push(blot);
		}
		// c.clearRect(0,0,canvas.width,canvas.height);

		var color = getRndColor();
		for(var i=0; i<blotsArray.length; i++){
			blot = blotsArray[i];
			c.fillStyle = color;
			c.beginPath();
			c.arc(blot.x,blot.y,blot.size,0,Math.PI*2);
			c.fill();
			blot.x = blot.x + blot.xSpeed;
			blot.y = blot.y + blot.ySpeed;

			blot.size *= 0.8;
			if(blotsArray.length > 100){
				blotsArray.shift();
			}
		
		}
		}
	}


	function getRndColor() {
	    var r = Math.random()*255|0,
	        g = Math.random()*255|0,
	        b = Math.random()*255|0;
	    return  `rgb( ${r},${g},${b})`;
	}

	function randomRange(min,max){
		return (Math.random()*(max-min+1)) + min;
	}

	window.addEventListener("mousemove", function(event){
		mX = event.clientX;
		mY = event.clientY;
	})
