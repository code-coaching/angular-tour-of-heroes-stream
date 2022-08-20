import { Component, OnInit } from '@angular/core';
import { Hero } from '../models';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
