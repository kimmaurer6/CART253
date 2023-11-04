/**
 * Juggle Garden
 * Kimberley Maurer
 * 
 */

"use strict";

let startTime = undefined;
let duration = 10000;

let countLeaves = 0;
let gravityForce = 0.0025;

let bin;
let leaf;
let firework;
let sad;
let ghost;

let leaves = [];
let numLeaves = 50;

let ghosts = [];
let numGhosts = 20;

let binImage;
let leafImage;
let fireworkImage;
let sadImage;
let ghostImage;

let state = `title`

function preload() {
    // all images used in the game
    binImage = loadImage(`assets/images/bin.png`);
    leafImage = loadImage(`assets/images/leaf.png`);
    fireworkImage = loadImage(`assets/images/firework.gif`);
    sadImage = loadImage(`assets/images/sad.gif`);
    ghostImage = loadImage(`assets/images/ghost.png`);
}


function setup() {
    createCanvas(windowWidth, windowHeight);

    // attaching bin to the class
    bin = new Bin(300, 20);
    bin.image = binImage;

    // attaching firework to the clsas
    firework = new Fireworks(0, 0);
    firework.image = fireworkImage;

    // attachin sad face to the class
    sad = new Sad(0, 0);
    sad.image = sadImage;

    // attaching the leaves to the class
    for (let i = 0; i < numLeaves; i++) {
        let x = random(0, width);
        let y = random(-400, -100);
        let leaf = new Leaves(x, y);
        leaves.push(leaf);
    }

    // attaching the ghosts to the class
    for (let i = 0; i < numGhosts; i++) {
        let x = random(0, width);
        let y = random(-400, -100);
        let ghost = new Ghost(x, y);
        ghosts.push(ghost);
    }

    // timer
    // setTimeout(checkGameOver, 10000);

}


function draw() {
    background(112, 40, 34);
    noStroke();
    // the states
    if (state === `title`) {
        title();
    }
    else if (state === `game`) {
        game();
        bin.display();
        bin.controlPlayer();
    }
    else if (state === `win`) {
        win();
        //firework.display();
    }
    else if (state === `lose`) {
        lose();
    }

    // removes cursor from the screen
    noCursor();

    // constrains player to screen
    bin.x = constrain(bin.x, 0, windowWidth);
    bin.x = constrain(bin.x, 0, windowWidth / 1.35)

}


function catchLeaves(leaf) {
    // the overlap to catch the leaves in the bin and add to the counter
    if (leaf.y + leaf.size / 2 > bin.y &&
        leaf.x < bin.x + bin.width &&
        leaf.x > bin.x) {
        countLeaves = countLeaves + 1;

        leaf.x = random(0, width);
        leaf.y = random(-400, -100);
    }

    if (leaf.y >= height) {
        leaf.x = random(0, width);
        leaf.y = random(-400, -100);
    }
}

function catchGhosts(ghost) {
    // the overlap to catch the ghosts in the bin but not add to the counter
    if (ghost.y + ghost.size / 2 > bin.y &&
        ghost.x < bin.x + bin.width &&
        ghost.x > bin.x) {

        ghost.x = random(0, width);
        ghost.y = random(-400, -100);
    }

    if (ghost.y >= height) {
        ghost.x = random(0, width);
        ghost.y = random(-400, -100);
    }

}


function title() {
    push();
    
    background(200, 217, 240);
    noStroke();

  

    // text for title screen
    
    textSize(55);
    fill(0);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`catch at least 51 leaves in 10 seconds to win!\n click to start!`, windowWidth / 2, windowHeight / 2);
    pop();

}

function game() {
    // everything called in the game

    // everything called for the leaves in the game
    for (let i = 0; i < leaves.length; i++) {

        let leaf = leaves[i];
        if (leaf.active) {
            leaf.gravity(gravityForce);
            leaf.move();
            catchLeaves(leaf);
            leaf.display();
        }
    }

    // everything called for the ghosts in the game
    for (let i = 0; i < ghosts.length; i++) {

        let ghost = ghosts[i];
        if (ghost.active) {
            ghost.gravity(gravityForce);
            ghost.move();
            catchGhosts(ghost);
            ghost.display();
        }
    }

    // the leaf counter in the top left
    fill(255);
    textAlign(LEFT, TOP);
    textSize(50);
    text(countLeaves, 0, 0);
    textFont(`Times New Roman`);

    let elapsed = millis() - startTime;

}

function win() {
    background(47, 87, 47);
    noStroke();

    // text for win screen
    push();
    textSize(55);
    fill(0);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`you caught all of the leaves needed!`, windowWidth / 2, windowHeight / 2);
    pop();

    // displaying fireworks on win screen
    firework.display();
}

function lose() {
    background(105, 105, 105);
    noStroke();

    // text for lose screen
    push();
    textSize(55);
    fill(0);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`you did not catch enough leaves :(`, windowWidth / 2, windowHeight / 2);
    pop();

    // displaying sad face on lose screen
    sad.display();
}

function checkGameOver() {
    // checking if the game is over
    if (countLeaves < 50) {
        state = `lose`;
    }

    if (countLeaves > 50) {
        state = `win`;
    }
}


function mousePressed() {
    // when the mouse is pressed, switches from the title screen, timer begins
    if (state === `title`) {
        state = `game`;
        startTime = millis();
    // timer
        setTimeout(checkGameOver, 10000);
    }
}