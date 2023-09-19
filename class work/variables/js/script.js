/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let me = {
    x: 0,
    y: 250,
    w: 30,
    h: 70,
    speed: 1
};


/**
 * Description of setup
*/
function setup() {
    createCanvas(500,500);
}


/**
 * Description of draw()
*/
function draw() {
    background(0);
    fill(255);
    rect(me.x,me.y,me.w,me.h);

    
}