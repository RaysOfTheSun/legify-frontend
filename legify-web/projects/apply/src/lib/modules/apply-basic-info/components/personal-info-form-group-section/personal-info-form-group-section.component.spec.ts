import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoFormGroupSectionComponent } from './personal-info-form-group-section.component';

describe('PersonalInfoFormGroupSectionComponent', () => {
  let component: PersonalInfoFormGroupSectionComponent;
  let fixture: ComponentFixture<PersonalInfoFormGroupSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInfoFormGroupSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoFormGroupSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
