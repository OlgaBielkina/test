/**
 *
 */
define([
      'js/task2/parent'
    ], function(Parent) {
    var Child = function(message) {
        Parent.apply(this, [message]);
    };
    
    Child.prototype = new Parent();
    Child.prototype.constructor = Child;
    

    return Child;
  }
);