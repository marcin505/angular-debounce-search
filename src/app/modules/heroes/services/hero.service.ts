import { HeroesStoreService } from './heroes-store.service';
import { RootStoreService } from './../../../services/root-store.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Hero } from '@app/modules/heroes/types';
import { ArticlesResponse, Hit } from '@app/types/article';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'https://hn.algolia.com/api/v1';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(
    private http: HttpClient,
    private rootStoreService: RootStoreService,
    private heroesStoreService: HeroesStoreService
  ) {}

  getHeroes(): Observable<ArticlesResponse> {
    this.rootStoreService.setLoading(true);
    return this.http
      .get<ArticlesResponse>(`${this.heroesUrl}/search?query=heroes`)
      .pipe(
        tap((response) => {
          this.rootStoreService.setLoading(false);
          this.heroesStoreService.setHeroes(response.hits);
        }),
        catchError(this.handleError<ArticlesResponse>('getHeroes'))
      );
  }

  getHero(id: string): Observable<Hit> {
    const url = `${this.heroesUrl}/items/${id}`;
    this.rootStoreService.setLoading(true);
    return this.http.get<Hit>(url).pipe(
      tap((response) => {
        this.rootStoreService.setLoading(false);
        this.heroesStoreService.setHero(response);
        console.log(`fetched hero id=${id}`);
      }),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
