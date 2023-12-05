class BossBot {
    constructor(x, y, bossBotImage) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.speed = 6;
        this.width = 90;
        this.height = 90;
        this.size = this.width;
        this.image = bossBotImage;
        this.health = 3;
        this.active = true;
    }

    display() {
        if (this.active) {
            push();
            imageMode(CENTER);
            image(bossBotImage, this.x, this.y, this.width, this.height, this.speed, this.vx, this.vy);
            pop();
        }
    }

    move() {
        let change = random();

        if (change < 0.1) {
            this.vx = random(-this.speed, this.speed);
            //this.vy = random(-this.speed, this.speed);
        }
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        this.x = constrain(this.x, 100, 600);
        this.y = constrain(this.y, 100, height / 3);
    }
}
