var Particle = function (x, y, r) {
    this.pos = createVector(x, y);
    this.pPos = createVector(0, 0);
    this.vel = createVector((Math.random()) - (Math.random()), (Math.random()) - (Math.random()));
    this.acc = createVector(0, 0);
    this.r = r;
    this.mass = this.r * 2;
    this.hold = false;
    let angle = 0;

    this.init = () => {
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }
    this.bosson = function () {
        fill(255, 24, 24, 90);
        noStroke();
        ellipse(this.pPos.x, this.pPos.y, this.r / 2, this.r / 2);
        this.wave();
    }
    this.update = () => {
        if (!this.hold) {
            this.boundryOpen();
            this.pos.add(this.vel);
            this.pPos.add(this.vel);
            this.vel.add(this.acc);
            this.acc.mult(0);
        }
    }
    this.resetPos = (x, y) => {
        let gravity = createVector(x, y);
        this.pos.x = gravity.x;
        this.pos.y = gravity.y;
        this.hold = true;
    }
    this.enter = field => {
        let gap = this.r + field.r,
            xIntersect = this.pos.x - field.x < gap && this.pos.x - field.x > (-gap),
            yIntersect = this.pos.y - field.y < gap && this.pos.y - field.y > (-gap);
        if (xIntersect && yIntersect) {
            return true;
        } else {
            return false;
        }
    }
    this.resetPhysics = () => {
        this.hold = false;
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
        let intensity = 15,
            freq = .07;
        angle += freq;
        let waveX = intensity * Math.sin(angle),
            waveY = intensity * Math.cos(angle),
            transverse = createVector(waveX, waveY);
        this.pPos = this.pos.copy();
        this.pPos.add(transverse);
    }
}
