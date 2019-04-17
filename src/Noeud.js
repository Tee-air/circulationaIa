class Noeud {
    //
    constructor(nombreArretes, positionX, positionY) {
        this.label = "Noeud";
        this.nombreArretes = nombreArretes;
        this.positionX = positionX;
        this.positionY = positionY;
    }
    
    getPositionY(){
        return this.positionY;
    }
    
    getPositionX(){
        return this.positionX;
    }

}