import Scene from "../Engine/Scene.js"
import Text from "../Engine/Text.js"
import TextDraw from "../Engine/TextDraw.js"
import LivesGameObject from "./LivesGameObject.js"
import LivesObject from "./LivesObject.js"
import LivesUpdateComponent from "./LivesUpdateComponent.js"

class StartScene extends Scene {
    constructor(){
        super("Lives Scene");
    }
    start(){
        this.gameObjects.push(new LivesObject(50,50));
    }
}
export default StartScene