import Game from "../Engine/Game.js"
import Scene from "../Engine/Scene.js"
import Text from "../Engine/Text.js"
import TextDraw from "../Engine/TextDraw.js"
import GameOverObject from "./GameOverObject.js"
import GameOverRObject from "./GameOverRObject.js"
import ScoreFinalObject from "./ScoreFinalObject.js"

class GameOverScene extends Scene {
    constructor(){
        super("Main Rectangle Survival");
    }
    start(){
        this.gameObjects.push(new GameOverObject(500,500));
        this.gameObjects.push(new GameOverRObject(650,700));
        this.gameObjects.push(new ScoreFinalObject(725, 575));
        Game.persist.score = 0;
    }
}
export default GameOverScene;