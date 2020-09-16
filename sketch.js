
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boxbottom, boxside1, boxside2;
var groundSprite;

function preload(){}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite = createSprite(width/2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)
	
	boxbottom = new Dustbin(1000, 630, 100, 20)
	boxside1 = new Dustbin(950, 600, 20, 100);
	boxside2 = new Dustbin(1050, 600, 20, 100);

	Engine.run(engine);
	ball = new Paper(200, 450, 40);
	ground = new Ground(750, 650, 1500, 15);
	
  
}


function draw() {
  background(0);

  boxbottom.shapeColor = "red";
  boxside1.shapeColor = "red";
  boxside2.shapeColor = "red";

  ball.display();
  ground.display();
  boxbottom.display();
  boxside1.display();
  boxside2.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(ball.body, ball.body.position, {x: 85,y:-85});
	}
}

