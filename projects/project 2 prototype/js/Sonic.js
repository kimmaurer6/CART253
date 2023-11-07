class Sonic {
    constructor(x,y,sonicImage){
        this.x = 400;
        this.y = 100;
        this.vx = 0;
        this.vy = 0;
        this.width = 200;
        this.height = 200;
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
        if(keyIsDown(39)){      // right arrow
            this.vx = this.speed;
        }
        else if(keyIsDown(37)) {    // left arrow
            this.vx = -this.speed;
        }

        if(keyIsDown(38)) {     // up arrow
            this.vy = this.speed;
        }
        else if(keyIsDown(40)) {    // down arrow
            this.vy = -this.speed;
        } 
    }
}