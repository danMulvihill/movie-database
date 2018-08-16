$('input').keyup(function() {
    console.log($(this).val());
    var userInput = $(this).val();
    $.ajax({
        type: 'GET',
        url: 'http://www.omdbapi.com/?apikey=4896ff0a',
        data: {
         t:  userInput
       },
      success: function(response) {
        console.log(response);
        $('#title').html(response.Title);
        $('a').attr("href", response.Website)
        $('h4').text(response.Actors)
        $('p').html(response.Plot);
        $('#date').html(response.Year);
        $('#run').html(response.Runtime);
        $('#country').html(response.Country);
        $('#rating').html(response.Rated)
        $("#poster").attr("src", response.Poster);
      }
    })
  })


 

  $.ajax({
    type: 'GET',
    url: 'http://www.omdbapi.com/?apikey=4896ff0a',
    data: {
     t: 'a' 
   },
  success: function(response) {
    console.log(response);
    $('#title').html(response.Title);
    $('a').attr("href", response.Website)
    $('h4').text(response.Actors)
    $('p').html(response.Plot);
    $('#date').html(response.Year);
    $('#run').html(response.Runtime);
    $('#country').html(response.Country);
    $('#rating').html(response.Rated)
    $("#poster").attr("src", response.Poster);
  }
})
 


//   //console.log(userInput)



