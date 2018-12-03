var pG = [],
    pO = [],
    pO2 = [],
    pG2 = [],
    pL = [],
    pE = [],
    particles,
    higgs = [],
    radius = 3,
    text,
    explode = false,
    pointsG = [],
    pointsO = [],
    pointsO2 = [],
    pointsG2 = [],
    pointsL = [],
    pointsE = [];

function preload() {
    text = loadFont("../assets/Google/Google_Sans.otf");
}

function setup() {
    var canvas = createCanvas(1000, 400);
    canvas.parent(doodle);
    textLeading(.2);
    pointsG = text.textToPoints('G', 150, 270, 200);
    pointsO = text.textToPoints('o', 311, 270, 200);
    pointsO2 = text.textToPoints('o', 431, 270, 200);
    pointsG2 = text.textToPoints('g', 551, 270, 200);
    pointsL = text.textToPoints('l', 671, 270, 200);
    pointsE = text.textToPoints('e', 711, 270, 200);
    let h = new Higgs(30);
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
    for (let i = 0; i < pG.length; i++) {
        fill(66, 133, 244, 100);
        noStroke();
        pG[i].init();
        pG[i].bosson();
        if (explode) {
            for (let j = 0; j < higgs.length; j++) {
                if (pG[i].enter(higgs[j])) {
                    pG[i].resetPos(pointsG[i].x, pointsG[i].y);
                };
            }
        }
    }
    for (let i = 0; i < pO.length; i++) {
        fill(219, 68, 55, 100);
        noStroke();
        pO[i].init();
        pO[i].bosson();
        if (explode) {
            for (let j = 0; j < higgs.length; j++) {
                if (pO[i].enter(higgs[j])) {
                    pO[i].resetPos(pointsO[i].x, pointsO[i].y);
                };
            }
        }
    }
    for (let i = 0; i < pO2.length; i++) {
        fill(244, 160, 0, 100);
        noStroke();
        pO2[i].init();
        pO2[i].bosson();
        if (explode) {
            for (let j = 0; j < higgs.length; j++) {
                if (pO2[i].enter(higgs[j])) {
                    pO2[i].resetPos(pointsO2[i].x, pointsO2[i].y);
                };
            }
        }
    }
    for (let i = 0; i < pG2.length; i++) {
        fill(66, 133, 244, 100);
        noStroke();
        pG2[i].init();
        pG2[i].bosson();
        if (explode) {
            for (let j = 0; j < higgs.length; j++) {
                if (pG2[i].enter(higgs[j])) {
                    pG2[i].resetPos(pointsG2[i].x, pointsG2[i].y);
                };
            }
        }
    }
    for (let i = 0; i < pL.length; i++) {
        fill(15, 157, 88, 100);
        noStroke();
        pL[i].init();
        pL[i].bosson();
        if (explode) {
            for (let j = 0; j < higgs.length; j++) {
                if (pL[i].enter(higgs[j])) {
                    pL[i].resetPos(pointsL[i].x, pointsL[i].y);
                };
            }
        }
    }
    for (let i = 0; i < pE.length; i++) {
        fill(219, 68, 55, 100);
        noStroke();
        pE[i].init();
        pE[i].bosson();
        if (explode) {
            for (let j = 0; j < higgs.length; j++) {
                if (pE[i].enter(higgs[j])) {
                    pE[i].resetPos(pointsE[i].x, pointsE[i].y);
                };
            }
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
    for (let i = 0; i < higgs.length; i++) {
        noFill();
        stroke(255);
        higgs[i].show(mouseX, mouseY);
    }
    let gComp = pG.every(el => el.hold),
        oComp = pO.every(el => el.hold),
        o2Comp = pO2.every(el => el.hold),
        g2Comp = pG2.every(el => el.hold),
        lComp = pL.every(el => el.hold),
        eComp = pE.every(el => el.hold),
        comp = gComp && oComp && o2Comp && g2Comp && lComp && eComp;
    comp ? resetSketch() : 0;
}

const resetSketch = () => {
    explode = false;
    legend.classList.add('legendIn');
    play.classList.add('playIn');
    banner.classList.add('bannerIn');
    for (let i = 0; i < pG.length; i++) {
        pG[i].hold = false;
    }
    for (let i = 0; i < pO.length; i++) {
        pO[i].hold = false;
    }
    for (let i = 0; i < pO2.length; i++) {
        pO2[i].hold = false;
    }
    for (let i = 0; i < pG2.length; i++) {
        pG2[i].hold = false;
    }
    for (let i = 0; i < pL.length; i++) {
        pL[i].hold = false;
    }
    for (let i = 0; i < pE.length; i++) {
        pE[i].hold = false;
    }
}

play.addEventListener("mousedown", () => {
    explode = true;
    play.innerHTML = '<img src="assets/SVG/replay.svg" />';
    legend.classList.remove('legendIn');
    play.classList.remove('playIn');
    banner.classList.remove('bannerIn');
});
