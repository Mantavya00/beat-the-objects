const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,logs,box3,box4,pig2,log2,box5,log3,log4,b;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new pig(800,350);
    logs = new log(800,250,280,PI/2);
    pig2 = new pig(800,220);
    b = new Bird(100,100,40,40);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    
    ground.display();
    pig1.display();
    logs.display();
    
   
    pig2.display();
   
   
    b.display();
}