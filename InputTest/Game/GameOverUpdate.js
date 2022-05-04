import Component from "../Engine/Component.js"
import Input from "../Engine/Input.js"

class GameOverUpdate extends Component {
    constructor(parent) 
    {
        super(parent);
    }
    update()
    {
        if(Input.keys["r"] == true)
        {
            Game.changeScene(0);
        }
    }
}

export default GameOverUpdate;