var path,back_path
var jaxon,winner

function preload()
{
  //pre-load images
back_path = loadAnimation("path.png")
winner = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup()
{
  createCanvas(400,400);
  //create sprites here
path = createSprite(198,200,20,20)
path.addAnimation("path",back_path)
path.scale=("1.3")
path.velocityY=-4;
path.y=path.height/2
//creating jaxon
jaxon = createSprite(198,200,20,20)
jaxon.addAnimation("win",winner)
jaxon.scale=("0.10")
}
function Draw(); 
{
  background("blue");
   drawSprites();

//making jaxon to move with mouse
  jaxon.x=World.mouseX
//code to infinity backgroung

if(path.y<0)
{
  path.y=path.height/2
}

}

