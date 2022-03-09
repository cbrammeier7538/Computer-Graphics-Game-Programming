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
        this.c = c;
    }
    update(){
        this.c = "red";
        Input.getKeyDown(e);
        if(Input.getMouseButton(0) > 0){ 
            if(this.y == 500)
            {
                this.c = "green";
                if(this.x == 1650)
                {
                    this.c = "green";
                }
                else
                {
                    this.x +=5;
                }
            }
            else{
                this.c = "green";
                if(this.x == 1650)
                {
                    this.y -= 5;
                }
                else
                {
                    this.y -= 5;
                    this.x += 5;
                }
            }
        }
        else if(Input.keysDown["a"] == true){
            if(this.y == 500)
            {
                this.c = "blue";
                if(this.x == 100)
                {
                    this.c = "blue";
                }
                else
                {
                    this.x -=5;
                }
            }
            else
            {
                this.c = "blue";
                if(this.x == 100)
                {
                    this.c = "blue";
                    this.y -= 5;
                }
                else
                {
                    this.c = "blue";
                    this.y -= 5;
                    this.x -= 5;
                }
            }
        }
        else{
                this.c = "red";
                if(this.y == 900)
                {
                    this.c = "red";
                }
                else
                {
                    this.y += 5;
                }
    }
    }
}

export default CircleUpdateComponent;
