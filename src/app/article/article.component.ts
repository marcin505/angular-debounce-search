import { ArticlesService } from './../services/articles.service';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Hit } from '../types/article';

@Component({
  selector: 'app-article',
  template: `<li
    [ngClass]="{ selected: isSelected, article: true }"
    (click)="
      articlesService.changeIds(article.objectID, article.title, isSelected)
    "
  >
    <input type="checkbox" class="checkbox" [checked]="isSelected" />
    <span class="badge">{{ article.title }}</span>
  </li> `,
  styleUrls: ['./article.component.less'],
})
export class ArticleComponent {
  public selectedIds: string[];
  public isSelected: boolean;
  @Input() article: Hit;
  constructor(public articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.articlesService.selectedIds.subscribe((selectedIds: string[]) => {
      this.selectedIds = selectedIds;
      this.isSelected = selectedIds.some(
        (id: string) => id === this.article.objectID
      );
    });
  }
}
