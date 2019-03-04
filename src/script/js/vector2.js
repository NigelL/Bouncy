class Vector2 {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    dot(other){
        return (x * other.x) + (y * other.y);
    }

}