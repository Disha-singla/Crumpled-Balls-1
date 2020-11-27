
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground1;
var d1,d2,d3;

function preload()
{
	
} 

function setup() {
	createCanvas(800, 500);
    keyPressed();

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new paper(100,200,25);
ground1=new ground(400,390,800,20);
d1=new dustbin(520,320,20,80);
d2=new dustbin(700,320,20,80);
d3=new dustbin(610,370,180,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground1.display();
  d1.display();
  d2.display();
  d3.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:3.5,y:-4});
	}
}



