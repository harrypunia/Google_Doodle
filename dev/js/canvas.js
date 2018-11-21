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
        for (let j = 0; j < higgs.length; j++) {
            if (pG[i].enter(higgs[j])) {
                pG[i].resetPos(pointsG[i].x, pointsG[i].y);
            };
        }
    }
    for (let i = 0; i < pO.length; i++) {
        fill(219, 68, 55, 60);
        noStroke();
        pO[i].init();
        pO[i].bosson();
        for (let j = 0; j < higgs.length; j++) {
            if (pO[i].enter(higgs[j])) {
                pO[i].resetPos(pointsO[i].x, pointsO[i].y);
            };
        }
    }
    for (let i = 0; i < pO2.length; i++) {
        fill(244, 160, 0, 60);
        noStroke();
        pO2[i].init();
        pO2[i].bosson();
        for (let j = 0; j < higgs.length; j++) {
            if (pO2[i].enter(higgs[j])) {
                pO2[i].resetPos(pointsO2[i].x, pointsO2[i].y);
            };
        }
    }
    for (let i = 0; i < pG2.length; i++) {
        fill(255, 105, 185, 60);
        noStroke();
        pG2[i].init();
        pG2[i].bosson();
        for (let j = 0; j < higgs.length; j++) {
            if (pG2[i].enter(higgs[j])) {
                pG2[i].resetPos(pointsG2[i].x, pointsG2[i].y);
            };
        }
    }
    for (let i = 0; i < pL.length; i++) {
        fill(15, 157, 88, 60);
        noStroke();
        pL[i].init();
        pL[i].bosson();
        for (let j = 0; j < higgs.length; j++) {
            if (pL[i].enter(higgs[j])) {
                pL[i].resetPos(pointsL[i].x, pointsL[i].y);
            };
        }
    }
    for (let i = 0; i < pE.length; i++) {
        fill(244, 160, 0, 60);
        noStroke();
        pE[i].init();
        pE[i].bosson();
        for (let j = 0; j < higgs.length; j++) {
            if (pE[i].enter(higgs[j])) {
                pE[i].resetPos(pointsE[i].x, pointsE[i].y);
            };
        }
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
    noStroke();
    fill(255, 50);
    for (let i = 0; i < higgs.length; i++) {
        higgs[i].show(mouseX, mouseY);
        higgs[i].expand(0.5, 30);
    }
}

function mousePressed() {
    explode = true;
}
