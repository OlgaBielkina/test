define([
    'task1/converter',
    'shared/view'

  ], function(
    Converter,
    View
  ) {
    var Task1View = function() {};

    Task1View.prototype = Object.create(View.prototype);
    Task1View.prototype.constructor = Task1View;

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