import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaconIpsumComponent } from './bacon-ipsum.component';

describe('BaconIpsumComponent', () => {
  let component: BaconIpsumComponent;
  let fixture: ComponentFixture<BaconIpsumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaconIpsumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaconIpsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
