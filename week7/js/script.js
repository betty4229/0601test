var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

canvas.width= 600
canvas.height= 400
// 格線
// function draw(){
//     ctx.beginPath()
//     for(var i=0;i<20;i++){
//         let pos = i*50
//         ctx.moveTo(pos,0)
//         ctx.lineTo(pos,500)
//         ctx.fillText(pos,pos,10)

//         ctx.moveTo(0,pos)
//         ctx.lineTo(800,pos)
//         ctx.fillText(pos,10,pos)
//     }
//     ctx.stroke()
// }
// draw()

// 圓形橘色
ctx.beginPath()
ctx.arc(515,60,30,0,2*Math.PI)
ctx.fillStyle="#F5AF5F"
ctx.fill()

// 三角形藍色
ctx.beginPath()
ctx.moveTo(420,349)
ctx.lineTo(460,295)
ctx.lineTo(490,355)
ctx.fillStyle="#3676BB"
ctx.fill()

// 多邊形粉紅色
ctx.beginPath()
ctx.moveTo(25,90)
ctx.lineTo(60,80)
ctx.lineTo(80,90)
ctx.lineTo(85,110)
ctx.lineTo(75,130)
ctx.lineTo(35,120)
ctx.fillStyle="#E7465D"
ctx.fill()

// 中心圓形1
ctx.beginPath()
ctx.arc(300,200,125,0,2*Math.PI)
ctx.strokeStyle="#fff"
ctx.stroke()

// 中心圓形2
ctx.beginPath()
ctx.arc(300,200,175,0,2*Math.PI)
ctx.strokeStyle="#ffffff40"
ctx.stroke()