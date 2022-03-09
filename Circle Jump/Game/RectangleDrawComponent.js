import Component from "../Engine/Component.js"
import GameObject from "../Engine/GameObject.js"
import RectangleUpdateComponent from "./RectangleUpdateComponent.js"
class RectangleDrawComponent extends Component {
    constructor(parent) {
        super(parent);
    }
    draw(ctx) {
        let updateComponent = this.parent.components.find(c=>c instanceof RectangleUpdateComponent);
        
        ctx.fillStyle = updateComponent.color
        ctx.strokeStyle = "white"
        ctx.beginPath()
            ctx.rect(
                updateComponent.recX,
                updateComponent.recY,
                updateComponent.width,
                updateComponent.height,
            )
        ctx.fill();
        ctx.stroke();
    }
}

export default RectangleDrawComponent;