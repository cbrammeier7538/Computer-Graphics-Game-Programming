import Component from "../Engine/Component.js"
import time from "../Engine/time.js"
import Game from "../Engine/Game.js"
import Input from "../Engine/Input.js"
import Zombiebot from "./Zombiebot.js"
import Collisions from "../Engine/Collisions.js"
import Bullet from "./Bullet.js"


class ZombiebotUpdate extends Component{
    constructor(parent, x, y, width, height, color){
        super(parent);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = 1;
        this.time = 0;
        this.dead = 0;
        this.counter = 14;
        this.buffer = 1;
    }
    update() 
    {
        let rectangle = this.parent.getComponent("Rectangle");
        let rectangleDraw = this.parent.getComponent("RectangleDrawComponent");
        let Bullet = Game.findByType("Bullet");

        rectangle.width = this.width;
        rectangle.height = this.height;
        rectangleDraw.color = this.color;
        if(this.dead == 0)
        {
            rectangle.y -= this.speed;
        }
        else
        {
            rectangle.x = -50;
        }
        this.time += time.secondsBetweenFrame
        if(this.time > this.counter)
        {
            let max = 875
            let min = 1050
            let difference = max - min;
            let rand = Math.random();
            rand = Math.floor(rand * difference);
            rand = rand + min;
            Game.scene().gameObjects.push(new Zombiebot(rand,930,50,50,"lime"));
            this.counter += 15 + this.buffer;
            this.buffer += 5;
        }
        for(let i = 0; i < Bullet.length; i++)
        {
            let rectangleGameObject = Bullet[i];
            let rectangleComponent = rectangleGameObject.getComponent("Rectangle");
            if(Collisions.inCollision(rectangle, rectangleComponent))
            {
                this.dead = 1;
            }
        }
        
    }
}
export default ZombiebotUpdate;