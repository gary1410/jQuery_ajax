$(document).ready(function(){

  // Step 1. call an event handler
  $('#get_color').on('click', function(e){
    // Step 2. prevent it's default
    e.preventDefault();
    // Step 3. Intercept your event with an ajax call
    $.ajax({
    //define where you want it to go to
      type: 'post',
      url: '/color'
    //when it's done tell it where you want it to go and what you want it
    //to return
    }).done(function(banana){
    //Call the .done function to tell it turn something and juse some event delegation of what you want it to do
      $("ul li:nth-child(" + banana.cell + ")").css('background-color', banana.color);
    //
    });
  });
});


// $.ajax({
//   url: "test.html",
// }).done(function() {
//   $( this ).addClass( "done" );
// });


// I click "click me"
// A random color will appear in a random box
