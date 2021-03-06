# **Installation**

To install , run the following command

>_meteor add nandit:d3piechart_

# **Usage**

To use the package you can import using 

>_import {PieChart} from "meteor/nandit:d3piechart"_

Now, create a new object and then use the object's methods to create a D3 Pie Chart

>_const objPieChart = new PieChart();_ // New object of the package
>_objPieChart.setPieChartElement("#pie");_ // Set the HTML Element selector in which the Pie chart will be rendered  
>_objPieChart.setData(data);_ // Setting the JSON data according to which the PieChart Will Created
>_objPieChart.createPieChart();_ // Method which actually creates the D3 Pie Chart

# **Documentation**

### **Methods**

1. setPieChartElement(element)

	This method is used to set the HTML element in which the Pie Chart will be rendered.
	This method can take Id as well as Class Element CSS selector.	

	>_objPieChart.setPieChartElement("#pie");_   //setting an id selector as the HTML element
	>_objPieChart.setPieChartElement(".pie");_  //setting an class selector as the HTML element

2. setData(data)

	This method is used to the JSON data accroding to which the Pie Chart will be created.

	>_objPieChart.setData(data);_ //Setting the JSON data

3. setHeight(height)

	This method is used to set the height of the Pie Chart box.

	>_objPieChart.setHeight(300);_ // Setting the height to 300px

4. setInnerRadius(innerRadius)
	
	This method is used to set the Inner Radius for the Pie Chart to make it shape like a ring or a doughnut.

	>_objPieChart.setInnerRadius(20);_ //Setting the inner radius to 20 px;

5. setAnimationDuration(duration)

	This method is used to set the animation duration of Pie Chart creation animation.

	>_objPieChart.setAnimationDuration(300);_	//Setting the animation duration in 300 ms

6. setStartColor(startColor)

	This method is used to set the start color for the segments of the Pie chart.In other words this color will be used as a start color of the first segment with its shades for other segments.

	>_objPieChart.setStartColor("#007AFF");_ // Setting the start color to segment color range.

7. setEndColor(endColor)
	
	This method is used to set the end color for the segments of the Pie Chart. In other words this color will be used as the end color uptill which the shades will be generated for the segments.

	>_objPieChart.setEndColor("#FFF500");_ //Setting the end color to segment color range.

8. setTitle(title)

	This method is used to set the Title Text of the Pie chart.

	>_objPieChart.setTitle("This is the title");_ //Setting the heading of the Pie chart

9. setTitleColor(titleColor)		

	This method is used to set the color of the title text for the Pie chart.

	>_objPieChart.setTitleColor("#00000");_ // Setting the font color of the heading for the Pie chart

10. setTitleFontFamily(fontFamily)

	This method is used to set the title's font family.

	>_objPieChart.setTitleFontFamily("Helvatica");_ //Setting the font family of the heading for the Pie chart

11. setTitleFontWeight(fontWeight)

 	This method is used to set the font weight of the title text for the Pie chart.	

 	>_objPieChart.setTitleFontWeight("bold");_ //Setting the font-weight of the heading for the Pie chart
 	>_objPieChart.setTitleFontWeight(600);_  //Setting the font-weight of the heading for the Pie chart

11. setSegmentLabelFontFamily(fontFamily) 

	This method is used to set the Segment Label's font family.

	>_objPieChart.setSegmentLabelFontFamily("Helvatica");_ // Setting the segment's label font-family

12.	setSegmentLabelFontSize(fontSize)
	
	This method is used to set the Segment Label's font size.

	>_objPieChart.setSegmentLabelFontSize(15);_ //Setting the segment's label font-size

13. setSegmentLabelFontColor(fontColor)

	This method is used  to set the Segment Label's font color.

	>_objPieChart.setSegmentLabelFontColor("#337AB7");_ // Setting the segment's label font-color

14. setSegmentPullOutLength(length)

	This method is used to set the Segment Pullout animation lenght when cursor is hovered over a segment.

	>_objPieChart.setSegmentPullOutLength(15);_ // Setting the pull out lenght for the animation 

15. setSegmentPullOutDuration(duration)		

	This method is used to set the Segment Pullout animation duration in milliseconds.

	>_objPieChart.setSegmentPullOutLength(300);_ // Setting the pull out animation of the segment duration.

16. setCustomColorFunction(customFunction)

    This method is used to set a custom color logic for the segments of the D3 Pie Chart.If it is not set then by default logic in which the different colour shades between a start color and end color will be used.

    >_objPieChart.setCustomColorFunction(function(d,i){_
	>	
    >	// d : Pie Chart segment object  
    	// i : index of the object from the json data
    >
    >	_return d.data.color;_
    >
    > /* if the all the json objects passed in the data have a color field then it	will return that color. Example:- json_data = [{"result_type":"organic","qty":45,"color":"green"},	 {"result_type":"ads","qty":30,"color":"red"}] then it will return green and red for the respective  segment*/
	>
	>----------------------------------OR---------------------------------------  
	>	You can also make your own logic like as follows:
    >
	>	_const qty = d.data.qty;_  
	>	_if(qty == 10 )_  
	>		_return "red";_  
	>	_else if(qty==20)_  
	>		_return "#000000";_  
	>	_else_  
	>		_return "rgb(0,123,23)";_  
    >_});_

17. setTooltipPadding(padding)

	This method is used to set the tooltip's padding.

	>_objPieChart.setTooltipPadding(10);_ //Setting the padding of tooltip 

18. setTooltipBackgroundColor(backgroundColor)

	This method is used to set the tooltip's background color.

	>_objPieChart.setTooltipBackgroundColor("#000000");_ //Setting the background color of tooltip

19. setTooltipBorderRadius(borderRadius)

	This method is used to set the tooltip's border radius.

	>_objPieChart.setTooltipBorderRadius(10);_ //Setting the border radius of tooltip

20. setTooltipBoxShadow(borderShadow)

	This method is used to set the tooltip's box shadow.

	>_objPieChart.setTooltipBoxShadow("4px 4px 10px rgba(0,0,0,0.4)");_ //Setting the border shadow of tooltip

21. setTooltipLabelFontSize(fontSize)

	This method is used to set the font size of tooltip's label text.

	>_objPieChart.setTooltipLabelFontSize("14px");_	//Setting the font size of tooltip's label text

22. setTooltipLabelFontFamily(fontFamily)
	
	This method is used to set the font family of tooltip's label text.

	>_objPieChart.setTooltipLabelFontFamily("Helvatica");_ //Setting the font family of tooltip's label text

23. setTooltipLabelFontWeight(fontWeight)

	This method is used to set the font weight of tooltip's label text.

	>_objPieChart.setTooltipLabelFontWeight("normal");_ //Setting the font weight
	>_objPieChart.setTooltipLabelFontWeight("300");_ //Setting the font weight

24. setTooltipLabelFontColor(fontColor)

	This method is used to set the font color of tooltip's label text.

	>_objPieChart.setTooltipLabelFontColor("#5CB85C");_ //Setting the font color by using hex code  
	>_objPieChart.setTooltipLabelFontColor("blue");_ //Setting the font color by using names	