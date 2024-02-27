/**
 * Project 1 - Taylor Swift Simulator
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
    speed: 1.5,
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
    speed: 1.5,
    fill: {
        r: 115,
        g: 215,
        b: 255
    }
}

let user = {
    x: undefined,
    y: undefined,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 4,
    fill: 255
}

let home = {
    x: undefined,
    y: 0,
    size: 250
}

let heart = {
    x: undefined,
    y: 0,
    size: 250
}

let state = `title`; // states are : title, game, saved, caught, foundLove

// setting images 
let imgHouse;
let imgHeart;
let imgTaylor;
let imgPaparazzi;
let imgCrazyFan;

function preload() {
    // loads all of the images needed throughout the game
    imgHouse = loadImage(`assets/images/cartoonhouse.png`);
    imgHeart = loadImage(`assets/images/pinkheart.png`);
    imgTaylor = loadImage(`assets/images/taylorswift.png`)
    imgPaparazzi = loadImage(`assets/images/paparazzi.png`)
    imgCrazyFan = loadImage(`assets/images/crazykim.png`)
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    background(135, 206, 235);
    noStroke();

    setupCircles();

    // setting the x and y of the user
    user.x = 50;
    user.y = windowHeight / 2;

    // setting the x and y of the home
    home.x = windowWidth / 2 + home.size / 2;
    home.y = 0;

    // setting the x and y of the heart
    heart.x = windowWidth / 1.15 + heart.size / 2;
    heart.y = windowHeight / 1.3 + heart.size / 2
    noCursor();
    mousePressed();
}

function setupCircles() {

    // starting x locations of the fan and paparazzi
    circle1.x = windowWidth / 3;
    circle2.x = 2 * windowWidth / 3;

    // movement of the fan 
    circle1.vx = random(-circle1.speed, circle1.speed);
    circle1.vy = random(-circle1.speed, circle1.speed);

    // movement of the paparazzi 
    circle2.vx = random(-circle2.speed, circle2.speed);
    circle2.vy = random(-circle2.speed, circle2.speed);


}


function draw() {
    background(135, 206, 235);
    noStroke();

    // states of the game! 
    if (state === `title`) {
        title();
    }
    else if (state === `game`) {
        game();
    }
    else if (state === `saved`) {
        saved();
    }
    else if (state === `caught`) {
        caught();
    }
    else if (state === `foundLove`) {
        foundLove();
    }

    // keeping the moving objects within frame
    circle1.x = constrain(circle1.x, 0, windowWidth);
    circle1.y = constrain(circle1.y, 0, windowHeight);

    circle2.x = constrain(circle2.x, 0, windowWidth);
    circle2.y = constrain(circle2.y, 0, windowHeight);

    user.x = constrain(user.x, 0, windowWidth);
    user.y = constrain(user.y, 0, windowHeight);

}

function title() {
    // background for the title screen
    background(171, 235, 198);
    noStroke();

    // text for the title screen
    push();
    textSize(55);
    fill(100, 82, 86);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`Help Taylor escape the paparazzi and crazy Swiftie!\n Click the screen to begin!`, windowWidth / 2, windowHeight / 2);
    pop()
}

function game() {
    // background for the game
    background(195, 177, 225);

    // non-moving images used during the game
    image(imgHouse, home.x, home.y, 250, 250);
    image(imgHeart, windowWidth / 1.15, windowHeight / 1.3, 150, 150);

    // everything that needs to be called throughout the game
    move();
    controlUser();
    display();
    mousePressed();
    fan();
    paparazzi();
    love()
    house();
}

function saved() {
    // background for the safe ending
    background(174, 214, 241);
    noStroke();

    // text for the safe ending
    push();
    textSize(55);
    fill(93, 109, 126);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`You saved Taylor! :D\n "i know places we won't be found"\n - i know places`, windowWidth / 2, windowHeight / 2);
    pop();
}

function caught() {
    // background for the bad ending
    background(211, 211, 211);

    // text for the bad ending
    push();
    textSize(55);
    fill(128, 0, 0);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`Taylor has been caught!:(\n"i can go anywhere i want, just not home"\n - my tears ricochet`, windowWidth / 2, windowHeight / 2)
    pop();
}

function foundLove() {
    // background for the love ending
    background(248, 200, 220);

    // text for the the love ending
    push();
    textSize(45);
    fill(255, 20, 147);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`You helped Taylor find love! (but not with Travis Kelce, he sucks)\n "you are the one i have been waiting for"\n - king of my heart`, windowWidth / 2, windowHeight / 2);
    pop()
}

function move() {
    // movement of the paparazzi that follows the user
    chaseTaylor(circle1);
    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;

    if (circle1.x > width) {
        circle1.x = random(0, width);
        circle1.y = random(0, height);
    }

    // movement of the fan that follows the user
    chaseTaylor(circle2);
    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;

    if (circle2.y > height) {
        circle2.y = random(0, height);
        circle2.x = random(0, width);
    }
}

function fan() {
    // when the fan interacts with the user, the bad ending is triggered
    let d1 = dist(user.x, user.y, circle1.x, circle1.y);
    if (d1 < circle1.size / 2 + user.size / 2) {
        state = `caught`;
    }
}

function paparazzi() {
    // when the paparazzi interacts with the user, the bad ending is triggered
    let d2 = dist(user.x, user.y, circle2.x, circle2.y);
    if (d2 < circle2.size / 2 + user.size / 2) {
        state = `caught`;
    }
}

function house() {
    // when the user interacts with the house, the safe ending is triggered
    let d3 = dist(user.x, user.y, home.x, home.y);
    if (d3 < home.size / 2 + user.size / 2) {
        state = `saved`;
    }
}

function love() {
    // when the user interacts with the heart, the love ending is triggered
    let d4 = dist(user.x, user.y, heart.x, heart.y);
    if (d4 < heart.size / 2 + user.size / 2) {
        state = `foundLove`;
    }
}

function display() {
    // displays all of the images in place of circles
    push();
    image(imgCrazyFan, circle1.x, circle1.y, circle1.size * 2, circle1.size * 1.5);
    pop();

    push();
    image(imgPaparazzi, circle2.x, circle2.y, circle2.size, circle2.size);
    pop();

    push();
    image(imgTaylor, user.x - user.size / 2, user.y - user.size / 2, user.size * 1.5, user.size * 1.5);
    pop();
}

function chaseTaylor(paparazzi) {
    // the paparazzi follows the user
    if (paparazzi.x < user.x) {
        paparazzi.vx = paparazzi.speed;
    } else {
        paparazzi.vx = -paparazzi.speed;
    }

    if (paparazzi.y < user.y) {
        paparazzi.vy = paparazzi.speed;
    } else {
        paparazzi.vy = -paparazzi.speed;
    }
}

function controlUser() {
    // how the game is controlled
    if (keyIsDown(87)) {      // w to move up
        user.vy = -user.speed;
    }
    else if (keyIsDown(83)) {     // s to move down
        user.vy = user.speed;
    }

    if (keyIsDown(68)) {      // d to move right
        user.vx = user.speed;
    }
    else if (keyIsDown(65)) {     // a to move left
        user.vx = -user.speed;
    }
    user.x += user.vx;
    user.y += user.vy;
}

function mousePressed() {
    // when user clicks the title screen, the game starts!
    if (state === `title`) {
        state = `game`;
    }
}