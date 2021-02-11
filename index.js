var c = document.getElementById("myCanvas");
let cub = document.getElementById("cube");
let swor = document.getElementById("sword");
var cube = c.getContext("2d");
var ctx = c.getContext("2d");
let currLevel = new Level0(ctx)
currLevel.fill()
window.addEventListener("keydown",move)

cube.fillStyle = "green";
cube.fillRect(10, 10, 10, 10);
let x = cub.getBoundingClientRect().x
let y =cub.getBoundingClientRect().y

function move(){
  console.log('x',x)
  console.log('y',y)
if(x >= 40  && x <= 60 && y >= 40  && y <= 60 ){

}
  if(event.keyCode == 32){
    cube.clearRect(x, y, cube.width, cube.height);
    currLevel.fill()
    cube.beginPath();
    cube.fillStyle = "green";
    y -=10
    cube.fillRect(x, y, 10, 10);
    setTimeout(() =>{
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.beginPath();
      cube.clearRect(x, y, cube.width, cube.height);
      cube.beginPath();
      cube.fillStyle = "green";
      y +=10
      cube.fillRect(x, y, 10, 10);
    },300)
  }
  if(event.keyCode == 37){
    ctx.clearRect(0, 0, c.width, c.height);
    currLevel.fill()
    cube.clearRect(x, y, cube.width, cube.height);
    cube.beginPath();
    cube.fillStyle = "green";
    x -=5
    cube.fillRect(x, y, 10, 10);
    //right
  }
  if(event.keyCode == 38){
    ctx.clearRect(0, 0, c.width, c.height);
    currLevel.fill()
    cube.fillStyle = "green";
    cube.clearRect(x, y, cube.width, cube.height);
    cube.beginPath();
    y-=5
    cube.fillRect(x, y, 10, 10);
    //up
  }
  if(event.keyCode == 39){
    ctx.clearRect(0, 0, c.width, c.height);
    currLevel.fill()
    cube.clearRect(x, y, cube.width, cube.height);
    cube.beginPath();
    cube.fillStyle = "green";
    x+=5
    console.log(x)
    console.log(y)
    cube.fillRect(x, y, 10, 10);
    //left
  }
  if(event.keyCode == 40){
    ctx.clearRect(0, 0, c.width, c.height);
    currLevel.fill()
    cube.clearRect(x, y, cube.width, cube.height);
    cube.beginPath();
    cube.fillStyle = "green";
    y+=5
    cube.fillRect(x, y, 10, 10);
    //down
  }
}
ctx.fill();
