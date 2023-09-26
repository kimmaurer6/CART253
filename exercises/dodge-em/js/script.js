/**
 * Dodge-em!
 * Kimberley Maurer
 */

"use strict";

let numStatic = 4000;

let circle1 = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 10,
    fill: {
        r: 195,
        g: 177,
        b: 225
    }
};

let circle2 = {
    x: 250,
    y: 0,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 10,
    fill: {
        r: 195,
        g: 177,
        b: 225
    }
};

let user = {
    x: 250,
    y: 250,
    size: 100,
    fill: {
        r: 250,
        g: 200,
        b: 152
    }
};

let clownImage;

let endGame = false;

function preload() {
    clownImage = loadImage("assets/images/clown.png");
}

/**
 * setting up the canvas and circles
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

    circle1.y = random(0, height); // sets the location of the x circle
    circle1.vx = circle1.speed; // sets the speed of the x circle

    circle2.x = random(0,width); // sets the location of the y circle
    circle2.vy = circle2.speed; // sets the speed of the y circle

    noCursor();
}


/**
 * creating the background, drawing the circles, giving them colours, working on the movement, adding images
*/
function draw() {
    background(0, 0, 90)

    if (!endGame) {
        // starry background
        for (let i; i < numStatic; i++); {
            let x = random(0, width);
            let y = random(0, height);
            stroke(255);
            strokeWeight(2);
            point(x, y);
        };

        if(user.x <= windowWidth/2){
            background(195,177,225);
        }
        else{
            background(250,200,152);
        } 

        // the x circle we're dodging
        push();
        fill(circle1.fill.r, circle1.fill.g, circle1.fill.b);   // colour
        noStroke();
        ellipse(circle1.x, circle1.y, circle1.size);  // displays circle 1 (purple)
        pop();

        // movement of the x circle we're dodging
        circle1.x = circle1.x + circle1.vx;
        circle1.y = circle1.y + circle1.vy;

        if (circle1.x > width) {
            circle1.x = 0;
            circle1.y = random(0, height);   // randomisation of circle 1's starting point along the y axis
        }

        // the y circle we're dodging
        push();
        fill(circle2.fill.r, circle2.fill.g, circle2.fill.b);   // colour of circle 2
        noStroke();
        ellipse(circle2.x, circle2.y, circle2.size);  // displays circle 2 (purple)
        pop();

        // movement of the y circle we're dodging
        circle2.x = circle2.x + circle2.vx;
        circle2.y = circle2.y + circle2.vy;

        if (circle2.y > height) {
            circle2.y = 0;
            circle2.x = random(0, width);    // randomisation of circle 2's starting point along the x axis
        };

        // show user
        fill(user.fill.r, user.fill.g, user.fill.b);
        noStroke();
        ellipse(user.x, user.y, user.size);   // displays the "user" (orange circle)
        

        // getting caught by the x circle! 
        let d1 = dist(user.x, user.y, circle1.x, circle1.y);
        if (d1 < circle1.size / 2 + user.size / 2) {
            endGame=true;   // stops the code from running once caught by circle 1
        };

        // getting caught by the y circle! 
        let d2 = dist(user.x, user.y, circle2.x, circle2.y);
        if (d2 < circle2.size / 2 + user.size / 2) {
            endGame = true;   // stops the code from running once caught by circle 2
        };
       
    }
    else{
            background(255,0,0);

            imageMode(CENTER);  // centers the clown image
            image(clownImage, windowWidth / 2, windowHeight / 2); // image of clown that appears once caught by circle 1

            textAlign(CENTER); // aligns the text
            fill(255);  // colour of the text
            textSize(45);   // size of the text
            text("GAME", width/2, height/3);
            text("OVER!", width/2, height/3*2,2);
    };
}

function mouseDragged() {
    // controlling the user by dragging the mouse
    user.x = mouseX;
    user.y = mouseY;
}
