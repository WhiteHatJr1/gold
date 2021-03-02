var maze, maze_img;
var player1, question1, question1_img, answer1, answer1_img, answer2, answer2_img, answer3, answer3_img, answer4, answer4_img;
var gamestate = "start";
var button;


function preload() {
  //maze_img = loadImage("pics/Maze1.png");
  question1_img = loadImage("pics/question1.jpg");
  answer1_img = loadImage("pics/answer1(1).jpg");
}

function setup() {
  createCanvas(600,600);
  //maze = createSprite(300,300)
  
 // maze.addImage("game1",maze_img);
 player1 = createSprite(276,50,8,8);
 player1.shapeColor = "red";
  //vertical walls
  

  question1 = createSprite(300, 300);
  question1.scale = 0.2;
  question1.addImage("quest1", question1_img);
  question1.visible = false;
  answer1 = createSprite(400, 450);
  answer1.addImage("ans1", answer1_img);
  answer1.visible = false;
  answer1.scale = 0.3
 


  door1 = createSprite(452,76,5,47);
  door1.shapeColor = "blue";

  door2 = createSprite(477,254,44,5);
  door2.shapeColor = "blue";

  door3 = createSprite(452,380,5,46);
  door3.shapeColor = "blue";
}
function draw() {
  background(220); 

  

  if (gamestate === "start"){

   walls();

    player1.collide(wallV1);
    player1.collide(wallV2);
    player1.collide(wallV3);
    player1.collide(wallV4);
    player1.collide(wallV5);


  if (keyDown(UP_ARROW)){
    player1.y = player1.y-2;
  }
  if (keyDown(DOWN_ARROW)){
    player1.y = player1.y+2;
  }
  if (keyDown(LEFT_ARROW)){
    player1.x = player1.x-2;
  }
  if (keyDown(RIGHT_ARROW)){
    player1.x = player1.x+2;
  }
  if (player1.isTouching(door1)){
    gamestate = "question1"
  }
  question1.visible = false;
  answer1.visible = false;
  }
   if (gamestate === "question1"){
    question1.visible = true;
    answer1.visible = true;
    if (mousePressedOver(answer1)){
      console.log("IS workimg");
      gamestate = "start";
    }
    //button = createSprite(500,500);

   }
  /*if (player1.collide(door1)){
   
  }*/


  drawSprites();
}

function walls(){
  wallV1 = createSprite(50,305,5,515);
  
  wallV2 = createSprite(553,305,5,515);
  
  wallV3 = createSprite(98,305,5,106);
  
  wallV4 = createSprite(250,305,5,106);
  
  wallV5 = createSprite(300,305,5,206);
  
  wallV6 = createSprite(200,175,5,156);
  player1.collide(wallV6);
  wallV7 = createSprite(150,128,5,56);
  player1.collide(wallV7);
  wallV8 = createSprite(300,128,5,56);
  player1.collide(wallV8);
  wallV9 = createSprite(400,128,5,56);
  player1.collide(wallV9);
  wallV10 = createSprite(505,128,5,56);
  player1.collide(wallV10);
  wallV11 = createSprite(250,178,5,56);
  player1.collide(wallV11);
  wallV12 = createSprite(352,205,5,105);
  player1.collide(wallV12);
  wallV13 = createSprite(452,255,5,205);
  player1.collide(wallV13);
  wallV14 = createSprite(502,227,5,55);
  player1.collide(wallV14);
  wallV15 = createSprite(199,383,5,55);
  player1.collide(wallV15);
  wallV16 = createSprite(350,408,5,106);
  player1.collide(wallV16);
  wallV17 = createSprite(401,380,5,56);
  player1.collide(wallV17);
  wallV18 = createSprite(452,432,5,56);
  player1.collide(wallV18);
  wallV19 = createSprite(502,406,5,206);
  player1.collide(wallV19);
  wallV20 = createSprite(98,482,5,58);
  player1.collide(wallV20);
  wallV21 = createSprite(199,482,5,58);
  player1.collide(wallV21);
  wallV22 = createSprite(249,481,5,155);
  player1.collide(wallV22);
  wallV23 = createSprite(300,484,5,56);
  player1.collide(wallV23);
  wallV24 = createSprite(401,505,5,104);
  player1.collide(wallV24);
  wallV25 = createSprite(148,532,5,56);
  player1.collide(wallV25);
  wallV26 = createSprite(351,534,5,56);
  player1.collide(wallV26);
  wallV27 = createSprite(250,78,5,55);
  player1.collide(wallV27);

  //horizontal walls
  wallH1 = createSprite(152,50,201,5);
  wallH2 = createSprite(425,50,253,5);
  wallH3 = createSprite(78,154,50,5);
  wallH4 = createSprite(121,103,54,5);
  wallH5 = createSprite(328,103,54,5);
  wallH6 = createSprite(476,103,54,5);
  wallH7 = createSprite(276,154,254,5);
  wallH8 = createSprite(476,154,54,5);
  wallH9 = createSprite(146,205,104,5);
  wallH10 = createSprite(276,205,54,5);
  wallH11 = createSprite(402,205,104,5);
  wallH12 = createSprite(198,254,104,5);
  wallH13 = createSprite(426,255,54,5);
  wallH14 = createSprite(526,255,54,5);
  wallH15 = createSprite(148,306,106,5);
  wallH16 = createSprite(352,306,106,5);
  wallH17 = createSprite(477,305,54,5);
  wallH18 = createSprite(172,356,152,5);
  wallH19 = createSprite(374,354,54,5);
  wallH20 = createSprite(100,407,100,5);
  wallH21 = createSprite(276,407,54,5);
  wallH22 = createSprite(426,406,54,5);
  wallH23 = createSprite(198,456,105,5);
  wallH24 = createSprite(325,458,54,5);
  wallH25 = createSprite(74,508,52,5);
  wallH26 = createSprite(326,508,52,5);
  wallH27 = createSprite(476,508,56,5);
  wallH28 = createSprite(174,559,252,5);
  wallH29 = createSprite(454,559,202,5);
}