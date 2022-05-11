import GameObject from "../Engine/GameObject.js"
import ZombierightUpdate from "./ZombierightUpdate.js";
import Rectangle from "../Engine/Rectangle.js";
import RectangleDrawComponent from "../Engine/RectangleDrawComponent.js";

class Zombieright extends GameObject{
    constructor(x,y,width,height,color){
        super();
        this.components.push(new Rectangle(this, x, y, width, height));
        this.components.push(new RectangleDrawComponent(this, color, "white"));
        this.components.push(new ZombierightUpdate(this,x,y,width,height,color));
    }
}

export default Zombieright;