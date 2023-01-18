import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagePathPipe } from './_pipes/image-path.pipe';
import { HeroListItemComponent } from './hero-list-item/hero-list-item.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

@NgModule({
  declarations: [AppComponent, ImagePathPipe, HeroListItemComponent, HeroDetailsComponent, HeroesListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
