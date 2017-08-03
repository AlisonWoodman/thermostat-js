

$( document ).ready(function() {

  var thermostat, updateTemperature, updateEnergyUsage, updateValues;
  thermostat = new Thermostat()


  updateValues = function() {
    updateTemperature()
    updateEnergyUsage()
  };

  updateTemperature = function(){
    $("#temperature").text(thermostat.temperature())
  };

  updateEnergyUsage = function() {
    $("#energy-usage").text(thermostat.usage())
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
  });

  $("#powersaving-off").click(function( event ) {
    thermostat.powersavemode(false)
    updateTemperature()
    $("#power-saving-status").text('off')
  });

});
