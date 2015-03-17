describe('prototype inheritance', function() {
  var Parent;
  var Child;

  beforeEach(function(done) {
    require(['js/task2/parent', 'js/task2/child'], 
      function(ParentModule, ChildModule) {
        Parent = ParentModule;
        Child = ChildModule;
        done();
    });
  });

  it('child istance of parent', function() {
    var child = new Child();
    var parent = new Parent();
    expect(child).toBeInstanceOf(Parent);
  });

  it('child istance of Child', function() {
    var child = new Child();
    var parent = new Parent();
    expect(child).toBeInstanceOf(Child);
  });
  
  it('child call parent method', function() {
    var child = new Child();
    var parent = new Parent();
    spyOn(parent, testMethod).andReturn('Parent method');
    expect(child.hasOwnProperty(parent.testMethod)).toBeFalsy();
    expect(child.testMethod()).toBe('Parent method');
  });
});