import JsonData from './Apartment.json';

function Calculate(data) {
  Object.keys(data).forEach(function(key){
    data[key]['% built area'] = Math.round((data[key]['Square ft'] / data[key]['Lot size']) * 100);
    data[key]['Sq ft of apartment'] = (data[key]['Square ft'] / data[key]['Bed']);
  });

  return data;
}

function AddAverage(data) {
  var sum = 0;
  var len = Object.keys(data).length;

  Object.keys(data).forEach(function(key){
    sum += data[key]['Sq ft of apartment'];
  });

  var returndata = {};
  returndata['data'] = data;
  returndata['Average'] = sum / len;

  return returndata;
}

var final_data = AddAverage(Calculate(JsonData));

export default final_data;
