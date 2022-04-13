import Component from "./Component.js"

class RectangleDrawComponent extends Component {
    constructor(parent, fillStyle, strokeStyle) {
        super(parent);
        this.fillStyle = fillStyle;
        this.strokeStyle = strokeStyle;
    }
    draw(ctx) {
        let rectangle = this.parent.getComponent("Rectangle");
        
        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;
        ctx.beginPath()
            ctx.rect(
                rectangle.recX,
                rectangle.recY,
                rectangle.width,
                rectangle.height,
            )
        ctx.fill();
        ctx.stroke();
    }
}

export default RectangleDrawComponent;