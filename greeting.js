
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

	if (parseInt(hours) > 7 && parseInt(hours) < 9) {
		document.body.style.background = "url('greet-images/darktree.jpg')";
	}

	if (parseInt(hours) > 9 && parseInt(hours) < 11) {
		document.body.style.background = "url('greet-images/gando.jpg')";
	}

	if (parseInt(hours) > 11 && parseInt(hours) < 13) {
		document.body.style.background = "url('greet-images/hobbit-house.jpg')";
	}

	if (parseInt(hours) > 13 && parseInt(hours) < 15) {
		document.body.style.background = "url('greet-images/shire-1.png')";
	}

	if (parseInt(hours) > 15 &&parseInt(hours) < 18) {
		document.body.style.background = "url('greet-images/stonedudes.jpg')";
	}

	if (parseInt(hours) > 18 && parseInt(hours) < 21) {
		document.body.style.background = "url('greet-images/stonedudes.jpg')";
	}

	if (parseInt(hours) > 21 && parseInt(hours) < 24) {
		document.body.style.background = "url('greet-images/stonedudes.jpg')";
	}

	if (parseInt(hours) >= 0 && parseInt(hours) < 7) {
		document.body.style.background = "url('greet-images/stonedudes.jpg')";
		document.getElementById('greeting').innerText = `Just ${7 - hours} hours until Breakfast!`; // fix this
	}

};

currentTime();
setInterval(currentTime, 1000);