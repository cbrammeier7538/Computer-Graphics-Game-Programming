import Component from "../Engine/Component.js"

class LivesUpdateComponent extends Component {
    constructor(parent) {
        super(parent);
        this.lives = "Lives: 3";
    }
    update() {
        let text = this.parent.getComponent("Text");
        text.text = this.lives;
    }
}

export default LivesUpdateComponent;