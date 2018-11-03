;(function () {
  //
  // jQuery is a popular library that simplifies many common web development tasks,
  // including AJAX. You can read more about jQuery here:
  // https://jquery.com/
  // https://en.wikipedia.org/wiki/JQuery
  //
  // jQuery uses the '$' symbol and puts itself on the global window object when loaded onto the page.
  // jQuery has been included on this page already for you.
  // Note that all of the following are equivalent ways of accessing the jQuery object:
  // $
  // window.$
  // window['$']
  // window.jQuery
  //
  // Just by reading a list of API methods you may get a sense of what jQuery can do:
  // $.get() - Load data from the server using a HTTP GET request.
  // $.getJSON() - Load JSON-encoded data from the server using a GET HTTP request.
  // $.getScript() - Load a JavaScript file from the server using a GET HTTP request, then execute it.
  // $.post() - Load data from the server using a HTTP POST request.
  // $.load() - Load data from the server and place the returned HTML into the matched element.
  //
  // Most of these methods are shorthand for the "mothership" $.ajax() method:
  // https://api.jquery.com/jQuery.ajax/
  //
  // Below is our jumbotron example from the previous tab done using jQuery's $.load() method:
  //

  $('#loadBtn2').click(clickBtn)

  function clickBtn () {
    $('#jumbotronContainer2').load('jumbotron.html')
    $('#loadBtn2').remove()
  }

  //
  // Pretty simple, right?
  //
  // Next up you will use jQuery AJAX methods to fetch some things from the dog.ceo website.
  // Check out the dog.ceo API here: https://dog.ceo/dog-api/
  //
  // 1) Add a click event to the "Generate Doggo" button
  //
  // 2) In your event handler, make an AJAX request to https://dog.ceo/api/breeds/image/random
  //    which will return JSON data.
  //    Hint: there is a very convenient jQuery method for getting JSON data
  //
  // 3) Look at the Network tab in Chrome Dev Tools and confirm that an HTTP request
  //    is being sent every time you click the "Generate Doggo" button.
  //
  // 4) When the button is clicked, change the button text to "Generating Doggo …"
  //    and add the "disabled" attribute to the button so it is no longer clickable.
  //    Hint: jQuery has methods for changing DOM attributes: http://api.jquery.com/attr/
  //
  // 5) The callback function for your AJAX request takes three parameters (function arguments).
  //    The first argument is the data returned from the request. Note that jQuery took the raw
  //    JSON response text and did JSON.parse() to deserialize the data for you (convenient, right?).
  //
  //    In the data returned from the request there should be an image URL to a random dog picture.
  //    Add an <img> tag inside the <div id="doggoContainer"> element with a "src" attribute pointing to that picture.
  //    Hint: jQuery has methods for DOM creation and insertion
  //          http://api.jquery.com/jQuery/#jQuery-html-ownerDocument
  //          https://api.jquery.com/category/manipulation/dom-insertion-inside/
  //
  // 6) When the request is finished, make sure to change the button text back to "Generate Doggo"
  //    and remove the "disabled" attribute so the button is clickable again.
  //
  // 7) When the button is clicked again, it should fetch another dog and replace the image
  //    inside of <div id="doggoContainer">. There should be a loop where you click the button,
  //    get a new dog, click the button, get a new dog, etc.
  //

  // TODO: your code goes here :)

//=====================CLICK EVENT=====================

//   $('#generateDoggoBtn').click(clickDoggoBtn)

//   //=====================GET JSON DATA AND DISABLE BUTTON (ADD MESSAGE TO BUTTON)=====================

//   function clickDoggoBtn () {
//     console.log('you clicked the doggo button! fetching the JSON now..')
//     $.getJSON('https://dog.ceo/api/breed/boxer/images/random', receiveRandomDog)
//     // $('#doggoContainer').getJSON('https://dog.ceo/api/breeds/image/random')
//     // $('#generateDoggoBtn').remove()
//     $('#generateDoggoBtn').html('Generating Doggo...').prop('disabled', true)
//   }

// //=====================GENERATE CLICK EVENT=====================

//     function receiveRandomDog (data) { 
//     console.log('receive random dog: ')
//     console.log(data)
//     if(document.querySelectorAll("#doggoContainer img").length > 0) {     // if container has img
//       $('#doggoContainer').find('img').attr("src", data.message);         //then find the img src and change to data.message
//     $('#generateDoggoBtn').html('Generate Doggo').prop('disabled', false) //enable the button and name
//     console.log('replaced image')
    
//     }
//     else {
//     $('<img src="" class="img1">').appendTo('#doggoContainer').attr("src",data.message)   // else append and img to container
//       $('#generateDoggoBtn').html('Generate Doggo').prop('disabled', false)               //enable the button and name
//       console.log('created new img')
//     }
//   }
    //lee's solution
  // $('#doggoContainer').html('<img src="' + data.message + '"/>')
  // $('#generateDoggoBtn').html('Generate Doggo').attr('disabled', false)
  
  
 
  // function
  // $("div#doggoContainer").html("<img src="message">");



  //
  // Cool. Now let's kick it up a notch and allow selecting a specific breed of dog!
  //
  // 1) Add an empty dropdown menu (ie: <select></select>) to the <div id="selectBreedContainer"> element.
  //
  // 2) Using a *different* jQuery AJAX method than you used in the above example, make a
  //    GET request to https://dog.ceo/api/breeds/list when the page first loads.
  //
  //    For example, if you used $.getJSON() above, try out $.ajax() for this exercise.
  //
  //    Hint: check out the $.ready() method https://api.jquery.com/ready/
  //
  // 3) Confirm that this AJAX request shows up in the Network tab everytime you reload the page
  //
  // 4) In the callback function for that GET request there should be an array of dog breeds.
  //    For each breed, add an <option value="poodle">Poodle</option> to your <select> menu.
  //
  //    Your drop down list should now contain a list of dog breeds.
  //
  // 5) Add a "change" event to the <select> element using $.on() http://api.jquery.com/on/
  //
  //    In your change event, make a GET request to https://dog.ceo/api/breed/{breed name}/images/random
  //    where {breed name} is the value from your <select> menu.
  //
  //    Use whichever AJAX method you prefer for this request.
  //
  // 6) Confirm that this AJAX request shows up in the Network tab everytime you select a breed from the list
  //
  // 7) In the callback function, create a new dog <img> tag and add it to the page, similar to the
  //    first exercise.
  //
  //    You should now be able to view random pictures of specific dog breeds via the menu!
  //

  $( document ).ready(function() {
  })

  $('#generateDoggoBtn').click(clickDoggoBtn)

  //=====================GET JSON DATA AND DISABLE BUTTON (ADD MESSAGE TO BUTTON)=====================

  

  function clickDoggoBtn () {
    console.log('you clicked the doggo button! fetching the JSON now..')
    $('#generateDoggoBtn').html('Generating Doggo...').prop('disabled', true)//DISABLE BUTTON AND CHANGE TEXT
      var selectedDog = $(".dog-selector option:selected").val(); //GET BREED SELECTED FROM DROPDOWN
      dogBreedSelected = selectedDog.replace(/-/g, '/');//REPLACE CURRENT SELECTED DOG BREED
      $.getJSON("https://dog.ceo/api/breed/" + dogBreedSelected + "/images/random", function(result) {  //HTML OF DOG BREED LINK
        $("#doggoContainer").html("<img src='" + result.message + "'>"); //DOG IMG SRC
        $('#generateDoggoBtn').html('Generate Doggo').prop('disabled', false) //ENABLE BUTTON AND CHANGE TEXT TO ORIGINAL
      });
  
    }
  
  $.ajax({
    type: "POST",
    url: 'https://dog.ceo/api/breeds/list',
    success: function(data){
      $('#selectBreedContainer').html('<select class="dog-selector"></select>')
      var selectValues = data.message;
      for (var i=0;i<selectValues.length;i++){
        $('<option/>').val(selectValues[i]).html(selectValues[i]).appendTo('#selectBreedContainer select');

    }
  }
   });





   //lee's SOLUTION
        
  // $(document).ready(function (){})
 
  // $.ajax ({
  //   method: 'GET',
  //   url: 'https://dog.ceo/api/breeds/list',
  //   success: function(data) {
  //     console.log(data.message)
  //     console.log(data.message[12])
  //     let optionsList = $.map(data.message, function(x) {
  //       return `<option value="${x}" >${x}</option>`
      
  //     })
  //     let joined = optionsList.join('')
  //     console.log(joined)
  //     $('#mySelector').html(joined)
  //   }
  // })

  // $('#selectBreedContainer').append('<select id="mySelector"></select>')



// var helpers =
// {
//     buildDropdown: function(result, dropdown, emptyMessage)
//     {
//         // Remove current options
//         dropdown.html('');
//         // Add the empty option with the empty message
//         dropdown.append('<option value="">' + emptyMessage + '</option>');
//         // Check result isnt empty
//         if(result != '')
//         {
//             // Loop through each of the results and append the option to the dropdown
//             $.each(result, function(k, v) {
//                 dropdown.append('<option value="' + v.id + '">' + v.name + '</option>');
//             });
//         }
//     }
// }




//   $.ajax ({
//     method: 'POST',
//     url: 'https://dog.ceo/api/breeds/list',
//     success: function(data)
//     {
//       helpers.buildDropdown(
//         $.parseJSON(data),
//         $('#dropdown'),
//         'Select an option'
//     );
// }
//   });
//   $('#selectBreedContainer').html('<select></select>')
//   $.each(updateResult, function(key, value) {
//     $('#selectBreedContainer')
//          .append($('<option>', { message })
//          .text(value));
// });

  
  // .done(function( html ) {
  //   $( "#results" ).append( html );
  // });
  //
  // Excellent work!
  //
  // Hopefully you can see why web developers prefer using the jQuery API over XMLHttpRequest directly.
  //
  // Next let's look at a new contender that is built into modern browsers: the Fetch API
  //
})()
