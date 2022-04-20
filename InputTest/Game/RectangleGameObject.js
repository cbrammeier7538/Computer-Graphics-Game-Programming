import GameObject from "../Engine/GameObject.js"
import RectangleUpdateComponent from "./RectangleUpdateComponent.js";
import Rectangle from "../Engine/Rectangle.js"
import RectangleDrawComponent from "../Engine/RectangleDrawComponent.js";

class RectangleGameObject extends GameObject{
    constructor(x,y,width,height,color){
        super();
        this.components.push(new Rectangle(this, x, y, width, height));
        this.components.push(new RectangleDrawComponent(this, color, "black"));
        this.components.push(new RectangleUpdateComponent(this,x,y,width,height,color));
    }
}

export default RectangleGameObject;