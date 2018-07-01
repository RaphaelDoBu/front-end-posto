import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCombustivelComponent } from './add-combustivel.component';

describe('AddCombustivelComponent', () => {
  let component: AddCombustivelComponent;
  let fixture: ComponentFixture<AddCombustivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCombustivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCombustivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
