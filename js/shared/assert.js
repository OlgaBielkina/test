'use strict';

/**
 * @ngdoc function
 * @name ctcoApp.shared.util:Assert
 * @description Functionality to check asserted values
 */

define([
  'js/shared/Type',
  'js/error/assertionError'
  ],function (Type, AssertionError) {
    /**
     * @see Assert#fail()
     */
    var fail = function(message) {
      throw new AssertionError(message || 'Assertion failed');
    };

    var Assert = {
      /**
       * Unconditional fail. Useful for fall-through switch or if series.
       * @param {string} message
       * @return {shared.error.AssertionError}
       */
      fail: fail,

      /**
       * Ensure value is an Array.
       * @param {Array} value
       * @param {string} message
       */
      isArray: function (value, message) {
        if (!Type.isArray(value)) {
          fail(message || 'value is not an array: ' + value);
        }
      },

      /**
       * Ensure value is a boolean.
       * @param {boolean} value
       * @param {string} message
       * @throws {shared.error.AssertionError}
       */
      isBoolean: function (value, message) {
        if (!Type.isBoolean(value)) {
          fail(message || 'value is not a boolean: ' + value);
        }
      },

      /**
       * Ensure value is not undefined.
       * @param {*} value
       * @param {string} message
       * @throws {shared.error.AssertionError}
       */
      isDefined: function (value, message) {
        if (Type.isUndefined(value) || Type.isNull(value)) {
          fail(message || 'value is not defined: ' + value);
        }
      },

      /**
       * Ensure value is a function.
       * @param {function} value
       * @param {string} message
       * @throws {shared.error.AssertionError}
       */
      isFunction: function (value, message) {
        if (!Type.isFunction(value)) {
          fail(message || 'value is not a function: ' + value);
        }
      },

      /**
       * Ensure value is an integer.
       * @param {number} value
       * @param {string} message
       * @throws {shared.error.AssertionError}
       */
      isIntegral: function (value, message) {
        if (!Type.isIntegral(value)) {
          fail(message || 'value is not an integral number: ' + value);
        }
      },

      /**
       * Ensure value is null.
       * @param {*} value
       * @param {string} message
       * @throws {shared.error.AssertionError}
       */
      isNull: function (value, message) {
        if (!Type.isNull(value)) {
          fail(message || 'value is not null: ' + value);
        }
      },

      /**
       * Ensure value is a number.
       * @param {number} value
       * @param {string} message
       * @throws {shared.error.AssertionError}
       */
      isNumber: function (value, message) {
        if (!Type.isNumber(value)) {
          fail(message || 'value is not a number: ' + value);
        }
      },

      /**
       * Ensure value is an object.
       * @param {object} value
       * @param {string} message
       * @throws {shared.error.AssertionError}
       */
      isObject: function (value, message) {
        if (!Type.isObject(value)) {
          fail(message || 'value is not an object: ' + value);
        }
      },

      /**
       * Ensure value is a JavaScript primitive type.
       * @param {*} value
       * @param {string} message
       * @throws {shared.error.AssertionError}
       */
      isPrimitive: function (value, message) {
        if (!Type.isPrimitive(value)) {
          fail(message || 'value is not a primitive: ' + value);
        }
      },

      /**
       * Ensure value is a string.
       * @param {string} value
       * @param {string} message
       * @throws {shared.error.AssertionError}
       */
      isString: function (value, message) {
        if (!Type.isString(value)) {
          fail(message || 'value is not a string: ' + value);
        }
      },

      /**
       * Ensure expression or value is true.
       * @param {boolean} expression
       * @param {string} message
       * @throws {shared.error.AssertionError}
       */
      isTrue: function (expression, message) {
        if (expression !== true) {
          fail(message || 'expression is not true: ' + expression);
        }
      },

      /**
       * Ensure object is instance of class
       * @param {object} object
       * @param {Class} clazz
       * @throws {shared.error.AssertionError}
       */
      isInstanceOf: function (object, clazz, message) {
        if (!(object instanceof clazz)) {
          fail(message || 'object is not instance of ' + clazz);
        }
      },

      /**
       * Ensure container is not empty. Supported containers are Array, Object and String.
       * @param {*} container
       * @param {string} message
       * @throws {shared.error.AssertionError}
       */
      notEmpty: function (container, message) {
        var length = 0;
        if (Type.isArray(container)) {
          length = container.length;
        } else if (Type.isString(container)) {
          length = container.length;
        } else if (Type.isObject(container)) {
          length = Object.keys(container).length;
        }

        if (length === 0) {
          fail(message || 'container is empty: ' + container);
        }
      },

      /**
       * Ensure value is not null.
       * @param {*} value
       * @param {string} message
       * @throws {shared.error.AssertionError}
       */
      notNull: function (value, message) {
        if (Type.isNull(value)) {
          fail(message || 'value is null');
        }
      }
    };

    return Assert;
  });
