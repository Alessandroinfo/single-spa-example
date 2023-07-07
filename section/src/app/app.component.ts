import {Component} from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
    <h1>Section</h1>

    <a routerLink="form">Go to form</a>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
