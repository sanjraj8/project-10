var ship, shipImg1
function preload() {
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup() {
  createCanvas(800, 600);
  //create the sprite for sea
  sea=createSprite(100,200,400,400);
  sea.addImage(seaImg);
  sea.velocityX= -3;
  sea.x = sea.width / 2;
  sea.scale = 1;

  ship=createSprite(400,400,40,40);
  ship.addAnimation("s1",shipImg1);
  ship.scale=0.3
}

function draw() {
  background("blue");
  if (sea.x < 0) {
    sea.x = 200;
  }
  drawSprites();
}