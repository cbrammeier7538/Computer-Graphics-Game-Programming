import Component from "../Engine/Component.js"
import time from "../Engine/time.js"
import Game from "../Engine/Game.js"
import Input from "../Engine/Input.js"
import EnemyRectangleThree from "./EnemyRectangleThree.js"
import RectangleGameObject from "./RectangleGameObject.js"
import Bullet from "./Bullet.js"


class EnemyRectangleUpdate extends Component
{
    constructor(parent, x, y, width, height, color)
    {
        super(parent);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = 2;
        this.time = 0;
        this.timeBullet = 0;
        this.counterBullet = 2;
        this.counter = 45;
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
            rectangle.x -= this.speed;
        }
        else if(rectangleDraw.color != "black")
        {
            rectangle.x = 1800;
            rectangle.y = Math.floor(Math.random() * (920 - 0 + 1)) + 0;
        }
        else
        {
            rectangle.x = -10;
        }
        this.time += time.secondsBetweenFrame;
        this.timeBullet += time.secondsBetweenFrame;
        if(this.time > this.counter)
        {
            Game.scene().gameObjects.push(new EnemyRectangleThree(1800,500,50,50,"cyan"));
            this.counter += 20 + this.buffer;
            this.buffer += 5;
        }
        if(this.timeBullet > this.counterBullet)
        {
            Game.scene().gameObjects.push(new Bullet(rectangle.x,rectangle.y + 10,25,25,"black"));
            this.timeBullet = 0;
        }
    }
}

export default EnemyRectangleUpdate;
