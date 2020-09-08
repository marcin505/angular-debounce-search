import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling',
  template: `
    <h1>Sibling</h1>
    {{ info }}
    <button (click)="newInfo()" class="button">New Info</button>
  `,
})
export class SiblingComponent implements OnInit {
  info: string;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentInfo.subscribe((info) => (this.info = info));
  }
  newInfo() {
    this.data.changeInfo('this is new info');
  }
}
