
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paper1 = new Paper(200,450,70)
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650,10);


	// paper1.depth = dustbinObj.depth - 1;
	// paper1.debug = true;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  paper1.display();
  groundObject.display();
  dustbinObj.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-145})
	}
}
