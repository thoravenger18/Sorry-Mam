const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var particles = [];
var plinkos = [];
var division = [];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  for(var k = 0; k<=width; k=k+80) {
    division.push(new Division(k,height-divisionHeight/2,10, divisionHeight));
  }
  
}

function draw() {
  background("black");  
  Engine.update(engine);
  drawSprites();
}