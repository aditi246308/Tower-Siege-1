const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var hex1, ground1, chain1, block1, slingshot 

function preload(){
    hex1 = loadImage("sprites/polygon.png");
}


function setup() {
	createCanvas(700, 900);
	engine = Engine.create();
    world = engine.world;
    
    hex1 = Bodies.circle(100,200,20);
    World.add(world,hex1);

    ground1 = new Ground();

    stand1 = new Stand(350,230,150,10);

    slingshot = new Slingshot(this.hex1,{x: 150, y: 200 })

    block1 = new Block(300,200,30,40);

}

    function draw() {

        background(0);
        Engine.update(engine);
        
        //hex1.display();
       
        slingshot.display();

        ground1.display();

        block1.display();

        stand1.display();

        imageMode(CENTER);
        image(hex1,hex1.position.x,hex1.position.y,40,40);


    }

    /*function drawLine(constraint){
        HexagonBodyPosition = constraint.bodyA.position;
        GroundBodyPosition = constraint.bodyB.position;

        GroundBodyOffset = constraint.pointB;

        GroundBodyX = GroundBodyPosition.x+GroundBodyOffset.x;
        GroundBodyY = GroundBodyPosition.y+GroundBobyOffset.y;
        line(HexagonBodyPosition.x,HexagonBodyPosition.y,GroundBody.x,GroundBody.y);


    }*/

    function mouseDragged(){
        Matter.Body.setPosition(this.hex1, {x: mouseX , y: mouseY});
    }


    function mouseReleased(){
        slingshot.fly();
    }

    