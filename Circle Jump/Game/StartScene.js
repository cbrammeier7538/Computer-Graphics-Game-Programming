import Scene from "../Engine/Scene.js"
import Text from "../Engine/Text.js"
import TextDraw from "../Engine/TextDraw.js"
import CircleGameObject from "./CircleGameObject.js"
import StartGameObject from "./StartGameObject.js"
import LevelGameObject from "./LevelGameObject.js"
import StartUpdateComponent from "./StartUpdateComponent.js";
import Constants from "./Constants.js"

class StartScene extends Scene {
    constructor(){
        super("Main Circle Jump Scene");
    }
    start(){
        this.gameObjects.push(new StartGameObject(900,500));
        this.gameObjects.push(new LevelGameObject(1000,400));
        this.gameObjects.push(new CircleGameObject(800,500,Constants.r,Constants.s,Constants.e,Constants.c));
    }
}
export default StartScene