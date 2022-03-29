var pet, pet_eating, petend;
var foodImg;
var PLAY = 1;
var END = 0;
var gameState=PLAY;
function preload(){
  foodImg = loadImage("food.png");
  petend = loadAnimation("dog.png");
  pet_eating = loadAnimation("pet1.png", "pet2.png");
 
}

function setup(){
  createCanvas(windowWidth,windowHeight-100);

  //pet_eating.playing = true;
 // pet_eating.looping = false;

  food = createSprite(300,650,50,50)
  food.addImage(foodImg);
  food.scale = 0.05;

  pet = createSprite(1000,500,30,30)
  pet.addAnimation("eating", pet_eating);
  pet.addAnimation("end", petend);
  
  pet.scale = 0.1;
  // pet2 = createSprite(1000,500,30,30)
  // pet2.addAnimation("petend", pet_end);
  // pet2.scale = 0.3;
}

function draw(){
  background(255, 204, 0);
  console.log(gameState);
    
  if (gameState===PLAY){
    console.log(gameState);
    pet.changeAnimation("eating", pet_eating);
  
  if(keyIsDown(UP_ARROW)){
    food.y -= 2;
  }

  if(keyIsDown(DOWN_ARROW)){
    food.y += 2;
  }
  if(keyDown("space") && pet.y >= 159) {
    pet.velocityY = -12;
  }
  if(keyIsDown(RIGHT_ARROW)){
    food.x += 2;
  }

  if(keyIsDown(LEFT_ARROW)){
    food.x -= 2;
  }

  if(pet.isTouching(food)){
    foodImg = loadImage("dog.png");
    gameState=END;
    console.log(gameState);
   
  }
}else if(gameState===END){
  pet.changeAnimation("end", petend);
  console.log(gameState);
console.log("END");
}
drawSprites();
}