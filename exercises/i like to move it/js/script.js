/**
 * I like to move it!
 * Kimberley Maurer
 * 
 * The first exercise of this class, creating code that allows for movement and
    the changing of variables!
 * 
 */

"use strict";

let bg = {
    r: 152,
    b: 251,
    g: 152
};

let rect1 = {
    x: 100,
    y: 450,
    width: -35,
    height: -140,
    speed: 1.5,
    fill: 0,
    size: 100
};

let rect2 = {
    x: 150,
    y: 50,
    width: 35,
    height: 140,
    speed: 1.5
};

let rect3 = {
    x: 350,
    y: 50,
    width: -35,
    height: 140,
    speed: 0.56
};

let rect4 = {
    x: 400,
    y: 450,
    width: 35,
    height: -140,
    speed: 0.25
};

let circle = {
    x: 250,
    y: 250,
    size: 150,
    fill: 20
}

/**
 * creating a canvas
*/
function setup() {
    createCanvas(500,500);
   
    stroke(128,0,128); // creates the outline colour of the shapes
    strokeWeight(2.5); // thickness of the outlines
};


/**
 * drawing and creating our shapes, colours, and movement!
*/
function draw() {
    // background
    background(bg.r,bg.b,bg.g);
    rect: fill(177,156,217) // colour of the rectangles
    
    // circle
    circle.size = map(mouseY,height,300,100,200);
    ellipse(circle.x,circle.y,circle.size); // draws the circle
    fill(mouseX,248,200,220); // changes the colour of the rectangles based on mouse placement 
  
    // rectangle 1
    rect(rect1.x,rect1.y,rect1.width,rect1.height);
    rect1.x = rect1.x + rect1.speed; // the speed of the rectangle along the x axis
    rect1.x = constrain(rect1.x,0,width); // stops the rectangle from going out of bounds
    
    // rectangle 2
    rect(rect2.x,rect2.y,rect2.width,rect2.height);
    rect2.y = rect2.y + rect2.speed; // the speed of the rectangle along the y axis
    rect2.y = constrain(rect2.y,0,width); // stops the rectangle from going out of bounds (NOT WORKING YET)

    // rectangle 3
    rect(rect3.x,rect3.y,rect3.width,rect3.height);
    rect3.x = rect3.x + rect3.speed; // the speed of the rectangle along the x axis
    rect3.x = constrain(rect3.x,0,width); // stops the rectangle from going out of bounds

    // rectangle 4
    rect(rect4.x,rect4.y,rect4.width,rect4.height);
    rect4.y = rect4.y + rect4.speed; // the speed of the rectangle along the y axis
    rect4.y = constrain(rect4.y,0,width); // stops the rectangle from going out of bounds
};