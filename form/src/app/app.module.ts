import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  // TODO Fix redirect for form when go to section
  providers: [{provide: APP_BASE_HREF, useValue: '/section'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
