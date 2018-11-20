var doodle = document.getElementsByClassName('doodle')[0],
    pG = [],
    pO = [],
    pO2 = [],
    pG2 = [],
    pL = [],
    pE = [],
    particles,
    higgs = [],
    radius = 4,
    text,
    explode = false,
    pointsG,
    pointsO,
    pointsO2,
    pointsG2,
    pointsL,
    pointsE;

function preload() {
    text = loadFont("../assets/Raleway/Raleway-Thin.ttf");
}

function setup() {
    var canvas = createCanvas(1500, 600);
    canvas.parent(doodle);
    textLeading(.2);
    pointsG = text.textToPoints('G', 250, 350, 250);
    pointsO = text.textToPoints('o', 430, 350, 250);
    pointsO2 = text.textToPoints('o', 580, 350, 250);
    pointsG2 = text.textToPoints('g', 720, 350, 250);
    pointsL = text.textToPoints('l', 870, 350, 250);
    pointsE = text.textToPoints('e', 930, 350, 250);
    let h = new Higgs(5);
    higgs.push(h);
    for (let i = 0; i < pointsG.length; i++) {
        pG[i] = new Particle(pointsG[i].x, pointsG[i].y, radius);
    }
    for (let i = 0; i < pointsO.length; i++) {
        pO[i] = new Particle(pointsO[i].x, pointsO[i].y, radius);
    }
    for (let i = 0; i < pointsO2.length; i++) {
        pO2[i] = new Particle(pointsO2[i].x, pointsO2[i].y, radius);
    }
    for (let i = 0; i < pointsG2.length; i++) {
        pG2[i] = new Particle(pointsG2[i].x, pointsG2[i].y, radius);
    }
    for (let i = 0; i < pointsL.length; i++) {
        pL[i] = new Particle(pointsL[i].x, pointsL[i].y, radius);
    }
    for (let i = 0; i < pointsE.length; i++) {
        pE[i] = new Particle(pointsE[i].x, pointsE[i].y, radius);
    }
}

function draw() {
    strokeWeight(1);
    angleMode(DEGREES);
    background(0, 0, 0, 10);
    fill(66, 133, 244, 60);
    for (let i in pG) {
        pG[i].init();
        pG[i].bosson();
    }
    fill(219, 68, 55, 60);
    for (let i in pO) {
        pO[i].init();
        pO[i].bosson();
    }
    fill(244, 160, 0, 60);
    for (let i in pO2) {
        pO2[i].init();
        pO2[i].bosson();
    }
    fill(255, 105, 185, 60);
    for (let i in pG2) {
        pG2[i].init();
        pG2[i].bosson();
    }
    fill(15, 157, 88, 60);
    for (let i in pL) {
        pL[i].init();
        pL[i].bosson();
    }
    fill(244, 160, 0, 60);
    for (let i in pE) {
        pE[i].init();
        pE[i].bosson();
    }

    if (explode) {
        for (let i in pG) {
            pG[i].update();
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
