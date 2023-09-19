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
    speed: 0.56
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
    speed: 1.5
};

let circle = {
    x: 250,
    y: 250,
    size: 50,
    fill: 20,
}

let circle2 = {
    x: 0,
    y: 500,
    size: 50,
    growthRate: 1,
    speed: 3
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

   // circle 2
   ellipse(circle2.x,circle2.y,circle2.size);
   circle2.size = circle2.size + circle2.speed;
   circle2.x = circle2.x + 1;
   circle2.y = circle2.y -1
   circle2.y = constrain(circle2.y,0,width); // when the growing circle stops along the y axis
   circle2.x = constrain(circle2.x,0,width); // when the growing circle stops along the x axis
   circle2.size = constrain(circle2.x,0,circle2.y); // when the self-moving circle starts growing and shrinking
   fill(200,387,307); // colour of the circle controlled by the mouse
   
    // circle
    circle.size = map(mouseY,height,200,50,200);
    ellipse(circle.x,circle.y,circle.size); // draws the circle
    fill(mouseX,248,200,220); // changes the colour of the rectangles based on mouse placement 

    circle.x = mouseX // changes the position of the circle along the x axis
    circle.y = mouseY // changes the position of the circle along the y axis

  
    // rectangle 1
    rect(rect1.x,rect1.y,rect1.width,rect1.height);
    rect1.x = rect1.x + rect1.speed; // the speed of the rectangle along the x axis
    rect1.x = constrain(rect1.x,0,width); // stops the rectangle from going out of bounds
    
    if(rect1.x){
        
    }
    
    // rectangle 2
    rect(rect2.x,rect2.y,rect2.width,rect2.height);
    rect2.x = rect2.x - rect2.speed; // the speed of the rectangle along the y axis
    rect2.x = constrain(rect2.x,0,width); // stops the rectangle from going out of bounds (NOT WORKING YET)

    // rectangle 3
    rect(rect3.x,rect3.y,rect3.width,rect3.height);
    rect3.x = rect3.x + rect3.speed; // the speed of the rectangle along the x axis
    rect3.x = constrain(rect3.x,0,width); // stops the rectangle from going out of bounds

    // rectangle 4
    rect(rect4.x,rect4.y,rect4.width,rect4.height);
    rect4.x = rect4.x - rect4.speed; // the speed of the rectangle along the y axis
    rect4.x = constrain(rect4.x,0,width); // stops the rectangle from going out of bounds
};