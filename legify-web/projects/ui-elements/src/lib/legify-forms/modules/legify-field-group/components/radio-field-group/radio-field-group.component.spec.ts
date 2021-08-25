import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioFieldGroupComponent } from './radio-field-group.component';

describe('RadioFieldGroupComponent', () => {
  let component: RadioFieldGroupComponent;
  let fixture: ComponentFixture<RadioFieldGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioFieldGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioFieldGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
