import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({ providedIn: 'root' })
export class AuthService {

  apiUrl ='localhost:3000';


    constructor(private http: HttpClient) { }

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
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
    } else {
      // User is signed out.
      // ...
    }
  });

}



    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
