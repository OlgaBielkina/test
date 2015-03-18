define([
    'jquery',
    'js/task3/answer'
  ], function($, Answer) {
    /**
     * Constructor for Answer collection
     * @param (string) url to retrieve data from server
     * @param (Array[Answer]) collection
     */
    var Collection = function(url, items) {
      this._items = items || [];
      this._url = url || '';
    };

    /**
     * Callback on success fetch items from server and save them to items property
     */
    Collection.prototype.onFetch = function(data) {
      var itemsArray = data.split(/\r\n|\r|\n/g);
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
    
    /**
     * fetch collection from server
     */
    Collection.prototype.fetch = function() {
      var promise = $.get(this._url, this.onFetch.bind(this));
      return promise;
    }

    /**
     * Filter collection and return new instance of Collection
     * @param (string) name of property to filter by
     * @param (*) value to filter by
     * @return (Collection) filtered collection
     */
    Collection.prototype.filter = function(parameter, value) {
      var filteredCollection = new Collection();

      for(var i = 0; i < this._items.length; i++ ) {
        if(this._items[i][parameter] === value) {
          filteredCollection._items.push(this._items[i]);
        }
      }
      return filteredCollection;
    }

    /**
     * Sort collection items
     * @param (string) name of property to sort by
     * @return (Array[Answer])
     */
    Collection.prototype.sort = function(parameter) {
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

    /**
     * Get length of collection items
     * @return (number)
     */
    Collection.prototype.getLength = function() {
      return this._items.length;
    }

    return Collection;
  }
);