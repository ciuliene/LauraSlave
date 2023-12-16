let balls = [];
let topScore = 0;
let score = 0;
let speed = 60;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);

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
  return onPress();
}