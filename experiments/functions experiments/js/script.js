/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of setup
*/
function setup() {
    createCanvas(500,500); // defining the setup function, instructions

    let hotCelsius = toCelsius(100);
    console.log('100 degrees Fahrenheit is ${hotCelsius} degrees Celsius');

    let coldCelsius = toCelsius(10);
    console.log('10 degrees Fahrenheit is ${coldCelsius} degrees Celsius');

}



/**
 * Description of draw()
*/
function draw() {
    background(0);
}

function toCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}