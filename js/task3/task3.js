define([
  'jquery',
  'js/task3/answers',
  'highcharts',
  'js/task3/chart'

  ], function(
    $,
    AnswersCollection,
    Highcharts,
    ChartConfig
  ) {
    var ChartView = function() {};

    ChartView.prototype.getChartData = function() {
      var deferred = new $.Deferred();
      var chartConfigs = ChartConfig;
      var answers = new AnswersCollection('data/data.csv');
      var xAxis = [];
      var series = {name: '', data: []};
      answers.fetch().then(function() {
        var step = 1;
        for(var i = 0; i < answers.getLength(); i = i + step) {
          var date = answers._items[i].date;
          var dateCollection = answers.filter('date', date);
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