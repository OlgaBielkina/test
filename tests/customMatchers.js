beforeEach(function() {
  jasmine.addMatchers({
    toBeInstanceOf: function(util, customEqualityTesters) {
      return {
        compare: function(actual, expected) {
          var notText = this.isNot ? " not" : "";
          var result = {};
          if (actual instanceof expected) {
          	result.pass = true;
          } else {
          	result.message = function () {
	          return "Expected " + actual + notText + " to be instanceof " + expecteds;
	        };
	        result.pass = false;
          }

          return result;
        }
      }
    },
    toThrowException: function(util, customEqualityTesters) {
      return { 
        compare: function(actual, expected) {
          var notText = this.isNot ? " not" : "";
          var threw = false, thrown;
          var result = {};

          try {
            actual();
          } catch (e) {
            threw = true;
            thrown = e;
          }

          if(!threw){
            result.message = function () {
              return "Expected " + actual + notText + " to throw exception";
            };
            result.pass = false;
            return result;
          }

          if(!(thrown instanceof expected)){
            result.message = function () {
              return "Expected " + actual + notText + " to throw exception of class " +
              expected + " but got " + thrown.constructor;
            };
            result.pass = false;
            return result;
          }
          result.pass = true;

          return result;
        }
      }
    }
  })
});