import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-hero-list-item',
  templateUrl: './hero-list-item.component.html',
  styleUrls: ['./hero-list-item.component.css']
})
export class HeroListItemComponent implements OnInit {
  @Input() hero!: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
