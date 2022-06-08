function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsAngle = (seconds / 60) * 360 + 90;
  const secondHand = document.querySelector(".second-hand");
  secondHand.style.transform = `rotate(${secondsAngle}deg)`;

  const minutes = now.getMinutes();
  const minutesAngle = (minutes / 60) * 360 + 90;
  const minutesHand = document.querySelector(".min-hand");
  minutesHand.style.transform = `rotate(${minutesAngle}deg)`;
  console.log(seconds);

  const hours = now.getHours();
  const hoursAngle = (hours / 12) * 360;
  const hoursHand = document.querySelector(".hour-hand");
  hoursHand.style.transform = `rotate(${hoursAngle}deg)`;
}

setInterval(setDate, 1000);
