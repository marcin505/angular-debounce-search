import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Hit } from '../types/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less'],
})
export class ArticleComponent {
  @Input() article: Hit;
  @Output() clickEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  sendArticle(objectID: string) {
    this.clickEvent.emit(objectID);
  }
}
