class Point{

    constructor(private x?:number,private y?: number){
        this.x = x;
        this.y = y;
    }

    draw()
    {
        console.log('X: ' + this.x+', Y: '+ this.y);
    }

    getX(){
        return this.x;
    }
}


let point: Point = new Point(1,2);
let x = point.getX();
point.draw();
