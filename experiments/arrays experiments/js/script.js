/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let user = {
    x: 0,
    y: 0,
    size: 100
};

// first food object 
let food1 = {
    x: 250,
    y: 300,
    size: 50,
    eaten: false
};

let food2 = {
    x: 350,
    y: 300,
    size: 50,
    eaten : false
};

let food3 = {
    x: 450,
    y: 300,
    size: 50,
    eaten : false
};

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);

    moveUser();

    checkFood1();
    checkFood2();
    checkFood3();

    displayUser()
    displayFood(food1);
    displayFood(food2);
    displayFood(food3);

    
}

function moveUser(){
    user.x = mouseX;
    user.y = mouseY;
}

function checkFood1(){
    // only checking overlap if food1 has not been eaten
    if(!food1.eaten){
        let d= dist(user.x, user.y, food1.x, food1.y);
        if (d < user.size / 2 + food1.size / 2){
            food1.eaten = true;
        }
    }
}

function checkFood2(){
    // same for food2
    if(!food2.eaten){
        let d = dist(user.x, user.y, food2.x, food2.y);
        if(d < user.size / 2 + food2.size / 2) {
            food2.eaten = true;
        }
    }
}

function checkFood3(){
    // same for food2
    if(!food3.eaten){
        let d = dist(user.x, user.y, food3.x, food3.y);
        if(d < user.size / 2 + food3.size / 2) {
            food3.eaten = true;
        }
    }
}


function displayUser(){
    push();
    fill(255);
    ellipse(user.x, user.y, user.size);
    pop();
}

function displayFood(food);
    if(!food.eaten){
        push();
        fill(255,100,100);
        ellipse(food.x, food.y, food.size);
        pop();
    }