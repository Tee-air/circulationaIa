class Vehicule {
    constructor(x, y, largeur) {
        this.canvas = $("#globalCanvas").get(0);
        this.context = this.canvas.getContext("2d");
        this.positionX = x;
        this.positionY = y;
        this.largeur = largeur;
        this.vitesse = 4;
        this.distanceSecu = 30;
    }

    Actions(noeudPositionX, noeudPositionY) {
        if (this.positionX === noeudPositionX - this.distanceSecu) {

        } else if (this.positionY === noeudPositionY - this.distanceSecu) {
            if (noeudPositionX === this.objectif.objectifX){
                

            }
        }

    }

    Avancer() {
        this.context.clearRect(this.positionX, this.positionY, this.largeur, 15);
        //this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
        //this.context.beginPath();
        //TODO: 
        this.positionY += this.vitesse;
        this.context.fillRect(this.positionX, this.positionY, this.largeur, 15);
        //this.context.closePath();
        //x+=4;

        //window.requestAnimationFrame(Avancer());
    }

    afficherInfos(vehicule) {
        console.log(vehicule + " positionY: " + this.positionY);
        console.log(vehicule + " positionX: " + this.positionX);
    }

    turn() {

    }

    Pop() {
        this.context.fillRect(this.positionX, this.positionY, this.largeur, 15);
        this.context.fillStyle = '#A3A';
    }

    getPS(pourcent, totalSize) {
        var nbPx;
        nbPx = Math.trunc(totalSize * pourcent);
        return +nbPx;
    }

    setObjectif(objectifX, objectifY) {
        this.objectif = {objectifY: objectifY,
            objectifX: objectifX};
    }

}