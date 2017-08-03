function Thermostat(){
 this._temperature = 20;
 this._minTemp = 10;
 this._powersavemode = true;
 this.maxTemp();
}

Thermostat.prototype.temperature = function(){
	return this._temperature
};

Thermostat.prototype.powersavemode = function(state){
	this._powersavemode = state
  this.maxTemp();
};

Thermostat.prototype.maxTemp = function(){
  this._maxTemp = (this._powersavemode === true) ? 25 : 32;
}

Thermostat.prototype.increaseTemp = function(){
  if (this._temperature < this._maxTemp) {
    this._temperature += 1;
  };
};

Thermostat.prototype.decreaseTemp = function(){
	if (this._temperature > this._minTemp) {
		this._temperature -= 1;
	}
};

Thermostat.prototype.reset = function(){
	this._temperature = 20
};

Thermostat.prototype.usage = function(){
	if (this._temperature < 18) {
		return 'low-usage'
	}
	if (this._temperature < 25) {
		return 'medium-usage'
	}
	return 'high-usage'
};
