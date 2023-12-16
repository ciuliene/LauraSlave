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
        } else {
            for (let i = 0; i < 40; i++) {
                let x = this.pos.x + this.size * cos(i);
                let y = this.pos.y + this.size * sin(i);
                fill(this.color.r, this.color.g, this.color.b);
                circle(x, y, this.ballExplosionSize);
            }
            this.size += 2;
            this.ballExplosionSize -= 0.2;
            if (this.ballExplosionSize <= 0) {
                this.destroyed = true;
            }
        }
    }

    run() { }

    isClicked() {
        let score = 0;
        if (this.destroyed || this.explosion) {
            return 0;
        }

        let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
        if (d < this.size / 2) {
            score = parseInt(this.size);
            this.size -= 10;
            this.explosion = true;
        }

        return score;
    }
}