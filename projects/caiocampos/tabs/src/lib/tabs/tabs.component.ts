import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, Input } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { SoundService } from '../service/sound.service';

@Component({
  selector: 'tb-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit {
  // Captura múltiplos elementos
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  // @ViewChildren(TabComponent) tabs: QueryList<TabComponent>;

  // Captura um elemento
  // @ContentChild(TabComponent) tab: TabComponent;
  // @ViewChild(TabComponent) tab: TabComponent;

  /* @ContentChildren e @ContentChild recebem conteúdo somente antes da chamada do ngAfterContentInit()
     da interface AfterContentInit, possuem a capacidade de acessar os elementos "filho" que serão
     incluídos através da transclusão pelo <ng-content>
  */
  /* @ViewChildren e @ViewChild recebem conteúdo somente antes da chamada do ngAfterViewInit() da
     interface AfterViewInit, possuem a capacidade de acessar os elementos "filho" que estão dentro do
     template (neste componente a tag <nav> seria capturada)
  */

  @Input() clickSoundResource: string;

  activeTab: string = null;
  leftTabs = [];
  centerTabs = [];
  rightTabs = [];

  private snd = null;

  constructor(private soundService: SoundService) { }

  /**
   * Instancia o arquivo de áudio localizado pelo atributo clickSoundResource
   */
  ngOnInit() {
    this.snd = this.soundService.instantiateSound(this.clickSoundResource);
  }

  /**
   * Coloca como ativa a primeira aba com o atributo active 'true' e alimenta os containers de abas
   */
  ngAfterContentInit(): void {
    const active: TabComponent = this.tabs.find(tab => tab.active === 'true');
    if (active) {
      active.activate();
      this.activeTab = active.id;
    } else {
      this.activeTab = null;
    }
    this.tabs.changes.subscribe(() => {
      this.updateTabs();
    });
    this.updateTabs();
  }

  /**
   * Atualiza o conteúdo dos containers de abas (laterais e central)
   */
  private updateTabs(): void {
    this.leftTabs = [];
    this.centerTabs = [];
    this.rightTabs = [];
    this.tabs.forEach(tab => {
      switch (tab.position) {
        case 'right':
          this.rightTabs.push(tab);
          break;
        case 'center':
          this.centerTabs.push(tab);
          break;
        default:
          this.leftTabs.push(tab);
      }
    });
  }

  /**
   * Desencadeia o processo de ativação de uma aba
   * @param tab id da aba a ser ativada
   */
  activate(tab: TabComponent): void {
    tab.playSound(this.snd);
    tab.activate();
    this.activeTab = tab.id;
  }
}
