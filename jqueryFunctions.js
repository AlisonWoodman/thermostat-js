

$( document ).ready(function() {

  var thermostat, updateTemperature, updateEnergyUsage, updateAttributes, updateBackground, updateColour, updateValues, image, attributes, colour;
  thermostat = new Thermostat()
  attributes = {'low':['white', 'southpole.jpg'], 'medium':['orange', 'heaven.jpg'], 'high':['red', 'hell.jpg']}

  updateValues = function() {
    updateTemperature()
    updateEnergyUsage()
  };

  updateAttributes = function(usage) {
    colour = attributes[usage][0];
    image = "public/images/" + attributes[usage][1];
    updateBackground(image);
    updateColour(colour);
  };

  updateColour = function(colour) {
    $("#temperature").css({"color": colour });
  };

  updateTemperature = function(){
    $("#temperature").text(thermostat.temperature()+ "°C")
  };

  updateBackground = function(imageSrc) {
    $(".page").css("background-image", "url(" + imageSrc + ")");
  };

  updateEnergyUsage = function() {
    $("#energy-usage").text(thermostat.usage())
    updateAttributes(thermostat.usage())
  };

  updateTemperature()

  $("#temperature-up").click(function( event ) {
    thermostat.increaseTemp()
    updateValues()
  });

  $("#temperature-down").click(function( event ) {
    thermostat.decreaseTemp()
    updateValues()
  });

  $("#temperature-reset").click(function( event ) {
    thermostat.reset()
    updateValues()
  });

  $("#powersaving-on").click(function( event ) {
    thermostat.powersavemode(true)
    $("#power-saving-status").text('on')
    updateValues()
    $("#pb").hide()
  });

  $("#powersaving-off").click(function( event ) {
    thermostat.powersavemode(false)
    updateTemperature()
    $("#power-saving-status").text('off')
    $("#pb").show()
  });

});
