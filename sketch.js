
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint=Matter.Constraint;

box=[];



function setup() {
	createCanvas(3000, 700);


	engine = Engine.create();
	world = engine.world;

  Engine.run(engine);
}


function draw() {

  background(0);
 
 
}

function mouseDragged() {
	

	
}


