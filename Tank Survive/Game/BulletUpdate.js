import Component from "../Engine/Component.js"
import time from "../Engine/time.js"
import Game from "../Engine/Game.js"
import Input from "../Engine/Input.js"
import Bullet from "./Bullet.js"
import RectangleGameObject from "./RectangleGameObject.js"


class BulletUpdate extends Component
{
    constructor(parent, x, y, width, height, color)
    {
        super(parent);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = 10;
        this.time = 0;
        this.counter = 45;
        this.buffer = 1;
        this.flag = 0;
    }
    update() 
    {
        let rectangle = this.parent.getComponent("Rectangle");
        let rectangleDraw = this.parent.getComponent("RectangleDrawComponent");
        let playerRectangle = Game.findByType("RectangleGameObject")[0];
        let rectangleComponent = playerRectangle.getComponent("Rectangle");

        rectangle.width = this.width;
        rectangle.height = this.height;
        rectangleDraw.color = this.color;

        if(rectangle.x < rectangleComponent.x)
        {
            rectangle.x -= this.speed;
        }
        else if(rectangle.x > rectangleComponent.x + 40)
        {
            rectangle.x += this.speed;
        }
        else if(rectangle.y > rectangleComponent.y)
        {
            rectangle.y += this.speed;
        }
        else if(rectangle.y < rectangleComponent.y)
        {
            rectangle.y -= this.speed;
        }
    }
}

export default BulletUpdate;