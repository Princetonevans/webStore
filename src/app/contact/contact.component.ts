import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  types = ['Blog', 'Logo', 'Description', 'Landing Page'];

  model = new Contact('Princeton', 'Princetonevans@yahoo.com', 'Big Blog', 832-235-3613, 'Logo');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.model)
  }

get diagnostic() {
  return JSON.stringify(this.model)
}

ngOnInit() {

}


}
