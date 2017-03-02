import JsonData from './Units.json';

function CalculateUnits(inputs) {
  var data = JsonData;
  let {sqft, no_of_bedrooms, percentage_use_laundry, price_per_load_washing_machine, price_per_hour_dryer} = inputs;
  data["Average water used per load (gallons) (new machine)"] = data["Average washing machine capacity; in kg"] * data["Average water consumption per washing machine in gallons per kg (new machine)"];
  data["Cost of water per load (New Machine)"] = data["Average water used per load (gallons) (new machine)"] * data["Average price of water per gallon"];
  data["Cost of water per load (Old Machine)"] = data["Average water consumption on old machine (gallons)"] * data["Average price of water per gallon"];
  data["Average drying time in hours"] = data["Average drying time in minutes"] / 60;
  data["KWH used per load (dryer)"] = (data["Average dryer wattage (new)"] / 1000) * data["Average drying time in hours"];
  data["Average washing cycle time in hours (old)"] = data["Average washing cycle time in minutes (old)"] / 60;
  data["Average washing cycle time in hours (new)"] = data["Average washing cycle time in minutes (new)"] / 60;
  data["Average wattage of old & new washing machine"] = (data["Average wattage of machine (new)"] + data["Average wattage of washing machine (old)"]) / 2;
  data["Average wattage of old & new dryer"] = (data["Average dryer wattage (new)"] + data["Average wattage of dryer (old)"]) / 2;
  data["Average water consumption of old & new (gallons)"] = (data["Average water consumption on old machine (gallons)"] + data["Average water consumption on old machine (gallons)"]) / 2;
  data["Average load time new and old washing machine (minutes)"] = (data["Average washing cycle time in minutes (old)"] + data["Average washing cycle time in minutes (new)"]) / 2;
  data["Average washing cycle time average new & old (hours)"] = data["Average load time new and old washing machine (minutes)"] / 60;
  data["Average washing cycle time (old) (hours)"] = data["Average washing cycle time in minutes (old)"] / 60;
  data["Average washing cycle time (new) (hours)"] = data["Average washing cycle time in minutes (new)"] / 60;
  data["Number of units"] = no_of_bedrooms / 1.5;
  data["Loads done per week per unit"] = data["Water use per week per unit"] / data["Average water used per load (gallons) (new machine)"];
  data["Machines in building"] = data['Number of units'] / data['Machines per unit'];
  data["Cost to replace washing machines in building per year"] = data["Cost of new washing machine"] / data["Washing machine life expectancy (years)"] * data["Machines in building"];
  data["Average loads per week per person"] = data["Loads done per week per unit"] / data['Bedrooms per Unit'] / data['People per bedroom'];
  data["Cost to replace dryers in building per year"] = data["Cost of new dryer"] / data["Dryer life expectancy (years)"] * data["Machines in building"];
  // data["Loads per week"] = ;

  return data;
}


export default CalculateUnits;
