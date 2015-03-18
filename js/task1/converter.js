/**
 * Class to convert numbers
 * Singleton as should be just one converter per application
 */
define([
    'js/task1/dictionary',
    'js/shared/assert'
  ], function(Dictionary, Assert) {
    /**
     * Convert numbers to string in case it divided by 3 or 5 or 15
     * @param (number) number to convert
     * @return (string) return converted to string number or number itself
     */
    var convertNumber = function(number) {
      Assert.isNumber(number);

      var convertedValue = '';

      if (number % 3 === 0) {
        Assert.isDefined(Dictionary[3]);
        convertedValue = Dictionary[3];
      }

      if (number % 5 === 0) {
        Assert.isDefined(Dictionary[5]);
        convertedValue += Dictionary[5];
      }

      return convertedValue || number;
    }

    return {
      convertNumber: convertNumber
    };
  }
);