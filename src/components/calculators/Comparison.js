import React, { Component } from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';


export default class Comparison extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='income-table-wrapper'>
        <Table>
          <TableHeader displaySelectAll={false}
          adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn colSpan="4" tooltip="Super Header" style={{textAlign: 'center'}}>
                <h2 style={{color:'black'}}>Comparison of results</h2>
              </TableHeaderColumn>
            </TableRow>
            <TableRow className='header'> 
              <TableHeaderColumn></TableHeaderColumn>
              <TableHeaderColumn>New Appliances</TableHeaderColumn>
              <TableHeaderColumn>Old Appliances</TableHeaderColumn>
              <TableHeaderColumn>Average of old and new appliances</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
			<TableRow>
				<TableRowColumn>Net profit per load</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Net profit per load']['New Appliances']: ''}</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Net profit per load']['Old Appliances']: ''}</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Net profit per load']['Average of old and new appliances']: ''}</TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Net profit per week</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Net profit per week']['New Appliances']: ''}</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Net profit per week']['Old Appliances']: ''}</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Net profit per week']['Average of old and new appliances']: ''}</TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Net profit per month</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Net profit per month']['New Appliances']: ''}</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Net profit per month']['Old Appliances']: ''}</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Net profit per month']['Average of old and new appliances']: ''}</TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Net profit per year</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Net profit per year']['New Appliances']: ''}</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Net profit per year']['Old Appliances']: ''}</TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Net profit per year']['Average of old and new appliances']: ''}</TableRowColumn>
			</TableRow>
          </TableBody>
          
        </Table>
      </div>
    );
  }
}