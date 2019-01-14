import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  private defaultSnd = './assets/snd/Blooper-sound-effect.mp3';
  private assets = [];

  constructor() { }

  instantiateSound(path: string, useDefault: boolean = true): HTMLAudioElement {
    if (!path) {
      if (useDefault) {
        path = this.defaultSnd;
      } else {
        return null;
      }
    }
    let res: HTMLAudioElement = this.assets[path];
    if (!res) {
      res = this.assets[path] = new Audio(path);
    }
    return res;
  }
}
