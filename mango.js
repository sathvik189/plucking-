class mango {
    constructor(x, y,r) {
        var options = {
            isStatic:false,
            'restitution':0,
            'friction':1,
            
            
        }
       
        this.x=x;
		    this.y=y;
      
    
       this.body = Bodies.rectangle(this.x,this.y, this.width,this.height, options);
       this.image = loadImage("sprites/mango.png");
       World.add(world, this.body);
      }
      display(){
        
        var pos =this.body.position;
       // var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        image(this.image, 1200, 350, 70,70);
        image(this.image, 1250, 300, 70,70);
        image(this.image, 1100, 335, 70,70);
        image(this.image, 1150, 390, 70,70);
        image(this.image, 1270, 395, 70,70);
        image(this.image, 1340, 380, 70,70);
        image(this.image, 1390, 410, 70,70);
       // rotate(angle);
       rectMode(CENTER);
       //fill("green");
        //ellipse(0, 0, this.r, this.r);
   
        pop();
      }
    }