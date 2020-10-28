import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesContainerComponent } from './components/heroes-container/heroes-container.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HeroComponent } from './components/hero/hero.component';
import { HeroesStoreService } from './services/heroes-store.service';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [HeroesContainerComponent, HeroComponent],
  imports: [CommonModule, HeroesRoutingModule, MatProgressSpinnerModule],
  exports: [HeroesContainerComponent, HeroComponent],
  // providers: [HeroesStoreService],
})
export class HeroesModule {}
