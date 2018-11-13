var Particle = function (x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(Math.random() / 4 - Math.random() / 8, Math.random() / 4 - Math.random() / 8);
    this.acc = createVector(0, 0);
    this.r = r;
    this.mass = this.r * 2;

    this.init = () => {
        fill(255, 255, 255, 60);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }

    this.update = () => {
        this.boundry();

        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
    }

    this.applyForce = (force) => {
        this.acc.add(force);
    }

    this.boundry = function () {
        this.pos.x < this.r ? (this.pos.x = this.r, this.vel.x *= -1) : this.pos.x > (doodle.offsetWidth - this.r) ? (this.pos.x = (doodle.offsetWidth - this.r), this.vel.x *= -1) : 0;
        this.pos.y < this.r ? (this.pos.y = this.r, this.vel.y *= -1) : this.pos.y > (doodle.offsetHeight - this.r) ? (this.pos.y = (doodle.offsetHeight - this.r), this.vel.y *= -1) : 0;
    }

    this.gravity = function (o) {}
}
