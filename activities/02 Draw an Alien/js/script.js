/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(640,480);
    
    background(135,206,235);
    noStroke();

    // Draw the body
    fill(60,179,113);
    ellipse(320,480,300,200);

    // Draw the head
    fill(143,188,143);
    ellipse(320,240,250,450);

    // Draw the eyes
    fill(0);
    ellipse(260,210,60,150);
    ellipse(384,210,60,150);

    // Draw the nostrils
    ellipse(310,300,15,30);
    ellipse(335,300,15,30);

    // Draw the mouth
    stroke(220,90,80);
    strokeWeight(5);
    rectMode(CENTER);
    rect(320,365,110,12);

}


/**
 * Description of draw()
*/
function draw() {

}