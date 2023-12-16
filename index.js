let balls = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);

  for (let ball of balls) {
    ball.draw();
    ball.run();
  }
}