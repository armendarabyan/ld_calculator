import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlatButton from 'material-ui/FlatButton';
import Main from './components/Main';
import Cost from './components/calculators/Cost'
import Income from './components/calculators/Income'
import Profit from './components/calculators/Profit'
import Comparison from './components/calculators/Comparison'
import Apartment from './components/others/Apartment'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

import ApartmentData from './components/data/Apartment.js';
import UnitsData from './components/data/Units.js';
import Calculator from './components/data/Calculator.js'; 
import CalculateBedroom from './components/data/Bedrooms.js'; 


class App extends Component {

    constructor(props)
    {

        super(props);
        let _props = {};
        var sqft = 5740;
        var no_of_bedrooms= 13; 
        var percentage_use_laundry = 82.90; 
        var price_per_load_washing_machine = 1.25; 
        var price_per_hour_dryer = 1.50;
        _props["Sq ft of building"] = sqft;
        _props["Estimated number of bedrooms"] = 13;
        _props["No. of bedrooms"] = no_of_bedrooms;
        _props["Percentage use laundry"] = percentage_use_laundry;
        _props["Price per load - Washing Machine"] = price_per_load_washing_machine;
        _props["Price per hour - Dryer"] = price_per_hour_dryer;
        let total_calc = Calculator({sqft, no_of_bedrooms, percentage_use_laundry, price_per_hour_dryer, price_per_load_washing_machine });
        let bedroom_data = CalculateBedroom(sqft);
        this.number_of_bedrooms = bedroom_data['No of beds (based on Apartment data)'];
        /*Calc for new appliances start*/
        this.calculator_for_new_appliances = {};
        this.calculator_for_new_appliances.costs = total_calc['Calculator for new appliances']['Costs'];
        this.calculator_for_new_appliances.income = total_calc['Calculator for new appliances']['Income'];
        this.calculator_for_new_appliances.profits = total_calc['Calculator for new appliances']['Profits'];
        /*Calc for new appliances end*/
        /*Calc for old appliances start*/
        this.calculator_for_old_appliances = {};
        this.calculator_for_old_appliances.costs = total_calc['Calculator for old appliances']['Costs'];
        this.calculator_for_old_appliances.income = total_calc['Calculator for old appliances']['Income'];
        this.calculator_for_old_appliances.profits = total_calc['Calculator for old appliances']['Profits'];
        /*Calc for new appliances end*/
        /*Calc for old and new appliances start*/
        this.calculator_for_old_and_new_appliances = {};
        this.calculator_for_old_and_new_appliances.costs = total_calc['Calculator for an average of old and new appliances']['Costs'];
        this.calculator_for_old_and_new_appliances.income = total_calc['Calculator for an average of old and new appliances']['Income'];
        this.calculator_for_old_and_new_appliances.profits = total_calc['Calculator for an average of old and new appliances']['Profits'];
        /*Calc for old and new appliances end*/
        /*Comparison of results start*/
        this.comparison = total_calc['Comparison of results'];
        /*Comparison of results end*/
        this.state  = {
            tab:'calculator',
            props:_props
        };
    }

  calculatorTab(event)
  {
    this.setState(()=>{
        return {
            tab:'calculator'
        };
    });
  }

  unitsTab(event)
  {
    this.setState(()=>{
        return {
            tab:'units'
        };
    });
  }

  bedroomTab(event)
  {
    this.setState(()=>{
        return {
            tab:'bedroom'
        };
    });
  }

  apartmentTab(event)
  {
    this.setState(()=>{
        return {
            tab:'apartment'
        };
    });
  }

  inputChanged(event){
    let field = event.target.getAttribute('data-field');
    let value = event.target.value;
    this.setState(()=>{
        let state = this.state;
        state.props[field] = value;
        var sqft = state.props['Sq ft of building'];
        var no_of_bedrooms= state.props['No. of bedrooms']; 
        var percentage_use_laundry = state.props['Percentage use laundry']; 
        var price_per_load_washing_machine = state.props['Price per load - Washing Machine']; 
        var price_per_hour_dryer = state.props['Price per hour - Dryer'];
        let total_calc = Calculator({sqft, no_of_bedrooms, percentage_use_laundry, price_per_hour_dryer, price_per_load_washing_machine });
        let bedroom_data = CalculateBedroom(sqft);
        this.number_of_bedrooms = bedroom_data['No of beds (based on Apartment data)'];
        /*Calc for new appliances start*/
        this.calculator_for_new_appliances.costs = total_calc['Calculator for new appliances']['Costs'];
        this.calculator_for_new_appliances.income = total_calc['Calculator for new appliances']['Income'];
        this.calculator_for_new_appliances.profits = total_calc['Calculator for new appliances']['Profits'];
        /*Calc for new appliances end*/
        /*Calc for old appliances start*/
        this.calculator_for_old_appliances.costs = total_calc['Calculator for old appliances']['Costs'];
        this.calculator_for_old_appliances.income = total_calc['Calculator for old appliances']['Income'];
        this.calculator_for_old_appliances.profits = total_calc['Calculator for old appliances']['Profits'];
        /*Calc for new appliances end*/
        /*Calc for old and new appliances start*/
        this.calculator_for_old_and_new_appliances = {};
        this.calculator_for_old_and_new_appliances.costs = total_calc['Calculator for an average of old and new appliances']['Costs'];
        this.calculator_for_old_and_new_appliances.income = total_calc['Calculator for an average of old and new appliances']['Income'];
        this.calculator_for_old_and_new_appliances.profits = total_calc['Calculator for an average of old and new appliances']['Profits'];
        /*Calc for old and new appliances end*/
        /*Comparison of results start*/
        this.comparison = total_calc['Comparison of results'];
        /*Comparison of results end*/
        return state;
    });
  }

