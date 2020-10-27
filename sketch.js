var car,wall;
var speed, weight;


function setup() {
  createCanvas(1000,400);

  speed=random(55,100);
  weight=random(400,1500);
  
  
  car = createSprite(50, 200,50,50);
  car.velocityX=speed;
  car.shapeColor="white";
  

  wall = createSprite(900,200,40,320);
}

function draw() {
  background(0);  
  
  if (wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180){
      car.shapeColor="red";
   }
    if(deformation<180 && deformation>100){
       car.shapeColor="yellow";
    }
    if(deformation<100){
      car.shapeColor="lightgreen";
    }
  }
  drawSprites();
}