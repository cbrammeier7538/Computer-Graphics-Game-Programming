import GameObject from "../Engine/GameObject.js"
import Text from "../engine/Text.js";
import TextDraw from "../engine/TextDraw.js";
import GameOverUpdate from "./GameOverUpdate.js";

class GameOverRObject extends GameObject {
    constructor(x,y)
    {
        super();
        this.x = x;
        this.y = y;
        this.start();
    }
    start()
    {
        this.components.push(new Text(this,this.x,this.y,"Hit R to Retry", "100px sans"));
        this.components.push(new TextDraw(this, "black","white"));
        this.components.push(new GameOverUpdate(this));
    }
}

export default GameOverRObject;