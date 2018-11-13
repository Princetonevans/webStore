import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  model = new Todo('')

  ngOnInit() {
  }

  addTodo(event) {
    this.group1.push(this.model);
  }

deleteTodo() {
  console.log('deleted')
}






  group1: Object[] = [];

  // = [{
	// 	name: 'Bernice Riley',
  //       des: 'Sr. Developer'
	// },{
	// 	name: 'Rob Throne',
  //       des: 'Developer'
	// },{
	// 	name: 'Lia Levele',
  //       des: 'Php Developer'
	// },{
	// 	name: 'Kara Cross',
  //       des: 'Front End Developer'
	// },{
	// 	name: 'Tim Ross',
  //       des: 'Designer'
	// },{
	// 	name: 'Heath Brook',
  //       des: 'iOS Developer'
	// }];

  group2: any[] = [{
		name: 'Kenny White',
         des: 'Sr. Developer'
	},{
		name: 'Hugh James',
         des: 'Php Developer'
	},{
		name: 'Peter Bloss',
        des: 'Php Developer'
	},{
		name: 'Criss Laim',
         des: 'Sr. Developer'
	},{
		name: 'Dekola Jhonson',
        des: 'Designer'
	},{
		name: 'Heather Bill',
        des: 'Front End Developer'
  }];

  get diagnostic() { return JSON.stringify(this.model); }
}


