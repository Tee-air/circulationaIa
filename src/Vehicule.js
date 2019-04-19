class Vehicule {
    constructor(x, y, largeur, id, couleur) {
        this.canvas = $("#globalCanvas").get(0);
        this.context = this.canvas.getContext("2d");
        this.positionX = x;
        this.positionY = y;
        this.largeur = largeur;
        this.vitesse = 1;
        this.distanceSecu = 30;
        this.id = id;
        
        this.couleur = couleur;
    }

    Actions(noeudPositionX, noeudPositionY) {
        if (noeudPositionX === this.positionX && this.positionY < noeudPositionY) {
            //Vien du NORD
            this.Avancer(false);
        } else if (noeudPositionY === this.positionY && this.positionX < noeudPositionX) {
            this.Avancer(true);
        } else if (this.objectif.X === this.positionX || this.positionY === this.objectif.Y) {
            if (this.objectif.X > this.positionX) {
                // aller Horizontalement
                this.Avancer(true);
            } else if (this.objectif.Y > this.positionY) {
                // aller verticalement
                this.Avancer(false);
            }
        }
    }

    Avancer(horiz) {
        this.Pop();
        if (horiz === true) {
            this.context.clearRect(this.positionX, this.positionY, this.largeur, 15);
            this.context.clearRect(this.positionX, this.positionY, 15, this.largeur);
            this.positionX += this.vitesse;
            this.context.fillRect(this.positionX, this.positionY, 15, this.largeur);
            //this.context.stroke();
        } else {
            this.context.clearRect(this.positionX, this.positionY, this.largeur, 15);
            this.context.clearRect(this.positionX, this.positionY, 15, this.largeur);
            this.positionY += this.vitesse;
            this.context.fillRect(this.positionX, this.positionY, this.largeur, 15);
            //this.context.stroke();
        }
        //window.requestAnimationFrame(Avancer());
    }

    afficherInfos(vehicule) {
        console.log(vehicule + " positionY: " + this.positionY);
        console.log(vehicule + " positionX: " + this.positionX);
        console.log()
    }

    setCouleur() {

    }

    Pop() {
        this.context.fillRect(this.positionX, this.positionY, this.largeur, 15);
        this.context.fillStyle = this.couleur;
    }

    getPS(pourcent, totalSize) {
        var nbPx;
        nbPx = Math.trunc(totalSize * pourcent);
        return +nbPx;
    }

    setObjectif(objectifX, objectifY) {
        this.objectif = {Y: objectifY,
            X: objectifX};
        console.log(this.objectif);
    }

}