import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private currentTab: string = null;

  constructor() { }

  setCurrent(tab: string) {
    this.currentTab = tab;
  }

  getCurrent() {
    return this.currentTab;
  }
}
