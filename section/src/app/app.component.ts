import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Section</h1>

    <a routerLink="/form">Go to form</a>
    <div>
      <router-outlet></router-outlet>
      <app-form></app-form>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'section';
}
