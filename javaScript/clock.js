

window.onload = function(){


function clock() {
	var now = new Date(),
		hour = now.getHours(),
		minutes = now.getMinutes(),
		seconds = now.getSeconds()
		//add zero in front of min and sec if one digit
		minutes = ( minutes < 10 ? "0"  : "") + minutes;
		seconds = (seconds < 10 ? "0" : "") + seconds;       
		currentTime = hour + ":" + minutes + ":" + seconds;


	var clockEl =  document.getElementById("thisIsTime");
	clockEl.innerHTML = currentTime;
}

clock();
	
	
	// clockEl.onmouseover = function() {
	// 	clockEl.innerHTML = hexVal;	
	// 	//have to access actual hex-color
	// }


	// clockEl.onmouseout = function() {
	// 	clockEl.innerHTML = hour + ":" + minutes + ":" + seconds;

	// }	





	setInterval(clock, 1000); 

}






// function hexFromDate(now) {
	// 	return [
	// 		(now.getHours()/24 * 16777215),
	// 		(now.getMinutes()/60 * 16777215),
	// 		(now.getSeconds()/60 * 16777215),
	// 	].map(function(e){
	// 		return Math.round(e)
	// 	});
	// }

	// var channels = hexFromDate(now);
	// var hexEl = document.getElementById("thisIsTime");

	// document.body.style.backgroundColor = radial-gradient(circle + channels.join(',') + )


	// }



// document.getElementById("container").style.backgroundColor;

// document.getElementById("container").style.background = #4b756b, #2d4640, #0f1715


 // function changebackground() {
 //            var colors = ["#0099cc","#c0c0c0","#587b2e","#990000","#000000","#1C8200","#987baa","#981890","#AA8971","#1987FC","#99081E"];

 //            setInterval(function() { 
 //                var randomColors = Math.floor(Math.random() * colors.length);
 //                var selectedcolor = colors[randomColors];
 //                document.body.style.background = selectedcolor;
 //            }, 1000);
 //        }



// clockEl.style.backgroundColor="4b756b";

// 	function rgbToHex(col)
// 		{
// 		    if(col.charAt(0)=='r')
// 		    {
// 		        col=col.replace('rgb(','').replace(')','').split(',');
// 		        var r=parseInt(col[0], 10).toString(16);
// 		        var g=parseInt(col[1], 10).toString(16);
// 		        var b=parseInt(col[2], 10).toString(16);
// 		        r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
// 		        var colHex='#'+r+g+b;
// 		        return colHex;
// 		    }
// 		    var col=document.getElementById('thisIsTime').style.backgroundColor;
// 		}

// var colorEl = document.getElementById("container");

// var randInRange = function(a,b) {
// 	return Math.floor(a + Math.random() * (b-a+1))
// }

// var genRandomHex = function () {
// 	var randInt = randInRange(0, 16777215)
// 	//used parseInt(hex,16) to get 16777215. this # is the same as RGB 255 
// 	var hexVal = randInt.toString(16)
// 	while (hexVal.length < 6){
// 		hexVal = '0' + hexVal 
// 	}
// 	hexVal = '#' + r + g + b;
// 	return hexVal;

// var setHex = function() {
// 		hexHour = toStr((hour * 255/24)-3),
// 		hexMinutes = toStr(minutes * 255/60,
// 		hexSeconds = toStr(seconds * 255/60

