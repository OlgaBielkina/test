require.config({
  baseUrl: 'js',
  paths: {
    "jquery": "../bower_components/jquery/dist/jquery"
  },
  shim: {
    jquery: {
      exports: "$"
    }
  }
});

require([
    'task1/views/task1',
    'task3/models/graph',
    'task4/ajax'
  ], function(Task1View, Graph, task4) {
    var view1 = new Task1View();
    document.body.appendChild(view1.render());

    var graph = new Graph
    graph.fetch();
  }
);