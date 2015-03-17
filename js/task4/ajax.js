define([
    'jquery'

  ], function(
    $
  ) {
      function Task4View() {}
      
      Task4View.prototype.getData = function() {
        var deferred = new $.Deferred();
        $.when($.get("http://localhost:3000/req1"), 
          $.get("http://localhost:3000/req2")).then(function(data1, data2) {
            deferred.resolve(data1, data2)
        });
        
        return deferred.promise();
      }
      
      Task4View.prototype.render = function() {
        var data = this.getData();
        var wrapper = document.createDocumentFragment();
        data.then(function(data1, data2) {
          var text = data1 + ' ' + data2;
          var textNode = document.createTextNode(text);
          wrapper.appendChild(textNode);
        });
        return wrapper;
      }

      return Task4View;
  }
);