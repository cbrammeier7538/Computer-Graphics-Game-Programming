let x = 300;
let y = 300;
let r = 50;
let s = 0;
let e = Math.PI*2;
let c = "black";
let max = 1;

class CircleUpdateComponent extends Component{
    constructor(parent, x, y, r, s, e, c){
        super(parent);
        this.x = x;
        this.y = y;
        this.r = r;
        this.s = s;
        this.e = e;
        this.c = c;
    }
    update(){
        this.c = "red";
        if(mouseIsDown){ 
            if(this.y == 500)
            {
                this.c = "green";
                if(this.x == 1650)
                {
                    this.c = "green";
                }
                else{
                    this.x +=5;
                    }
            }
            else{
                this.c = "green";
                if(this.x == 1650)
                {
                    this.y -= 5;
                }
                else{
                    this.y -= 5;
                    this.x += 5;
                }
            }
        }
        else if(aisPressed){
            if(this.y == 500)
            {
                this.c = "blue";
                if(this.x == 100)
                {
                    this.c = "blue";
                }
                else{
                    this.x -=5;
                }
            }
            else
            {
                this.c = "blue";
                if(this.x == 100)
                {
                    this.c = "blue";
                    this.y -= 5;
                }
                else
                {
                    this.c = "blue";
                    this.y -= 5;
                    this.x -= 5;
                }
            }
        }
        else{
                this.c = "red";
                if(this.y == 900)
                {
                    this.c = "red";
                }
                else
                {
                    this.y += 5;
                }
    }
    }
}
