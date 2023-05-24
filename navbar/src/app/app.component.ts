import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
      <nav class="navigation">
          <ul class="mainmenu">
              <li><a routerLink="/">Home</a></li>
              <li><a routerLink="/section">Section</a></li>
          </ul>
      </nav>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
