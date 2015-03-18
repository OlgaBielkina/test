define([
    'jquery'

  ], function(
    $
  ) {
      function Task4View(url1, url2) {
        this.url1 = url1 || 'http://localhost:3000/req1';
        this.url2 = url1 || 'http://localhost:3000/req2';
      }
      
      Task4View.prototype.getData = function() {
        var deferred = new $.Deferred();
        var promise1 = $.get(this.url1);
        var promise2 = $.get(this.url2);
        $.when(promise1, promise2).then(function(data1, data2) {
            var response = [data1[0], data2[0]];
            deferred.resolve(response);
        });
        
        return deferred.promise();
      }
      
      Task4View.prototype.render = function() {
        var wrapper = document.createElement('div');
        var data = this.getData();
        data.then(function(response) {
          var text = response.join(' ');
          var textNode = document.createTextNode(text);
          wrapper.appendChild(textNode);
        });
        return wrapper;
      }

      return Task4View;
  }
);