$(function () {

  // runs the function that sets the values of the textareas to the values saved in localStorage ////////////////////////////////////////////////////
  renderLastRegistered();


  // Listener for click events //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  $("button").click(function() {

    //  these variables define the parent of the pressed button, the textarea of the pressed buttons parent, and the ID /////////////////////////////
    var buttonParent = $(this).parent();
    var parentTxt = buttonParent.children("textarea").val();
    var hourId = buttonParent.attr("id");

    // stores the value of the text area under the correct id of the textareas parent ///////////////////////////////////////////////////////////////
    localStorage.setItem(hourId, parentTxt);
  })

  // for loop for deterimining and applying past, present, and future based on the current hour ////////////////////////////////////////////////////
  for (var i = 9; i < 18; i++) {
    var currentHour = dayjs().format('H');
    var currentId = $("#hour-" + i);

    // Compares the number at the end of the id to the current hour and applies classes accordingly ////////////////////////////////////////////////
    if (i < currentHour) {
      currentId.attr("class","row time-block past");
    } else if (i == currentHour) {
      currentId.attr("class","row time-block present");
    } else {
      currentId.attr("class", "row time-block future");
    }
  }

  // Defines the function for reading the local storages and applying it the the textarea values ///////////////////////////////////////////////////  
  function renderLastRegistered() {
    for (i = 0; i <= localStorage.length; i++) {

      // gives the name of the key, which is originally the ID of the div it was saved from ////////////////////////////////////////////////////////
      var keySort = localStorage.key(i);

      // gives the item associated with the key ////////////////////////////////////////////////////////////////////////////////////////////////////
      var keyText = localStorage.getItem(localStorage.key(i));

      // takes the name of the key and changes it to an ID /////////////////////////////////////////////////////////////////////////////////////////
      var currentId = $("#" + keySort);

      // uses the ID to apply the item to the textarea value it correctly corresponds with /////////////////////////////////////////////////////////
      currentId.children("textarea").val(keyText);
    }
  }

  // Displays the current Date in the header of the page ///////////////////////////////////////////////////////////////////////////////////////////
  var todaysDate = dayjs().format('dddd, MMMM D')
  $("#currentDay").text(todaysDate);

});
