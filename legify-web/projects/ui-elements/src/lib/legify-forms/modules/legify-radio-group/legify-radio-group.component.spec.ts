import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegifyRadioGroupComponent } from './legify-radio-group.component';

describe('LegifyRadioGroupComponent', () => {
  let component: LegifyRadioGroupComponent;
  let fixture: ComponentFixture<LegifyRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegifyRadioGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegifyRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
