class Ball {
    constructor() {
        this.pos = createVector(random(innerWidth), random(innerHeight));
        this.size = 100
        this.color = { r: random(255), g: random(255), b: random(255) };
        this.destroyed = false;
        this.decreaseSpeed = 0.5;
        this.explosion = false;
        this.ballExplosionSize = 5;
    }

    draw() {
        if (!this.explosion) {
            fill(this.color.r, this.color.g, this.color.b);
            circle(this.pos.x, this.pos.y, this.size);
        }
    }

    run() { }

    isClicked() { }
}