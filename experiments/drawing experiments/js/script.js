/**
 * Drawing Experiments
 * Kim Maurer
 * 
 * Experimenting with p5's colour and drawing function
 * 
 * Currently draws a face on a purple background
 */

"use strict";

/**
 * Does nothing
*/
function preload() {

}


/**
 * Draws a face on the canvas
*/
function setup() {
   createCanvas(500,500);
 
   // Set the background to purple
    background(29,22,59);
    
    // Drawing the head/face
   fill(250,200,200); // Colour of head
   ellipse(250,250,200,200); // Shape of head

   // Drawing the eyes
   fill(0); // Colour
   ellipse(200,250,30,30); // Shape of left eye
   ellipse(300,250,30,30); // Shape of right eye

   // Drawing the mouth
   strokeWeight(10); // Thickness of the mouth
   line(200,300,300,300); // Drawing the mouth
}


/**
 * Description of draw()
 * Does nothing
*/
function draw() {

}