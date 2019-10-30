import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [TabsComponent, TabComponent],
  imports: [BrowserModule, FormsModule],
  exports: [TabsComponent, TabComponent]
})
export class TabsModule { }
