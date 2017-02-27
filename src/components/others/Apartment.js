import React, { Component } from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';


export default class Apartment extends React.Component {

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
						<TableHeaderColumn colSpan="9"  style={{textAlign: 'center'}}>
							<h3 style={{color:'black'}}>Apartment data</h3>
						</TableHeaderColumn>
					</TableRow>
					<TableRow className='header'> 
						<TableHeaderColumn >Properties</TableHeaderColumn>
						<TableHeaderColumn >Lot size</TableHeaderColumn>
						<TableHeaderColumn >Square fit</TableHeaderColumn>
						<TableHeaderColumn >% built area</TableHeaderColumn>
						<TableHeaderColumn >Year</TableHeaderColumn>
						<TableHeaderColumn >Bed</TableHeaderColumn>
						<TableHeaderColumn >Baths</TableHeaderColumn>
						<TableHeaderColumn >Units</TableHeaderColumn>
						<TableHeaderColumn >Sq ft of apartment</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody displayRowCheckbox={false}>
					<TableRow>
						<TableRowColumn>Balboa</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Victory</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Radford</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>227th Street</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Agnes2</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Agnes1</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Sylvan</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Vanowen</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Average</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
						<TableRowColumn>test</TableRowColumn>
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