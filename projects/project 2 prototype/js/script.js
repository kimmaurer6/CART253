/**
 * Project 2
 * Kimberley Maurer
 * 
 */

"use strict";


let sonic;
let sonicImage;

function preload() {
    sonicImage = loadImage(`assets/images/sonic.png`)
}



function setup() {
    createCanvas(800, 800);
    background(255);

    sonic = new Sonic(400,100);
    sonic.image = sonicImage;

}


/**
 * Description of draw()
*/
function draw() {
    sonic.display();
}