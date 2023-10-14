/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
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

let state = `title`; // states are : title, game, saved, caught, foundLove
/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight);
    
    background(135,206,235);
    noStroke();

    setupCircles();
}

function setupCircles(){
    circle1.x = windowWidth/3;
    circle2.x = windowWidth/3;

    circle1.vx = random(-circle1.speed,circle1.speed);
    circle1.vy = random(-circle1.speed,circle1.speed);

    circle2.vx = random(-circle2.speed,circle2.speed);
    circle2.vy = random(-circle2.speed,circle2.speed);
}



/**
 * Description of draw()
*/
function draw() {

    if(state === `title`){
        title();
    }
    else if(state === `game`){
        game();
    }
    else if(state === `saved`){
        saved();
    }
    else if(state === `caught`){
        caught();
    }
    else if(state === `foundLove`){
        foundLove();
    }
}

function title(){
    push();
    textSize(55);
    fill(100,82,86);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`Help Taylor escape the paparazzi and crazy Swifties!`, windowWidth/2, windowHeight/2);
    pop()
}