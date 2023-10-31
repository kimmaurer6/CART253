

class Leaves {

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.maxSpeed = 10;
        this.size = 40;
        this.active = true;
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

    bounce(bin){
        if (this.x > bin.x - bin.width/2 &&
            this.x < bin.x + bin.width/2 &&
            this.y + this.size/2 > bin.y - bin.height/2 &&
            this.y - this.size/2 < bin.y + bin.height/2){

            // bounce
            let dx = this.x - bin.x;
            this.vx = this.vx + map(dx, -bin.width/2, bin.width/2, -2, 2);

            this.vy = -this.vy;
            this.ay = 0;
            }
    }

    display(){
        push();
        image(imgLeaves, this.x, this.y);
        pop();
    }
}