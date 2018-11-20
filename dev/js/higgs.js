var Higgs = function (r) {
    this.r = r;
    this.initR = this.r;
    this.alive = true;
    this.opacity = 100;

    this.show = function (x, y) {
        ellipseMode(CENTER);
        ellipse(x, y, this.r * 2, this.r * 2);
    }
    this.expand = function (rate, max) {
        if (this.r < max) {
            stroke(255, 255, 255, this.opacity)
            this.opacity -= 2;
            this.r += rate;
        } else {
            this.r = this.initR;
            this.opacity = 100;
        }
    }
}
