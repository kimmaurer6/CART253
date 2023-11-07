class Sonic {
    constructor(x,y,sonicImage){
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        //this.width = ;
       // this.height = 200;
        this.speed = 7;
        this.active = true;
        this.image = sonicImage;
    }

    display() {
        push();
        image(sonicImage, this.x, this.y, this.width, this.height);
        pop();
    }

    controlPlayer() {
        if(keyIsDown(68)){      // d
            this.vx = this.speed;
        }
        else if(keyIsDown(65)) {    // a
            this.vx = -this.speed;
        }
        else{
            this.vx = 0;
        }
        this.x += this.vx;

        if(keyIsDown(87)) {     // w
            this.vy = this.speed;
        }
        else if(keyIsDown(83)) {    // s
            this.vy = -this.speed;
        } 
        else{
            this.vy = 0;
        }
        this.y += this.vy;
    }

}