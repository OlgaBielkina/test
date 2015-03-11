require.config({
  baseUrl: 'js',
  paths: {
    "jquery": "../bower_components/jquery/dist/jquery",
    'highcharts': '../bower_components/highcharts/highcharts'
  },
  shim: {
    jquery: {
      exports: "$"
    },
    highcharts: {
        exports: 'Highcharts',
        deps: [ "jquery"] 
    },
  }
});

require([
    'task1/views/task1',
    'task3/chart'
    
  ], function(Task1View, ChartView) {
    var view1 = new Task1View();
    document.body.appendChild(view1.render());
    var view3 = new ChartView();
    view3.render();   
  }
);