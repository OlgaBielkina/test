define([
    'js/task1/converter'

  ], function(
    Converter
  ) {
    var Task1View = function() {};

    /**
     * render converted numbers
     * @return (HTMLElement)
     */
    Task1View.prototype.render = function() {
      var wrapper = document.createElement('div');
      var outputArray = [];
      for(var i = 1; i <= 100; i++) {
        outputArray.push(Converter.convertNumber(i));
      }
      var textNode = document.createTextNode(outputArray.join(', '));
      wrapper.appendChild(textNode);
      return wrapper;
    }

    return Task1View;
  }
);