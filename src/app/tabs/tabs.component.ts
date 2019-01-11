import { Component, OnInit } from '@angular/core';
import { Tab } from '../tab';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  tabs: Tab[] = [
    { id: 'home', description: 'Início' },
    { id: 'dfghjk', description: 'Não existente dfghjk' },
    { id: 'sdfghj', description: 'Não existente sdfghj' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
