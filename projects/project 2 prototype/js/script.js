/**
 * Project 2
 * Kimberley Maurer
 * 
 */

"use strict";


let sonic;
let sonicImage;

let bullets = [];
let bullet;
let bulletImage;

let sonicTitleImage;
let sonicLevel1Image;
let sonicLevel2Image;
let sonicLevel3Image;

let state = `title`;

function preload() {
    sonicImage = loadImage(`assets/images/sonic.png`);
    sonicTitleImage = loadImage(`assets/images/title-background.png`);
    sonicLevel1Image = loadImage(`assets/images/level1.png`);
    sonicLevel2Image = loadImage(`assets/images/level2.png`);
    sonicLevel3Image = loadImage(`assets/images/level3.png`);
    bulletImage = loadImage(`assets/images/bullet.png`);
}



function setup() {
    createCanvas(1000, 730);
    image(sonicTitleImage);

    sonic = new Sonic(0, 500);
    sonic.image = sonicImage;

    bullet = new Bullets();
    bullet.image = bulletImage;

}

function draw() {
    if (state === `title`) {
        title();
    }
    else if (state === `level1`) {
        level1();
        sonic.display();
        sonic.controlPlayer();
    }
    else if (state === `level2`) {
        level2();
        sonic.display();
        sonic.controlPlayer();
    }
    else if (state === `level 3`) {
        level3();
        sonic.display();
        sonic.controlPlayer();
    }
    else if (state === `win`) {
        win();
    }
    else if (state === `lose`) {
        lose();
    }

    if (keyIsDown(32)) {
        bullets.push(new Bullets(sonic.x, sonic.y))
    }
    for (let bullet of bullets) {
        bullet.move();
    }

    // let bullet = 100;
    // while(bullet = 1){
    //     bullet = bullet + 1;
    // }
    
    sonic.x = constrain(sonic.x, 0, width / 1.1);
    sonic.y = constrain(sonic.y, height / 1.55, height / 1.14);
}

function title() {
    push();
    image(sonicTitleImage, 0, 0, width, height);
    noStroke();

    // text for title screen
    textSize(50);
    fill(0);
    textAlign(CENTER);
    text(`Help Sonic defeat Dr. Eggman and his army!!`);
    textFont(`Times New Roman`);
    pop();
}

function level1() {
    push();
    image(sonicLevel1Image, 0, 0, width, height);
    pop();

}

function level2() {
    push();
    image(sonicLevel2Image, 0, 0, width, height);

}

function level3() {
    push();
    image(sonicLevel3Image, 0, 0, width, height);
}

function lose() {
    push();

}

function win() {

}

function mousePressed() {
    if (state = `title`) {
        state = `level1`;
    }
}