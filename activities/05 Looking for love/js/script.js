/**
 * Looking for Love
 * Kimberley Maurer
 */

"use strict";

let circle1 = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3
};

let circle2 = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3
};

let state = `title`; // can be : title, simulation, love, sadness

function setup() {
    createCanvas(windowWidth, windowHeight);
   
    setupCircles();
}


function setupCircles() {
    // position of the circles separated
    circle1.x = width/3;
    circle2.x = 2 * width/3

    // start circles moving a random direction
    circle1.vx = random(-circle1.speed, circle1.speed);
    circle1.vy = random(-circle1.speed, circle1.speed);
    circle2.vx = random(-circle2.speed, circle2.speed);
    circle1.vy = random(-circle2.speed, circle2.speed);
}


function draw() {
    background(0);

    if(state === `title`) {
        title();
    }
    else if(state === `simulation`) {
        simulation();
    }
    else if(state === `love`) {
        love();
    }
    else if(state === `sadness`) {
        sadness();
    }
}

function title() {
    push()
    textSize(64);
    fill(150,123,182);
    textAlign(CENTER,CENTER);
    textFont(`Times New Roman`);
    text(`Will you fall in love?`, width/2, height/2);
    pop();
}

function simulation() {
    move();
    checkOffScreen();
    checkOverlap();
    display();
}

function love() {
    push()
    textSize(64);
    fill(248,200,220);
    textAlign(CENTER,CENTER);
    textFont(`Times New Roman`);
    text(`He loves me!`, width/2, height/2);
    pop();
}

function sadness() {
    push()
    textSize(64);
    fill(0,0,255);
    textAlign(CENTER,CENTER);
    textFont(`Times New Roman`);
    text(`He loves me not`, width/2, height/2);
    pop();
}

function move() {
    // moving circles
    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;

    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;
}

function checkOffScreen() {
     // check if the circles are off the screen
     if(circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.y < 0 || circle2.y > height) {
        state = `sadness`;
    }
}

function checkOverlap() {
    // CHECK if the circle overlap
    let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if(d < circle1.size/2 + circle2.size/2) {
        state = `love`;
    }
}

function display() {
    // drawing the circles
    ellipse(circle1.x, circle1.y, circle1.size);
    ellipse(circle2.x, circle2.y, circle2.size);
}

function mousePressed() {
    if(state === `title`) {
        state = `simulation`;
    }
}