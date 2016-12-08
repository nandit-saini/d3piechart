import * as d3 from 'd3';
export const PieChart = () => {

	this.config = {

		element:"body",		
		width:960,
		height:500,		
		innerRadius:0,		
		animationDuration:1000,
		startColor: "#007AFF",
		endColor : "#FFF500",
		title : {
			text:"This is a dummy title",
			fontSize: 24,
			fontFamily:"sans-serif",
			fontColor:"#00000",
			fontWeight:"bold",
			alignment:"middle"
		},
		arcLabel: {
			fontSize: 15,
			fontFamily:"sans-serif",
			fontColor:"black",
			alignment:"middle"
		},
		pullOutSegment : {
			duration:300,
			pullOutLength:20
		},
		customColorFunction:""
	};	    

    this.data = {};

}

PieChart.prototype.setPieChartElement = (element) => {
	
	this.config.element = element;
};

PieChart.prototype.setData = (data) => {
	
	this.data = data;
};

PieChart.prototype.setHeight = (height) => {
	
	this.config.height = height;
};

PieChart.prototype.setInnerRadius = (innerRadius) => {
	
	this.config.innerRadius = innerRadius;	
};

PieChart.prototype.setAnimationDuration = (animationDuration) => {
	
	this.config.animationDuration = animationDuration;	
};

PieChart.prototype.setStartColor = (startColor) => {
	
	this.config.startColor = startColor;	
};

PieChart.prototype.setEndColor = (endColor) => {
	
	this.config.endColor = endColor;	
};

PieChart.prototype.setTitle = (title) => {
	
	this.config.title.text = title;	
};

PieChart.prototype.setTitleColor = (fontColor) => {
	
	this.config.title.fontColor = fontColor;	
};

PieChart.prototype.setTitleSize = (fontSize) => {
	
	this.config.title.fontSize = fontSize;	
};

PieChart.prototype.setTitleFontFamily = (fontFamily) => {
	
	this.config.title.fontFamily = fontFamily;	
};

PieChart.prototype.setTitleFontWeight = (fontWeight) => {
	
	this.config.title.fontWeight = fontWeight;	
};

PieChart.prototype.setSegmentLabelFontFamily = (fontFamily) => {

	this.config.arcLabel.fontFamily = fontFamily;	
};

PieChart.prototype.setSegmentLabelFontSize = (fontSize) => {

	this.config.arcLabel.fontSize = fontSize;	
};

PieChart.prototype.setSegmentLabelFontColor = (fontColor) => {

	this.config.arcLabel.fontColor = fontColor;	
};

PieChart.prototype.setSegmentPullOutDuration = (duration) => {

	this.config.pullOutSegment.duration = duration;	
};

PieChart.prototype.setSegmentPullOutLength = (length) => {

	this.config.pullOutSegment.pullOutLength = length;	
};

PieChart.prototype.setCustomColorFunction = (fn) => {

	this.config.customColorFunction = fn;
};

