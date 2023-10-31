/**
 * Juggle Garden
 * Kimberley Maurer
 * 
 */

// "use strict";

// let gravityForce = 0.0025;

// let leaves = [];
// let numLeaves = 13;

// let imgLeaf;
// let imgBin;

// function preload(){
//     // imgLeaves = loadImage(`assets/images/bin.png`);
//     imgBin = loadImage(`assets/images/bin.png`);
//     imgLeaf = loadImage(`assets/images/leaf.png`);
// }

// function setup() {
//     createCanvas(windowWidth, windowHeight);

//     // leaves = new Leaves(x,y);
//     // imgLeaves = new Leaves;

//     bin = new Bin(300,200);
//     leaves = new Leaves(x,y);
// }


// /**
//  * Description of draw()
// */
// function draw() {
//     background(112, 40, 34);

//     bin.move();
//     bin.display();

//     for(let i = 0; i < leaves.length; i++){
//         let leaf = leaves[i]
//         if(leaf.active){
//             leaf.gravity(gravityForce);
//             leaf.move();
//             leaf.bounce(bin);
//             leaf.display();
//         }
//     }
// }

"use strict";

let gravityForce = 0.0025;

let bin;

let leaves = [];
let numLeaves = 10;


function setup() {
    createCanvas(windowWidth, windowHeight);

    bin = new Bin(300,20);

    for(let i = 0; i < numLeaves; i++) {
        let x = random(0, width);
        let y = random(-400, -100);
        let leaves = new Leaves (x, y);
        leaves.push(leaves);
    }
}


function draw() {
    background(0);

    bin.move();
    bin.display();

    for (let i = 0; i < leaves.length; i++){
        let leaf = leaves[i];
        if(leaf.active){
            leaf.gravity(gravityForce);
            leaf.move();
            leaf.bounce(paddle);
            leaf.display();
        }
    }
}