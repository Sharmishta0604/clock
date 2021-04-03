var hours,minutes,seconds;
var hoursAngle,minutesAngle,secondsAngle;

function setup() {
  createCanvas(800,400);
 //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
  
 
}

function draw() {
  background(0,0,0); 
  hours=hour();
  console.log(hours); 
  minutes=minute();
  seconds=second();
  //calculating the angle for the hand
  hoursAngle=map(hours%12,0,12,0,360);
  minutesAngle=map(minutes,0,60,0,360);
  secondsAngle=map(seconds,0,60,0,360);
  //draw hour hand

  push();
translate(width/2,height/2);  
rotate(-90);
rotate(hoursAngle);
stroke("red");
strokeWeight(10);
line(0,0,80,0);

noFill();
arc(0,0,-210,-210,0,-150);
pop();

  //draw minute hand
 
  push();
translate(width/2,height/2);
rotate(-90);  
rotate(minutesAngle);
stroke("yellow");
strokeWeight(10);
line(0,0,100,0);
noFill();
arc(0,0,-230,-230,0,-150);
pop();

  //draw seconds hand
  
  push();
translate(width/2,height/2); 
rotate(-90); 
rotate(secondsAngle);
stroke("blue");
strokeWeight(10);
line(0,0,120,0);
noFill();
arc(0,0,-250,-250,0,-150);
pop();
  drawSprites();
}