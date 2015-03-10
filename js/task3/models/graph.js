define([
    'jquery'
  ], function($) {
    var GraphModel = function() {
      this.coordinates = null;
      this.url = 'coordinates.csv';
    };

    GraphModel.prototype.fetch = function() {
      $.get(this.url, function(data) {
        console.log(data);
      })
    }

    return GraphModel;
  }
);