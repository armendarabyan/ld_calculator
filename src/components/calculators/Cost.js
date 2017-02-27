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
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Cost of Water</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Cost of Waste Water</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Cost of Electricity - Dryer </TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Cost of replacing washing machine</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
				<TableRowColumn>test</TableRowColumn>
			</TableRow>
			<TableRow >
				<TableRowColumn>Cost of replacing dryer</TableRowColumn>
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