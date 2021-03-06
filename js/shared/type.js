'use strict';

define(function () {

  /**
   * Utility for type inference.
   */
  var Type = function() {};

  /**
   * @private
   * @param {*} value
   * @return {boolean}
   */
  Type._nativeIsArray = Array.isArray;

  /**
   * @private
   * @param {*} value
   * @return {boolean}
   */
  Type._customIsArray = function(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  };

  /**
   * Check the value is an instance of Array.
   * Uses native Array.isArray() when available or falls back to using custom implementation.
   *
   * @param {*} value
   * @return {boolean}
   */
  Type.isArray = Type._nativeIsArray || Type._customIsArray;

  /**
   * Check the value is boolean.
   *
   * @param {*} value
   * @return {boolean}
   */
  Type.isBoolean = function(value) {
    return typeof value === 'boolean';
  };

  /**
   * Check the value is a function.
   *
   * @param {*} value
   * @return {boolean}
   */
  Type.isFunction = function(value) {
    return typeof value === 'function';
  };

  /**
   * Check the value is an instance of given class.
   * Only works with prototypical inheritance.
   *
   * @param {*} value
   * @param {function} cls
   * @return {boolean}
   */
  Type.isInstanceOf = function(value, cls) {
    return value instanceof cls;
  };

  /**
   * Check the value is an integral number.
   *
   * @param {*} value
   * @return {boolean}
   */
  Type.isIntegral = function(value) {
    return Type.isNumber(value) && value % 1 === 0;
  };

  /**
   * Check the value is a number.
   *
   * @param {*} value
   * @return {boolean}
   */
  Type.isNumber = function(value) {
    return typeof value === 'number';
  };

  /**
   * Check the value is an instance of Object.
   *
   * @param {*} value
   * @return {boolean}
   */
  Type.isObject = function(value) {
    // Yikes, "typeof null" yields 'object'
    return typeof value === 'object' && !Type.isNull(value);
  };

  /**
   * Check the value is a string, number, boolean, undefined or null.
   *
   * @param {*} value
   * @return {boolean}
   */
  Type.isPrimitive = function(value) {
    // could have been !Type.isObject() ?
    if (Type.isNull(value) || Type.isUndefined(value) || Type.isString(value) ||
      Type.isNumber(value) || Type.isBoolean(value)) {
      return true;
    }

    return false;
  };

  /**
   * Check the value is a string.
   *
   * @param {*} value
   * @return {boolean}
   */
  Type.isString = function(value) {
    return typeof value === 'string' || value instanceof String;
  };

  /**
   * Check the value is null.
   *
   * @param {*} value
   * @return {boolean}
   */
  Type.isNull = function(value) {
    return value === null;
  };

  /**
   * Check the value is undefined.
   *
   * @param {*} value
   * @return {boolean}
   */
  Type.isUndefined = function(value) {
    return value === undefined;
  };

  return Type;
});

