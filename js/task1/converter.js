/**
 * Class to convert numbers
 * Singleton as should be just one converter per application
 */
define([
    'task1/dictionary',
    'shared/assert'
  ], function(Dictionary, Assert) {
    var Converter = function() {};

    /**
     * Convert numbers to string in case it divided by 3 or 5 or 15
     * @param (number) number to convert
     * @return (string) return converted to string number or number itself
     */
    Converter.prototype.convertNumber = function(number) {
      Assert.isNumber(number);

      var convertedValue = '';

      if (number % 3 === 0) {
        Assert.isDefined(Dictionary[divider1]);
        convertedValue = Dictionary[divider1];
      }

      if (number % 5 === 0) {
        Assert.isDefined(Dictionary[divider2]);
        convertedValue += Dictionary[divider2];
      }

      return convertedValue || number;
    }

    return new Converter();
  }
);