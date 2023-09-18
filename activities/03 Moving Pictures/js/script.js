/**
 * 03 Moving Picture    
 * Kimberley Maurer
 * 
 * Moving pictures activity
 * 
 */

"use strict";

let bg = {
    r: 0,
    g: 0,
    b: 0
};

let circle1 = {
    x: 0,
    y: 250,
    size: 100,
    growthRate: 1,
    speed: 1,
    fill: 255,
    alpha: 200
};

let circle2 = {
    x: 500,
    y: 250,
    size: 75,
    sizeRatio: 0.75,
    speed: -1,
    fill: 255,
    alpha: 200
};

/**
 * creating the canvas
*/
function setup() {
    createCanvas(500,500);
    noStroke();
}


/**
 * drawing the circles and their functions
*/
function draw() {
    // background
    background(bg.r,bg.b,bg.g);
    bg.r = map(circle1.size,100,width,0,255);

    // left circle
    circle1.x = circle1.x + circle1.speed;
    circle1.x = constrain(circle1.x,0,width/2);
    circle1.size = circle1.size + circle1.growthRate;
    circle1.size = constrain(circle1.size,0,width);
    fill(circle1.fill,circle1.alpha);
    ellipse(circle1.x,circle1.y,circle1.size);

    // right circle
    circle2.x = circle2.x + circle2.speed;
    circle2.x = constrain(circle2.x,width/2,width);
    circle2.size = circle1.size * circle2.sizeRatio;
    fill(circle2.fill,circle2.alpha);
    ellipse(circle2.x,circle2.y,circle2.size);
}