import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyDocumentUploadPreviewModalComponent } from './apply-document-upload-preview-modal.component';

describe('ApplyDocumentUploadPreviewModalComponent', () => {
  let component: ApplyDocumentUploadPreviewModalComponent;
  let fixture: ComponentFixture<ApplyDocumentUploadPreviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyDocumentUploadPreviewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyDocumentUploadPreviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
