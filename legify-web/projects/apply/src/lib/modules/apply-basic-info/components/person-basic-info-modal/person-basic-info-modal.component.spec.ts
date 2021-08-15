import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonBasicInfoModalComponent } from './person-basic-info-modal.component';

describe('PersonBasicInfoModalComponent', () => {
  let component: PersonBasicInfoModalComponent;
  let fixture: ComponentFixture<PersonBasicInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonBasicInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonBasicInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
