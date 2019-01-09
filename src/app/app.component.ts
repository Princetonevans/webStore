import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { Router, NavigationEnd } from '@angular/router';




interface User {
    username: string;
    password: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webStore';
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  user;

    constructor(private afs: AngularFirestore,
                public router: Router) {
                  this.router.events.subscribe(event => {
                    if (event instanceof NavigationEnd) {
                      (<any>window).ga('set', 'page', event.urlAfterRedirects);
                      (<any>window).ga('send', 'pageview');
                    }
                  });
    }
    ngOnInit() {
      this.userCollection = this.afs.collection('users');
      this.users = this.userCollection.valueChanges();

    }
}

