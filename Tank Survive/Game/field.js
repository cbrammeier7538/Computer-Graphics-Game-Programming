import GameObject from "../Engine/GameObject.js"
import Rectangle from "../Engine/Rectangle.js"
import fieldUpdate from "./fieldUpdate.js"
import RectangleDrawComponent from "../Engine/RectangleDrawComponent.js";

class field extends GameObject
{
    constructor(x,y,width,height,color)
    {
        super();
        this.components.push(new Rectangle(this, x, y, width, height));
        this.components.push(new RectangleDrawComponent(this, color, "white"));
        this.components.push(new fieldUpdate(this,x,y,width,height,color));
    }
}

export default field;