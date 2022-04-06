import Component from "../Engine/Component.js"
import Time from "../Engine/Time.js"
import Game from "../Engine/Game.js"
import Input from "../Engine/Input.js"
import Constants from "./Constants.js"
import Constants2 from "./Constants2.js"







let x = Constants.x;
let y = Constants.y;
let r = Constants.r;
let s = Constants.s;
let e = Constants.e;
let c = Constants.c;
let max = Constants.max;

class CircleUpdateComponent extends Component{
    constructor(parent, x, y, r, s, e, c){
        super(parent);
        this.x = x;
        this.y = y;
        this.r = r;
        this.s = s;
        this.e = e;
        
    }
    update(){


        let RectangleGameObject = Game.findByType("RectangleGameObject")[0];
        let RectangleGameObject2 = Game.findByType("RectangleGameObject")[1];
        let RectangleGameObject3 = Game.findByType("RectangleGameObject")[2];
        let rectangle = RectangleGameObject.getComponent("Rectangle");
        let circle = this.parent.getComponent("Circle");
        let circleDraw = this.parent.getComponent("CircleDrawComponent");
        circleDraw.fillStyle = "red";
        Input.getKeyDown(e);
        if(Input.getMouseButton(0) > 0){ 
            if(circle.y == 500)
            {
                circleDraw.fillStyle = "green";
                if(circle.x == 1650)
                {
                    circleDraw.fillStyle = "green";
                }
                else
                {
                    circle.x +=5;
                }
            }
            else{
                circleDraw.fillStyle = "green";
                if(circle.x == 1650)
                {
                    circle.y -= 5;
                }
                else
                {
                    circle.y -= 5;
                    circle.x += 5;
                }
            }
        }
        else if(Input.keys["a"] == true){
            if(circle.y == 500)
            {
                circleDraw.fillStyle = "blue";
                if(circle.x == 100)
                {
                    circleDraw.fillStyle = "blue";
                }
                else
                {
                    circle.x -=5;
                }
            }
            else
            {
                circleDraw.fillStyle = "blue";
                if(circle.x == 100)
                {
                    circleDraw.fillStyle = "blue";
                    circle.y -= 5;
                }
                else
                {
                    circleDraw.fillStyle = "blue";
                    circle.y -= 5;
                    circle.x -= 5;
                }
            }
        }
        else
        {
            circleDraw.fillStyle = "red";
            if(circle.y == 900)
            {
                circleDraw.fillStyle = "red";
            }
            else
            {
                circle.y += 5;
            }
        }
        if(rectangle.x < circle.x && rectangle.x + rectangle.w > circle.x)
        {
        
        }
        else
        {
            Game.changeScene(0);
        }
    }
}

export default CircleUpdateComponent;
