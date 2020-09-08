import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticlesResponse } from '../types/article';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private url = 'https://hn.algolia.com/api/v1/search';
  constructor(private http: HttpClient) {}

  getArticles(query: string): Observable<ArticlesResponse> {
    const params = new HttpParams().set('query', query);
    return this.http.get<ArticlesResponse>(`${this.url}`, { params });
  }
}
