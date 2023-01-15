import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroImagePathPipe } from './_pipes/hero-image-path.pipe';
import { HeroListItemComponent } from './hero-list-item/hero-list-item.component';

@NgModule({
  declarations: [AppComponent, HeroImagePathPipe, HeroListItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
