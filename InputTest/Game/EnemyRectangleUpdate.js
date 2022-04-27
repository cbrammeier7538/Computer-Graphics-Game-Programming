import Component from "../Engine/Component.js"
import time from "../Engine/time.js"
import Game from "../Engine/Game.js"
import Input from "../Engine/Input.js"


class EnemyRectangleUpdate extends Component{
    constructor(parent, x, y, width, height, color){
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
        rectangle.width = this.width;
        rectangle.height = this.height;
        rectangleDraw.color = this.color;
        if(rectangle.x != 0)
        {
            rectangle.x -= 5;
        }
        else
        {
            rectangle.x = 1800;
            rectangle.y = Math.floor(Math.random() * (920 - 0 + 1)) + 0;
        }

        
    }
}
export default EnemyRectangleUpdate;