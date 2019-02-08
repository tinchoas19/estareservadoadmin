import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosBolicheComponent } from './eventos-boliche.component';

describe('EventosBolicheComponent', () => {
  let component: EventosBolicheComponent;
  let fixture: ComponentFixture<EventosBolicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosBolicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosBolicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
