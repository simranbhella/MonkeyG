
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
score = 0;
 var ground;

var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(450,450);
     monkey=createSprite(50,350,10,10);
monkey.addAnimation("monkey run", monkey_running);
  monkey.scale=0.15;
  
ground=createSprite(250,400,500,10); 
  ground.velocityX =-4;
  
  FoodGroup= createGroup();
  obstacleGroup=createGroup();
}


function draw(){
  background("lightblue");

ground.x=ground.width/2;
  

if(keyDown("space") && monkey.y>=100){
  monkey.velocityY=-12;
   }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  textSize(20);
  fill("black");
  text("Score:" + score,100,75);
  
 
  
  
  
  //stroke("white");
  //textSize(20);
  //fill("white");
  //text("Score: " + score,400,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.round(frameCount/frameRate());
  text("Survival Time: " +survivalTime, 100,50);
  

   
  
  food();
  obstacles();
drawSprites();
}

function food(){
 if(frameCount%80===0){
  banana=createSprite(420,225,10,10); 
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.y=Math.round(random(120,200));
   banana.velocityX=-5;
   banana.lifetime=150;
   FoodGroup.add(banana);
}
}

function obstacles(){
if(frameCount%300===0){
  obstacle=createSprite(423,380,50,10);
  obstacle.addImage(obstaceImage);
  obstacle.lifetime=150;

  obstacle.scale=0.1
  obstacle.velocityX=-4
   }
  
}


