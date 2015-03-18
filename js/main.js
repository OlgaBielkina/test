require.config({
  baseUrl: '',
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
    'js/task1/task1',
    'js/task2/task2',
    'js/task3/task3',
    'js/task4/task4'
    
  ], function(Task1View, Task2View, ChartView, Task4View) {
    var view1 = new Task1View();
    document.getElementById('task1').appendChild(view1.render());

    var view2 = new Task2View();
    document.getElementById('task2').appendChild(view2.render());

    var view3 = new ChartView();
    document.getElementById('task3').appendChild(view3.render());
    
    var view4 = new Task4View();
    document.getElementById('task4').appendChild(view4.render());
  }
);