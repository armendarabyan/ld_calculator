import Units from './Units.js';
import Bedrooms from './Bedrooms.js';

function Calculator(inputs) {
	let {sqft, no_of_bedrooms, percentage_use_laundry, price_per_load_washing_machine, price_per_hour_dryer} = inputs;
	let result = {};
	result['Calculator for new appliances'] = {};
	result['Calculator for new appliances']['Costs'] = {};
	result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']  = {};
	result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per load']  = {};
	return result;
}

export default Calculator;
