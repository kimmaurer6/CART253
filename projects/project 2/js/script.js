/**
 * Project 2
 * Kimberley Maurer
 * 
 */

"use strict";

let startTime = undefined;
let duration = 45000;

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

let bossBots = [];
let numBossBots = 2;
let bossBot;
let bossBotImage;

let eggmen = [];
let numEggmen = 1;
let eggman;
let eggmanImage;

let cooldown = 0;
let cooldownFrames = 25;

let sonicTitleImage;
let sonicLevel1Image;
let sonicLevel2Image;
let sonicLevel3Image;
let levelUpImage;
let gameOverImage;
let winImage;

let musicSFX;


let state = `title`;

function preload() {
    // all images used
    // none of these images belong to me - all credit goes to their rightful owners!
    sonicImage = loadImage(`assets/images/sonic.png`);
    sonicTitleImage = loadImage(`assets/images/title-background.png`);
    sonicLevel1Image = loadImage(`assets/images/level1.png`);
    sonicLevel2Image = loadImage(`assets/images/level2.png`);
    sonicLevel3Image = loadImage(`assets/images/level3.png`);
    bulletImage = loadImage(`assets/images/bullet.png`);
    enemyImage = loadImage(`assets/images/buzzer.png`);
    enemyBulletImage = loadImage(`assets/images/enemybullet.png`);
    spinnerImage = loadImage(`assets/images/spinner.png`);
    bossBotImage = loadImage(`assets/images/bossbot.png`);
    eggmanImage = loadImage(`assets/images/eggman.png`);
    levelUpImage = loadImage(`assets/images/levelup.png`);
    gameOverImage = loadImage(`assets/images/gameover.png`);
    winImage = loadImage(`assets/images/win.png`);

    // sound
    // this sound does not belong to me, it was found on a royalty free game music site - all credit to the rightful owners!
    soundFormats(`wav`);
    musicSFX = loadSound(`assets/sounds/music.wav`);
}



function setup() {
    let cnv = createCanvas(1000, 730);
    cnv.mousePressed(canvasPressed);
    image(sonicTitleImage);

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
    }

    // creating level two enemies (spinners)
    for (let i = 0; i < numSpinners; i++) {
        let spinnerX = random(0, width);
        let spinnerY = random(0, height / 3);

        // introducing spinner class
        let spinner = new Spinner(spinnerX, spinnerY, spinnerImage);
        spinners.push(spinner);
    }

    // creating level three enemies (bossbots)
    for (let i = 0; i < numBossBots; i++) {
        let bossBotX = random(0, width);
        let bossBotY = random(0, height / 3);

        // introducing bossbot class
        let bossBot = new BossBot(bossBotX, bossBotY, bossBotImage);
        bossBots.push(bossBot);
    }

    // creating eggman
    for (let i = 0; i < numEggmen; i++) {
        let eggmanX = random(200, 400);
        let eggmanY = random(0, height / 3);

        // introducing eggman class
        let eggman = new Eggman(eggmanX, eggmanY, eggmanImage);
        eggmen.push(eggman);
    }

    // timer check
    let elapsed = millis() - startTime;
    setTimeout(checkGameOver, 45000);



}

function draw() {
    if (state === `title`) {
        // title screen
        title();
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
    else if (state === `nextLevel1`) {
        nextLevel1();
        cutScene1();
    }
    else if (state === `level2`) {
        // all things to be used / displayed in the second level
        level2();
        sonic.controlPlayer();
        for (let spinner of spinners) {
            for (let bullet of bullets) {
                enemyHit(spinner, bullet);
            }
            spinner.display();
            spinner.move();
        }
        level2Up();
    }
    else if (state === `nextLevel2`) {
        nextLevel2();
        cutScene2();
    }
    else if (state === `level3`) {
        // all things to be used / displayed in the final level    
        level3();
        sonic.controlPlayer();

        for (let bossBot of bossBots) {
            for (let bullet of bullets) {
                enemyHit(bossBot, bullet);
            }
            bossBot.display();
            bossBot.move();
        }
        for (let eggman of eggmen) {
            for (let bullet of bullets) {
                enemyHit(eggman, bullet);
            }
            eggman.display();
            eggman.move();
        }
        level3Win();
    }
    else if (state === `win`) {
        // win screen
        win();
    }
    else if (state === `lose`) {
        // lose screen
        lose();
    }

    // remove cursor
    noCursor();

    // constrains how many bullets are shot at once
    cooldown = constrain(cooldown - 1, 0, cooldownFrames);

    for (let i = bullets.length - 1; i >= 0; i--) {
        let bullet = bullets[i];
        bullet.move();
        if (bullet.y < 0) {
            bullets.splice(i, 1);
        }
    }

    // constrain player to the screen
    sonic.x = constrain(sonic.x, 0, width / 1.1);
    sonic.y = constrain(sonic.y, height / 1.55, height / 1.14);

    // timer
    let elapsed = millis() - startTime;
}

function title() {
    // background for title screen
    push();
    image(sonicTitleImage, 0, 0, width, height);

    // text for title screen
    textSize(50);
    fill(255);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`Sonic Invaders!!`, 500, 90);

    textSize(45);
    fill(255);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`you have 45 seconds\nto save sonic!`, 470, 340);

    textSize(45);
    fill(255);
    textAlign(LEFT);
    textFont(`Times New Roman`);
    text(`use WASD to move! \nuse the spacebar to shoot! \nCLICK TO START!`, 290, 600);
    pop();

}


