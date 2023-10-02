/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let hello = {
    string : `Hello, world!`,
    x: 250,
    y: 250,
    vx: 5,
    vy: 1,
    size: 62
};

function setup () {
    createCanvas (500,500);
} 

function draw () {
    background(0);

    hello.x = hello.x + hello.vx;
    hello.y = hello.y + hello.vy;

    hello.size = hello.size + 1
    textAlign(CENTER,CENTER);
    textSize(hello.size);
    textStyle(BOLD);

    fill(137,200,468);
    stroke(255,0,0);
    strokeWeight(3);
    textFont('Times New Roman');

    text(hello.string, hello.x,hello.y);
};
