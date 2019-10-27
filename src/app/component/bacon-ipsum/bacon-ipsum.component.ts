import { Component, OnInit } from '@angular/core';
import { BaconIpsumService } from 'src/app/service/bacon-ipsum.service';
import { BaconIpsum } from 'src/app/model/bacon-ipsum';

@Component({
  selector: 'app-bacon-ipsum',
  templateUrl: './bacon-ipsum.component.html',
  styleUrls: ['./bacon-ipsum.component.scss']
})
export class BaconIpsumComponent implements OnInit {
  data: string[] = [];
  paragraphs = 5;
  allMeat = true;
  startWithLorem = true;

  constructor(private baconIpsumService: BaconIpsumService) { }

  /**
   * Faz a primeira requisição para o texto inicial
   */
  ngOnInit() {
    this.requestText();
  }

  /**
   * Faz a requisição pelo texto do Bacon Ipsum
   */
  requestText(): void {
    const params: BaconIpsum = {
      type: this.allMeat,
      paragraphs: this.paragraphs,
      startWithLorem: this.startWithLorem
    };
    this.baconIpsumService.get(params)
      .subscribe(res => this.data = res, () => this.data = []);
  }
}
