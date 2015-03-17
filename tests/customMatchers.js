beforeEach(function() {
	jasmine.addMatchers({
		toBeInstanceOf: function(expected) {
			var actual = this.actual;
			var notText = this.isNot ? " not" : "";

			this.message = function () {
				return "Expected " + actual + notText + " to be instanceof " + expecteds;
			};

			return actual instanceof expected;
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