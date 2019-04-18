class Vehicule {
    constructor(x, y, largeur, id) {
        this.canvas = $("#globalCanvas").get(0);
        this.context = this.canvas.getContext("2d");
        this.positionX = x;
        this.positionY = y;
        this.largeur = largeur;
        this.vitesse = 1;
        this.distanceSecu = 30;
        this.id = id;
    }

    Actions(noeudPositionX, noeudPositionY) {
        //Si le véhicule se rapproche du noeud central
        //Donc sur l'axe Y: Si sont Y est égal à celui du noeud

        //Cas 1:
        //La voiture arrive à l'intersection par le haut(Nord), son objectif est d'aller à l'Est

        //Cas 2:
        //La voiture arrive à l'intersection par la gauche(Ouest), son objectif est d'aller à l'Est

        //Cas 3: 
        //La voiture arrive à l'intersection par le haut (Nord), son objectif est d'aller au Sud

        //Cas 4:
        //La voiture arrive à l'intersection par la gauche (Ouest), son objectif est d'aller au Sud


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



        //} else {
        //console.log(5, "id: "+ this.id);
        //this.Avancer(false);
        //}

    }

    Avancer(horiz) {
        //this.context.clearRect(this.positionX, this.positionY, this.largeur, 15);
        //this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
        //this.context.beginPath();
        //TODO: 
        if (horiz === true) {
            this.context.clearRect(this.positionX, this.positionY, this.largeur, 15);
            this.context.clearRect(this.positionX, this.positionY, 15, this.largeur);
            this.positionX += this.vitesse;
            this.context.fillRect(this.positionX, this.positionY, 15, this.largeur);
        } else {
            this.context.clearRect(this.positionX, this.positionY, this.largeur, 15);
            this.context.clearRect(this.positionX, this.positionY, 15, this.largeur);
            this.positionY += this.vitesse;
            this.context.fillRect(this.positionX, this.positionY, this.largeur, 15);
        }

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
        this.objectif = {Y: objectifY,
            X: objectifX};
        console.log(this.objectif);
    }

}