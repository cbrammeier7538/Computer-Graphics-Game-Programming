import GameObject from "../Engine/GameObject.js"
import Text from "../Engine/Text.js"
import TextDraw from "../Engine/TextDraw.js"
import StartUpdateComponent from "./StartUpdateComponent.js"
import CircleGameObject from "./CircleGameObject.js"

class LevelGameObject extends GameObject{
    constructor(x,y){
        super();
        this.x = x;
        this.y = y;
        this.start();
    }
    start(){
        this.components.push(new Text(this, this.x, this.y, "Level 1", "30px Sans"))
        this.components.push(new TextDraw(this,"Orange","White"))
        this.components.push(new StartUpdateComponent(this))
    }
}

export default LevelGameObject;