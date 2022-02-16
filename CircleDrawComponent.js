class CircleDrawComponent extends Component {
    constructor(parent) {
        super(parent);
    }
    draw(ctx) {
        let updateComponent = this.parent.components.find(c=>c instanceof CircleUpdateComponent);
        
        ctx.fillStyle = updateComponent.c
        ctx.strokeStyle = "white"

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