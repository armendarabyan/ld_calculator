import Units from './Units.js';
import Bedrooms from './Bedrooms.js';

function Calculator(inputs) {

  let result = {};
  result['Calculator for new appliances'] = {};
  result['Calculator for new appliances']['Costs'] = {};
  result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']  = {};
  result['Calculator for new appliances']['Costs']['Cost of Electricity - Washing Machine']['Per load']  = {};

  // Calculator for new appliances - Income
  result['Calculator for new appliances']['Income'] = {};

  result['Calculator for new appliances']['Income']['Income from washing machines'] = {};
  result['Calculator for new appliances']['Income']['Income from washing machines']['Per load']  = {};
  result['Calculator for new appliances']['Income']['Income from washing machines']['Per week']  = {};
  result['Calculator for new appliances']['Income']['Income from washing machines']['Per Month']  = {};
  result['Calculator for new appliances']['Income']['Income from washing machines']['Per Year']  = {};

  result['Calculator for new appliances']['Income']['Income from dryer'] = {};
  result['Calculator for new appliances']['Income']['Income from dryer']['Per load']  = {};
  result['Calculator for new appliances']['Income']['Income from dryer']['Per week']  = {};
  result['Calculator for new appliances']['Income']['Income from dryer']['Per Month']  = {};
  result['Calculator for new appliances']['Income']['Income from dryer']['Per Year']  = {};

  result['Calculator for new appliances']['Income']['Total'] = {};
  result['Calculator for new appliances']['Income']['Total']['Per load']  = {};
  result['Calculator for new appliances']['Income']['Total']['Per week']  = {};
  result['Calculator for new appliances']['Income']['Total']['Per Month']  = {};
  result['Calculator for new appliances']['Income']['Total']['Per Year']  = {};

  // Calculator for new appliances - profits
  result['Calculator for new appliances']['Profits'] = {};

  result['Calculator for new appliances']['Profits']['Total gross earnings'] = {};
  result['Calculator for new appliances']['Profits']['Total gross earnings']['Per load']  = {};
  result['Calculator for new appliances']['Profits']['Total gross earnings']['Per week']  = {};
  result['Calculator for new appliances']['Profits']['Total gross earnings']['Per Month']  = {};
  result['Calculator for new appliances']['Profits']['Total gross earnings']['Per Year']  = {};

  result['Calculator for new appliances']['Profits']['Total cost'] = {};
  result['Calculator for new appliances']['Profits']['Total cost']['Per load']  = {};
  result['Calculator for new appliances']['Profits']['Total cost']['Per week']  = {};
  result['Calculator for new appliances']['Profits']['Total cost']['Per Month']  = {};
  result['Calculator for new appliances']['Profits']['Total cost']['Per Year']  = {};

  result['Calculator for new appliances']['Profits']['Net Profit'] = {};
  result['Calculator for new appliances']['Profits']['Net Profit']['Per load']  = {};
  result['Calculator for new appliances']['Profits']['Net Profit']['Per week']  = {};
  result['Calculator for new appliances']['Profits']['Net Profit']['Per Month']  = {};
  result['Calculator for new appliances']['Profits']['Net Profit']['Per Year']  = {};






  // Calculator for old appliances - Income
  result['Calculator for old appliances']['Income'] = {};

  result['Calculator for old appliances']['Income']['Income from washing machines'] = {};
  result['Calculator for old appliances']['Income']['Income from washing machines']['Per load']  = {};
  result['Calculator for old appliances']['Income']['Income from washing machines']['Per week']  = {};
  result['Calculator for old appliances']['Income']['Income from washing machines']['Per Month']  = {};
  result['Calculator for old appliances']['Income']['Income from washing machines']['Per Year']  = {};

  result['Calculator for old appliances']['Income']['Income from dryer'] = {};
  result['Calculator for old appliances']['Income']['Income from dryer']['Per load']  = {};
  result['Calculator for old appliances']['Income']['Income from dryer']['Per week']  = {};
  result['Calculator for old appliances']['Income']['Income from dryer']['Per Month']  = {};
  result['Calculator for old appliances']['Income']['Income from dryer']['Per Year']  = {};

  result['Calculator for old appliances']['Income']['Total'] = {};
  result['Calculator for old appliances']['Income']['Total']['Per load']  = {};
  result['Calculator for old appliances']['Income']['Total']['Per week']  = {};
  result['Calculator for old appliances']['Income']['Total']['Per Month']  = {};
  result['Calculator for old appliances']['Income']['Total']['Per Year']  = {};

  // Calculator for old appliances - profits
  result['Calculator for old appliances']['Profits'] = {};

  result['Calculator for old appliances']['Profits']['Total gross earnings'] = {};
  result['Calculator for old appliances']['Profits']['Total gross earnings']['Per load']  = {};
  result['Calculator for old appliances']['Profits']['Total gross earnings']['Per week']  = {};
  result['Calculator for old appliances']['Profits']['Total gross earnings']['Per Month']  = {};
  result['Calculator for old appliances']['Profits']['Total gross earnings']['Per Year']  = {};

  result['Calculator for old appliances']['Profits']['Total cost'] = {};
  result['Calculator for old appliances']['Profits']['Total cost']['Per load']  = {};
  result['Calculator for old appliances']['Profits']['Total cost']['Per week']  = {};
  result['Calculator for old appliances']['Profits']['Total cost']['Per Month']  = {};
  result['Calculator for old appliances']['Profits']['Total cost']['Per Year']  = {};

  result['Calculator for old appliances']['Profits']['Net Profit'] = {};
  result['Calculator for old appliances']['Profits']['Net Profit']['Per load']  = {};
  result['Calculator for old appliances']['Profits']['Net Profit']['Per week']  = {};
  result['Calculator for old appliances']['Profits']['Net Profit']['Per Month']  = {};
  result['Calculator for old appliances']['Profits']['Net Profit']['Per Year']  = {};




  // Comparison of results
  result['Comparison of results'] = {};
  result['Comparison of results']['Net profit per load'] = {};
  result['Comparison of results']['Net profit per load']['New Appliances'] = {};
  result['Comparison of results']['Net profit per load']['Old Appliances'] = {};
  result['Comparison of results']['Net profit per load']['Average of old and new appliances'] = {};
  result['Comparison of results']['Net profit per week'] = {};
  result['Comparison of results']['Net profit per week']['New Appliances'] = {};
  result['Comparison of results']['Net profit per week']['Old Appliances'] = {};
  result['Comparison of results']['Net profit per week']['Average of old and new appliances'] = {};
  result['Comparison of results']['Net profit per month'] = {};
  result['Comparison of results']['Net profit per month']['New Appliances'] = {};
  result['Comparison of results']['Net profit per month']['Old Appliances'] = {};
  result['Comparison of results']['Net profit per month']['Average of old and new appliances'] = {};
  result['Comparison of results']['Net profit per year'] = {};
  result['Comparison of results']['Net profit per year']['New Appliances'] = {};
  result['Comparison of results']['Net profit per year']['Old Appliances'] = {};
  result['Comparison of results']['Net profit per year']['Average of old and new appliances'] = {};

  return resuls;
}

export default Calculator;
