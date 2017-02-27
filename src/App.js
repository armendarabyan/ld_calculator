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
console.log(UnitsData);
console.log(ApartmentData);

class App extends Component {

    constructor(props)
    {
        super(props);
        let _props = {};
        _props["Sq ft of building"] = 5740;
        _props["Estimated number of bedrooms"] = 13;
        _props["No. of bedrooms"] = 13;
        _props["Percentage use laundry"] = 82.9;
        _props["Price per load - Washing Machine"] = 1.25;
        _props["Price per hour - Dryer"] = 1.50;
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
                        <TableRowColumn>{this.state.props["Estimated number of bedrooms"]}</TableRowColumn>
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
                        <Cost output_data={null}/>
                        <Income output_data={null}/>
                        <Profit output_data={null}/>
                    </div>
                </section>
                <section>
                    <div>
                        <h1> Calculator for old appliances </h1>
                        <Cost output_data={null}/>
                        <Income output_data={null}/>
                        <Profit output_data={null}/>
                    </div>
                </section>
                <section>
                    <div>
                        <h1> Calculator for an average for old and new appliances </h1>
                        <Cost output_data={null}/>
                        <Income output_data={null}/>
                        <Profit output_data={null}/>
                    </div>
                </section>
                <section>
                    <div>
                        <Comparison output_data={null}/>
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
                <div>
                    <FlatButton onClick={this.calculatorTab.bind(this)} primary={true} label="Calculator" />
                    <FlatButton label="Units and references" primary={true} onClick={this.unitsTab.bind(this)} />
                    <FlatButton label="Bedroom calculator" primary={true} onClick={this.bedroomTab.bind(this)} />
                    <FlatButton label="Apartment data"  primary={true} onClick={this.apartmentTab.bind(this)}/>
                </div>
                {content}
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
