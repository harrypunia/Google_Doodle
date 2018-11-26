var Higgs = function (r) {
    this.r = r;
    this.initR = this.r;
    this.alive = true;
    this.opacity = 100;
    this.x;
    this.y;

    this.show = function (x, y) {
        this.x = x;
        this.y = y;
        //ellipseMode(CENTER);
        //ellipse(x, y, this.r * 2, this.r * 2);
    }
    this.expand = function (rate, max) {
        if (this.r < max) {
            this.opacity -= 2;
            this.r += rate;
        } else {
            this.r = this.initR;
            this.opacity = 100;
        }
    }
}
