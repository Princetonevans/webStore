import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  badgeCount = null;
   user = localStorage.getItem('currentUser');

  constructor(private dataService: DataService,
    private authService: AuthService) { }



  ngOnInit() {

    this.dataService.getContacts()
      .subscribe(data => {
        if (data) {
          this.badgeCount = data.length;
        } else {
          this.badgeCount = 0;
        }

      });
  }

  logout() {
    this.authService.logout();
  }
}
