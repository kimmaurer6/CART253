class Enemy {
    constructor(x, y, enemyImage) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.speed = 2;
        this.width = 90;
        this.height = 90;
        this.size = this.width;
        this.image = enemyImage;
        this.health = 2;
        this.active = true;
    }

    display() {
        if (this.active) {
            push();
            image(enemyImage, this.x, this.y, this.width, this.height, this.speed, this.vx, this.vy);
            pop();
        }
    }

    move() {
        let change = random();

        if (change < 0.01) {
            this.vx = random(-this.speed, this.speed);
            //this.vy = random(-this.speed, this.speed);
        }
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        this.x = constrain(this.x, 0, 600);
       // this.y = constrain(this.y, 0, 600);

        // this(this.x, this.y, this.size);
    }
}


