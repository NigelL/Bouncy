class Box  {
    constructor(width,height,axis){
        this.width = width;
        this.height = height;
        this.axis = axis;
        this.halfWidth = width * 0.5;
        this.halfHeight = height * 0.5;
    }

    Rotate(rad){
        axis.x = axis.x * Math.cos(rad) - axis.y * Math.sin(rad);
        axis.y = axis.x * Math.sin(rad) + axis.y * Math.cos(rad); 
    }


}