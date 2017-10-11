
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

setClock();