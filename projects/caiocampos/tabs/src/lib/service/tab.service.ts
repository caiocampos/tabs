import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private currentTab: string = null;

  constructor() { }

  /**
   * Altera qual aba está selecionada
   * @param tab id da aba selecionada
   */
  setCurrent(tab: string): void {
    this.currentTab = tab;
  }

  /**
   * Recupera a aba que está selecionada
   */
  getCurrent(): string {
    return this.currentTab;
  }
}
