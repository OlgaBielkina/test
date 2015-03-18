describe('answers collection', function() {
  var Answers;
  var Answer;
  var jquery;
  var collection;
  var items = [
      {id: 1, answer: 'yes'},
      {id: 2, answer: 'no'},
      {id: 3, answer: 'yes'}
    ]

  beforeEach(function(done) {
    require(['js/task3/answers', 'js/task3/answer', 'jquery'], 
      function(AnswersCollection, AnswerModule, jqueryModule) {
        Answers = AnswersCollection;
        Answer = AnswerModule;
        collection = new Answers();
        jquery = jqueryModule;
        done();
    });
  });

  it('should send ajax request to fetch data', function() {
    var url = 'url';
    var data = {};
    spyOn($, 'get').and.callFake(function (req) {
        var d = $.Deferred();
       // resolve using our mock data
        d.resolve(data);
        return d.promise();
    });
    collection._url = url;
    collection.fetch();
    expect($.get.calls.mostRecent().args[0]).toBe(url);
  });

  it("should call success callback", function() {
    spyOn($, "ajax").and.callFake(function(e) {
        e.success({});
    });

    spyOn(collection, 'onFetch');
    collection.fetch();

    expect(collection.onFetch).toHaveBeenCalled();  //Verifies this was called
  });

  it("should create answers collection", function() {
    var data = 'ID;X;ANSWER;\r\n1;1;yes\r\n2;4;no';
    collection.onFetch(data);

    expect(collection._items.length).toBe(2);
  });

  it("item should be Answer", function() {
    var data = 'ID;X;ANSWER;\r\n1;1;yes\r\n2;4;no';
    collection.onFetch(data);

    expect(collection._items[0]).toBeInstanceOf(Answer);
  });

  it("should ignore empty data sets", function() {
    var data = 'ID;X;ANSWER;\r\n1;1;yes\r\n2;4;no\r\n';
    collection.onFetch(data);

    expect(collection._items.length).toBe(2);
  });

  it("should filter items", function() {
    collection._items = items;
    var actualResult = collection.filter('answer', 'yes');

    expect(actualResult._items.length).toBe(2);
  });

  it("should sort items", function() {
    var expectedResult = [
      {id: 1, answer: 'yes'},
      {id: 2, answer: 'no'},
      {id: 3, answer: 'yes'},
    ];

    collection._items = items;
    var actualResult = collection.sort('id');

    expect(actualResult).toEqual(expectedResult);
  });

  it("should return items length", function() {
    collection._items = items;
    var actualResult = collection.getLength();

    expect(actualResult).toBe(3);
  });
});