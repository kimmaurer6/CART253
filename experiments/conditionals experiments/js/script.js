/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let bg = {
    r: 0,
    g: 0,
    b: 0
}

let circle = {
    x: 250,
    y: 250,
    size: 100
};


/**
 * Description of setup
*/
function setup(){
    createCanvas(500,500);
}


/**
 * Description of draw()
*/

function draw() {
  background(bg.r,bg.g,bg.b);


  ellipse(circle.x,circle.y,circle.size);
}

function mousePressed(){
    bg.r = random(0,255);
    bg.g = random(0,255);
    bg.b = random(0,255);
}
    


