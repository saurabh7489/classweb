let canvas= document.querySelector('canvas')
let pen= canvas.getContext('2d')
pen.fillStyle='snow'
let cell=50

let cellQ=[[0,0]]
let direction='right'
document.addEventListener("keydown",function(e){
    if(e.key=='ArrowDown'){
        direction='down'
    }
    else if (e.key=='ArrowUP'){
        direction='up'
    }
    else if (e.key=='ArrowLeft'){
        direction='left'
    }
    else{
        direction='right'
    }
})


function draw(){
    pen.clearRect(0,0,900,900)
    for(let i of cellQ){
        pen.fillRect(i[0],i[1],cell,cell)
    }
}
function update(){
let x= cellQ[cellQ.length-1][0]
let y=cellQ[cellQ.length-1][1]
let newX=x+cell
let newY=y
 gameover=false
// let newX
// let newY
if(direction=='right'){
    newX=x+cell;
    newY=y
    if(newX==900){
        gameover=true
    }
}
else if(direction=='left'){
    newX=x-cell;
    newY=y
     if(newX<0){
        gameover=true
    }
}
else if(direction=='down'){
    newX=x
    newY=y+cell
     if(newY==500){
        gameover=true
    }
}
else (direction=='up'){
    newX=x
    newY=y-cell
     if(newY<0){
        gameover=true
    }
}

cellQ.push([newX,newY])
cellQ.shift()
}
setInterval(()=>{
    draw()
    update()
},600)



