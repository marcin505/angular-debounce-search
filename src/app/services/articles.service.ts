import { notifications, ToasterService } from '../modules/toaster/';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, of, Subject } from 'rxjs';
import { ArticlesResponse } from '../types/article';

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
export class ArticlesService {
  private url = 'https://hn.algolia.com/api/v1/search';
  public selectedIds = new BehaviorSubject<string[]>([]);
  public searchTerms = new Subject<string>();

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result);
    };
  }

  constructor(
    private http: HttpClient,
    private toasterService: ToasterService
  ) {}

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
}
