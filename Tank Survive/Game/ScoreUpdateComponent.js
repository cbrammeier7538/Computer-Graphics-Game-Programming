import Component from "../Engine/Component.js"
import Game from "../Engine/Game.js";

class ScoreUpdateComponent extends Component {
    constructor(parent) {
        super(parent);
        this.ticks = 0;
    }
    update(){
        let text = this.parent.getComponent("Text");
        if(!Game.persist)
        {
            Game.persist = {};
        }
        if(!Game.persist.score)
        {
            Game.persist.score = 1;
        }
        else
        {
            Game.persist.score++;
        }
        text.text = Game.persist.score;
        
    }
}

export default ScoreUpdateComponent;