import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterContentInit,
} from '@angular/core';
import { ChildComponent } from './../child/child.component';
@Component({
  selector: 'app-view-child',
  template: `
    <h1>Parent</h1>
    Message: {{ message }}
    <app-child (messageEvent)="receiveMessage($event)"> </app-child>
  `,
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild(ChildComponent) child;
  constructor() {}
  message: string = 'Hello World';

  ngAfterViewInit() {
    this.message = this.child.message;
  }

  receiveMessage($event) {
    this.message = $event;
  }
}
