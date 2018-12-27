import { Injectable } from '@angular/core';
import { Customer } from '../customer/customer';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerUrl = 'https://contacts-api-app.herokuapp.com/customers';


  public model: Customer[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {

    return this.http.get<Customer[]>(this.customerUrl).pipe(tap(data => this.model = data));

  }
  createCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(this.customerUrl, customer, this.httpOptions);
  }

  deleteCustomer(id: number): Observable<{}> {
    return this.http.delete(`https://contacts-api-app.herokuapp.com/customers/${id}`, this.httpOptions);
  }
}
