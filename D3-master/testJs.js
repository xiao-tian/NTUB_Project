function testJs()
{

	var width  = 460;
	var height = 268;
	dataPath = 'https://github.com/xiao-tian/NTUB_Project/tree/master/D3-master/';
	dataFile = 'table.csv';
	dataUrl = dataPath + dataFile;
	
	d3.csv(dataUrl, function(data) {
	console.log(data);
	data.forEach(function(d) {
		console.log(d.Open);
		console.log(d.Low);
		console.log(d.Close);
	});

	var maxy = d3.max(data, function(d) { return d.Open; });
	var Highmaxy = d3.max(data, function(d) { return d.High; });
	var Lowmaxy = d3.max(data, function(d) { return d.Low; });
	var Closemaxy = d3.max(data, function(d) { return d.Close; });

	var ln = data.length;
	var ctrl  = d3.select(".artcile").append("svg").attr("width", width).attr("height", height);

	var lines = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return height-d.Open * (height/Highmaxy); });
	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("d", lines);

	var line2 = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return height-d.High * (height/Highmaxy); });
	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("id", "pathline2").
	attr("d", line2);

    var line3 = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return height-d.Low * (height/Highmaxy); });
	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("id", "pathline3").
	attr("d", line3);

	var line4 = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return height-d.Close * (height/Highmaxy); });
	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("id", "pathline4").
	attr("d", line4);
	
});

}