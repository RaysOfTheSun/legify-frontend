import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonGroupFormControlComponent } from './radio-button-group-form-control.component';

describe('RadioButtonGroupFormControlComponent', () => {
  let component: RadioButtonGroupFormControlComponent;
  let fixture: ComponentFixture<RadioButtonGroupFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtonGroupFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonGroupFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
