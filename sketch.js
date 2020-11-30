var boy1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1200, 500);
	engine = Engine.create();
	world = engine.World;

	boy1= new boy();

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  boy1.display();
  
  drawSprites();
 
}



