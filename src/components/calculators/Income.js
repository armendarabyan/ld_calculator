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
				<TableRowColumn>Income from washing machines</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Income from dryer</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Total</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
			</TableRow>
          </TableBody>
          
        </Table>
      </div>
    );
  }
}