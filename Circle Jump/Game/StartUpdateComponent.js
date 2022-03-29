import Component from "../Engine/Component.js"
import Game from "../Engine/Game.js"
import Time from "../Engine/Time.js"

class StartUpdateComponent extends Component {
    constructor(parent){
        super(parent);
        this.time = 0;
    }
    update() {
        this.time += Time.secondsBetweenFrame;
        if(this.time > 1){
            Game.changeScene(1)
        }
    }
}

export default StartUpdateComponent;