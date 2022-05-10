import Component from "../Engine/Component.js"
import time from "../Engine/time.js"
import Game from "../Engine/Game.js"
import Input from "../Engine/Input.js"
import EnemyRectangleTwo from "./EnemyRectangleTwo.js"
import RectangleGameObject from "./RectangleGameObject.js"


class EnemyRectangleUpdate extends Component{
    constructor(parent, x, y, width, height, color){
        super(parent);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = 1;
        this.time = 0;
        this.counter = 30;
        this.buffer = 1;
        this.flag = 0;
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
            if(this.flag == 0)
            {
                if(rectangle.y == 0)
                {
                    this.flag = 1;
                }
                else
                {
                    rectangle.x -= this.speed;
                    rectangle.y -= this.speed;
                }
            }
            if(this.flag == 1)
            {
                if(rectangle.y == 920)
                {
                    this.flag = 0;
                }
                else
                {
                rectangle.x -= this.speed;
                rectangle.y += this.speed;
                }
            }
        }
        else
        {
            rectangle.x = 1800;
            rectangle.y = Math.floor(Math.random() * (920 - 0 + 1)) + 0;
        }
        this.time += time.secondsBetweenFrame
        if(this.time > this.counter)
        {
            Game.scene().gameObjects.push(new EnemyRectangleTwo(1800,500,50,50,"purple"));
            this.counter += 15 + this.buffer;
            this.buffer += 5;
        }
        
    }
}
export default EnemyRectangleUpdate;