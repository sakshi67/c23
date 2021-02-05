class Ground {

    constructor(x,y,width,height){
      // PROPERTIES
      var options = {
        isStatic : true
      }
    
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      World.add(world,this.body);
    
    }
      
    //FUNCTIONS
    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    
    rect(pos.x,pos.y,this.width,this.height);
    
    }
    
    }
    