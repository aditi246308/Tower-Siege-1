class Block {
    constructor(x,y){
  
      var options = {
          restitution: 0.8,
          density: 2,
          friction: 0.2
      }
      
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
    }
     
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill("pink");
        rotate(angle);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
      
     }
  
  
  
  
  }