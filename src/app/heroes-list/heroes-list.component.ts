import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroList } from '../HeroList';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroList$!: Observable<HeroList>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.heroList$ = this.http.get<HeroList>('https://localhost:7168/heroes');
  }
}
