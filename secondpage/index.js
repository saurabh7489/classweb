 let canvas=   document.querySelector("canvas")
  let pen=  canvas.getContext("2d")
   // pen.fillStyle='gold'
   let cell=50
   let cellQ=[[0,0]]
   let count=0
   let gameOver=false
   let direction='right'
   let randomC=generateRandomCell()

 let id=  setInterval(()=>{
    draw()
    update()
   },200)
     document.addEventListener("keydown",function(e){
      
        if(e.key=='ArrowDown'){
            direction='down'
        }else if(e.key=='ArrowUp'){
            direction='up'
        }else if(e.key=='ArrowLeft'){
            direction='left'
        }
        else{
            direction='right'
        }
     })

   function draw(){
    
    if(gameOver==true){
        clearInterval(id)
        return;
    }
       pen.fillStyle='#fb8500'
    pen.clearRect(0,0,1000,600)
    for(let i of cellQ){
        pen.fillRect(i[0],i[1],cell,cell)
    }
    pen.font='20px sans-sarif'
   pen.fillStyle='#ffffff'
    pen.fillText(`score : ${count}`,40,100)
    
    pen.fillStyle='#dda15e'
    pen.fillRect(randomC[0],randomC[1],cell,cell)

   }


   function update(){
 let x=   cellQ[cellQ.length-1][0]
 let y=   cellQ[cellQ.length-1][1]
 let newX
 let nexY
 if(direction=='right' ){
    newX=x+cell;
    nexY=y
    if(newX==900|| checkmate(newX,nexY)){
        gameOver=true
         pen.font='20px sans-sarif'
          pen.fillStyle='red'
    pen.fillText('GAME OVER',40,120)
     
    }
 }
 else if(direction=='left'){
    newX=x-cell;
    nexY=y
    if(newX<0|| checkmate(newX,nexY)){
        gameOver=true
 pen.font='20px sans-sarif'
  pen.fillStyle='red'
    pen.fillText('GAME OVER',40,120)
     
    }
 }
 else if(direction=='down'){
    newX=x
    nexY=y+cell
    if(nexY==500|| checkmate(newX,nexY)){
        gameOver=true
         pen.font='20px sans-sarif'
         pen.fillStyle='red'
    pen.fillText('GAME OVER',40,120)
      
    }
 }
 else{
    newX=x
    nexY=y-cell
    if(nexY<0|| checkmate(newX,nexY)){
        gameOver=true
         pen.font='20px sans-sarif'
          pen.fillStyle='red'
    pen.fillText('GAME OVER',40,120)
     
    }
 }

 if(newX==randomC[0]  && nexY==randomC[1]){
    randomC=generateRandomCell()
    count=count+1
 }
 else{
    cellQ.shift()

 }
 cellQ.push([newX,nexY])

   }



     function generateRandomCell(){
        return[
            Math.floor(Math.random()*650/50)*50,
            Math.floor(Math.random()*350/50)*50
        ]
     }
     function checkmate(newX,nexY){
      for(let i of cellQ){
         if(i[0]==newX && i[1]==nexY){
            return true;
         }
      }
      return false
     }
