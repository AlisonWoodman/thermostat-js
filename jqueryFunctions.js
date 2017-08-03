

$( document ).ready(function() {

  var thermostat, updateTemperature, updateEnergyUsage, updateValues;
  thermostat = new Thermostat()

  $("#pb").hide()

  updateValues = function() {
    updateTemperature()
    updateEnergyUsage()
  };

  updateTemperature = function(){
    $("#temperature").text(thermostat.temperature()+ "°C")
  };

  updateEnergyUsage = function() {
    $("#energy-usage").text(thermostat.usage())
      if (thermostat.usage() === 'low') {
      $("#temperature").css({"color":"yellow"});
          }
       if (thermostat.usage() === 'medium') {
       $("#temperature").css({"color":"orange"});
          }

      if (thermostat.usage() === 'high') {
      $("#temperature").css({"color":"red"});
          }
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
