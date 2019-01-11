import { Component, OnInit, Input } from '@angular/core';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() id: string;
  @Input() description: string;
  @Input() active = 'false';

  constructor(private tabService: TabService) { }

  ngOnInit() {
  }

  isActive() {
    return this.tabService.getCurrent() === this.id;
  }

  activate() {
    this.tabService.setCurrent(this.id);
  }
}
