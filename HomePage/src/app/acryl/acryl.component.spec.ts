import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrylComponent } from './acryl.component';

describe('AcrylComponent', () => {
  let component: AcrylComponent;
  let fixture: ComponentFixture<AcrylComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcrylComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrylComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
