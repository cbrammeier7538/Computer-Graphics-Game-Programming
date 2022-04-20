import Game from "../Engine/Game.js"
class Scene{
    constructor(title, fillColor = "white", strokeColor = "black"){
        this.title = title;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
    }
    restart(){
        this.gameObjects = [];
        this.start();
    }
    update(ctx){
        for(let gameObject of this.gameObjects) {
            gameObject.update(ctx);
        }
    }
    draw(ctx){
        ctx.fillStyle = this.fillColor;
        ctx.strokeStyle = this.strokeColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.strokeRect(0, 2, ctx.canvas.width, ctx.canvas.height);

        for(let gameObject of this.gameObjects){
            gameObject.draw(ctx);
        }
    }
    remove(){
        this.gameObjects = this.gameObjects.filter(g=>!g.markForDelete);
    }
}

export default Scene;