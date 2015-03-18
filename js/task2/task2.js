define([
    'js/task2/child',
    'js/task2/parent'

  ], function(
    Child,
    Parent
  ) {
    var Task2View = function() {};

    /**
     * render converted numbers
     * @return (HTMLElement)
     */
    Task2View.prototype.render = function() {
      var child = new Child('Child hello world');
      
      var span = document.createElement('span');
      var test1Node = document.createTextNode('Child object instance of Parent : ' + (child instanceof Parent));
      var test2Node = document.createTextNode('Child object instance of Child : ' + (child instanceof Child));
      var test3Node = document.createTextNode('Print message return : ' + (child.printMessage()));
      
      var wrapper = document.createDocumentFragment();
      wrapper.appendChild(test1Node);
      wrapper.appendChild(document.createElement('br'));
      wrapper.appendChild(test2Node);
      wrapper.appendChild(document.createElement('br'));
      wrapper.appendChild(test3Node);
      
      return wrapper;
    }

    return Task2View;
  }
);