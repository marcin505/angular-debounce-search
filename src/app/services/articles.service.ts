import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { ArticlesResponse } from '../types/article';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private url = 'https://hn.algolia.com/api/v1/search';
  public selectedIds = new BehaviorSubject<string[]>([]);

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result);
    };
  }

  constructor(private http: HttpClient) {}

  getArticles(query: string): Observable<ArticlesResponse> {
    const params = new HttpParams().set('query', query);
    this.selectedIds.next([]);
    return this.http.get<ArticlesResponse>(`${this.url}`, { params });
    // .pipe(catchError(this.handleError<ArticlesResponse>('getArticles')));
  }

  changeIds(id: string) {
    const isIdPresent = this.selectedIds.value.find((x) => x === id);
    this.selectedIds.next(
      isIdPresent
        ? this.selectedIds.value.filter((x) => x !== id)
        : [...this.selectedIds.value, id]
    );
    console.log(this.selectedIds.value);
  }
}
