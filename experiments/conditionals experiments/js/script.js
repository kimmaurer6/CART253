/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let angle = 0;
let rectScale = 1;

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
  background(127);

  push();
  fill(255,139,237);
  rectMode(CENTER);
  translate(width/2,height/2)
  rotate(angle);
  scale(rectScale);
  rect(0,0,100,100);
  pop()

  angle = angle +0.1;
  rectScale = rectScale + 0.01;

}

    


