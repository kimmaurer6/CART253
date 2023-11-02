

class Leaves {

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.maxSpeed = 10;
        this.size = 10;
        this.width = 70;
        this.height = 70
        this.active = true;
        this.image = leafImage;
    }

    gravity(force){
        this.ay = this.ay + force;
    }

    move(){
        this.vx = this.vx + this.ax;
        this.vy = this.vy + this.ay;

        this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
        this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        if (this.y - this.size/2 > height){
            this.active = false;
        }
    }


    display(){
        push();
        image(leafImage, this.x, this.y, this.width, this.height);
        pop();
    }
}
