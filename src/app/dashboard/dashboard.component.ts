import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes = [
    { id: 11, name: 'Narco'},
    { id: 12, name: 'Bombasto'},
    { id: 13, name: 'Celeritas'},
    { id: 14, name: 'Magneta'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
