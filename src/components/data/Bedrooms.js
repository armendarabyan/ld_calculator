import Apartments from './Apartment.js';

function CalculateBedroom(sq_foot) {
	  sq_foot = parseFloat(sq_foot);
	  var result = {};
	  result['No of beds'] = sq_foot / Apartments['Average'];
	  result['No of beds (based on Apartment data)'] = Math.floor(result['No of beds']);
	  return result;
}

export default CalculateBedroom;
