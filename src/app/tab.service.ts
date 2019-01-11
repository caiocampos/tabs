import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  currentRout: string;

  constructor() { }

  setCurrent(rout: string) {
    this.currentRout = rout;
  }

  getCurrent() {
    return this.currentRout;
  }
}
