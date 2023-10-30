class Flower {
    // we will define what a flower is like in here
    constructor(){
        // we write instructions to set up a flower here
        this.x = random(0, width);
        this.y = random(0, height);
        this.size = 50;
        this.stemLength = 75;
        this.stemThickness = 10;
        this.petalThickness = 10
        // colour information
        this.stemColour = {
            r: 50,
            g: 150,
            b: 50
        };
        this.petalColour = {
            r: 200,
            g: 50,
            b: 50
        };
        this.centreColour = {
            r: 50,
            g: 0,
            b: 0
        };
    }

    // display()
    // displays the flower
    display(){
        push();
        // set the stroke weight for the petals and stem
        strokeWeight(this.stemThickness);
        // draw the stem
        stroke(this.stemColour.r, this.stemColour.g, this.stemColour.b);
        line(this.x, this.y, this.x, this.y + this.stemLength);
        // draw circle with heavy outline for flower
        strokeWeight(this.petalThickness);
        fill(this.centreColour.r, this.centreColour.g, this.centreColour.b);
        stroke(this.petalColour.r, this.petalColour.g, this.petalColour.b);
        ellipse(this.x, this.y, this.size);
        pop();
    }
}