import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';




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
  users: Observable<User[]>


    constructor(private afs: AngularFirestore) {

    }
    ngOnInit() {
      this.userCollection = this.afs.collection('users');
      this.users = this.userCollection.valueChanges()
    }
}

