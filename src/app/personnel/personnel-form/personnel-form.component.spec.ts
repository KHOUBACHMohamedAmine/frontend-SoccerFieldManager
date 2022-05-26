import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelFormComponent } from './personnel-form.component';

describe('PersonnelFormComponent', () => {
  let component: PersonnelFormComponent;
  let fixture: ComponentFixture<PersonnelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnelFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
