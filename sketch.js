
function preload() {
    gardenImg = loadImage("images/garden.png");
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png" );
    catpause = loadAnimation("images/cat4.png");
    mouseImg = loadAnimation("images/mouse1.png");
    mouseTeasing = loadAnimation("images/mouse2.png","images/mouse3.png");
    mousePause = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(700,500);
    cat = createSprite(600,400);
    cat.addAnimation("catrest", cat1);
    cat.scale = 0.16;
    mouse = createSprite(150, 400);
    mouse.addAnimation("mouse1", mouseImg);
    mouse.scale = 0.12;
}

function draw() {

    background(gardenImg);
    
    //Write condition here to evalute if tom and jerry collide
    if( cat.x - mouse.x < cat.width/2 - mouse.width/2){
        cat.velocityX = 0;
        cat.addAnimation("catPause", catpause);
        cat.scale = 0.2;
        cat.changeAnimation("catPause");
        mouse.addAnimation("mousepause", mousePause);
        mouse.changeAnimation("mousepause");
    }
    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRUNNING", cat2);
      cat.changeAnimation("catRUNNING");
      cat.scale = 0.15; 
      mouse.addAnimation("mouseTeasing", mouseTeasing);
      mouse.changeAnimation("mouseTeasing");  
    }
  //For moving and changing animation write code here


}
