import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  heroList$!: Observable<HeroList>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.heroList$ = this.http.get<HeroList>('https://localhost:7168/heroes');
  }
}

interface HeroList {
  strongHeroes: Hero[];
  weakHeroes: Hero[];
}

interface Hero {
  id: number;
  name: string;
  winrate: number;
}
