import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPatovaComponent } from './crear-patova.component';

describe('CrearPatovaComponent', () => {
  let component: CrearPatovaComponent;
  let fixture: ComponentFixture<CrearPatovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPatovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPatovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
