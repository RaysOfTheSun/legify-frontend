import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationInfoFormGroupComponent } from './identification-info-form-group.component';

describe('IdentificationInfoFormGroupComponent', () => {
  let component: IdentificationInfoFormGroupComponent;
  let fixture: ComponentFixture<IdentificationInfoFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificationInfoFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificationInfoFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
