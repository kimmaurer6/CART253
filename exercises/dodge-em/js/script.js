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
    speed: 1,
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

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight);
    background(0,0,90)

    circle1.y = random(0,height);
    circle1.vx = circle1.speed;

    noCursor();
}


/**
 * Description of draw()
*/
function draw() {

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
    // circle2.x = circle2.x + circle2.vx;
    // circle2.y = circle2.y + circle2.vy;

    // if(circle2.y > width){
    //     circle2.y = 0;
    //     circle2.x = random(0,height);
    // };

}