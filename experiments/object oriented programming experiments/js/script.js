/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

// our garden
let garden = {
    // an array to store the individual flowers
    flowers: [],
    // the amount of flowers in the garden
    numFlowers: 20,
    // grass colour (background)
    grassColour: {
        r: 120,
        g: 180,
        b: 120
    }
};

function setup() {
    createCanvas(600,600);

    // create the flowers by counting up to the number of flowers
    for(let i = 0; i < garden.numFlowers; i++){
        // creating a new flower
        let flower =  new Flower();
        // add the flower to the array of flowers
        garden.flowers.push(flower);
    }
}

// createFlwoer()
// creates a new object that describes the flower and returns it
function createFlower(){
    // create the object
    let flower = {
        // position and size
        x: random(0, width),
        y: random(0, height),
        size: 50,
        stemLength: 75,
        stemThickness: 10,
        petalThickness: 10,
        // colours
        stemColour: {
            r: 50,
            g: 150,
            b: 50
        },
        petalColour: {
            r: 200,
            g: 50,
            b: 50
        },
        centreColour: {
            r: 50,
            g: 0,
            b: 0
        }
        };
    return flower;
    };


// displays the provided flower on the canvas
    function displayFlower(flower){
    push();
    // draw the stem
    strokeWeight(flower.stemThickness);
    stroke(flower.stemColour.r, flower.stemColour.g, flower.stemColour.b);
    line(flower.x, flower.y, flower.x, flower.y + flower.stemLength);
    // draw the outline for the flower
    strokeWeight(flower.petalThickness);
    fill(flower.centreColour.r, flower.centreColour.g, flower.centreColour.b);
    stroke(flower.petalColour.r, flower.petalColour.g, flower.petalColour.b);
    ellipse(flower.x, flower.y, flower.size);
    pop();
}

// draw()
// displays flowers
function draw(){
    // display the grass
    background(garden.grassColour.r, garden.grassColour.g, garden.grassColour.b);

    // loop through all the flowers in the array and display them
    for(let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i];
        flower.display();
    }
}