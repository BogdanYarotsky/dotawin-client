import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  heroes$!: Observable<Hero[]>;
  stuff$!: Observable<string>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.heroes$ = this.http.get<Hero[]>('https://localhost:7168/heroes');
    this.stuff$ = this.http.get<string>('https://www.dotabuff.com/heroes/troll-warlord/items');
  }
}

interface Hero {
  id: number;
  name: string;
  winrate: number;
}
