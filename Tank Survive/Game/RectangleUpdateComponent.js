import Component from "../Engine/Component.js"
import time from "../Engine/time.js"
import Game from "../Engine/Game.js"
import Input from "../Engine/Input.js"
import Collisions from "../Engine/Collisions.js"
import Bullet from "./Bullet.js"



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
        this.time = 0;
        this.fireRate = 0;
        this.counter = 1;
    }
        update() 
        {
            let rectangle = this.parent.getComponent("Rectangle");
            let rectangleDraw = this.parent.getComponent("RectangleDrawComponent");
            rectangle.width = this.width;
            rectangle.height = this.height;
            rectangleDraw.fillStyle = this.color;

            if(Input.keys["w"] == true){
                if(rectangle.y == 375)
                {
                    
                }
                else
                {
                rectangle.y -= 5;
                }
            }
            if(Input.keys["a"] == true){
                if(rectangle.x == 875)
                {
                }
                else
                {
                rectangle.x -= 5;
                }
            }
            if(Input.keys["s"] == true){
                if(rectangle.y == 525)
                {
                }
                else
                {
                rectangle.y += 5;
                }
            }
            if(Input.keys["d"] == true){
                if(rectangle.x == 1025)
                {
                }
                else
                {
                rectangle.x += 5;
                }
            }
            this.time += time.secondsBetweenFrame;
            if(Input.keys["j"] == true)
            {
                if(this.fireRate != 1)
                {
                Game.scene().gameObjects.push(new Bullet(rectangle.x - 10,rectangle.y + 10,25,25,"black"));
                this.fireRate = 1;
                }
                if(this.time > this.counter)
                {
                    this.time = 0;
                    this.fireRate = 0;
                }
            }
            if(Input.keys["i"] == true)
            {
                if(this.fireRate != 1)
                {
                Game.scene().gameObjects.push(new Bullet(rectangle.x + 10,rectangle.y - 10,25,25,"black"));
                this.fireRate = 1;
                }
                if(this.time > this.counter)
                {
                    this.time = 0;
                    this.fireRate = 0;
                }
            }
            if(Input.keys["k"] == true)
            {
                if(this.fireRate != 1)
                {
                Game.scene().gameObjects.push(new Bullet(rectangle.x + 10,rectangle.y + 10,25,25,"black"));
                this.fireRate = 1;
                }
                if(this.time > this.counter)
                {
                    this.time = 0;
                    this.fireRate = 0;
                }
            }
            if(Input.keys["l"] == true)
            {
                if(this.fireRate != 1)
                {
                Game.scene().gameObjects.push(new Bullet(rectangle.x + 60,rectangle.y + 10 ,25,25,"black"));
                this.fireRate = 1;
                }
                if(this.time > this.counter)
                {
                    this.time = 0;
                    this.fireRate = 0;
                }
            }
        }
}

export default RectangleUpdateComponent;