var doodle = document.getElementsByClassName('doodle')[0],
    pG = [],
    pO = [],
    pO2 = [],
    pG2 = [],
    pL = [],
    pE = [],
    particles,
    higgs = [],
    radius = 5,
    text,
    explode = false,
    pointsG = [],
    pointsO = [],
    pointsO2 = [],
    pointsG2 = [],
    pointsL = [],
    pointsE = [];

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
    for (let j = 0; j < pointsO.length; j++) {
        pO[j] = new Particle(pointsO[j].x, pointsO[j].y, radius);
    }
    for (let k = 0; k < pointsO2.length; k++) {
        pO2[k] = new Particle(pointsO2[k].x, pointsO2[k].y, radius);
    }
    for (let l = 0; l < pointsG2.length; l++) {
        pG2[l] = new Particle(pointsG2[l].x, pointsG2[l].y, radius);
    }
    for (let m = 0; m < pointsL.length; m++) {
        pL[m] = new Particle(pointsL[m].x, pointsL[m].y, radius);
    }
    for (let n = 0; n < pointsE.length; n++) {
        pE[n] = new Particle(pointsE[n].x, pointsE[n].y, radius);
    }
}

function draw() {
    strokeWeight(1);
    angleMode(DEGREES);
    background(0, 0, 0, 10);
    for (let i = 0; i < pointsG.length; i++) {
        fill(66, 133, 244, 60);
        noStroke();
        pG[i].init();
        pG[i].bosson();
    }
    for (let j = 0; j < pO.length; j++) {
        fill(219, 68, 55, 60);
        noStroke();
        pO[j].init();
        pO[j].bosson();
    }
    for (let k = 0; k < pO2.length; k++) {
        fill(244, 160, 0, 60);
        noStroke();
        pO2[k].init();
        pO2[k].bosson();
    }
    for (let l = 0; l < pG2.length; l++) {
        fill(255, 105, 185, 60);
        noStroke();
        pG2[l].init();
        pG2[l].bosson();
    }
    for (let m = 0; m < pL.length; m++) {
        fill(15, 157, 88, 60);
        noStroke();
        pL[m].init();
        pL[m].bosson();
    }
    for (let n = 0; n < pE.length; n++) {
        fill(244, 160, 0, 60);
        noStroke();
        pE[n].init();
        pE[n].bosson();
    }

    if (explode) {
        for (let i in pG) {
            pG[i].update();
        }
        for (let i in pO) {
            pO[i].update();
        }
        for (let i in pO2) {
            pO2[i].update();
        }
        for (let i in pG2) {
            pG2[i].update();
        }
        for (let i in pL) {
            pL[i].update();
        }
        for (let i in pE) {
            pE[i].update();
        }
    }
    noFill();
    stroke(255);
    for (let i = 0; i < higgs.length; i++) {
        higgs[i].show(mouseX, mouseY);
        higgs[i].expand(0.5, 30);
    }
}

function mousePressed() {
    explode = true;
}
