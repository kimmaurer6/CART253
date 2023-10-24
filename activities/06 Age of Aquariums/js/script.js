/**
 * Title of Project
 * Kimberley Maurer
 * 
 */

"use strict";

let user = {
    x: undefined,
    y: undefined,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 4,
    fill: 255
}

let school = [];    // create an empty array and assign it to the school variable
let imgButterfly;
let imgCatcher;

function preload(){
    imgButterfly = loadImage(`assets/images/butterfly.png`)
    imgCatcher = loadImage(`assets/images/catchingbutterfly.png`)
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    school[0] = createButterfly(random(0, width), random(0, height));
    school[1] = createButterfly(random(0, width), random(0, height));
    school[2] = createButterfly(random(0, width), random(0, height));
    school[3] = createButterfly(random(0, width), random(0, height));
    school[4] = createButterfly(random(0, width), random(0, height));
    school[5] = createButterfly(random(0, width), random(0, height));
    school[6] = createButterfly(random(0, width), random(0, height));
    school[7] = createButterfly(random(0, width), random(0, height));
    school[8] = createButterfly(random(0, width), random(0, height));
    school[9] = createButterfly(random(0, width), random(0, height));
    school[10] = createButterfly(random(0, width), random(0, height));
    school[11] = createButterfly(random(0, width), random(0, height));
    school[12] = createButterfly(random(0, width), random(0, height));


    // setting the x and y of the user
    user.x = 50;
    user.y = windowHeight/2;
}

function createButterfly(x,y){
    // creating the butterflies
    let butterfly = {
        x: x,
        y: y,
        size: 50,
        vx: 0,
        vy: 0,
        speed: 2
    };
    return butterfly;
}

function draw() {
    background(0, 0, 139);

    for(let i = 0; i < 12; i++){
        moveButterfly(school[i]);
        displayButterfly(school[i]);
}

user.x = constrain(user.x, 0, windowWidth);
user.y = constrain(user.y, 0, windowHeight);
}

function simulation(){
    background(0, 0, 139);

    // everything to be called
    moveButterfly();
    displayButterfly();
    displayUser();
    controlUser();
}
function moveButterfly(butterfly){
    //choose whether to change direction
    let change = random(0,1);
    if(change < 0.05){
        butterfly.vx = random(-butterfly.speed, butterfly.speed);
        butterfly.vy = random(-butterfly.speed, butterfly.speed);
    }
    // move the butterfly
butterfly.x = butterfly.x + butterfly.vx;
butterfly.y = butterfly.y + butterfly.vy;

// constrain the butterfly to the canvas
butterfly.x = constrain(butterfly.x, 0, width);
butterfly.y = constrain(butterfly.y, 0, height);
}

// displayButterfly(butterfly)
// displays the provided butterfly on the canvas
function displayButterfly(butterfly){
    push();
    image(imgButterfly, butterfly.x, butterfly.y, butterfly.size/1.5, butterfly.size/1.5);
    pop();
}

function displayUser(){
    push();
    image(imgCatcher, user.x, user.y, user.size/1.5, user.size/1.5);
    pop();
}

function controlUser(){
    if(keyIsDown(87)){
        user.vy = -user.speed;
    }
    else if(keyIsDown(83)){
        user.vy = user.speed;
    }

    if(keyIsDown(68)){
        user.vx = user.speed;
    }
    else if(keyIsDown(65)){
        user.vx = -user.speed;
    }
    user.x += user.vx;
    user.y += user.vy;
}