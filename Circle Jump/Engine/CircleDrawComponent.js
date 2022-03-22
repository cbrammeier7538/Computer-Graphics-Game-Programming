import Component from "./Component.js"
import GameObject from "./GameObject.js"
import CircleUpdateComponent from "../Game/CircleUpdateComponent.js"



class CircleDrawComponent extends Component {
    constructor(parent, fillStyle, strokeStyle) {
        super(parent);
        this.fillStyle = fillStyle;
        this.strokeStyle = strokeStyle;
    }
    draw(ctx) {
        let circle = this.parent.getComponent("Circle");
        
        ctx.fillStyle = this.fillStyle
        ctx.strokeStyle = this.strokeStyle;

        ctx.beginPath()
        ctx.arc(
            updateComponent.x,
            updateComponent.y,
            updateComponent.r,
            updateComponent.s,
            updateComponent.e
        )
        ctx.fill();
        ctx.stroke();
    }
}

export default CircleDrawComponent;