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
// import Article  from '../article/article.component'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less'],
})
export class ArticlesComponent implements OnInit {
  articles$: Observable<Hit[]>;
  private searchTerms = new Subject<string>();
  constructor(private articlesService: ArticlesService) {}
  selectedArticles = [];
  ngOnInit(): void {
    this.articles$ = this.searchTerms.pipe(
      debounceTime(800),
      distinctUntilChanged(),
      switchMap((term: string) => this.articlesService.getArticles(term)),
      map((res) => res.hits)
    );
    // this.articles$.subscribe((val) => console.log(36, val));
  }

  // selectArticle(objectID: string): void {
  //   console.log(objectID);
  //   // console.log(this.articles$);
  //   this.articles$.subscribe({
  //     next: (val) => console.log(val),
  //   });
  // }
  receiveArticle(objectID) {
    console.log(41, objectID);
    // this.selectedArticles.push(event);
    // $event.preventDefault();
    // $event.stopPropagation();
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
