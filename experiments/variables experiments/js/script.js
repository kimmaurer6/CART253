/**
 * Variables Experiment
 * Kimberley Maurer
 * 
 * 
 * playing around with variables
 */

"use strict";

let backgroundShade = 0;
let circleX = 0;
let circleY = 250;
let circleSize = 200;
let circleSpeed = 2;
let circleAcceleration = 0.25;


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
    circleX += circleSpeed;
    circleSpeed = circleSpeed + circleAcceleration;
    ellipse(circleX,circleY,circleSize);
}