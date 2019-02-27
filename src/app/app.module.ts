import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleService } from './_services/article.service';
import { TodayPopsComponent } from './articles/today-pops/today-pops.component';
import { NewestComponent } from './articles/newest/newest.component';
import { MostPopularComponent } from './articles/most-popular/most-popular.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './_services/user.service';
import { AlertifyService } from './_services/alertify.service';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      ArticlesComponent,
      TodayPopsComponent,
      NewestComponent,
      MostPopularComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      ArticleService,
      UserService,
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
