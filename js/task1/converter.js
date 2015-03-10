define([
    'task1/dictionary',
    'shared/assert'
  ], function(Dictionary, Assert) {
    var Converter = function() {};

    Converter.prototype.convertNumber = function(number, divider1, divider2) {
      Assert.isNumber(number);
      Assert.isNumber(divider1);
      Assert.isNumber(divider2);

      var convertedValue = '';

      if (number % divider1 === 0) {
        Assert.isDefined(Dictionary[divider1]);
        convertedValue = Dictionary[divider1];
      }

      if (number % divider2 === 0) {
        Assert.isDefined(Dictionary[divider2]);
        convertedValue += Dictionary[divider2];
      }

      return convertedValue || number;
    }



    return new Converter();
  }
);