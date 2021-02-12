const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world,array1 = [],array2 = [] , array3 = [],array4 = [],array5 = [],block1,block2 ,polygon,sling;
var ground,sling,polygon,stand1,stand2;

function preload() {
    
}

function setup(){
    createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,20);
    stand1 = new Ground(400,300,200,15);
    stand2 = new Ground(800,200,150,15);

    polygon = new Polygon(100,100,50,50);

    for(var i = 0; i < 7; i++){
        var x = 325 + 25*i;
        stroke(0);
        strokeWeight(2);
        array1[i] = new Box(x,270,25,40);
    }
    for(var j=0; j < 5;j++){
        var y = 350+25*j ;
        array2[j] = new Box(y,230,25,40);
        y = 750+25*j;
        array4[j] = new Box(y,170,25,40);
    }
    for(var k=0; k<3; k++){
        var z = 375+25*k;
        array3[k] = new Box(z,190,25,40);
        z = 775+25*k;
        array5[k] = new Box(z,130,25,40)
    }
    block1 = new Box(400,150,25,40);
    block2 = new Box(800,90,25,40);  

    sling = new SlingShot(polygon.body,{x : 100 , y : 200});
}

function draw(){
    background(200);

    Engine.update(engine);
    
    ground.display();
    stand1.display();
    stand2.display();

    
    for(var i = 0; i < array1.length; i++){
        fill("#67D1EA");
        array1[i].display();
      }
    for(var j = 0; j < array2.length; j++){
        fill("#FFBEC4");
        array2[j].display();
        fill("#67D1EA");
        array4[j].display();
      }
     for(var k = 0; k < array3.length; k++){
        fill("#00E4D0");
        array3[k].display();
        array5[k].display();
      }
      fill("grey");
      block1.display();
      fill("#FFBEC4");
      block2.display();

      polygon.display();
      fill(255);
      sling.display();
      textSize(20);
      fill(200,100,150);
      push();
      noStroke();
      text("Drag the hexagonal stone and release it , to launch it towards the blocks.",80,80);
      pop();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x : mouseX , y : mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if (keyCode === 32) {
        Matter.Body.setPosition(polygon.body,{x : 100, y : 100});
        sling.attach(polygon.body);
    }
}