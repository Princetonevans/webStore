import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';

export interface CustomerElement {
  name: string;
  email: string;
  phoneNumber: number;
  service: string;
  total: number;
}

const Customer_DATA: CustomerElement[] = [
  {name: '1', email: 'Hydrogen', phoneNumber: 1.0079, service: 'website', total: 1},
  {name: '2', email: 'Helium', phoneNumber: 4.0026, service: 'website', total: 22},
  {name: '3', email: 'Lithium', phoneNumber: 6.941, service: 'website', total: 33},
  {name: '4', email: 'Beryllium', phoneNumber: 9.0122, service: 'website', total: 44 },
  {name: '5', email: 'Boron', phoneNumber: 10.811, service: 'blog', total: 55},
  {name: '6', email: 'Carbon', phoneNumber: 12.0107, service: 'blog', total: 66},
  {name: '7', email: 'Nitrogen', phoneNumber: 14.0067, service: 'logo', total: 77},
  {name: '8', email: 'Oxygen', phoneNumber: 15.9994, service: 'blog', total: 88},
  {name: '9', email: 'Fluorine', phoneNumber: 18.9984, service: 'blog', total: 99},
  {name: '10', email: 'Neon', phoneNumber: 20.1797, service: 'blog', total: 120},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'phoneNumber', 'service', 'total'];
  dataSource = new MatTableDataSource(Customer_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
