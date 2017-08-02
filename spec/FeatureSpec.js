'use strict';

describe('Feature Tests:', function(){
  var thermostat;

  beforeEach (function(){
    thermostat = new Thermostat();
  });

  it('is set to 20 to start with', function(){
	expect(thermostat.temperature()).toEqual(20)
  });

  it('allows user to increase temperature by 1', function(){
  	thermostat.increaseTemp()
  	expect(thermostat.temperature()).toEqual(21)
  });

  it('allows user to decrease temperature by 1', function(){
  	thermostat.decreaseTemp()
  	expect(thermostat.temperature()).toEqual(19)
  });

  it('sets 10 degrees as the minimum temperature', function(){
  	while (thermostat.temperature() > 10) {
  		thermostat.decreaseTemp()
  	}
  	thermostat.decreaseTemp()
  	expect(thermostat.temperature()).toEqual(10);
  });

  it('sets powersavemode to true by default', function(){
  	expect(thermostat._powersavemode).toEqual(true);
  });

  it('sets the maximum temperature to 25 with powersavemode on', function(){
    thermostat.powersavemode(true);
    while (thermostat.temperature() < 25) {
  		thermostat.increaseTemp()
  	}
    thermostat.increaseTemp();
    expect(thermostat.temperature()).toEqual(25);
  });

  it('sets the maximum temperature to 32 with powersavemode off', function(){
    thermostat.powersavemode(false);
    while (thermostat.temperature() < 32) {
  		thermostat.increaseTemp()
  	}
    thermostat.increaseTemp();
    expect(thermostat.temperature()).toEqual(32);
  });

  it('allows user to reset temperature to 20', function(){
  	thermostat.increaseTemp()
  	thermostat.reset();
  	expect(thermostat.temperature()).toEqual(20);
  });

  it('tells the user the current energy usage', function(){
  	thermostat._temperature = 17;
  	expect(thermostat.usage()).toEqual('low-usage');
  	thermostat._temperature = 24; 
  	expect(thermostat.usage()).toEqual('medium-usage');
  	thermostat._temperature = 25;
  	expect(thermostat.usage()).toEqual('high-usage');
  });

});
