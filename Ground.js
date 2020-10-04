class Ground{
    constructor(x,y){
            var options = {
            isStatic:true
            
        }

        this.body=Bodies.rectangle(x,y,1400,20,options);
    
        World.add(world,this.body);
    }

    display(){
        
    fill("brown");
    var pos=this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,1400,20);
    }

}
