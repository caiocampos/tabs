import { Injectable } from '@angular/core';
import { BaconIpsum } from '../model/bacon-ipsum';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaconIpsumService {
  private baseUrl = 'https://baconipsum.com/api/';

  constructor(private http: HttpClient) { }

  /**
   * Faz a requisição na api do site baconipsum.com para recuperar o JSON aleatório
   * @param p parâmetros para a requisição
   */
  get(p: BaconIpsum): Observable<string[]> {
    const params = new HttpParams()
      .set('type', p.type ? 'all-meat' : 'meat-and-filler')
      .set('paras', p.paragraphs.toString())
      .set('start-with-lorem', p.startWithLorem ? '1' : '0')
      .set('format', 'json');

    return this.http.get<string[]>(this.baseUrl, { params: params });
  }
}
