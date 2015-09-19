

window.onload = function(){

	var clockId =  document.getElementById("thisIsTime"),
		bodyId = document.getElementsByTagName("body")[0];
		colorId = document.getElementById("hexColor");
		progressId = document.getElementById("progress");

	//set clock
	var clock = function() {
		var now = new Date(),
			hour = now.getHours(),
			minutes = now.getMinutes(),
			seconds = now.getSeconds()
			//add zero in front of min and sec if one digit
			minutes = ( minutes < 10 ? "0"  : "") + minutes
			seconds = (seconds < 10 ? "0" : "") + seconds      
			currentTime = hour + ":" + minutes + ":" + seconds
		
		clockId.innerHTML = currentTime;
	}

	//set hex
	var setHex = function() {
		var now = new Date(),
			minutes = now.getMinutes(),
			seconds = now.getSeconds()

			minutes = ( minutes < 10 ? "0"  : "") + minutes
			seconds = (seconds < 10 ? "0" : "") + seconds 
		var hex = (minutes+1 * 22000)-(seconds * 2)
			h = hex.toString(16)
			return h
	}
	console.log(setHex())

	//create progress bar
	var progressBar = function(){
		var now = new Date(),
			seconds = now.getSeconds() 
		progressId.style.width = seconds * 3.3 + "px"
	}

	//set radial gradient
	var setGradient = function() {
		bodyId.style.background = "-webkit-radial-gradient(center, circle cover, #FFFFFF, #" + setHex() + ")"  
	}

	//hex text
	var showColor = function(){
		colorId.innerHTML = "<p>" + setHex() + "</p>"
	}

	var display = function(){
		clock();
		setGradient();
		showColor();
		progressBar();
	}

	var interval = function() {
		setInterval(display, 1000);
	} 

	interval(); 
}


