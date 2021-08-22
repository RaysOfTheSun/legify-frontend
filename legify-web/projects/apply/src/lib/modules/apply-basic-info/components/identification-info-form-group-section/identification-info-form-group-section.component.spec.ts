import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationInfoFormGroupSectionComponent } from './identification-info-form-group-section.component';

describe('IdentificationInfoFormGroupSectionComponent', () => {
  let component: IdentificationInfoFormGroupSectionComponent;
  let fixture: ComponentFixture<IdentificationInfoFormGroupSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificationInfoFormGroupSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificationInfoFormGroupSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
