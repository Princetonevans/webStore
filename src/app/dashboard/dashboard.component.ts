import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ContactService } from '../services/contact.service';

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
  dataSource = new MatTableDataSource([]);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private contactService: ContactService) { }

  ngOnInit() {

    this.contactService.getContacts()
    .subscribe(
      data => this.dataSource.data = data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource.data.length)
  }


  selected() {
    console.log('working')
  }

}


