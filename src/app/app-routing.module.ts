import { ViewChildComponent } from './view-child/view-child.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent },
  { path: 'view-child', component: ViewChildComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'heroes',
    loadChildren: () =>
      import('@app/modules/heroes/heroes.module').then((m) => m.HeroesModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
