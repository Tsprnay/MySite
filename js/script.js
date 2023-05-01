function getRandomPosition(rectangle, size) {
  const edge = Math.floor(Math.random() * 4);
  const max_x = rectangle.clientWidth - size;
  const max_y = rectangle.clientHeight - size;
  const offset = size * 2;

  switch (edge) {
    case 0:
      return {
        x: Math.floor(Math.random() * max_x),
        y: -offset,
      };
    case 1:
      return {
        x: rectangle.clientWidth + offset,
        y: Math.floor(Math.random() * max_y),
      };
    case 2:
      return {
        x: Math.floor(Math.random() * max_x),
        y: rectangle.clientHeight + offset,
      };
    case 3:
    default:
      return {
        x: -offset,
        y: Math.floor(Math.random() * max_y),
      };
  }
}

function createRandomCircle(rectangleElement) {
  const rectangle = rectangleElement;
  const circle = document.createElement("div");
  const size = Math.floor(Math.random() * 100) + 10;
  const position = getRandomPosition(rectangle, size);
  const duration = 5 + Math.random() * 5;
  const finalPosition = getRandomPosition(rectangle, size);

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = `${position.x}px`;
  circle.style.top = `${position.y}px`;
  circle.style.backgroundColor = "rgba(255, 0, 255, 1)";
  circle.style.position = "absolute";
  circle.style.borderRadius = "50%";
  circle.style.filter = "blur(50px)";
  circle.style.zIndex = "-1";

  const animation = circle.animate(
    [
      { left: `${position.x}px`, top: `${position.y}px` },
      { left: `${finalPosition.x}px`, top: `${finalPosition.y}px` },
    ],
    {
      duration: duration * 1000,
      iterations: 1,
      easing: "linear",
    }
  );

  animation.onfinish = () => {
    circle.remove();
    createRandomCircle(rectangleElement);
  };

  rectangle.appendChild(circle);
}

function createRandomCircles(rectangleElement) {
  const numberOfCircles = Math.floor(Math.random() * 10) + 1;

  for (let i = 0; i < numberOfCircles; i++) {
    createRandomCircle(rectangleElement);
  }
}

const rectangleElement = document.querySelector(".rectangle");
const spotifyPlayerElement = document.querySelector(".spotifyplayer");
const rectangle2Element = document.querySelector(".rectangle-right");

createRandomCircles(rectangleElement);
createRandomCircles(spotifyPlayerElement);
createRandomCircles(rectangle2Element);

document.addEventListener("DOMContentLoaded", function () {
  const videoFiles = [
    "media/video1.mp4",
    "media/video2.mp4",
    "media/video3.mp4",
  ];

  const randomIndex = Math.floor(Math.random() * videoFiles.length);
  const randomVideoFile = videoFiles[randomIndex];

  const videoElement = document.querySelector(".background-video video");
  const sourceElement = document.createElement("source");

  sourceElement.setAttribute("src", randomVideoFile);
  sourceElement.setAttribute("type", "video/mp4");

  videoElement.appendChild(sourceElement);
  videoElement.load();
});

const expandButton = document.getElementById('expand-button');
const arrow = expandButton.querySelector('.arrow');
const container = document.querySelector('.container');
const rectangleRight = document.querySelector('.rectangle-right');
const rectangleButton = document.querySelector('.rectangle-button');

let expanded = false;

expandButton.addEventListener('click', () => {
  expanded = !expanded;
  arrow.classList.toggle('rotate');
  container.classList.toggle('move-left');
  rectangleRight.classList.toggle('show');
  rectangleButton.classList.toggle('move-right');
});
