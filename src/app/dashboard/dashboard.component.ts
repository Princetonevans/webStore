import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DataService } from '../services/data.service';
import { CustomerService } from '../services/customer.service';

export interface CustomerElement {
  name: string;
  email: string;
  phoneNumber: number;
  service: string;
  total: number;
  description: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DashboardComponent implements OnInit {

  contacts;
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'types', 'description', 'created_at'];
  customerDisplayedColumns: string[] = ['id', 'name', 'email', 'phone', 'types', 'picker', 'total', 'notes'];

  dataSource = new MatTableDataSource([]);
  customerDataSource = new MatTableDataSource([]);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.customerDataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild('contactPaginator') contactPaginator: MatPaginator;
  @ViewChild('contactSort') contactSort: MatSort;

  @ViewChild('customerPaginator') customerPaginator: MatPaginator;
  @ViewChild('customerSort') customerSort: MatSort;

  constructor(private dataService: DataService,
              private customerService: CustomerService) { }

  ngOnInit() {

    this.dataService.getContacts()
    .subscribe(data => this.dataSource.data = data);
      this.dataSource.paginator = this.contactPaginator;
      this.dataSource.sort = this.contactSort;

      this.customerService.getCustomers()
    .subscribe(data => this.customerDataSource.data = data);
      this.customerDataSource.paginator = this.customerPaginator;
      this.customerDataSource.sort = this.customerSort;

  }


  selected() {
    console.log('working')
  }

}


