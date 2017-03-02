import CalculateUnits from './Units.js';
import Bedrooms from './Bedrooms.js';

function Calculator(inputs) {
  Object.keys(inputs).forEach(function(key){
    inputs[key] = parseFloat(inputs[key]);
  });
  var Units = CalculateUnits(inputs);
	let {sqft, no_of_bedrooms, percentage_use_laundry, price_per_load_washing_machine, price_per_hour_dryer} = inputs;
	let result = {};
	result['Calculator for new appliances'] = {};
  result['Calculator for old appliances'] = {};
  
  
  result['Calculator for old appliances']['Costs'] = {};
  result['Calculator for old appliances']['Costs']['Cost of replacing washing machine'] = {};
  result['Calculator for old appliances']['Costs']['Cost of replacing dryer'] = {};
  result['Calculator for old appliances']['Costs']['Cost of replacing washing machine']['Per Year'] = Units['Cost to replace washing machines in building per year'];
  result['Calculator for old appliances']['Costs']['Cost of replacing washing machine']['Per month'] = getNumber((result['Calculator for old appliances']['Costs']['Cost of replacing washing machine']['Per Year'] / 12).toFixed(2));
  result['Calculator for old appliances']['Costs']['Cost of replacing washing machine']['Per week'] = getNumber((result['Calculator for old appliances']['Costs']['Cost of replacing washing machine']['Per Year'] / 52).toFixed(2));
  result['Calculator for old appliances']['Costs']['Cost of replacing washing machine']['Per load'] = getNumber((result['Calculator for old appliances']['Costs']['Cost of replacing washing machine']['Per week'] / (no_of_bedrooms / 100 * percentage_use_laundry * Units['Average loads per week per person'] * Units['People per bedroom'])).toFixed(2));

  result['Calculator for old appliances']['Costs']['Cost of replacing dryer']['Per Year']  = Units['Cost to replace dryers in building per year'];
  result['Calculator for old appliances']['Costs']['Cost of replacing dryer']['Per month'] = getNumber((result['Calculator for old appliances']['Costs']['Cost of replacing dryer']['Per Year'] / 12).toFixed(2));
  result['Calculator for old appliances']['Costs']['Cost of replacing dryer']['Per week']  = getNumber((result['Calculator for old appliances']['Costs']['Cost of replacing dryer']['Per Year'] / 52).toFixed(2));
  result['Calculator for old appliances']['Costs']['Cost of replacing dryer']['Per load']  = getNumber((result['Calculator for old appliances']['Costs']['Cost of replacing dryer']['Per week'] / (no_of_bedrooms/100*percentage_use_laundry*Units['People per bedroom']*Units['Average loads per week per person'])).toFixed(2));

	/*  Calculator for new appliances - costs start  */
	result['Calculator for new appliances']['Costs'] = {};
	result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']  = {};
	result['Calculator for new appliances']['Costs']['Cost of Water']  = {};
  result['Calculator for new appliances']['Costs']['Cost of Waste Water']  = {};
	result['Calculator for new appliances']['Costs']['Cost of Electricity - Dryer']  = {};
	result['Calculator for new appliances']['Costs']['Cost of replacing washing machine']  = {};
	result['Calculator for new appliances']['Costs']['Cost of replacing dryer']  = {};
	result['Calculator for new appliances']['Costs']['Total']  = {};

  result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per load']  = getNumber((((Units['Average washing cycle time (new) (hours)'] * Units['Average wattage of machine (new)']) / 1000) * Units['Average cost of electricity per kwh']).toFixed(2)) ;
  result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per week']  = getNumber(((result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per load'] * no_of_bedrooms*Units['People per bedroom'] / 100 * percentage_use_laundry ) * Units['Average loads per week per person']).toFixed(2));
  result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per Year']  = getNumber((result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per week'] * 52).toFixed(2));
  result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per month']  = getNumber((result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per Year'] / 12).toFixed(2));
  
  result['Calculator for new appliances']['Costs']['Cost of Water']['Per load'] = getNumber((Units['Average water used per load (gallons) (new machine)'] * Units['Average price of water per gallon']).toFixed(2));
  result['Calculator for new appliances']['Costs']['Cost of Water']['Per week']  = getNumber((Units['Water use per week per unit'] * Units['Number of units'] * Units['Average price of water per gallon']).toFixed(2));
  result['Calculator for new appliances']['Costs']['Cost of Water']['Per Year']  = result['Calculator for new appliances']['Costs']['Cost of Water']['Per week'] * 52;
  result['Calculator for new appliances']['Costs']['Cost of Water']['Per month']  = result['Calculator for new appliances']['Costs']['Cost of Water']['Per Year'] / 12;
  
  result['Calculator for new appliances']['Costs']['Cost of Waste Water']['Per load']  = getNumber((result['Calculator for new appliances']['Costs']['Cost of Water']['Per load'] * 0.78).toFixed(2));
  result['Calculator for new appliances']['Costs']['Cost of Waste Water']['Per week']  = getNumber(((result['Calculator for new appliances']['Costs']['Cost of Waste Water']['Per load'] * no_of_bedrooms*Units['People per bedroom'] / 100 * percentage_use_laundry ) * Units['Average loads per week per person']).toFixed(2));
  result['Calculator for new appliances']['Costs']['Cost of Waste Water']['Per Year']  = getNumber((result['Calculator for new appliances']['Costs']['Cost of Waste Water']['Per week'] * 52).toFixed(2));
  result['Calculator for new appliances']['Costs']['Cost of Waste Water']['Per month']  = getNumber((result['Calculator for new appliances']['Costs']['Cost of Waste Water']['Per Year'] / 12).toFixed(2));
  
  result['Calculator for new appliances']['Costs']['Cost of Electricity - Dryer']['Per load']  = (Units['Average drying time in hours'] * Units['Average dryer wattage (new)'] / 1000) * Units['Average cost of electricity per kwh'];
  result['Calculator for new appliances']['Costs']['Cost of Electricity - Dryer']['Per week']  = getNumber(((result['Calculator for new appliances']['Costs']['Cost of Electricity - Dryer']['Per load'] * no_of_bedrooms*Units['People per bedroom'] / 100 * percentage_use_laundry ) * Units['Average loads per week per person']).toFixed(2));
  result['Calculator for new appliances']['Costs']['Cost of Electricity - Dryer']['Per Year']  = getNumber((result['Calculator for new appliances']['Costs']['Cost of Electricity - Dryer']['Per week'] * 52).toFixed(2));
  result['Calculator for new appliances']['Costs']['Cost of Electricity - Dryer']['Per month']  = getNumber((result['Calculator for new appliances']['Costs']['Cost of Electricity - Dryer']['Per Year'] / 12).toFixed(2));
  
  result['Calculator for new appliances']['Costs']['Cost of replacing washing machine']['Per load']  = getNumber((result['Calculator for old appliances']['Costs']['Cost of replacing washing machine']['Per week'] / (no_of_bedrooms / 100 * percentage_use_laundry * Units['Average loads per week per person'] * Units['People per bedroom'])).toFixed(2));
  result['Calculator for new appliances']['Costs']['Cost of replacing washing machine']['Per Year']  = Units['Cost to replace washing machines in building per year'];
  result['Calculator for new appliances']['Costs']['Cost of replacing washing machine']['Per month']  = getNumber((result['Calculator for new appliances']['Costs']['Cost of replacing washing machine']['Per Year'] / 12).toFixed(2));
  result['Calculator for new appliances']['Costs']['Cost of replacing washing machine']['Per week']  = getNumber((result['Calculator for new appliances']['Costs']['Cost of replacing washing machine']['Per Year'] / 52).toFixed(2));
  
  result['Calculator for new appliances']['Costs']['Cost of replacing dryer']['Per load']  = getNumber((result['Calculator for old appliances']['Costs']['Cost of replacing dryer']['Per week'] / (no_of_bedrooms / 100 * percentage_use_laundry*Units['People per bedroom']*Units['Average loads per week per person'])).toFixed(2));
  result['Calculator for new appliances']['Costs']['Cost of replacing dryer']['Per week']  = getNumber((Units['Cost to replace dryers in building per year'] / 52).toFixed(2));
  result['Calculator for new appliances']['Costs']['Cost of replacing dryer']['Per month']  = getNumber((Units['Cost to replace dryers in building per year']/12).toFixed(2));
  result['Calculator for new appliances']['Costs']['Cost of replacing dryer']['Per Year'] = (Units['Cost to replace dryers in building per year']);
  // result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per load'] = parseFloat(result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per load'])
  // console.log()

	result['Calculator for new appliances']['Costs']['Total']['Per load']  = getNumber((result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per load']+result['Calculator for new appliances']['Costs']['Cost of Water']['Per load']+result['Calculator for new appliances']['Costs']['Cost of Waste Water']['Per load']+result['Calculator for new appliances']['Costs']['Cost of Electricity - Dryer']['Per load']+result['Calculator for new appliances']['Costs']['Cost of replacing washing machine']['Per load']+result['Calculator for new appliances']['Costs']['Cost of replacing dryer']['Per load']).toFixed(2));
	result['Calculator for new appliances']['Costs']['Total']['Per week']  = getNumber((result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per week']+result['Calculator for new appliances']['Costs']['Cost of Water']['Per week']+result['Calculator for new appliances']['Costs']['Cost of Waste Water']['Per week']+result['Calculator for new appliances']['Costs']['Cost of Electricity - Dryer']['Per week']+result['Calculator for new appliances']['Costs']['Cost of replacing washing machine']['Per week']+result['Calculator for new appliances']['Costs']['Cost of replacing dryer']['Per week']).toFixed(2));
	result['Calculator for new appliances']['Costs']['Total']['Per month']  = getNumber((result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per month']+result['Calculator for new appliances']['Costs']['Cost of Water']['Per month']+result['Calculator for new appliances']['Costs']['Cost of Waste Water']['Per month']+result['Calculator for new appliances']['Costs']['Cost of Electricity - Dryer']['Per month']+result['Calculator for new appliances']['Costs']['Cost of replacing washing machine']['Per month']+result['Calculator for new appliances']['Costs']['Cost of replacing dryer']['Per month']).toFixed(2));
	result['Calculator for new appliances']['Costs']['Total']['Per Year']  = getNumber((result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per Year']+result['Calculator for new appliances']['Costs']['Cost of Water']['Per Year']+result['Calculator for new appliances']['Costs']['Cost of Waste Water']['Per Year']+result['Calculator for new appliances']['Costs']['Cost of Electricity - Dryer']['Per Year']+result['Calculator for new appliances']['Costs']['Cost of replacing washing machine']['Per Year']+result['Calculator for new appliances']['Costs']['Cost of replacing dryer']['Per Year']).toFixed(2));

	/*  Calculator for new appliances costs end */
	
  // Calculator for new appliances - Income
  result['Calculator for new appliances']['Income'] = {};

  result['Calculator for new appliances']['Income']['Income from washing machines'] = {};
  result['Calculator for new appliances']['Income']['Income from washing machines']['Per load']  = price_per_load_washing_machine;
  result['Calculator for new appliances']['Income']['Income from washing machines']['Per week']  = getNumber( ( no_of_bedrooms * Units['People per bedroom'] /100*percentage_use_laundry*Units['Average loads per week per person'] * result['Calculator for new appliances']['Income']['Income from washing machines']['Per load']).toFixed(2) );
  result['Calculator for new appliances']['Income']['Income from washing machines']['Per Year']  = getNumber((result['Calculator for new appliances']['Income']['Income from washing machines']['Per week'] * 52).toFixed(2));
  result['Calculator for new appliances']['Income']['Income from washing machines']['Per Month']  = getNumber((result['Calculator for new appliances']['Income']['Income from washing machines']['Per Year'] / 12).toFixed(2));


  result['Calculator for new appliances']['Income']['Income from dryer'] = {};
  result['Calculator for new appliances']['Income']['Income from dryer']['Per load']  = price_per_hour_dryer;
  result['Calculator for new appliances']['Income']['Income from dryer']['Per week']  = getNumber( (no_of_bedrooms * Units['People per bedroom'] / 100 * percentage_use_laundry * result['Calculator for new appliances']['Income']['Income from dryer']['Per load'] * Units['Average loads per week per person']).toFixed(2) );
  result['Calculator for new appliances']['Income']['Income from dryer']['Per Year']  = getNumber( (result['Calculator for new appliances']['Income']['Income from dryer']['Per week'] * 52).toFixed(2) );
  result['Calculator for new appliances']['Income']['Income from dryer']['Per Month']  = getNumber( ( result['Calculator for new appliances']['Income']['Income from dryer']['Per Year'] / 12 ).toFixed(2) );

  result['Calculator for new appliances']['Income']['Total'] = {};
  result['Calculator for new appliances']['Income']['Total']['Per load']  = getNumber( (result['Calculator for new appliances']['Income']['Income from washing machines']['Per load'] + result['Calculator for new appliances']['Income']['Income from dryer']['Per load']).toFixed(2) );
  result['Calculator for new appliances']['Income']['Total']['Per week']  = getNumber( (result['Calculator for new appliances']['Income']['Income from washing machines']['Per week'] + result['Calculator for new appliances']['Income']['Income from dryer']['Per week']).toFixed(2) );;
  result['Calculator for new appliances']['Income']['Total']['Per Month']  = getNumber( (result['Calculator for new appliances']['Income']['Income from washing machines']['Per Month'] + result['Calculator for new appliances']['Income']['Income from dryer']['Per Month']).toFixed(2) );;
  result['Calculator for new appliances']['Income']['Total']['Per Year']  = getNumber( (result['Calculator for new appliances']['Income']['Income from washing machines']['Per Year'] + result['Calculator for new appliances']['Income']['Income from dryer']['Per Year']).toFixed(2) );;

  // Calculator for new appliances - profits
  result['Calculator for new appliances']['Profits'] = {};

  result['Calculator for new appliances']['Profits']['Total gross earnings'] = {};
  result['Calculator for new appliances']['Profits']['Total gross earnings']['Per load']  = getNumber( ( result['Calculator for new appliances']['Income']['Total']['Per load'] ) );
  result['Calculator for new appliances']['Profits']['Total gross earnings']['Per week']  = getNumber( ( result['Calculator for new appliances']['Income']['Total']['Per week'] ) );
  result['Calculator for new appliances']['Profits']['Total gross earnings']['Per Month']  = getNumber( ( result['Calculator for new appliances']['Income']['Total']['Per Month'] ) );
  result['Calculator for new appliances']['Profits']['Total gross earnings']['Per Year']  = getNumber( ( result['Calculator for new appliances']['Income']['Total']['Per Year'] ) );

  result['Calculator for new appliances']['Profits']['Total cost'] = {};
  result['Calculator for new appliances']['Profits']['Total cost']['Per load']  = getNumber( ( result['Calculator for new appliances']['Costs']['Total']['Per load'] ) );
  result['Calculator for new appliances']['Profits']['Total cost']['Per week']  = getNumber( ( result['Calculator for new appliances']['Costs']['Total']['Per week'] ) );
  result['Calculator for new appliances']['Profits']['Total cost']['Per Month']  = getNumber( ( result['Calculator for new appliances']['Costs']['Total']['Per month'] ) );
  result['Calculator for new appliances']['Profits']['Total cost']['Per Year']  = getNumber( ( result['Calculator for new appliances']['Costs']['Total']['Per Year'] ) );

  result['Calculator for new appliances']['Profits']['Net Profit'] = {};
  result['Calculator for new appliances']['Profits']['Net Profit']['Per load']  = getNumber( ( result['Calculator for new appliances']['Profits']['Total gross earnings']['Per load'] - result['Calculator for new appliances']['Profits']['Total cost']['Per load'] ) );
  result['Calculator for new appliances']['Profits']['Net Profit']['Per week']  = getNumber( ( result['Calculator for new appliances']['Profits']['Total gross earnings']['Per week'] - result['Calculator for new appliances']['Profits']['Total cost']['Per week'] ) );
  result['Calculator for new appliances']['Profits']['Net Profit']['Per Month']  = getNumber( ( result['Calculator for new appliances']['Profits']['Total gross earnings']['Per Month'] - result['Calculator for new appliances']['Profits']['Total cost']['Per Month'] ).toFixed(2) );
  result['Calculator for new appliances']['Profits']['Net Profit']['Per Year']  = getNumber( ( result['Calculator for new appliances']['Profits']['Total gross earnings']['Per Year'] - result['Calculator for new appliances']['Profits']['Total cost']['Per Year'] ) );






  // Calculator for old appliances - Income
  result['Calculator for old appliances']['Costs']['Cost of Electricity - Washing Machine'] = {};

  result['Calculator for old appliances']['Costs']['Cost of Electricity - Washing Machine']['Per load']  = getNumber( ( ( ( Units['Average wattage of washing machine (old)'] * Units['Average washing cycle time in hours (old)']) / 1000 ) * Units['Average cost of electricity per kwh'] ).toFixed(2) );
  result['Calculator for old appliances']['Costs']['Cost of Electricity - Washing Machine']['Per week']  = getNumber( ( result['Calculator for old appliances']['Costs']['Cost of Electricity - Washing Machine']['Per load'] * no_of_bedrooms * Units['People per bedroom'] / 100 * percentage_use_laundry * Units['Average loads per week per person'] ).toFixed(2) );
  result['Calculator for old appliances']['Costs']['Cost of Electricity - Washing Machine']['Per Year'] = getNumber((result['Calculator for old appliances']['Costs']['Cost of Electricity - Washing Machine']['Per week'] * 52).toFixed(2));
  result['Calculator for old appliances']['Costs']['Cost of Electricity - Washing Machine']['Per month']  = getNumber( ( result['Calculator for old appliances']['Costs']['Cost of Electricity - Washing Machine']['Per Year'] / 12 ).toFixed(2) );

  result['Calculator for old appliances']['Costs']['Cost of Water'] = {};
  result['Calculator for old appliances']['Costs']['Cost of Water']['Per load']  = getNumber( ( Units['Cost of water per load (Old Machine)'] ).toFixed(2) );
  result['Calculator for old appliances']['Costs']['Cost of Water']['Per week']  = getNumber( ( result['Calculator for old appliances']['Costs']['Cost of Water']['Per load'] * no_of_bedrooms * Units['People per bedroom'] * Units['Average loads per week per person'] / 100 * percentage_use_laundry ).toFixed(2) );
  result['Calculator for old appliances']['Costs']['Cost of Water']['Per Year'] = getNumber( ( result['Calculator for old appliances']['Costs']['Cost of Water']['Per week'] * 52 ).toFixed(2) );
  result['Calculator for old appliances']['Costs']['Cost of Water']['Per month']  = getNumber( ( result['Calculator for old appliances']['Costs']['Cost of Water']['Per Year'] / 12 ).toFixed(2) );
  
  result['Calculator for old appliances']['Costs']['Cost of Waste Water'] = {};
  result['Calculator for old appliances']['Costs']['Cost of Waste Water']['Per load']  = getNumber( ( result['Calculator for old appliances']['Costs']['Cost of Water']['Per load'] * 0.78 ).toFixed(2) );
  result['Calculator for old appliances']['Costs']['Cost of Waste Water']['Per week']  = getNumber( ( result['Calculator for old appliances']['Costs']['Cost of Waste Water']['Per load'] * no_of_bedrooms * Units['People per bedroom'] * Units['Average loads per week per person'] / 100 * percentage_use_laundry ).toFixed(2) );
  result['Calculator for old appliances']['Costs']['Cost of Waste Water']['Per Year'] = getNumber( ( result['Calculator for old appliances']['Costs']['Cost of Waste Water']['Per week'] * 52 ).toFixed(2) );
  result['Calculator for old appliances']['Costs']['Cost of Waste Water']['Per month']  = getNumber( ( result['Calculator for old appliances']['Costs']['Cost of Waste Water']['Per Year'] / 12 ).toFixed(2) );

  result['Calculator for old appliances']['Costs']['Cost of Electricity - Dryer'] = {};
  result['Calculator for old appliances']['Costs']['Cost of Electricity - Dryer']['Per load']  = getNumber( ( ( ( Units['Average wattage of dryer (old)'] * Units['Average drying time in hours']) / 1000 ) * Units['Average cost of electricity per kwh'] ).toFixed(2) );
  result['Calculator for old appliances']['Costs']['Cost of Electricity - Dryer']['Per week']  = getNumber( ( result['Calculator for old appliances']['Costs']['Cost of Electricity - Dryer']['Per load'] * no_of_bedrooms * Units['People per bedroom'] * Units['Average loads per week per person'] / 100 * percentage_use_laundry ).toFixed(2) );
  result['Calculator for old appliances']['Costs']['Cost of Electricity - Dryer']['Per Year'] = getNumber( ( result['Calculator for old appliances']['Costs']['Cost of Electricity - Dryer']['Per week'] * 52 ).toFixed(2) );
  result['Calculator for old appliances']['Costs']['Cost of Electricity - Dryer']['Per month']  = getNumber( ( result['Calculator for old appliances']['Costs']['Cost of Electricity - Dryer']['Per Year'] / 12 ).toFixed(2) );

  result['Calculator for old appliances']['Costs']['Total'] = {};
  result['Calculator for old appliances']['Costs']['Total']['Per load']  = getNumber( ( result['Calculator for old appliances']['Costs']['Cost of Electricity - Washing Machine']['Per load'] + result['Calculator for old appliances']['Costs']['Cost of Water']['Per load'] + result['Calculator for old appliances']['Costs']['Cost of Waste Water']['Per load'] + result['Calculator for old appliances']['Costs']['Cost of Electricity - Dryer']['Per load'] + result['Calculator for old appliances']['Costs']['Cost of replacing washing machine']['Per load'] + result['Calculator for old appliances']['Costs']['Cost of replacing dryer']['Per load']).toFixed(2) );
  result['Calculator for old appliances']['Costs']['Total']['Per week']  = getNumber( ( result['Calculator for old appliances']['Costs']['Cost of Electricity - Washing Machine']['Per week'] + result['Calculator for old appliances']['Costs']['Cost of Water']['Per week'] + result['Calculator for old appliances']['Costs']['Cost of Waste Water']['Per week'] + result['Calculator for old appliances']['Costs']['Cost of Electricity - Dryer']['Per week'] + result['Calculator for old appliances']['Costs']['Cost of replacing washing machine']['Per week'] + result['Calculator for old appliances']['Costs']['Cost of replacing dryer']['Per week']).toFixed(2) );
  result['Calculator for old appliances']['Costs']['Total']['Per month'] = getNumber( ( result['Calculator for old appliances']['Costs']['Cost of Electricity - Washing Machine']['Per month'] + result['Calculator for old appliances']['Costs']['Cost of Water']['Per month'] + result['Calculator for old appliances']['Costs']['Cost of Waste Water']['Per month'] + result['Calculator for old appliances']['Costs']['Cost of Electricity - Dryer']['Per month'] + result['Calculator for old appliances']['Costs']['Cost of replacing washing machine']['Per month'] + result['Calculator for old appliances']['Costs']['Cost of replacing dryer']['Per month']).toFixed(2) );
  result['Calculator for old appliances']['Costs']['Total']['Per Year']  = getNumber( ( result['Calculator for old appliances']['Costs']['Cost of Electricity - Washing Machine']['Per Year'] + result['Calculator for old appliances']['Costs']['Cost of Water']['Per Year'] + result['Calculator for old appliances']['Costs']['Cost of Waste Water']['Per Year'] + result['Calculator for old appliances']['Costs']['Cost of Electricity - Dryer']['Per Year'] + result['Calculator for old appliances']['Costs']['Cost of replacing washing machine']['Per Year'] + result['Calculator for old appliances']['Costs']['Cost of replacing dryer']['Per Year']).toFixed(2) );

  
  result['Calculator for old appliances']['Income'] = {};
  result['Calculator for old appliances']['Income']['Income from washing machines'] = {};
  result['Calculator for old appliances']['Income']['Income from washing machines']['Per load']  = price_per_load_washing_machine;
  result['Calculator for old appliances']['Income']['Income from washing machines']['Per week']  = getNumber( ( result['Calculator for old appliances']['Income']['Income from washing machines']['Per load'] * no_of_bedrooms * Units['People per bedroom'] / 100 * percentage_use_laundry * Units['Average loads per week per person'] ).toFixed(2) );
  result['Calculator for old appliances']['Income']['Income from washing machines']['Per Year']  = getNumber( ( result['Calculator for old appliances']['Income']['Income from washing machines']['Per week'] * 52 ).toFixed(2) );
  result['Calculator for old appliances']['Income']['Income from washing machines']['Per Month']  = getNumber( ( result['Calculator for old appliances']['Income']['Income from washing machines']['Per Year'] / 12 ).toFixed(2) );

  result['Calculator for old appliances']['Income']['Income from dryer'] = {};
  result['Calculator for old appliances']['Income']['Income from dryer']['Per load']  = price_per_hour_dryer ;
  result['Calculator for old appliances']['Income']['Income from dryer']['Per week']  = getNumber( ( result['Calculator for old appliances']['Income']['Income from dryer']['Per load'] * no_of_bedrooms * Units['People per bedroom'] / 100 * percentage_use_laundry * Units['Average loads per week per person'] ).toFixed(2) );;
  result['Calculator for old appliances']['Income']['Income from dryer']['Per Year']  = getNumber( ( result['Calculator for old appliances']['Income']['Income from dryer']['Per week'] * 52 ).toFixed(2) );
  result['Calculator for old appliances']['Income']['Income from dryer']['Per Month']  = getNumber( ( result['Calculator for old appliances']['Income']['Income from dryer']['Per Year'] / 12 ).toFixed(2) );

  result['Calculator for old appliances']['Income']['Total'] = {};
  result['Calculator for old appliances']['Income']['Total']['Per load']  = getNumber( ( result['Calculator for old appliances']['Income']['Income from washing machines']['Per load'] + result['Calculator for old appliances']['Income']['Income from dryer']['Per load']).toFixed(2) );
  result['Calculator for old appliances']['Income']['Total']['Per week']  = getNumber( ( result['Calculator for old appliances']['Income']['Income from washing machines']['Per week'] + result['Calculator for old appliances']['Income']['Income from dryer']['Per week']).toFixed(2) );
  result['Calculator for old appliances']['Income']['Total']['Per Month']  = getNumber( ( result['Calculator for old appliances']['Income']['Income from washing machines']['Per Month'] + result['Calculator for old appliances']['Income']['Income from dryer']['Per Month']).toFixed(2) );
  result['Calculator for old appliances']['Income']['Total']['Per Year']  = getNumber( ( result['Calculator for old appliances']['Income']['Income from washing machines']['Per Year'] + result['Calculator for old appliances']['Income']['Income from dryer']['Per Year']).toFixed(2) );

  // Calculator for old appliances - profits
  result['Calculator for old appliances']['Profits'] = {};

  result['Calculator for old appliances']['Profits']['Total gross earnings'] = {};
  result['Calculator for old appliances']['Profits']['Total gross earnings']['Per load']  = result['Calculator for old appliances']['Income']['Total']['Per load'];
  result['Calculator for old appliances']['Profits']['Total gross earnings']['Per week']  = result['Calculator for old appliances']['Income']['Total']['Per week'];
  result['Calculator for old appliances']['Profits']['Total gross earnings']['Per Month']  = result['Calculator for old appliances']['Income']['Total']['Per Month'];
  result['Calculator for old appliances']['Profits']['Total gross earnings']['Per Year']  = result['Calculator for old appliances']['Income']['Total']['Per Year'];

  result['Calculator for old appliances']['Profits']['Total cost'] = {};
  result['Calculator for old appliances']['Profits']['Total cost']['Per load']  = result['Calculator for old appliances']['Costs']['Total']['Per load'];
  result['Calculator for old appliances']['Profits']['Total cost']['Per week']  = result['Calculator for old appliances']['Costs']['Total']['Per week'];
  result['Calculator for old appliances']['Profits']['Total cost']['Per Month']  = result['Calculator for old appliances']['Costs']['Total']['Per month'];
  result['Calculator for old appliances']['Profits']['Total cost']['Per Year']  = result['Calculator for old appliances']['Costs']['Total']['Per Year'];

  result['Calculator for old appliances']['Profits']['Net Profit'] = {};
  result['Calculator for old appliances']['Profits']['Net Profit']['Per load']  = getNumber( ( result['Calculator for old appliances']['Profits']['Total gross earnings']['Per load'] - result['Calculator for old appliances']['Profits']['Total cost']['Per load'] ).toFixed(2) );
  result['Calculator for old appliances']['Profits']['Net Profit']['Per week']  = getNumber( ( result['Calculator for old appliances']['Profits']['Total gross earnings']['Per week'] - result['Calculator for old appliances']['Profits']['Total cost']['Per week'] ).toFixed(2) );
  result['Calculator for old appliances']['Profits']['Net Profit']['Per Month']  = getNumber( ( result['Calculator for old appliances']['Profits']['Total gross earnings']['Per Month'] - result['Calculator for old appliances']['Profits']['Total cost']['Per Month'] ).toFixed(2) );
  result['Calculator for old appliances']['Profits']['Net Profit']['Per Year']  = getNumber( ( result['Calculator for old appliances']['Profits']['Total gross earnings']['Per Year'] - result['Calculator for old appliances']['Profits']['Total cost']['Per Year'] ).toFixed(2) );

  // Calculator for an average of old and new appliances start
  result['Calculator for an average of old and new appliances'] = {};

  result['Calculator for an average of old and new appliances']['Costs'] = {};
  result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Washing Machine'] = {};

  result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per load'] = getNumber( ( ( ( Units['Average wattage of old & new washing machine'] * Units['Average washing cycle time average new & old (hours)'] ) / 1000 ) * Units['Average cost of electricity per kwh'] ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per week'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per load'] * no_of_bedrooms * Units['People per bedroom'] / 100 * percentage_use_laundry * Units['Average loads per week per person'] ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per Year'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per week'] * 52 ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per month'] = getNumber( (result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per Year'] / 12).toFixed(2) );

  result['Calculator for an average of old and new appliances']['Costs']['Cost of Water'] = {};

  result['Calculator for an average of old and new appliances']['Costs']['Cost of Water']['Per load'] = getNumber( ( Units['Average water consumption of old & new (gallons)'] * Units['Average price of water per gallon'] ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Costs']['Cost of Water']['Per week'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of Water']['Per load'] * no_of_bedrooms / 100 * percentage_use_laundry * Units['Average loads per week per person'] * Units['People per bedroom']).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Costs']['Cost of Water']['Per Year'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of Water']['Per week'] * 52 ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Costs']['Cost of Water']['Per month'] = getNumber( (result['Calculator for an average of old and new appliances']['Costs']['Cost of Water']['Per Year'] / 12).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Costs']['Cost of Waste Water'] = {};

  result['Calculator for an average of old and new appliances']['Costs']['Cost of Waste Water']['Per load'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of Water']['Per load'] * 0.78 ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Costs']['Cost of Waste Water']['Per week'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of Waste Water']['Per load'] * no_of_bedrooms * Units['People per bedroom'] / 100 * percentage_use_laundry * Units['Average loads per week per person'] ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Costs']['Cost of Waste Water']['Per Year'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of Waste Water']['Per week'] * 52).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Costs']['Cost of Waste Water']['Per month'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of Waste Water']['Per Year'] / 12 ).toFixed(2) );

  result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Dryer'] = {};

  result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Dryer']['Per load'] = getNumber( ( ( (Units['Average wattage of old & new dryer'] * Units['Average drying time in hours']) / 1000 ) * Units['Average cost of electricity per kwh'] ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Dryer']['Per week'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Dryer']['Per load'] * no_of_bedrooms * Units['People per bedroom'] / 100 * percentage_use_laundry * Units['Average loads per week per person'] ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Dryer']['Per Year'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Dryer']['Per week'] * 52 ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Dryer']['Per month'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Dryer']['Per Year'] / 12 ).toFixed(2) );

  result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing washing machine'] = {};

  result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing washing machine']['Per Year'] = getNumber( ( Units['Cost to replace washing machines in building per year'] ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing washing machine']['Per month'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing washing machine']['Per Year'] / 12 ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing washing machine']['Per week'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing washing machine']['Per Year'] / 52 ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing washing machine']['Per load'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing washing machine']['Per week'] / ( no_of_bedrooms / 100 * percentage_use_laundry * Units['Average loads per week per person'] * Units['People per bedroom'] ) ).toFixed(2) );

  result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing dryer'] = {};

  result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing dryer']['Per Year'] = getNumber( ( Units['Cost to replace dryers in building per year'] ).toFixed(2) )
  result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing dryer']['Per month'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing dryer']['Per Year'] / 12 ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing dryer']['Per week'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing dryer']['Per Year'] / 52 ).toFixed(2) );;
  result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing dryer']['Per load'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing dryer']['Per week'] / ( no_of_bedrooms / 100 * percentage_use_laundry * Units['People per bedroom'] * Units['Average loads per week per person'] ) ).toFixed(2) );;

  result['Calculator for an average of old and new appliances']['Costs']['Total'] = {};

  result['Calculator for an average of old and new appliances']['Costs']['Total']['Per load'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per load'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of Water']['Per load'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of Waste Water']['Per load'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Dryer']['Per load'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing washing machine']['Per load'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing dryer']['Per load']).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Costs']['Total']['Per week'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per week'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of Water']['Per week'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of Waste Water']['Per week'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Dryer']['Per week'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing washing machine']['Per week'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing dryer']['Per week']).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Costs']['Total']['Per month'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per month'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of Water']['Per month'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of Waste Water']['Per month'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Dryer']['Per month'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing washing machine']['Per month'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing dryer']['Per month']).toFixed(2) );;
  result['Calculator for an average of old and new appliances']['Costs']['Total']['Per Year'] = getNumber( ( result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per Year'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of Water']['Per Year'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of Waste Water']['Per Year'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of Electricity - Dryer']['Per Year'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing washing machine']['Per Year'] + result['Calculator for an average of old and new appliances']['Costs']['Cost of replacing dryer']['Per Year']).toFixed(2) );;
  
  result['Calculator for an average of old and new appliances']['Income'] = {};
  result['Calculator for an average of old and new appliances']['Income']['Income from washing machines'] = {};

  result['Calculator for an average of old and new appliances']['Income']['Income from washing machines']['Per load'] = price_per_load_washing_machine;
  result['Calculator for an average of old and new appliances']['Income']['Income from washing machines']['Per week'] = getNumber( ( result['Calculator for an average of old and new appliances']['Income']['Income from washing machines']['Per load'] * no_of_bedrooms * Units['People per bedroom'] / 100 * percentage_use_laundry * Units['Average loads per week per person'] ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Income']['Income from washing machines']['Per Year'] = getNumber( ( result['Calculator for an average of old and new appliances']['Income']['Income from washing machines']['Per week'] * 52 ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Income']['Income from washing machines']['Per Month'] = getNumber( (result['Calculator for an average of old and new appliances']['Income']['Income from washing machines']['Per Year'] / 12).toFixed(2) );

  result['Calculator for an average of old and new appliances']['Income']['Income from dryer'] = {};

  result['Calculator for an average of old and new appliances']['Income']['Income from dryer']['Per load'] = price_per_hour_dryer;
  result['Calculator for an average of old and new appliances']['Income']['Income from dryer']['Per week'] = getNumber( ( result['Calculator for an average of old and new appliances']['Income']['Income from dryer']['Per load'] * no_of_bedrooms * Units['People per bedroom'] / 100 * percentage_use_laundry * Units['Average loads per week per person'] ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Income']['Income from dryer']['Per Year'] = getNumber( ( result['Calculator for an average of old and new appliances']['Income']['Income from dryer']['Per week'] * 52 ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Income']['Income from dryer']['Per Month'] = getNumber( (result['Calculator for an average of old and new appliances']['Income']['Income from dryer']['Per Year'] / 12).toFixed(2) );

  result['Calculator for an average of old and new appliances']['Income']['Total'] = {};

  result['Calculator for an average of old and new appliances']['Income']['Total']['Per load'] = getNumber( ( result['Calculator for an average of old and new appliances']['Income']['Income from washing machines']['Per load'] + result['Calculator for an average of old and new appliances']['Income']['Income from dryer']['Per load'] ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Income']['Total']['Per week'] = getNumber( ( result['Calculator for an average of old and new appliances']['Income']['Income from washing machines']['Per week'] + result['Calculator for an average of old and new appliances']['Income']['Income from dryer']['Per week'] ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Income']['Total']['Per Month'] = getNumber( ( result['Calculator for an average of old and new appliances']['Income']['Income from washing machines']['Per Month'] + result['Calculator for an average of old and new appliances']['Income']['Income from dryer']['Per Month'] ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Income']['Total']['Per Year'] = getNumber( ( result['Calculator for an average of old and new appliances']['Income']['Income from washing machines']['Per Year'] + result['Calculator for an average of old and new appliances']['Income']['Income from dryer']['Per Year'] ).toFixed(2) );
  
  result['Calculator for an average of old and new appliances']['Profits'] = {};
  
  result['Calculator for an average of old and new appliances']['Profits']['Total gross earnings'] = {};

  result['Calculator for an average of old and new appliances']['Profits']['Total gross earnings']['Per load'] = result['Calculator for an average of old and new appliances']['Income']['Total']['Per load'];
  result['Calculator for an average of old and new appliances']['Profits']['Total gross earnings']['Per week'] = result['Calculator for an average of old and new appliances']['Income']['Total']['Per week'];
  result['Calculator for an average of old and new appliances']['Profits']['Total gross earnings']['Per Month'] = result['Calculator for an average of old and new appliances']['Income']['Total']['Per Month'];
  result['Calculator for an average of old and new appliances']['Profits']['Total gross earnings']['Per Year'] = result['Calculator for an average of old and new appliances']['Income']['Total']['Per Year'];

  result['Calculator for an average of old and new appliances']['Profits']['Total cost'] = {};

  result['Calculator for an average of old and new appliances']['Profits']['Total cost']['Per load'] = result['Calculator for an average of old and new appliances']['Costs']['Total']['Per load'];
  result['Calculator for an average of old and new appliances']['Profits']['Total cost']['Per week'] = result['Calculator for an average of old and new appliances']['Costs']['Total']['Per week'];
  result['Calculator for an average of old and new appliances']['Profits']['Total cost']['Per Month'] = result['Calculator for an average of old and new appliances']['Costs']['Total']['Per month'];
  result['Calculator for an average of old and new appliances']['Profits']['Total cost']['Per Year'] = result['Calculator for an average of old and new appliances']['Costs']['Total']['Per Year'];

  result['Calculator for an average of old and new appliances']['Profits']['Net Profit'] = {};

  result['Calculator for an average of old and new appliances']['Profits']['Net Profit']['Per load'] = getNumber( ( result['Calculator for an average of old and new appliances']['Profits']['Total gross earnings']['Per load'] - result['Calculator for an average of old and new appliances']['Profits']['Total cost']['Per load'] ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Profits']['Net Profit']['Per week'] = getNumber( ( result['Calculator for an average of old and new appliances']['Profits']['Total gross earnings']['Per week'] - result['Calculator for an average of old and new appliances']['Profits']['Total cost']['Per week'] ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Profits']['Net Profit']['Per Month'] = getNumber( ( result['Calculator for an average of old and new appliances']['Profits']['Total gross earnings']['Per Month'] - result['Calculator for an average of old and new appliances']['Profits']['Total cost']['Per Month'] ).toFixed(2) );
  result['Calculator for an average of old and new appliances']['Profits']['Net Profit']['Per Year'] = getNumber( ( result['Calculator for an average of old and new appliances']['Profits']['Total gross earnings']['Per Year'] - result['Calculator for an average of old and new appliances']['Profits']['Total cost']['Per Year'] ).toFixed(2) );

  // Calculator for an average of old and new appliances end


  // Comparison of results
  result['Comparison of results'] = {};

  result['Comparison of results']['Net profit per load'] = {};

  result['Comparison of results']['Net profit per load']['New Appliances'] = result['Calculator for new appliances']['Profits']['Net Profit']['Per load'];
  result['Comparison of results']['Net profit per load']['Old Appliances'] = result['Calculator for old appliances']['Profits']['Net Profit']['Per load'];
  result['Comparison of results']['Net profit per load']['Average of old and new appliances'] = result['Calculator for an average of old and new appliances']['Profits']['Net Profit']['Per load'];
  
  result['Comparison of results']['Net profit per week'] = {};
  
  result['Comparison of results']['Net profit per week']['New Appliances'] = result['Calculator for new appliances']['Profits']['Net Profit']['Per week'];
  result['Comparison of results']['Net profit per week']['Old Appliances'] = result['Calculator for old appliances']['Profits']['Net Profit']['Per week'];
  result['Comparison of results']['Net profit per week']['Average of old and new appliances'] = result['Calculator for an average of old and new appliances']['Profits']['Net Profit']['Per week'];

  result['Comparison of results']['Net profit per month'] = {};

  result['Comparison of results']['Net profit per month']['New Appliances'] = result['Calculator for new appliances']['Profits']['Net Profit']['Per Month'];
  result['Comparison of results']['Net profit per month']['Old Appliances'] = result['Calculator for old appliances']['Profits']['Net Profit']['Per Month'];
  result['Comparison of results']['Net profit per month']['Average of old and new appliances'] = result['Calculator for an average of old and new appliances']['Profits']['Net Profit']['Per Month'];
  
  result['Comparison of results']['Net profit per year'] = {};
  
  result['Comparison of results']['Net profit per year']['New Appliances'] = result['Calculator for new appliances']['Profits']['Net Profit']['Per Year'];
  result['Comparison of results']['Net profit per year']['Old Appliances'] = result['Calculator for old appliances']['Profits']['Net Profit']['Per Year']
  result['Comparison of results']['Net profit per year']['Average of old and new appliances'] = result['Calculator for an average of old and new appliances']['Profits']['Net Profit']['Per Year'];
  console.log(result['Comparison of results']['Net profit per year']['Average of old and new appliances']);

  return result;
  // console.log(Units['Average wattage of machine (new)'])
	

 
}

function getNumber(number){
  return parseFloat(number);
}
// let props = {
//   sqft : 5740,
//   no_of_bedrooms: 13, 
//   percentage_use_laundry: 82.90, 
//   price_per_load_washing_machine:1.25, 
//   price_per_hour_dryer:1.50
// };

// var res = Calculator(props);
// console.log(res['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per month']);
// console.log(res['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per Year']);

export default Calculator;
