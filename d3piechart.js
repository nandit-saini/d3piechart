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