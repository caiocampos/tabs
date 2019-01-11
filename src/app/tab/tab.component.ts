import { Component, OnInit, Input } from '@angular/core';
import { Tab } from '../tab';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() tab: Tab;

  constructor(private tabService: TabService) { }

  ngOnInit() {
  }

  isActive() {
    return this.tabService.getCurrent() === this.tab.id;
  }

  activate() {
    this.tabService.setCurrent(this.tab.id);
  }
}
