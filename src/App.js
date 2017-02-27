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

import ApartmentData from './components/data/Apartment.js';
import UnitsData from './components/data/Units.js';
console.log(UnitsData);


// const FlatButtonExampleSimple = () => (

// );

class App extends Component {

    constructor(props)
    {
        super(props);
        this.state  = {
            tab:'calculator'
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

  render() {
    let tab = this.state.tab;
    let content = null;
    switch(tab){
        case 'calculator':
            content =
            <div>
                <section>
                    <div>
                        <h1> Calculator for new appliances </h1>
                        <Cost/>
                      <Income/>
                      <Profit/>
                    </div>
                </section>
                <section>
                    <div>
                        <h1> Calculator for old appliances </h1>
                        <Cost/>
                      <Income/>
                      <Profit/>
                    </div>
                </section>
                <section>
                    <div>
                        <h1> Calculator for an average for old and new appliances </h1>
                        <Cost/>
                      <Income/>
                      <Profit/>
                    </div>
                </section>
                <section>
                    <div>
                        <Comparison/>
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
