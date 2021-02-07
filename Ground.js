class Ground {
    constructor(){
  
      var options = {
          isStatic: true
      }
      
      this.body = Bodies.rectangle(350,895,700,15,options);
      World.add(world,this.body);
    }
     
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,700,15);
      
    }
}
