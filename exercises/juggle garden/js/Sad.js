class Sad{

    constructor(x,y,sadImage){
        this.width = 300;
        this.height = 300;
        this.x = 0;
        this.y = 0
        this.image = sadImage;
    }

    display(){
        push();
        image(sadImage, this.x, this.y, this.width, this.height);
        pop();
    }
}