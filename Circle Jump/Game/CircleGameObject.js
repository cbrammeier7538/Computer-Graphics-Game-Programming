import Component from "../Engine/Component.js"
import GameObject from "../Engine/GameObject.js"
import CircleUpdateComponent from "./CircleUpdateComponent.js";
import CircleDrawComponent from "./CircleDrawComponent.js";



class CircleGameObject extends GameObject{
    constructor(x,y,r,s,e,c){
        super();
        this.components.push(new CircleUpdateComponent(this,x,y,r,s,e,c));
        this.components.push(new CircleDrawComponent(this));
    }
    update(){
        this.components.filter(c=>c.update).forEach(c=>c.update());
    }
    draw(ctx){
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
    }
}

export default CircleGameObject;