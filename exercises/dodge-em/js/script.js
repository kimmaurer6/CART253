/**
 * Dodge-em!
 * Kimberley Maurer
 */

"use strict";

let numStatic = 100;

let circle1 = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 4,
    fill: {
        r: 195,
        g: 177,
        b: 225
    }
};

let circle2 = {
    x: 250,
    y: 0,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 1,
    fill: {
        r: 195,
        g: 177,
        b: 225
    }
};

let user = {
    x: 250,
    y: 250,
    size: 100,
    fill: {
        r: 250,
        g: 200,
        b: 152
    }
};

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight);

    circle1.y = random(0,height);
    circle1.vx = circle1.speed;

    noCursor();
}


/**
 * Description of draw()
*/
function draw() {
    background(0,0,90)
    // starry background
    for(let i; i < numStatic; i++);{
        let x = random(0,width);
        let y = random(0,height);
        stroke(255);
        point(x,y);
    };

    // the x circle we're dodging
    push();
    fill(circle1.fill.r, circle1.fill.g, circle1.fill.b);
    noStroke();
    ellipse(circle1.x,circle1.y,circle1.size);
    pop();

    // movement of the x circle we're dodging
    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;

    if(circle1.x > width){
        circle1.x = 0;
        circle1.y = random(0,height);
    }

    // the y circle we're dodging
    push();
    fill(circle2.fill.r, circle2.fill.g, circle2.fill.b);
    noStroke();
    ellipse(circle2.x,circle2.y,circle2.size);
    pop();

   // movement of the y circle we're dodging
    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;

    if(circle2.y > height){
        circle2.y = 0;
        circle2.x = random(0,width);
    };
     
    // show user
    fill(user.fill.r, user.fill.g, user.fill.b);
    noStroke();
    ellipse(user.x,user.y,user.size);

    // getting caught by the x circle! 
    let d1 = dist(user.x,user.y,circle1.x,circle1.y);
    if(d1 < circle1.size/2 + user.size/2){
        noLoop();
    };

    // getting caught by the y circle! 
    let d2 = dist(user.x,user.y,circle2.x,circle2.y);
    if(d2 < circle2.size/2 + user.size/2){
        noLoop();
    };
}

function mouseDragged(){
   // controlling the user by dragging the mouse
    user.x = mouseX;
    user.y = mouseY;
}
