import Component from "../Engine/Component.js"
import time from "../Engine/time.js"
import Game from "../Engine/Game.js"
import Input from "../Engine/Input.js"
import EnemyRectangleThree from "./EnemyRectangleThree.js"
import RectangleGameObject from "./RectangleGameObject.js"


class EnemyRectangleThreeUpdate extends Component
{
    constructor(parent, x, y, width, height, color){
        super(parent);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = 1;
        this.time = 0;
        this.counter = 30;
        this.buffer = 1;
        this.flag = 0;
}
}

export default EnemyRectangleUpdate;
