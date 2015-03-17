/**
 *
 */
define([], function() {
    var Parent = function(message) {
      this.message = message || 'Hello world'
    };

    Parent.prototype.printMessage = function() {
      return this.message;
    }

    return Parent;
  }
);