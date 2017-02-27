import React, { Component } from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';


export default class Profit extends React.Component {

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
              <TableHeaderColumn colSpan="5"  style={{textAlign: 'center'}}>
                <h3 style={{color:'black'}}>Profits</h3>
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
          <TableBody 
          displayRowCheckbox={false}>
			<TableRow>
				<TableRowColumn>Total gross earnings</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Total cost</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Net Profit</TableRowColumn>
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