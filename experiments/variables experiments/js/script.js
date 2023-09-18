/**
 * Variables Experiment
 * Kimberley Maurer
 * 
 * 
 * playing around with variables
 */

"use strict";

let backgroundShade = 0;
let circleX = 250;
let circleY = 250;
let circleSize = 200;


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
    ellipse(circleX,circleY,circleSize);
}