  render() {
    let tab = this.state.tab;
    let content = null;
    switch(tab){
        case 'calculator':
            content =
            <div>
                <Table selectable={false}>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}>
                        <TableRow className='header'> 
                            <TableHeaderColumn >Sq ft of building</TableHeaderColumn>
                            <TableHeaderColumn >Estimated number of bedrooms </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                    <TableRow>
                        <TableRowColumn>
                            <input type='text' data-field="Sq ft of building" onChange={this.inputChanged.bind(this)} value={this.state.props['Sq ft of building']}/>
                        </TableRowColumn>
                        <TableRowColumn>{this.number_of_bedrooms}</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
                <Table selectable={false}>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}>
                        <TableRow className='header'> 
                            <TableHeaderColumn >No. of bedrooms</TableHeaderColumn>
                            <TableHeaderColumn >Percentage use laundry </TableHeaderColumn>
                            <TableHeaderColumn >Price per load - Washing Machine </TableHeaderColumn>
                            <TableHeaderColumn >Price per hour - Dryer </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                    <TableRow>
                        <TableRowColumn>
                            <input type='text' data-field="No. of bedrooms" onChange={this.inputChanged.bind(this)} value={this.state.props['No. of bedrooms']}/>
                        </TableRowColumn>
                        <TableRowColumn>
                            <input type='text' data-field="Percentage use laundry" onChange={this.inputChanged.bind(this)} value={this.state.props['Percentage use laundry']}/>
                        </TableRowColumn>
                        <TableRowColumn>
                            <input type='text' data-field="Price per load - Washing Machine" onChange={this.inputChanged.bind(this)} value={this.state.props['Price per load - Washing Machine']}/>
                        </TableRowColumn>
                        <TableRowColumn>
                            <input type='text' data-field="Price per hour - Dryer" onChange={this.inputChanged.bind(this)} value={this.state.props['Price per hour - Dryer']}/>
                        </TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
                
                <section>
                    <div>
                        <h1> Calculator for new appliances </h1>
                        <Cost output_data={this.calculator_for_new_appliances.costs}/>
                        <Income output_data={this.calculator_for_new_appliances.income}/>
                        <Profit output_data={this.calculator_for_new_appliances.profits}/>
                    </div>
                </section>
                <section>
                    <div>
                        <h1> Calculator for old appliances </h1>
                        <Cost output_data={this.calculator_for_old_appliances.costs}/>
                        <Income output_data={this.calculator_for_old_appliances.income}/>
                        <Profit output_data={this.calculator_for_old_appliances.profits}/>
                    </div>
                </section>
                <section>
                    <div>
                        <h1> Calculator for an average for old and new appliances </h1>
                        <Cost output_data={this.calculator_for_old_and_new_appliances.costs}/>
                        <Income output_data={this.calculator_for_old_and_new_appliances.income}/>
                        <Profit output_data={this.calculator_for_old_and_new_appliances.profits}/>
                    </div>
                </section>
                <section>
                    <div>
                        <Comparison output_data={this.comparison}/>
                    </div>
                </section>
            </div>
        break;
        case 'units':

        break;
        case 'bedroom':

        break;
        case 'apartment':
            content =
            <div>
                <Apartment />
            </div>
        break;
    }
    return (
        <MuiThemeProvider>
            <div className="App">
                {/*<div>
                    <FlatButton onClick={this.calculatorTab.bind(this)} primary={true} label="Calculator" />
                    <FlatButton label="Units and references" primary={true} onClick={this.unitsTab.bind(this)} />
                    <FlatButton label="Bedroom calculator" primary={true} onClick={this.bedroomTab.bind(this)} />
                    <FlatButton label="Apartment data"  primary={true} onClick={this.apartmentTab.bind(this)}/>
                </div>*/}
                {content}
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
