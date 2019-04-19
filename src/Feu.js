class Feu{
    constructor(id, state, x, y, width){
        this.id = id;
        this.canvas = $("#globalCanvas").get(0);
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext("2d");        
        this.state = state;
        //this.interval = interval;
        this.x = x;
        this.y = y;
        this.width = width;
    }    
    
    
    setStateFeu(state, interval){ 
        this.state = state;
        this.context.fillstyle = state;
        this.interval = interval;
    }        
    
<<<<<<< HEAD
    
=======
    PopFeu(id, canvas, ctx, state){
        var globalcanvas = canvas;
        var globalcontext = ctx;
        
        var canvas2 = document.createElement("canvas");
        var ctx2 = canvas2.getContext("2d");
        ctx2.fillStyle = state;
        ctx2.fillRect(this.x,this.y,this.width,this.width);
        //ctx2.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
        //ctx2.fill();
        canvas2.width = globalcanvas.width;
        canvas2.height = globalcanvas.height;
        globalcontext.drawImage(canvas2, 0, 0);
        console.log(globalcanvas.width);
        console.log(globalcanvas.height);
        
        //this.context.fillStyle = state;
        //this.context.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
        //this.context.fill(); 
        //globalcontext.drawImage(this.canvas,0, 0, 200, 200);
        //console.log(this.canvas = $("#globalCanvas").get(0));
        //console.log(this.canvas);
        //console.log(globalcanvas);
        //console.log(globalcontext);
    }
>>>>>>> 9949a1b9f17b4fa7eb38dc0287c784be90f133d2
    
}
