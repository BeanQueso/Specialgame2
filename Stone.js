class Stone {
    constructor(x,y,r) {
      var options = {
        isStatic:false,
        restitution:0,
        friction:0,
        density:1,
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      this.image = loadImage("sprites/stone.png");
      World.add(world, this.body);
    }
    display(){
    push();
      var pos =this.body.position;
      imageMode(CENTER);
      ellipseMode(RADIUS);
        
      image(this.image,pos.x, pos.y, this.r, this.r);
      pop();
    }
  };