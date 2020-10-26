import { HeroesStoreService } from './../../services/heroes-store.service';
import { HeroService } from '@app/modules/heroes/services/hero.service';
import { RootStoreService } from './../../../../services/root-store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  template: `<h1>Hero Detail:</h1>
    <ng-container *ngIf="heroesStoreService.hero$ | async as hero">
      <p><b>Title:</b> {{ hero.title }}</p>
      <p><b>Author:</b> {{ hero.author }}</p>
    </ng-container>
    <ng-container *ngIf="rootStoreService.loading$ | async">
      <mat-spinner></mat-spinner>
    </ng-container> `,
  styleUrls: ['./hero.component.less'],
})
export class HeroComponent implements OnInit {
  public loading: boolean;
  constructor(
    public rootStoreService: RootStoreService,
    private heroService: HeroService,
    public heroesStoreService: HeroesStoreService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(`${id}`).subscribe();
  }
}
