/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of setup
*/
function setup() {
    createCanvas(500,500); // defining the setup function, instructions
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    parallels(100,100,5,1,100,1);
    parallels(50,50,10,2,20,3);
    parallels(200,200,15,7,3,12);
    parallels(5,412,20,0.5,300,87);
}

function parallels(x,y, numLines, lineWidth, lineHeight, lineSpacing) {
    for(let i = 0; i < numLines; i++) {
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(x,y,lineWidth,lineHeight);
        x = x + lineSpacing;
    }
}