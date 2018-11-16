var doodle = document.getElementsByClassName('doodle')[0],
    p = [],
    dummyP = [],
    higgs = [],
    population = 20,
    radius = 4,
    timer = 0;

function setup() {
    var canvas = createCanvas(1500, 600);
    canvas.parent(doodle);
    setTimeout(() => {
        let h = new Higgs(5);
        higgs.push(h);
        for (let i = 0; i < population; i++) {
            p[i] = new Particle(doodle.offsetWidth / 2, doodle.offsetHeight / 2, radius, 'real');
        }
        for (let i = 0; i < population; i++) {
            dummyP[i] = new Particle(doodle.offsetWidth / 2, doodle.offsetHeight / 2, radius / 2, 'dummy');
        }
    }, 1000);
}

function draw() {
    angleMode(DEGREES);
    background(0, 0, 0, 10);
    for (let i = 0; i < p.length; i++) {
        p[i].update();
        p[i].init();
        p[i].bosson();
    }

    for (let i = 0; i < p.length; i++) {
        dummyP[i].update();
        dummyP[i].init();
    }
    for (let i = 0; i < higgs.length; i++) {
        higgs[i].show(mouseX, mouseY);
        higgs[i].expand(0.5, 30);
    }
}
