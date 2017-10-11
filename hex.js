
let clockFace = document.getElementById('clock-display');
let hexDisplay = document.getElementById('hex-display');



function currentTime() {

	let newTime = new Date();
	let hours = String(newTime.getHours());
	let minutes = String(newTime.getMinutes());
	let seconds = String(newTime.getSeconds());

	if (hours.length < 2) {
		hours = `0${hours}`;
	}

	if (minutes.length < 2) {
		minutes = `0${minutes}`;
	}

	if (seconds.length < 2) {
		seconds = `0${seconds}`;
	}

	let clockText = `${parseInt(hours % 12)} : ${minutes} : ${seconds}`;

	let hexText = `#${hours}${minutes}${seconds}`;
	
	clockFace.style.color = invertHex(hexText);
	hexDisplay.style.color = invertHex(hexText);


	clockFace.innerText = clockText;
	document.body.style.background = hexText;
	hexDisplay.innerText = hexText;

}

Attempt at inverting Hex value to apply to Clock color style 


function invertHex(hex) {
  if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
  }
  
  // invert color components
  var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
      g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
      b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}

currentTime();
setInterval(currentTime, 1000);
