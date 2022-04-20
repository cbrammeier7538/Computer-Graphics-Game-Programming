import GameObject from "../Engine/GameObject.js"
import ScoreUpdateComponent from "./ScoreUpdateComponent.js";
import Text from "../engine/Text.js";
import TextDraw from "../engine/TextDraw.js";

class ScoreGameObject extends GameObject {
    constructor(x,y){
        super();
        this.components.push(new Text(this,x,y,"", "50px sans"));
        this.components.push(new TextDraw(this, "black","white"));
        this.components.push(new ScoreUpdateComponent(this));
    }
}

export default ScoreGameObject;