import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Contact } from '../contact/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactUrl = 'https://contacts-api-app.herokuapp.com/contacts'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    return this.http.get<any>(this.contactUrl).pipe(tap(data => console.log('All: ' + JSON.stringify(data))));
  }

  createContacts(model): Observable<Contact> {
    return this.http.post<Contact>(this.contactUrl, model, this.httpOptions)
  }

  // getBlogs(): Observable<any> {
  //   return this.http.get<any>(this.blogsUrl).pipe(
  //          tap(data => console.log('All: ' + JSON.stringify(data))),
  //          catchError(this.handleError)
  //   );
  // }
}
