$(document).ready(function() {
  window.dancers = [];
  window.distance = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    let dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    
    $('body').append(dancer.$node);
    
    window.dancers.push(dancer);
    window.distance.push([Math.floor(dancer.top), Math.floor(dancer.left)]);
    // console.log(window.distance);
    
    if (window.distance) {
      for (var i = 0; i < window.distance.length; i++) {
        for (var j = i + 1 ; j < window.distance.length; j++) {
          let d = Math.floor(Math.hypot(window.distance[i][0] - window.distance[j][0], window.distance[i][1] - window.distance[j][1]));
          console.log(d);
        }
        if ( d < 400 ) {
          window.dancers[i].stick(window.distance[i][0], window.distance[i][1]);
        }
      }
    }
  });
  
  $('.lineUp').on('click', function (event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();  
    }
  });
  
  $('body').on('mouseover', 'span', function () {
    $(this).css({'width' : '30px' , 'height' : 'auto'}); 
  })
  
  // $('.newDancer').mouseover(function() { 
  //   console.log('hover')
  //   $('.newDancer').css("display",'none'); 
  // });
  
});

