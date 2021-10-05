function setup() {
  createCanvas(400, 400);
}

function preload(){
  bg = loadImage("images/iss.pmg");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/images/brush.png");
  gym = loadAnimation("images/gym21.png","images/gym22.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png"); 
  move = loadAnimation("images/move.png","images/move1.png");

}
function draw() {
  background(220);

backdrop = createSprite(400,400);
backdrop.addImage(bg);

 
astronautsleep = createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale = 0.1;

if(keyDown("UP_ARROW")){
  astronaut.addAnimation("sleeping",sleep);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityY = 0;
  astronautvelocityX = 0;
}

if(keyDown("DOWN_ARROW")){


}




drawSprites()
}

