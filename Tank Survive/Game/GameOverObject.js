import GameObject from "../Engine/GameObject.js"
import Text from "../engine/Text.js";
import TextDraw from "../engine/TextDraw.js";
import GameOverUpdate from "./GameOverUpdate.js";

class GameOverObject extends GameObject {
    constructor(x,y)
    {
        super();
        this.x = x;
        this.y = y;
        this.start();
    }
    start()
    {
        this.components.push(new Text(this,this.x,this.y,"GAME OVER", "150px sans"));
        this.components.push(new TextDraw(this, "black","white"));
        this.components.push(new GameOverUpdate(this));
    }
}

export default GameOverObject;