var doodle = document.getElementsByClassName('doodle')[0],
    p = [],
    particles,
    higgs = [],
    radius = 4,
    text,
    explode = false,
    points;

function preload() {
    text = loadFont("../assets/Raleway/Raleway-Thin.ttf");
}

function setup() {
    var canvas = createCanvas(1500, 600);
    canvas.parent(doodle);
    textLeading(.2);
    points = text.textToPoints('Google', 350, 350, 250);
    let h = new Higgs(5);
    higgs.push(h);
    for (let i = 0; i < points.length; i++) {
        p[i] = new Particle(points[i].x, points[i].y, radius, 'real');
    }
}

function draw() {
    strokeWeight(1);
    angleMode(DEGREES);
    background(0, 0, 0, 10);
    for (let i in p) {
        p[i].init();
        p[i].bosson();
    }
    if (explode) {
        for (let i in p) {
            p[i].update();
        }
    }

    for (let i = 0; i < higgs.length; i++) {
        higgs[i].show(mouseX, mouseY);
        higgs[i].expand(0.5, 30);
    }
}

function mousePressed() {
    explode = true;
}
