import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitMamaComponent } from './fit-mama.component';

describe('FitMamaComponent', () => {
  let component: FitMamaComponent;
  let fixture: ComponentFixture<FitMamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitMamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitMamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
