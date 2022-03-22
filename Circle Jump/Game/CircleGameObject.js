import GameObject from "../Engine/GameObject.js"
import CircleUpdateComponent from "./CircleUpdateComponent.js";
import Circle from "../Engine/Circle.js";
import CircleDrawComponent from "../Engine/CircleDrawComponent.js";



class CircleGameObject extends GameObject{
    constructor(x,y,r,s,e,c){
        super();
        this.components.push(new Circle(this,x,y,r,s,e));
        this.components.push(new CircleDrawComponent(this, c, "white"));
        this.components.push(new CircleUpdateComponent(this,x,y,r,s,e,c));
    }
}

export default CircleGameObject;