
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score
var ground;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameState = END;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 groundImage = loadImage("Typeform-Blog-BlackFriday-Cover-AskAwesomely.jpg");
  //ground = loadImage("ground");
}



function setup() {
  
/*  banana = createSprite(200,200,20,20);
  banana.addImage("banana", bananaImage);
  banana.scale = 0.1;*/
  monkey = createSprite(100,200,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
// ground = createSprite(100,300,400,400);
//  ground.addImage("ground", groundImage);
 // ground.scale = 0.1;
 
   FoodGroup = new Group();
  obstacleGroup = new Group();
  score  = 0;
  ground = createSprite(200,370,400,10);
  
 fill("black");
}


function draw() {
background("skyblue")
  
  drawSprites();
  
  spawnObstacle();
     spawnBanana();     
   
if(keyDown("space")  &&   monkey.y >= 100) {
        monkey.velocityY = -12;
       
    }  
    monkey.velocityY = monkey.velocityY + 0.8  ;
  //ground.velocityX = -(6 + 3*score/100);
      if(FoodGroup.isTouching(monkey)){
        // score = score+2;
      FoodGroup.destroyEach();
     
    }
  monkey.collide(ground);
     
  fill("black");
  textSize(20);
 
text("survivalTime "+ score, 150,50);
score = score + Math.round(getFrameRate()/60);
}
function spawnBanana(){
  if(World.frameCount % 120 === 0){
  var  banana=createSprite(300,400,20,20);
   //banana.depth = 1;
    banana.addImage(bananaImage);
   banana.scale = 0.1;
    banana.y = Math.round(random(50,340));
   //obstacle.velocityX = -(8 + (score/10));
 banana.setLifetime = 50;
    
   FoodGroup.add(banana);
      banana.velocityX = -5;
  }
}
function spawnObstacle() {
  
  if(World.frameCount % 200 === 0){
  var   obstacle=createSprite(200,350,20,20);
  obstacle.depth = -6;
  obstacle.addImage(obstacleImage);
     obstacle.velocityX = -(6 + 3*score/100);
    obstacle.scale = 0.1;
    //obstacle.y = Math.round(random(50,370));
   //obstacle.velocityX = -(8 + (score/10));
    //obstacle.setLifetime = 50;
    
    obstacleGroup.add(obstacle);
    
 obstacle.velocityX = -5;
  }
}





