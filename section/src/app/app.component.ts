import {Component} from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
    <!-- <h1>Section</h1> -->

    <!-- <a routerLink="/form">Go to form</a> -->
    <!-- <div> -->
    <!--   <router-outlet></router-outlet> -->
    <!--   &lt;!&ndash; <app-form></app-form> &ndash;&gt; -->
    <!-- </div> -->
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'section';
}
