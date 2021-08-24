import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoSubformComponent } from './contact-info-subform.component';

describe('ContactInfoSubformComponent', () => {
  let component: ContactInfoSubformComponent;
  let fixture: ComponentFixture<ContactInfoSubformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInfoSubformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInfoSubformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
