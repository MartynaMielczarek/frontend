import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogaComponent } from './joga.component';

describe('JogaComponent', () => {
  let component: JogaComponent;
  let fixture: ComponentFixture<JogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
