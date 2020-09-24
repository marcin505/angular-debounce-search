import { ArticlesService } from './../services/articles.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="notification is-primary">
      <h3>Child</h3>
      {{ selectedIds }} <br />
      Say {{ message }}
      <button (click)="sendMessage()">Send Message</button>
    </div>
  `,
  styleUrls: ['./child.component.less'],
})
export class ChildComponent {
  message: string = 'Hola Mundo!';
  selectedIds: string[];
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.articlesService.selectedIds.subscribe(
      (selectedIds: string[]) => (this.selectedIds = selectedIds)
    );
  }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}
