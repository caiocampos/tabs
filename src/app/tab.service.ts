import { Injectable } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  currentRout = 'home';

  constructor(private routingModule: AppRoutingModule) { }

  setCurrent(rout: string) {
    this.currentRout = this.routingModule.getRoute(rout);
  }

  getCurrent() {
    return this.currentRout;
  }
}
