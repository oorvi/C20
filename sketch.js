var movingRect,fixedRect;





function setup() {
  createCanvas(1200,800);
 movingRect= createSprite(400, 800, 80, 30);
movingRect.shapeColor="green";
fixedRect= createSprite(400, 50, 80, 30);
fixedRect.shapeColor="green";
movingRect.velocityY=-5;
fixedRect.velocityY=5;
}

function draw() {
  background(0); 
  
  if(fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
      movingRect.velocityY=-movingRect.velocityY;
      fixedRect.velocityY=-fixedRect.velocityY;
    }
  drawSprites();
}