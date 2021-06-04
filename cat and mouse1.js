var canvas,bg;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;



function preload() {
    //load the images here
bg = loadImage("images/garden.png");
catImg1 = loadAnimation("images/cat1.png");
catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
catImg3 = loadAnimation("images/cat4.png");
mouseImg1 = loadAnimation("images/mouse1.png");
mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
  canvas = createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(200,600);
cat.addAnimation("catStanding",catImg1);
cat.scale=0.15;

mouse = createSprite(870,600);
mouse.addAnimation("mouseSleeping",mouseImg1);
mouse.scale=0.2;
}

function draw() {

    background("bg");
    //Write condition here to evalute if tom and jerry collide
    if (cat.x- mouse.x<(cat.width-mouse.width)/2){
       mouse.addAnimation("mouselastImage",mouseImg3);
       mouse.x=300;
       mouse.scale=0.2;
       mouse.changeAnimation("mouselastImage");
       cat.addAnimation("catlastImage",catImg3);
       cat.scale=0.15;
       cat.changeAnimation("catlastImage");    
        }


    drawSprites();
}


function keyPressed(){

    //For moving and changing animation write code here
 
    
 
if (keyCode === LEFT_ARROW){
  mouse.velocityX = -5;
  mouse.addAnimation("mouseteasing",mouseImg2);
  mouse.changeAnimation("mouseteasing");

  cat.addAnimation("catRunning",catImg2);
  mouse.frameDelay = 25;
  cat.addAnimation("catRunning");
 }

}
