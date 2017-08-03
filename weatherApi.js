
$( document ).ready(function() {

  chooseCity = function() {
    var input = document.getElementById("userInput").value;
    triggerApi(input)
  };

  var triggerApi = function(input) {
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=metric&APPID=1a92c47e93eb0f9a112ead4287eed930", function(weatherResponse) {
      $("#location").text(weatherResponse.name);
      $("#conditions").text(weatherResponse.weather[0].description);
      $("#weather-temp").text(weatherResponse.main.temp);
    });
  };

});
