import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBolicheComponent } from './editar-boliche.component';

describe('EditarBolicheComponent', () => {
  let component: EditarBolicheComponent;
  let fixture: ComponentFixture<EditarBolicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarBolicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarBolicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
