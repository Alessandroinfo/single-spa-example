import {Component} from '@angular/core';
import {mountRootParcel} from 'single-spa';

@Component({
  selector: 'app-form',
  template: `
    <parcel
      *ngIf="mountRootParcel"
      [mountParcel]="mountRootParcel"
      [config]="config"
      [customProps]="customProps"
    ></parcel>
  `,
  styleUrls: ['form.scss']
})
export class FormComponent {
  mountRootParcel: typeof import('single-spa').mountRootParcel | null = mountRootParcel;

  customProps = {
    info: {
      name: 'Alessandro',
      surname: 'Russo'
    }
  };

  constructor() {
  }

  async config() {
    return (window as any).System.import('form')
  }

}
