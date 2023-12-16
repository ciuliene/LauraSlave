let balls = [];
let speed = 60;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);

  for (let ball of balls) {
    ball.draw();
    ball.run();
  }

  if (frameCount % speed == 0) {
    balls.push(new Ball());
  }
}