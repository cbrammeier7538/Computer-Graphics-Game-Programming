import GameObject from "../Engine/GameObject.js"
import Text from "../Engine/Text.js"
import TextDraw from "../Engine/TextDraw.js"
import LivesUpdateComponent from "./LivesUpdateComponent.js"

class LivesObject extends GameObject {
    constructor(x,y){
        super();
        this.x = x;
        this.y = y;
        this.start();
    }
    start(){
        this.components.push(new Text(this,this.x,this.y,"Lives x3", "50px sans"))
        this.components.push(new TextDraw(this,"blue", "orange"));
        this.components.push(new LivesUpdateComponent(this));
    }
}

export default LivesObject;