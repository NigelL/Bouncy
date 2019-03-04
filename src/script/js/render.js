class Render{
    constructor(canvas){
        this.canvas = canvas;
        this.canText = canvas.getContext("2d");
    }

    DrawSprite(obj){
        this.canText.drawImage(obj.sprite,obj.posX,obj.posY,obj.width,obj.height,0,0,obj.width,obj.height);
    }
    

}