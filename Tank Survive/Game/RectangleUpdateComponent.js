import Component from "../Engine/Component.js"
import time from "../Engine/time.js"
import Game from "../Engine/Game.js"
import Input from "../Engine/Input.js"
import Collisions from "../Engine/Collisions.js"



class RectangleUpdateComponent extends Component
{
    constructor(parent, x, y, width, height, color)
    {
        super(parent);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
        update() 
        {
            let rectangle = this.parent.getComponent("Rectangle");
            let rectangleDraw = this.parent.getComponent("RectangleDrawComponent");
            rectangle.x = this.x;
            rectangle.y = this.y;
            rectangle.width = this.width;
            rectangle.height = this.height;
            rectangleDraw.fillStyle = this.color;
        }
}

export default RectangleUpdateComponent;