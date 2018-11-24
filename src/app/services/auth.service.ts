import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

  apiUrl = 'localhost:3000';
  user;

  constructor(private http: HttpClient,
              private router: Router) { }

  // login(username: string, password: string) {
  //     return this.http.post<any>(this.apiUrl,  {username, password })
  //         .pipe(map(user => {
  //             // login successful if there's a user in the response
  //             if (user) {
  //                 // store user details and basic auth credentials in local storage
  //                 // to keep user logged in between page refreshes
  //                 user.authdata = window.btoa(username + ':' + password);
  //                 localStorage.setItem('currentUser', JSON.stringify(user));
  //             }

  //             return user;
  //         }));
  // }


  login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      var user = firebase.auth().currentUser;

      var name, email, photoUrl, uid, emailVerified;
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;

      }


    });

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        localStorage.setItem('currentUser', JSON.stringify(user));


        user.updateProfile({
          displayName: "Princeton Evans",
          photoURL: "https://icon2.kisspng.com/20180526/vcl/kisspng-picsart-photo-studio-thanos-thanos-glove-5b0a2d38b18a81.8664775915273935927272.jpg"
        }).then(function () {
          // Update successful.
        }).catch(function (error) {
          // An error happened.
        });
      } else {
        // User is signed out.
        // ...
      }
    });

  }



  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/home'])
    return  firebase.auth().signOut();

  }
}
