/**
 * Love, Actually
 * Kimberley Maurer
 * 
 */

"use strict";

let circle1 = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3,
    fill: {
        r: 223, 
        g: 82, 
        b: 134
    }
};

let circle2 = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3,
    fill: {
        r: 115, 
        g: 215, 
        b: 255
    }
}

let state = `title`; // states are : title, simulation, love, heartbreak, lessonLearned

function setup() {
    // creating the canvas and setting up the circles
    createCanvas(windowWidth, windowHeight);

    setupCircles();
}

function setupCircles() {
    // position of the two circles
    circle1.x = width/3;
    circle2.x = 2 * width/3;

    // movement of the circle the user is chasing
    circle2.vx = random(-circle2.speed, circle2.speed);
    circle2.vy = random(-circle2.speed, circle2.speed);
}

function draw() {
    background(0);
    // creating the states
    if(state === `title`) {
        title();
    }
    else if(state === `simulation`) {
        simulation();
    }
    else if(state === `love`) {
        love();
    }
    else if(state === `heartbreak`) {
        heartbreak();
    }
    else if(state === `lessonLearned`) {
        lessonLearned();
    }
    
}

function title() {
    // text for the title screen
    push();
    textSize(65);
    fill(150,123,182);
    textAlign(CENTER,CENTER);
    textFont(`Times New Roman`);
    text(`will you save your relationship?`, width/2, height/2);
    pop();
}

function simulation() {
    // everything needed to be called thorughout the game
    move();
    controlUser()
    checkOffScreen();
    loveOffScreen();
    checkOverlap();
    display();
}

function love() {
    // text for the subjectively "good" ending - the two lovers find one another
    push();
    textSize(60);
    fill(248,200,220);
    textAlign(CENTER,CENTER);
    textFont(`Times New Roman`);
    text(`you guys worked things out and are \nhappier than ever <3`, width/2, height/2);
    pop();
}

function heartbreak() {
    // text for the subjectively "bad" ending - the user cannot catch her lover
    push();
    textSize(65);
    fill(0,0,255);
    textAlign(CENTER,CENTER);
    textFont(`Times New Roman`);
    text(`you loved him more than he \ncould ever love you :(`, width/2, height/2);
    pop();
}

function lessonLearned() {
    // text for the easter egg ending! the user goes out of bounds and leaves the relationship
    push();
    background(255);
    textSize(60);
    fill(0);
    textAlign(CENTER,CENTER);
    textFont(`Times New Roman`);
    text(`good for you for leaving while you had the chance.\nyou will be okay, player`, width/2, height/2);
    
}

function move() {
    // movement of random circle
    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;
}

function checkOffScreen() {
    // check if the random lover is off the screen 
    if(circle2.x < 0 || circle2.y < 0 ||circle2.y > height || circle2.x > width) {
        state = `heartbreak`;
    }
}

function loveOffScreen() {
     // check if user is off the screen
    if (circle1.x < 0 || circle1.y < 0 || circle1.y > height || circle1.x > width) {
        state = `lessonLearned`;
    }
}

function checkOverlap() {
    // check if the lovers overlap
    let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if(d < circle1.size/2 + circle2.size/2) {
        state = `love`;
    }
}

function display() {
    // drawing the user
    push();
    fill(circle1.fill.r, circle1.fill.g, circle1.fill.b); // colours in the user
    ellipse(circle1.x, circle1.y, circle1.size); // draws the circle controlled by the user
    pop();
    
    // drawing the lover
    push();
    fill(circle2.fill.r, circle2.fill.g, circle2.fill.b); // colours in the lover
    ellipse(circle2.x, circle2.y, circle2.size); // draws the circle the user is chasing after
    pop();
}

function controlUser() {
    if(keyIsDown(87)) {     // move up using the W key
        circle1.vy = -circle1.speed;
    }
    else if (keyIsDown(83)) {   // move down using the S key
        circle1.vy = circle1.speed;
    }
    else {
        circle1.vy = 0;
    }

    if(keyIsDown(68)) {     // move right using the D key
        circle1.vx = circle1.speed;
    }
    else if(keyIsDown(65)) {    // move left using the A key
        circle1.vx = -circle1.speed;
    }
    else {
        circle1.vx = 0;
    }
    circle1.x += circle1.vx;
    circle1.y += circle1.vy;

}

function mousePressed() {
    // when the user clicks anywhere on the title screen, the game begins
    if(state === `title`) {
        state = `simulation`;
    }
}