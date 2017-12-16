window.$on = function(target, type, cb) {
	target.addEventListener(type, cb, false);
}

var CORE = require("./core.js");
	temperature = require("./temperature.js");
	showTemperature = require("./show_temperature.js");

CORE.addModule(temperature.id, temperature);
CORE.addModule(showTemperature.id, showTemperature);

temperature.init();
showTemperature.init();
