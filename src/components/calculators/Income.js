import React, { Component } from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';


export default class Income extends React.Component {

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
              <TableHeaderColumn colSpan="5" style={{textAlign: 'center'}}>
                <h3 style={{color:'black'}}>Income</h3>
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
				<TableRowColumn>Income from washing machines </TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Income from washing machines']['Per load'] : ''} </TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Income from washing machines']['Per week'] : ''} </TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Income from washing machines']['Per Month'] : ''} </TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Income from washing machines']['Per Year'] : ''} </TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Income from dryer </TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Income from dryer']['Per load'] : ''} </TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Income from dryer']['Per week'] : ''} </TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Income from dryer']['Per Month'] : ''} </TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Income from dryer']['Per Year'] : ''} </TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Total </TableRowColumn>
				<TableRowColumn>{this.props.output_data ? this.props.output_data['Total']['Per load'] : ''} </TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Total']['Per week'] : ''} </TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Total']['Per Month'] : ''} </TableRowColumn>
                <TableRowColumn>{this.props.output_data ? this.props.output_data['Total']['Per Year'] : ''} </TableRowColumn>
			</TableRow>
          </TableBody>
          
        </Table>
      </div>
    );
  }
}