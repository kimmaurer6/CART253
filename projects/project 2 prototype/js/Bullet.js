class Bullet {
    constructor(x, y, bulletImage) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = -8;
        this.ax = 0;
        this.ay = 0;
        this.speed = 8;
        this.width = 10;
        this.height = 12;
        this.image = bulletImage;
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
        image(bulletImage, this.x, this.y, this.width, this.height, this.speed);
        
    }
    
}