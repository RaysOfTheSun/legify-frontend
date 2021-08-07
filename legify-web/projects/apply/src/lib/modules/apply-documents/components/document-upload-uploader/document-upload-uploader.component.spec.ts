import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUploadUploaderComponent } from './document-upload-uploader.component';

describe('DocumentUploadUploaderComponent', () => {
  let component: DocumentUploadUploaderComponent;
  let fixture: ComponentFixture<DocumentUploadUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentUploadUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentUploadUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
