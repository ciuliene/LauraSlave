let balls = [];
let topScore = 0;
let score = 0;
let timeLeft = 0;
let speed = 60;
let button;
let isTopScore = false;

function startGame() {
  balls = [];
  score = 0;
  timeLeft = 60;
  speed = 60;
  isTopScore = false;
  button.remove();
}

function drawButton() {
  button = createButton('START NEW GAME');
  button.size(120, 45);
  button.position(30, 105);
  button.mousePressed(startGame);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  drawButton();
}

function draw() {
  background(0);

  fill(255);
  textSize(25);
  text(`Score: ${score}`, 20, 40);

  fill(`${isTopScore ? 'green' : 'red'}`);
  textSize(16);
  text(`Top Score: ${topScore}`, 20, 60);

  fill(255);
  textSize(25);
  text(`Time left: ${timeLeft}`, 20, 90);

  if (timeLeft <= 0) return;

  for (let ball of balls) {
    ball.draw();
    ball.run();
    if (ball.destroyed) {
      balls.splice(balls.indexOf(ball), 1);
    }
  }

  if (frameCount % speed == 0) {
    balls.push(new Ball());
  }

  if (frameCount % 60 === 0) {
    timeLeft--;

    if (timeLeft <= 0) {
      drawButton();
    }

    speed -= 1.5;
    if (speed < 1) {
      speed = 1;
    }
  }
}

function onPress() {
  for (let ball of balls) {
    const newScore = ball.isClicked();
    if (newScore > 0) {
      score += newScore;
    }
  }

  if (score > topScore) {
    isTopScore = true;
    topScore = score;
  }
  return false;
}

function mouseClicked() {
  return onPress();
}

function touchStarted() {
  if (timeLeft <= 0) return;
  return onPress();
}
