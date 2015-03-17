define([
    'jquery',
    'js/task3/answer'
  ], function($, Answer) {
    var Collection = function(url, items) {
      this._items = items || [];
      this._url = url || '';
    };

    Collection.prototype.onFetch = function(data) {
      var itemsArray = data.split('\r\n');
      //first row is headers
      var length = itemsArray.length;
      for(var i = 1; i < length; i++) {
        var answerData = itemsArray[i].split(';');
        if(answerData.length === 3) {
            var answer = new Answer(answerData[0], answerData[1], answerData[2]);
            this._items.push(answer);
        }
      }
    }

    Collection.prototype.fetch = function() {
      var promise = $.get(this._url, this.onFetch.bind(this));
      return promise;
    }

    Collection.prototype.filter = function(parameter, value) {
      var filteredCollection = new Collection();

      for(var i = 0; i < this._items.length; i++ ) {
        if(this._items[i][parameter] === value) {
          filteredCollection._items.push(this._items[i]);
        }
      }
      return filteredCollection;
    }

    Collection.prototype.sort = function(parameter, order) {
      var sortedCollection = new Collection();

      this._items.sort(function(a, b) {
        if (a[parameter] > b[parameter]) {
          return 1;
        }
        if (a[parameter] < b[parameter]) {
          return -1;
        }
        return 0;
      });
      
      return this._items;
    }

    Collection.prototype.getLength = function() {
      return this._items.length;
    }

    return Collection;
  }
);