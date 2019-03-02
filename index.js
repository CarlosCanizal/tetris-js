class Figure {
    constructor() {
        this.position = "left";
        this.clockwise = ["left","top","bottom","right"];
    }

    rotate(){
        let index = this.clockwise.indexOf(this.position);
        index = index+1==this.clockwise.length?0:index+1;
        this.position = this.clockwise[index];
    }

    currentPosition(){
        return this.position;
    }

    getMesh(){
        return this.positions[this.position];
    }
}

class Line extends Figure{
    constructor(){
        super();
        this.positions = {
            "left"       : [[0,0],[0,1],[0,2],[0,3]],
            "top"        : [[0,0],[1,0],[2,0],[3,0]],
            "right"      : [[3,0],[3,1],[3,2],[3,3]],
            "bottom"     : [[0,3],[1,3],[2,3],[3,3]]
        }
    }
}

const line = new Line ();
console.log(line.currentPosition());
line.rotate()
console.log(line.currentPosition());
line.rotate()
console.log(line.currentPosition());
line.rotate()
console.log(line.currentPosition());
line.rotate()
console.log(line.currentPosition());
line.rotate()