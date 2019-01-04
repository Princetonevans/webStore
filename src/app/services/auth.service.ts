import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

  apiUrl = 'localhost:3000';
  user = firebase.auth().currentUser;

  constructor(private http: HttpClient,
              private router: Router) { }

  login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function (error) {

      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
      const user = firebase.auth().currentUser;


      let name, email, photoUrl: string, uid, emailVerified;
      if (user != null) {
        name = user.displayName;
        photoUrl = user.photoURL;
        email = user.email;
        emailVerified = user.emailVerified;
        uid = user.uid;

      }
      console.log(this.user);

    });
    // firebase.auth().onAuthStateChanged(function (user) {
    //   if (user) {
    //     // User is signed in.
    //     const displayName = user.displayName;
    //     const email = user.email;
    //     const emailVerified = user.emailVerified;
    //     const photoURL = user.photoURL;
    //     const isAnonymous = user.isAnonymous;
    //     const uid = user.uid;
    //     const providerData = user.providerData;
    //     localStorage.setItem('currentUser', JSON.stringify(user));


    //     user.updateProfile({
    //       displayName: 'Princeton Evans',
    //       // tslint:disable-next-line:max-line-length
    //       photoURL: 'https://icon2.kisspng.com/20180526/vcl/kisspng-picsart-photo-studio-thanos-thanos-glove-5b0a2d38b18a81.8664775915273935927272.jpg'
    //     }).then(function () {
    //       // Update successful.
    //     }).catch(function (error) {
    //       // An error happened.
    //     });
    //   } else {
    //     // User is signed out.
    //     // ...
    //   }
    // });

  }



  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/home']);
    return  firebase.auth().signOut();

  }
}
