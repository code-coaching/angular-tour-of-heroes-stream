import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../models';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.scss']
})
export class HeroesDetailComponent implements OnInit {

  heroes: Array<Hero> = [
    { number: 11, name: 'Narco' },
    { number: 12, name: 'Bombasto' },
    { number: 13, name: 'Celeritas' },
    { number: 14, name: 'Magneta' },
    { number: 11, name: 'Angelique' },
    { number: 12, name: 'Bieke' },
    { number: 13, name: 'Romy' },
    { number: 14, name: 'Barry' },
  ]

  hero: Hero = {} as Hero;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const heroId = Number(this.route.snapshot.paramMap.get('id'));
    const matchingHero = this.heroes.find(hero => hero.number === heroId);
    if (matchingHero) {
      this.hero = matchingHero;
    }
  }

  navigateBack(): void {
    this.location.back();
  }

}
