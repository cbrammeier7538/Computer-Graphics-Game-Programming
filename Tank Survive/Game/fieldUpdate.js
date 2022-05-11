import Component from "../Engine/Component.js"
import time from "../Engine/time.js"
import Game from "../Engine/Game.js"
import Input from "../Engine/Input.js"
import Collisions from "../Engine/Collisions.js"
import Zombieleft from "./Zombieleft.js"
import Zombietop from "./Zombietop.js"
import Zombieright from "./Zombieright.js"
import Zombiebot from "./Zombiebot.js"
import field from "./field.js"



class fieldUpdate extends Component
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
            let Zombieleft = Game.findByType("Zombieleft");
            let Zombietop = Game.findByType("Zombietop");
            let Zombieright = Game.findByType("Zombieright");
            let Zombiebot = Game.findByType("Zombiebot");

            rectangle.x = this.x;
            rectangle.y = this.y;
            rectangle.width = this.width;
            rectangle.height = this.height;
            rectangleDraw.fillStyle = this.color;
            for(let i = 0; i < Zombieleft.length; i++)
        {
            let rectangleGameObject = Zombieleft[i];
            let rectangleComponent = rectangleGameObject.getComponent("Rectangle");
            if(Collisions.inCollision(rectangle, rectangleComponent))
            {
                Game.changeScene(1);
            }
        }
        for(let i = 0; i < Zombietop.length; i++)
        {
            let rectangleGameObject = Zombietop[i];
            let rectangleComponent = rectangleGameObject.getComponent("Rectangle");
            if(Collisions.inCollision(rectangle, rectangleComponent))
            {
                Game.changeScene(1);
            }
        }
        for(let i = 0; i < Zombieright.length; i++)
        {
            let rectangleGameObject = Zombieright[i];
            let rectangleComponent = rectangleGameObject.getComponent("Rectangle");
            if(Collisions.inCollision(rectangle, rectangleComponent))
            {
                Game.changeScene(1);
            }
        }
        for(let i = 0; i < Zombiebot.length; i++)
        {
            let rectangleGameObject = Zombiebot[i];
            let rectangleComponent = rectangleGameObject.getComponent("Rectangle");
            if(Collisions.inCollision(rectangle, rectangleComponent))
            {
                Game.changeScene(1);
            }
        }
        }
}

export default fieldUpdate;