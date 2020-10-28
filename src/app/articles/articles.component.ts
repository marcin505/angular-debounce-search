import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ArticlesService } from './../services/articles.service';
import { Hit } from '../types/article';
import { Observable, Subject } from 'rxjs';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-articles',
  template: `<h1>Articles</h1>
    <input
      id="search-box"
      #searchBox
      type="text"
      (input)="articlesService.setSearchTerms(searchBox.value)"
    />
    <mat-form-field appearance="fill" class="select">
      <mat-label>Page Size</mat-label>
      <mat-select disableRipple #select>
        <mat-option *ngFor="let size of pageSizes" [value]="size.value">
          {{ size.viewValue }}
        </mat-option>
      </mat-select>
    </mat-form-field>
    <ng-container *ngIf="articlesService.slicedArticles$ | async as articles">
      <ul class="articles">
        <ng-container *ngFor="let article of articles">
          <app-article
            [article]="article"
            (clickEvent)="receiveArticle(article.objectID)"
          ></app-article>
        </ng-container>
      </ul>
    </ng-container> `,
  styleUrls: ['./articles.component.less'],
})
export class ArticlesComponent implements AfterViewInit {
  public articles$: Observable<Hit[]>;
  @ViewChild('select') select: MatSelect;

  selectedValue: string;
  private searchTerms = new Subject<string>();
  constructor(public articlesService: ArticlesService) {}

  pageSizes: { value: number; viewValue: string }[] = [
    { value: 5, viewValue: '5' },
    { value: 10, viewValue: '10' },
    { value: 20, viewValue: '20' },
  ];

  ngAfterViewInit() {
    this.select.optionSelectionChanges.subscribe((res) => {
      this.articlesService.setPageSize(res.source.value);
    });
  }

  receiveArticle(objectID: string) {
    console.log(41, objectID);
  }
}
