import Component from "../Engine/Component.js"
import Constants2 from "./Constants2.js"
import Time from "../Engine/Time.js"

let recX = Constants2.recX;
let recY = Constants2.recY;
let offsetX = Constants2.offsetX;
let width = Constants2.width;
let height = Constants2.height;
let color = Constants2.color;
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
        let rectangle = this.parent.getComponent("Rectangle");
        let rectangleDraw = this.parent.getComponent("RectangleDrawComponent");
        rectangle.recX = this.recX;
        rectangle.recY = this.recY;
        rectangle.width = this.width;
        rectangle.height = this.height;
        rectangleDraw.fillStyle = this.color;
    }
}

export default RectangleUpdateComponent;