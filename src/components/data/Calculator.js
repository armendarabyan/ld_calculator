import Units from './Units.js';
import Bedrooms from './Bedrooms.js';

function Calculator(inputs) {
	let {sqft, no_of_bedrooms, percentage_use_laundry, price_per_load_washing_machine, price_per_hour_dryer} = inputs;
	let result = {};
	result['Calculator for new appliances'] = {};
	/*  Calculator for new appliances - costs start  */
	result['Calculator for new appliances']['Costs'] = {};
	result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']  = {};
	result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per load']  = ((Units['Average washing cycle time (new) (hours)'] * Units['Average wattage of machine (new)']) / 1000) * Units['Average cost of electricity per kwh'] ;
	result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per week']  = 5;
	result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per month']  = 5;
	result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per Year']  = 5;
	
	result['Calculator for new appliances']['Costs']['Cost of Water']  = {};
	result['Calculator for new appliances']['Costs']['Cost of Water']['Per load']  = 5;
	result['Calculator for new appliances']['Costs']['Cost of Water']['Per week']  = 5;
	result['Calculator for new appliances']['Costs']['Cost of Water']['Per month']  = 5;
	result['Calculator for new appliances']['Costs']['Cost of Water']['Per Year']  = 5;
	
	result['Calculator for new appliances']['Costs']['Cost of Waste Water']  = {};
	result['Calculator for new appliances']['Costs']['Cost of Waste Water']['Per load']  = 5;
	result['Calculator for new appliances']['Costs']['Cost of Waste Water']['Per week']  = 5;
	result['Calculator for new appliances']['Costs']['Cost of Waste Water']['Per month']  = 5;
	result['Calculator for new appliances']['Costs']['Cost of Waste Water']['Per Year']  = 5;
	
	result['Calculator for new appliances']['Costs']['Cost of Electricity - Dryer']  = {};
	result['Calculator for new appliances']['Costs']['Cost of Electricity - Dryer']['Per load']  = 5;
	result['Calculator for new appliances']['Costs']['Cost of Electricity - Dryer']['Per week']  = 5;
	result['Calculator for new appliances']['Costs']['Cost of Electricity - Dryer']['Per month']  = 5;
	result['Calculator for new appliances']['Costs']['Cost of Electricity - Dryer']['Per Year']  = 5;
	
	result['Calculator for new appliances']['Costs']['Cost of replacing washing machine']  = {};
	result['Calculator for new appliances']['Costs']['Cost of replacing washing machine']['Per load']  = 5;
	result['Calculator for new appliances']['Costs']['Cost of replacing washing machine']['Per week']  = 5;
	result['Calculator for new appliances']['Costs']['Cost of replacing washing machine']['Per month']  = 5;
	result['Calculator for new appliances']['Costs']['Cost of replacing washing machine']['Per Year']  = 5;
	
	result['Calculator for new appliances']['Costs']['Cost of replacing dryer']  = {};
	result['Calculator for new appliances']['Costs']['Cost of replacing dryer']['Per load']  = 5;
	result['Calculator for new appliances']['Costs']['Cost of replacing dryer']['Per week']  = 5;
	result['Calculator for new appliances']['Costs']['Cost of replacing dryer']['Per month']  = 5;
	result['Calculator for new appliances']['Costs']['Cost of replacing dryer']['Per Year']  = 5;

	result['Calculator for new appliances']['Costs']['Total']  = {};
	result['Calculator for new appliances']['Costs']['Total']['Per load']  = 5;
	result['Calculator for new appliances']['Costs']['Total']['Per week']  = 5;
	result['Calculator for new appliances']['Costs']['Total']['Per month']  = 5;
	result['Calculator for new appliances']['Costs']['Total']['Per Year']  = 5;
	/*  Calculator for new appliances costs end */
	console.log(Units['Average wattage of machine (new)'])
	return result;

}

console.log(Calculator({})['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per load']);

export default Calculator;
