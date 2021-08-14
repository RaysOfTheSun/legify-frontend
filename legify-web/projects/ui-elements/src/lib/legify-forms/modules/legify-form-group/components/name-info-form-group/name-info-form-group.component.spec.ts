import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameInfoFormGroupComponent } from './name-info-form-group.component';

describe('NameInfoFormGroupComponent', () => {
  let component: NameInfoFormGroupComponent;
  let fixture: ComponentFixture<NameInfoFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameInfoFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameInfoFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
