

$(function(){
	//宣告變數navPos並帶入nav元素的初始位置
	var navPos = $("header").offset().top;

	//畫面捲動時
	$(window).scroll(function(){
		//比較捲動量與nav元素位置
		if($(window).scrollTop() > navPos){
			//滿足條件時將nav元素固定在上方
			$("header").css("position","fixed");
		}else{
			//不滿足條件時將nav元素維持一般配置
			$("header").css("position","static");
		}
	});
});


$("#gotop").click(function(){
    jQuery("html,body").animate({
        scrollTop:0
    },1000);
});
$(window).scroll(function() {
    if ( $(this).scrollTop() > 300){
        $('#gotop').fadeIn("fast");
    } else {
        $('#gotop').stop().fadeOut("fast");
    }
});
// 線條圖

google.charts.load('current', {'packages':['line', 'corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var button = document.getElementById('change-chart');
var chartDiv = document.getElementById('chart_div');

var data = new google.visualization.DataTable();
data.addColumn('date', 'Month');
data.addColumn('number', "TOTAL REVENUE");
data.addColumn('number', "TOTAL COST");

data.addRows([
  [new Date(2014, 0),  -.5,  5.7],
  [new Date(2014, 1),   .4,  8.7],
  [new Date(2014, 2),   .5,   12],
  [new Date(2014, 3),  2.9, 15.3],
  [new Date(2014, 4),  6.3, 18.6],
  [new Date(2014, 5),    9, 20.9],
  [new Date(2014, 6), 10.6, 19.8],
  [new Date(2014, 7), 10.3, 16.6],
  [new Date(2014, 8),  7.4, 13.3],
  [new Date(2014, 9),  4.4,  9.9],
  [new Date(2014, 10), 1.1,  6.6],
  [new Date(2014, 11), -.2,  4.5]
]);

var materialOptions = {
  chart: {

  },
  width: 900,
  height: 300,
  series: {
	// Gives each series an axis name that matches the Y-axis below.
	0: {axis: 'Temps'},
	1: {axis: 'Daylight'}
  },
  axes: {
	// Adds labels to each axis; they don't have to match the axis names.
	y: {
	  Temps: {label: 'Temps (Celsius)'},
	  Daylight: {label: 'Daylight'}
	}
  }
};

var classicOptions = {
  title: 'Average Temperatures and Daylight in Iceland Throughout the Year',
  width: 900,
  height: 300,
  // Gives each series an axis that matches the vAxes number below.
  series: {
	0: {targetAxisIndex: 0},
	1: {targetAxisIndex: 1}
  },
  vAxes: {
	// Adds titles to each axis.
	0: {title: 'Temps (Celsius)'},
	1: {title: 'Daylight'}
  },
  hAxis: {
	ticks: [new Date(2014, 0), new Date(2014, 1), new Date(2014, 2), new Date(2014, 3),
			new Date(2014, 4),  new Date(2014, 5), new Date(2014, 6), new Date(2014, 7),
			new Date(2014, 8), new Date(2014, 9), new Date(2014, 10), new Date(2014, 11)
		   ]
  },
  vAxis: {
	viewWindow: {
	  max: 30
	}
  }
};

function drawMaterialChart() {
  var materialChart = new google.charts.Line(chartDiv);
  materialChart.draw(data, materialOptions);
  button.innerText = 'Change to Classic';
  button.onclick = drawClassicChart;
}

function drawClassicChart() {
  var classicChart = new google.visualization.LineChart(chartDiv);
  classicChart.draw(data, classicOptions);
  button.innerText = 'Change to Material';
  button.onclick = drawMaterialChart;
}

drawMaterialChart();

}