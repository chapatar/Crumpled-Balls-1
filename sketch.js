
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 600);

 	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(50,200,50);
	ground=new Ground(700,500);
	side1=new Dustbin(690,415,20,150);
	side2=new Dustbin(800,480,200,20);
	side3=new Dustbin(900,415,20,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  side1.display();
  side2.display();
  side3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:150,y:-100});
	}
}

