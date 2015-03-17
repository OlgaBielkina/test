define([
  'jquery',
  'js/task3/graph',
  'highcharts',
  'js/task3/chart'

  ], function(
    $,
    Graph,
    Highcharts,
    ChartConfig
  ) {
    var ChartView = function() {};

    ChartView.prototype.getChartData = function() {
      var deferred = new $.Deferred();
      var chartConfigs = ChartConfig;
      var graph = new Graph('data/data.csv');
      var xAxis = [];
      var series = {name: '', data: []};
      graph.fetch().then(function() {
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
      var wrapper = $('<div></div>');
      chartConfigs.then(function(configs) {
        wrapper.highcharts(configs);
      });
      return wrapper[0];
    }

  return ChartView;
});