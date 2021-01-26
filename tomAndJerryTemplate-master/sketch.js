var tom,tom1,tom2
var jerry,jerry1,jerry2
var bgimg

function preload() {
    
    tom1 =loadImage("images/cat1.png")
    tom2 =loadImage("images/cat4.png")
    jerry1 =loadImage("images/mouse3.png")
    jerry2 =loadImage("images/mouse2.png")
    bgimg = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    jerry = createSprite(200, 200, 50, 80); 
    jerry.addImage = (jerry1);
    //jerry.addImage = (jerry2);
    tom = createSprite(400, 200, 80, 30);
    tom.addImage = (tom1);
     // tom.addImage = (tom2); 
  
}

function draw() {

    background(bgimg);
    
    
    //Write condition here to evalute if tom and jerry collide
    if(keyDown(LEFT_ARROW)){
        tom.velocityX= -5
    }
 
    if(tom.x - jerry.x <(tom.width - jerry.width)/2){
       tom.changeImage = (tom2);
       jerry.changeImage = (jerry2);
       tom.velocityX= 0
      }
       
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
