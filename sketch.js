var human, bird, tiger, ground, backGround;
var human_IMG, bird_IMG, tiger_IMG, ground_IMG, background_IMG;

function preload() {
  ground_IMG = loadImage("ground.png");
  background_IMG = loadImage("background.png");
}

function setup() {
  createCanvas(800,400);
  bird = createSprite(400,100,50,50)
  human = createSprite(250, 250, 50, 50);
  ground = createSprite(400,350,1200,100);
  ground.addImage("ground",ground_IMG);
  ground.velocityX = -1
}

function draw() {
  background(background_IMG);

  if(ground.x<0){
ground.x = ground.width/2;
  }


  drawSprites();
}