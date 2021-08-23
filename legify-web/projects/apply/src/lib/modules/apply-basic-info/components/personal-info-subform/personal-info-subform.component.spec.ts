import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoSubformComponent } from './personal-info-subform.component';

describe('PersonalInfoSubformComponent', () => {
  let component: PersonalInfoSubformComponent;
  let fixture: ComponentFixture<PersonalInfoSubformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInfoSubformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoSubformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
