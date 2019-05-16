import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  width = Math.trunc(window.innerWidth * 0.9);
  height = Math.trunc(window.innerHeight * 0.7);

  constructor() { }

  ngOnInit() {
  }
}
