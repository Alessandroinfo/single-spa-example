import {Component, OnDestroy, OnInit} from '@angular/core';
import {SingleSpaProps, singleSpaPropsSubject} from '../single-spa/single-spa-props';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-form',
  template: `
    <div>
      <h2>Form</h2>
      <label for="name">Name</label>
      <input type="text" name="name" value="{{singleSpaProps?.info?.name}}">
      <label for="surname">Surname</label>
      <input type="text" name="surname" value="{{singleSpaProps?.info?.surname}}">
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  singleSpaProps: SingleSpaProps | undefined;
  subscription: Subscription | undefined;

  ngOnInit(): void {
    this.subscription = singleSpaPropsSubject.subscribe(
      props => (this.singleSpaProps = props)
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
