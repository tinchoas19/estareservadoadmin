import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBolicheComponent } from './lista-boliche.component';

describe('ListaBolicheComponent', () => {
  let component: ListaBolicheComponent;
  let fixture: ComponentFixture<ListaBolicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBolicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBolicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
