# **Installation**

To install , run the following command

_meteor add nandit:d3piechart_

# **Usage**

To use the package you can import using 

_import {PieChart} from "meteor/nandit:d3piechart"_

Then an object will be made and then we can use its method to create the D3 Pie Chart

_const objPieChart = new PieChart();_ // New object of the package
_objPieChart.setPieChartElement("#pie");_ // Set the HTML Element selector in which the Pie chart will be rendered  
_objPieChart.setData(data);_ // Setting the JSON data according to which the PieChart Will Created
_objPieChart.createPieChart();_ // Method which actually creates the D3 Pie Chart

# **Documentation**

### **Methods**

1. setPieChartElement(element)

	This method is used to set the HTML element in which the Pie Chart will be rendered.
	This method can take Id as well as Class Element CSS selector.	


	_objPieChart.setPieChartElement("#pie");_ 
	_objPieChart.setPieChartElement(".pie");_ 

2. setData(data)

	This method is used to the JSON data accroding to which the Pie Chart will be created.

	_objPieChart.setData(data);_ 

3. setHeight(height)

	This method is used to set the height of the Pie Chart box.

	_objPieChart.setHeight(300)_ // setting the height to 300px

4. setInnerRadius(innerRadius)
	
	This method is used to set the Inner Radius for the Pie Chart to make it shape like a ring or a doughnut.

	_objPieChart.setInnerRadius(20);_ //setting the Inner Radius to 20 px;

5. setAnimationDuration(duration)

	This method is used to set the animation duration of Pie Chart creation animation.

	_objPieChart.setAnimationDuration(300);_	//Setting the Animation Duration in 300 ms

6. setStartColor(startColor)

	This method is used to set the start color for the segments of the Pie chart.In other words this color will be used as a start color of the first segment with its shades for other segments.

	_objPieChart.setStartColor("#007AFF") // setting the start color to segment color range.

7. setEndColor(endColor)
	
	This method is used to set the end color for the segments of the Pie Chart. In other words this color will be used as the end color uptill which the shades will be generated for the segments.

	_objPieChart.setEndColor("#FFF500");_ //setting the end color to segment color range.

8. setTitle(title)

	This method is used to set the Title Text of the Pie chart.

	_objPieChart.setTitle("This is the title");_ //setting the heading of the Pie chart

9. setTitleColor(titleColor)		

	This method is used to set the color of the title text for the Pie chart.

	_objPieChart.setTitleColor("#00000");_ // setting the font color of the heading for the Pie chart

10. setTitleFontFamily(fontFamily)

	This method is used to set the title's font family.

	_objPieChart.setTitleFontFamily("Helvatica");_ //setting the font family of the heading for the Pie chart

11. setTitleFontWeight(fontWeight)

 	This method is used to set the font weight of the title text for the Pie chart.	

 	_objPieChart.setTitleFontWeight("bold");_ //setting the font-weight of the heading of the Pie chart
 	_objPieChart.setTitleFontWeight(600);_  //setting the font-weight of the heading of the Pie chart

11. setSegmentLabelFontFamily(fontFamily) 

	This method is used to set the Segment Label's font family.

	_objPieChart.setSegmentLabelFontFamily("Helvatica");_ // setting the segment's label font-family

12.	setSegmentLabelFontSize(fontSize)
	
	This method is used to set the Segment Label's font size.

	_objPieChart.setSegmentLabelFontSize(15);_ //setting the segment's label font-size

13. setSegmentLabelFontColor(fontColor)

	This method is used  to set the Segment Label's font color.

	_objPieChart.setSegmentLabelFontColor("#337AB7") // setting the segment's label font-color

14. setSegmentPullOutLength(length)

	This method is used to set the Segment Pullout animation lenght when cursor is hovered over a segment.

	_objPieChart.setSegmentPullOutLength(15) // setting the pull out lenght for the animation 

15. setSegmentPullOutDuration(duration)		

	This method is used to set the Segment Pullout animation duration in milliseconds.

	_objPieChart.setSegmentPullOutLength(300) // setting the pull out animation of the segment duration.