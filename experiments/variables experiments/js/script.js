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
    x: 0,
    y: 250,
    size: 200,
    speed: 2
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
    ellipse(circle.x, circle.y, circle.size);
}