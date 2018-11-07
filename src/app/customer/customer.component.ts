import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent, MatSnackBar } from '@angular/material';
import { Customer } from '../customer/customer';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  types = ['Blog', 'Logo', 'Ecommerce', 'Landing Page'];

  model = new Customer('', '', null, '', '', null, '');
  submitted = false;
  customer: any[] = [];
  minDate;
  date;

  constructor(public snackBar: MatSnackBar,
              private router: Router,
              private customerService: CustomerService) {

  }

  onSubmit() {
    this.submitted = true;
    // this.snackBar.openFromComponent(PizzaPartyComponent, {
    //   duration: 2000,
    // });
    this.customerService.createCustomer(this.model)
    .subscribe(customer => this.customer.push(this.model))
    this.router.navigate(['/home'])
    console.log(this.model)
  }

  get diagnostic() {
    return JSON.stringify(this.model)
  }

  ngOnInit() {
  this.date = new Date();
  this.minDate = this.date;
  }

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

}

// @Component({
//   selector: 'snack-bar-component-example-snack',
//   templateUrl: 'snack-bar-component.html',
//   styles: [`
//     .example-pizza-party {
//       color: #00FF00;
//     }
//   `],
// })
// export class PizzaPartyComponent {}
