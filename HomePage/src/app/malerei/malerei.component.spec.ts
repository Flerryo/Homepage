import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalereiComponent } from './malerei.component';

describe('MalereiComponent', () => {
  let component: MalereiComponent;
  let fixture: ComponentFixture<MalereiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalereiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalereiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
