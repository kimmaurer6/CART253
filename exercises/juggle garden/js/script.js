/**
 * Juggle Garden
 * Kimberley Maurer
 * 
 */


"use strict";

let gravityForce = 0.0025;

let bin;

let leaves = [];
let numLeaves = 10;

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

    leaf = new Leaves(width/2, height, leafImage, 50, 50);
   

    for(let i = 0; i < numLeaves; i++) {
        let x = random(0, width);
        let y = random(-400, -100);
        let leaves= new Leaves (x, y);
        leaves.push(leaf);
    }
}


function draw() {
    background(112, 40, 34);

    bin.move();
    bin.display();

    for (let i = 0; i < leaves.length; i++){
        let leaf = leaves[i];
        if(leaf.active){
            leaf.gravity(gravityForce);
            leaf.move();
            leaf.bounce(bin);
            leaf.display();
        }
    }
}
