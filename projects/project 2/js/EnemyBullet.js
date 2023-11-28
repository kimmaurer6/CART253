class EnemyBullet {
    constructor(x, y, enemyBulletImage) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 4;
        this.ax = 3;
        this.ay = 3;
        this.speed = 8;
        this.width = 13;
        this.height = 15;
        this.image = enemyBulletImage;
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
        image(enemyBulletImage, this.x, this.y, this.width, this.height, this.speed);
    }

}