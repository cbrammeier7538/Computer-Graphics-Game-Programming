import Scene from "../Engine/Scene.js"
import EnemyRectangle from "./EnemyRectangle.js";
import RectangleGameObject from "./RectangleGameObject.js";
import ScoreGameObject from "./ScoreGameObject.js";
import time from "../Engine/time.js";



class MainScene extends Scene {
    constructor() {
        super("Main Rectangle Survival");
        this.time = 0;
        this.counter = 5;
    }

    start()
    {
        this.gameObjects.push(new RectangleGameObject(100,500,50,50,"black"));
        this.gameObjects.push(new EnemyRectangle(500,500,50,50,"red"));
        this.gameObjects.push(new ScoreGameObject(100, 100));
    }
}

export default MainScene;