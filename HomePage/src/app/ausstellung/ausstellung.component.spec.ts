import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AusstellungComponent } from './ausstellung.component';

describe('AusstellungComponent', () => {
  let component: AusstellungComponent;
  let fixture: ComponentFixture<AusstellungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AusstellungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AusstellungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
