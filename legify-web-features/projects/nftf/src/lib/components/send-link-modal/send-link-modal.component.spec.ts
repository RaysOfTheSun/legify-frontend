import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendLinkModalComponent } from './send-link-modal.component';

describe('SendLinkModalComponent', () => {
  let component: SendLinkModalComponent;
  let fixture: ComponentFixture<SendLinkModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendLinkModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendLinkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
