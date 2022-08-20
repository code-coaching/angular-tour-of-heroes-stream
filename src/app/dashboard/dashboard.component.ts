import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes = [
    { id: 0, name: 'Narco'},
    { id: 1, name: 'Bombasto'},
    { id: 2, name: 'Celeritas'},
    { id: 3, name: 'Magneta'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
