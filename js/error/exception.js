'use strict';
define(function () {
  /**
   * Base exception class.
   *
   * @constructor
   * @extends {Error}
   * @param {string} message
   */
  var Exception = function(message) {
    this.name = 'Exception';
    this.message = message;
  };

  Exception.prototype = Object.create(Error.prototype);

  Exception.prototype.constructor = Exception;

  Exception.prototype.toString = function() {
    return this.name + (this.message ? ': ' + this.message : '');
  };

  return  Exception;
});
