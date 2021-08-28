import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUploadInputComponent } from './document-upload-input.component';

describe('DocumentUploadInputComponent', () => {
  let component: DocumentUploadInputComponent;
  let fixture: ComponentFixture<DocumentUploadInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentUploadInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentUploadInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
