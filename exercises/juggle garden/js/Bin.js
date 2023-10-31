
class Bin {

    constructor(x, y, binImage) {
        this.width = 400;
        this.height = 200;
        this.x = windowWidth/2;
        this.y = windowHeight - this.height;
        this.image = binImage;
    }

    move() {
        this.x = mouseX;
    }

    display() {
        push();
        image(binImage, this.x, this.y,this.width,this.height);
        pop();
    }
}