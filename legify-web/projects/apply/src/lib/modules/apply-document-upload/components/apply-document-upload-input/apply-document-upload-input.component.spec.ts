import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyDocumentUploadInputComponent } from './apply-document-upload-input.component';

describe('ApplyDocumentUploadInputComponent', () => {
  let component: ApplyDocumentUploadInputComponent;
  let fixture: ComponentFixture<ApplyDocumentUploadInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyDocumentUploadInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyDocumentUploadInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
