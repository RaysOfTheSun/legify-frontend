import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupFormControlComponent } from './radio-group-form-control.component';

describe('RadioGroupFormControlComponent', () => {
  let component: RadioGroupFormControlComponent;
  let fixture: ComponentFixture<RadioGroupFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioGroupFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioGroupFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
