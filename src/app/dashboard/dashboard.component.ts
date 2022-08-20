import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes = [
    { number: 11, name: 'Narco'},
    { number: 12, name: 'Bombasto'},
    { number: 13, name: 'Celeritas'},
    { number: 14, name: 'Magneta'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
