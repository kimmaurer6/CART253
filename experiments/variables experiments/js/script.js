/**
 * Variables Experiment
 * Kimberley Maurer
 * 
 * 
 * playing around with variables
 */

"use strict";

let backgroundShade = 0;

let circle = {
    x: 250,
    y: 250,
    size: 100,
    speed: 1,
    fill: 0
};

/**
 * creating a canvas
*/
function setup() {
    createCanvas(500,500);
}


/**
 * learning about variables
*/
function draw() {
    background(backgroundShade);

    circle.speed = random(-5,5);
    circle.x = circle.x + circle.speed;
    circle.size = random(10,100)

    circle.fill = random(0,255);
    fill(circle.fill);
    ellipse(circle.x, circle.y, circle.size);

    let randomNumber = random();
    console.log(randomNumber);
}