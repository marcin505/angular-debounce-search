import { RootStoreService } from './services/root-store.service';
import { HeroesModule } from './modules/heroes/heroes.module';
import { ToasterModule } from './modules/toaster';
import { FormBuilderModuleModule } from './modules/form-builder-module/form-builder-module.module';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './article/article.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleComponent,
    ViewChildComponent,
    ChildComponent,
    SiblingComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormBuilderModuleModule,
    ToasterModule,
    BrowserAnimationsModule,
    MatSelectModule,
  ],
  providers: [DataService, RootStoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
