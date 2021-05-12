class Bird {
    constructor(x, y,r) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 40,options);
      this.r = r;
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("red");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  