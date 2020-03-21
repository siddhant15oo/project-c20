var mouse


function setup(){

  createCanvas(1200,700);
  mouse= createSprite(120,100,20,20)
}


function draw(){
 background(0)
  mouse.x=mouseX
  mouse.y=mouseY

  
  if (mouse.x >0 && mouse.x<400 ) {
    background("blue")
  }
  if (mouse.x >400 && mouse.x<800 ) {
    background("green")
  }
  
  
  if (mouse.x >800 && mouse.x <1200 ) {
    background("red")
  }


}