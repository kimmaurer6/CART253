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
    speed: 10,
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
let imgHouse;
let imgHeart;

function preload(){
    imgHouse = loadImage(`assets/images/cartoonhouse.png`);
    imgHeart = loadImage(`assets/images/pinkheart.png`);
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    
    background(135,206,235);
    noStroke();

    setupCircles();

    // setting the x and y of the user
    user.x = 0;
    user.y = windowHeight/2;

    // setting the x and y of the home
    home.x = windowWidth/2 + home.size/2;
    home.y = 0 + home.size/2;

    // setting the x and y of the heart
    heart.x = windowWidth/2 + heart.size/2;
    heart.y = 0 + heart.size/2
    noCursor();
}

function setupCircles(){
    
    // starting x locations of the fan and paparazzi
    circle1.x = windowWidth/3;
    circle2.x = 2 * windowWidth/3;

    // movement of the fan / paparazzi idk yet
    circle1.vx = random(-circle1.speed,circle1.speed);
    circle1.vy = random(-circle1.speed,circle1.speed);

    // movement of the fan / paparazzi idk yet
    circle2.vx = random(-circle2.speed,circle2.speed);
    circle2.vy = random(-circle2.speed,circle2.speed);

    
}


function draw() {
    background(135,206,235);
    noStroke();

    // drawing the circles - will be deleted later
    ellipse(circle1.x, circle1.y, circle1.size);
    ellipse(circle2.x, circle2.y, circle2.size);
    ellipse(user.x, user.y, user.size);
  
    // states of the game! 
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
    // background for the title screen
    background(171,235,198);
    noStroke();
    
    // text for the title screen
    push();
    textSize(55);
    fill(100,82,86);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`Help Taylor escape the paparazzi and crazy Swifties!`, windowWidth/2, windowHeight/2);
    pop()
}

function game(){
    // background for the game
    background(195,177,225);
    
    // images used during the game
    image(imgHouse, windowWidth/2, 0,250,250);
    image(imgHeart, 0, windowHeight/2, 150, 150);

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

function saved(){
    // background for the safe ending
    background(174,214,241);
    noStroke();

    // text for the safe ending
    push();
    textSize(55);
    fill(93,109,126);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`You saved Taylor! :D\n "i know places we won't be found"\n - i know places`,windowWidth/2, windowHeight/2);
    pop();
}

function caught(){
    // background for the bad ending
    background(211,211,211);
   
    // text for the bad ending
    push();
    textSize(55);
    fill(128,0,0);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`Taylor has been caught!:(\n"i can go anywhere i want, just not home"\n - my tears ricochet`,windowWidth/2, windowHeight/2)
    pop();
}

function foundLove(){
   // background for the love ending
   background()
   
    // text for the the love ending
    push();
    textSize(55);
    fill(255,20,147);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`You helped Taylor find love! (but not with Travis Kelce, he sucks)\n "you are the one i have been waiting for"\n - king of my heart`, windowWidth/2, windowHeight/2);
}

function move(){
    // movement of the paparazzi that follows the user
    chaseTaylor(circle1);
    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;

    if (circle1.x > width) {
        circle1.x = 0;
        circle1.y = random(0,height);
    }

    // movement of the fans that follows the user
    chaseTaylor(circle2);
    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;

    if (circle2.y > height) {
        circle2.y = 0;
        circle2.x = random(0, width);
    }
}

function paparazzi() {
    // when the paparazzi interacts with the user, the bad ending is triggered
    let d1 = dist(user.x, user.y, circle1.x, circle1.y);
    if(d1 < circle1.size/2 + user.size/2){
        state = `caught`;
    }
}

function fan(){
    // when the fan interacts with the user, the bad ending is triggered
    let d2 = dist(user.x, user.y, circle2.x, circle2.y);
    if(d2 < circle2.size/2 + user.size/2){
        state = `caught`;
    }
}

function house(){
    // when the user interacts with the house, the safe ending is triggered
    let d3 = dist(user.x, user.y, home.x, home.y);
    if(d3 < home.size/2 + user.size/2){
        state = `saved`;
    }
}

function love(){
    // when the user interacts with the heart, the love ending is triggered
    let d4 = dist(user.x, user.y, heart.x, heart.y);
    if(d4 < heart.size/2 + user.size/2){
        state = `foundLove`;
    }
}

function display(){
    push();
    fill(circle1.fill.r, circle1.fill.g, circle1.fill.b);
    noStroke();
    ellipse(circle1.x, circle1.y, circle1.size);
    pop();

    push();
    fill(circle2.fill.r, circle2.fill.g, circle2.fill.b);
    noStroke();
    ellipse(circle2.x, circle2.y, circle2.size);
    pop();

    push();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

function chaseTaylor(paparazzi){
    if (paparazzi.x<user.x) {
        paparazzi.vx = paparazzi.speed;
    } else {
        paparazzi.vx = -paparazzi.speed;
    }

    if(paparazzi.y<user.y){
        paparazzi.vy = paparazzi.speed;
    } else{
        paparazzi.vy = -paparazzi.speed;
    }
}

function controlUser(){
    if(keyIsDown(87)){      // w to move up
        user.vy = -user.speed;
    }
    else if(keyIsDown(83)){     // s to move down
        user.vy = user.speed;
    }
    
    if(keyIsDown(68)){      // d to move right
        user.vx = user.speed;
    }
    else if(keyIsDown(65)){     // a to move left
        user.vx = -user.speed;
    }
    user.x += user.vx;
    user.y += user.vy;
}

function mousePressed(){
    // when user clicks the title screen, the game starts!
    if (state === `title`) {
        state = `game`;
    }
}