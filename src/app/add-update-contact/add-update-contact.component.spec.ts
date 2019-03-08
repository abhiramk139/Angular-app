import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateContactComponent } from './add-update-contact.component';

describe('AddUpdateContactComponent', () => {
  let component: AddUpdateContactComponent;
  let fixture: ComponentFixture<AddUpdateContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
