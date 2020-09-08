import { DataService } from './../data.service';
import { SiblingComponent } from './../sibling/sibling.component';
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
    <p>Message: {{ message }}</p>
    <p>Info: {{ info }}</p>
    <app-child (messageEvent)="receiveMessage($event)"> </app-child>
    <app-sibling> </app-sibling>
  `,
})
export class ViewChildComponent implements AfterViewInit, OnInit {
  @ViewChild(ChildComponent) child;
  constructor(private data: DataService) {}
  message: string = 'Hello World';
  info: string = 'info';

  ngAfterViewInit() {
    this.message = this.child.message;
  }

  ngOnInit() {
    this.data.currentInfo.subscribe((info) => (this.info = info));
  }

  receiveMessage($event) {
    this.message = $event;
  }
}
