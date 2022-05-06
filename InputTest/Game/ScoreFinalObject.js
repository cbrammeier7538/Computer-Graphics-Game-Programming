import GameObject from "../Engine/GameObject.js"
import ScoreUpdateComponent from "./ScoreUpdateComponent.js";
import Text from "../engine/Text.js";
import TextDraw from "../engine/TextDraw.js";
import Game from "../Engine/Game.js";

class ScoreFinalObject extends GameObject {
    constructor(x,y){
        super();
        let text = "FINAL SCORE: " + Game.persist.score;
        this.components.push(new Text(this,x,y,text, "50px sans"));
        this.components.push(new TextDraw(this, "black","white"));
    }
}

export default ScoreFinalObject;