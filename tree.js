class tree {
    constructor(x, y,r) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            
        }
       
        this.x=x;
		    this.y=y;
      
    
       this.body = Bodies.rectangle(this.x,this.y, this.width,this.height, options);
       this.image = loadImage("sprites/tree.png");
       World.add(world, this.body);
      }
      display(){
        
        var pos =this.body.position;
       // var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        image(this.image, 1000, 250, 500,500);
       // rotate(angle);
       rectMode(CENTER);
       //fill("green");
        //ellipse(0, 0, this.r, this.r);
   
        pop();
      }
    }