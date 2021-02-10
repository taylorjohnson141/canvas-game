class Player {
  constructor(name){
    this.name = name;
    this.health = 3
    this.inventory = {

    }
  }
    displayMessagePickup (item,canvas) {
      canvas.font = "20px Georgia";
      canvas.fillText(`Press c to pickup ${item} press b to leave it`, 10, 50);
    }
  pickupItem  (key,item,canvas){
    if(key.keyCode === 66){
      //leave item
    }
    if(key.keyCode === 67){
      this.inventory[item] = true
      canvas.clearRect(x, y, cube.width, cube.height);

    }
  }
}