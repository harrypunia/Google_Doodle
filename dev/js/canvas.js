var doodle = document.getElementsByClassName('doodle')[0],
    p = [],
    population = 40,
    radius = 5;

function setup() {
    var canvas = createCanvas(1500, 600);
    canvas.parent(doodle);
    for (let i = 0; i < population; i++) {
        p[i] = new Particle(Math.random() * doodle.offsetWidth, Math.random() * doodle.offsetHeight, radius);
    }
}

function draw() {
    angleMode(DEGREES);
    background(10, 10, 10);
    for (let i = 0; i < p.length; i++) {
        p[i].update();
        p[i].init();
    }
}
