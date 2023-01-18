import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroDetails } from '../HeroDetails';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  heroDetails$!: Observable<HeroDetails>;

  constructor(private route: ActivatedRoute, private http: HttpClient) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.heroDetails$ = this.http.get<HeroDetails>(`https://localhost:7168/heroes/${id}`)
  }
}


