import { Component, OnInit, OnChanges } from '@angular/core';
import { ArticlesService } from './../services/articles.service';
import { ArticlesResponse, Hit } from '../types/article';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map,
  toArray,
} from 'rxjs/operators';
// import Article  from '../article/article.component'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less'],
})
export class ArticlesComponent implements OnInit {
  articles$: Observable<Hit[]>;
  selectedIds: string[];

  private searchTerms = new Subject<string>();
  constructor(private articlesService: ArticlesService) {}
  ngOnInit(): void {
    this.articles$ = this.searchTerms.pipe(
      debounceTime(800),
      distinctUntilChanged(),
      switchMap((term: string) => this.articlesService.getArticles(term)),
      map((res) => res.hits)
    );
    this.articlesService.selectedIds.subscribe(
      (selectedIds) => (this.selectedIds = selectedIds)
    );
  }

  receiveArticle(objectID: string) {
    console.log(41, objectID);
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
