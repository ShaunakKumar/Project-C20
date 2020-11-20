var movingRect,fixedrect
function setup() { createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="green"
  fixedrect= createSprite(400,400,100,100)
  fixedrect.shapeColor="green"}
  function draw() {
    movingRect.y=World.mouseY
     movingRect.x=World.mouseX
     if(movingRect.x-fixedrect.x<fixedrect.width/2+movingRect.width/2&& fixedrect.x-movingRect.x<fixedrect.width/2+movingRect.width/2&& movingRect.y-fixedrect.y<fixedrect.height/2+movingRect.height/2&& fixedrect.y-movingRect.y<fixedrect.height/2+movingRect.height/2){
      movingRect.shapeColor="yellow" 
      fixedrect.shapeColor="yellow" }
      else{ movingRect.shapeColor="green" 
      fixedrect.shapeColor="green" }
      background(0); drawSprites(); }

    