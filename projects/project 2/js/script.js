/**
 * Project 2
 * Kimberley Maurer
 * 
 */

"use strict";


let sonic;
let sonicImage;

let bullets = [];
let bullet;
let bulletImage;

let enemyBullets = [];
let enemyBullet;
let enemyBulletImage;

let enemies = [];
let numEnemies = 5;
let enemy;
let enemyImage;

let spinners = [];
let numSpinners = 5;
let spinner;
let spinnerImage;

let cooldown = 0;
let cooldownFrames = 25;

let sonicTitleImage;
let sonicLevel1Image;
let sonicLevel2Image;
let sonicLevel3Image;


let state = `title`;

function preload() {
    // all images used
    sonicImage = loadImage(`assets/images/sonic.png`);
    sonicTitleImage = loadImage(`assets/images/title-background.png`);
    sonicLevel1Image = loadImage(`assets/images/level1.png`);
    sonicLevel2Image = loadImage(`assets/images/level2.png`);
    sonicLevel3Image = loadImage(`assets/images/level3.png`);
    bulletImage = loadImage(`assets/images/bullet.png`);
    enemyImage = loadImage(`assets/images/buzzer.png`);
    // enemyBulletImage = loadImage(`assets/images/enemybullet.png`);
    spinnerImage = loadImage(`assets/images/spinner.png`)
}



function setup() {
    createCanvas(1000, 730);
    image(sonicTitleImage);
    // noLoop();

    // shoot = createShoot(`shoot if loop()`);
    // shoot.position(enemyBullet.x, enemyBullet.y);
    // shoot.mousePressed()

    // function shootBullet() {
    //     if (isLooping()) {
    //         enemyBullet.move()
    //     }
    // }

    // function checkLoop() {
    //     if (this.checked()) {
    //         loop();
    //     }
    //     else {
    //         noLoop();
    //     }
    // }

    // introducing sonic class
    sonic = new Sonic(0, 500);
    sonic.image = sonicImage;

    // introducing bullet class
    bullet = new Bullet();
    bullet.image = bulletImage;


    // creating level one enemies (buzzers)
    for (let i = 0; i < numEnemies; i++) {
        let enemyX = random(0, width);
        let enemyY = random(0, height / 3);

        // introducing enemy class
        let enemy = new Enemy(enemyX, enemyY, enemyImage);
        enemies.push(enemy);
        //  enemy.image = enemyImage;
    }

    // creating level two enemies (spinners)
    for (let i = 1; i < numSpinners; i++){
        let spinnerX = random(0, width);
        let spinnerY = random(0, height / 3);

        let spinner = new Spinner(spinnerX, spinnerY, spinnerImage);
        spinners.push(spinner);
    }

}

function draw() {
    if (state === `title`) {
        // title screen
        title();
    }
    else if (state === `game`) {
        game();
    }
    else if (state === `level1`) {
        // all things to be used / displayed in the first level
        level1();
        sonic.display();
        sonic.controlPlayer();
        for (let enemy of enemies) {
            for (let bullet of bullets) {
                enemyHit(enemy, bullet);
            }
            enemy.display();
            enemy.move();
        }
        level1Up();
    }
    else if (state === `level2`) {
        // all things to be used / displayed in the second level
        level2();
        sonic.display();
        sonic.controlPlayer();
        for (let spinner of spinners) {
            for(let bullet of bullets){
                enemyHit(spinner,bullet)
            }
            spinner.display();
            spinner.move();
        }
    }
    else if (state === `level3`) {
        // all things to be used / displayed in the final level    
        level3();
        sonic.display();
        sonic.controlPlayer();
        enemy.display();
    }
    else if (state === `win`) {
        // win screen
        win();
    }
    else if (state === `lose`) {
        // lose screen
        lose();
        background(0);
    }

    if (keyIsDown(32) && cooldown === 0) {
        // if spacebar is pressed, user shoots bullets
        bullets.push(new Bullet(sonic.x, sonic.y))
        cooldown = cooldownFrames;
    }




    // constrains how many bullets are shot at once
    cooldown = constrain(cooldown - 1, 0, cooldownFrames);

    for (let bullet of bullets) {
        bullet.move();
    }

    // for (let enemyBullet of enemyBullets) {
    //     enemyBullet.move();
    // }

    // constrain player to the screen
    sonic.x = constrain(sonic.x, 0, width / 1.1);
    sonic.y = constrain(sonic.y, height / 1.55, height / 1.14);

    // enemy.x = constrain(enemy.x, 0, width / 1.1);
    // enemy.y = constrain(enemy.y, height, height / 1.5);
}

function title() {
    // background for title screen
    push();
    image(sonicTitleImage, 0, 0, width, height);
    // noStroke();

    // text for title screen
    textSize(50);
    fill(255);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`Sonic Invaders!!`, width / 2, height / 2);
    pop();
}
// function game() {
//     enemyHit();
//     sonicHit();
//     level1Up();
//     // level2();
//     // level3();
//     // nextLevel();
//     // if (state === `level1` && numEnemies === 0) {
//     //     state = `level2`
//     // };
// }


function level1() {
    // background for level one
    push();
    image(sonicLevel1Image, 0, 0, width, height);
    pop();
}

function level2() {
    // background for level two
    push();
    image(sonicLevel2Image, 0, 0, width, height);
    pop();
}

function level3() {
    // background for level three
    push();
    image(sonicLevel3Image, 0, 0, width, height);
    pop();
}

function lose() {
    // text and background for lose screen
    push();
    background(0);
    pop();
}

function win() {
    // text and background for win screen
    push();
    background(155);
    pop();
}

function enemyHit(enemy, bullet) {
    // when the enemy is hit twice, it dies
    let d = dist(bullet.x, bullet.y, enemy.x, enemy.y);
    if (d < enemy.size / 2.5 + bullet.size * 1.5) {
        enemy.health -= 1;
    };
    if (enemy.health <= 0) {
        enemy.active = false;
    }
}

function enemyHit(spinner, bullet) {
    // when the enemy is hit twice, it dies
    let d = dist(bullet.x, bullet.y, spinner.x, spinner.y);
    if (d < spinner.size / 2.5 + bullet.size * 1.5) {
        spinner.health -= 1;
    };
    if (spinner.health <= 0) {
        spinner.active = false;
    }
}

function level1Up() {
    if (state === `level1` && countActiveEnemies() === 0) {
        state = `level2`
    }
    console.log(`yay`);
}

function level2Up(){
    if(state === `level2` && countActiveSpinners() === 0){
        state = `level3`
    }
}

function countActiveEnemies() {
    let count = 0;
    for (let enemy of enemies) {
        if (enemy.active) {
            count += 1
        }
    }
    return count;
}

function countActiveSpinners(){
    let count = 0;
    for (let spinner of spinners) {
        if (spinner.active) {
            count += 1
        }
    }
    return count;
}


function mousePressed() {
    // game switches from title to level one when the mouse is pressed
    if (state === `title`) {
        state = `level1`;
    }
}