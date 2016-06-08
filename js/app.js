var myApp = angular.module('myApp', [])

// Main controller
.controller('MainController', function($scope) {
    // Data for the chart
    $scope.data = [
    {   
        "name": "0",
        "text" : "problem",
        "parents": [
        {
            "name": "1A",
            "text" : "subproblem",
            "parents": [
            {
                "name": "2A",
                "text" : "subproblem"
            },
            {
                "name": "2B",
                "text" : "subproblem"
            }
            ]
        },
        {
            "name": "1B",
            "text" : "subproblem",
            "parents": [
            {
                "name": "2C",
                "text" : "subproblem"
            },
            {
                "name": "2D",
                "text" : "subproblem"
            }
            ]
        }
        ]
    }
    ];

})


// Create a directive 'scatter' that creates scatterplots
.directive('treeChart', function() {
    // Return your directive element
    return {
        restrict: 'E', // this directive is specified as an html element <scatter>
        scope: false,
        // Create a link function that allows dynamic element creation
        link: function(scope, elem) {
            // Define you chart function and chart element
            var myChart = TreeChart();

            // Wrapper element to put your chart in
            var chart = d3.select(elem[0]);

            // Use the scope.$watch method to watch for changes to the step, then re-draw your chart
            scope.$watch('data', function() {
                // Instantiate your chart with given settings
                // myChart.xVar('name')
                //     .yVar('concerts')
                //     .xAxisLabel('Name')
                //     .yAxisLabel('Concerts Attended');

                // Bind data and call the chart function
                chart.datum(scope.data)
                    .call(myChart);
            }, true); // Watch for object consistency!
        }
    };
});
