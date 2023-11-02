/**
 * Juggle Garden
 * Kimberley Maurer
 * 
 */


"use strict";

let countLeaves = 0;
let gravityForce = 0.0025;

let bin;
let leaf;

let leaves = [];
let numLeaves = 50;

let binImage;
let leafImage; 

let state = `title`

function preload(){
    binImage = loadImage(`assets/images/bin.png`);
    leafImage = loadImage(`assets/images/leaf.png`);
}


function setup() {
    createCanvas(windowWidth, windowHeight);

    bin = new Bin(300,20);
    bin.image = binImage;

    for(let i = 0; i < numLeaves; i++) {
        let x = random(0, width);
        let y = random(-400, -100);
        let leaf = new Leaves (x, y);
        leaves.push(leaf);
    }
}


function draw() {
    background(112, 40, 34);

    if(state === `title`) {
        title();
    }
    else if( state === `game`){
        game();
        bin.display();
        bin.controlPlayer();
    }
    else if(state === `win`){
        win();
    }
    else if(state === `lose`){
        lose();
    }
}


function catchLeaves(leaf){
  
    if(leaf.y + leaf.size / 2 > bin.y &&
        leaf.x < bin.x + bin.width &&
        leaf.x > bin.x ){
            console.log(`nwor`)
            if(numLeaves  <15){
                state = `lose`;
                numLeaves--;
            }
        else { 
            countLeaves = countLeaves + 1;
            if(countLeaves === 15){
                state = `win`;
            }
            leaf.x = random(0, width);
            leaf.y = random(-400, -100)
        }
     }
        else if(leaf.y >= height){
            leaf.x = random(0, width);
            leaf.y = random(-400, -100);
          //  state = `game`;
        }
}

function title(){
    background(200,217,240);
    noStroke();

    // text for title screen
    push();
    textSize(55);
    fill(0);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`catch 15 leaves to win!`, windowWidth / 2, windowHeight / 2)
    pop();
}
   
function game(){
    for (let i = 0; i < leaves.length; i++){

        let leaf = leaves[i];
        if(leaf.active){
            leaf.gravity(gravityForce);
            leaf.move();
            catchLeaves(leaf);
            leaf.display();
        }
    }

push();
    text(countLeaves, windowWidth/2, windowHeight/2);
    fill(255);
    textAlign(LEFT, TOP)
    textSize(80);
    textFont(`Times New Roman`);
    pop();
}

function win(){
    background(47, 87, 47);
    noStroke();

    // text for win screen
    push();
    textSize(55);
    fill(0);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`you caught all of the leaves needed!`, windowWidth / 2, windowHeight / 2);
    pop();
}

function lose(){
    background(105, 105, 105);
    noStroke();

    // text for lose screen
    push();
    textSize(55);
    fill(0);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`you did not catch enough leaves :(`, windowWidth / 2, windowHeight / 2);
    pop();
}

function mousePressed(){
        // when the mouse is pressed, switches from the title screen, timer begins
        if (state === 'title') {
            state = `game`;
        }
}