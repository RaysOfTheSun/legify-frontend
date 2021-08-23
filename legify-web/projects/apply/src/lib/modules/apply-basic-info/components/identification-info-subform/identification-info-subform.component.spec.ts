import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationInfoSubformComponent } from './identification-info-subform.component';

describe('IdentificationInfoSubformComponent', () => {
  let component: IdentificationInfoSubformComponent;
  let fixture: ComponentFixture<IdentificationInfoSubformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificationInfoSubformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificationInfoSubformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
