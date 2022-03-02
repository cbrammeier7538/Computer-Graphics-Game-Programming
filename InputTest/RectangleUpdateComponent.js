let x = 500;
let y = 500;
let offsetx = 50;
let width = 50;
let height = 50;
let color = "black";
let max = 2;
class RectangleUpdateComponent extends Component{
    constructor(parent, x, y, width, height, color){
        super(parent);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    update() {
        this.color = "black"
        if(wisPressed){
            this.y -= 5;
            this.color = "green"
        }
        if(aisPressed){
            this.x -= 5;
            this.color = "yellow"
        }
        if(sisPressed){
            this.y += 5;
            this.color = "blue"
        }
        if(disPressed){
            this.x += 5;
            this.color = "red"
        }
    }
}
