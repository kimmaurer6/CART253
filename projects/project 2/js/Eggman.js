class Eggman {
    constructor(x, y, eggmanImage) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.speed = 7;
        this.width = 200;
        this.height = 200;
        this.size = this.width;
        this.image = eggmanImage;
        this.health = 15;
        this.active = true;
    }
    display() {
        if (this.active) {
            push();
            imageMode(CENTER);
            image(eggmanImage, this.x, this.y, this.width, this.height, this.speed, this.vx, this.vy);
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

        this.x = constrain(this.x, 200, 400);
        this.y = constrain(this.y, 100, height / 3);

    }
}