import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  heroes = [
    { id: 11, name: 'Narco' },
    { id: 12, name: 'Bombasto' },
    { id: 13, name: 'Celeritas' },
    { id: 14, name: 'Magneta' },
    { id: 11, name: 'Angelique' },
    { id: 12, name: 'Bieke' },
    { id: 13, name: 'Romy' },
    { id: 14, name: 'Barry' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