PieChart.prototype.createPieChart = () => {
	
	d3.select("svg").remove();
	d3.select(".tooltip-css").remove();

	const tooltip = d3.select("body")
		.append("div")
		.attr("class","tooltip-css")
		.style("position", "absolute")
    	.style("padding", "10px")
    	.style("background-color", "white")
    	.style("-webkit-border-radius", "10px")
    	.style("-moz-border-radius", "10px")
    	.style("border-radius", "10px")
    	.style("-webkit-box-shadow", "4px 4px 10px rgba(0, 0, 0, 0.4)")
    	.style("-mox-box-shadow", "4px 4px 4px 10px rgba(0, 0, 0, 0.4)")
    	.style("box-shadow","4px 4px 10px rbga(0, 0, 0, 0.4) pointer-events: none")

	tooltip.append("div")
		.attr("class","data1")
		.style("font-size","14px")
		.style("font-family","Helvetica Neue, Helvetica, Arial, sans-serif");

	tooltip.append("div")
		.attr("class","data2")
		.style("font-size","14px")
		.style("font-family","Helvetica Neue, Helvetica, Arial, sans-serif");		

	const element  = this.config.element,
		width = $(window).width(),
	    height = this.config.height ,
	    title = this.config.title,
	    padding = 15,
	    pullOutSegment = this.config.pullOutSegment,
	    tooltipLabelDistanceAfterRadius = 30,
	    radius = Math.min(width, height) / 2 - title.fontSize-padding - pullOutSegment.pullOutLength-tooltipLabelDistanceAfterRadius,
	    tooltipLabelRadius=radius+tooltipLabelDistanceAfterRadius,
	    data = this.data,
	    animationDuration = this.config.animationDuration,
	    innerRadius = this.config.innerRadius ,
	    outerRadius = radius,
	    arcLabel=this.config.arcLabel,
	    labelInnerRadius = (3*radius)/4,
	    labelOuterRadius = (3*radius)/4,
	    length = data.length;
	    startColor = this.config.startColor,
	    endColor = this.config.endColor,
	    customColorFunction = this.config.customColorFunction;

	const selector = element[0] === '#' ? d3.select(element) : d3.selectAll(element);  

	const color =  d3.scaleLinear()/*.scale.linear().domain([1,length])*/
      .interpolate(d3.interpolateHcl)
      .range([d3.rgb(startColor), d3.rgb(endColor)]);

	const arc = d3.arc()/*.svg.arc()*/
	    .outerRadius(outerRadius)
	    .innerRadius(innerRadius);

	const labelArc = d3.arc()/*.svg.arc()*/
	    .outerRadius(labelOuterRadius)
	    .innerRadius(labelInnerRadius);

	const pie = d3.pie()/*.layout.pie()*/
	    .sort(null)
	    .value(function(d) { return d[Object.keys(d)[1]]; });

	const svg = selector.append("svg")
	    .attr("width", width)
	    .attr("height", height)
	  	.append("g")
	    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	const g = svg.selectAll(".arc")
		  .data(pie(data))
		  .enter().append("g")
		  .attr("class", "arc");

	
	if(customColorFunction!=="")	  
	{	
		g.append("path")
		  .attr("d", arc)
		  .style("fill", customColorFunction)
		  .style("cursor","pointer")
		  .transition()
		  .duration(animationDuration)
		  .attrTween('d', tweenPie);		 
	}
	else 
	{
		g.append("path")
		  .attr("d", arc)
		  .style("fill", function(d,i) { return color(i); })
		  .style("cursor","pointer")
		  .transition()
		  .duration(animationDuration)
		  .attrTween('d', tweenPie);		 
	}

		g.append("text")
		  .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
		  .attr("dy", ".35em")
		  .text(function(d) {  		

		  		return Object.keys(d.data)[0]+"-"+d.data[Object.keys(d.data)[0]]; 
		  })
		  .style("font-family",arcLabel.fontFamily)	
		  .style("font-size",arcLabel.fontSize+"px")
		  .style("fill",arcLabel.fontColor)
		  .style("text-anchor",arcLabel.alignment)
		  .style("cursor","pointer")


		g.selectAll("text").text(function(d){ // adjusting size of the labels whose segments is smaller than the text

			var textlength = this.getComputedTextLength();
			var arclength = (radius*(d.endAngle - d.startAngle))/2;

			if(arclength<textlength)
			{
				$(this).css("font-size",arcLabel.fontSize-5+"px")
				return (Object.keys(d.data)[0]+" - "+d.data[Object.keys(d.data)[0]]).substr(0,1)+"..";	
			}
			else 
			{
				return Object.keys(d.data)[0]+" - "+d.data[Object.keys(d.data)[0]];
			}	

		});  

	d3.select("svg") // code for title appending
	.append("text")
	.text(title.text)
	.attr("x",width/2)
	.attr("y",title.fontSize)
	.style("fill",title.fontColor)
	.style("font-family",title.fontFamily)
	.style("font-size",title.fontSize)
	.style("font-weight",title.fontWeight)
	.style("text-anchor",title.alignment);


	g.on("click",function(){

		const obj = d3.select(this);		
		obj.style("position","relative");	
		var isExpanded = $(this).attr("class");	

		if(isExpanded !=="expanded")
			openSegment(obj,pullOutSegment.duration,pullOutSegment.pullOutLength);
		
		else 
			closeSegment(obj,pullOutSegment.duration);
	})
	.on("mouseover",function(d){

		const obj = d3.select(this);
		obj.style("position","relative");		
		var xaxis= arc.centroid(d)[0]+10;
		var yaxis = arc.centroid(d)[1]+10;
		var h = Math.sqrt(xaxis*xaxis + yaxis*yaxis);
		
		openSegment(obj,pullOutSegment.duration,pullOutSegment.pullOutLength);
		obj.style("opacity","0.7");
		
		$(".tooltip-css").css("opacity","1");
  		$(".data1").html(Object.keys(d.data)[0]+" -"+d.data[Object.keys(d.data)[0]]);
  		$(".data2").html(Object.keys(d.data)[1]+" -"+d.data[Object.keys(d.data)[1]]);
  		
  		d3.selectAll(".tooltip-css")
  			.style("left",d3.mouse(this)[0]+width/2+"px")
  			.style("top",d3.mouse(this)[1]+height/2+radius+"px");
	})
	.on("mouseout",function(){

		const obj = d3.select(this);
		closeSegment(obj,pullOutSegment.duration);

		obj.style("position","");
		obj.style("opacity","");		
		$(".tooltip-css").css("opacity","0");		   		

	});	

	function openSegment (segment,duration,size)
	{

		segment.transition()
			.duration(duration)
			.attr("transform", function(d, i) {
				var c = arc.centroid(d),
					x = c[0],
					y = c[1],
					h = Math.sqrt(x*x + y*y),
					pullOutSize = parseInt(size, 10);

				return "translate(" + ((x/h) * pullOutSize) + ',' + ((y/h) * pullOutSize) + ")";
			})
			.on("end", function(d, i) {
				
				segment.attr("class", "expanded");
			});
	}

	function closeSegment (segment,duration) {

		segment.transition()
			.duration(duration)
			.attr("transform", "translate(0,0)")
			.on("end", function(d, i) {
				
				segment.attr("class", "");
				
			});
	}

	function tweenPie(finish) {
	    var start = {
	        startAngle: 0,
	        endAngle: 0
	    };
	    var interpolator = d3.interpolate(start, finish);
	    return function(d) { return arc(interpolator(d)); };
	}	  	 
};