var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b2db920b-a29e-4a59-808f-c2e0ac13c3ef","0fea4768-09ba-45dd-acf3-55c504988a48","b6424a31-fd3c-41e1-9aa5-2f9160467e69"],"propsByKey":{"b2db920b-a29e-4a59-808f-c2e0ac13c3ef":{"name":"apple_1","sourceUrl":"assets/api/v1/animation-library/gamelab/H1iDG5ShlbYDnc1J6HHfFkAbkbQRijGg/category_food/apple.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"H1iDG5ShlbYDnc1J6HHfFkAbkbQRijGg","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/H1iDG5ShlbYDnc1J6HHfFkAbkbQRijGg/category_food/apple.png"},"0fea4768-09ba-45dd-acf3-55c504988a48":{"name":"corn_1","sourceUrl":"assets/api/v1/animation-library/gamelab/2VkmW9_3c9eZfp_mAh9VWoycXLLvT8WH/category_food/corn.png","frameSize":{"x":380,"y":369},"frameCount":1,"looping":true,"frameDelay":2,"version":"2VkmW9_3c9eZfp_mAh9VWoycXLLvT8WH","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":369},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2VkmW9_3c9eZfp_mAh9VWoycXLLvT8WH/category_food/corn.png"},"b6424a31-fd3c-41e1-9aa5-2f9160467e69":{"name":"gameplaywacky_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR/category_germs/gameplaywacky_03.png","frameSize":{"x":390,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR/category_germs/gameplaywacky_03.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating first row of boxes
var box1 = createSprite(25, 75,50,50);
box1.setAnimation("apple_1");
box1.scale=0.6;

var box2 = createSprite(75, 75,50,50);
box2.setAnimation("corn_1");
box2.scale=0.09;

var box3 = createSprite(125, 75,50,50);
box3.setAnimation("apple_1");
box3.scale=0.6;
var box4 = createSprite(175, 75,50,50);
box4.setAnimation("corn_1");
box4.scale=0.09;
var box5 = createSprite(225, 75,50,50);
box5.setAnimation("apple_1");
box5.scale=0.6;
var box6 = createSprite(275, 75,50,50);
box6.setAnimation("corn_1");
box6.scale=0.09;
var box7 = createSprite(325, 75,50,50);
box7.setAnimation("apple_1");
box7.scale=0.6;
var box8 = createSprite(375, 75,50,50);
box8.setAnimation("corn_1");
box8.scale=0.09;

//creating second row of boxes
var box9 = createSprite(25, 125,50,50);
box9.setAnimation("apple_1");
box9.scale=0.6;
var box10 = createSprite(75, 125,50,50);
box10.setAnimation("corn_1");
box10.scale=0.09;
var box11 = createSprite(125, 125,50,50);
box11.setAnimation("apple_1");
box11.scale=0.6;
var box12 = createSprite(175, 125,50,50);
box12.setAnimation("corn_1");
box12.scale=0.09;
var box13 = createSprite(225, 125,50,50);
box13.setAnimation("apple_1");
box13.scale=0.6;
var box14 = createSprite(275, 125,50,50);
box14.setAnimation("corn_1");
box14.scale=0.09;
var box15 = createSprite(325, 125,50,50);
box15.setAnimation("apple_1");
box15.scale=0.6;
var box16 = createSprite(375, 125,50,50);
box16.setAnimation("corn_1");
box16.scale=0.09;

var ball = createSprite(200, 250,20,20);
ball.setAnimation("gameplaywacky_03_1");
ball.scale=0.1;

var paddle = createSprite(200, 350,100,10);
paddle.shapeColor="brown";

var score=0;

var gameState="start";

function draw() {
  background("pink");
  
  textSize(30);
  fill("red");
  text("Points:"+score, 260, 35);
  
  if(gameState==="start"){
    textSize(28);
    fill("green");
    text("Welcome, Press Space to start",10,200);
    
    //trigger point to change to play state
    //moving ball when space key is pressed 
    if (keyDown("space")) {
      ball.velocityX=+5;
      ball.velocityY=+3;
      gameState="play";
    }
    
  }
  
  if(gameState==="play"){
    //moving the paddle with mouse
  paddle.x=World.mouseX;
  
  
  
  createEdgeSprites();
  ball.bounceOff(leftEdge);
  ball.bounceOff(rightEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(paddle);
  
  //destroying the boxes
  if (ball.isTouching(box1)) {
    box1.destroy();
    score=score+1;
  }
  
  if (ball.isTouching(box2)) {
    box2.destroy();
    score=score+1;
  }
  
  if (ball.isTouching(box3)) {
    box3.destroy();
    score=score+1;
  }
  
  if (ball.isTouching(box4)) {
    box4.destroy();
    score=score+1;
  }
  
  if (ball.isTouching(box5)) {
    box5.destroy();
    score=score+1;
  }
  
  if (ball.isTouching(box6)) {
    box6.destroy();
    score=score+1;
  }
  
  if (ball.isTouching(box7)) {
    box7.destroy();
    score=score+1;
  }
  
  if (ball.isTouching(box8)) {
    box8.destroy();
    score=score+1;
  }
  
  if (ball.isTouching(box9)) {
    box9.destroy();
    score=score+1;
  }
  
  if (ball.isTouching(box10)) {
    box10.destroy();
    score=score+1;
  }
  
  if (ball.isTouching(box11)) {
    box11.destroy();
    score=score+1;
  }
  
  if (ball.isTouching(box12)) {
    box12.destroy();
    score=score+1;
  }
  
  if (ball.isTouching(box13)) {
    box13.destroy();
    score=score+1;
  }
  
  if (ball.isTouching(box14)) {
    box14.destroy();
    score=score+1;
  }
  if (ball.isTouching(box15)) {
    box15.destroy();
    score=score+1;
  }
  
  if (ball.isTouching(box16)) {
    box16.destroy();
    score=score+1;
  }
  if(score===16 || ball.isTouching(bottomEdge)){
    gameState="end";
  }
  }
  
if(gameState==="end"){
  textSize(30);
  text("Game Over!!",150,200);
}
  
  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
