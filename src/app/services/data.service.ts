import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Contact } from '../contact/contact';
import { Customer } from '../customer/customer';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private contactUrl = 'https://contacts-api-app.herokuapp.com/contacts'

  private customerUrl = 'https://contacts-api-app.herokuapp.com/customers'
  public model: Contact[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {

    return this.http.get<Contact[]>(this.contactUrl).pipe(tap(data => this.model = data))

  }

  createContacts(model): Observable<Contact> {
    return this.http.post<Contact>(this.contactUrl, model, this.httpOptions)
  }

  createCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(this.customerUrl, customer, this.httpOptions)
  }
}
