import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './article/article.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [AppComponent, ArticlesComponent, ArticleComponent, ViewChildComponent, ChildComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
