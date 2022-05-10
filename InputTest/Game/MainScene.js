import Scene from "../Engine/Scene.js"
import EnemyRectangle from "./EnemyRectangle.js";
import RectangleGameObject from "./RectangleGameObject.js";
import ScoreGameObject from "./ScoreGameObject.js";
import EnemyRectangleTwo from "./EnemyRectangleTwo.js";
import time from "../Engine/time.js";



class MainScene extends Scene {
    constructor() {
        super("Main Rectangle Survival");
    }

    start()
    {
        this.gameObjects.push(new RectangleGameObject(100,500,50,50,"black"));
        this.gameObjects.push(new EnemyRectangle(500,500,50,50,"red"));
        this.gameObjects.push(new EnemyRectangleTwo(1500,500,50,50,"purple"));
        this.gameObjects.push(new ScoreGameObject(100, 100));
    }
}

export default MainScene;