import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, Input } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { SoundService } from '../sound.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit {
  // Captura múltiplos elementos
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  // @ViewChildren(TabComponent) tabs: QueryList<TabComponent>;

  // Captura um elemento
  // @ContentChild(TabComponent) tab: TabComponent;
  // @ViewChild(TabComponent) tab: TabComponent;

  // @ContentChildren e @ContentChild somente após ngAfterContentInit() da interface AfterContentInit
  // @ViewChildren e @ViewChild somente após ngAfterViewInit() da interface AfterViewInit

  @Input() clickSoundResource: string;

  activeTab: string = null;

  private snd = null;

  constructor(private soundService: SoundService) { }

  ngOnInit() {
    this.snd = this.soundService.instantiateSound(this.clickSoundResource);
  }

  ngAfterContentInit(): void {
    const active: TabComponent = this.tabs.find(tab => tab.active === 'true');
    if (active) {
      active.activate();
      this.activeTab = active.id;
    } else {
      this.activeTab = null;
    }
  }

  activate(tab: TabComponent): void {
    tab.playSound(this.snd);
    tab.activate();
    this.activeTab = tab.id;
  }
}
