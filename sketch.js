var starImg,bgImg;
var star, starBody;
var fairy, fairyImg;
var fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("images/fairyImage1.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);
	fairyVoice.play();
	//write code to play fairyVoice sound

	fairy = createSprite(400,475,10,10);
	fairy.addImage(fairyImg);
    fairy.scale = 0.2;

	star = createSprite(400,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  drawSprites();

if(star.y > 470 && starBody.position.y > 470){
Matter.body.setStatic(starBody,true);
}

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(starBody,false); 
	}
	
	//writw code to move fairy left and right
	if(keyIsDown(LEFT_ARROW)){
	fairy.x=fairy.x-20;
};
	
	if(keyIsDown(RIGHT_ARROW)){
	fairy.x=fairy.x+20;};
	}


