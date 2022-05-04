import Rectangle from "./Rectangle.js";

class Collisions {
    static inCollision(one, two)
    {
        if(one instanceof Rectangle)
        {
            if(two instanceof Rectangle)
            {
                let outside = one.x > two.x + two.w || //Two is left of one
                    one.x + one.w < two.x || //Two is right of one
                    one.y > two.y + two.h || //Two is below one
                    one.y + one.h < two.y; //Two is above one
                return !outside
            }
        }
    }
}
export default Collisions;