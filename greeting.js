
let clockFace = document.getElementById('clock-display');

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

	let clockText = `${parseInt(hours % 12)}~${minutes}.${seconds}`;

	clockFace.innerText = clockText;

}

currentTime();
setInterval(currentTime, 1000);