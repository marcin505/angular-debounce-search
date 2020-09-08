import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="notification is-primary">
      <h3>Child</h3>
      Say {{ message }}
      <button (click)="sendMessage()">Send Message</button>
    </div>
  `,
  styleUrls: ['./child.component.less'],
})
export class ChildComponent {
  message: string = 'Hola Mundo!';
  @Output() messageEvent = new EventEmitter<string>();
  constructor() {}

  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}
