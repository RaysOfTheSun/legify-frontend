import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthInfoFormGroupComponent } from './birth-info-form-group.component';

describe('BirthInfoFormGroupComponent', () => {
  let component: BirthInfoFormGroupComponent;
  let fixture: ComponentFixture<BirthInfoFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthInfoFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthInfoFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