function level1() {
    // check if time has surpassed the duration
    let elapsed = millis() - startTime;
    if (elapsed > duration) {
        state = `lose`;
    }

    // background for level one
    push();
    image(sonicLevel1Image, 0, 0, width, height);
    pop();

}

function nextLevel1() {
    // level up screen
    push()
    image(levelUpImage, 0, 0, width, height);

    // check if time has surpassed the duration
    let elapsed = millis() - startTime;
    if (elapsed > duration) {
        state = `lose`;
    }

    // text for level up
    textSize(50);
    fill(255);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`LEVEL 2 \n where am i?... \n "enter" to continue `, width / 2, height / 2);
    pop();
}

function nextLevel2() {
    push();
    image(levelUpImage, 0, 0, width, height);

    // check if time has surpassed the duration
    let elapsed = millis() - startTime;
    if (elapsed > duration) {
        state = `lose`;
    }

    // text for level up
    textSize(50);
    fill(255);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`LEVEL 3 \n STOP EGGMAN! \n "enter" to continue `, width / 2, height / 2);
    pop();
}

function level2() {
    // background for level two
    push();

    // check if time has surpassed the duration
    let elapsed = millis() - startTime;
    if (elapsed > duration) {
        state = `lose`;
    }
    // image background
    image(sonicLevel2Image, 0, 0, width, height);
    pop();
}

function level3() {
    // background for level three
    push();
    // image
    image(sonicLevel3Image, 0, 0, width, height);

    // check if time has surpassed the duration
    let elapsed = millis() - startTime;
    if (elapsed > duration) {
        state = `lose`;
    }
    pop();
}

function lose() {
    // background for lose screen
    push();
    image(gameOverImage, 0, 0, width, height);
    pop();
}

function win() {
    // text and background for win screen
    push();
    image(winImage, 0, 0, width, height);

    textSize(50);
    fill(255);
    textAlign(CENTER);
    textFont(`Times New Roman`);
    text(`YOU FOUND ME!`, width / 2, height / 1.5);
    pop();
}


function enemyHit(spinner, bullet) {
    if (!spinner.active) {
        return;
    }
    // when the enemy is hit twice, it dies
    let d = dist(bullet.x, bullet.y, spinner.x, spinner.y);
    if (d < spinner.size / 2 + bullet.size / 2) {
        spinner.health -= 1;
        let index = bullets.indexOf(bullet);
        bullets.splice(index, 1);
    };
    if (spinner.health <= 0) {
        spinner.active = false;
    }
}


function level1Up() {
    // the switch between level 1 and 2
    if (state === `level1` && countActiveEnemies() === 0) {
        state = `nextLevel1`;
    }
}

function level2Up() {
    // the switch between level 2 and 3
    if (state === `level2` && countActiveSpinners() === 0) {
        state = `nextLevel2`;
    }
}

function level3Win() {
    // switching from level 3 to the win screen 
    if (state === `level3` && countActiveBossBots() === 0
        && countActiveEggmen() === 0) {
        state = `win`;
    }
}

function countActiveEnemies() {
    // checking the array for how many buzzers are left
    let count = 0;
    for (let enemy of enemies) {
        if (enemy.active) {
            count += 1;
        }
    }
    return count;
}

function countActiveSpinners() {
    // checking the array for how many spinners are left
    let count = 0;
    for (let spinner of spinners) {
        if (spinner.active) {
            count += 1;
        }
    }
    return count;
}

function countActiveBossBots() {
    // checking the array for how many bossbots are left
    let count = 0;
    for (let bossBot of bossBots) {
        if (bossBot.active) {
            count += 1;
        }
    }
    return count;
}

function countActiveEggmen() {
    // checking if eggman is still alive
    let count = 0;
    for (let eggman of eggmen) {
        if (eggman.active) {
            count += 1;
        }
    }
    return count;
}

function cutScene1() {
    // transition between level up screen and next level
    if (state === `nextLevel1` && keyCode === ENTER) {
        state = `level2`;
    }
}

function cutScene2() {
    // transition between level up screen and next level
    if (state === `nextLevel2` && keyCode === ENTER) {
        state = `level3`;
    };
}

function checkGameOver() {
    // has the game been won?
    if (numEggmen < 0 && numBossBots < 0 && numEnemies < 0 && numSpinners < 0) {
        state = `win`;
    }
}

function canvasPressed() {
    // when the canvas is pressed, music begins
    musicSFX.play();

}
function mousePressed() {
    // game switches from title to level one when the mouse is pressed
    if (state === `title`) {
        state = `level1`;

        // start timer
        startTime = millis();
        setTimeout(checkGameOver, 45000);
    }
}

