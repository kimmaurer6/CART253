class Bin{

    constructor(w,h){   
        this.width = w;
        this.height = h;
        this.x = 0;
        this.y = height - this.height/2;
    }

    move(){
        this.x = mouseX;
    }

    display(){
        push();
        image(imgBin, this.width, this.height, this.x, this.y);
        pop();
    }
}