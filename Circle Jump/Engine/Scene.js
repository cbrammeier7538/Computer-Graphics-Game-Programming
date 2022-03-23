class Scene{
    constructor(title){
        this.title = title;
        this.gameObjects = [];
    }
    update(){
        for(let gameObject of this.gameObjects) {
            gameObject.update();
        }
    }
    draw(ctx){
        ctx.fillStyle = "black"
        ctx.strokeStyle = "white"
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.strokeRect(0, 1, ctx.canvas.width, ctx.canvas.height);

        for(let gameObject of this.gameObjects){
            gameObject.draw(ctx);
        }
    }
    remove(){
        this.gameObjects = this.gameObjects.filter(g=>!g.markForDelete);
    }
}

export default Scene;