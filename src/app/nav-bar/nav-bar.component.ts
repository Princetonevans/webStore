import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  badgeCount = null;
  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getContacts()
      .subscribe(data => {
        if (data) {
          this.badgeCount = data.length;
          console.log(this.badgeCount);
        } else {
          this.badgeCount = 0;
        }

      })
  }
}
