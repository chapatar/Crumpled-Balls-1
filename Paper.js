class Paper{
    
    constructor(x,y,r){
        
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.r=r;
        this.body=Bodies.circle(x,y,r/2,options);
      
    
        World.add(world,this.body);
    }

    display(){

    fill("white");
    var pos=this.body.position;
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.r,this.r);
    }

}