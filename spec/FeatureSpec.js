'use strict';

describe('Feature Test:', function(){
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
  	expect(thermostat.temperature()).toEqual(10)
  })
});
