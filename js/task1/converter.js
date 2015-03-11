define([
    'task1/dictionary',
    'shared/assert'
  ], function(Dictionary, Assert) {
    var Converter = function() {};

    Converter.prototype.convertNumber = function(number) {
      Assert.isNumber(number);

      var convertedValue = '';

      if (number % 3 === 0) {
        convertedValue = 'Bizz';
      }

      if (number % 5 === 0) {
        convertedValue += 'Appz';
      }

      return convertedValue || number;
    }



    return new Converter();
  }
);