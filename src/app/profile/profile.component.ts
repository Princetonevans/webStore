import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Observable<firebase.User>;
  currentUser: firebase.User;
  messages: Observable<any[]>;
  profilePicStyles: {};
  topics = '';
  value = '';
  profile;

  constructor(public afAuth: AngularFireAuth,
    private authService: AuthService) { }

  ngOnInit() {
    // this.profile = localStorage.getItem('currentUser');
    this.profile = JSON.parse(localStorage.getItem('currentUser'))
    console.log(this.profile)


    var user = firebase.auth().currentUser;



  }

  getUserName() {
    return firebase.auth().currentUser.displayName;
  }
}
