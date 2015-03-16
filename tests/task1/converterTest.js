describe("Convert", function() {
  var Converter;
  beforeEach(function() {
    require(['js/task1/converter'], function(ConverterModule) {
      Converter = ConverterModule;
    });
  });
  it("number should return string", function() {
    var result = Converter.convertNumber(5);
    expect(result).toBe('Pazz');
  });
});