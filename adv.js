document.getElementById('dragger').addEventListener('drag', function cursorCapture(e){
	let xAxisOne = e.pageX;
	let yAxisOne = e.pageY;

	console.log('xAxisOne');
	console.log('yAxisOne');

	moveHand(xAxisOne, yAxisOne);

	document.getElementById('xAxis').innerText = String(xAxisOne);
	document.getElementById('yAxis').innerText = String(yAxisOne);
	setTimeout(moveHand, 500);

});

function setClock() {
  
  let time = new Date;
  let seconds = time.getSeconds();
  let minutes = time.getMinutes();
  let hours = time.getHours();

  // Create an object with each hand and it's angle in degrees

  
  let hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];

  // Go through each hand and set their angle


  for (let i = 0; i < hands.length; i++) {
    let elements = document.querySelectorAll(`#${hands[i].hand}`);
    for (let j = 0; j < elements.length; j++) {
      elements[j].style.webkitTransform = `rotateZ(${hands[i].angle}deg)`;
      elements[j].style.transform = `rotateZ(${hands[i].angle}deg)`;
      // If this is a minute hand, note the seconds position (to calculate minute position later)
      if (hands[i].hand === 'minutes') {
        elements[j].parentNode.setAttribute('data-second-angle', hands[i + 1].angle);
      }
    }
  }

}


function moveHand(x, y) {
	let xAxis = x;
	let yAxis = y;

  let seconds;
  let minutes;
  let hours;

	let hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2) + (xAxis + yAxis)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6) + (xAxis + yAxis)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6) + (xAxis + yAxis)
    }
  ];

  // Go through each hand and set their angle


  for (let i = 0; i < hands.length; i++) {
    let elements = document.querySelectorAll(`#${hands[i].hand}`);
    for (let j = 0; j < elements.length; j++) {
      elements[j].style.webkitTransform = `rotateZ(${hands[i].angle}deg)`;
      elements[j].style.transform = `rotateZ(${hands[i].angle}deg)`;
      // If this is a minute hand, note the seconds position (to calculate minute position later)
      if (hands[i].hand === 'minutes') {
        elements[j].parentNode.setAttribute('data-second-angle', hands[i + 1].angle);
      }
    }
  }
}


// var min = document.getElementById('minutes');
// var hour = document.getElementById('hours');

// var movingElem = null;


// function mouseDown(e) {
// 	movingElem = e.target;
// }
// function mouseUp(e) {
// 	movingElem = null;
// }
// function mouseMove(e) {
//   if (movingElem) {
//     // get mouse coords in the svg coordinate system and
//     // calculate angle in relation to the mid-point (50, 50)
//     // more info: https://developer.mozilla.org/en/docs/Web/API/SVGMatrix
// 	  var vwp = movingElem.nearestViewportElement,
// 		    ctm = vwp.getScreenCTM(),
//         pnt = vwp.createSVGPoint();
// 		  pnt.x = e.clientX;
// 			pnt.y = e.clientY;
//     var loc = pnt.matrixTransform(ctm.inverse());
// 		var deg = 90 - Math.atan2(50 - loc.y, loc.x - 50) * 180 / Math.PI;
// 		movingElem.setAttribute('transform', 'rotate(' + deg + ' 50 50)');
//   }
// }

// min.addEventListener('mousedown', mouseDown, false);
// hour.addEventListener('mousedown', mouseDown, false);
// document.addEventListener('mouseup', mouseUp, false);
// document.addEventListener('mousemove', mouseMove, false);


