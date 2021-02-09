var c = document.getElementById("myCanvas");
let cub = document.getElementById("cube");
var cube = c.getContext("2d");
var ctx = c.getContext("2d");
window.addEventListener("keydown",move)
ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 450, 450);
cube.fillStyle = "green";
cube.fillRect(10, 10, 10, 10);
let x = cub.getBoundingClientRect().x
let y =cub.getBoundingClientRect().y
function move(){
  if(event.keyCode == 32){
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 450, 450);
    cube.clearRect(x, y, cube.width, cube.height);
    cube.beginPath();
    cube.fillStyle = "green";
    y -=10
    cube.fillRect(x, y, 10, 10);
    setTimeout(() =>{
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.beginPath();
      ctx.fillStyle = "red";
      ctx.fillRect(0, 0, 450, 450);
      cube.clearRect(x, y, cube.width, cube.height);
      cube.beginPath();
      cube.fillStyle = "green";
      y +=10
      cube.fillRect(x, y, 10, 10);
    },300)
  }
  if(event.keyCode == 37){
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 450, 450);
    cube.clearRect(x, y, cube.width, cube.height);
    cube.beginPath();
    cube.fillStyle = "green";
    x -=1
    cube.fillRect(x, y, 10, 10);
    //right
  }
  if(event.keyCode == 38){
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 450, 450);
    cube.fillStyle = "green";
    cube.clearRect(x, y, cube.width, cube.height);
    cube.beginPath();
    y-=1
    cube.fillRect(x, y, 10, 10);
    //up
  }
  if(event.keyCode == 39){
    console.log(x)
    console.log(y)
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 450, 450);
    cube.clearRect(x, y, cube.width, cube.height);
    cube.beginPath();
    cube.fillStyle = "green";
    x+=1
    console.log(x)
    console.log(y)
    cube.fillRect(x, y, 10, 10);
    //left
  }
  if(event.keyCode == 40){
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 450, 450);
    cube.clearRect(x, y, cube.width, cube.height);
    cube.beginPath();
    cube.fillStyle = "green";
    y+=1
    cube.fillRect(x, y, 10, 10);
    //down
  }
}
ctx.fill();