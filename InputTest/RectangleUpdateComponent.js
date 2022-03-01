let x = 500;
let y = 500;
let offsetx = 50;
let width = 50;
let height = 50;
let color = "black";
let max = 1;
class RectangleUpdateComponent extends Component{
    constructor(parent, x, y, width, height, color){
        super(parent);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    update(){
        rectangle.color = "black"
        if(wisPressed){
            rectangle.y -= 5;
            rectangle.color = "green"
        }
        if(aisPressed){
            rectangle.x -= 5;
            rectangle.color = "yellow"
        }
        if(sisPressed){
            rectangle.y += 5;
            rectangle.color = "blue"
        }
        if(disPressed){
            rectangle.x += 5;
            rectangle.color = "red"
        }
    }
}
