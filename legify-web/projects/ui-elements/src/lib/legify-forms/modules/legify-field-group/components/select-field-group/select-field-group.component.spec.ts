import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFieldGroupComponent } from './select-field-group.component';

describe('SelectFieldGroupComponent', () => {
  let component: SelectFieldGroupComponent;
  let fixture: ComponentFixture<SelectFieldGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFieldGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFieldGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
