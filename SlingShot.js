class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
     
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image, 1150,104, 20,90);
        image(this.image2, 1138,85,20,50);
        pop();
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            //if(pointA.x < 220) {
                strokeWeight(3);
                line(pointA.x, pointA.y, 1155, 70);
            
           // }
            //else{
            //    strokeWeight(3);
                line(pointA.x, pointA.y, 1133, 70);
           // }
            
           
            
            pop();
        }

    }
    
}