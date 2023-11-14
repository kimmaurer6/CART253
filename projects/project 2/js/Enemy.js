class Enemy {
    constructor(x, y, enemyImage) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0; 
        this.ax = 0;
        this.ay = 0;
        this.speed = 0;
        this.width = 90;
        this.height = 90;
        this.image = enemyImage;
    }

    display() {
        push();
        image(enemyImage, this.x, this.y, this.width, this.height);
        pop();
    }
}