const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;


  var holder_options={
    isStatic: true
  }


holder = Bodies.rectangle(200,100,200,20,holder_options);
World.add(world,holder);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(220,200,40,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : holder,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("White");
}


function draw() {
  background(0); 
  Engine.update(engine);

  textSize(18);
  text("Press Enter to oscillate the pendulam with mouse",5,20);
  text("Press Shift to stop the Pendulum from oscillating",5,50);

  fill ("blue");
  rectMode(CENTER);
  rect(holder.position.x,holder.position.y,200,20);


  fill("green");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40);

  strokeWeight(3);
  stroke("red");
  line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)

  if(keyCode === ENTER){
    ball.position.y = mouseY;
    ball.position.x = mouseX;
  }

  else if (keyCode === SHIFT){
    ball.position.x = 200;
  }

}


