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

// 文字1
ctx.font="14px Arial"
ctx.fillStyle = "#ffffff"
ctx.textAlign = "center"
ctx.fillText("Start Game",300,255)

// 文字2
ctx.font="20px Arial"
ctx.fillStyle = "F5AF5F"
ctx.textAlign = "center"
ctx.fillText("Radio Defense",300,205)

// 文字R
ctx.font="55px Arial "
ctx.fillStyle = "#ffffff"
ctx.textAlign = "center"
ctx.fillText("R",310,170)

// 文字R三角形
ctx.beginPath()
ctx.moveTo(315,153)
ctx.lineTo(312,163)
ctx.lineTo(320,158)
ctx.fillStyle="#ffffff"
ctx.fill()

// 電池

//頂端
ctx.beginPath()
ctx.fillStyle="#ffffff"
ctx.moveTo(265,137)
ctx.lineTo(275,137)
ctx.lineTo(275,140)
ctx.lineTo(265,140)
ctx.fill()
//中間
ctx.fillStyle="#F5AF5F"
ctx.beginPath()
ctx.moveTo(260,140)
ctx.lineTo(280,140)
ctx.lineTo(280,165)
ctx.lineTo(260,165)
ctx.fill()
//底部
ctx.beginPath()
ctx.moveTo(260,168)
ctx.lineTo(280,168)
ctx.lineTo(280,170)
ctx.lineTo(260,170)
ctx.fill()


// 圓角矩形外框
ctx.beginPath()
ctx.arc(260,250,15,Math.PI/2,Math.PI*3/2)
ctx.lineTo(340,235)
ctx.arc(340,250,15,Math.PI*3/2,Math.PI/2)
ctx.lineTo(260,265)
ctx.strokeStyle="#ffffff"
ctx.stroke()

//閃電
ctx.beginPath()
ctx.moveTo(272,145)
ctx.lineTo(270,150)
ctx.lineTo(276,150)
ctx.lineTo(269,160)
ctx.lineTo(272,153)
ctx.lineTo(265,153)
ctx.lineTo(272,145)
ctx.fillStyle = "#ffffff"
ctx.fill()

// 維護中文字
ctx.font="12px Arial"
ctx.fillStyle = "#ffffff40"
ctx.textAlign = "center"
ctx.fillText("系統維護中...",300,290)