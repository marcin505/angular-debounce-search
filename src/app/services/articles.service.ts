import { notifications, ToasterService } from '../modules/toaster/';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  Observable,
  BehaviorSubject,
  of,
  Subject,
  combineLatest,
  interval,
} from 'rxjs';
import { ArticlesResponse, Hit } from '../types/article';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';

const getFirstWords = (title: string): string => {
  const firstWords = title.split(' ').reduce((acc, cur, index) => {
    if (!index) return cur;
    return index < 4 ? `${acc} ${cur}` : acc;
  }, '');
  return `${firstWords}...`;
};

@Injectable({
  providedIn: 'root',
})
export class ArticlesService implements OnInit {
  private url = 'https://hn.algolia.com/api/v1/search';
  public selectedIds = new BehaviorSubject<string[]>([]);
  public searchTerms = new Subject<string>();
  public articles$: Observable<Hit[]>;
  public slicedArticles$: Observable<Hit[]>;

  private _pageSize = new BehaviorSubject<number>(20);
  public pageSize$ = this._pageSize.asObservable();

  public term: string;
  constructor(
    private http: HttpClient,
    private toasterService: ToasterService
  ) {
    this.articles$ = this.searchTerms.pipe(
      tap((val) => (this.term = val)),
      debounceTime(800),
      distinctUntilChanged(),
      switchMap((term: string) => this.getArticles(term)),
      map((res) => res.hits)
    );

    this.slicedArticles$ = combineLatest(
      this.articles$,
      this.pageSize$,
      (articles, pageSize) => {
        return articles.slice(0, pageSize);
      }
    );
  }

  ngOnInit(): void {
    this.articles$.subscribe(console.log);
  }

  getArticles(query: string): Observable<ArticlesResponse> {
    const params = new HttpParams().set('query', query);
    this.selectedIds.next([]);
    return this.http.get<ArticlesResponse>(`${this.url}`, { params });
  }

  changeIds(id: string, title: string, isSelected: boolean) {
    const isIdPresent = this.selectedIds.value.find((x) => x === id);
    this.toasterService.show(
      isSelected ? notifications.WARNING : notifications.SUCCESS,
      isSelected ? 'Warning!' : 'Success!',
      `${getFirstWords(title)} got ${isSelected ? 'un' : ''}selected`
    );
    this.selectedIds.next(
      isIdPresent
        ? this.selectedIds.value.filter((x) => x !== id)
        : [...this.selectedIds.value, id]
    );
  }
  setSearchTerms(term: string): void {
    this.searchTerms.next(term);
  }

  setPageSize(pageSize: number): void {
    this._pageSize.next(pageSize);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result);
    };
  }
}
