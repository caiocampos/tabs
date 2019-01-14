import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bacon-ipsum',
  templateUrl: './bacon-ipsum.component.html',
  styleUrls: ['./bacon-ipsum.component.css']
})
export class BaconIpsumComponent implements OnInit {

  data = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Array<any>>('https://baconipsum.com/api/?type=all-meat&paras=90&start-with-lorem=1&format=json')
    .subscribe(res => this.data = res, () => this.data = []);
  }
}
