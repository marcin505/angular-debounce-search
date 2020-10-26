import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Hit } from '@app/types/article';

@Injectable({
  providedIn: 'root',
})
export class HeroesStoreService {
  private readonly _heroes = new BehaviorSubject<Hit[]>([]);
  readonly heroes$ = this._heroes.asObservable();

  private readonly _hero = new BehaviorSubject<Hit | null>(null);
  readonly hero$ = this._hero.asObservable();

  setHeroes(heroes: Hit[]) {
    this._heroes.next(heroes);
  }

  setHero(hero: Hit) {
    this._hero.next(hero);
  }
}
