import Scene from "../Engine/Scene.js"
import Text from "../Engine/Text.js"
import TextDraw from "../Engine/TextDraw.js"
import CircleGameObject from "./CircleGameObject.js"
import LivesGameObject from "./LivesGameObject.js"
import LivesObject from "./LivesObject.js"
import LivesUpdateComponent from "./LivesUpdateComponent.js"
import Constants from "./Constants.js"

class StartScene extends Scene {
    constructor(){
        super("Lives Scene");
    }
    start(){
        this.gameObjects.push(new LivesObject(900,500));
        this.gameObjects.push(new CircleGameObject(800,500,Constants.r,Constants.s,Constants.e,Constants.c));
    }
}
export default StartScene