function Thermostat(){
 this._temperature = 20;
 this._minTemp = 10;
};

Thermostat.prototype.temperature = function(){
	return this._temperature
};

Thermostat.prototype.increaseTemp = function(){
	this._temperature += 1;
};

Thermostat.prototype.decreaseTemp = function(){
	if (this._temperature > 10) {
		this._temperature -= 1;
	}
};
