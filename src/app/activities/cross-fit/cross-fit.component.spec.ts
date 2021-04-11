import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossFitComponent } from './cross-fit.component';

describe('CrossFitComponent', () => {
  let component: CrossFitComponent;
  let fixture: ComponentFixture<CrossFitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossFitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
