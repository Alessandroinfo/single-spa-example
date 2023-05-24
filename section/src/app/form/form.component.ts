import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
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
export class FormComponent implements OnInit, OnDestroy {
  mountRootParcel: typeof import('single-spa').mountRootParcel | null = mountRootParcel;
  customProps = {
    hello: 'Hola',
  };
  private destroy$ = new Subject<void>();

  constructor(private ref: ChangeDetectorRef) {
  }

  async config() {
    return (window as any).System.import('form')
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
