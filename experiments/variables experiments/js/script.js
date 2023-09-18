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
    fill: 
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

    circle.x = circle.x + circle.speed;

    fill(circle.fill);
    ellipse(circle.x, circle.y, circle.size);
}