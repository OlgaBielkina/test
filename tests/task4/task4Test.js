define('parentMock', function () {
    function Parent() {}
    Parent.prototype.printMessage = function() {
      return 'Parent Method';
    }
    return Parent;
});
describe('prototype inheritance', function() {
  var Parent;
  var Child;

  beforeEach(function(done) {
    require.config({
        map: {
            '*': {
                'js/task2/parent': 'parentMock'
            }
        }
    });
    require(['js/task2/parent', 'js/task2/child'], 
      function(ParentModule, ChildModule) {
        Parent = ParentModule;
        Child = ChildModule;
        done();
    });
  });

  it('child istance of parent', function() {
    var child = new Child();
    expect(child).toBeInstanceOf(Parent);
  });

  it('child istance of Child', function() {
    var child = new Child();
    expect(child).toBeInstanceOf(Child);
  });
  
  it('child call parent method', function() {
    var child = new Child();
    expect(child.hasOwnProperty('printMessage')).toBeFalsy();
    expect(child.printMessage()).toBe('Parent Method');
  });
});