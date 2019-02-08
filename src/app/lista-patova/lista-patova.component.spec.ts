import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPatovaComponent } from './lista-patova.component';

describe('ListaPatovaComponent', () => {
  let component: ListaPatovaComponent;
  let fixture: ComponentFixture<ListaPatovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPatovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPatovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
