let recX = 500;
let recY = 900;
let offsetX = 50;
let width = 10;
let height = 50;
let color = "brown";
class RectangleUpdateComponent extends Component{
    constructor(parent, recX, recY, width, height, color){
        super(parent);
        this.recX = recX;
        this.recY = recY;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    update(){
        this.recX = recX;
        this.recY = recY;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}