// Main JavaScript File for divide-and-conquer

// After the page load
$(function() {
	d3.json("./data/top-bottom-tree.json", function(error, root) {
		if(error) throw error;
		
		// Create an instance of the tree chart
		var treeChart = TreeChart();
		
		
		// Select the container div, bind the data (datum) to it,
  		// then call the instantiation of the tree chart function
		var chartWrapper = d3.select("#treeExample")
			.datum(root).
			call(treeChart);
			
		// // Assign event handler to form
		//   // Assign event handler to form
  		// $('form').submit(function(event){

		// // // Get the color and font sizes from your form
		// // var color = $('#color').val();
		// // var fontSize = $('#font-size').val();
	
		// // // Reset the color and fontSize of your chart function
		// // treeChart.color(color)
		// // 	.fontSize(fontSize);
	
		// // Re-call your chart function on your chartWrapper
		// chartWrapper.call(treeChart);
	
		// return false; // don't reload the page
		// })
	});
});
