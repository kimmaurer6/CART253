class Enemy {
    constructor(x, y, enemyImage) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.speed = 3;
        this.width = 90;
        this.height = 90;
        this.size = this.width;
        this.image = enemyImage;
        this.health = 2;
        this.active = true;
        // if(this.health <= 0){
        //     this.active = false;
        // }
    }

    display() {
        if (this.active) {
            push();
            image(enemyImage, this.x, this.y, this.width, this.height, this.speed, this.vx, this.vy);
            pop();
        }
    }
}