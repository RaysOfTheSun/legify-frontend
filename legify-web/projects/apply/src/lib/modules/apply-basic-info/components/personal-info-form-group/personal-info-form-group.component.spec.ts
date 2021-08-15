import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoFormGroupComponent } from './personal-info-form-group.component';

describe('PersonalInfoFormGroupComponent', () => {
  let component: PersonalInfoFormGroupComponent;
  let fixture: ComponentFixture<PersonalInfoFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInfoFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
