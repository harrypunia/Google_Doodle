var Particle = function (x, y, r, type) {
    this.pos = createVector(x, y);
    this.pPos = createVector(0, 0);
    this.vel = createVector((Math.random() * 4) - (Math.random() * 4), (Math.random() * 4) - (Math.random() * 4));
    this.acc = createVector(0, 0);
    this.r = r;
    this.mass = this.r * 2;
    let angle = 0;

    this.init = () => {
        if (type == 'real') {
            fill(255, 105, 185, 60);
        } else {
            fill(255, 255, 255, 10);
        }
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }
    this.bosson = function () {
        stroke(255, 10, 10, 90);
        ellipse(this.pPos.x, this.pPos.y, this.r / 2, this.r / 2);
    }
    this.update = () => {
        this.boundryOpen();
        this.pos.add(this.vel);
        this.pPos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
        this.wave();
    }

    this.applyForce = (force) => {
        this.acc.add(force);
    }
    this.boundry = function () {
        this.pos.x < this.r ? (this.pos.x = this.r, this.vel.x *= -1) : this.pos.x > (doodle.offsetWidth - this.r) ? (this.pos.x = (doodle.offsetWidth - this.r), this.vel.x *= -1) : 0;
        this.pos.y < this.r ? (this.pos.y = this.r, this.vel.y *= -1) : this.pos.y > (doodle.offsetHeight - this.r) ? (this.pos.y = (doodle.offsetHeight - this.r), this.vel.y *= -1) : 0;
    }
    this.boundryOpen = function () {
        this.pos.x < this.r ? this.pos.x = (doodle.offsetWidth - this.r) : this.pos.x > (doodle.offsetWidth - this.r) ? this.pos.x = this.r : 0;
        this.pos.y < this.r ? this.pos.y = (doodle.offsetHeight - this.r) : this.pos.y > (doodle.offsetHeight - this.r) ? this.pos.y = this.r : 0;
    }
    this.wave = function () {
        let intensity = 20,
            freq = .1;
        angle += freq;
        let waveX = intensity * Math.sin(angle),
            waveY = intensity * Math.cos(angle),
            transverse = createVector(waveX, waveY);
        this.pPos = this.pos.copy();
        this.pPos.add(transverse);
    }
}
