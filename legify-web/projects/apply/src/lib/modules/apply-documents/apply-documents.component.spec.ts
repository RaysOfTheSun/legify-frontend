import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyDocumentsComponent } from './apply-documents.component';

describe('ApplyDocumentsComponent', () => {
  let component: ApplyDocumentsComponent;
  let fixture: ComponentFixture<ApplyDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
