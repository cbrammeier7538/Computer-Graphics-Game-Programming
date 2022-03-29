import GameObject from "../Engine/GameObject.js"
import Text from "../Engine/TextDraw.js";
import TextDraw from "../Engine/TextDraw.js";

class LivesGameObject extends GameObject{
    constructor(x,y){
        super();
        this.components.push(new Text(this,x,y,"", "100px sans"));
        this.components.push(new TextDraw(this, "blue", "orange"));
    }

}

export default LivesGameObject;