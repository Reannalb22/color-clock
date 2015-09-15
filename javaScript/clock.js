

window.onload = function(){


	var now = new Date();
		hour = now.getHours();
		minutes = now.getMinutes();
		seconds = now.getSeconds();       
		currentTime = hour + ":" + minutes + ":" + seconds;

	var clockEl =  document.getElementById("thisIsTime");
	clockEl.innerHTML=currentTime;
		
	
	clockEl.onmouseover = function() {
		clockEl.innerHTML = "#4b756b"
		//have to access actual hex-color
	}

	clockEl.onmouseout = function() {
		clockEl.innerHTML = hour + ":" + minutes + ":" + seconds;

	}
}


