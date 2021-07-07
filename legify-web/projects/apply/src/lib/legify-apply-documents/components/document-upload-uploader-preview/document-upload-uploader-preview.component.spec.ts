import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUploadUploaderPreviewComponent } from './document-upload-uploader-preview.component';

describe('DocumentUploadUploaderPreviewComponent', () => {
  let component: DocumentUploadUploaderPreviewComponent;
  let fixture: ComponentFixture<DocumentUploadUploaderPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentUploadUploaderPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentUploadUploaderPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
