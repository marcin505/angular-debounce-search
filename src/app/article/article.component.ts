import { ArticlesService } from './../services/articles.service';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Hit } from '../types/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less'],
})
export class ArticleComponent {
  public selectedIds: string[];
  public isSelected: boolean;
  @Input() article: Hit;
  @Output() clickEvent = new EventEmitter<string>();
  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.articlesService.selectedIds.subscribe((selectedIds: string[]) => {
      this.selectedIds = selectedIds;
      this.isSelected = selectedIds.some(
        (id: string) => id === this.article.objectID
      );
    });
  }

  sendArticle(objectID: string) {
    this.clickEvent.emit(objectID);
  }

  changeIds(id: string) {
    this.articlesService.changeIds(id);
  }
}
