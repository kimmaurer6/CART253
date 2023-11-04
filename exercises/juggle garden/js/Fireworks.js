class Fireworks {
   
    constructor(x,y,fireworkImage){
        this.width = 400;
        this.height = 400;
        this.x = 0;
        this.y = 0;
        this.image = fireworkImage;
    }

    display(){
        push();
        image(fireworkImage, this.x, this.y, this.width, this.height);
        pop();
    }
}