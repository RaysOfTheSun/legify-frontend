import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldGroupComponent } from './input-field-group.component';

describe('InputFieldGroupComponent', () => {
  let component: InputFieldGroupComponent;
  let fixture: ComponentFixture<InputFieldGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
