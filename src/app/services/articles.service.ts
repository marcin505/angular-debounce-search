import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<ArticlesResponse>(`${this.url}?query=${query}`);
  }
}
