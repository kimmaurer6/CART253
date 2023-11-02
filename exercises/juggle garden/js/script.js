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
let numLeaves = 20;

let binImage;
let leafImage; 

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

    bin.display();
    bin.controlPlayer();

    for (let i = 0; i < leaves.length; i++){
        let leaf = leaves[i];
        if(leaf.active){
            leaf.gravity(gravityForce);
            leaf.move();
            catchLeaves(leaf);
            leaf.display();
        }
    }

    text(countLeaves, windowWidth/2, windowHeight/2);
    fill(255);
    textSize(80);
    textFont(`Times New Roman`);
    textAlign(TOP,CENTER);
}

function catchLeaves(leaf){
    if (leaf.y + leaf.size/2 > bin.y &&
    leaf.x < bin.x + bin.size/2 && 
    leaf.x > bin.x - bin.size/2){
        countLeaves = countLeaves + 1; 
        leaf.x = random(0, width);
        leaf.y = random(-400, -100);
    }

    else if (leaf.y >= height){
        leaf.x = random(0, width);
        leaf.y = random(-400, -100);
    }
}