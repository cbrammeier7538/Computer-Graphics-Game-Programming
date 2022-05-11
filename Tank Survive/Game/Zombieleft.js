import GameObject from "../Engine/GameObject.js"
import ZombieleftUpdate from "./ZombieleftUpdate.js";
import Rectangle from "../Engine/Rectangle.js";
import RectangleDrawComponent from "../Engine/RectangleDrawComponent.js";

class Zombieleft extends GameObject{
    constructor(x,y,width,height,color){
        super();
        this.components.push(new Rectangle(this, x, y, width, height));
        this.components.push(new RectangleDrawComponent(this, color, "white"));
        this.components.push(new ZombieleftUpdate(this,x,y,width,height,color));
    }
}

export default Zombieleft;