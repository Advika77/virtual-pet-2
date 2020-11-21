var dog
var happyDog
var foodStock
var foodS
var feed,addFood,fedTime,lastFed,foodObj;

function preload()
{
  //load images here
  dog=loadImage("sprites/dogImg.ng");
  happyDog=loadImage("srites/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  console.log(database);
  dog=createSprite(200,200,28,29)
  dog.addImage=dog("dogImg.png")
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}



function draw() {  

fill(255,255,254);
textSize(15);
if(lastFed>=1){
 text("Last Feed : "+lastFed%12 + "PM", 350,30);
}else if(lastFed==0){
  text("Last Feed : 12 AM",350,30);

}else{
  text("Last Feed : "+ lastFed + "AM ", 350,30) ;

}


 fedTime=database.ref('FeedTime');
 fedTime.on("value",function(data){

  lastFed=data.val();

 });

  drawSprites();
 

}

function addFood(){



}


