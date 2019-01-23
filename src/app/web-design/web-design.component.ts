import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.css']
})
export class WebDesignComponent implements OnInit {

  constructor(private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
  }

  addToCart() {
    this.router.navigate(['/']);
  }
}
