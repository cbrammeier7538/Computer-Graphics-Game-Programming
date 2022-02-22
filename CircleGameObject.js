class CircleGameObject extends GameObject{
    constructor(x,y,r,s,e,c){
        super();
        this.components.push(new CircleGameObject(this,x,y,r,s,e,c));
        this.components.push(new CircleDrawComponent(this));
        
    }
    update(){
        this.components.filter(c=>c.update).forEach(c=>c.update());
    }
    draw(){
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
    }
}