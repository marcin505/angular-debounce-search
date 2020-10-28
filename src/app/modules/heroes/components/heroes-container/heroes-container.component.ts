import { HeroesStoreService } from './../../services/heroes-store.service';
import { RootStoreService } from './../../../../services/root-store.service';
import { Hit } from '@app/types/article';
import { HeroService } from '@app/modules/heroes/services/hero.service';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-heroes-container',
  template: `
    <h1>Heroes:</h1>
    <ng-container
      *ngIf="heroesStoreService.heroes$ | async as heroes; else empty"
    >
      <div class="heroes">
        <ng-container *ngFor="let hero of heroes; trackBy: trackByFn">
          <a routerLink="{{ hero.objectID }}">{{ hero.title }}</a
          ><br />
        </ng-container>
      </div>
    </ng-container>
    <ng-template #empty>
      <h1>No heroes</h1>
    </ng-template>
    <mat-spinner *ngIf="rootStoreService.loading$ | async"></mat-spinner>
  `,
  styleUrls: ['./heroes-container.component.less'],
})
export class HeroesContainerComponent implements OnInit, OnDestroy {
  public loading: boolean;
  private subscriptions: Subscription[] = [];
  constructor(
    private heroService: HeroService,
    public rootStoreService: RootStoreService,
    public heroesStoreService: HeroesStoreService
  ) {}

  ngOnInit(): void {
    this.registerSubscriptions(this.heroService.getHeroes().subscribe());
  }

  trackByFn(_: string, hero: Hit): string {
    return hero.objectID;
  }

  registerSubscriptions(subscription: Subscription) {
    this.subscriptions = [...this.subscriptions, subscription];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.heroesStoreService.setHeroes([]);
  }
}
