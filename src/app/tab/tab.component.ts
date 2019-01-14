import { Component, OnInit, Input } from '@angular/core';
import { TabService } from '../tab.service';
import { SoundService } from '../sound.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() id: string;
  @Input() description: string;
  @Input() clickSoundResource: string;
  @Input() active = 'false';
  @Input() position = 'left';

  private snd = null;

  constructor(private tabService: TabService, private soundService: SoundService) { }

  ngOnInit() {
    this.snd = this.soundService.instantiateSound(this.clickSoundResource, false);
  }

  isActive() {
    return this.tabService.getCurrent() === this.id;
  }

  activate() {
    this.tabService.setCurrent(this.id);
  }

  playSound(snd: HTMLAudioElement): void {
    const sound = this.snd ? this.snd : snd;
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  }
}
