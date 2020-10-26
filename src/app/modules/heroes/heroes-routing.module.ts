import { HeroComponent } from './components/hero/hero.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesContainerComponent } from './components/heroes-container/heroes-container.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesContainerComponent,
  },
  {
    path: ':id',
    component: HeroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
