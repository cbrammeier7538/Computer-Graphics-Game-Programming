import Scene from "../Engine/Scene.js"
import RectangleGameObject from "./RectangleGameObject.js";
import CircleGameObject from "./CircleGameObject.js";
import Constants from "./Constants.js";
import Constants2 from "./Constants2.js";
class MainScene extends Scene {
    constructor() {
        super("Main Scene Level 1");
    }

    start(){
        this.gameObjects.push(new CircleGameObject(Constants.x,Constants.y,Constants.r,Constants.s,Constants.e,Constants.c));
        this.gameObjects.push(new RectangleGameObject(Constants2.recX,Constants2.recY,Constants2.width,Constants2.height,Constants2.color));
        this.gameObjects.push(new RectangleGameObject(Constants2.recX + 1000, Constants2.recY, Constants2.width + 50, Constants2.height + 50, "grey"));
        this.gameObjects.push(new RectangleGameObject(Constants2.recX + 500, Constants2.recY, Constants2.width + 50, Constants2.height, Constants2.color));
    }
}

export default MainScene;