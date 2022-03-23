import Component from "../Engine/Component.js"
import Constants from "./Constants.js"
import Time from "../Engine/Time.js"
import Input from "../Engine/Input.js"






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
        else{
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
    }
}

export default CircleUpdateComponent;
