import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from './form.component';
import {FormRoutingModule} from './form-routing.module';
import {ParcelModule} from 'single-spa-angular/parcel';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ParcelModule
  ],
  exports: [FormComponent]
})
export class FormModule {
}
