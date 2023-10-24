/**
 * Title of Project
 * Kimberley Maurer
 * 
 */

"use strict";

let school = [];    // create an empty array and assign it to the school variable

// our fish
// let fish1;
// let fish2;
// let fish3;
// let fish4;

function setup() {
    createCanvas(600,600);

    school[0] = createFish(random(0, width), random(0, height));
    school[1] = createFish(random(0, width), random(0, height));
    school[2] = createFish(random(0, width), random(0, height));
    school[3] = createFish(random(0, width), random(0, height));

}

// createFish(x,y)
// creates a new javascript objects describing a fish and returns it
function createFish(x,y){
    let fish = {
        x: x,
        y: y,
        size: 50,
        vx: 0,
        vy: 0,
        speed: 2
    };
    return fish;
}

function draw() {
    background(0);

    for(let i = 0; i < 4; i++){
        moveFish(school[i]);
        displayFish(school[i]);
}
}

// moveFish(fish)
// chooses whether the providing fish changes direction and moves it
function moveFish(fish){
    //choose whether to change direction
    let change = random(0,1);
    if(change < 0.05){
        fish.vx = random(-fish.speed, fish.speed);
        fish.vy = random(-fish.speed, fish.speed);
    }
    // move the fish
fish.x = fish.x + fish.vx;
fish.y = fish.y + fish.vy;

// constrain the fish to the canvas
fish.x = constrain(fish.x, 0, width);
fish.y = constrain(fish.y, 0, height);
}

// displayFish(fish)
// displays the provided fish on the canvas
function displayFish(fish){
    push();
    fill(200,100,100);
    noStroke();
    ellipse(fish.x, fish.y, fish.size);
    pop();
}