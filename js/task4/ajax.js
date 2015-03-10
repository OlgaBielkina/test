define([
    'jquery'

  ], function(
    $
  ) {
    $.when($.ajax( "http://cdn.gfkdaphne.com/tests/async.php?a=1" ), 
      $.ajax( "http://cdn.gfkdaphne.com/tests/async.php?a=2" )).then(function(r1, r2) {
        console.log(r1 + ' ' + r2);
    });
  }
);