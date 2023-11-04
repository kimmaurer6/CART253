
class Bin {

    constructor(x, y, binImage) {
        this.width = 400;
        this.height = 200;
        this.x = windowWidth / 2;
        this.y = windowHeight - this.height;
        this.image = binImage;
        this.speed = 6;
        this.vx = 0;
        this.vy = 0;
    }

    display() {
        push();
        image(binImage, this.x, this.y, this.width, this.height);
        pop();
    }

    controlPlayer() {

        if (keyIsDown(68)) {
            this.vx = this.speed;
        }
        else if (keyIsDown(65)) {
            this.vx = -this.speed;
        }
        else {
            this.vx = 0
        }
        this.x += this.vx;
    }

}