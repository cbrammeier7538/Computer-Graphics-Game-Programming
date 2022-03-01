class RectangleGameObject extends GameObject{
    constructor(x,y,width,height,color){
        super();
        this.components.push(new RectangleGameObject(this,x,y,width,height,color));
        this.components.push(new RectangleDrawComponent(this));
    }
    update(){
        this.components.filter(c=>c.update).forEach(c=>c.update());
    }
    draw(){
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
    }
}