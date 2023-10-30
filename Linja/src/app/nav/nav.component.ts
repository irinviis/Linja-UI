import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isBtnActive: number = 1;

  constructor(private router: Router) { }

  toggleBtn(id: number) {
    this.isBtnActive = id;
  }

}
