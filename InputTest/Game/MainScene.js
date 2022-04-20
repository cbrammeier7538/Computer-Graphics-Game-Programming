import Scene from "../Engine/Scene.js"
import RectangleGameObject from "./RectangleGameObject.js";
import ScoreGameObject from "./ScoreGameObject.js";


class MainScene extends Scene {
    constructor() {
        super("Main Rectangle Survival");
    }

    start()
    {
        let player = new RectangleGameObject(500,500,50,50,"black");
        this.gameObjects.push(player);
        let score = new ScoreGameObject(100, 30);
        this.gameObjects.push(score);
    }
}

export default MainScene;