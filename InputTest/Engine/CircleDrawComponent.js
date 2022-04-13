import Component from "./Component.js"




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
            circle.x,
            circle.y,
            circle.r,
            circle.s,
            circle.e
        )
        ctx.fill();
        ctx.stroke();
    }
}

export default CircleDrawComponent;