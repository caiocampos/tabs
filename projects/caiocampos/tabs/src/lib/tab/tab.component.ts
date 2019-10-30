import { Component, OnInit, Input } from '@angular/core';
import { TabService } from '../service/tab.service';
import { SoundService } from '../service/sound.service';

@Component({
  selector: 'tb-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() id: string;
  @Input() description: string;
  @Input() clickSoundResource: string;
  @Input() active = 'false';
  @Input() position = 'left';

  private snd = null;

  constructor(private tabService: TabService, private soundService: SoundService) { }

  /**
   * Instancia o arquivo de áudio localizado pelo atributo clickSoundResource
   */
  ngOnInit() {
    this.snd = this.soundService.instantiateSound(this.clickSoundResource, false);
  }

  /**
   * Verifica se esta aba é a aba ativa
   */
  isActive(): boolean {
    return this.tabService.getCurrent() === this.id;
  }

  /**
   * Marca esta aba como a aba ativa
   */
  activate(): void {
    this.tabService.setCurrent(this.id);
  }

  /**
   * Executa o arquivo de áudio vinculado ao componente (this.snd)
   * ou, se este for nulo, o snd recebido como parâmetro
   * @param snd elemento de áudio padrão, usado caso a aba não possua o próprio elemento de áudio
   */
  playSound(snd: HTMLAudioElement): void {
    const sound = this.snd ? this.snd : snd;
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  }
}
