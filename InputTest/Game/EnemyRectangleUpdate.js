import Component from "../Engine/Component.js"
import time from "../Engine/time.js"
import Game from "../Engine/Game.js"
import Input from "../Engine/Input.js"
import EnemyRectangle from "./EnemyRectangle.js"


class EnemyRectangleUpdate extends Component{
    constructor(parent, x, y, width, height, color){
        super(parent);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = 5;
        this.time = 0;
        this.counter = 15;
        this.buffer = 1;
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
            rectangle.x -= this.speed;
        }
        else
        {
            rectangle.x = 1800;
            rectangle.y = Math.floor(Math.random() * (920 - 0 + 1)) + 0;
        }
        this.time += time.secondsBetweenFrame
        if(this.time > this.counter)
        {
            Game.scene().gameObjects.push(new EnemyRectangle(1800,500,50,50,"red"));
            this.counter += 15 + this.buffer;
            this.buffer += 5;
        }
        
    }
}
export default EnemyRectangleUpdate;