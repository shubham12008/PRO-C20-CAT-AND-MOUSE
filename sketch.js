var tom,jerry;
var tom_img,jerry_img;
var tom_walking_img,jerry_walking_img;
var tom_touched_img,jerry_touched_img;
var timer,timer_text,Fonts;

function preload() {
    //load the images here
    background_image = loadImage("images/garden.png");
    tom_img  = loadImage("images/cat1.png");
    jerry_img = loadImage("images/mouse1.png");

    jerry_walking_img = loadAnimation("images/mouse2.png","images/mouse3.png");
    tom_walking_img = loadAnimation("images/cat2.png","images/cat3.png");

    jerry_touched_img = loadAnimation("images/mouse4.png");
    tom_touched_img = loadAnimation("images/cat4.png")
    
    
}

function setup(){
    createCanvas(1000,800);
    background("black");
    backgroundimage(background_image);
    //create tom and jerry sprites here
tom = createSprite(850,650);
jerry = createSprite(150,650);

tom.addImage(tom_img);
jerry.addImage(jerry_img);

tom.scale = 0.18;
jerry.scale = 0.15;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if (tom.isTouching(jerry)){
    if(timer === 130){

    tom.addAnimation("tom_touched",tom_touched_img);
    tom.changeAnimation("tom_touched");
   tom.frameDelay = 6;
   tom.velocityX = 0;
    
   jerry.addAnimation("jerry_touched",jerry_touched_img);
   jerry.changeAnimation("jerry_touched");
   jerry.frameDelay = 5 ;
   

}}
if(timer_text === 50 ){
    
}


if (keyCode === LEFT_ARROW || keyCode === 32) {
    timer = timer + 1;
    console.log(timer)
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
    
    jerry.addAnimation("jerry_walking",jerry_walking_img);
jerry.changeAnimation("jerry_walking");
jerry.frameDelay = 5 ;

tom.addAnimation("Tom_walking",tom_walking_img);
tom.changeAnimation("Tom_walking");
tom.frameDelay = 6;
tom.scale = 0.23;
tom.velocityX = -4;
timer = + 1;
console.log(timer);
}

if (keyCode === 32 ){
    
    jerry.addAnimation("jerry_walking",jerry_walking_img);
jerry.changeAnimation("jerry_walking");
jerry.frameDelay = 5 ;

tom.addAnimation("Tom_walking",tom_walking_img);
tom.changeAnimation("Tom_walking");
tom.frameDelay = 6;
tom.scale = 0.23;
tom.velocityX = -4;
timer = + 1;
console.log(timer);
}

}
