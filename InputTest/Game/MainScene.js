import Scene from "../Engine/Scene.js"
import RectangleGameObject from "./RectangleGameObject.js";
import CircleGameObject from "./CircleGameObject.js";

class MainScene extends Scene {
    constructor() {
        super("Main Circle Jump Scene");
    }

    start(){
        this.gameObjects.push(new RectangleGameObject(500, 500, 50, 50, "black"));
    }
}

export default MainScene;