/**
 * Project 2
 * Kimberley Maurer
 * 
 */

"use strict";


let sonic;
let sonicImage;

let sonicTitleImage;
let sonicLevel1Image;
let sonicLevel2Image;
let sonicLevel3Image;

let state = `title`;

function preload() {
    sonicImage = loadImage(`assets/images/sonic.png`);
    sonicTitleImage = loadImage (`assets/images/title-background.png`);
    sonicLevel1Image = loadImage (`assets/images/level1.png`);
    sonicLevel2Image = loadImage (`assets/images/level2.png`);
    sonicLevel3Image = loadImage (`assets/images/level3.png`);
}



function setup() {
    createCanvas(800, 800);
    background(255);
    noStroke();

    sonic = new Sonic(400,100);
    sonic.image = sonicImage;

}

function draw() {
    if(state === `title`){
        title();
    }
    else if (state === `level1`){
        level1();
        sonic.display();
        sonic.controlPlayer();
    }
    else if (state === `level2`){
        level2();
        sonic.display();
        sonic.controlPlayer();
    }
    else if (state === `level 3`){
        level3();
        sonic.display();
        sonic.controlPlayer();
    }
    else if (state === `win`){
        win();
    }
    else if (state === `lose`){
        lose();
    }
}

function title(){
    push();
    image(sonicTitleImage, sonic.x, sonic.y, width, height);
    noStroke();

    // text for title screen
    textSize(50);
    fill(0);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`Help Sonic defeat Dr. Eggman and his army!!`);
    pop();
}

function level1 () {
    push();
    image(sonicLevel1Image);

}

function level2(){
    push();
    image(sonicLevel2Image);

}

function level3(){
    push();
    image(sonicLevel3Image);
}

function lose(){

}

function win(){

}
