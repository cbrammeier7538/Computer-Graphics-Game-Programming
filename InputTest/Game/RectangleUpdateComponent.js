
import Component from "../Engine/Component.js"
import time from "../Engine/time.js"
import Game from "../Engine/Game.js"
import Input from "../Engine/Input.js"
import Collisions from "../Engine/Collisions.js"


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
        let EnemyRectangle = Game.findByType("EnemyRectangle")[0];
        let rectangle2 = EnemyRectangle.getComponent("Rectangle");
        
        
        rectangle.width = this.width;
        rectangle.height = this.height;

        rectangleDraw.fillStyle = "black"
        if(Input.keys["w"] == true){
            if(rectangle.y == 0)
            {
                rectangleDraw.fillStyle = "green";
            }
            else
            {
            rectangle.y -= 5;
            rectangleDraw.fillStyle = "green";
            }
        }
        if(Input.keys["a"] == true){
            if(rectangle.x == 0)
            {
                rectangleDraw.fillStyle = "yellow";
            }
            else
            {
            rectangle.x -= 5;
            rectangleDraw.fillStyle = "yellow";
            }
        }
        if(Input.keys["s"] == true){
            if(rectangle.y == 925)
            {
                rectangleDraw.fillStyle = "blue";
            }
            else
            {
            rectangle.y += 5;
            rectangleDraw.fillStyle = "blue";
            }
        }
        if(Input.keys["d"] == true){
            if(rectangle.x == 1500)
            {
                rectangleDraw.fillStyle = "orange";
            }
            else
            {
            rectangle.x += 5;
            rectangleDraw.fillStyle = "orange";
            }
        }
        if(Collisions.inCollision(rectangle, rectangle2))
        {
            rectangleDraw.fillStyle = "red"
        }
    }
}
export default RectangleUpdateComponent;