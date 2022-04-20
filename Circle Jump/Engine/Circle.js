import Component from "./Component.js"

class Circle extends Component {
    constructor(parent, x, y, r, s, e) {
        super(parent);
        this.x = x;
        this.y = y;
        this.r = r;
        this.s = s;
        this.e = e;
    }
}

export default Circle;