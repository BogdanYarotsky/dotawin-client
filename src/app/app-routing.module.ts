import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

const routes: Routes = [
  { path: "", component: HeroesListComponent },
  { path: "heroes/:id", component: HeroDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
