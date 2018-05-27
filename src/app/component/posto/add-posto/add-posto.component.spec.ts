import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostoComponent } from './add-posto.component';

describe('AddPostoComponent', () => {
  let component: AddPostoComponent;
  let fixture: ComponentFixture<AddPostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
