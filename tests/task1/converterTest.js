define('dictionaryMock', function () {
  return {
    5: '5mock',
    3: '3mock'
  }
});
describe('converter module', function() {
  var Converter;
  var Dictionary;
  var AssertionError;

  beforeEach(function(done) {
    require.config({
        map: {
            '*': {
                'js/task1/dictionary': 'dictionaryMock'
            }
        }
    });
    require(['js/task1/converter', 'dictionaryMock', 'js/error/assertionError'], 
      function(ConverterModule, DictionaryModule, AssertionErrorModule) {
        Converter = ConverterModule;
        Dictionary = DictionaryModule;
        AssertionError = AssertionErrorModule;
        done();
    });
  });

  it("should convert number to string if divided by 5", function() {
    var actualResult = Converter.convertNumber(5);
    var expectedResult = Dictionary[5];
    expect(actualResult).toBe(expectedResult);
  });

  it("should convert number to string if divided by 3", function() {
    var actualResult = Converter.convertNumber(3);
    var expectedResult = Dictionary[3];
    expect(actualResult).toBe(expectedResult);
  });

  it("should convert number to string if divided by 3 and 5", function() {
    var actualResult = Converter.convertNumber(15);
    var expectedResult = Dictionary[3] + Dictionary[5];
    expect(actualResult).toBe(expectedResult);
  });

  it("should return number if not divided by 5 and 3", function() {
    var number = 4;
    var actualResult = Converter.convertNumber(number);
    expect(actualResult).toBe(number);
  });

  it("if pass not a number", function() {
    var self = this;
    expect(function() {Converter.convertNumber('')}).toThrowException(AssertionError);
  });
});