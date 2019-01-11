import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  snd = new Audio('./assets/Electric-spark-sound-effect.mp3');
  activeTab: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    const active = this.tabs.find(tab => tab.active === 'true');
    if (active) {
      active.activate();
      this.activeTab = active.id;
    }
    this.activeTab = undefined;
  }

  activate(tab: TabComponent): any {
    this.activeTab = tab.id;
    tab.activate();
    this.snd.currentTime = 0;
    this.snd.play();
  }

}
