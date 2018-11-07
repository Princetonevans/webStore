import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { MatDatepickerInputEvent, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  types = ['Blog', 'Logo', 'Ecommerce', 'Landing Page'];

  // model = new Contact('Princeton', 'Princetonevans@yahoo.com', 'Big Blog', '2018-11-09T06:00:00.000Z', 8322353613, 'Logo');
  model = new Contact('', '', '', '', null, '');
  submitted = false;
  contact: any[] = [];
  minDate;
  date;
  constructor(public snackBar: MatSnackBar,
              private router: Router,
              private contactService: ContactService) {

  }

  onSubmit() {
    this.submitted = true;
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 2000,
    });
    this.contactService.createContacts(this.model)
    .subscribe(contact => this.contact.push(this.model))
    this.router.navigate(['/home'])
  }

  // get diagnostic() {
  //   // return JSON.stringify(this.model)
  // }

  ngOnInit() {
  this.date = new Date();
  this.minDate = this.date;
  }

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component.html',
  styles: [`
    .example-pizza-party {
      color: #00FF00;
    }
  `],
})
export class PizzaPartyComponent {}
