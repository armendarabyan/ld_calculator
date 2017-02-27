import React, { Component } from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';


export default class Cost extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='cost-table-wrapper'>
        <Table>
          <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn colSpan="5" style={{textAlign: 'center'}}>
                <h3 style={{color:'black'}}>Costs</h3>
              </TableHeaderColumn>
            </TableRow>
            <TableRow className='header'> 
              <TableHeaderColumn ></TableHeaderColumn>
              <TableHeaderColumn >Per load</TableHeaderColumn>
              <TableHeaderColumn >Per week</TableHeaderColumn>
              <TableHeaderColumn >Per month</TableHeaderColumn>
              <TableHeaderColumn >Per year</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
			<TableRow>
				<TableRowColumn>Cost of Electricity - Washing Machine</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of Electricity - Washing Machine']['Per load'] : ''}</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of Electricity - Washing Machine']['Per week'] : ''}</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of Electricity - Washing Machine']['Per month'] : ''}</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of Electricity - Washing Machine']['Per Year'] : ''}</TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Cost of Water</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of Water']['Per load'] : ''}</TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of Water']['Per week'] : ''}</TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of Water']['Per month'] : ''}</TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of Water']['Per Year'] : ''}</TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Cost of Waste Water</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of Waste Water']['Per load'] : ''}</TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of Waste Water']['Per week'] : ''}</TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of Waste Water']['Per month'] : ''}</TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of Waste Water']['Per Year'] : ''}</TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Cost of Electricity - Dryer</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of Electricity - Dryer']['Per load'] : ''}</TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of Electricity - Dryer']['Per week'] : ''}</TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of Electricity - Dryer']['Per month'] : ''}</TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of Electricity - Dryer']['Per Year'] : ''}</TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Cost of replacing washing machine</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of replacing washing machine']['Per load'] : ''}</TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of replacing washing machine']['Per week'] : ''}</TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of replacing washing machine']['Per month'] : ''}</TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of replacing washing machine']['Per Year'] : ''}</TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Cost of replacing dryer</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of replacing dryer']['Per load'] : ''}</TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of replacing dryer']['Per week'] : ''}</TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of replacing dryer']['Per month'] : ''}</TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Cost of replacing dryer']['Per Year'] : ''}</TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Total</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Total']['Per load'] : ''}</TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Total']['Per week'] : ''}</TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Total']['Per month'] : ''}</TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Total']['Per Year'] : ''}</TableRowColumn>
			</TableRow>
          </TableBody>
          
        </Table>
      </div>
    );
  }
}