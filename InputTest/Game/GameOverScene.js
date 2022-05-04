import Scene from "../Engine/Scene.js"
import Text from "../Engine/Text.js"
import TextDraw from "../Engine/TextDraw.js"
import GameOverObject from "./GameOverObject.js"

class GameOverScene extends Scene {
    constructor(){
        super("Main Rectangle Survival");
    }
    start(){
        this.gameObjects.push(new GameOverObject(500,500));
    }
}
export default GameOverScene;