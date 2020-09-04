import { Component, OnInit, OnChanges } from '@angular/core';
import { ArticlesService } from './../services/articles.service';
import { ArticlesResponse, Hit } from '../types/article';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map,
} from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less'],
})
export class ArticlesComponent implements OnInit {
  articles$: Observable<Hit[]>;
  private searchTerms = new Subject<string>();
  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    // this.articlesService.getArticles('angular').subscribe(
    //   (response: ArticlesResponse) =>
    //     (this.articles$ = response.hits.map((hit) => ({
    //       ...hit,
    //       selected: false,
    //     })))
    // );
    this.articles$ = this.searchTerms.pipe(
      debounceTime(800),
      distinctUntilChanged(),
      switchMap((term: string) => this.articlesService.getArticles(term)),
      map((res) => res.hits)
    );
  }

  // selectArticle(objectID: string): void {
  //   this.articles$ = this.articles$.map((article: Hit) => ({
  //     ...article,
  //     selected:
  //       article.objectID === objectID ? !article.selected : article.selected,
  //   }));
  // }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
