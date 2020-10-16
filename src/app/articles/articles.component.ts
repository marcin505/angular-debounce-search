import { Component, OnInit, OnChanges } from '@angular/core';
import { ArticlesService } from './../services/articles.service';
import { Hit } from '../types/article';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map,
  toArray,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less'],
})
export class ArticlesComponent implements OnInit {
  articles$: Observable<Hit[]>;
  selectedIds: string[];
  public term: string;

  private searchTerms = new Subject<string>();
  constructor(public articlesService: ArticlesService) {}
  ngOnInit(): void {
    this.articles$ = this.articlesService.searchTerms.pipe(
      tap((val) => (this.term = val)),
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
}
