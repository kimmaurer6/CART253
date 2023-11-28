class Sonic {
    constructor(x, y, sonicImage) {
        this.x = 400;
        this.y = 550;
        this.vx = 0;
        this.vy = 0;
        this.width = 100;
        this.height = 100;
        this.speed = 5;
        this.active = true;
        this.image = sonicImage;
        this.health = 2;
    }

    display() {
        push();
        image(sonicImage, this.x, this.y, this.width, this.height);
        pop();
    }

    controlPlayer() {
        if (keyIsDown(68)) {      // d
            this.vx = this.speed;
        }
        else if (keyIsDown(65)) {    // a
            this.vx = -this.speed;
        }
        else {
            this.vx = 0;
        }
        this.x += this.vx;

        if (keyIsDown(83)) {     // w
            this.vy = this.speed;
        }
        else if (keyIsDown(87)) {    // s
            this.vy = -this.speed;
        }
        else {
            this.vy = 0;
        }
        this.y += this.vy;

        if (keyIsDown(32) && cooldown === 0) {
            // if spacebar is pressed, user shoots bullets
            bullets.push(new Bullet(sonic.x, sonic.y))
            cooldown = cooldownFrames;
        }
    }

}