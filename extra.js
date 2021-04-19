player = createSprite(100,180,20,20);
  player.shapeColor = color(255,0,0);



  camera.position.x = player.x+20;
  camera.position.y = player.y+20;



  if(keyDown("RIGHT_ARROW")){
    player.velocityX = 5;
  }
  if(keyWentUp("RIGHT_ARROW")){
    player.velocityX = 0;
  }
  if(player.x > 405)
  {
    player.velocityY = 10;
  }
  if(player.y === 440)
  {
    player.velocityY = 0;
  }