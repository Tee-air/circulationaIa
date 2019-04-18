class Vehicule {
    constructor(x, y, largeur, id) {
        this.canvas = $("#globalCanvas").get(0);
        this.context = this.canvas.getContext("2d");
        this.positionX = x;
        this.positionY = y;
        this.largeur = largeur;
        this.vitesse = 4;
        this.distanceSecu = 30;
        this.id = id;
    }

    Actions(noeudPositionX, noeudPositionY) {
        
        if (this.positionX === noeudPositionX - this.distanceSecu) {
            console.log(1, "id: "+ this.id);
        } else if (this.positionY === noeudPositionY - this.distanceSecu) {
            console.log(2, "id: "+ this.id);
            //Avancer(true);
            if (noeudPositionY === this.objectif.objectifY){
                console.log(3, "id: "+ this.id);
               this.Avancer(true);
            }else{
                console.log(4, "id: "+ this.id);
               this.Avancer(false); 
            }
        }else{
            console.log(5, "id: "+ this.id);
            this.Avancer(false);
        }

    }

    Avancer(horiz) {
        this.context.clearRect(this.positionX, this.positionY, this.largeur, 15);
        //this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
        //this.context.beginPath();
        //TODO: 
        if(horiz === true){
            this.positionX += this.vitesse;
        }else{
            this.positionY += this.vitesse;
        }
        this.context.fillRect(this.positionX, this.positionY, this.largeur, 15);
        //this.context.closePath();
        //x+=4;

        //window.requestAnimationFrame(Avancer());
    }

    afficherInfos(vehicule) {
        console.log(vehicule + " positionY: " + this.positionY);
        console.log(vehicule + " positionX: " + this.positionX);
        console.log()
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