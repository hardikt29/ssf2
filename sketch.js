var a,b,c,d,e;
function setup() {
  createCanvas(displayWidth,displayHeight/2); 
  

 
}

function draw() {
  background(32,32,32);
  for(var i = 100;i < (displayWidth/2)/2.5;i = i+23){
   
    arr = [a = createSprite(i,100,20,20)];
    arr[0].shapeColor = color(0,255,0);
  }
  for(var i = 100;i < (displayHeight/2)/2;i = i+23){
   
    arr1 = [b = createSprite(401,i,20,20)];
    arr1[0].shapeColor = color(192,192,192);
    
  }
  for(var i = b.x + 50;i< (displayWidth/2)/1.5;i = i+23){
   
    arr2 = [c = createSprite(i,300,20,20)];
    arr2[0].shapeColor = color(51,51,255);
    
  }
  for(var i = c.x + 100;i< (displayWidth/2)-100;i = i+23){
   
    arr3 = [d = createSprite(i,200,20,20)];
    arr3[0].shapeColor = color(51,51,255);
    
  }
  for(var i = d.x + 100;i< (displayWidth/2)+100;i = i+23){
   
    arr3 = [e = createSprite(i,150,20,20)];
    arr3[0].shapeColor = color(51,51,255);
    
  }
  for(var i = e.x + 100;i< (displayWidth/2)+300;i = i+23){
   
    arr3 = [d = createSprite(i,100,20,20)];
    arr3[0].shapeColor = color(51,51,255);
    
  }
  
  lava = createSprite(0,displayHeight/2,displayWidth*2,200)
  lava.shapeColor = color(255,128,0);

drawSprites(); 
}