function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsAngle = (seconds / 60) * 360 + 90;
  const secondHands = document.querySelector(".second-hand");
  secondHands.style.transform = `rotate(${secondsAngle}deg)`;
  console.log(seconds);
}

setInterval(setDate, 1000);
