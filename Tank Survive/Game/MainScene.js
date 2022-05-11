import Scene from "../Engine/Scene.js"
import RectangleGameObject from "./RectangleGameObject.js";
import ScoreGameObject from "./ScoreGameObject.js";
import time from "../Engine/time.js";
import field from "./field.js";
import Zombieleft from "./Zombieleft.js";
import Zombietop from "./Zombietop.js";
import Zombieright from "./Zombieright.js";
import Zombiebot from "./Zombiebot.js";



class MainScene extends Scene {
    constructor() {
        super("Main Tank Survival");
    }

    start()
    {
        this.gameObjects.push(new field(875,375,200,200,"gray"));
        this.gameObjects.push(new RectangleGameObject(950,450,50,50,"black"));
        this.gameObjects.push(new Zombieleft(0, 375, 50, 50, "lime"));
        this.gameObjects.push(new Zombietop(950, 0, 50, 50, "lime"));
        this.gameObjects.push(new Zombieright(1900, 425,50,50,"lime"));
        this.gameObjects.push(new Zombiebot(925,930,50,50,"lime"));
        this.gameObjects.push(new ScoreGameObject(100, 100));
    }
}

export default MainScene;