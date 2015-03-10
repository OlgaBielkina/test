'use strict';
define([
  'error/exception'
], function (Exception) {
  /**
   * Thrown to indicate assertion failure.
   *
   * @constructor
   * @extends {shared.error.Exception}
   * @param {string} message
   */
  var AssertionError = function(message) {
    this.name = 'AssertionError';
    this.message = message;
  };

  AssertionError.prototype = new Exception();
  AssertionError.prototype.constructor = AssertionError;

  return AssertionError;
});
