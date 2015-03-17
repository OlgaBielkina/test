define([
    'jquery',
    'js/shared/view',
    'js/task3/models/graph',
    'highcharts',
    'js/task3/models/chart'

  ], function(
    $,
    View,
    Graph,
    Highcharts,
    ChartConfig
  ) {
    var ChartView = function() {};

    ChartView.prototype = Object.create(View.prototype);
    ChartView.prototype.constructor = ChartView;

    ChartView.prototype.getChartData = function() {
        var deferred = new jQuery.Deferred();
    	var chartConfigs = ChartConfig;
    	var graph = new Graph();
    	var xAxis = [];
    	var series = {name: '', data: []};
	    config = graph.fetch().then(function() {
	      	var step = 1;
			for(var i = 0; i < graph.getLength(); i = i + step) {
				var date = graph._items[i].date;
				var dateCollection = graph.filter('date', date);
				step = dateCollection.getLength();
				var positioveCollection = dateCollection.filter('answer', 'yes');
				xAxis.push(date);
				var positiveAnswers = positioveCollection.getLength()/dateCollection.getLength()*100;
				series.data.push(positiveAnswers);
			}

			chartConfigs.xAxis.categories = xAxis;
			chartConfigs.series.push(series);
            deferred.resolve(chartConfigs);
		});
		

		return deferred.promise();

    }

    ChartView.prototype.render = function() {
    	var chartConfigs = this.getChartData();
        chartConfigs.then(function(configs) {
            $('#container').highcharts(configs);
        })
		
  }

    return ChartView;
  }
);