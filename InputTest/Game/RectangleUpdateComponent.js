
import Component from "../Engine/Component.js"
import Time from "../Engine/Time.js"
import Game from "../Engine/Game.js"
import Input from "../Engine/Input.js"

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
        let rectangle = this.parent.getComponent("Rectangle");
        let rectangleDraw = this.parent.getComponent("RectangleDrawComponent");
        

        rectangle.color = "black"
        if(Input.keys["w"] == true){
            rectangle.y -= 5;
            rectangle.color = "green"
        }
        if(Input.keys["a"] == true){
            rectangle.x -= 5;
            rectangle.color = "yellow"
        }
        if(Input.keys["s"] == true){
            rectangle.y += 5;
            rectangle.color = "blue"
        }
        if(Input.keys["d"] == true){
            rectangle.x += 5;
            rectangle.color = "red"
        }
    }
}
