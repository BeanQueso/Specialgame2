class BaseClass{
    constructor(x, y, width, height) {
        var options = {
         friction:0.01,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        //var angle = this.body.angle;
        var pos = this.body.position;
        fill("red");
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
        
        
      }
}