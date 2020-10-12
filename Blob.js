class Blob{
    constructor(x, y){
      this.body = Bodies.circle(x,y,50);
      this.r = 50;
      this.image = loadImage("sprites/blob.png");
      World.add(world,this.body);
      this.Visiblity = 255;
      this.score = 0;
    }

  display(){
     //console.log(this.body.speed);
   // if(this.body.speed < 3){
      
      
  //   }
     //else{
      /* World.remove(world, this.body);
      
      */

   //  } 
   var distance = dist(stone.body.position.x,stone.body.position.y,this.body.position.x,this.body.position.y);
	if(distance<=this.r+stone.r){
    World.remove(world, this.body);
    push();
    this.Visiblity = this.Visiblity - 10;
    tint(255,this.Visiblity);
    
    image(this.image, this.body.position.x, this.body.position.y, this.r,this.r);
    pop();
    this.body.position.x = -100;
    this.score++;
	}else{
    push();
    image(this.image, this.body.position.x, this.body.position.y, this.r,this.r);
     this.body.position.x = this.body.position.x+0.1;
     pop();
  }

     
     
    }
    score(){
    
  }
    
    /*updatePos(){
       var rand =random(0,0.2);
      this.body.position.x = this.body.position.x+rand;
    }
    update(){
      if(this.body.position.x>1400){
        this.body.position.x = 100;
      }
    }*/
    
    
  
   
  
  
  
  }
