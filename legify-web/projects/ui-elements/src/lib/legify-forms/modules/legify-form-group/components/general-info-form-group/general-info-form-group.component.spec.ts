import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInfoFormGroupComponent } from './general-info-form-group.component';

describe('GeneralInfoFormGroupComponent', () => {
  let component: GeneralInfoFormGroupComponent;
  let fixture: ComponentFixture<GeneralInfoFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInfoFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInfoFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
