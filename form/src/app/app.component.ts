import {Component} from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <div>
      <h2>Form</h2>
      <label for="name">Name</label>
      <input type="text" name="name" id="">
      <label for="surname">Surname</label>
      <input type="text" name="surname" id="">
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form';
}
