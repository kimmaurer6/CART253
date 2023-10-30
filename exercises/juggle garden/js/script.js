/**
 * Juggle Garden
 * Kimberley Maurer
 * 
 */

"use strict";

let gravityForce = 0.0025;

let leaves = [];
let numLeaves = 13;

let imgLeaf;
let imgBin;

function preload(){
    // imgLeaves = loadImage(`assets/images/bin.png`);
    imgBin = loadImage(`assets/images/bin.png`);
    imgLeaf = loadImage(`assets/images/leaf.png`);
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    // leaves = new Leaves(x,y);
    // imgLeaves = new Leaves;

    bin = new Bin(300,200);
    leaves = new Leaves(x,y);
}


/**
 * Description of draw()
*/
function draw() {
    background(112, 40, 34);

    bin.move();
    bin.display();

    for(let i = 0; i < leaves.length; i++){
        let leaf = leaves[i]
        if(leaf.active){
            leaf.gravity(gravityForce);
            leaf.move();
            leaf.bounce(bin);
            leaf.display();
        }
    }
}