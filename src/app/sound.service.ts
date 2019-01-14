import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  private defaultSnd = './assets/snd/Hit-sound.mp3';
  private assets = [];

  constructor() { }

  public instantiateSound(path: string): HTMLAudioElement {
    path = path ? path : this.defaultSnd;
    let res: HTMLAudioElement = this.assets[path];
    if (!res) {
      res = this.assets[path] = new Audio(path);
    }
    return res;
  }
}
