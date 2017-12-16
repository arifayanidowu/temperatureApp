var sb = require("./sandbox.js");

	var id, el, convert;

	id = "convert-value";

	function init() {
		el = document.getElementsByClassName('degree')[0];
		convert = el.getElementsByClassName('convert')[0];

		sb.listen({'degree': weatherConversion}, id)
	}

	function weatherConversion(celsius){

		var create = document.createElement('p');
		var f = document.createTextNode(celsius.fahrenheit)
		create.appendChild(f);
		el.appendChild(create);
	}

	
	module.exports.id = id;
	module.exports.init = init;
	module.exports.weatherConversion = weatherConversion;
	




