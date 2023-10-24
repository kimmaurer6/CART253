/**
 * Catch the Butterflies!
 * Kimberley Maurer
 * 
 */

"use strict";

let player = {
    x: undefined,
    y: undefined,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 4,
}

let startTime = undefined;
let duration = 21000;

// empty array that is assigned to the "school" variable
let school = [];    // create an empty array and assign it to the school variable
let schoolSize = 14;
let state = `title` // possible states are game, win, lose

let imgButterfly;
let imgCatcher;

function preload() {
    imgButterfly = loadImage(`assets/images/butterfly.png`);
    imgCatcher = loadImage(`assets/images/catchingbutterfly.png`);
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < schoolSize; i++) {
        school.push(createButterfly(random(0, width), random(0, height)));
    }
    // school[0] = createButterfly(random(0, width), random(0, height));
    // school[1] = createButterfly(random(0, width), random(0, height));
    // school[2] = createButterfly(random(0, width), random(0, height));
    // school[3] = createButterfly(random(0, width), random(0, height));
    // school[4] = createButterfly(random(0, width), random(0, height));
    // school[5] = createButterfly(random(0, width), random(0, height));
    // school[6] = createButterfly(random(0, width), random(0, height));
    // school[7] = createButterfly(random(0, width), random(0, height));
    // school[8] = createButterfly(random(0, width), random(0, height));
    // school[9] = createButterfly(random(0, width), random(0, height));
    // school[10] = createButterfly(random(0, width), random(0, height));
    // school[11] = createButterfly(random(0, width), random(0, height));
    // school[12] = createButterfly(random(0, width), random(0, height));

    // setting the x and y of the player
    player.x = windowWidth / 2;
    player.y = windowHeight / 2;

    setTimeout(checkGameOver, 2000);
}


function createButterfly(x, y) {
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
    background(166, 199, 231);
    noStroke();

    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
    else if (state === `win`) {
        win();
    }
    else if (state === `lose`) {
        lose();
    }


    player.x = constrain(player.x, 0, width);
    player.y = constrain(player.y, 0, height);


    let elapsed = millis() - startTime;
}

function title() {
    push()
    background(255)

    textSize(55);
    fill(0);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`Capture the butterflies in 30 seconds to win!`, windowWidth / 2, windowHeight / 2);
    pop()
}

function simulation() {
    background(166, 199, 231);

    displayPlayer();
    controlPlayer();
    catchButterfly();



    for (let i = 0; i < school.length; i++) {
        moveButterfly(school[i]);
        displayButterfly(school[i]);
    }

    if (school.length === 0) {
        state = `win`;
    }


    let elapsed = millis() - startTime;

    textFont(`Times New Roman`);
    textSize(40);
    textAlign(LEFT, TOP);
    text(floor(elapsed / 1000), 0, 0);
    if (elapsed > duration) {
        state = `lose`;
    }
}

function win() {
    background(193, 225, 193);
    noStroke();

    // text for win ending
    push();
    textSize(55);
    fill(0);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`You win!`, windowWidth / 2, windowHeight / 2);
    pop();

}

function lose() {
    background(100, 82, 86);
    noStroke();

    // text for lose ending
    push();
    textSize(55);
    fill(0);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`You lose :(`, windowWidth / 2, windowHeight / 2);
    pop();
}

function moveButterfly(butterfly) {
    //choose whether to change direction
    let change = random(0, 1);
    if (change < 0.05) {
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

// display Butterfly(butterfly)
// displays the provided butterfly on the canvas
function displayButterfly(butterfly) {
    push();
    image(imgButterfly, butterfly.x, butterfly.y, butterfly.size / 1.5, butterfly.size / 1.5);
    pop();
}


// displays the player
function displayPlayer() {
    push();
    image(imgCatcher, player.x, player.y, player.size / 1.5, player.size);
    pop();
}

function catchButterfly() {
    for (let i = 0; i < school.length; i++) {
        let butterfly = school[i];
        let d = dist(player.x, player.y, butterfly.x, butterfly.y);
        if (d < butterfly.size / 2 + player.size / 2) {
            school.splice(i, 1);
        }
    }
    for (let i = 0; i < school.length; i++) {
        let butterfly = school[i];
    }
}

function controlPlayer() {
    if (keyIsDown(87)) {
        player.vy = -player.speed;
    }
    else if (keyIsDown(83)) {
        player.vy = player.speed;
    }
    else {
        player.vy = 0;
    }


    if (keyIsDown(68)) {
        player.vx = player.speed;
    }
    else if (keyIsDown(65)) {
        player.vx = -player.speed;
    }
    else {
        player.vx = 0;
    }
    player.x += player.vx;
    player.y += player.vy;
}

function checkGameOver() {
    console.log(`time up`);
}

function mousePressed() {
    if (state === 'title') {
        state = `simulation`;
        startTime = millis();
    }
}