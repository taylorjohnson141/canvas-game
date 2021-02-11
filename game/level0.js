class Level0{
  constructor(canvas){
    this.canvas = canvas
    this.playeraStartCord = [10,10]
    this.color = 'red' 
    this.swordCoord = [50,50];
    this.bowCoord = [80,50]
    this.treeCoord = [[0,0],[0,15],[0,30],[0,45],[0,60],[0,75],[0,90],[0,100],[0,115],[0,130],[15,130],15,145]
    this.sword = true
    this.bow = true
  }

  fill(){
    this.canvas.beginPath();
    this.canvas.fillStyle = this.color;
    this.canvas.fillRect(0, 0, 450, 450);
    if(this.sword){
      this.canvas.fillStyle = "grey"
      this.canvas.fillRect(this.swordCoord[0],this.swordCoord[1],5,5)
    }
    if(this.bow){
      this.canvas.fillStyle = "purple"
      this.canvas.fillRect(this.bowCoord[0],this.bowCoord[1],5,5)
    }
    this.canvas.fillStyle = 'green'
    this.treeCoord.forEach(cordSet =>{
      this.canvas.fillRect(cordSet[0],cordSet[1],15,15)
    })
  }
}
