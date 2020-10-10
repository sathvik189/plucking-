
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var treeObject,stoneObject;
var groundObject,mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var boy1, slingShot;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;


    groundObject = new ground(width/2,770,width,50);
 boy1=new boy (200,200,50,50);
 stoneObject=new stone(200,50);
 treeObject=new tree(1000,250,500,500);
 mango1=new mango( 1200, 250, 100,100);
        mango2 =new mango (1000, 250, 100,100);
        mango3 =new mango(1000, 335, 70,70);
        mango4 =new mango(1000, 390, 70,70);
        mango5 =new mango(1000, 395, 70,70);
        mango6=new mango( 1000, 380, 70,70);
        mango7=new mango( 1000, 410, 70,70);


    //log6 = new Log(230,180,80, PI/2);
    slingShot = new SlingShot(stoneObject.body,{x:200, y:50});
}

function draw(){
    Engine.update(engine);
	strokeWeight(4);
	groundObject.display();
	boy1.display();
	stoneObject.display();
	treeObject.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	
    //log6.display();
    slingShot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObject.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   slingShot.fly();
}